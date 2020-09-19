import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { LoginPAgeComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:BodyComponent},
  {path:'body',component:BodyComponent},

{ path:'login',component:LoginPAgeComponent},
{path:'register',component:RegisterComponent},
{path:'contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BodyComponent,LoginPAgeComponent,RegisterComponent,ContactComponent]
