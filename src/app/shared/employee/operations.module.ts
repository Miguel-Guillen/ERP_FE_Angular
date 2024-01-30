import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsRoutingModule } from './operations-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';

import { OperationsComponent } from './operations/operations.component';
import { InfoEmployeeComponent } from './info-employee/info-employee.component';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    OperationsComponent,
    InfoEmployeeComponent
  ],
  imports: [
    CommonModule,
    OperationsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule
  ]
})
export class OperationsModule { }
