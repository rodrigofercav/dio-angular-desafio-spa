import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SexoEnum } from '../shared/enum/sexo.enum';
import { Pessoa } from './pessoa';
import { PessoaService } from './pessoa.service';

@Component({
    selector: 'app-pessoa-por-sexo',
    templateUrl: './pessoa-por-sexo.component.html',
    styleUrls: ['./pessoa-por-sexo.component.css']
})
export class PessoaPorSexoComponent implements OnInit, OnChanges {
    @Input() refreshList: boolean = false;
    @Input() flagSexo!: string;
    listaPorSexo!: Pessoa[];
    titulo!: string;

    constructor(private pessoaService: PessoaService) { }

    ngOnInit(): void {
        this.titulo = this.flagSexo.toUpperCase() === 'F' ? "Lista de Mulheres" : "Lista de Homens";
        this.getPessoasPorSexo();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.getPessoasPorSexo();
    }

    getPessoasPorSexo() {
        this.pessoaService.getAll().subscribe({
            next: pessoas => {
                this.listaPorSexo = pessoas;

                console.log(this.listaPorSexo);

                this.listaPorSexo = this.listaPorSexo.filter((pessoa) => {
                    return pessoa.sexo.toUpperCase() === this.flagSexo.toUpperCase()
                });
            },
            error: err => console.log("Erro ao recuperar registros de {PESSOAS}")
        });
    }

}
