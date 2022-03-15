import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular Forms',
        imageUrl: './../../../assets/images/forms.png',
        price: 99.99,
        code: 'XPS-8687',
        duration: 120,
        rating: 4.5,
        releaseDate: '04 de dezembro de 2019',
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: './../../../assets/images/http.png',
        price: 45.99,
        code: 'LKL-2421',
        duration: 90,
        rating: 4,
        releaseDate: '19 de fevereiro de 2021',
      },
    ];
  }
}
