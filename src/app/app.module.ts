import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginasModule } from './paginas/paginas.module';

import { UserInterceptorService } from './interceptores/UserInterceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PaginasModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UserInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
