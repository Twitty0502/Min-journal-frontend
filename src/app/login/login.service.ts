import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private apiUrl = 'http://localhost:8080/users/login';

    constructor(private http: HttpClient) { }

    //skickar användarnamn och lösenord till backend för login
    login(username: string, password: string): Observable<any> {
        return this.http.post<any>(this.apiUrl, {
            username: username,
            password: password
        });
    }

    //skickar anändarnamn och lösenord till backend för registrering
    register(username: string, password: string): Observable<any> {
        return this.http.post<any>('http://localhost:8080/users/register', {
            username: username,
            password: password
        });
    }
}