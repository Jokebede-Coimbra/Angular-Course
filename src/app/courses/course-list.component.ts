import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list-component.html'
})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses =  [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8799',
                duration: 120,
                rating: 5.4,
                releaseDate: 'December, 3, 2020'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '',
                price: 80.49,
                code: 'LJL-1020',
                duration: 80,
                rating: 4,
                releaseDate: 'December, 4, 2020'
            }
        ]

    }
}