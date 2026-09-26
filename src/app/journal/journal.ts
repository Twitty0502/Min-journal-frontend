import { JournalService } from './journal.service';

// commonModule används för ngFor t.ex.
import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

// används för ngModel - (skapa koppling mellan textfältet och variablen "note")
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-journal',
  imports: [NgIf, FormsModule, CommonModule],
  templateUrl: './journal.html',
  styleUrl: './journal.css',
})
export class Journal implements OnInit {

  selectedFeeling: string = '';
  note: string = '';

  savedNotes: any[] = [];

  // Hämtar userId från sessionStorage
  userId: number = Number(sessionStorage.getItem('userId'));

  constructor(
    private journalService: JournalService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadJournals();
  }

  selectFeeling(feeling: string) {
    this.selectedFeeling = feeling;
  }

  loadJournals() {
    this.journalService.getAll(this.userId).subscribe({
      next: (journals) => {

        console.log('Loaded journals:', journals);

        this.savedNotes = [...journals];

        // Tvingar Angular att uppdatera HTML
        this.changeDetectorRef.detectChanges();
      },

      error: (error) => {
        console.error('Could not load journals:', error);
      }
    });
  }

  saveNote() {

    const journal = {
      status: this.selectedFeeling,
      note: this.note
    };

    this.journalService.create(this.userId, journal).subscribe({
      next: (savedJournal) => {

        console.log('Journal saved:', savedJournal);

        // Lägg till den nya journalen direkt
        this.savedNotes = [...this.savedNotes, savedJournal];

        // Töm formuläret
        this.note = '';
        this.selectedFeeling = '';

        // Tvinga Angular att uppdatera listan direkt
        this.changeDetectorRef.detectChanges();
      },

      error: (error) => {
        console.error('Could not save journal:', error);
      }
    });
  }
}