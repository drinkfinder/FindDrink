import { Component, OnInit, Input } from '@angular/core';
import { Drink } from '../drink';

@Component({
  selector: 'app-drink-row',
  templateUrl: './drink-row.component.html',
  styleUrls: ['./drink-row.component.css']
})
export class DrinkRowComponent implements OnInit {

  @Input() drink: any;

  ngOnInit() {
  }

}
