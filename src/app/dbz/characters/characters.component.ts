import { Component, Input, OnInit } from '@angular/core';
import { character } from './interfaces/dbz.interfaces';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {
  
  @Input('data') characters: character[] = [];
}
