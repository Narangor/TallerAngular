import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = environment.baseUrl + 'series.json';
  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

}
