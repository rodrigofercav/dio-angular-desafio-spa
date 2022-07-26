import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaViewComponent } from './pessoa/pessoa-view.component';
import { DesafioComponent } from './desafio/desafio.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
    { path: "", redirectTo: "pessoa", pathMatch: "full" },
    { path: "pessoa", component: PessoaViewComponent },
    { path: "desafio", component: DesafioComponent },
    { path: "**", component: Error404Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
