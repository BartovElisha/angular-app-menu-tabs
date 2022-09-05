import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TabsComponent } from './tabs/tabs.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactmeComponent } from './contactme/contactme.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TabsComponent,
    HomeComponent,
    AboutComponent,
    ContactmeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
