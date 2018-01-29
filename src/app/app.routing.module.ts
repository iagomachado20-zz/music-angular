import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlaylistDetalheComponent } from './playlist/playlist-detalhe/playlist-detalhe.component';

const ROUTES: Routes = [
        
    { path: 'home', component: HomeComponent },

    { path: 'login', component: LoginComponent },

    { path: 'playlist/:id', component: PlaylistDetalheComponent },

    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}