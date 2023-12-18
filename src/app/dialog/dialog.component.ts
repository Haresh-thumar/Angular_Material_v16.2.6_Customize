import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(public dialog: MatDialog) { }

  /*------------------- Dialog Animations -------------------*/
  openDialogAnimation(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AppDialogBox2Component, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialog() {
    this.dialog.open(AppDialogBox2Component);
  }


  /*---------------- Dialog Top right Position ----------------*/
  openDialog2() {
    this.dialog.open(AppDialogBox2Component, {
      position: { right: '10px', top: '10px' }
    });
  }

  /*---------------- Dialog top left Position ----------------*/
  openDialog3() {
    this.dialog.open(AppDialogBox2Component, {
      position: { left: '10px', top: '10px' }
    });
  }

  /*---------------- Dialog top Center Position ----------------*/
  openDialog4() {
    this.dialog.open(AppDialogBox2Component, {
      position: { top: '10px' }
    });
  }



  /*---------------- Dialog Bottom right Position ----------------*/
  openDialog5() {
    this.dialog.open(AppDialogBox2Component, {
      position: { right: '10px', bottom: '10px' }
    });
  }

  /*---------------- Dialog Bottom left Position ----------------*/
  openDialog6() {
    this.dialog.open(AppDialogBox2Component, {
      position: { left: '10px', bottom: '10px' }
    });
  }

  /*---------------- Dialog Bottom Center Position ----------------*/
  openDialog7() {
    this.dialog.open(AppDialogBox2Component, {
      position: { bottom: '10px' }
    });
  }



  /*---------------- Dialog Right Center Position ----------------*/
  openDialog8() {
    this.dialog.open(AppDialogBox2Component, {
      position: { right: '10px' }
    });
  }

  /*---------------- Dialog Left Center Position ----------------*/
  openDialog9() {
    this.dialog.open(AppDialogBox2Component, {
      position: { left: '10px' }
    });
  }


  /*---------------- Dialog Width & Height Change ----------------*/
  openDialog10() {
    this.dialog.open(AppDialogBox2Component, {
      height: '300px',
      width: '300px'
    });
  }

}






@Component({
  selector: 'app-dialog-box2',
  styleUrls: ['./dialog.component.scss'],
  template: `
    <h1 mat-dialog-title>Mobile No. Verification</h1>
    <mat-dialog-content class="mat-typography">
      <h3>Develop across all platforms</h3>
      <p>Learn one way to build applications with Angular and reuse your code and abilities to build
        apps for any deployment target. For web, mobile web, native mobile and native desktop.
        Learn one way to build applications with Angular and reuse your code and abilities to build
        apps for any deployment target. For web, mobile web, native mobile and native desktop.
      </p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close color="warn">Cancel</button>
      <button mat-button mat-dialog-close cdkFocusInitial color="primary">Install</button>
    </mat-dialog-actions>`,
})
export class AppDialogBox2Component {

  constructor(public dialogRef: MatDialogRef<AppDialogBox2Component>) { }

}