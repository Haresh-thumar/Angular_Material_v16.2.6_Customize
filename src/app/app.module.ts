import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/******************** MATERIAL MODULES ***********************/
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';


/******************** MATERIAL COMPONENTS ********************/
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent,
    BottomSheetComponent,
    ButtonComponent,
    ButtonToggleComponent,
    CardComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatBadgeModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
