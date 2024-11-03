import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoAngularZorroModules } from '../../DemoAngularZorroModules';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink,
    DemoAngularZorroModules
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink,
    DemoAngularZorroModules
  ]
})
export class SharedModule { }
