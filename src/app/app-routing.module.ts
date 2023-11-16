import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodypartComponent } from './components/bodypart/bodypart.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':name', component: BodypartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
