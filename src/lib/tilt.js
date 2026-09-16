// Only tilt for precise pointers (mouse/trackpad) with no reduced-motion preference —
// touch devices don't send meaningful mousemove data, and this is a phone-first page.
export function supportsTilt() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

// mousemove can fire far more often than the screen can repaint (well over
// 60/sec on a high-poll-rate mouse or trackpad). Without this, every event
// forces a synchronous getBoundingClientRect() + style write, which is a
// classic main-thread jank source. Coalesce to at most one update per frame.
const pending = new WeakSet();

// Shared hover-tilt handlers for "raised panel" cards. Pair with the
// `.tilt-card` class (see global.css) for the touch-device ambient fallback.
export function handleTiltMove(e, { maxTiltX = 10, maxTiltY = 12, lift = 6, perspective = 800 } = {}) {
  if (!supportsTilt()) return;
  const el = e.currentTarget;
  if (pending.has(el)) return;
  pending.add(el);
  const { clientX, clientY } = e;

  requestAnimationFrame(() => {
    pending.delete(el);
    const rect = el.getBoundingClientRect();
    const px = (clientX - rect.left) / rect.width - 0.5;
    const py = (clientY - rect.top) / rect.height - 0.5;
    el.style.transition = "none";
    el.style.transform = `perspective(${perspective}px) rotateX(${py * -maxTiltX}deg) rotateY(${px * maxTiltY}deg) translateY(-${lift}px)`;
  });
}

export function handleTiltLeave(e) {
  const el = e.currentTarget;
  pending.delete(el);
  el.style.transition = "";
  el.style.transform = "";
}
