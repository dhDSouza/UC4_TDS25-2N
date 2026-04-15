import { Adiconal } from "./Adicional"

export class AdicionalMaionese extends Adiconal {
    getDescricao(): string {
        return super.getDescricao() + ' + maionese'
    }

    getPreco(): number {
        return super.getPreco() + 1.50
    }
}