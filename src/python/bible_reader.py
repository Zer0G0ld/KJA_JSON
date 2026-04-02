# bible_reader.py
# Script para consumir a Bíblia KJA em formato JSON

import json
import re

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
        if 'speeches' not in verse:
            print(f"{verse['number']}. {verse['text']}")
            return
        
        verse_text = f"{verse['number']}. "
        for speech in verse['speeches']:
            if speech['character'] == 'Deus':
                verse_text += f"\033[34m{speech['text']}\033[0m"  # Azul
            else:
                verse_text += speech['text']
        print(verse_text)
    
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
        return verse.get('notes') if verse else None
    
    def search_keyword(self, keyword):
        """Pesquisar palavra-chave nos versículos"""
        results = []
        keyword_lower = keyword.lower()
        
        for book in self.bible['old_testament']['books']:
            chapter = book['chapters']
            for verse in chapter['verses']:
                if keyword_lower in verse['text'].lower():
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


# ============ EXEMPLOS DE USO ============

if __name__ == "__main__":
    # Carregar a Bíblia
    bible = BibleReader('KJA.json')
    
    print("=" * 60)
    print("📖 BÍBLIA KJA - SCRIPT DE CONSULTA")
    print("=" * 60)
    
    # 1. Metadados
    print("\n📚 METADADOS:")
    metadata = bible.get_metadata()
    print(f"Título: {metadata['title']}")
    print(f"Subtítulo: {metadata['subtitle']}")
    print(f"Edição: {metadata['edition']}")
    print(f"ISBN: {metadata['isbn']}")
    
    # 2. Listar livros do Antigo Testamento
    print("\n📖 ANTIGO TESTAMENTO:")
    at_books = bible.list_old_testament_books()
    print(f"Total: {len(at_books)} livros")
    print("Primeiros 5 livros:")
    for book in at_books[:5]:
        print(f"  {book['order']}. {book['name']} ({book['abbreviation']}) - {book['chapters']} capítulos")
    
    # 3. Obter um versículo específico
    print("\n✨ VERSÍCULO ESPECÍFICO:")
    verse = bible.get_verse('gn', 1, 1)
    if verse:
        bible.render_verse(verse)
        if verse.get('notes'):
            print(f"\n📝 Nota: {verse['notes'][:200]}...")
    
    # 4. Obter nota do título do capítulo
    print("\n📌 NOTA DO CAPÍTULO:")
    chapter_note = bible.get_chapter_note('gn', 1)
    if chapter_note:
        print(f"{chapter_note[:300]}...")
    
    # 5. Exibir introdução de Gênesis
    print("\n📘 INTRODUÇÃO DE GÊNESIS:")
    genesis_intro = bible.get_introduction('gn')
    if genesis_intro:
        print(f"Autoria: {genesis_intro['authorship'][0][:200]}...")
    
    # 6. Exibir Apresentação
    print("\n🎤 APRESENTAÇÃO:")
    presentation = bible.get_presentation()
    if presentation:
        print(f"Autor: {presentation['author']['name']}")
        print(f"Cargo: {presentation['author']['position']}")
        print(f"Texto: {presentation['content'][0][:200]}...")
    
    # 7. Exibir Prefácio
    print("\n📖 PREFÁCIO:")
    preface = bible.get_preface()
    if preface:
        print(f"Autor: {preface['author']['name']}")
        print(f"Texto: {preface['content'][0][:200]}...")
    
    # 8. Pesquisar por palavra
    print("\n🔍 PESQUISA:")
    results = bible.search_keyword('criou')
    print(f"Encontrados {len(results)} resultados para 'criou':")
    for r in results[:5]:
        print(f"  {r['book']} {r['chapter']}:{r['verse']} - {r['text'][:80]}...")
    
    print("\n✅ Script finalizado!")