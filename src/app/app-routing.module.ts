import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }      from './dashboard/dashboard.component';
import { TasksComponent }      from './tasks/tasks.component';
import { ProjectsComponent }      from './projects/projects.component';
import { InvoiceComponent }      from './invoice/invoice.component';



const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'invoices', component: InvoiceComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
