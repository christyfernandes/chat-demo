import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {ChatLibModule} from 'chat-lib';
import {ChatLibModule} from '../../node_modules/chat-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
