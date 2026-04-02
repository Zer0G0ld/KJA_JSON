// bible-reader.js
// Script para consumir a Bíblia KJA em formato JSON

const fs = require('fs');
const path = require('path');

class BibleReader {
  constructor(filePath) {
    this.data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    this.bible = this.data.content;
  }

  // Obter metadados da Bíblia
  getMetadata() {
    return this.data.metadata;
  }

  // Obter informações de copyright
  getCopyright() {
    return this.data.metadata.copyright;
  }

  // Listar todos os livros do Antigo Testamento
  listOldTestamentBooks() {
    return this.bible.summary.old_testament.books;
  }

  // Listar todos os livros do Novo Testamento
  listNewTestamentBooks() {
    return this.bible.summary.new_testament.books;
  }

  // Obter um livro específico pelo ID (ex: 'gn', 'ex', 'mt')
  getBook(bookId) {
    const book = this.bible.old_testament.books.find(b => b.id === bookId);
    if (!book) {
      // Tentar no Novo Testamento
      return this.bible.new_testament.books?.find(b => b.id === bookId);
    }
    return book;
  }

  // Obter um versículo específico
  getVerse(bookId, chapterNum, verseNum) {
    const book = this.getBook(bookId);
    if (!book) return null;

    const chapter = book.chapters;
    if (chapter.number !== chapterNum) return null;

    const verse = chapter.verses.find(v => v.number === verseNum);
    return verse;
  }

  // Renderizar um versículo com cores (para terminal)
  renderVerseWithColor(verse) {
    if (!verse.speeches) {
      console.log(`${verse.number}. ${verse.text}`);
      return;
    }

    let verseText = `${verse.number}. `;
    verse.speeches.forEach(speech => {
      if (speech.character === 'Deus') {
        verseText += `\x1b[34m${speech.text}\x1b[0m`; // Azul para Deus
      } else {
        verseText += speech.text;
      }
    });
    console.log(verseText);
  }

  // Renderizar versículo como HTML
  renderVerseAsHTML(verse) {
    if (!verse.speeches) {
      return `<span class="verse-number">${verse.number}</span> <span class="verse-text">${verse.text}</span>`;
    }

    let html = `<span class="verse-number">${verse.number}</span> `;
    verse.speeches.forEach(speech => {
      if (speech.character === 'Deus') {
        html += `<span class="god-speech">${speech.text}</span>`;
      } else {
        html += `<span class="normal-speech">${speech.text}</span>`;
      }
    });
    return html;
  }

  // Obter a introdução de um livro
  getIntroduction(bookId) {
    const book = this.getBook(bookId);
    return book?.introduction;
  }

  // Obter nota do título do capítulo
  getChapterNote(bookId, chapterNum) {
    const book = this.getBook(bookId);
    if (!book) return null;
    
    const chapter = book.chapters;
    if (chapter.number === chapterNum) {
      return chapter.note_title;
    }
    return null;
  }

  // Obter nota de um versículo
  getVerseNote(bookId, chapterNum, verseNum) {
    const verse = this.getVerse(bookId, chapterNum, verseNum);
    return verse?.notes;
  }

  // Pesquisar por palavra-chave nos versículos
  searchKeyword(keyword) {
    const results = [];
    const searchTerm = keyword.toLowerCase();

    for (const book of this.bible.old_testament.books) {
      const chapter = book.chapters;
      for (const verse of chapter.verses) {
        if (verse.text.toLowerCase().includes(searchTerm)) {
          results.push({
            book: book.book,
            bookId: book.id,
            chapter: chapter.number,
            verse: verse.number,
            text: verse.text
          });
        }
      }
    }
    return results;
  }

  // Exibir apresentação
  getPresentation() {
    const presentation = this.bible.preliminary_sections.find(s => s.type === 'apresentacao');
    return presentation;
  }

  // Exibir prefácio
  getPreface() {
    const preface = this.bible.preliminary_sections.find(s => s.type === 'prefacio');
    return preface;
  }
}

// ============ EXEMPLOS DE USO ============

// Carregar a Bíblia
const bible = new BibleReader('./KJA.json');

console.log('='.repeat(60));
console.log('📖 BÍBLIA KJA - SCRIPT DE CONSULTA');
console.log('='.repeat(60));

// 1. Metadados
console.log('\n📚 METADADOS:');
const metadata = bible.getMetadata();
console.log(`Título: ${metadata.title}`);
console.log(`Subtítulo: ${metadata.subtitle}`);
console.log(`Edição: ${metadata.edition}`);
console.log(`ISBN: ${metadata.isbn}`);

// 2. Listar livros do Antigo Testamento
console.log('\n📖 ANTIGO TESTAMENTO:');
const atBooks = bible.listOldTestamentBooks();
console.log(`Total: ${atBooks.length} livros`);
console.log('Primeiros 5 livros:');
atBooks.slice(0, 5).forEach(book => {
  console.log(`  ${book.order}. ${book.name} (${book.abbreviation}) - ${book.chapters} capítulos`);
});

// 3. Obter um versículo específico
console.log('\n✨ VERSÍCULO ESPECÍFICO:');
const verse = bible.getVerse('gn', 1, 1);
if (verse) {
  bible.renderVerseWithColor(verse);
  if (verse.notes) {
    console.log(`\n📝 Nota: ${verse.notes.substring(0, 200)}...`);
  }
}

// 4. Obter nota do título do capítulo
console.log('\n📌 NOTA DO CAPÍTULO:');
const chapterNote = bible.getChapterNote('gn', 1);
if (chapterNote) {
  console.log(`${chapterNote.substring(0, 300)}...`);
}

// 5. Exibir introdução de Gênesis
console.log('\n📘 INTRODUÇÃO DE GÊNESIS:');
const genesisIntro = bible.getIntroduction('gn');
if (genesisIntro) {
  console.log(`Autoria: ${genesisIntro.authorship[0].substring(0, 200)}...`);
}

// 6. Exibir Apresentação
console.log('\n🎤 APRESENTAÇÃO:');
const presentation = bible.getPresentation();
if (presentation) {
  console.log(`Autor: ${presentation.author.name}`);
  console.log(`Cargo: ${presentation.author.position}`);
  console.log(`Texto: ${presentation.content[0].substring(0, 200)}...`);
}

// 7. Exibir Prefácio
console.log('\n📖 PREFÁCIO:');
const preface = bible.getPreface();
if (preface) {
  console.log(`Autor: ${preface.author.name}`);
  console.log(`Texto: ${preface.content[0].substring(0, 200)}...`);
}

// 8. Pesquisar por palavra
console.log('\n🔍 PESQUISA:');
const results = bible.searchKeyword('criou');
console.log(`Encontrados ${results.length} resultados para "criou":`);
results.slice(0, 5).forEach(r => {
  console.log(`  ${r.book} ${r.chapter}:${r.verse} - ${r.text.substring(0, 80)}...`);
});

console.log('\n✅ Script finalizado!');