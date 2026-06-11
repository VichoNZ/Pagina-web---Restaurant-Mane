
=======
# Restaurant Mane

Aplicacion fullstack para un restaurante, construida como mini taller con React,
FastAPI, SQLite, Docker y GitHub Actions.

## Stack

- Frontend: React + Vite + CSS Modules
- Backend: FastAPI + SQLAlchemy + Pydantic
- Base de datos: SQLite
- Testing: pytest + FastAPI TestClient
- Contenedores: Docker + Docker Compose
- CI/CD: GitHub Actions

## Estructura

```txt
restaurant-mane/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   └── routes/
│   │       ├── menu.py
│   │       └── reservations.py
│   ├── tests/
│   │   └── test_main.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── Dockerfile
├── .github/
│   └── workflows/
│       └── ci.yml
├── docker-compose.yml
├── README.md
└── AGENTS.md
```

## Backend local

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Verificar:

- API: `http://localhost:8000`
- Docs: `http://localhost:8000/docs`
- Health: `http://localhost:8000/health`
- Menu: `http://localhost:8000/api/menu`
- Reservas: `http://localhost:8000/api/reservations`

## Frontend local

```powershell
cd frontend
npm install
npm run dev
```

Verificar:

- Sitio: `http://localhost:5173`
- Menu: `http://localhost:5173/menu`
- Reservas: `http://localhost:5173/reservas`
- Contacto: `http://localhost:5173/contacto`

## Tests

```powershell
cd backend
pytest
```

## Docker

Levantar toda la aplicacion:

```powershell
docker compose up --build
```

Construir contenedores por separado:

```powershell
docker build -t restaurant-backend ./backend
docker build -t restaurant-frontend ./frontend
```

Ejecutar contenedores por separado:

```powershell
docker run -p 8000:8000 restaurant-backend
docker run -p 5173:5173 restaurant-frontend
```

## Endpoints principales

```txt
GET  /health
GET  /api/menu
GET  /api/reservations
POST /api/reservations
```

Ejemplo de reserva:

```powershell
Invoke-RestMethod -Method Post `
  -Uri http://localhost:8000/api/reservations `
  -ContentType "application/json" `
  -Body '{"customer_name":"Vicente","phone":"+56912345678","email":"vicente@example.com","reservation_date":"2026-06-15","reservation_time":"20:00:00","people_count":4,"comment":"Mesa cerca de la ventana"}'
```

