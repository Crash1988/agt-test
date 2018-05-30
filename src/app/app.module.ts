import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RestComponent, TooltipComponent  } from './rest/rest.component';
import { CustomRowComponent } from './custom-row/custom-row.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { GenericTableModule } from '@angular-generic-table/core';
import { ColumnSettingsModule } from '@angular-generic-table/column-settings';
import { DragulaModule } from 'ng2-dragula';


@NgModule({
  declarations: [
    AppComponent,
    RestComponent,
    CustomRowComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    GenericTableModule,
    ColumnSettingsModule,
    DragulaModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CustomRowComponent,
    
		TooltipComponent,
		]
})
export class AppModule { }
