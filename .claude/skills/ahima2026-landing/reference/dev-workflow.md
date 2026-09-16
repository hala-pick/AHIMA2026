# Dev workflow

## Running it

```bash
cd C:/ReviewMate/workspace/AHIMA2026-Landing
npm install   # first time only
npm run dev   # Vite dev server, defaults to http://localhost:5173
npm run build # production build check — run this before calling a change done
```

This project has **its own git repo**, separate from `C:\ReviewMate\workspace\Reviewmate`.
`git status`/`git log` run from the main Reviewmate repo tell you nothing about
this project's history, and vice versa. Don't assume a `.gitignore` check or
commit in one repo covers the other.

`npm run build` outputs to `dist/` (gitignored by the default Vite
`.gitignore` — `node_modules`, `dist`, `dist-ssr` are already covered, no
changes needed there).

## Previewing in the Claude Browser pane

The Claude Browser pane's `preview_start` tool reads `.claude/launch.json`
**relative to the session's primary working directory**, which for this
project's sessions is typically the main `Reviewmate` repo
(`C:\ReviewMate\workspace\Reviewmate`), not this project's own folder. Because
of that, the launch config was placed at
`C:\ReviewMate\workspace\Reviewmate\.claude\launch.json` (not inside this
project) using npm's `--prefix` flag to point at this project's folder without
needing the tool to support a `cwd` field:

```json
{
  "version": "0.0.1",
  "configurations": [
    {
      "name": "ahima2026-landing",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["--prefix", "C:/ReviewMate/workspace/AHIMA2026-Landing", "run", "dev"],
      "port": 5173
    }
  ]
}
```

If that file is missing (e.g. a fresh checkout, or it got reverted), recreate
it, or just skip `preview_start` and instead run `npm run dev` directly via
Bash from this project's folder, then use the Browser pane's `navigate` tool
to open `http://localhost:5173` manually — both approaches end up at the same
running dev server.

## Verifying changes

Read `gotchas.md` before concluding a screenshot shows a real layout bug — the
Browser pane's screenshot capture has a known transient artifact after
scroll/resize that looks like a broken layout but isn't. Cross-check with
`javascript_tool` (`window.innerWidth`, `getBoundingClientRect()`) before
reporting a visual bug you can't otherwise explain.

Always reset any custom `resize_window` viewport back to `preset: "desktop"`
when you're done testing a breakpoint — it persists across subsequent tool
calls within the session otherwise.
