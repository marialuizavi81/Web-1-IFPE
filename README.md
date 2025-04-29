# 🎲 Happy Toys - E-commerce System

![IFPE Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Whv-HyNgw9PqJ3cynuytzCEBko31xyVvZg&s)

> Web Development Project for IFPE - Instituto Federal de Pernambuco

## 📌 Project Overview

Happy Toys is a complete e-commerce system for toy sales, developed as part of the web development curriculum at IFPE. The system includes:

- 👤 User management module
- 📦 Inventory control system
- 🛒 Future e-commerce features

## 🧩 System Architecture

### User Module

```mermaid
classDiagram
    class Usuario {
        +String id
        +String tipo
        +adicionarEndereco()
        +atualizarContato()
    }
    class DadosPessoais {
        +String nome_completo
        +Date data_nascimento
        +String cpf
        +String genero
    }
    class Contato {
        +String email
        +String telefone
        +adicionarEndereco()
        +removerEndereco()
    }
    class Endereco {
        +String tipo
        +String cep
        +String numero
        +String complemento
        +String bairro
        +String cidade
        +String estado
        +validarCEP()
    }
    class DadosComerciais {
        +Float saldo
        +DateTime ultima_atualizacao
        +atualizarSaldo()
    }
    class Seguranca {
        +DateTime data_cadastro
        +String password
        +DateTime ultimo_login
        +String status
        +alterarSenha()
        +registrarLogin()
    }
    Usuario "1" *-- "1" DadosPessoais
    Usuario "1" *-- "1" Contato
    Usuario "1" *-- "1" DadosComerciais
    Usuario "1" *-- "1" Seguranca
    Contato "1" *-- "1..*" Endereco
```
---

```mermaid
classDiagram
    class Estoque {
        +adicionarProduto()
        +registrarMovimentacao()
        +verificarAlertas()
    }
    class Configuracoes {
        +Int nivel_alerta
        +String politica_reposicao
        +Int dias_reposicao
        +atualizarPolitica()
    }
    class Produto {
        +String id
        +String nome
        +String categoria
        +String descricao
        +Float valor
        +atualizarEstoque()
        +adicionarVariacao()
    }
    class Variacao {
        +String codigo
        +String tamanho
        +Int estoque_atual
        +String localizacao
        +atualizarLocalizacao()
    }
    class Movimentacao {
        +String tipo
        +Int quantidade
        +String motivo
        +Date data
        +registrarMovimentacao()
    }
    Estoque "1" *-- "1" Configuracoes
    Estoque "1" *-- "0..*" Produto
    Estoque "1" *-- "0..*" Movimentacao
    Produto "1" *-- "0..*" Variacao
```

## 🛠️ Tecnologias Utilizadas

| Camada          | Tecnologias                 |
|-----------------|-----------------------------|
| **Frontend**    | HTML5, CSS3, JavaScript     |
| **Backend**     | X                           |
| **Banco de Dados** |  X                       |
| **Documentação** | X                          |
| **Versionamento** | X                         |
