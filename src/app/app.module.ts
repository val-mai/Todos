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
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CompletedComponent,
    ImportantComponent,
    TodosComponent,
    InputComponent,
    FiltersComponent,
    FooterComponent,
    HeaderComponent,
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
