import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Pessoa } from './pessoa';
import { PessoaService } from './pessoa.service';

@Component({
    selector: 'app-pessoa-list',
    templateUrl: './pessoa-list.component.html',
    styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit, OnChanges {
    @Input() refreshGrid: boolean = false;

    listaPessoas!: Pessoa[];
    colunasGrid: string[] = ["id", "nome", "email", "sexo"];
    dsPessoas!: MatTableDataSource<Pessoa>;
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(private pessoaService: PessoaService) { }

    ngOnInit(): void {
        this.getAll();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.getAll();

        // --- NÃO ESTÁ FUNCIONANDO 100% --- \\
        // Encontrar solução para quando a quantidade de registros é multiplo do filtro de quantidades de linhas por página.
        // Nestes casos após adicionar uma nova pessoa, a navegação vai para penúltima página e não para última.
        // --- NÃO ESTÁ FUNCIONANDO 100% --- \\
        this.paginator && this.paginator.lastPage();
    }

    getAll(): void {
        this.pessoaService.getAll().subscribe({
            next: pessoas => {
                this.listaPessoas = pessoas;
                this.dsPessoas = new MatTableDataSource<Pessoa>(this.listaPessoas);
                this.dsPessoas.paginator = this.paginator;

            },
            error: err => console.log("Erro ao recuperar registros de {PESSOAS}")
        });
    }
}
