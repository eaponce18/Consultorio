from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from .database import engine, get_db
from .models import Cita, Base

# Create all tables in the DB
Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.post("/citas/")
def create_cita(estado: str, fecha: str, hora: str, nombre_paciente: str, motivo_consulta: str, db: Session = Depends(get_db)):
    db_cita = Cita(estado=estado, fecha=fecha, hora=hora, nombre_paciente=nombre_paciente, motivo_consulta=motivo_consulta)
    db.add(db_cita)
    db.commit()
    db.refresh(db_cita)
    return db_cita

@app.get("/citas/")
def get_citas(db: Session = Depends(get_db)):
    return db.query(Cita).all()

@app.get("/citas/{id}")
def get_cita(id: str, db: Session = Depends(get_db)):
    cita = db.query(Cita).filter(Cita.id == id).first()
    if not cita:
        raise HTTPException(status_code=404, detail="Cita not found")
    return cita
