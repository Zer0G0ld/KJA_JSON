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
- **Textos em hebraico** segmentados por fala
- **Identificação de falas** de Deus (azul) e personagens comuns
- **Notas de estudo** e referências cruzadas (estrutura preparada)
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
- **Texto completo em hebraico** segmentado por fala
- **Identificação de falas** com personagens e cores:
  - 🟦 **Deus** - azul, destaque true
  - 🟥 **Jesus** - vermelho, destaque true (previsto)
  - ⚫ **Comum** - cor padrão, destaque false
- **Estrutura pronta** para inserção de notas de estudo
- **Estrutura pronta** para referências cruzadas
- **Apêndices** (Mapas, Concordância, Tabelas)

### 📊 Estatísticas
- **Total de livros:** 66 (39 AT + 27 NT)
- **Total de capítulos:** 1.189
- **Total de versículos:** 31.102
- **Formato:** JSON estruturado e aninhado
- **Versificação:** KJA (King James Atualizada)
- **Idioma do JSON:** Português (campos de conteúdo)

## 🗂️ Estrutura do JSON

### Visão Geral

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
          "id": "gn",
          "livro": "Gênesis",
          "subtitulo": "בְּרֵאשִׁית Bereshit / No princípio",
          "introducao": {
            "autoria": ["texto completo..."],
            "propositos": ["texto completo..."],
            "data_da_primeira_publicacao": ["texto completo..."],
            "esboco_geral_de_genesis": [...]
          },
          "capitulos": {
            "numero": 1,
            "titulo": "No Princípio בְּרֵאשִׁית",
            "versiculos": [ ... ]
          }
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

### 📖 Estrutura de um Versículo (Detalhada)

```json
{
  "id": "gn.1.3",
  "numero": 3,
  "texto": "Disse Deus: \"Haja luz!\", e houve luz.",
  "texto_hebraico": "וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי- אוֹר:",
  "falas": [
    {
      "personagem": "Comum",
      "texto": "Disse Deus: ",
      "texto_hebraico": "וַיֹּאמֶר אֱלֹהִים",
      "cor": "default",
      "destaque": false
    },
    {
      "personagem": "Deus",
      "texto": "Haja luz!",
      "texto_hebraico": "יְהִי אוֹר",
      "cor": "azul",
      "destaque": true
    },
    {
      "personagem": "Comum",
      "texto": ", e houve luz.",
      "texto_hebraico": "וַיְהִי- אוֹר:",
      "cor": "default",
      "destaque": false
    }
  ],
  "notas": [],
  "referencia_cruzada": []
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

#### JavaScript/Node.js - Acessando Versículos com Falas
```javascript
const bibliaKJA = require('./KJA.json');

// Acessar Gênesis capítulo 1
const genesis = bibliaKJA.conteudo.antigo_testamento.livros[0];
const capitulo1 = genesis.capitulos;

// Renderizar versículo com destaque para fala de Deus
capitulo1.versiculos.forEach(versiculo => {
  if (versiculo.falas) {
    versiculo.falas.forEach(fala => {
      if (fala.personagem === 'Deus') {
        console.log(`\x1b[34m${fala.texto}\x1b[0m`); // Azul no terminal
      } else {
        console.log(fala.texto);
      }
    });
  } else {
    console.log(versiculo.texto);
  }
});

// Acessar texto em hebraico segmentado
const hebraicoCompleto = versiculo.falas
  .map(f => f.texto_hebraico)
  .join('');
console.log(hebraicoCompleto);
```

#### Python - Processamento de Falas
```python
import json

with open('KJA.json', 'r', encoding='utf-8') as file:
    biblia = json.load(file)

# Função para renderizar versículo com cores
def renderizar_versiculo(versiculo):
    if 'falas' in versiculo:
        for fala in versiculo['falas']:
            if fala['personagem'] == 'Deus':
                print(f"\033[34m{fala['texto']}\033[0m", end='')
            else:
                print(fala['texto'], end='')
        print()
    else:
        print(versiculo['texto'])

# Renderizar Gênesis 1.1-5
genesis = biblia['conteudo']['antigo_testamento']['livros'][0]
for versiculo in genesis['capitulos']['versiculos'][:5]:
    print(f"{versiculo['numero']}. ", end='')
    renderizar_versiculo(versiculo)
```

#### React/Next.js - Componente com Destaque de Falas
```javascript
import bibliaKJA from './KJA.json';

function Versiculo({ versiculo }) {
  if (!versiculo.falas) {
    return <span>{versiculo.texto}</span>;
  }

  return (
    <span>
      {versiculo.falas.map((fala, idx) => {
        const estilo = {
          color: fala.cor === 'azul' ? '#3498db' : 
                 fala.cor === 'vermelho' ? '#e74c3c' : 'inherit',
          fontWeight: fala.destaque ? 'bold' : 'normal'
        };
        
        return (
          <span key={idx} style={estilo}>
            {fala.texto}
          </span>
        );
      })}
    </span>
  );
}

// Uso
const genesis = bibliaKJA.conteudo.antigo_testamento.livros[0];
const versiculo3 = genesis.capitulos.versiculos[2];

return <Versiculo versiculo={versiculo3} />;
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

### 🚧 Em Andamento
- [ ] Continuação de Gênesis (capítulos 2-50)
- [ ] Adição de notas de estudo
- [ ] Adição de referências cruzadas
- [ ] Continuação dos demais livros do Antigo Testamento
- [ ] Inserção do Novo Testamento

### 📝 Próximos Passos
1. Completar Gênesis com todos os 50 capítulos
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
2. **Clone** seu fork: `git clone https://github.com/seu-usuario/KJA_JSON.git`
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
- **Mantenha o padrão de segmentação de falas** (Comum, Deus, Jesus)
- **Inclua texto hebraico** sempre que disponível

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
| 1.0.0 | 2026-04-01 | 🚧 Em desenvolvimento | Estrutura completa, metadados, sumário, apresentação, prefácio, introdução de Gênesis e **Capítulo 1 completo com 31 versículos, segmentação de falas e hebraico** |

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