import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-journal',
  imports: [NgIf],
  templateUrl: './journal.html',
  styleUrl: './journal.css',
})
export class Journal {

  selectedFeeling: string = '';

  selectFeeling(feeling: string) {
    this.selectedFeeling = feeling;
  }
}
