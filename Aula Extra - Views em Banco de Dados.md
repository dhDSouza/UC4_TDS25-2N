# 🎲 Aula Extra – Views em Banco de Dados

## 🫣 O que são Views?

`Views` (ou *visualizações*) no contexto de banco de dados são **consultas SQL armazenadas que se comportam como tabelas virtuais**.

Ou seja:

* Elas **não armazenam dados fisicamente**
* Elas exibem dados que vêm de uma ou mais tabelas
* Funcionam como uma “tabela personalizada”

> [!TIP]
> Uma *View* é como se você salvasse um `SELECT` e pudesse reutilizá-lo como se fosse uma tabela.

> [!NOTE]
> Em resumo uma maneira mais rápida de fazer uma consulta complexa, sem ter que ficar repetindo código

<div align="center">
    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZxNzJwNGk4bXJ0YnplNHEzN3ZoNnc3d2p1Z3Q1cjk0MDJqdHV3eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/d3mlE7uhX8KFgEmY/giphy.gif">
</div>

---

## 🧠 Por que usar Views?

Views são muito úteis para:

✔ Simplificar consultas complexas   
✔ Reutilizar consultas frequentemente usadas   
✔ Aumentar a segurança (mostrar apenas colunas específicas)   
✔ Organizar melhor o banco de dados   
✔ Esconder a complexidade de JOIN's   

---

## 🏗️ Estrutura básica de uma View

No `MySQL` para criar uma `View` utilizamos o seguinte comando:

```sql
CREATE VIEW nome_da_view AS
SELECT colunas
FROM tabela
WHERE condição;
```

---

## 📌 Exemplo prático

Imagine que temos uma tabela chamada `usuarios`:

```sql
SELECT * FROM usuarios;
```

| id | nome   | email                                       | salario |
|:--:|:------:|:-------------------------------------------:|:-------:|
| 1  | Ana    | [ana@email.com](mailto:ana@email.com)       | 5000    |
| 2  | Carlos | [carlos@email.com](mailto:carlos@email.com) | 7000    |

Agora queremos criar uma View que mostre apenas nome e email:

```sql
CREATE VIEW vw_usuarios_publicos AS
SELECT nome, email
FROM usuarios;
```

Agora podemos usar:

```sql
SELECT * FROM vw_usuarios_publicos;
```

E o resultado será como se fosse uma tabela normal 🎉

---

## 🔄 Atualizando uma View

Se precisar alterar:

```sql
CREATE OR REPLACE VIEW vw_usuarios_publicos AS
SELECT nome
FROM usuarios;
```

---

## ❌ Excluindo uma View

```sql
DROP VIEW vw_usuarios_publicos;
```

---

## 🔐 Segurança com Views

Você pode:

* Criar uma view que **não mostre dados sensívies**   
* Dar permissão ao usuário apenas para acessar a View   
* Impedir o acesso direto à tabela original   

---

## ⚠️ Pontos Importantes

* A View **não armazena dados**   
* Se os dados da tabela mudarem, a View muda automaticamente   
* Views podem conter `JOIN`   

---

## 🚀 Exemplo com JOIN

Suponha duas tabelas:

* `pedidos`
* `clientes`

```sql
CREATE VIEW vw_pedidos_clientes AS
SELECT 
    p.id,
    c.nome,
    p.valor
FROM pedidos p
JOIN clientes c ON p.cliente_id = c.id;
```

Agora você pode fazer:

```sql
SELECT * FROM vw_pedidos_clientes;
```

Sem precisar reescrever o JOIN 👏

---

# 🏋🏻 Exercícios

## Cenário exemplo: Loja de Vendas

```sql
CREATE TABLE produtos (
    id_produto SERIAL PRIMARY KEY NOT NULL,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    estoque INT
);

CREATE TABLE vendas (
    id_venda SERIAL PRIMARY KEY NOT NULL,
    id_produto INT,
    quantidade INT,
    data_venda DATE,
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);

INSERT INTO produtos VALUES 
    (default, 'Notebook', 3500.00, 10), 
    (default, 'Mouse', 50.00, 50), 
    (default, 'Teclado', 100.00, 0);

INSERT INTO vendas VALUES 
    (default, 1, 2, '2023-10-01'), 
    (default, 2, 5, '2023-10-02'), 
    (default, 3, 1, '2023-10-02');
```

### 1. View Simples (Filtro Básico)

Objetivo: Criar uma view que mostre apenas os produtos com estoque disponível (estoque > 0).
- Nome da View: `vw_produtos_disponiveis`

### 2. View com Joins (Junção de Tabelas)

Objetivo: Criar uma view que mostre o nome do produto e a quantidade vendida de cada venda.
- Nome da View: `vw_relatorio_vendas`

### 3. View com Agregação (Totalização)

Objetivo: Criar uma view que calcule o total faturado por produto (preço * quantidade).
- Nome da View: `vw_faturamento_produto`

### 4. Consulta e Visualização da View

Objetivo: Após criar a view `vw_faturamento_produto`, selecione apenas os produtos com faturamento superior a 1000.

### 5. Excluindo uma View

Objetivo: Excluir a view `vw_produtos_disponiveis`.

# 🎯 Resumo Final

| Conceito                 | Explicação                       |
|:------------------------:|:--------------------------------:|
| View                     | Tabela virtual baseada em SELECT |
| Armazena dados?          | ❌ Não                           |
| Atualiza sozinha?        | ✅ Sim                           |
| Pode usar JOIN?          | ✅ Sim                           |
| Pode melhorar segurança? | ✅ Sim                           |
