import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  fechaNacimiento: Date;
  edad: number;
  fechaInscripcion: Date;
  costo: number;

  bandForm: boolean = false;

  formulario = new FormGroup({
    nombre: new FormControl(''),
    edad: new FormControl('', [
      Validators.pattern('^[0-9]*$'),
      Validators.min(18),
    ]),
    fecha_nacimiento: new FormControl(''),
    fecha_inscripcion: new FormControl(''),
    costo: new FormControl(''),
  });

  validarFechaNac() {
    const hoy = new Date();
    const actual = hoy.getFullYear();

    const anhoNaci = new Date(this.fechaNacimiento);

    let edadCorrecta = actual - this.edad;

    console.log(hoy);
    console.log(anhoNaci);

    const anhoForm = anhoNaci.getFullYear();
    console.log(anhoForm);

    if (
      anhoNaci.getMonth() > hoy.getMonth() ||
      (anhoNaci.getMonth() === hoy.getMonth() &&
        anhoNaci.getDate() > hoy.getDate())
    ) {
      edadCorrecta--;
    }

    if (edadCorrecta === anhoForm) {
      console.log('iguales');
      this.bandForm = true;
    } else {
      console.log('diferentes');
      this.bandForm = false;
    }
  }

  validarFechaInscripcion() {
    const fechaIns = new Date(this.fechaInscripcion);
    const fechaNac = new Date(this.fechaNacimiento);

    console.log(fechaIns);
    console.log(fechaNac);

    if (fechaIns.getTime() > fechaNac.getTime()) {
      console.log('es mayor la de inscripcion');
    } else {
      console.log('es mayor la de nacimiento');
    }
  }

  costoInscripcion() {
    const actual = new Date();
    const inscr = new Date(this.fechaInscripcion);

    let trasncurrido = actual.getFullYear() - inscr.getFullYear();
    console.log(trasncurrido);
    this.costo = trasncurrido * 200;
    this.formulario.controls['costo'].setValue(this.costo);
  }

  submitForm() {
    this.validarFechaNac();
    this.validarFechaInscripcion();
    this.costoInscripcion();
  }

  constructor() {}

  ngOnInit(): void {}
}
