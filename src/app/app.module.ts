import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CdParamsComponent } from './params/cd-params/cd-params.component';
import { CdCanvasComponent } from './canvas/cd-canvas/cd-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    CdParamsComponent,
    CdCanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
