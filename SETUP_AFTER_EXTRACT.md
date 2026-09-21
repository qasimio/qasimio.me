# Replace the current local files

This archive is the new implementation. Keep the existing `.git` directory and replace the working files around it.

From PowerShell:

```powershell
Set-Location D:\qasimio.me

# Back up the current working tree first.
$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
Copy-Item . "..\qasimio.me-backup-$stamp" -Recurse -Force

# Keep Git metadata, replace everything else.
Get-ChildItem -Force | Where-Object { $_.Name -ne '.git' } | Remove-Item -Recurse -Force

# Extract this archive into D:\qasimio.me, then run:
pnpm install
pnpm run check
pnpm run format:check
pnpm run build
pnpm run dev
```

## Important

Do not connect `qasimio.me` to this Vercel project until the new site has been reviewed locally and on the preview deployment.

The `reference/` directory is intentionally ignored by Git for private screenshots/evidence. Do not put private credentials or invitations into `src/` or `public/`.

The contact form intentionally does not store submissions. It opens the visitor's email client with a pre-filled message to `hello@qasimio.me`.
