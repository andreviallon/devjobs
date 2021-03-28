import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'filter',
  template: `
    <div class="card">
      <form [formGroup]="filterForm">
        <div class="search-container">
          <fa-icon [icon]="faSearch"></fa-icon>
          <input type="text" placeholder="Filter by title..." formControlName="searchQuery">
        </div>
        <app-button [text]="'Search'" [buttonType]="'primary'" (click)="onSearch()"></app-button>
      </form>  
    </div>
  `,
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() search = new EventEmitter<string>();

  public faSearch = faSearch;

  public filterForm = this.fb.group({
    searchQuery: ['']
  });

  constructor(private fb: FormBuilder) { }
  
  public onSearch(): void {
    const searchQuery = this.filterForm.get('searchQuery')?.value;
    this.search.emit(searchQuery);
  }
}
