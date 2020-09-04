import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list/user-list.component';
import {FormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { MassageComponent } from './massage/massage.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SearchComponent,
    MassageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
