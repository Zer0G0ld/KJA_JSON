# 📖 Bíblia de Estudo King James Atualizada (KJA) - Formato JSON

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Zer0G0ld/KJA_JSON)
[![License](https://img.shields.io/badge/license-Study%20Purpose-green.svg)](https://github.com/Zer0G0ld/KJA_JSON)
[![Language](https://img.shields.io/badge/language-Portuguese-red.svg)]()
[![JSON](https://img.shields.io/badge/format-JSON-yellow.svg)]()
[![Hebrew](https://img.shields.io/badge/Hebrew-Supported-blue.svg)]()

## 📚 Sobre o Projeto

Este projeto tem como objetivo disponibilizar a **Bíblia de Estudo King James Atualizada (KJA) - Edição 400 Anos** em formato JSON altamente estruturado, facilitando a integração em aplicações, sites, apps de estudo bíblico e ferramentas digitais.

O JSON foi criado manualmente com base na versão física da Bíblia de Estudo King James Atualizada, preservando fielmente a estrutura, o conteúdo e as características da edição original, incluindo:

- **Apresentação** do Pr. Carlos Alberto de Quadros Bezerra
- **Prefácio** do Dr. Lisânias Moura
- **Introduções completas** de cada livro (autoria, propósitos, data, esboço)
- **Notas de estudo** detalhadas para versículos
- **Nota do título do capítulo** com contexto histórico e teológico
- **Textos em hebraico** segmentados por fala
- **Identificação de falas** de Deus (azul) e personagens comuns
- **Referências cruzadas** (estrutura preparada)
- **Sumário completo** com número de capítulos

### 🎯 Propósito

- Fornecer uma versão digital estruturada e fiel da KJA
- Facilitar o desenvolvimento de aplicações bíblicas em português
- Manter a fidelidade ao texto original da edição física de estudo
- Oferecer uma estrutura rica com metadados, sumários, introduções e organização completa
- Permitir fácil navegação entre livros, capítulos e versículos
- Preservar o conteúdo de estudo (notas, introduções, referências)
- **Destacar visualmente** falas de Deus e Jesus em apps

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
- **Nota do título do capítulo** com contexto histórico e teológico
- **Texto completo em hebraico** segmentado por fala
- **Notas de estudo** versículo por versículo
- **Identificação de falas** com personagens e cores:
  - 🟦 **Deus** - azul, destaque true
  - 🟥 **Jesus** - vermelho, destaque true (previsto)
  - ⚫ **Comum** - cor padrão, destaque false
- **Estrutura pronta** para referências cruzadas
- **Apêndices** (Mapas, Concordância, Tabelas)

### 📊 Estatísticas
- **Total de livros:** 66 (39 AT + 27 NT)
- **Total de capítulos:** 1.189
- **Total de versículos:** 31.102
- **Formato:** JSON estruturado e aninhado
- **Versificação:** KJA (King James Atualizada)
- **Idioma dos campos de estrutura:** Inglês
- **Idioma do conteúdo bíblico:** Português

## 🗂️ Estrutura do JSON

### Visão Geral

```json
{
  "metadata": { ... },
  "content": {
    "preliminary_sections": [ ... ],
    "summary": { ... },
    "old_testament": {
      "books": [
        {
          "id": "gn",
          "book": "Gênesis",
          "subtitle": "בְּרֵאשִׁית Bereshit / No princípio",
          "introduction": { ... },
          "chapters": {
            "id": "gn.1.title",
            "number": 1,
            "title": "No Princípio בְּרֵאשִׁית",
            "note_title": "Nota explicativa sobre o título...",
            "verses": [ ... ]
          }
        }
      ]
    },
    "new_testament": { ... },
    "appendices": { ... }
  }
}
```

### 📖 Estrutura de um Versículo com Nota de Estudo

```json
{
  "id": "gn.1.1",
  "number": 1,
  "text": "No princípio, Deus criou os céus e a terra.",
  "text_hebrew": "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ:",
  "speeches": [
    {
      "character": "Comum",
      "text": "No princípio, Deus criou os céus e a terra.",
      "text_hebrew": "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ:",
      "color": "default",
      "emphasis": false
    }
  ],
  "notes": "A primeira frase nos manuscritos hebraicos... (texto completo da nota)",
  "cross-reference": []
}
```

### 🎨 Sistema de Cores para Falas

| Personagem | Cor | Destaque | Uso no App |
|------------|-----|----------|------------|
| **Deus** | `azul` | `true` | Texto em azul, possível fundo sutil |
| **Jesus** | `vermelho` | `true` | Texto em vermelho (tradição histórica) |
| **Comum** | `default` (preto) | `false` | Texto normal, sem destaque |

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

#### JavaScript/Node.js - Acessando Notas de Estudo
```javascript
const bibliaKJA = require('./KJA.json');

// Acessar Gênesis capítulo 1
const genesis = bibliaKJA.content.old_testament.books[0];
const chapter1 = genesis.chapters;

// Acessar nota do título do capítulo
console.log(chapter1.note_title);

// Acessar nota do versículo 1
const verse1 = chapter1.verses[0];
console.log(verse1.notes);

// Renderizar versículo com destaque para fala de Deus
chapter1.verses.forEach(verse => {
  if (verse.speeches) {
    verse.speeches.forEach(speech => {
      if (speech.character === 'Deus') {
        console.log(`\x1b[34m${speech.text}\x1b[0m`);
      } else {
        console.log(speech.text);
      }
    });
  }
});
```

#### Python - Processamento de Notas
```python
import json

with open('KJA.json', 'r', encoding='utf-8') as file:
    biblia = json.load(file)

# Acessar Gênesis
genesis = biblia['content']['old_testament']['books'][0]
chapter1 = genesis['chapters']

# Exibir nota do título
print(f"Nota do título: {chapter1['note_title'][:200]}...")

# Exibir nota do versículo 1
verse1 = chapter1['verses'][0]
print(f"Nota de Gn 1.1: {verse1['notes'][:200]}...")
```

#### React/Next.js - Componente com Notas
```javascript
import bibliaKJA from './KJA.json';

function ChapterDisplay({ bookId, chapterNumber }) {
  const book = bibliaKJA.content.old_testament.books.find(b => b.id === bookId);
  const chapter = book.chapters;
  
  return (
    <div>
      <h2>{chapter.title}</h2>
      {chapter.note_title && (
        <div className="chapter-note">
          <small>{chapter.note_title}</small>
        </div>
      )}
      
      {chapter.verses.map(verse => (
        <div key={verse.id} className="verse">
          <span className="verse-number">{verse.number}</span>
          <span className="verse-text">
            {verse.speeches.map((speech, idx) => (
              <span key={idx} style={{ color: speech.color === 'azul' ? 'blue' : 'inherit' }}>
                {speech.text}
              </span>
            ))}
          </span>
          {verse.notes && (
            <div className="verse-note">
              <sup>†</sup> <small>{verse.notes}</small>
            </div>
          )}
        </div>
      ))}
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
- [x] Introdução de Gênesis (autoria, propósitos, data, esboço)
- [x] **Capítulo 1 de Gênesis completo** (31 versículos)
- [x] **Segmentação de falas** com identificação de Deus (14 ocorrências)
- [x] **Texto hebraico** segmentado por fala em todos os versículos
- [x] **Nota do título do capítulo** com contexto histórico
- [x] **Notas de estudo** para versículos selecionados (Gn 1.1)
- [x] **Campos da estrutura em inglês** para padronização internacional

### 🚧 Em Andamento
- [ ] Continuação de Gênesis (capítulos 2-50)
- [ ] Adição de mais notas de estudo
- [ ] Adição de referências cruzadas
- [ ] Continuação dos demais livros do Antigo Testamento
- [ ] Inserção do Novo Testamento

### 📝 Próximos Passos
1. Completar Gênesis com todos os 50 capítulos
2. Adicionar notas de estudo para os demais versículos
3. Adicionar introduções dos demais livros
4. Incluir referências cruzadas
5. Criar scripts de validação e testes
6. Gerar versões otimizadas para diferentes casos de uso
7. Adicionar mapas, concordância e tabelas

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
2. **Clone** seu fork: `git clone https://github.com/seu-usuario/KJA_JSON.git`
3. **Crie uma branch** para sua feature: `git checkout -b minha-feature`
4. **Commit** suas mudanças: `git commit -m 'Adiciona nova feature'`
5. **Push** para a branch: `git push origin minha-feature`
6. Abra um **Pull Request**

### Diretrizes
- Mantenha a fidelidade ao texto original da KJA
- Respeite a estrutura JSON estabelecida (campos em inglês)
- Verifique a acentuação e ortografia
- Teste a validade do JSON após alterações
- Preserve as notas de estudo e referências cruzadas
- **Mantenha o padrão de segmentação de falas** (Comum, Deus, Jesus)
- **Inclua texto hebraico** sempre que disponível
- **Adicione notas de estudo** conforme presente na edição física

## 📞 Contato

**Criador:** Zer0G0ld  
**GitHub:** [https://github.com/Zer0G0ld](https://github.com/Zer0G0ld)  
**Projeto:** [https://github.com/Zer0G0ld/KJA_JSON](https://github.com/Zer0G0ld/KJA_JSON)  
**Hebraico:** [https://hebraico.pro.br](https://hebraico.pro.br)

### Relatar Problemas
Encontrou um erro ou inconsistência? Abra uma issue no GitHub:
[https://github.com/Zer0G0ld/KJA_JSON/issues](https://github.com/Zer0G0ld/KJA_JSON/issues)

## 🙏 Agradecimentos

- À **Abba Press** pela tradução e edição da KJA
- À **SBIA** pela disponibilização da tradução
- Ao **Pr. Carlos Alberto de Quadros Bezerra** pela apresentação
- Ao **Dr. Lisânias Moura** pelo prefácio
- Ao **https://hebraico.pro.br** pelos recursos de hebraico
- A todos que contribuem para a digitalização e acesso às Escrituras

---

## 📊 Versões

| Versão | Data | Status | Descrição |
|--------|------|--------|-----------|
| 1.0.0 | 2026-04-02 | 🚧 Em desenvolvimento | Estrutura completa com campos em inglês, metadados, sumário, apresentação, prefácio, introdução de Gênesis, **Capítulo 1 completo com 31 versículos**, **nota do título**, **notas de estudo** (Gn 1.1), segmentação de falas e hebraico |

## 🔗 Links Úteis

- [Site Oficial KJA](https://bibliakingjames.com.br)
- [Abba Press](https://abbapress.com.br)
- [Casa Publicadora Paulista](https://www.cppeditora.com.br)
- [Hebraico.pro.br](https://hebraico.pro.br)

---

**"A tua palavra é lâmpada para os meus pés e luz para o meu caminho."**  
*Salmos 119:105 (KJA)*

---

⭐ **Se este projeto foi útil, deixe uma estrela no GitHub!** ⭐