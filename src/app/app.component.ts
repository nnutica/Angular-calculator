import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';
import { NavbarComponent } from './navbar/navbar.component'; 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl:'./app.component.css',
  standalone: true,
  imports:[CalculatorComponent,NavbarComponent]
})
export class AppComponent {
  
};