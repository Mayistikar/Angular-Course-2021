import { Component, Input } from '@angular/core';
import { character } from '../characters/interfaces/dbz.interfaces';

@Component({
  selector: 'app-add-characters',
  templateUrl: './add-characters.component.html'
})
export class AddCharactersComponent {

  @Input('newCharacterData') newCharacter: character = {
    name: '',
    power: 0
  }

  add() {
    console.log('Agregado:', this.newCharacter);
    this.newCharacter = { name: '', power: 0 };    
  }  

}
