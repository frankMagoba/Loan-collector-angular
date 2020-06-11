import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})

export class Apiservice {
    private apiUrl = environment.apiBaseUrl;
    private prfl = localStorage.getItem('prfl');
    CreateUser: any;

    constructor(private http: HttpClient, private authservice: Apiservice) { }

    // Dashboard Stats



    login(cred): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/users/authenticate`, cred, httpOptions);
    }

    // End Dashboard Stats

}