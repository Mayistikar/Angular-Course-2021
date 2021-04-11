import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  deletedHero: string = '';

  deleteHero(): void {
    console.log('Borrando....');    
    this.deletedHero = this.heroes.shift() || '';
  }

}
