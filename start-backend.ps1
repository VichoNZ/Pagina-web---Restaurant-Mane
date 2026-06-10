# Ejecutar desde la raíz del proyecto: .\start-backend.ps1
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location (Join-Path $Root "backend")

if (-not (Test-Path ".venv")) {
    Write-Host "Creando entorno virtual..." -ForegroundColor Yellow
    python -m venv .venv
}

Write-Host "Activando entorno virtual..." -ForegroundColor Yellow
& .\.venv\Scripts\Activate.ps1

if (-not (Test-Path ".venv\Lib\site-packages\fastapi")) {
    Write-Host "Instalando dependencias..." -ForegroundColor Yellow
    pip install -r requirements.txt
}

Write-Host "Backend en http://localhost:8000" -ForegroundColor Green
uvicorn app.main:app --reload --port 8000
