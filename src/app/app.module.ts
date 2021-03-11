import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceIdentificationComponent } from './service-identification/service-identification.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ServiceIdentificationComponent,
    ServiceProviderComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    TabsModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
