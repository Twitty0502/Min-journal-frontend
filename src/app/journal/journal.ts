
//commonModule used for ngFor etc
import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

//used for ngModel - (create a connection between textfield and variable "note")
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-journal',
  imports: [NgIf, FormsModule, CommonModule],
  templateUrl: './journal.html',
  styleUrl: './journal.css',
})
export class Journal {

  selectedFeeling: string = '';
  note = '';

  savedNotes: any[] = [];

  selectFeeling(feeling: string) {
    this.selectedFeeling = feeling;
  }

  saveNote() {

    const journal = {
      feeling: this.selectedFeeling,
      note: this.note,
      date: new Date()
    };
    console.log(journal);

    this.savedNotes.push(journal);

    this.note = '';
    this.selectedFeeling = '';
  }


}
