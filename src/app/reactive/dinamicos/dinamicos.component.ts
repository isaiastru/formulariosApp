import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  miFormulario: FormGroup = this.formbuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.formbuilder.array(
      [
        ['correr', Validators.required],
        ['caminar', Validators.required],
      ],
      Validators.required
    ),
  });

  nuevoFavorito: FormControl = this.formbuilder.control(
    '',
    Validators.required
  );

  get favoritoArray() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {}

  campoNoValido(campo: string): boolean | null {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }

    this.favoritoArray.push(
      new FormControl(this.nuevoFavorito.value, Validators.required)
    );
  }
  eliminarFavorito(indice: number) {
    this.favoritoArray.removeAt(indice);
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }
}
