import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TakeTestComponent } from './component/take-test/take-test.component';
import { ViewTestResultsComponent } from '../admin/component/view-test-results/view-test-results.component';
import { ViewMyTestResultsComponent } from './component/view-my-test-results/view-my-test-results.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'view-test-results', component:ViewMyTestResultsComponent},
  {path:'take-test/:testId', component:TakeTestComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
