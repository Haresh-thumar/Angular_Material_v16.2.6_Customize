import { CheckboxComponent } from './checkbox/checkbox.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CardComponent } from './card/card.component';
import { ChipsComponent } from './chips/chips.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

const routes: Routes = [
  { path: 'badge', component: BadgeComponent },
  { path: 'bottom-sheet', component: BottomSheetComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'botton-toggle', component: ButtonToggleComponent },
  { path: 'card', component: CardComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'Chips', component: ChipsComponent },
  { path: 'date-picker', component: DatePickerComponent },
  // { path: 'dialog', component: DialogComponent },
  // { path: 'divider', component: DividerComponent },
  // { path: 'Expansion-Panel', component: ExpansionPanelComponent },
  // { path: 'input', component: InputComponent },
  // { path: 'Hstapper', component: HorizontalStepperComponent },
  // { path: 'icon', component: IconComponent },
  // { path: 'list', component: ListComponent },
  // { path: 'menu', component: MenuComponent },
  // { path: 'paginator', component: PaginatorComponent },
  // { path: 'progressBar', component: ProgressBarComponent },
  // { path: 'progressSpinner', component: ProgressSpinnerComponent },
  // { path: 'radio', component: RadioComponent },
  // { path: 'ripple', component: RippleComponent },
  // { path: 'select', component: SelectComponent },
  // { path: 'sidebar', component: SidebarComponent },
  // { path: 'slide-toggle', component: SlideToggleComponent },
  // { path: 'slider', component: SliderComponent },
  // { path: 'snackbar', component: SnackbarComponent },
  // { path: 'table', component: TableComponent },
  // { path: 'tabs', component: TabsComponent },
  // { path: 'toolbar', component: ToolbarComponent },
  // { path: 'tooltip', component: TooltipComponent },
  // { path: 'Vstapper', component: VerticalStepperComponent },
  // { path: 'tree', component: TreeComponent },
  // { path: 'typography', component: TypographyComponent },
  // { path: 'shadow', component: ShadowComponent },
  // { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
