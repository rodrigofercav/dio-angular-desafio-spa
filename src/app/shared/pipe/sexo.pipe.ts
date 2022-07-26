import { Pipe, PipeTransform } from "@angular/core";
import { SexoEnum } from "../enum/sexo.enum";

@Pipe({
    name: "sexoPipe"
})
export class SexoPipe implements PipeTransform {

    transform(value: string): string {
        if (value.toUpperCase() === SexoEnum.FemininoSigla)
            return SexoEnum.Feminino.toString();

        if (value.toUpperCase() === SexoEnum.MasculinoSigla)
            return SexoEnum.Masculino.toString();

        return "";
    }
}
