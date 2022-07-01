import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompletedComponent } from './components/completed/completed.component';
import { InputComponent } from './components/input/input.component';
import { FiltersComponent } from './components/filters/filters.component';
import { TodosComponent } from './components/todos/todos.component';
import { ImportantComponent } from './components/important/important.component';

@NgModule({
  declarations: [
    AppComponent,
    CompletedComponent,
    InputComponent,
    FiltersComponent,
    TodosComponent,
    ImportantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
