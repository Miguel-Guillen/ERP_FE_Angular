import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';

import { SidebarComponent } from './utils/sidebar/sidebar.component';
import { FooterComponent } from './utils/footer/footer.component';

@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    SidebarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
