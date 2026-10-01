import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StatisticsService {

    private apiUrl = 'http://localhost:8080/statistics';

    constructor(private http: HttpClient) { }

    // Hämtar statistik för en användare under en vald tidsperiod
    getStatistics(
        userId: number,
        start: string,
        end: string
    ): Observable<{ [key: string]: number }> {

        // get anrop med userid samt start och end datum
        return this.http.get<{ [key: string]: number }>(
            `${this.apiUrl}?userId=${userId}&start=${start}&end=${end}`
        );
    }
}