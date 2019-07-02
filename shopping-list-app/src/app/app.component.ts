import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public viewType: string = 'shopping-list';

  onViewChanged(viewType: string ) {
    this.viewType = viewType;
  }
}
