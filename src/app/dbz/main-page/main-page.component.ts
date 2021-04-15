import { Component } from '@angular/core';
import { character } from '../characters/interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'  
})
export class MainPageComponent {

  characters: character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegueta',
      power: 9000
    }
  ];

  newCharacter: character = {
    name: 'Maestro Roshi',
    power: 1000
  }

}
