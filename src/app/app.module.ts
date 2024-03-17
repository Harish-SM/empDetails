import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import {TableModule} from 'primeng/table';




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    DropdownModule,
    CheckboxModule,
    FormsModule,TableModule
    
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
