import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  ngOnInit() : void {
    this.toggleControl.valueChanges.subscribe(val => {
      this.className = val ? 'darkMode' : '';
    })
  }
}
