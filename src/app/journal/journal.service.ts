import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

//Observable används för att hantera data som kommer tillbaks senare, i detta fall ifrån backend.
//Väntar på svaret och skickar informationen till frontend när den är klar
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class JournalService {
    private apiUrl = 'http://localhost:8080/journals';

    //för att kunna skicka GET och POST anrop till backend
    constructor(private http: HttpClient) { }

    //lista alla tidigare journaler
    getAll(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    //skapa ny journal och skicka till backend
    create(journal: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, journal);
    }
}