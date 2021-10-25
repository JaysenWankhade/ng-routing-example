import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PublicComponent } from './public/public.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    children: [
      {
        path: 'childA/:id',
        component: ChildAComponent,
      },
      {
        path: 'childB',
        component: ChildBComponent,
      },
    ],
  },
  {
    path: 'second',
    component: SecondComponent,
  },
  {
    path: 'public',
    component: PublicComponent,
  },
  {
    path: '',
    component: FirstComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
