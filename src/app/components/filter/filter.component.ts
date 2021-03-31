import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export interface ISearchParams {
  searchQuery: string;
  location: string;
  fullTime: boolean
}
@Component({
  selector: 'filter',
  template: `
    <div class="card">
      <form [formGroup]="filterForm">
        <div class="search-container">
          <fa-icon [icon]="faSearch"></fa-icon>
          <input type="text" placeholder="Filter by title..." formControlName="searchQuery">
        </div>
        <div class="location-container">
          <fa-icon [icon]="faMapMarkerAlt"></fa-icon>
          <input type="text" placeholder="Filter by location" formControlName="location">
        </div>
        <div class="full-time-container">          
          <label>
            <span class="full-time">Full Time</span>
            <input type="checkbox" formControlName="fullTime">
            <span class="checkmark"></span>
          </label>
        </div>
        <app-button [text]="'Search'" [buttonType]="'primary'" (click)="onSearch()"></app-button>
      </form>  
    </div>
  `,
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() search = new EventEmitter<ISearchParams>();

  public faSearch = faSearch;
  public faMapMarkerAlt = faMapMarkerAlt;

  public filterForm = this.fb.group({
    searchQuery: [''],
    location: [''],
    fullTime: [false]
  });

  constructor(private fb: FormBuilder) { }
  
  public onSearch(): void {
    const searchParam: ISearchParams = {
      searchQuery: this.filterForm.get('searchQuery')?.value,
      location: this.filterForm.get('location')?.value,
      fullTime: this.filterForm.get('location')?.value
    };

    this.search.emit(searchParam);
  }
}
