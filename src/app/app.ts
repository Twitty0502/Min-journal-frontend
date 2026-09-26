import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Journal } from './journal/journal';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Journal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My Journal!');

  isLoggedIn = false;

  loginSuccess() {
    this.isLoggedIn = true;
  }
}
