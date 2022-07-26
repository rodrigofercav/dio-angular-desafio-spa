import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pessoa } from "./pessoa";

@Injectable({
    providedIn: "root"
})
export class PessoaService {

    private pessoasUrl: string = "http://localhost:3100/api/pessoas";

    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<Pessoa[]> {
        return this.httpClient.get<Pessoa[]>(this.pessoasUrl);
    }

    getById(id: number): Observable<Pessoa> {
        return this.httpClient.get<Pessoa>(`${this.pessoasUrl}/${id}`);
    }

    save(pessoa: Pessoa): Observable<Pessoa> {
        if (pessoa.id)
            return this.httpClient.put<Pessoa>(`${this.pessoasUrl}/${pessoa.id}`, pessoa);

        return this.httpClient.post<Pessoa>(this.pessoasUrl, pessoa);
    }

    deleteById(id: number): Observable<any> {
        return this.httpClient.delete<Pessoa>(`${this.pessoasUrl}/${id}`);
    }
}
