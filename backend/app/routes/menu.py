from fastapi import APIRouter

router = APIRouter(prefix="/api/menu", tags=["menu"])


# TODO Parte 2: implementar GET con datos de ejemplo desde la base de datos

@router.get("")
def get_menu():
    return []
