import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioListComponent } from './components/radio-list/radio-list.component';
import { TextAreaCompComponent } from './components/text-area-comp/text-area-comp.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RadioListComponent,
    TextAreaCompComponent,
    SurveyFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
