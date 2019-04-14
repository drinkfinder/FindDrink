import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-add-drink',
  templateUrl: './add-drink.component.html',
  styleUrls: ['./add-drink.component.css']
})
export class AddDrinkComponent implements OnInit {
  @Input() drink: any;

  ngOnInit() {
  }

}
