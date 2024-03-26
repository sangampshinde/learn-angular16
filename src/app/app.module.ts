import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModel } from '@angular/forms';
// interpolation
import { InterpolationComponent } from './databinding/interpolation/interpolation.component';
import { Interpolation1Component } from './databinding/interpolation1/interpolation1.component';
import { Interpolation2Component } from './databinding/interpolation2/interpolation2.component';
import { Interpolation3Component } from './databinding/interpolation3/interpolation3.component';
//propertybinding
import { PropertybindingComponent } from './databinding/propertybinding/propertybinding.component';
import { Propertybinding1Component } from './databinding/propertybinding1/propertybinding1.component';
import { Propertybinding2Component } from './databinding/propertybinding2/propertybinding2.component';
import { Propertybinding3Component } from './databinding/propertybinding3/propertybinding3.component';
//eventbinding
import { EventbindingComponent } from './databinding/eventbinding/eventbinding.component';
import { Eventbinding1Component } from './databinding/eventbinding1/eventbinding1.component';
import { Eventbinding2Component } from './databinding/eventbinding2/eventbinding2.component';
import { Eventbinding3Component } from './databinding/eventbinding3/eventbinding3.component';
//two-way-data-binding
import { TwowaydatabindingComponent } from './databinding/twowaydatabinding/twowaydatabinding.component';
import { Twowaydatabinding1Component } from './databinding/twowaydatabinding1/twowaydatabinding1.component';
import { Twowaydatabinding2Component } from './databinding/twowaydatabinding2/twowaydatabinding2.component';
import { Twowaydatabinding3Component } from './databinding/twowaydatabinding3/twowaydatabinding3.component';
//ngModelChange
import { NgModelchangeComponent } from './databinding/ng-modelchange/ng-modelchange.component';
import { ChangeEventComponent } from './databinding/change-event/change-event.component';
import { ParctiseComponent } from './directives/parctise/parctise.component';
//directives
import { Parctise1Component } from './directives/parctise1/parctise1.component';
import { Parctise2Component } from './directives/parctise2/parctise2.component';
import { Practise3Component } from './directives/practise3/practise3.component';
import { Practise4Component } from './directives/practise4/practise4.component';
import { Practise5Component } from './directives/practise5/practise5.component';
import { Practise6Component } from './directives/practise6/practise6.component';
import { Practise7Component } from './directives/practise7/practise7.component';
import { Practise8Component } from './directives/practise8/practise8.component';
import { Practise9Component } from './directives/practise9/practise9.component';
import { Practise10Component } from './directives/practise10/practise10.component';
import { Practise11Component } from './directives/practise11/practise11.component';
import { Practise12Component } from './directives/practise12/practise12.component';
import { Practise13Component } from './directives/practise13/practise13.component';
import { Practise14Component } from './directives/practise14/practise14.component';
import { Practise15Component } from './directives/practise15/practise15.component';
import { Practise16Component } from './directives/practise16/practise16.component';
import { Practise17Component } from './directives/practise17/practise17.component';
import { Practise18Component } from './directives/practise18/practise18.component';
import { Practise19Component } from './directives/practise19/practise19.component';
import { Practise20Component } from './directives/practise20/practise20.component';
import { Practise21Component } from './directives/practise21/practise21.component';
import { Practise22Component } from './directives/practise22/practise22.component';
import { Practise23Component } from './directives/practise23/practise23.component';
// custom directive
import{AppNotDirective} from './app-not.directive';
import{ttClassDirective} from './tt-class.directive';
import {ttIfDirective} from './tt-if.directive';
import { Practise24Component } from './directives/practise24/practise24.component';
import{ttToggleDirective} from './ttToggle.directive';
import { Practise25Component } from './directives/practise25/practise25.component';
import{ttTooltipDirective} from './Tooltip.directive';
// pipes
import { Pipe1Component } from './pipes/pipe1/pipe1.component';
import { Pipe2Component } from './pipes/pipe2/pipe2.component';
import { Pipe3Component } from './pipes/pipe3/pipe3.component';
import { Pipe4Component } from './pipes/pipe4/pipe4.component';
import { Pipe5Component } from './pipes/pipe5/pipe5.component';
import { Pipe6Component } from './pipes/pipe6/pipe6.component';
import { Pipe7Component } from './pipes/pipe7/pipe7.component';
// custom pipe
import{ TempConverterPipe } from './temp-convertor.pipe';
import { CustompipeComponent } from './pipes/custompipe/custompipe.component';
import { DatepipeComponent } from './pipes/datepipe/datepipe.component';
import { Pipe8Component } from './pipes/pipe8/pipe8.component';
import { Pipe9Component } from './pipes/pipe9/pipe9.component';










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
     Eventbinding1Component,
     Eventbinding2Component,
     Eventbinding3Component,

     TwowaydatabindingComponent,
     Twowaydatabinding1Component,
     Twowaydatabinding2Component,
     Twowaydatabinding3Component,

     NgModelchangeComponent,
     ChangeEventComponent,

     ParctiseComponent,
     Parctise1Component,
     Parctise2Component,
     Practise3Component,
     Practise4Component,
     Practise5Component,
     Practise6Component,
     Practise7Component,
     Practise8Component,
     Practise9Component,
     Practise10Component,
     Practise11Component,
     Practise12Component,
     Practise13Component,
     Practise14Component,
     Practise15Component,
     Practise16Component,
     Practise17Component,
     Practise18Component,
     Practise19Component,
     Practise20Component,
     Practise21Component,
     Practise22Component,
     Practise23Component,
// custom ditrectives
      AppNotDirective,
      ttClassDirective,
      ttIfDirective,
      Practise24Component,
      ttToggleDirective,
      Practise25Component,
      ttTooltipDirective,
// pipes
      Pipe1Component,
      Pipe2Component,
      Pipe3Component,
      Pipe4Component,
      Pipe5Component,
      Pipe6Component,
      Pipe7Component,
  // custompipes
      TempConverterPipe,
  CustompipeComponent,
  DatepipeComponent,
  Pipe8Component,
  Pipe9Component,
      
     
    
     

     
      
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [NgModel],
  bootstrap: [AppComponent]
})

export class AppModule { }
