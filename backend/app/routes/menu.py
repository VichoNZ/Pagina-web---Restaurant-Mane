from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app import models, schemas
from app.database import get_db

router = APIRouter(prefix="/api/menu", tags=["menu"])


SAMPLE_MENU_ITEMS = [
    {
        "name": "Entrada Mane",
        "description": "Tabla pequena para compartir con sabores de la casa.",
        "price": 8500,
        "category": "Entradas",
        "image_url": None,
        "available": True,
    },
    {
        "name": "Pastas de la Casa",
        "description": "Pasta fresca con salsa cremosa y vegetales salteados.",
        "price": 12900,
        "category": "Platos principales",
        "image_url": None,
        "available": True,
    },
    {
        "name": "Postre Mane",
        "description": "Postre dulce de temporada preparado en cocina.",
        "price": 5900,
        "category": "Postres",
        "image_url": None,
        "available": True,
    },
]


def seed_menu_items(db: Session):
    if db.query(models.MenuItem).count() > 0:
        return

    db.add_all(models.MenuItem(**item) for item in SAMPLE_MENU_ITEMS)
    db.commit()


@router.get("", response_model=list[schemas.MenuItemRead])
def get_menu(db: Session = Depends(get_db)):
    seed_menu_items(db)
    return db.query(models.MenuItem).filter(models.MenuItem.available.is_(True)).all()
