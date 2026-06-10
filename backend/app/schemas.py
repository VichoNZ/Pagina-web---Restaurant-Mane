from datetime import date, datetime, time

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class MenuItemRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    description: str
    price: float
    category: str
    image_url: str | None = None
    available: bool


class ReservationCreate(BaseModel):
    customer_name: str = Field(min_length=2)
    phone: str = Field(min_length=6)
    email: EmailStr
    reservation_date: date
    reservation_time: time
    people_count: int = Field(ge=1, le=20)
    comment: str | None = None


class ReservationRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    customer_name: str
    phone: str
    email: str
    reservation_date: date
    reservation_time: time
    people_count: int
    comment: str | None = None
    created_at: datetime
