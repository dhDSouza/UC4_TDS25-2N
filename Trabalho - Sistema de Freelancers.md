# 🧾 **Atividade Avaliativa - Sistema de Freelancers**

## 💼 Projeto: Sistema de Serviços, Freelancers e Feedbacks

---

## 🏢 Contexto

A empresa fictícia **WorkMatch** conecta clientes a freelancers (designers, programadores, editores, etc.).

Nos últimos meses, surgiram novos problemas:

- dificuldade de calcular valores finais dos serviços
- falta de flexibilidade para adicionar custos extras
- ausência de um sistema de avaliação dos freelancers
- clientes não conseguem diferenciar bons profissionais

A empresa contratou sua equipe para desenvolver uma **aplicação em TypeScript** para resolver essas questões.

---

## 🎯 Objetivo do Projeto

Criar um sistema que permita:

- gerenciar serviços prestados por freelancers
- calcular valores dinamicamente
- adicionar custos extras (Decorator)
- registrar e exibir **feedbacks de clientes**

---

## 🧠 Requisitos técnicos obrigatórios

O sistema deve utilizar:

- ✅ Interfaces
- ✅ Classe abstrata
- ✅ Classes concretas
- ✅ Padrão **Decorator**

---

## 📦 Regras de negócio

---

### 🔹 1. Serviço

Cada serviço deve conter:

- nome (ex: “Criação de logo”)
- valor base

---

### 🔹 2. Adicionais (Decorator)

O sistema deve permitir adicionar custos extras ao serviço, como:

- 🚀 urgência
- 💎 bônus
- 📦 entrega prioritária

📌 Regra importante:
Os adicionais devem ser implementados com **Decorator**, sem alterar a classe base.

---

### 🔹 3. Freelancer

Cada freelancer deve possuir:

- nome
- lista de serviços realizados
- lista de feedbacks recebidos

---

### 🔹 4. Feedbacks ⭐

O sistema deve permitir que clientes registrem feedbacks para freelancers:

Cada feedback deve conter:

- comentário (texto)
- nota (ex: 1 a 5)

---

### 🔹 5. Cálculo de reputação

O freelancer deve ser capaz de:

- calcular a **média das notas recebidas**
- exibir seus feedbacks

---

## 📊 Critérios de avaliação

| Critério                   | Pontuação |
| -------------------------- | --------- |
| Uso de interface           | 2 pts     |
| Uso de classe abstrata     | 2 pts     |
| Uso correto do Decorator   | 3 pts     |
| Implementação de feedbacks | 2 pts     |
| Funcionamento geral        | 1 pt      |

---

## 🚀 Desafios extras (bônus)

- calcular média ponderada (feedback mais recente vale mais)
- exibir “⭐ Freelancer destaque” se média > 4.5
- permitir editar/remover feedbacks
- criar novos tipos de adicionais (% ao invés de valor fixo)
