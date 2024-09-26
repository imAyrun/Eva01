import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {
  asistencias1 = [
    {nombre: "Arquitectura", fecha: "11/4/2020",presente: "si"},
    {nombre: "Arquitectura", fecha: "15/4/2020",presente: "si"},
    {nombre: "Arquitectura", fecha: "20/4/2020",presente: "no"},
    {nombre: "Arquitectura", fecha: "01/5/2020",presente: "si"},
    {nombre: "Arquitectura", fecha: "05/5/2020",presente: "no"}
  ]
  asistencias2 = [
    {nombre: "Ingles Intermedio", fecha: "12/4/2020",presente: "no"},
    {nombre: "Ingles Intermedio", fecha: "14/4/2020",presente: "no"},
    {nombre: "Ingles Intermedio", fecha: "19/4/2020",presente: "no"},
    {nombre: "Ingles Intermedio", fecha: "02/5/2020",presente: "si"},
    {nombre: "Ingles Intermedio", fecha: "04/5/2020",presente: "si"}
  ]
  

  constructor() { }

  ngOnInit() {
  }

}
