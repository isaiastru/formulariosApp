import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favorito: Favorito[];
}

interface Favorito {
  id: number;
  nombreFavorito: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  persona: Persona = {
    nombre: 'Josue',
    favorito: [
      { id: 0, nombreFavorito: 'leer' },
      { id: 1, nombreFavorito: 'escribir' },
    ],
  };

  nuevoJuego: string = '';
  constructor() {}

  ngOnInit(): void {}

  guardar() {
    console.log('Formulario posterado');
  }
  eliminar(indice: number) {
    this.persona.favorito.splice(indice, 1);
  }

  agregar() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favorito.length + 1,
      nombreFavorito: this.nuevoJuego,
    };

    this.persona.favorito.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }
}
