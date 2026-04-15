import { Adiconal } from "./Adicional"

export class AdicionalQueijo extends Adiconal {
    getDescricao(): string {
        return super.getDescricao() + ' + queijo'
    }

    getPreco(): number {
        return super.getPreco() + 2
    }
}