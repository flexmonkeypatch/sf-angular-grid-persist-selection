import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './data';
import { SelectionSettingsModel } from '@syncfusion/ej2-grids';
import { GridComponent } from '@syncfusion/ej2-angular-grids';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public data: Object[];
  public pageSettings: Object;



  public selectionSettings: SelectionSettingsModel = {
    persistSelection: true,
    type: 'Single',
    mode: 'Row'
  };

  @ViewChild('grid') grid: GridComponent;


  public onSelectStart(event: any) {
    this.grid.clearSelection();
  }

  ngOnInit(): void {
    this.pageSettings = { pageCount: 5 };
        this.data = data;
  }

  public clearData() {
    this.data = [];

  }
  public loadData() {
        this.data = data;

  }
}