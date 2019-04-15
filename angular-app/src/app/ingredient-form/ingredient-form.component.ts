import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent implements OnInit {

  musicForm: FormGroup;
  musicPreferences = [

    { id: 1, genre: 'Vodka' },
    { id: 2, genre: 'Sweet Vermouth' },
    { id: 3, genre: 'Mint' },
    { id: 4, genre: 'Rum' },
    { id: 5, genre: 'Bourbon'},
    { id: 6, genre: 'Lemonade'},
    { id: 7, genre: 'Angostura Bitters'},
    { id: 8, genre: 'Orange Juice'},
    { id: 9, genre: 'Tonic Water'},
    { id: 10, genre: 'Tomato Juice'},
    { id: 11, genre: 'Gin'},
    { id: 12, genre: 'Cranberry Juice'},
    { id: 13, genre: 'Orange Bitters'},
  ];

  constructor(private fb: FormBuilder) {
    // Create a FormControl for each available music preference, initialize them as unchecked, and put them in an array
    const formControls = this.musicPreferences.map(control => new FormControl(false));

    // Create a FormControl for the select/unselect all checkbox
    const selectAllControl = new FormControl(false);
  
    // Simply add the list of FormControls to the FormGroup as a FormArray, add the selectAllControl separetely
    this.musicForm = this.fb.group({
      musicPreferences: new FormArray(formControls),
      selectAll: selectAllControl
    });
  }

  ngOnInit() {
    this.onChanges();
  }

  onChanges(): void {
    // Subscribe to changes on the selectAll checkbox
    this.musicForm.get('selectAll').valueChanges.subscribe(bool => {
      this.musicForm
        .get('musicPreferences')
        .patchValue(Array(this.musicPreferences.length).fill(bool), { emitEvent: false });
    });

    // Subscribe to changes on the music preference checkboxes
    this.musicForm.get('musicPreferences').valueChanges.subscribe(val => {
      const allSelected = val.every(bool => bool);
      if (this.musicForm.get('selectAll').value !== allSelected) {
        this.musicForm.get('selectAll').patchValue(allSelected, { emitEvent: false });
      }
    });
  }

  submit() {
    // Filter out the unselected ids
    const selectedPreferences = this.musicForm.value.musicPreferences
      .map((checked, index) => checked ? this.musicPreferences[index].id : null)
      .filter(value => value !== null);
    // Do something with the result
  }
}