import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

import Swal from 'sweetalert2';

@Component({
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];

  _courses: Course[] = [];

  _filterBy!: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: (courses) => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: () =>
        Swal.fire({
          title: 'Ops!',
          text: 'Não foi possível encontrar o curso!',
          icon: 'error',
          confirmButtonText: 'Ok',
        }),
    });
  }

  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        Swal.fire({
          title: 'Curso Deletado',
          text: 'O curso foi deletado com sucesso!',
          icon: 'warning',
          confirmButtonText: 'Ok',
        });
        this.retrieveAll();
      },
      error: () =>
        Swal.fire({
          title: 'Ops!',
          text: 'Ocorreu um erro e não foi possível deletar!',
          icon: 'error',
          confirmButtonText: 'Ok',
        }),
    });
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter(
      (course: Course) =>
        course.name
          .toLocaleLowerCase()
          .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }
}
