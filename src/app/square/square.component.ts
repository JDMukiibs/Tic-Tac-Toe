import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent  {
  @Input() value: 'X' | 'O';
  // Limit the input of values to just X and O.
  // UI Component / DUMB component

}
