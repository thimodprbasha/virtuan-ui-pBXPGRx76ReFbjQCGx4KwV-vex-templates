import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormElementsRoutingModule } from './form-page/form-elements-routing.module';
import { FormElementsComponent } from './form-page/form-elements.component';
import { PageLayoutModule } from '../../../@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SecondaryToolbarModule } from '../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { BreadcrumbsModule } from '../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { ContainerModule } from '../../../@vex/directives/container/container.module';
import { MatSnackBarModule } from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import {MatCardModule} from '@angular/material/card'; //--------------
import {MatFormFieldModule} from '@angular/material/form-field';//-------------
import {MatDividerModule} from '@angular/material/divider';//--------------------


// import { TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [FormElementsComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    FormElementsRoutingModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    IconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    SecondaryToolbarModule,
    BreadcrumbsModule,
    ContainerModule,
    MatSnackBarModule,
    HttpClientModule,
    MatCardModule,//-----------
    MatFormFieldModule,//-------
    FormsModule,//-------------
    MatDividerModule //-------------
  ]
})
export class Page3Module {
}
