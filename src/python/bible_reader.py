#!/usr/bin/env python3
# Bible Reader for KJA JSON
# Usage: python src/python/bible_reader.py

import json
import sys
import os
from pathlib import Path

# Caminho para o arquivo JSON (relativo à raiz do projeto)
BIBLE_PATH = Path(__file__).parent.parent.parent / 'data' / 'KJA.json'

class BibleReader:
    def __init__(self, file_path):
        with open(file_path, 'r', encoding='utf-8') as file:
            self.data = json.load(file)
        self.bible = self.data['content']
    
    def get_metadata(self):
        """Obter metadados da Bíblia"""
        return self.data['metadata']
    
    def list_old_testament_books(self):
        """Listar livros do Antigo Testamento"""
        return self.bible['summary']['old_testament']['books']
    
    def list_new_testament_books(self):
        """Listar livros do Novo Testamento"""
        return self.bible['summary']['new_testament']['books']
    
    def get_book(self, book_id):
        """Obter um livro pelo ID"""
        for book in self.bible['old_testament']['books']:
            if book['id'] == book_id:
                return book
        return None
    
    def get_verse(self, book_id, chapter_num, verse_num):
        """Obter um versículo específico"""
        book = self.get_book(book_id)
        if not book:
            return None
        
        chapter = book['chapters']
        if chapter['number'] != chapter_num:
            return None
        
        for verse in chapter['verses']:
            if verse['number'] == verse_num:
                return verse
        return None
    
    def render_verse(self, verse):
        """Renderizar versículo com cores no terminal"""
        if 'speeches' not in verse or not verse['speeches']:
            print(f"{verse['number']}. {verse['text']}")
            return
        
        verse_text = f"{verse['number']}. "
        for speech in verse['speeches']:
            if speech['character'] == 'Deus':
                verse_text += f"\033[34m{speech['text']}\033[0m"  # Azul
            else:
                verse_text += speech['text']
        print(verse_text)
        
        # Exibir nota se existir e não for null
        if verse.get('notes') and verse['notes'] is not None:
            print(f"\033[90m📝 Nota: {verse['notes'][:200]}...\033[0m")
    
    def display_chapter(self, book_id, chapter_num):
        """Exibir capítulo completo"""
        book = self.get_book(book_id)
        if not book:
            print(f"\033[31mLivro não encontrado: {book_id}\033[0m")
            return
        
        chapter = book['chapters']
        if chapter['number'] != chapter_num:
            print(f"\033[31mCapítulo não encontrado: {chapter_num}\033[0m")
            return
        
        print('\n' + '=' * 60)
        print(f"\033[36m{book['book']} - Capítulo {chapter_num}\033[0m")
        print('=' * 60)
        
        # Exibir nota do título se existir e não for null
        if chapter.get('note_title') and chapter['note_title'] is not None:
            print(f"\033[90m📌 {chapter['note_title'][:300]}...\033[0m\n")
        
        for verse in chapter['verses']:
            self.render_verse(verse)
    
    def get_introduction(self, book_id):
        """Obter introdução de um livro"""
        book = self.get_book(book_id)
        return book.get('introduction') if book else None
    
    def get_chapter_note(self, book_id, chapter_num):
        """Obter nota do título do capítulo"""
        book = self.get_book(book_id)
        if not book:
            return None
        
        chapter = book['chapters']
        if chapter['number'] == chapter_num:
            return chapter.get('note_title')
        return None
    
    def get_verse_note(self, book_id, chapter_num, verse_num):
        """Obter nota de um versículo"""
        verse = self.get_verse(book_id, chapter_num, verse_num)
        if verse and verse.get('notes') and verse['notes'] is not None:
            return verse['notes']
        return None
    
    def search_keyword(self, keyword):
        """Pesquisar palavra-chave nos versículos"""
        results = []
        keyword_lower = keyword.lower()
        
        for book in self.bible['old_testament']['books']:
            chapter = book['chapters']
            for verse in chapter['verses']:
                if verse['text'] and keyword_lower in verse['text'].lower():
                    results.append({
                        'book': book['book'],
                        'book_id': book['id'],
                        'chapter': chapter['number'],
                        'verse': verse['number'],
                        'text': verse['text']
                    })
        return results
    
    def get_presentation(self):
        """Obter apresentação"""
        for section in self.bible['preliminary_sections']:
            if section['type'] == 'apresentacao':
                return section
        return None
    
    def get_preface(self):
        """Obter prefácio"""
        for section in self.bible['preliminary_sections']:
            if section['type'] == 'prefacio':
                return section
        return None
    
    @staticmethod
    def show_help():
        print("""
\033[36m📖 KJA Bible Reader - Comandos disponíveis:\033[0m
  python src/python/bible_reader.py --books at     Lista livros do Antigo Testamento
  python src/python/bible_reader.py --books nt     Lista livros do Novo Testamento
  python src/python/bible_reader.py --read gn 1    Lê Gênesis capítulo 1
  python src/python/bible_reader.py --verse gn 1 1 Lê versículo específico
  python src/python/bible_reader.py --search amor  Pesquisa por palavra
  python src/python/bible_reader.py --info         Exibe metadados
  python src/python/bible_reader.py --help         Exibe esta ajuda
        """)


