import { Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {

  /*------- Toggle Badge --------*/
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
