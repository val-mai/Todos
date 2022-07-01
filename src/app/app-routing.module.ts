import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './components/completed/completed.component';
import { ImportantComponent } from './components/important/important.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [{
  path : "all",
  pathMatch : 'full',
  component : TodosComponent
},
{
  path : "completed",
  pathMatch : 'full',
  component : CompletedComponent
},
{
  path : "important",
  pathMatch : 'full',
  component : ImportantComponent
},
{
  path: '',
  redirectTo: '/all',
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
