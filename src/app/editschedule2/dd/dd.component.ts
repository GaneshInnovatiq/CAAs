import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dd',
  templateUrl: './dd.component.html',
  styleUrls: ['./dd.component.css']
})
export class DdComponent {
  @Input() items : any;
  pressed = false;
  selected: string = "";
  
  ngOnInit(): void {
    this.selected = this.items[0];
  }

  press() {
    this.pressed = !this.pressed;
    document.getElementById(this.selected)?.style.setProperty('background', 'rgba(82, 109, 130, 1)');
    document.getElementById(this.selected)?.style.setProperty('color', 'white');
  }

  select(id: string) {
    this.selected = id;
    for(const i of this.items) {
      document.getElementById(i)?.style.setProperty('background', 'white');
      document.getElementById(i)?.style.setProperty('color', 'rgba(82, 109, 130, 1)');
    }
    document.getElementById(id)?.style.setProperty('background', 'rgba(82, 109, 130, 1)');
    document.getElementById(id)?.style.setProperty('color', 'white');
    this.pressed = !this.pressed;
  }
}
