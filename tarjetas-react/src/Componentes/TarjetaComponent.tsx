import React from 'react';
import { Persona } from '../Modelos/Persona';
import '../estilo/TarjetaComponent.css'; // 👈 Importa tu archivo de estilos

export default function TarjetaComponent(props: Persona) {
  return (
    <div className="tarjeta">
      <h4>Nombre: {props.nombre}</h4>
      <h4>Ocupacion: {props.ocupacion}</h4>
      <h4>Pais: {props.pais}</h4>
    </div>
  );
}