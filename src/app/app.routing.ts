import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const ROUTES: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    { path: '**', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);