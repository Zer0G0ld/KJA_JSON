# 📖 Bíblia de Estudo King James Atualizada (KJA) - Formato JSON

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Zer0G0ld/biblia-kja-json)
[![License](https://img.shields.io/badge/license-Study%20Purpose-green.svg)](https://github.com/Zer0G0ld/biblia-kja-json)
[![Language](https://img.shields.io/badge/language-Portuguese-red.svg)]()

## 📚 Sobre o Projeto

Este projeto tem como objetivo disponibilizar a **Bíblia de Estudo King James Atualizada (KJA) - Edição 400 Anos** em formato JSON estruturado, facilitando a integração em aplicações, sites, apps de estudo bíblico e ferramentas digitais.

O JSON foi criado manualmente com base na versão física da Bíblia de Estudo King James Atualizada, preservando fielmente a estrutura, o conteúdo e as características da edição original.

### 🎯 Propósito

- Fornecer uma versão digital estruturada da KJA
- Facilitar o desenvolvimento de aplicações bíblicas
- Manter a fidelidade ao texto original da edição física
- Oferecer uma estrutura rica com metadados, sumários e organização completa
- Permitir fácil navegação entre livros, capítulos e versículos

## 📋 Características

### ✅ Inclui
- **Metadados completos** (ISBN, editora, copyright, entidades parceiras)
- **Seções preliminares** (Fac-símile KJV 1611, Apresentação, Prefácio, Ajudas ao Leitor)
- **Sumário completo** do Antigo e Novo Testamento com número de capítulos
- **Estrutura pronta** para inserção dos textos bíblicos
- **Suporte para referências cruzadas** e notas de estudo
- **Apêndices** (Mapas, Concordância, Tabelas)

### 📊 Estatísticas
- **Total de livros:** 66 (39 AT + 27 NT)
- **Total de capítulos:** 1.189
- **Formato:** JSON estruturado e aninhado
- **Versificação:** KJA (King James Atualizada)

## 🗂️ Estrutura do JSON

```json
{
  "metadata": {
    "name": "King James Atualizada",
    "abbreviation": "KJA",
    "language": "Portuguese",
    "versification": "KJA",
    "format": "application/json",
    "type": "Bible",
    "version": "1.0.0",
    "isbn": "978-65-6003-014-5",
    "titulo": "Bíblia Sagrada",
    "subtitulo": "Edição de Estudo King James Atualizada - 400 Anos",
    // ... mais metadados
  },
  "conteudo": {
    "secoes_preliminares": [...],
    "sumario": {
      "antigo_testamento": {...},
      "novo_testamento": {...}
    },
    "antigo_testamento": {
      "livros": [] // Conteúdo completo dos livros
    },
    "novo_testamento": {
      "livros": [] // Conteúdo completo dos livros
    },
    "apendices": {...}
  }
}
```

### 📖 Estrutura de um Livro

```json
{
  "ordem": 1,
  "nome": "Gênesis",
  "abreviacao": "Gn",
  "capitulos": 50,
  "introducao": {
    "autoria": "Moisés",
    "data": "Aproximadamente 1446-1406 a.C.",
    "proposito": "Relatar a origem de todas as coisas...",
    "resumo": "Gênesis narra desde a criação até a morte de José..."
  },
  "capitulos": [
    {
      "numero": 1,
      "versiculos": [
        {
          "numero": 1,
          "texto": "No princípio, criou Deus os céus e a terra.",
          "notas": [
            {
              "tipo": "estudo",
              "conteudo": "A criação ex nihilo (do nada)...",
              "referencias": ["Hb 11.3", "Jo 1.1-3"]
            }
          ]
        }
      ]
    }
  ]
}
```

## 🚀 Como Usar

### Pré-requisitos
- Node.js (para desenvolvimento JavaScript)
- Python (opcional, para processamento)
- Qualquer linguagem que suporte parsing de JSON

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Zer0G0ld/KJA_JSON.git
cd KJA_JSON
```

2. Acesse o arquivo principal:
```bash
cat KJA.json
```

### Exemplos de Uso

#### JavaScript/Node.js
```javascript
const bibliaKJA = require('./KJA.json');

// Acessar metadados
console.log(bibliaKJA.metadata.titulo);
console.log(bibliaKJA.metadata.edicao);

// Listar todos os livros do Antigo Testamento
const livrosAT = bibliaKJA.conteudo.sumario.antigo_testamento.livros;
livrosAT.forEach(livro => {
  console.log(`${livro.ordem}. ${livro.nome} (${livro.abreviacao}) - ${livro.capitulos} capítulos`);
});

// Acessar um versículo específico (quando preenchido)
const genesis = bibliaKJA.conteudo.antigo_testamento.livros[0];
const versiculo1 = genesis.capitulos[0].versiculos[0];
console.log(`${genesis.nome} ${versiculo1.numero}: ${versiculo1.texto}`);
```

#### Python
```python
import json

with open('KJA.json', 'r', encoding='utf-8') as file:
    biblia = json.load(file)

# Acessar informações
print(biblia['metadata']['titulo'])
print(f"Total de livros no AT: {biblia['conteudo']['sumario']['antigo_testamento']['total_livros']}")

# Listar livros do NT
for livro in biblia['conteudo']['sumario']['novo_testamento']['livros']:
    print(f"{livro['ordem']}. {livro['nome']}")
```

#### React/Next.js
```javascript
import bibliaKJA from './KJA.json';

function BibleApp() {
  const livrosAT = bibliaKJA.conteudo.sumario.antigo_testamento.livros;
  
  return (
    <div>
      <h1>{bibliaKJA.metadata.titulo}</h1>
      <h2>{bibliaKJA.metadata.subtitulo}</h2>
      
      <div className="books-list">
        {livrosAT.map(livro => (
          <div key={livro.ordem}>
            <span>{livro.ordem}</span>
            <span>{livro.nome}</span>
            <span>{livro.capitulos} capítulos</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## 🔧 Status do Projeto

### ✅ Concluído
- [x] Estrutura JSON completa
- [x] Metadados da edição
- [x] Sumário do Antigo e Novo Testamento
- [x] Seções preliminares
- [x] Apêndices

### 🚧 Em Andamento
- [ ] Inserção do texto completo do Antigo Testamento
- [ ] Inserção do texto completo do Novo Testamento
- [ ] Adição de notas de estudo e referências cruzadas
- [ ] Adição de mapas e ilustrações
- [ ] Validação de versículos

### 📝 Próximos Passos
1. Inserir os textos dos livros na ordem correta
2. Adicionar introduções de cada livro
3. Incluir notas de rodapé e referências cruzadas
4. Criar scripts de validação e testes
5. Gerar versões otimizadas para diferentes casos de uso

## 📄 Licença e Direitos Autorais

### Direitos da Edição Impressa
- **Tradução:** King James Atualizada (KJA)
- **Copyright:** Abba Press Editora e Divulgadora Cultural Ltda.
- **Edição de Estudo:** 400 Anos
- **ISBN:** 978-65-6003-014-5

### Uso Digital
Este projeto é mantido para **fins de estudo e desenvolvimento**. O conteúdo textual pertence aos detentores dos direitos autorais da edição impressa. Para uso comercial ou distribuição em larga escala, consulte:

- **SBIA** - https://bibliakingjames.com.br
- **Abba Press** - https://abbapress.com.br
- **CPP** - https://www.cppeditora.com.br

### Citação Recomendada
```
BÍBLIA. King James Atualizada. Edição de Estudo - 400 Anos. 
São Paulo: Casa Publicadora Paulista, 2020.
```

## 🤝 Como Contribuir

Contribuições são bem-vindas! Siga os passos:

1. **Fork** o projeto
2. **Clone** seu fork
3. **Crie uma branch** para sua feature: `git checkout -b minha-feature`
4. **Commit** suas mudanças: `git commit -m 'Adiciona nova feature'`
5. **Push** para a branch: `git push origin minha-feature`
6. Abra um **Pull Request**

### Diretrizes
- Mantenha a fidelidade ao texto original da KJA
- Respeite a estrutura JSON estabelecida
- Verifique a acentuação e ortografia
- Teste a validade do JSON após alterações

## 📞 Contato

**Criador:** Zer0G0ld  
**GitHub:** [https://github.com/Zer0G0ld](https://github.com/Zer0G0ld)  
**Projeto:** [https://github.com/Zer0G0ld/biblia-kja-json](https://github.com/Zer0G0ld/biblia-kja-json)

### Relatar Problemas
Encontrou um erro ou inconsistência? Abra uma issue no GitHub:
[https://github.com/Zer0G0ld/biblia-kja-json/issues](https://github.com/Zer0G0ld/biblia-kja-json/issues)

## 🙏 Agradecimentos

- À **Abba Press** pela tradução e edição da KJA
- À **SBIA** pela disponibilização da tradução
- A todos que contribuem para a digitalização e acesso às Escrituras

---

## 📊 Versões

| Versão | Data | Status | Descrição |
|--------|------|--------|-----------|
| 1.0.0 | 2026-03-30 | 🚧 Em desenvolvimento | Estrutura inicial com metadados e sumário |

## 🔗 Links Úteis

- [Site Oficial KJA](https://bibliakingjames.com.br)
- [Abba Press](https://abbapress.com.br)
- [Casa Publicadora Paulista](https://www.cppeditora.com.br)

---

**"A tua palavra é lâmpada para os meus pés e luz para o meu caminho."**  
*Salmos 119:105 (KJA)*

---

⭐ **Se este projeto foi útil, deixe uma estrela no GitHub!** ⭐