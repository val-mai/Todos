import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompletedComponent } from './components/completed/completed.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ImportantComponent } from './components/important/important.component';
import { InputComponent } from './components/input/input.component';
import { TodosComponent } from './components/todos/todos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    CompletedComponent,
    ImportantComponent,
    TodosComponent,
    InputComponent,
    FiltersComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
