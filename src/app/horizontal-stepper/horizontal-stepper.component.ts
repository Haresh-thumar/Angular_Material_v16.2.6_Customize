import { BreakpointObserver } from '@angular/cdk/layout';
import { STEPPER_GLOBAL_OPTIONS, StepperOrientation } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-horizontal-stepper',
  templateUrl: './horizontal-stepper.component.html',
  styleUrls: ['./horizontal-stepper.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class HorizontalStepperComponent {

  /*----------------------------------------------------------
                    Stepper animations
----------------------------------------------------------*/
  // constructor(private _formBuilder: FormBuilder) { }
  firstFormGroup: FormGroup = this._formBuilder.group({ firstCtrl: [''] });
  secondFormGroup: FormGroup = this._formBuilder.group({ secondCtrl: [''] });


  /*----------------------------------------------------------
                Stepper with editable steps
----------------------------------------------------------*/
  isEditable = false;

  /*----------------------------------------------------------
                    Stepper responsive
----------------------------------------------------------*/
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

}
