import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SmFormValidationModule} from 'sm-validation';




@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
      SmFormValidationModule.forRoot({
        defaultErrors: {
          required: () => 'This is custom'
        }
      })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
