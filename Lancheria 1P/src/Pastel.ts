import { Lanche } from "./Lanche"

export class Pastel implements Lanche {
    getDescricao(): string {
        return "Pastel de carne"
    }
    getPreco(): number {
        return 10
    }
}