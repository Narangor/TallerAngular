import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { dataCourses } from './dataCourses';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Array<Course> = [];
  averageSeasons: number = 0;

  constructor(private courseService: CourseService) { }

  getCourseList() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
      this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons() {
    let totalSeasons = 0;
    for (let course of this.courses) {
      totalSeasons += course.seasons;
    }
    this.averageSeasons = totalSeasons / this.courses.length;
  }

  ngOnInit() {
    this.getCourseList();
  }

}