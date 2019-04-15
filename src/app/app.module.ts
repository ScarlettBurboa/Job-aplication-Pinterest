import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { PixabayService } from './services/pixabay.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule, ScrollDispatchModule } from '@angular/cdk/scrolling';
import {  TruncatePipe }   from './components/image-list/image-list.pipe';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ImageListComponent, TruncatePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,
    ScrollDispatchModule,
    
  ],
  providers: [PixabayService],
  bootstrap: [AppComponent]
})
export class AppModule {}
