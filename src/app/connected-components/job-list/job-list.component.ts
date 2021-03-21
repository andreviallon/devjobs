import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'job-list',
  template: `
    <p>job list</p>
  `,
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
