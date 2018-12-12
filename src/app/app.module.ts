import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SandboxComponent } from './components/sandbox.component';
import { DustboxComponent } from './components/dustbox.component';

@NgModule({
  declarations: [
    AppComponent,
    // SandboxComponent
    DustboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
