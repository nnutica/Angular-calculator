import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  displayValue: string = '';

  append(value: string) {
    this.displayValue += value;
  }

  clear() {
    this.displayValue = '';
  }

  backspace() {
    this.displayValue = this.displayValue.slice(0, -1);
  }

  calculate() {
    try {
      this.displayValue = eval(this.displayValue);
    } catch (error) {
      this.displayValue = 'Error';
    }
  }
}
