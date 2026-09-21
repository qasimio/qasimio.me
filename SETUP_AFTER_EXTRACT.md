# After extracting the scaffold

This archive is intentionally lockfile-free so the dependencies resolve cleanly from the exact `package.json` rather than inheriting a previous project's lockfile.

## 1. Preserve the Git repository

Keep the existing `.git` directory when replacing your current working tree. Replace the project files, not the Git history.

## 2. Install from a clean lockfile

From `D:\qasimio.me` in PowerShell:

```powershell
Remove-Item .\pnpm-lock.yaml -Force -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .\node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .\.astro -ErrorAction SilentlyContinue
pnpm install
```

## 3. Validate before pushing

```powershell
pnpm run check
pnpm run format:check
pnpm run build
```

## 4. Run locally

```powershell
pnpm run dev
```

## 5. Important content rule

`src/data/notes/` is the short-form publishing system. Put real notes there. Do not turn the site into a clone of X.

The initial notes included in this scaffold are editable starting points based on supplied facts. Review them before treating them as final copy.
