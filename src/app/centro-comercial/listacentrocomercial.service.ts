import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListacentrocomercialService {

  listadep = [

    {
      id: '1',
      nombre: 'Soriana',
      imagen: 'assets/soriana.png'

    },
    {
      id: '2',
      nombre: 'Bodega Aurrera',
      imagen: 'assets/bodegaa.png'

    },
    {
      id: '3',
      nombre: 'Chedraui',
      imagen: 'assets/chedraui.png'

    }
    ,
    {
      id: '4',
      nombre: 'Chedraui2',
      imagen: 'assets/chedraui.png'

    }

  ];


  constructor() { }

obtenerlista() {

  return this.listadep;

}

}
