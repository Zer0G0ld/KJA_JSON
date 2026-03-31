# 📖 Bíblia de Estudo King James Atualizada (KJA) - Formato JSON

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Zer0G0ld/KJA_JSON)
[![License](https://img.shields.io/badge/license-Study%20Purpose-green.svg)](https://github.com/Zer0G0ld/KJA_JSON)
[![Language](https://img.shields.io/badge/language-Portuguese-red.svg)]()
[![JSON](https://img.shields.io/badge/format-JSON-yellow.svg)]()

## 📚 Sobre o Projeto

Este projeto tem como objetivo disponibilizar a **Bíblia de Estudo King James Atualizada (KJA) - Edição 400 Anos** em formato JSON estruturado, facilitando a integração em aplicações, sites, apps de estudo bíblico e ferramentas digitais.

O JSON foi criado manualmente com base na versão física da Bíblia de Estudo King James Atualizada, preservando fielmente a estrutura, o conteúdo e as características da edição original, incluindo:

- **Apresentação** do Pr. Carlos Alberto de Quadros Bezerra
- **Prefácio** do Dr. Lisânias Moura
- **Introduções completas** de cada livro (autoria, propósitos, data, esboço)
- **Textos em hebraico** (Bereshit, etc.)
- **Notas de estudo** e referências cruzadas
- **Sumário completo** com número de capítulos

### 🎯 Propósito

- Fornecer uma versão digital estruturada e fiel da KJA
- Facilitar o desenvolvimento de aplicações bíblicas em português
- Manter a fidelidade ao texto original da edição física de estudo
- Oferecer uma estrutura rica com metadados, sumários, introduções e organização completa
- Permitir fácil navegação entre livros, capítulos e versículos
- Preservar o conteúdo de estudo (notas, introduções, referências)

## 📋 Características

### ✅ Inclui
- **Metadados completos** (ISBN, editora, copyright, entidades parceiras)
- **Seções preliminares** 
  - Reprodução do fac-símile da KJV 1611
  - Apresentação completa (Pr. Carlos A. Q. Bezerra)
  - Prefácio completo (Dr. Lisânias Moura)
  - Ajudas ao Leitor
- **Sumário completo** do Antigo e Novo Testamento com número de capítulos
- **Introduções detalhadas** dos livros (autoria, propósitos, data, esboço)
- **Estrutura pronta** para inserção dos textos bíblicos
- **Suporte para referências cruzadas** e notas de estudo
- **Apêndices** (Mapas, Concordância, Tabelas)

### 📊 Estatísticas
- **Total de livros:** 66 (39 AT + 27 NT)
- **Total de capítulos:** 1.189
- **Formato:** JSON estruturado e aninhado
- **Versificação:** KJA (King James Atualizada)
- **Idioma do JSON:** Português (campos de conteúdo)

## 🗂️ Estrutura do JSON

```json
{
  "metadata": {
    "name": "King James Atualizada",
    "abbreviation": "KJA",
    "language": "Portuguese",
    "titulo": "Bíblia Sagrada",
    "subtitulo": "Edição de Estudo King James Atualizada - 400 Anos",
    "copyright": { ... },
    "traducao_e_revisao": { ... },
    "publicacao": { ... },
    "entidades_parceiras": [ ... ],
    "digital_project": { ... }
  },
  
  "conteudo": {
    "secoes_preliminares": [
      { "tipo": "apresentacao", "autor": "Pr. Carlos A. Q. Bezerra", "conteudo": [...] },
      { "tipo": "prefacio", "autor": "Dr. Lisânias Moura", "conteudo": [...] },
      { "tipo": "fac_simile", "titulo": "KJV 1611", ... },
      { "tipo": "ajudas_ao_leitor", ... }
    ],
    
    "sumario": {
      "antigo_testamento": {
        "nome": "Antigo Testamento",
        "total_livros": 39,
        "livros": [
          {"ordem": 1, "nome": "Gênesis", "abreviacao": "Gn", "capitulos": 50},
          ...
        ]
      },
      "novo_testamento": { ... }
    },
    
    "antigo_testamento": {
      "livros": [
        {
          "livro": "Gênesis",
          "introducao": {
            "autoria": ["texto completo..."],
            "propositos": ["texto completo..."],
            "data_da_primeira_publicacao": ["texto completo..."],
            "esboco_geral_de_genesis": []
          },
          "capitulos": []
        }
      ]
    },
    
    "novo_testamento": {
      "livros": []
    },
    
    "apendices": {
      "mapas": { ... },
      "concordancia": { ... },
      "tabelas": { ... }
    }
  }
}
```

### 📖 Estrutura de um Livro (em desenvolvimento)

```json
{
  "livro": "Gênesis",
  "introducao": {
    "autoria": [
      "Texto completo sobre a autoria mosaica...",
      "Evidências históricas e bíblicas..."
    ],
    "propositos": [
      "Propósito teológico e literário...",
      "Divisões principais da obra..."
    ],
    "data_da_primeira_publicacao": [
      "Data tradicional (1446-1406 a.C.)...",
      "Perspectivas acadêmicas contemporâneas..."
    ],
    "esboco_geral_de_genesis": []
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
              "conteudo": "A criação ex nihilo...",
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
console.log(bibliaKJA.metadata.subtitulo);

// Acessar a apresentação
const apresentacao = bibliaKJA.conteudo.secoes_preliminares.find(
  secao => secao.tipo === 'apresentacao'
);
console.log(apresentacao.autor.nome);
console.log(apresentacao.conteudo[0]);

// Listar todos os livros do Antigo Testamento
const livrosAT = bibliaKJA.conteudo.sumario.antigo_testamento.livros;
livrosAT.forEach(livro => {
  console.log(`${livro.ordem}. ${livro.nome} (${livro.abreviacao}) - ${livro.capitulos} capítulos`);
});

// Acessar introdução de Gênesis
const genesis = bibliaKJA.conteudo.antigo_testamento.livros[0];
console.log(genesis.introducao.autoria[0]);
```

#### Python
```python
import json

with open('KJA.json', 'r', encoding='utf-8') as file:
    biblia = json.load(file)

# Acessar informações
print(biblia['metadata']['titulo'])
print(f"Total de livros no AT: {biblia['conteudo']['sumario']['antigo_testamento']['total_livros']}")

# Acessar prefácio
for secao in biblia['conteudo']['secoes_preliminares']:
    if secao['tipo'] == 'prefacio':
        print(f"Prefácio por: {secao['autor']['nome']}")
        print(secao['conteudo'][0][:200] + "...")

# Listar livros do NT
for livro in biblia['conteudo']['sumario']['novo_testamento']['livros']:
    print(f"{livro['ordem']}. {livro['nome']}")
```

#### React/Next.js
```javascript
import bibliaKJA from './KJA.json';

function BibleApp() {
  const livrosAT = bibliaKJA.conteudo.sumario.antigo_testamento.livros;
  const apresentacao = bibliaKJA.conteudo.secoes_preliminares.find(
    s => s.tipo === 'apresentacao'
  );
  
  return (
    <div>
      <h1>{bibliaKJA.metadata.titulo}</h1>
      <h2>{bibliaKJA.metadata.subtitulo}</h2>
      
      <section className="presentation">
        <h3>{apresentacao.titulo_secao}</h3>
        <p>{apresentacao.conteudo[0]}</p>
      </section>
      
      <div className="books-list">
        <h3>Antigo Testamento</h3>
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
- [x] Estrutura JSON completa e validada
- [x] Metadados completos da edição
- [x] Sumário do Antigo e Novo Testamento (66 livros)
- [x] Seções preliminares (Apresentação, Prefácio, Fac-símile, Ajudas)
- [x] Apêndices estruturados
- [x] Introdução de Gênesis (autoria, propósitos, data)

### 🚧 Em Andamento
- [ ] Inserção do texto completo de Gênesis (50 capítulos)
- [ ] Adição de notas de estudo e referências cruzadas
- [ ] Continuação dos demais livros do Antigo Testamento
- [ ] Inserção do Novo Testamento

### 📝 Próximos Passos
1. Completar Gênesis com todos os capítulos e versículos
2. Adicionar introduções dos demais livros
3. Incluir notas de rodapé e referências cruzadas
4. Criar scripts de validação e testes
5. Gerar versões otimizadas para diferentes casos de uso
6. Adicionar mapas, concordância e tabelas

## 📄 Licença e Direitos Autorais

### Direitos da Edição Impressa
- **Tradução:** King James Atualizada (KJA)
- **Copyright:** Abba Press Editora e Divulgadora Cultural Ltda.
- **Edição de Estudo:** 400 Anos
- **ISBN:** 978-65-6003-014-5
- **Apresentação:** Pr. Carlos Alberto de Quadros Bezerra
- **Prefácio:** Dr. Lisânias Moura

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
2. **Clone** seu fork: `git clone https://github.com/Zer0G0ld/KJA_JSON.git`
3. **Crie uma branch** para sua feature: `git checkout -b minha-feature`
4. **Commit** suas mudanças: `git commit -m 'Adiciona nova feature'`
5. **Push** para a branch: `git push origin minha-feature`
6. Abra um **Pull Request**

### Diretrizes
- Mantenha a fidelidade ao texto original da KJA
- Respeite a estrutura JSON estabelecida
- Verifique a acentuação e ortografia
- Teste a validade do JSON após alterações
- Preserve as notas de estudo e referências cruzadas

## 📞 Contato

**Criador:** Zer0G0ld  
**GitHub:** [https://github.com/Zer0G0ld](https://github.com/Zer0G0ld)  
**Projeto:** [https://github.com/Zer0G0ld/KJA_JSON](https://github.com/Zer0G0ld/KJA_JSON)

### Relatar Problemas
Encontrou um erro ou inconsistência? Abra uma issue no GitHub:
[https://github.com/Zer0G0ld/KJA_JSON/issues](https://github.com/Zer0G0ld/KJA_JSON/issues)

## 🙏 Agradecimentos

- À **Abba Press** pela tradução e edição da KJA
- À **SBIA** pela disponibilização da tradução
- Ao **Pr. Carlos Alberto de Quadros Bezerra** pela apresentação
- Ao **Dr. Lisânias Moura** pelo prefácio
- A todos que contribuem para a digitalização e acesso às Escrituras

---

## 📊 Versões

| Versão | Data | Status | Descrição |
|--------|------|--------|-----------|
| 1.0.0 | 2026-03-31 | 🚧 Em desenvolvimento | Estrutura completa, metadados, sumário, apresentação, prefácio e introdução de Gênesis |

## 🔗 Links Úteis

- [Site Oficial KJA](https://bibliakingjames.com.br)
- [Abba Press](https://abbapress.com.br)
- [Casa Publicadora Paulista](https://www.cppeditora.com.br)

---

**"A tua palavra é lâmpada para os meus pés e luz para o meu caminho."**  
*Salmos 119:105 (KJA)*

---

⭐ **Se este projeto foi útil, deixe uma estrela no GitHub!** ⭐
