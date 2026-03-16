# 🧙‍♂️ Aula 4 - Programação Orientada a Objetos
## O Pilar do Encapsulamento (Versão Terra-média)

Nesta aula vamos entender um dos pilares da **Programação Orientada a Objetos (POO)** usando referências de **The Fellowship of the Ring**, a primeira parte da saga **The Lord of the Rings**, escrita por **J. R. R. Tolkien**.

Na história, vários personagens protegem informações, objetos ou poderes perigosos. Esse conceito se conecta diretamente com **encapsulamento**.

---

## 🧿 O que é Encapsulamento?

Encapsulamento significa **proteger os dados de um objeto**, controlando **quem pode acessá-los e de que forma**.

Na Terra-média existe um ótimo exemplo: o **One Ring**.

O anel possui um poder enorme e perigoso. Ele não pode simplesmente ficar circulando livremente entre todos. Por isso ele precisa ser **guardado e controlado**, inicialmente por **Frodo Baggins**, sob orientação de **Gandalf**.

Se qualquer pessoa pudesse usar o anel sem restrições, o caos tomaria conta da Terra-média.

Na programação acontece a mesma coisa.

Se qualquer parte do programa puder modificar dados internos de um objeto livremente, o sistema pode quebrar.

Encapsulamento resolve isso.

---

# 🏰 Encapsulamento na prática

Em **TypeScript**, usamos **modificadores de acesso** para controlar quem pode acessar atributos e métodos.

| Modificador | Significado                              |
| ----------- | ---------------------------------------- |
| `public`    | acessível de qualquer lugar              |
| `private`   | acessível somente dentro da classe       |
| `protected` | acessível na classe e nas classes filhas |
| `readonly`  | pode ser lido, mas não alterado          |

Isso funciona como **regras dentro da Sociedade do Anel**: cada membro tem responsabilidades específicas.

---

## 💍 Exemplo: Guardião do Anel

Vamos criar uma classe que representa alguém responsável por proteger o anel.

```ts
class GuardiaoDoAnel {
  private portador: string;

  constructor(nome: string) {
    this.portador = nome;
  }

  public mostrarPortador(): void {
    console.log(`O atual portador do anel é: ${this.portador}`);
  }

  public passarAnel(novoPortador: string): void {
    console.log(`O anel foi passado para ${novoPortador}`);
    this.portador = novoPortador;
  }
}

const anel = new GuardiaoDoAnel("Frodo");

anel.mostrarPortador();
anel.passarAnel("Sam");
anel.mostrarPortador();

// Não funciona:
// console.log(anel.portador)
```

O atributo `portador` é **privado**.

Isso significa que ninguém pode alterar diretamente quem possui o anel.

A troca só pode acontecer através do método `passarAnel()`.

Assim o objeto mantém **controle sobre seu próprio estado**.

---

## 🧙 Exemplo: Energia de um Mago

Agora um exemplo inspirado em **Gandalf**.

Magos possuem poder, mas precisam administrá-lo com cuidado.

```ts
class Mago {
  private energia: number;

  constructor() {
    this.energia = 100;
  }

  public conjurarMagia(): void {
    if (this.energia >= 30) {
      this.energia -= 30;
      console.log("O mago lançou uma poderosa magia!");
    } else {
      console.log("Energia insuficiente!");
    }
  }

  public descansar(): void {
    this.energia = 100;
    console.log("O mago descansou e recuperou sua energia.");
  }

  public mostrarEnergia(): void {
    console.log(`Energia atual: ${this.energia}`);
  }
}

const gandalf = new Mago();

gandalf.conjurarMagia();
gandalf.mostrarEnergia();
gandalf.descansar();
```

Se `energia` fosse pública, alguém poderia fazer algo absurdo como:

```ts
gandalf.energia = -500
```

Encapsulamento evita esse tipo de problema.

---

## 🛡️ Por que encapsular?

Encapsulamento traz várias vantagens importantes:

### Proteção de dados

- Evita alterações incorretas no estado interno do objeto.

### Regras claras

- Define **como os dados podem ser manipulados**.

### Manutenção mais fácil

- Você pode mudar a implementação interna da classe sem quebrar o restante do sistema.

### Código mais confiável

- Menos chances de bugs causados por manipulação indevida.

---

## 🧭 Exercícios

### Pesquisa

1. O que pode acontecer em um sistema se todos os atributos de uma classe forem `public`?
2. Qual a diferença entre `private` e `protected` no TypeScript?
3. Cite exemplos do mundo real que precisam de encapsulamento.

Exemplos possíveis:

* cofres
* contas bancárias
* sistemas de segurança
* controles de acesso

---

### Prática

#### Exercício 1 — Hobbit

Crie uma classe `Hobbit`.

Requisitos:

* atributo privado `idade`
* método `fazerAniversario()` que aumenta a idade
* método `mostrarIdade()` que exibe a idade

---

#### Exercício 2 — Espada Élfica

Crie uma classe `EspadaElfica`.

Requisitos:

* atributo privado `durabilidade`
* método `usar()` que reduz a durabilidade
* método `reparar()` que recupera a durabilidade
* método `mostrarDurabilidade()`
