import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';

import { HomeComponent } from './home/home.component';
import { RequestComponent } from './request/request.component';
import { HistoryComponent } from './history/history.component';
import { ReconComponent } from './recon/recon.component';
import { HelpComponent } from './help/help.component';
import { UserComponent } from './user/user.component';
import { ConnectionComponent } from './connection/connection.component';

import { UIModule } from '../shared/ui/ui.module';

import {
  NgbDropdownModule,
  NgbTabsetModule,
  NgbAccordionModule,
  NgbCollapseModule,
  NgbModalModule,
  NgbProgressbarModule,
  NgbAlertModule,
  NgbToastModule,
  NgbPopoverModule
} from '@ng-bootstrap/ng-bootstrap';

import { NgApexchartsModule } from 'ng-apexcharts';

import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { BlockUIModule } from 'primeng/blockui';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { CookieService } from '../core/services/cookie.service';
import { RequestPreviewComponent } from './request-preview/request-preview.component';

@NgModule({
  declarations: [
    HomeComponent,
    RequestComponent,
    HistoryComponent,
    ReconComponent,
    HelpComponent,
    UserComponent,
    ConnectionComponent,
    RequestPreviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    UIModule,
    NgbDropdownModule,
    NgbTabsetModule,
    NgbAccordionModule,
    NgbCollapseModule,
    NgbModalModule,
    NgbProgressbarModule,
    NgbAlertModule,
    NgbToastModule,
    NgbPopoverModule,
    NgApexchartsModule,
    TableModule,
    ConfirmDialogModule,
    BlockUIModule,
    DialogModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    TabViewModule,
    DropdownModule,
    FileUploadModule
  ],
  providers: [
    ConfirmationService,
    CookieService
  ]
})
export class PagesModule { }
