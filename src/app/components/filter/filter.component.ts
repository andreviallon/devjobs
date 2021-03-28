import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'filter',
  template: `
    <div class="card">
      <form [formGroup]="filterForm">
        <div class="search-container">
          <fa-icon [icon]="faSearch"></fa-icon>
          <input type="text" placeholder="Filter by title, companies, expertise…" formControlName="searchQuery">
        </div>
        <app-button [text]="'Search'" [buttonType]="'primary'" (click)="search()"></app-button>
      </form>  
    </div>
  `,
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public faSearch = faSearch;

  public filterForm = this.fb.group({
    searchQuery: [''],
    location: [''],
    fullTime: [false]
  });;

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
  }

  public search() {
    console.log('onSubmit', this.filterForm);
  }

}
