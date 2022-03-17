import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

import Swal from 'sweetalert2';

@Component({
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css'],
})
export class CourseInfoComponent implements OnInit {
  course!: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.courseService
      .retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!)
      .subscribe({
        next: (course) => (this.course = course),
        error: () =>
          Swal.fire({
            title: 'Ops!',
            text: 'Curso não encontrado!',
            icon: 'error',
            confirmButtonText: 'Ok',
          }),
      });
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: () =>
        Swal.fire({
          title: 'Sucesso',
          text: 'Os campos alterados foram salvos!',
          icon: 'success',
          confirmButtonText: 'Ok',
        }),
      error: () =>
        Swal.fire({
          title: 'Ops!',
          text: 'Ocorreu um erro e não foi possível salvar o curso!',
          icon: 'error',
          confirmButtonText: 'Ok',
        }),
    });
  }
}
