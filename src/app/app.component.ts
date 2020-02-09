import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toPress:boolean = true;

  goLink() {
    this.toPress = !this.toPress;
    if (this.toPress == true) {
      console.log('Button off...');
    } else {
      console.log('Button on!');
    }
  }
}
