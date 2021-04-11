import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [ // Determina que contiene el módulo (componentes, pipes, etc.) y son invisibles para otros módulos
    HeroeComponent,
    ListadoComponent
  ],
  exports: [// Determina que es visible para otros módulos
    ListadoComponent
  ],
  imports: [ // Normalmente solo se importan otros módulos para tener acceso a sus respectivas funcionalidades exportadas
    CommonModule // EL CommonModule es necesario por que ofrece directivas como el ngFor o el ngIf entre otras
  ]
})
export class HeroesModule {}