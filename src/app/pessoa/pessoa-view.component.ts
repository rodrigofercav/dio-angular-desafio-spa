import { Component } from '@angular/core';
import { SexoEnum } from '../shared/enum/sexo.enum';

@Component({
    selector: 'app-pessoa-view',
    templateUrl: './pessoa-view.component.html',
    styleUrls: ['./pessoa-view.component.css']
})
export class PessoaViewComponent {
    sexoEnum = SexoEnum;
    flagAtualizaFilhos!: boolean;

    atualizaFilhos(): void {
        this.flagAtualizaFilhos = !this.flagAtualizaFilhos;
    }
}
