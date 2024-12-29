import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CreateTestComponent } from './component/create-test/create-test.component';
import { AddQuestionInTestComponent } from './component/add-question-in-test/add-question-in-test.component';
import { ViewTestComponent } from './component/view-test/view-test.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'create-test', component:CreateTestComponent},
  {path:'add-question/:testId', component:AddQuestionInTestComponent},
  {path:'view-test/:testId', component:ViewTestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
