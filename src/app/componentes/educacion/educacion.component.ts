import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  estudiosList:any;
  formacionList:any;

  constructor(private datosPorfolio:PorfolioService){}
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.estudiosList=data.estudios;
      this.formacionList=data.formacion;
    });
  }
}
