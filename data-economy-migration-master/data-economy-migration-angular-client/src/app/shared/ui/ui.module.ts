import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbCollapseModule, NgbDatepickerModule, NgbTimepickerModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';

import { SlimscrollDirective } from './slimscroll.directive';
import { CountToDirective } from './count-to.directive';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { PortletComponent } from './portlet/portlet.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    SlimscrollDirective,
    CountToDirective,
    PagetitleComponent,
    PortletComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ClickOutsideModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule
  ],
  // tslint:disable-next-line: max-line-length
  exports: [
    SlimscrollDirective,
    CountToDirective,
    PagetitleComponent,
    PortletComponent]
})
export class UIModule { }
