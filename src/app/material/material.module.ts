import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from'@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatExpansionModule,} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge';
import { MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatToolbarModule,
    MatIconModule,MatButtonModule,
    MatSidenavModule,MatListModule,
  MatFormFieldModule,MatInputModule,
  MatProgressSpinnerModule,MatCardModule,
  ScrollingModule,MatTabsModule,MatButtonToggleModule,
  MatDatepickerModule,MatCheckboxModule,
  MatNativeDateModule,MatBottomSheetModule,MatExpansionModule,
  MatTableModule,MatSnackBarModule,MatStepperModule,
  MatChipsModule,MatDialogModule,MatSelectModule,MatPaginatorModule,
  FlexLayoutModule,MatMenuModule, HttpClientModule,MatBadgeModule,MatRadioModule
  ],
  exports:[ CommonModule,MatToolbarModule,
    MatIconModule,MatButtonModule,
    MatSidenavModule,MatListModule,
    MatFormFieldModule,MatInputModule,
    MatProgressSpinnerModule,MatCardModule,
    ScrollingModule,MatTabsModule,MatButtonToggleModule,
    MatDatepickerModule,MatCheckboxModule,
    MatNativeDateModule,MatExpansionModule,
    MatTableModule,MatSnackBarModule,MatStepperModule, MatChipsModule,MatDialogModule,
    MatSelectModule,MatPaginatorModule,MatPaginatorModule,MatSortModule,
    FlexLayoutModule,MatMenuModule,MatBadgeModule,MatRadioModule
  ]
})
export class MaterialModule { }
