#!/usr/bin/env node
// Bible Reader for KJA JSON
// Usage: node src/js/bible-reader.js

const fs = require('fs');
const path = require('path');

// Caminho para o arquivo JSON (relativo à raiz do projeto)
const BIBLE_PATH = path.join(__dirname, '../../data/KJA.json');

class BibleReader {
  constructor(filePath) {
    if (!fs.existsSync(filePath)) {
      throw new Error(`Arquivo não encontrado: ${filePath}`);
    }
    this.data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    this.bible = this.data.content;
  }

  // Obter metadados da Bíblia
  getMetadata() {
    return this.data.metadata;
  }

  // Listar todos os livros do Antigo Testamento
  listOldTestamentBooks() {
    return this.bible.summary.old_testament.books;
  }

  // Listar todos os livros do Novo Testamento
  listNewTestamentBooks() {
    return this.bible.summary.new_testament.books;
  }

  // Obter um livro específico pelo ID
  getBook(bookId) {
    const book = this.bible.old_testament.books.find(b => b.id === bookId);
    if (book) return book;
    return this.bible.new_testament.books?.find(b => b.id === bookId);
  }

  // Obter um versículo específico
  getVerse(bookId, chapterNum, verseNum) {
    const book = this.getBook(bookId);
    if (!book) return null;

    const chapter = book.chapters;
    if (chapter.number !== chapterNum) return null;

    return chapter.verses.find(v => v.number === verseNum);
  }

  // Renderizar versículo com cores
  renderVerse(verse) {
    if (!verse.speeches || verse.speeches.length === 0) {
      console.log(`  ${verse.number}. ${verse.text}`);
      return;
    }

    let verseText = `  ${verse.number}. `;
    verse.speeches.forEach(speech => {
      if (speech.character === 'Deus') {
        verseText += `\x1b[34m${speech.text}\x1b[0m`;
      } else {
        verseText += speech.text;
      }
    });
    console.log(verseText);

    // Exibir nota se existir e não for null
    if (verse.notes && verse.notes !== null) {
      console.log(`\x1b[90m     📝 Nota: ${verse.notes.substring(0, 150)}...\x1b[0m`);
    }
  }

  // Exibir capítulo completo
  displayChapter(bookId, chapterNum) {
    const book = this.getBook(bookId);
    if (!book) {
      console.log(`\x1b[31mLivro não encontrado: ${bookId}\x1b[0m`);
      return;
    }

    const chapter = book.chapters;
    if (chapter.number !== chapterNum) {
      console.log(`\x1b[31mCapítulo não encontrado: ${chapterNum}\x1b[0m`);
      return;
    }

    console.log('\n' + '='.repeat(60));
    console.log(`\x1b[36m${book.book} - Capítulo ${chapterNum}\x1b[0m`);
    console.log('='.repeat(60));

    // Exibir nota do título se existir e não for null
    if (chapter.note_title && chapter.note_title !== null) {
      console.log(`\x1b[90m📌 ${chapter.note_title.substring(0, 200)}...\x1b[0m\n`);
    }

    chapter.verses.forEach(verse => this.renderVerse(verse));
  }

  // Pesquisar palavra
  search(keyword) {
    const results = [];
    const searchTerm = keyword.toLowerCase();

    for (const book of this.bible.old_testament.books) {
      const chapter = book.chapters;
      for (const verse of chapter.verses) {
        if (verse.text && verse.text.toLowerCase().includes(searchTerm)) {
          results.push({
            book: book.book,
            chapter: chapter.number,
            verse: verse.number,
            text: verse.text
          });
        }
      }
    }
    return results;
  }

  // Obter apresentação
  getPresentation() {
    return this.bible.preliminary_sections.find(s => s.type === 'apresentacao');
  }

  // Obter prefácio
  getPreface() {
    return this.bible.preliminary_sections.find(s => s.type === 'prefacio');
  }

  // Exibir ajuda
  static showHelp() {
    console.log(`
\x1b[36m📖 KJA Bible Reader - Comandos disponíveis:\x1b[0m
  node src/js/bible-reader.js --books at     Lista livros do Antigo Testamento
  node src/js/bible-reader.js --books nt     Lista livros do Novo Testamento
  node src/js/bible-reader.js --read gn 1    Lê Gênesis capítulo 1
  node src/js/bible-reader.js --verse gn 1 1 Lê versículo específico
  node src/js/bible-reader.js --search amor  Pesquisa por palavra
  node src/js/bible-reader.js --info         Exibe metadados
  node src/js/bible-reader.js --help         Exibe esta ajuda
    `);
  }
}

// ============ CLI ============
if (require.main === module) {
  const args = process.argv.slice(2);
  
  try {
    const bible = new BibleReader(BIBLE_PATH);
    
    if (args.length === 0 || args[0] === '--help') {
      BibleReader.showHelp();
    } else if (args[0] === '--info') {
      const meta = bible.getMetadata();
      console.log(`\n📚 ${meta.title}`);
      console.log(`   ${meta.subtitle}`);
      console.log(`   ISBN: ${meta.isbn}`);
      console.log(`   Editora: ${meta.publication.publisher}`);
      console.log(`   Ano: ${meta.publication.year}\n`);
    } else if (args[0] === '--books') {
      if (args[1] === 'at') {
        const books = bible.listOldTestamentBooks();
        console.log(`\n📖 Antigo Testamento (${books.length} livros):`);
        books.forEach(b => console.log(`   ${b.order}. ${b.name} (${b.abbreviation}) - ${b.chapters} capítulos`));
      } else if (args[1] === 'nt') {
        const books = bible.listNewTestamentBooks();
        console.log(`\n📖 Novo Testamento (${books.length} livros):`);
        books.forEach(b => console.log(`   ${b.order}. ${b.name} (${b.abbreviation}) - ${b.chapters} capítulos`));
      } else {
        console.log('Use --books at ou --books nt');
      }
    } else if (args[0] === '--read') {
      bible.displayChapter(args[1], parseInt(args[2]));
    } else if (args[0] === '--verse') {
      const verse = bible.getVerse(args[1], parseInt(args[2]), parseInt(args[3]));
      if (verse) {
        bible.renderVerse(verse);
      } else {
        console.log('\x1b[31mVersículo não encontrado\x1b[0m');
      }
    } else if (args[0] === '--search') {
      const results = bible.search(args[1]);
      console.log(`\n🔍 Resultados para "${args[1]}": ${results.length} encontrados\n`);
      results.slice(0, 10).forEach(r => {
        console.log(`   ${r.book} ${r.chapter}:${r.verse} - ${r.text.substring(0, 80)}...`);
      });
    } else {
      BibleReader.showHelp();
    }
  } catch (error) {
    console.error(`\x1b[31mErro: ${error.message}\x1b[0m`);
    console.log('\nCertifique-se que o arquivo KJA.json está em: data/KJA.json\n');
  }
}