import { Component, OnInit } from '@angular/core';
import { data } from './data';
import { SelectionSettingsModel } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public data: Object[];
  public pageSettings: Object;

  public selectionSettings: SelectionSettingsModel = {
    persistSelection: true,
    type: 'Single'
  };



  ngOnInit(): void {
    this.pageSettings = { pageCount: 5 };
  }

  public loadData() {
    this.data = [];
    this.data = data;
  }
}