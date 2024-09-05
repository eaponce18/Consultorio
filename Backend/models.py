from sqlalchemy import Column, String, Integer, Date, Time, Float, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.sqlite import UUID
from sqlalchemy.orm import relationship
import uuid

Base = declarative_base()

# Model for Citas (Appointments)
class Cita(Base):
    __tablename__ = 'citas'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    estado = Column(String)
    fecha = Column(Date)
    hora = Column(Time)
    nombre_paciente = Column(String)
    motivo_consulta = Column(String)
    valoracion = Column(Float, nullable=True)

    # Foreign key relationship linking the cita to a consulta
    consulta_id = Column(UUID(as_uuid=True), ForeignKey('consultas.id'))
    consulta = relationship("Consulta", back_populates="citas")


# Model for Doctores (Doctors)
class Doctor(Base):
    __tablename__ = 'doctores'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    nombre = Column(String)
    especialidad = Column(String)

    # One doctor can be related to many consultas
    consultas = relationship("Consulta", back_populates="doctor")


# Model for Consultas (Medical Consultations)
class Consulta(Base):
    __tablename__ = 'consultas'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    sexo = Column(String)
    telefono = Column(String)

    # Foreign keys
    doctor_id = Column(UUID(as_uuid=True), ForeignKey('doctores.id'))
    doctor = relationship("Doctor", back_populates="consultas")

    # One Consulta can be associated with multiple Citas
    citas = relationship("Cita", back_populates="consulta")
