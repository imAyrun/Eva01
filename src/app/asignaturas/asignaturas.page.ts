import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  asignaturas = [
    {nombre: "Arquitectura", seccion: "001D"},
    {nombre: "Estadistica Descriptiva", seccion: "001D"},
    {nombre: "Ingles Intermedio", seccion: "003D"},
    {nombre: "Calidad de Software", seccion: "001D"},
    {nombre: "Proceso de Portafolio Final", seccion: "004D"},
    {nombre: "Programacion de Aplicaciones", seccion: "001D"}
  ]

  constructor() {
    console.log(this.asignaturas)
    console.table(this.asignaturas)
   }

  ngOnInit() {
  }

}
