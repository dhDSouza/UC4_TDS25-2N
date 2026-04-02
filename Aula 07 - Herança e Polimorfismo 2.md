# 🧬 Aula 7 - Herança e Polimorfismo 2.0

<div align="center">
    <img src="./media/tropa-elite.png" width=500 height=550 border=1>
</div>


## 🤓 Revisando Herança

Herança em POO refere-se a quando uma `subclasse` (filha), **estende** os atributos e comportamentos da `superclasse` (pai).

> [!TIP]
> `Estagiario` e `Gerente` herdam de `Funcionario`.

Exemplo:

### 🗒️ Funcionario.ts

```ts
export class Funcionario {
    constructor(public nome: string, protected matricula: number, protected salario: number) {}
}
```

### 🗒️ Estagiario.ts

```ts
import { Funcionario } from './Funcionario'

export class Estagiario extends Funcionario {
    receberAjudaDeCusto(valor: number): number {
        return this.salario += valor
    }
}
```

### 🗒️ Gerente.ts

```ts
import { Funcionario } from './Funcionario'

export class Gerente extends Funcionario {
    aumentarSalario(valor: number): number {
        return this.salario += (this.salario * (valor/100))
    }
}
```

## 💭 Classes Abstratas

Uma classe abstrata é como um molde incompleto. Não podemos criar um objeto apartir dela, mas ela serve como base para outras classes.

Exemplo:

### 🗒️ Personagem.ts

```ts
export abstract class Personagem {
    constructor(public nome: string) {}
}
```

### 🗒️ Mago.ts

```ts
import { Personagem } from './Personagem'

export class Mago extends Personagem {
    atacar(): void {
        console.log(`${this.nome} está atacando!`)
    }
}
```

### 🗒️ main.ts

```ts
import { Personagem } from './Personagem'
import { Mago } from './Mago'

const mago = new Mago('Gandalf')

const personagem_generico = new Personagem('Arlindo') // Isso daqui vai gerar causar erro
```

> [!TIP]
> Sempre que alguma classe é _"genérica"_ demais para se tornar um objeto, ou fazer parte do sistema, tornaremos ela uma classe abstrata.

É possível também tornar `métodos abstratos`

Exemplo:

### 🗒️ Personagem.ts

```ts
export abstract class Personagem {
    constructor(public nome: string) {}

    apresentar(): void {
        console.log(`Olá me chamo ${this.nome}!`)
    }

    abstract prepararBatalha(): void
}
```

### 🗒️ Mago.ts

```ts
import { Personagem } from './Personagem'

export class Mago extends Personagem {
    atacar(): void {
        console.log(`${this.nome} está atacando!`)
    }
}
```

> [!DANGER]
> A classe `Mago` acusará erro, pois precisa implementar os métodos abstratos da classe `Personagem`.

> [!NOTE]
> Métodos abstratos não podem conter implementação, apenas a `"assinatura"`.

## 📜 Interfaces

Uma interface é como um contrato, ele possuí as regras que **`DEVEM`** ser seguidas a risca, mas ela em sí não pode ser instânciada.

Exemplo:

### 🗒️ Autorizavel.ts

```ts
export interface Autorizavel {
    autenticar(senha: string): boolean
}
```

### 🗒️ Promovivel.ts

```ts
export interface Promovivel {
    promover(percentual: number): void
}
```

### 🗒️ Funcionario.ts

```ts
export abstract class Funcionario {
    protected salario: number

    constructor(salario: number) {
        this.salario = salario
    }

    getSalario(): number {
        return this.salario
    }
}
```

### 🗒️ Estagiario.ts

```ts
import { Funcionario } from './Funcionario'
import { Promovivel } from './Promovivel'

export class Estagiario extends Funcionario implements Promovivel {
    promover(percentual: number): void {
        // estagiário recebe aumento fixo menor
        this.salario += this.salario * (percentual / 2 / 100)
    }
}
```

### 🗒️ Gerente.ts

```ts
import { Funcionario } from './Funcionario'
import { Autorizavel } from './Autorizavel'
import { Promovivel } from './Promovivel'

export class Gerente extends Funcionario implements Autorizavel, Promovivel {
    private senha: string

    constructor(salario: number, senha: string) {
        super(salario)
        this.senha = senha
    }

    autenticar(senha: string): boolean {
        return this.senha === senha
    }

    promover(percentual: number): void {
        this.salario += this.salario * (percentual / 100)
    }
}
```

> [!TIP]
> Diferente da classe abstrata que pode ter métodos implementados ou não, as interfaces **`APENAS ACEITAM`** as assinaturas dos métodos.

## ⚙️ Construtores personalizados

Nem sempre o construtor da `superclasse` contém tudo o que a `subclasse` precisa.
Nesses casos, a `subclasse` pode definir seu próprio construtor e chamar o construtor da `superclasse` usando `super()`.

Exemplo:

### 🗒️ Personagem.ts

```ts
export class Personagem {
    constructor(public nome: string, protected ataque: number) {}
}
```

### 🗒️ Mago.ts

```ts
import { Personagem } from './Personagem'

export class Mago extends Personagem {

    private energia: number

    constructor(nome: string, ataque: number, energia: number) {
        super(nome, ataque)
        this.energia = energia
    }
}
```

> [!TIP]
> Neste exemplo `Mago` herda de `Personagem` porém acrescenta o atributo `energia`
