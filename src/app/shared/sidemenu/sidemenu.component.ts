import { Component } from '@angular/core';

interface menuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent {
  templateMenu: menuItem[] = [
    {
      texto: 'Básico',
      ruta: './template/basicos',
    },
    {
      texto: 'Dinamíco',
      ruta: './template/dinamicos',
    },
    {
      texto: 'Switches',
      ruta: './template/switches',
    },
  ];
  reactiveMenu: menuItem[] = [
    {
      texto: 'Básico',
      ruta: './reactive/basicos',
    },
    {
      texto: 'Dinamíco',
      ruta: './reactive/dinamicos',
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches',
    },
  ];
  Menu: menuItem[] = [
    {
      texto: 'Login',
      ruta: './',
    },
    {
      texto: 'Registro',
      ruta: './',
    },
  ];
}
