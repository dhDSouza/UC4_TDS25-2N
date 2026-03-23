# 💸 Aula 5 - Programação Orientada à Objetos: Pilar da Herança

## 1. 🤔 O que é Herança?

**Herança** é um mecanismo da POO que permite criar **novas classes baseadas em classes já existentes**.
Assim, uma classe filha pode **reaproveitar atributos e métodos** da classe mãe (ou classe base).

👉 Exemplo do mundo real:

* Todos os **animais** têm um nome e uma forma de se alimentar.
* Mas um **cachorro** late e um **gato** mia.
* Ambos **herdam** as características de “Animal”, mas adicionam o que é específico.

---

## 2. 📦 Por que usar Herança?

* ✅ **Reaproveitamento de código** → evita repetição.
* ✅ **Organização** → facilita estruturar classes de forma hierárquica.
* ✅ **Expansão** → é fácil adicionar novos tipos sem mudar os antigos.

*Exemplo prático:*

Se você criar um sistema de veículos, a classe base pode ser `Veiculo`, e depois você cria `Carro`, `Moto`, `Caminhao` herdando dela.

---

## 3. 👨‍💻 Exemplo prático com Animais

```ts
// Classe base (superclasse)
class Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  comer() {
    console.log(`${this.nome} está comendo.`);
  }
}

// Classe filha (subclasse)
class Cachorro extends Animal {
  latir() {
    console.log(`${this.nome} está latindo: Au au!`);
  }
}

class Gato extends Animal {
  miar() {
    console.log(`${this.nome} está miando: Miau!`);
  }
}

// Criando instâncias
const rex = new Cachorro("Rex");
const felix = new Gato("Felix");

rex.comer();   // Rex está comendo.
rex.latir();   // Rex está latindo: Au au!
felix.comer(); // Felix está comendo.
felix.miar();  // Felix está miando: Miau!
```

> [!TIP]
> Repare que tanto `Cachorro` quanto `Gato` **herdaram** o método `comer()` da classe `Animal`.

---

## 4. 🏎️ Exemplo com Veículos

```ts
// Classe base
class Veiculo {
  marca: string;

  constructor(marca: string) {
    this.marca = marca;
  }

  mover() {
    console.log(`${this.marca} está se movendo.`);
  }
}

// Classes filhas
class Carro extends Veiculo {
  buzinar() {
    console.log(`${this.marca} está buzinando: Biii Biii!`);
  }
}

class Moto extends Veiculo {
  empinar() {
    console.log(`${this.marca} está empinando a moto!`);
  }
}

const carro = new Carro("Toyota");
const moto = new Moto("Honda");

carro.mover();   // Toyota está se movendo.
carro.buzinar(); // Toyota está buzinando: Biii Biii!
moto.mover();    // Honda está se movendo.
moto.empinar();  // Honda está empinando a moto!
```

---

## 5. 🔄 Sobrescrita de Métodos (Override)

Uma classe filha pode **reescrever** um método da classe pai para se comportar de forma diferente.

```ts
class Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  emitirSom() {
    console.log(`${this.nome} fez um som.`);
  }
}

class Cachorro extends Animal {
  emitirSom() {
    console.log(`${this.nome} latiu: Au au!`);
  }
}

class Gato extends Animal {
  emitirSom() {
    console.log(`${this.nome} miou: Miau!`);
  }
}

const rex = new Cachorro("Rex");
const felix = new Gato("Felix");

rex.emitirSom();   // Rex latiu: Au au!
felix.emitirSom(); // Felix miou: Miau!
```

> Isso mostra o **Polimorfismo em ação** (outro pilar que veremos depois).

---

## 6. ⚖️ Vantagens da Herança

* Reduz repetição de código.
* Facilita manutenção e extensibilidade.
* Representa melhor o mundo real com hierarquias (ex: Animal → Mamífero → Cachorro).

---

## 7. 📝 Exercícios

### 🔎 Pesquisa

1. Cite 3 exemplos do mundo real que poderiam ser representados com herança (ex: Veículo → Carro/Moto).
2. Qual a diferença entre **classe pai** e **classe filha**?
3. Pesquise: em quais linguagens além do TypeScript existe herança em POO?

### 💻 Prática

1. Crie uma classe `Pessoa` com:

   * atributo `nome`.
   * método `apresentar()`.

   Depois crie duas classes filhas:

   * `Professor` (com método `ensinar()`).
   * `Aluno` (com método `estudar()`).

   Crie objetos de cada e teste seus métodos.

2. Crie uma classe `Funcionario` com:

   * atributos `nome` e `salario`.
   * método `mostrarSalario()`.

   Depois crie as classes filhas:

   * `Gerente` (com método `aumentarSalario()`).
   * `Estagiario` (com método `receberAjudaDeCusto()`).
