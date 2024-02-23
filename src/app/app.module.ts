import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './databinding/interpolation/interpolation.component';
import { Interpolation1Component } from './databinding/interpolation1/interpolation1.component';
import { Interpolation2Component } from './databinding/interpolation2/interpolation2.component';
import { Interpolation3Component } from './databinding/interpolation3/interpolation3.component';
import { PropertybindingComponent } from './databinding/propertybinding/propertybinding.component';
import { Propertybinding1Component } from './databinding/propertybinding1/propertybinding1.component';
import { Propertybinding2Component } from './databinding/propertybinding2/propertybinding2.component';
import { Propertybinding3Component } from './databinding/propertybinding3/propertybinding3.component';
import { EventbindingComponent } from './databinding/eventbinding/eventbinding.component';



@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    Interpolation1Component,
    Interpolation2Component,
    Interpolation3Component,
    PropertybindingComponent,
    Propertybinding1Component,
    Propertybinding2Component,
    Propertybinding3Component,
    EventbindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
