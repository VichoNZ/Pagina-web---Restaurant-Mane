# Restaurant Mane — Sitio web fullstack

Sitio web para restaurante con frontend React + Vite y backend FastAPI.

## Estructura del proyecto

```
├── frontend/     # React + Vite + CSS Modules
└── backend/      # FastAPI + SQLAlchemy + SQLite
```

## Requisitos

- Node.js 18+
- Python 3.11+

## Inicio rápido (Windows — recomendado)

Abre **dos terminales** en la raíz del proyecto (`Pagina-web---Restaurant-Mane`):

**Terminal 1 — Backend:**
```powershell
cd C:\Users\vicen\Documents\GitHub\Pagina-web---Restaurant-Mane
.\start-backend.ps1
```

**Terminal 2 — Frontend:**
```powershell
cd C:\Users\vicen\Documents\GitHub\Pagina-web---Restaurant-Mane
.\start-frontend.ps1
```

> **Importante:** `cd frontend` solo funciona si estás en la **raíz** del repo, no dentro de `backend/`.
> Desde `backend/` usa: `cd ..\frontend`

## Backend (manual)

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate        # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Verificar:

- `http://localhost:8000/` → health check
- `http://localhost:8000/docs` → documentación Swagger

## Frontend (manual)

El frontend está en la **raíz del proyecto**, al mismo nivel que `backend/`:

```
Pagina-web---Restaurant-Mane/
├── backend/      ← NO hay frontend aquí dentro
└── frontend/     ← el frontend está aquí
```

Desde la raíz del proyecto:
```powershell
cd frontend
npm run dev
```

Desde `backend/` (sube un nivel):
```powershell
cd ..\frontend
npm run dev
```

O con ruta absoluta:
```powershell
cd C:\Users\vicen\Documents\GitHub\Pagina-web---Restaurant-Mane\frontend
npm run dev
```

Verificar:

- `http://localhost:5173` → página Home con navegación
- Rutas: `/`, `/menu`, `/reservas`, `/contacto`

## Estado actual (Parte 1)

Estructura inicial con esqueletos de páginas, componentes y API. Los endpoints de menú y reservas se implementarán en la Parte 2.
