# POLIMYŠ 🐭

Moderní animovaný kvíz, který pomocí 15 situačních otázek určí, jaký druh myši se v člověku ukrývá.

## Co web obsahuje

- 10 vyvážených myších archetypů
- originální kreslenou SVG adaptaci každého druhu
- animovaný průchod otázkami a výsledkovou kartu
- popis povahy, silné a slabé stránky
- atlas všech myší s detailními profily
- možnost zkopírovat výsledek
- responzivní a přístupné ovládání včetně kláves A–D
- podporu omezení pohybu přes `prefers-reduced-motion`

## Lokální spuštění

Web nemá žádné produkční závislosti. Stačí otevřít `index.html` nebo v adresáři spustit jednoduchý server:

```bash
python -m http.server 8000
```

Potom otevřete `http://localhost:8000`.

## Test

```bash
npm test
```

Test ověřuje strukturu kvízu, férové zastoupení archetypů, dosažitelnost všech výsledků a přítomnost všech ilustrací.

## Nasazení

GitHub Pages publikuje obsah větve `main` automaticky.
