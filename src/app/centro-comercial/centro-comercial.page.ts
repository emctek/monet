import { Component, OnInit } from '@angular/core';
import { ListacentrocomercialService } from './listacentrocomercial.service';

@Component({
  selector: 'app-centro-comercial',
  templateUrl: './centro-comercial.page.html',
  styleUrls: ['./centro-comercial.page.scss'],
})
export class CentroComercialPage implements OnInit {

listadep = [];

  constructor(private  listacomer : ListacentrocomercialService) { }

  ngOnInit() {
   this.listadep = this.listacomer.obtenerlista();
  }

}
