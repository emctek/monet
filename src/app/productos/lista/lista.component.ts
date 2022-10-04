import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

  listaprod: string [] = [
    '1 manzanas', '2 uvas', '3 peras', '4 sandias'
  ]

  constructor(private router: Router) { }

  ngOnInit() { }

  onClick() {

    console.log("muac");

    this.router.navigate(['/productos/Detalles'])

  }
}
