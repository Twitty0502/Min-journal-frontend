import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

//used for ngModel - (create a connection between textfield and variable "note")
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-journal',
  imports: [NgIf, FormsModule],
  templateUrl: './journal.html',
  styleUrl: './journal.css',
})
export class Journal {

  selectedFeeling: string = '';
  note = '';

  selectFeeling(feeling: string) {
    this.selectedFeeling = feeling;
  }

  saveNote() {
    console.log('Feeling:', this.selectedFeeling);
    console.log('Note:', this.note);
  }
}
