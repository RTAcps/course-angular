import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseListComponent } from './course-list/course-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StarModule } from '../shared/component/star/star.module';
import { PipeModule } from '../shared/pipe/pipe.module';

@NgModule({
  declarations: [CourseInfoComponent, CourseListComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipeModule,
    StarModule,
    RouterModule.forChild([
      {
        path: 'courses',
        component: CourseListComponent,
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent,
      },
    ]),
  ],
})
export class CoursesModule {}
