import { JournalService } from './journal.service';
import { StatisticsService } from '../services/statistics.service';
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

  //statistics
  showStatistics = false;
  startDate = '';
  endDate = '';
  statistics: { [key: string]: number } = {};
  //statistics ^

  // Hämtar userId från sessionStorage
  userId: number = Number(sessionStorage.getItem('userId'));

  userName: string = sessionStorage.getItem('username') || '';

  constructor(
    private journalService: JournalService,
    private changeDetectorRef: ChangeDetectorRef,
    private statisticsService: StatisticsService
  ) { }

  ngOnInit() {
    this.loadJournals();
  }

  selectFeeling(feeling: string) {
    this.selectedFeeling = feeling;
  }

  logout() {
    sessionStorage.clear();
    window.location.reload();
  }

  openStatistics() {
    this.showStatistics = true;
  }

  closeStatistics() {
    this.showStatistics = false;
  }

  getStatistics() {

    if (!this.startDate || !this.endDate) {
      return;
    }

    // Töm tidigare statistik innan vi hämtar den nya
    this.statistics = {};

    const start = `${this.startDate}T00:00:00`;
    const end = `${this.endDate}T23:59:59`;

    this.statisticsService.getStatistics(
      this.userId,
      start,
      end
    ).subscribe({
      next: (result) => {

        console.log('Statistics:', result);

        // Sparar den nya statistiken
        this.statistics = result;

        this.changeDetectorRef.detectChanges();
      },

      error: (error) => {
        console.error('Could not load statistics:', error);
      }
    });
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