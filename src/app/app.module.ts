import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from "./app.route";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, APP_ROUTING],
  bootstrap: [AppComponent]
})
export class AppModule { }
