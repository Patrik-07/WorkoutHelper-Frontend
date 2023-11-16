import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Bodypart } from 'src/app/models/Bodypart';

@Injectable({
  providedIn: 'root',
})
export class BodypartService {
  private apiURL = `${environment.apiURL}/bodypart`;

  constructor(private http: HttpClient) {}

  getBodyparts(): Observable<Bodypart[]> {
    return this.http.get<Bodypart[]>(`${this.apiURL}/getAll`);
  }

  getBodypartByName(name: string): Observable<Bodypart> {
    return this.http.get<Bodypart>(`${this.apiURL}/get?name=${name}`);
  }
}
