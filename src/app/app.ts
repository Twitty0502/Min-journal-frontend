import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Journal } from './journal/journal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Journal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My Journal!');
}
