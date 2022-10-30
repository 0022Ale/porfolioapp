import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  hardList:any;
  softList:any;

  constructor(private datosPorfolio:PorfolioService) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data): void => {
      this.hardList=data.hard;
      this.softList=data.soft;
  })
}

}
