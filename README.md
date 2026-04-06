# 📖 Bíblia de Estudo King James Atualizada (KJA) - Formato JSON

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Zer0G0ld/KJA_JSON)
[![License](https://img.shields.io/badge/license-Study%20Purpose-green.svg)](https://github.com/Zer0G0ld/KJA_JSON)
[![Language](https://img.shields.io/badge/language-Portuguese-red.svg)]()
[![JSON](https://img.shields.io/badge/format-JSON-yellow.svg)]()
[![Hebrew](https://img.shields.io/badge/Hebrew-Supported-blue.svg)]()
[![Interactive Notes](https://img.shields.io/badge/Notes-Interactive-orange.svg)]()
[![Fidelity](https://img.shields.io/badge/Fidelity-100%25%20to%20Physical%20Edition-brightgreen.svg)]()

## 📚 Sobre o Projeto

Este projeto tem como objetivo disponibilizar a **Bíblia de Estudo King James Atualizada (KJA) - Edição 400 Anos** em formato JSON altamente estruturado, facilitando a integração em aplicações, sites, apps de estudo bíblico e ferramentas digitais.

O JSON foi criado manualmente com base na versão física da Bíblia de Estudo King James Atualizada, preservando fielmente a estrutura, o conteúdo e as características da edição original, incluindo:

- **Apresentação** do Pr. Carlos Alberto de Quadros Bezerra
- **Prefácio** do Dr. Lisânias Moura
- **Introduções completas** de cada livro (autoria, propósitos, data, esboço)
- **Notas de estudo** detalhadas para versículos com **exibição interativa**
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

## 📁 Estrutura do Projeto

```
KJA_JSON/
├── data/
│   └── KJA.json                # Arquivo principal da Bíblia em JSON
├── src/
│   ├── js/
│   │   └── bible-reader.js     # Script em JavaScript/Node.js
│   ├── python/
│   │   └── bible_reader.py     # Script em Python
│   └── web/
│       └── bible_reader.html   # Interface web (HTML/JS) com notas interativas
├── LICENSE
├── README.md
├── package.json                # Dependências Node.js
└── requirements.txt            # Dependências Python
```

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
- **Notas de estudo** versículo por versículo com **exibição interativa** (clique para abrir/fechar)
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
  "notes_id": 2,
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

#### Para JavaScript/Node.js:
```bash
# Instalar Node.js (versão 14+)
# https://nodejs.org/

# Instalar dependências
npm install
```

#### Para Python:
```bash
# Instalar Python 3.8+
# https://python.org

# Instalar dependências
pip install -r requirements.txt
```

#### Para Web:
- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Servidor web local (opcional)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Zer0G0ld/KJA_JSON.git
cd KJA_JSON

# Instalar dependências Node.js
npm install

# Instalar dependências Python (opcional)
pip install -r requirements.txt
```

### Scripts Disponíveis

#### JavaScript/Node.js

```bash
# Exibir ajuda
npm start -- --help

# Exibir metadados da Bíblia
npm run info

# Listar livros do Antigo Testamento
npm run books:at

# Listar livros do Novo Testamento
npm run books:nt

# Ler Gênesis capítulo 1
npm run read:gn1

# Ler versículo específico (Gênesis 1:1)
npm run verse:gn1-1

# Pesquisar por palavra
node src/js/bible-reader.js --search amor

# Executar manualmente
node src/js/bible-reader.js --read gn 1
```

#### Python

```bash
# Exibir ajuda
python src/python/bible_reader.py --help

# Exibir metadados
python src/python/bible_reader.py --info

# Listar livros do Antigo Testamento
python src/python/bible_reader.py --books at

# Listar livros do Novo Testamento
python src/python/bible_reader.py --books nt

# Ler Gênesis capítulo 1
python src/python/bible_reader.py --read gn 1

# Ler versículo específico
python src/python/bible_reader.py --verse gn 1 1

# Pesquisar por palavra
python src/python/bible_reader.py --search amor
```

#### Web (Interface Interativa)

A interface web oferece uma experiência rica com:

- 📖 **Leitura de capítulos** com formatação preservada
- 🎨 **Destaque colorido** para falas de Deus (azul)
- ⓘ **Notas interativas** - clique no ícone para abrir/fechar notas
- 🔍 **Pesquisa integrada** por palavras-chave
- 📚 **Navegação** por todos os livros do Antigo Testamento

```bash
# Iniciar servidor web
cd src/web
python -m http.server 8000
# Acesse http://localhost:8000

# Ou com Node.js
npx http-server src/web -o
```

### Exemplos de Uso em Código

#### JavaScript/Node.js

```javascript
const bibleReader = require('./src/js/bible-reader');

// Exemplo de uso programático
const BibleReader = require('./src/js/bible-reader');
const bible = new BibleReader('./data/KJA.json');

// Acessar metadados
console.log(bible.getMetadata().title);

// Ler capítulo
bible.displayChapter('gn', 1);

// Pesquisar
const results = bible.search('criou');
console.log(results);
```

#### Python

```python
from src.python.bible_reader import BibleReader

# Carregar Bíblia
bible = BibleReader('data/KJA.json')

# Acessar metadados
print(bible.get_metadata()['title'])

# Ler capítulo
bible.display_chapter('gn', 1)

# Pesquisar
results = bible.search('criou')
print(results)
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
- [x] **Notas de estudo** para versículos selecionados (Gn 1.1-30)
- [x] **Campos da estrutura em inglês** para padronização internacional
- [x] **Scripts de consumo** (Node.js, Python, Web)
- [x] **Interface web com notas interativas** (clique para abrir/fechar)

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

## 📖 Política de Fidelidade ao Texto Original

Este projeto tem como compromisso principal **manter a fidelidade absoluta** à edição física da Bíblia de Estudo King James Atualizada (KJA) - 400 Anos.

### ✅ O que é permitido
- Correções de **erros ortográficos** evidentes (typos)
- Ajustes de **formatação** que não alterem o sentido do texto
- Melhorias na **estrutura do JSON** para melhor consumo em apps
- Adição de **metadados** e informações técnicas

### ❌ O que NÃO é permitido na branch `main`
- Alteração de **notas de estudo** (conteúdo teológico)
- Modificação do **texto bíblico** (versículos)
- Mudança na **segmentação de falas** (quem fala o quê)
- Adição ou remoção de **notas** que existem na versão física

### 🌿 Política de Branches

| Branch | Propósito |
|--------|-----------|
| `main` | Versão **idêntica** à Bíblia física (referência oficial) |
| `dev` | Desenvolvimento de novas funcionalidades nos scripts |
| `experimental/notas` | Testes de correções ortográficas e pequenos ajustes |
| `feature/*` | Novas funcionalidades nos leitores (JS, Python, Web) |

### 📝 Correções de Notas

Caso sejam identificados **erros ortográficos** nas notas de estudo:

1. Crie uma branch a partir da `main`:
   ```bash
   git checkout -b experimental/notas/correcao-ortografica
   ```

2. Faça as correções **apenas nas notas** (não no texto bíblico)

3. Abra um **Pull Request** descrevendo:
   - Quais notas foram alteradas
   - Qual foi a correção aplicada
   - Comparação com a versão física (se disponível)

4. As correções serão revisadas e, se aprovadas, mescladas à `main`

### 🔍 Verificação de Erros

Se você encontrar um possível erro (ortográfico ou de digitação) nas notas:

- Abra uma **Issue** no GitHub
- Informe o versículo/capítulo e o texto atual
- Informe a correção sugerida
- Anexe foto da versão física (se possível)

### 🎯 Princípio Fundamental

> **"O JSON deve ser um reflexo digital fiel da Bíblia física, preservando seu conteúdo de estudo integralmente."**

Alterações que alterem o **sentido teológico** ou o **conteúdo doutrinário** das notas não serão aceitas na branch `main`.


### Diretrizes
- Mantenha a fidelidade ao texto original da KJA (branch `main`)
- Respeite a estrutura JSON estabelecida (campos em inglês)
- Verifique a acentuação e ortografia
- Teste a validade do JSON após alterações
- Preserve as notas de estudo e referências cruzadas
- **Mantenha o padrão de segmentação de falas** (Comum, Deus, Jesus)
- **Inclua texto hebraico** sempre que disponível
- **Adicione notas de estudo** conforme presente na edição física
- **Correções ortográficas** devem ser feitas em branches separadas (não diretamente na `main`)

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
| 1.0.0 | 2026-04-06 | 🚧 Em desenvolvimento | Estrutura completa com campos em inglês, metadados, sumário, apresentação, prefácio, introdução de Gênesis, **Capítulo 1 completo com 31 versículos**, **nota do título**, **notas de estudo** (Gn 1.1-30), segmentação de falas, hebraico, **scripts de consumo** (Node.js, Python, Web) e **interface web com notas interativas** |

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