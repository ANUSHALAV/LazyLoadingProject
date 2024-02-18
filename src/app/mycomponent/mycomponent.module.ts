import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MycomponentRoutingModule } from './mycomponent-routing.module';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AboutComponent,
    ServiceComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MycomponentRoutingModule
  ]
})
export class MycomponentModule { }
