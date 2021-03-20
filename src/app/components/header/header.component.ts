import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="header">
      <div class="flex-container">
        <h1>devjobs</h1>
        <dark-mode-toggle [darkMode]="darkMode" (toggleDarkMode)="toggleDarkMode.emit()"></dark-mode-toggle>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent { 
  @Input() darkMode!: boolean | null
  @Output() toggleDarkMode = new EventEmitter<void>();
}
