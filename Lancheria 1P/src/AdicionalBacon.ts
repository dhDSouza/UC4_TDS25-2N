import { Adiconal } from "./Adicional"

export class AdicionalBacon extends Adiconal {
    getDescricao(): string {
        return super.getDescricao() + ' + bacon'
    }

    getPreco(): number {
        return super.getPreco() + 3
    }
}