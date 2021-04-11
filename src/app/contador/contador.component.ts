import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  templateUrl: 'contador.component.html',
  styleUrls: []
})
export class ContadorComponent {
  public title: string = 'Contador App';
  public base: number = 5;
  public counter: number = 10;

  acumulate = (value: number) => this.counter += value;
}