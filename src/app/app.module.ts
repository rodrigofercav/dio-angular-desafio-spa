import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesafioComponent } from './desafio/desafio.component';
import { Error404Component } from './error404/error404.component';
import { MatCustomModule } from './mat-custom.module';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { PessoaAddComponent } from './pessoa/pessoa-add.component';
import { PessoaListComponent } from './pessoa/pessoa-list.component';
import { PessoaPorSexoComponent } from './pessoa/pessoa-por-sexo.component';
import { PessoaViewComponent } from './pessoa/pessoa-view.component';
import { SexoPipe } from './shared/pipe/sexo.pipe';

@NgModule({
    declarations: [
        AppComponent,
        Error404Component,
        MenuContainerComponent,
        DesafioComponent,
        PessoaListComponent,
        PessoaAddComponent,
        PessoaViewComponent,
        PessoaPorSexoComponent,
        SexoPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatCustomModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
