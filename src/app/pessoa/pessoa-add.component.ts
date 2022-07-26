import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Pessoa } from './pessoa';
import { PessoaService } from './pessoa.service';

interface ISexo {
    sigla: string;
    descricao: string;
}

@Component({
    selector: 'app-pessoa-add',
    templateUrl: './pessoa-add.component.html',
    styleUrls: ['./pessoa-add.component.css']
})
export class PessoaAddComponent {

    constructor(private pessoaService: PessoaService) { }

    @Output() eeAtualizaFilhos = new EventEmitter();

    nome = new FormControl('', [Validators.required]);
    email = new FormControl('', [Validators.required, Validators.email]);
    sexo = new FormControl('', [Validators.required]);
    listaSexos: ISexo[] = [
        { sigla: "f", descricao: "Feminino" },
        { sigla: "m", descricao: "Masculino" }
    ]

    save(): void {
        let pessoa = {
            nome: this.nome.value,
            email: this.email.value,
            sexo: this.sexo.value
        } as Pessoa;

        this.pessoaService.save(pessoa).subscribe({
            next: pessoa => console.log("Sucesso."),
            error: err => console.log("Falha ao adicionar.")
        });

        console.log("passou aqui save -> ngOnInit");

        //limpa campos da tela
        this.nome.reset();
        this.email.reset();
        this.sexo.reset();

        this.eeAtualizaFilhos.emit();
    }

    //Validações
    validaNome(): string | null {
        return this.nome.hasError('required') ? 'Nome é um campo obrigatório!' : null;
    }

    validaEmail(): string | null {
        if (this.email.hasError('required'))
            return 'E-mail é um campo obrigatório!';

        return this.email.hasError('email') ? 'Este e-mail não é válido!' : null;
    }

    validaSexo(): string | null {
        return this.sexo.hasError('required') ? 'Sexo é um campo obrigatório!' : null;
    }
}
