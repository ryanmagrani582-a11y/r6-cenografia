Set-Location 'C:\Users\higor\Documents\r6-cenografia'
Write-Host "=== git status ==="
git status --short
Write-Host "=== últimos commits ==="
git log --oneline -3
Write-Host "=== push ==="
git push origin main
Write-Host "=== build ==="
npm run build