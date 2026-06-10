from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app import models
from app.routes import menu, reservations

app = FastAPI(title="Restaurant Mane API")

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(menu.router)
app.include_router(reservations.router)


@app.get("/")
def health_check():
    return {"status": "ok", "message": "Restaurant Mane API"}


@app.get("/health")
def health():
    return {"status": "ok"}
