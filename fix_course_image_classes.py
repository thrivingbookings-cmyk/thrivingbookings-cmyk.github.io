from pathlib import Path
path = Path('index.html')
text = path.read_text(encoding='utf-8')
old = 'class="w-full h-48 object-cover"'
new = 'class="w-full aspect-square object-cover"'
count = text.count(old)
print(f'found {count} occurrences')
text = text.replace(old, new)
path.write_text(text, encoding='utf-8')
print(f'updated {text.count(new)} occurrences')
