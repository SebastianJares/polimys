"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  MOUSE_TYPES,
  QUESTIONS,
  calculateScores,
  rankResults,
  createMouseSvg,
} = require("../app.js");

const typeIds = Object.keys(MOUSE_TYPES);

assert.equal(typeIds.length, 10, "Kvíz musí obsahovat přesně deset myších archetypů.");
assert.equal(QUESTIONS.length, 15, "Kvíz musí obsahovat patnáct otázek.");

const exposure = Object.fromEntries(typeIds.map((id) => [id, 0]));
for (const question of QUESTIONS) {
  assert.equal(question.answers.length, 4, `Otázka „${question.text}“ nemá čtyři odpovědi.`);
  for (const answer of question.answers) {
    assert.equal(answer.types.length, 2, "Každá odpověď musí ovlivnit dva archetypy.");
    for (const typeId of answer.types) {
      assert.ok(MOUSE_TYPES[typeId], `Neznámý archetyp: ${typeId}`);
      exposure[typeId] += 1;
    }
  }
}

for (const [typeId, count] of Object.entries(exposure)) {
  assert.equal(count, 12, `${typeId} není v testu zastoupen férově.`);
}

for (const typeId of typeIds) {
  const type = MOUSE_TYPES[typeId];
  assert.ok(type.description.length > 120, `${typeId} má příliš krátký popis.`);
  assert.ok(type.strength.length > 40, `${typeId} nemá dostatečně popsanou silnou stránku.`);
  assert.ok(type.weakness.length > 40, `${typeId} nemá dostatečně popsanou slabou stránku.`);
  const svg = createMouseSvg(typeId);
  assert.match(svg, /<svg[\s\S]*<\/svg>/, `${typeId} nemá platnou SVG ilustraci.`);
  assert.match(svg, new RegExp(`mouse-${typeId}`), `${typeId} nemá vlastní vizuální variantu.`);
}

const completeAnswers = Array(QUESTIONS.length).fill(0);
const scores = calculateScores(completeAnswers);
const scoreTotal = Object.values(scores).reduce((sum, score) => sum + score, 0);
assert.equal(scoreTotal, QUESTIONS.length * 4, "Jedna odpověď musí rozdělit právě čtyři myšobody.");

const ranked = rankResults(scores, "Testovací Myš");
assert.equal(ranked.length, typeIds.length, "Pořadí výsledků není kompletní.");
assert.ok(ranked[0].score >= ranked[1].score, "Výsledky nejsou seřazené podle skóre.");

// Deterministický vzorek různých odpovědí musí umět vyprodukovat každý archetyp.
const reached = new Set();
let randomState = 0x5eed1234;
for (let run = 0; run < 30000 && reached.size < typeIds.length; run += 1) {
  const answers = QUESTIONS.map(() => {
    randomState = (randomState * 1664525 + 1013904223) >>> 0;
    return (randomState >>> 16) % 4;
  });
  const runScores = calculateScores(answers);
  reached.add(rankResults(runScores, String(run))[0].id);
}
assert.deepEqual([...reached].sort(), [...typeIds].sort(), "Některého archetypu nelze prakticky dosáhnout.");

const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
for (const requiredId of [
  "home-screen",
  "quiz-screen",
  "result-screen",
  "question-title",
  "answers",
  "atlas-dialog",
  "result-mouse",
]) {
  assert.match(html, new RegExp(`id=["']${requiredId}["']`), `V HTML chybí #${requiredId}.`);
}

console.log("✓ 10 archetypů, 15 otázek a férové zastoupení");
console.log("✓ každý archetyp má popis, vlastnosti a vlastní SVG adaptaci");
console.log("✓ všech deset výsledků je dosažitelných");
console.log("✓ základní struktura aplikace je kompletní");
