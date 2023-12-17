import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {

  constructor(private _bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetCompoComponent);
  }

  closeBottomSheet() {
    this._bottomSheet.dismiss(BottomSheetCompoComponent);
  }

}



/*----------------- Drawer Content -----------------*/
@Component({
  selector: 'bottom-sheet-compo',
  template: `
  <mat-nav-list>
  <a href="https://keep.google.com/" target="_blank" mat-list-item>
    <span matListItemTitle>Google Keep</span>
    <span matLine>Add to a note</span>
  </a>

  <a href="https://docs.google.com/" target="_blank" mat-list-item>
    <span matListItemTitle>Google Docs</span>
    <span matLine>Embed in a document</span>
  </a>

  <a href="https://plus.google.com/" target="_blank" mat-list-item>
    <span matListItemTitle>Google Plus</span>
    <span matLine>Share with your friends</span>
  </a>

  <a href="https://hangouts.google.com/" target="_blank" mat-list-item>
    <span matListItemTitle>Google Hangouts</span>
    <span matLine>Show to your coworkers</span>
  </a>
</mat-nav-list><br><br>
<button mat-raised-button color="primary" (click)="openLink($event)">Close</button>
`,
  styleUrls: ['./bottom-sheet.component.scss'],
  standalone: true,
  imports: [MatListModule, MatButtonModule],
})
export class BottomSheetCompoComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetCompoComponent>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}


