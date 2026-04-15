import { Lanche } from "./Lanche";

export abstract class Adiconal implements Lanche {

    constructor(protected lanche: Lanche) {}

    getDescricao(): string {
        return this.lanche.getDescricao()
    }
    getPreco(): number {
        return this.lanche.getPreco()
    }

}