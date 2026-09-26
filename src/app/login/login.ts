import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username = '';
  password = '';
  errorMessage = '';

  // Skickar information till App när login lyckas
  @Output() loginSuccess = new EventEmitter<void>();

  constructor(private loginService: LoginService) { }

  login() {
    this.loginService.login(this.username, this.password).subscribe({
      next: (response) => {

        console.log('Login successfully done');

        // Sparar användarens id så Journal vet vilken användare som är inloggad
        sessionStorage.setItem('userId', response.id);

        // visar att login lyckades
        this.loginSuccess.emit();
      },

      error: (error) => {
        console.error('login failed:', error);
        this.errorMessage = 'Wrong username or password.';
      }
    });
  }

  register() {

    if (!this.username.trim() || !this.password.trim()) {
      alert('Username and password are required.')
      return;
    }

    this.loginService.register(this.username, this.password).subscribe({
      next: () => {
        alert('Finally registered, You can now log in!');
        this.errorMessage = '';
      },

      error: () => {
        this.errorMessage = 'Username already exists.';
      }
    });
  }
}