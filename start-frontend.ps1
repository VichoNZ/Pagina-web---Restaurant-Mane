# Ejecutar desde la raíz del proyecto: .\start-frontend.ps1
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location (Join-Path $Root "frontend")

if (-not (Test-Path "node_modules")) {
    Write-Host "Instalando dependencias..." -ForegroundColor Yellow
    npm install
}

Write-Host "Frontend en http://localhost:5173" -ForegroundColor Green
npm run dev
