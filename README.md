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

## Backend

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

## Frontend

El frontend está en la **raíz del proyecto**, al mismo nivel que `backend/` (no dentro de `backend`).

Abre una **segunda terminal** (deja el backend corriendo en la otra) y ejecuta:

```bash
cd C:\Users\vicen\Documents\GitHub\Pagina-web---Restaurant-Mane\frontend
npm install
npm run dev
```

Si ya estás dentro de `backend/`, sube un nivel primero:

```bash
cd ..\frontend
npm run dev
```

Verificar:

- `http://localhost:5173` → página Home con navegación
- Rutas: `/`, `/menu`, `/reservas`, `/contacto`

## Estado actual (Parte 1)

Estructura inicial con esqueletos de páginas, componentes y API. Los endpoints de menú y reservas se implementarán en la Parte 2.
