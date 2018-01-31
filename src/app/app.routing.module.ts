import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlaylistDetalheComponent } from './playlist/playlist-detalhe/playlist-detalhe.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from './shared/guards/auth-guard';


const ROUTES: Routes = [
        
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

    { path: 'login', component: LoginComponent },

    { path: 'perfil', component: PerfilComponent },

    { path: 'playlist/:id', component: PlaylistDetalheComponent, canActivate: [AuthGuard] },

    { path: '**', component: HomeComponent,  canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}