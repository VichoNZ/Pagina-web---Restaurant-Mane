from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.database import Base, get_db
from app.main import app

SQLALCHEMY_DATABASE_URL = "sqlite:///./test_restaurant.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False},
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()


app.dependency_overrides[get_db] = override_get_db
client = TestClient(app)


def setup_function():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)


def test_health_check():
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_get_menu_returns_sample_items():
    response = client.get("/api/menu")
    data = response.json()

    assert response.status_code == 200
    assert len(data) >= 3
    assert {"name", "description", "price", "category", "available"} <= set(data[0])


def test_create_reservation():
    payload = {
        "customer_name": "Vicente",
        "phone": "+56912345678",
        "email": "vicente@example.com",
        "reservation_date": "2026-06-15",
        "reservation_time": "20:00:00",
        "people_count": 4,
        "comment": "Mesa cerca de la ventana",
    }

    response = client.post("/api/reservations", json=payload)
    data = response.json()

    assert response.status_code == 201
    assert data["id"] == 1
    assert data["customer_name"] == payload["customer_name"]
    assert data["people_count"] == payload["people_count"]


def test_get_reservations_returns_saved_items():
    payload = {
        "customer_name": "Maria",
        "phone": "+56987654321",
        "email": "maria@example.com",
        "reservation_date": "2026-06-20",
        "reservation_time": "19:30:00",
        "people_count": 2,
        "comment": None,
    }

    client.post("/api/reservations", json=payload)
    response = client.get("/api/reservations")
    data = response.json()

    assert response.status_code == 200
    assert len(data) == 1
    assert data[0]["customer_name"] == payload["customer_name"]
