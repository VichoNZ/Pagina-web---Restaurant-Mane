# Mini Taller Fullstack CI/CD - Restaurant Mane

## Contexto

Este proyecto es una aplicacion web fullstack para **Restaurant Mane**.

La aplicacion debe permitir:

- Mostrar una pagina principal del restaurante.
- Mostrar el menu de platos disponibles.
- Registrar reservas de clientes.
- Guardar reservas en SQLite.
- Conectar frontend y backend mediante una API REST.
- Ejecutar pruebas automaticas del backend.
- Ejecutar frontend y backend con Docker.
- Validar el proyecto con GitHub Actions.

## Stack

### Frontend

- React
- Vite
- CSS Modules
- JavaScript

### Backend

- FastAPI
- Python
- SQLAlchemy
- Pydantic
- SQLite

### Testing

- pytest
- FastAPI TestClient
- httpx

### Contenedores y CI/CD

- Docker
- Docker Compose
- GitHub Actions

## Arquitectura Esperada

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

## Funcionalidades

### Home

- Nombre del restaurante.
- Frase comercial.
- Imagen o fondo visual atractivo.
- Boton para ver menu.
- Boton para reservar mesa.
- Seccion breve de presentacion.

### Menu

La pagina de menu debe consumir:

```txt
GET /api/menu
```

Cada plato debe manejar:

- `id`
- `name`
- `description`
- `price`
- `category`
- `image_url`
- `available`

### Reservas

La pagina de reservas debe tener formulario para:

- Nombre del cliente.
- Telefono.
- Correo.
- Fecha.
- Hora.
- Cantidad de personas.
- Comentario opcional.

El formulario debe enviar:

```txt
POST /api/reservations
```

El backend debe permitir listar reservas con:

```txt
GET /api/reservations
```

## Endpoints Requeridos

```txt
GET /health
GET /api/menu
GET /api/reservations
POST /api/reservations
```

## Base De Datos

La base de datos debe ser SQLite y debe usar SQLAlchemy.

### Tabla MenuItem

```txt
id
name
description
price
category
image_url
available
```

### Tabla Reservation

```txt
id
customer_name
phone
email
reservation_date
reservation_time
people_count
comment
created_at
```

## Reglas De Desarrollo

- Usar React + Vite en frontend.
- Usar CSS Modules para estilos.
- Usar FastAPI en backend.
- Usar SQLite + SQLAlchemy para persistencia.
- Usar Pydantic para validacion.
- Mantener rutas separadas en `backend/app/routes/`.
- Mantener componentes reutilizables en `frontend/src/components/`.
- Mantener paginas en `frontend/src/pages/`.
- No agregar funcionalidades fuera del alcance del taller.
- Priorizar cambios pequenos, verificables y faciles de explicar.
- Despues de cada etapa, indicar como probarla.

## Testing

El archivo principal de pruebas es:

```txt
backend/tests/test_main.py
```

Pruebas minimas:

1. `GET /health`.
2. `GET /api/menu`.
3. `POST /api/reservations`.
4. `GET /api/reservations`.

## Docker

El backend debe tener:

```txt
backend/Dockerfile
```

El frontend debe tener:

```txt
frontend/Dockerfile
```

La raiz del proyecto debe tener:

```txt
docker-compose.yml
```

## CI/CD

El pipeline debe estar en:

```txt
.github/workflows/ci.yml
```

Debe ejecutar:

- Instalacion de dependencias backend.
- Pruebas backend con `pytest`.
- Build Docker backend.
- Instalacion de dependencias frontend.
- Build frontend con Vite.
- Build Docker frontend.
