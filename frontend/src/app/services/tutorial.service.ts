import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';



@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  private baseUrl = 'http://localhost:3000/teachers';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${this.baseUrl}/fetchTeachers`);
  }
  create(tutorial: Tutorial): Observable<any> {
    return this.http.post(`${this.baseUrl}/createTeacher`, tutorial);
  }
}
