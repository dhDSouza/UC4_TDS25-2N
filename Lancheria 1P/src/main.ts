import { Lanche } from "./Lanche"
import rl from 'readline-sync'
import { Pastel } from "./Pastel"
import { AdicionalBacon } from "./AdicionalBacon";
import { AdicionalMaionese } from "./AdicionalMaionese";
import { AdicionalQueijo } from "./AdicionalQueijo";

function menu() {
    const nome: string = rl.question("Qual o seu nome: ")

    console.log(`
        ---------- Pastelaria 1P ----------

        Bem-vindo, ${nome}!
        Escolha o seu lanche:

        1 - Pastel
    `);

    const opcao: number = rl.questionInt("Digite sua opção: ")

    let lanche: Lanche;

    switch(opcao) {
        case 1:
            lanche = new Pastel()
            break
        default:
            console.log('Opção inválida!')
            return
    }

    let adicionar: boolean = true

    while(adicionar) {
        console.log(`
            Deseja adicionar algo?
            
            1 - Bacon
            2 - Maionese
            3 - Queijo
            0 - Finalizar Pedido
        `)

        const opAdcional: number = rl.questionInt("Escolha: ")

        switch(opAdcional) {
            case 1:
                lanche = new AdicionalBacon(lanche)
                break
            case 2:
                lanche = new AdicionalMaionese(lanche)
                break
            case 3:
                lanche = new AdicionalQueijo(lanche)
                break
            case 0:
                adicionar = false
                break
            default:
                console.log('Opção inválida!')
                break
        }
    }

    console.log(`
        ---------- PEDIDO ----------

        Cliente: ${nome}
        Lanche: ${lanche.getDescricao()}
        Preço: R$ ${lanche.getPreco().toFixed(2)}

        Obrigado pela preferência, volte sempre! ☺️
    `)
}

menu()