import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  public headers = ["name", "age"]
  public items = [{
    name: "manikandan",
    age: 21
  }]
}
