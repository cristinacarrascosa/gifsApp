import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'

})
export class BusquedaComponent {

  // coge el valor del input
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor ( private gifsService: GifsService ) {}

  buscar(  ) {
    const valor = this.txtBuscar.nativeElement.value;

    // introducir el valor en el array historial declarado en el servicio gifs.service.ts
    this.gifsService.buscarGifs( valor );

    console.log(valor);



    this.txtBuscar.nativeElement.value = '';
  }

}
