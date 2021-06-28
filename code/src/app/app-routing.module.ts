import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"Tools",component:ToolsComponent},
  {path:"health",component:HealthComponent},
  {path:"Education",component:EducationComponent},
  {path:"about",component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
