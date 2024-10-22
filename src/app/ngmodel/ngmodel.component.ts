import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ngmodel',
  standalone: true,
  imports: [FormsModule],
  templateUrl:  `./ngmodel.component.html`,
  styleUrl: './ngmodel.component.css'
})
export class NgmodelComponent {
  a = 0;
  b = 0;
  sum = 0;
  onClick(){
    this.sum = this.a + this.b;
  };


}
