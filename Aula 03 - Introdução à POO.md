# 👩‍💻 Introdução à Programação Orientada a Objetos (POO) com TypeScript

## 🤔 O que é POO?

A **Programação Orientada a Objetos (POO)** é um **paradigma de programação** que organiza o código como um conjunto de **objetos**, que têm **atributos (propriedades)** e **comportamentos (métodos)**.   
Em vez de pensar apenas em funções soltas e variáveis espalhadas, você modela o código parecido com o **mundo real**.

💭 Imagine que o mundo ao nosso redor é feito de **objetos**:

* 🚘 Um **carro** tem cor, modelo, velocidade e pode acelerar ou frear.
* 🐈 Um **gato** tem nome, idade, cor, e pode miar ou dormir.
* 📱 Um **celular** tem marca, modelo, bateria, e pode ligar ou tirar fotos.

Na programação, a **Orientação a Objetos (OO)** é uma forma de organizar o código para que ele se pareça com esse mundo cheio de objetos.

👉 **Definição simples:**
POO é organizar o código em **objetos**, que possuem **características** (propriedades) e **ações** (métodos).

---

## 📦 Objetos e Classes: Conceitos Básicos

* **Classe:** é como um **molde** ou **planta**. Exemplo: a classe `Carro` define como um carro deve ser (quantas rodas, motor, cor).
* **Objeto:** é uma **instância** desse molde, ou seja, um carro específico: *"um carro azul da Toyota"*.

<div align="center">
    <img src="https://arquivo.devmedia.com.br/artigos/Thiago_Varallo/Introducao_POO_Java/Introducao_POO_Java3.jpg">
    <p>Fonte: <em>
        <a href="https://arquivo.devmedia.com.br/artigos/Thiago_Varallo/Introducao_POO_Java/Introducao_POO_Java3.jpg" target="_blank">
            https://arquivo.devmedia.com.br/artigos/Thiago_Varallo/Introducao_POO_Java/Introducao_POO_Java3.jpg
        </a>
    </em></p>
</div>

## 🚀 Por que usar POO?

* **Organização**: o código fica mais estruturado e fácil de entender.
* **Reaproveitamento**: você cria classes que podem ser reutilizadas.
* **Manutenção**: facilita alterações e expansões.
* **Modelagem realista**: pensa no código como **`entidades`** do mundo real ou imaginário.

> Pense no **Dragon Ball**: em vez de reescrever todo o código para cada personagem, você faz uma **classe `Saiyajin`**, e depois cria `Goku`, `Vegeta`, `Broly` como instâncias dela.

---

## 📘 Por que TypeScript é melhor que JavaScript para POO?

* **Classes e Tipos mais fortes**: no JS até dá pra fazer POO, mas fica meio “solto”. O TS traz **tipagem estática** e **recursos mais sólidos**, deixando menos espaço pra erro.
* **Autocomplete e IntelliSense**: no VS Code, você ganha sugestões automáticas, facilitando a vida.
* **Mais próximo de linguagens tradicionais** como Java e C#, que também usam POO — o que ajuda vai ajudar muito quando forem migrar para outras tecnologias.

---

## 🏛️ Os 4 Pilares da POO

Esses pilares serão estudados em detalhe depois, mas aqui vai o panorama geral:

1. **Encapsulamento** 🛡️ → Proteger dados internos de uma classe.
2. **Herança** 👑 → Criar classes baseadas em outras.
3. **Polimorfismo** 🎭 → Objetos diferentes respondendo ao mesmo método de formas distintas.
4. **Abstração** 🧩 → Focar só no que importa, escondendo a complexidade.

---

## 👨‍💻 Exemplo prático em TypeScript

```ts
// Definição de uma classe
class Personagem {
  nome: string;
  poder: number;

  constructor(nome: string, poder: number) {
    this.nome = nome;
    this.poder = poder;
  }

  atacar() {
    console.log(`${this.nome} atacou com poder ${this.poder}!`);
  }
}

// Criando instâncias
const goku = new Personagem("Goku", 9000);
const darthVader = new Personagem("Darth Vader", 8500);

goku.atacar();       // Goku atacou com poder 9000!
darthVader.atacar(); // Darth Vader atacou com poder 8500!
```

👉 Repare: **Classe = molde** | **Objeto = personagem criado a partir do molde**

---

## 📝 Exercícios

### 🔎 Pesquisa

1. Pesquise e traga **2 exemplos da vida real** que poderiam ser representados como classes em POO.
2. Compare POO com **Programação Funcional**: quais as principais diferenças?
3. Dê exemplos de linguagens que usam fortemente POO.

### 💻 Prática

1. Crie uma classe `Ninja` com:

   * `nome`, `aldeia`, `jutsus` (lista de strings).
   * Um método `usarJutsu()` que imprime qual jutsu foi usado.
   * Instancie pelo menos **2 ninjas diferentes** e teste seus métodos.
2. Crie uma classe `Héroi` com:

   * `nome`, `universo` (Marvel, DC, etc), `poder`.
   * Um método `lutar()` que mostre o herói e o poder usado.
   * Teste criando, por exemplo, o **Batman** e o **Homem de Ferro**.
