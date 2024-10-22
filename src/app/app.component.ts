import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';
import { NavbarComponent } from './navbar/navbar.component'; 
import { NgmodelComponent } from './ngmodel/ngmodel.component';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl:'./app.component.css',
  standalone: true,
  imports:[CalculatorComponent,NavbarComponent,NgmodelComponent]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
};