# ============ CLI ============
if __name__ == "__main__":
    args = sys.argv[1:]
    
    if not os.path.exists(BIBLE_PATH):
        print(f"\033[31mErro: Arquivo não encontrado: {BIBLE_PATH}\033[0m")
        print("\nCertifique-se que o arquivo KJA.json está em: data/KJA.json\n")
        sys.exit(1)
    
    bible = BibleReader(BIBLE_PATH)
    
    if len(args) == 0 or args[0] == '--help':
        BibleReader.show_help()
    elif args[0] == '--info':
        meta = bible.get_metadata()
        print(f"\n📚 {meta['title']}")
        print(f"   {meta['subtitle']}")
        print(f"   ISBN: {meta['isbn']}")
        print(f"   Editora: {meta['publication']['publisher']}")
        print(f"   Ano: {meta['publication']['year']}\n")
    elif args[0] == '--books':
        if len(args) > 1 and args[1] == 'at':
            books = bible.list_old_testament_books()
            print(f"\n📖 Antigo Testamento ({len(books)} livros):")
            for b in books:
                print(f"   {b['order']}. {b['name']} ({b['abbreviation']}) - {b['chapters']} capítulos")
        elif len(args) > 1 and args[1] == 'nt':
            books = bible.list_new_testament_books()
            print(f"\n📖 Novo Testamento ({len(books)} livros):")
            for b in books:
                print(f"   {b['order']}. {b['name']} ({b['abbreviation']}) - {b['chapters']} capítulos")
        else:
            print("Use --books at ou --books nt")
    elif args[0] == '--read':
        if len(args) >= 3:
            bible.display_chapter(args[1], int(args[2]))
        else:
            print("Use: python src/python/bible_reader.py --read <book_id> <chapter>")
    elif args[0] == '--verse':
        if len(args) >= 4:
            verse = bible.get_verse(args[1], int(args[2]), int(args[3]))
            if verse:
                bible.render_verse(verse)
            else:
                print("\033[31mVersículo não encontrado\033[0m")
        else:
            print("Use: python src/python/bible_reader.py --verse <book_id> <chapter> <verse>")
    elif args[0] == '--search':
        if len(args) >= 2:
            results = bible.search_keyword(args[1])
            print(f"\n🔍 Resultados para \"{args[1]}\": {len(results)} encontrados\n")
            for r in results[:10]:
                print(f"   {r['book']} {r['chapter']}:{r['verse']} - {r['text'][:80]}...")
        else:
            print("Use: python src/python/bible_reader.py --search <palavra>")
    else:
        BibleReader.show_help()