import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule} from 'primeng/inputtext';

//Modulos PrimeNG
const modPrimeng: any=[
  CardModule,
  InputTextModule,
  ButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modPrimeng
  ],
  exports:[
    modPrimeng
  ]
})
export class PrimengModule { }
