from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app import models, schemas
from app.database import get_db

router = APIRouter(prefix="/api/reservations", tags=["reservations"])


@router.post(
    "",
    response_model=schemas.ReservationRead,
    status_code=status.HTTP_201_CREATED,
)
def create_reservation(
    reservation: schemas.ReservationCreate,
    db: Session = Depends(get_db),
):
    db_reservation = models.Reservation(**reservation.model_dump())
    db.add(db_reservation)
    db.commit()
    db.refresh(db_reservation)
    return db_reservation


@router.get("", response_model=list[schemas.ReservationRead])
def get_reservations(db: Session = Depends(get_db)):
    return db.query(models.Reservation).order_by(models.Reservation.created_at.desc()).all()
