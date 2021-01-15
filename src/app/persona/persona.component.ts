import { Component, OnInit } from '@angular/core';
import {Persona} from '../Models/Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public titulo:string;
  public nombre:string;
  public apellidos:string;
  public edad:number;
  public sexo:string;
  public P = new Persona()
  
  constructor() {
    this.titulo = "Mis Datos"

    this.nombre = this.P.nombre = 'Nestor Josue'
    this.apellidos = this.P.apellidos = 'Puentes Inchaurregui'
    this.edad = this.P.edad = 25
    this.sexo = this.P.sexo = 'Masculino'

    this.P.setNombre('Nestor Josue')
    this.P.setApellidos('Puentes Inchaurregui')
    this.P.setEdad(25)
    this.P.setSexo('Masculino')
   }

  ngOnInit(): void {
  }

}