"use strict";

const MOUSE_TYPES = {
  zlobivka: {
    name: "Myš zlobivka",
    latin: "Mus musculus rošťákus",
    color: "#f17868",
    fur: "#a99bdc",
    belly: "#f7d8e1",
    accent: "#f6c945",
    traits: ["hravá", "spontánní", "nebezpečně kreativní"],
    description:
      "Tvoje hlava je malá továrna na nápady, které začínají větou „Hele, co kdyby…“ a končí velmi dlouhým vysvětlováním. Nudu považuješ za osobní urážku a každou místnost umíš během pěti minut proměnit v dobrodružství.",
    strength: "Rozesměješ i poradu o tabulkách a najdeš cestu tam, kde ostatní vidí jen zákaz vstupu.",
    weakness: "Následky občas dorazí dřív než tvůj plán B. A plán B obvykle také zlobí.",
    rank: "CHLUPATÝ CHAOS",
    comment: "Tohle zavání lumpárnou…",
  },
  zla: {
    name: "Zlá myš",
    latin: "Mus musculus dramaticus",
    color: "#7d6d9e",
    fur: "#5e536c",
    belly: "#cbbdd2",
    accent: "#ef6b61",
    traits: ["neústupná", "bystrá", "trochu děsivá"],
    description:
      "Nejsi zlá bez důvodu. Jen máš velmi nízkou toleranci k hlouposti a nebezpečně dobrý cit pro slabá místa. Když ostatní obcházejí problém, ty se mu podíváš do očí a problém se začne potit.",
    strength: "Dokážeš říct nepříjemnou pravdu, udělat těžké rozhodnutí a ubránit svoje lidi i poslední eidam.",
    weakness: "Tvůj upřímný pohled někdy vypadá jako předběžné oznámení katastrofy.",
    rank: "TEMNÁ LEGENDA",
    comment: "Poznamenávám si to. Pro jistotu.",
  },
  hodna: {
    name: "Hodná myš",
    latin: "Mus musculus cordialis",
    color: "#87c7ae",
    fur: "#d1b39e",
    belly: "#f7e5dc",
    accent: "#f4a9bd",
    traits: ["empatická", "spolehlivá", "hřejivá"],
    description:
      "Máš radar na cizí trápení a záhadnou schopnost objevit se přesně ve chvíli, kdy někdo potřebuje čaj, objetí nebo odvézt ledničku. Lidé ti věří, protože u tebe se jejich tajemství cítí jako doma.",
    strength: "Držíš smečku pohromadě a umíš z obyčejného gesta udělat něčí nejlepší den.",
    weakness: "Někdy rozdáš všechen sýr ostatním a až pozdě zjistíš, že sama večeříš obal.",
    rank: "SRDCE SMEČKY",
    comment: "Ááá. Tady cítím dobré srdíčko.",
  },
  broskvomys: {
    name: "Broskvomyš",
    latin: "Mus musculus persicus",
    color: "#f2aa7d",
    fur: "#e7a27d",
    belly: "#ffe5cf",
    accent: "#79aa75",
    traits: ["pohodová", "laskavá", "šťavnatě optimistická"],
    description:
      "Jsi lidská verze teplého světla v kuchyni. Miluješ pohodu, dobré jídlo a lidi, se kterými není nutné nic předstírat. Tvoje energie říká: svět možná hoří, ale nejdřív si dáme něco dobrého.",
    strength: "Vytváříš bezpečí, klid a atmosféru, ve které i nervózní myši přestanou okusovat kabely.",
    weakness: "Komfortní zóna má u tebe gauč, deku, občerstvení a velmi pevně zamčené dveře.",
    rank: "SLADKÝ ORIGINÁL",
    comment: "Cítím broskev. Nebo svačinu.",
  },
  kotemys: {
    name: "Kotěmyš",
    latin: "Mus musculus catticus",
    color: "#89b9d3",
    fur: "#c7b9aa",
    belly: "#f3e4db",
    accent: "#f4a9bd",
    traits: ["zvídavá", "mazlivá", "roztomile chaotická"],
    description:
      "Jsi myš, která se zřejmě narodila v kočičím pelíšku a rozhodla se neklást otázky. Střídáš hlubokou zvědavost s potřebou schoulit se do klubíčka. Lidé ti odpustí téměř všechno, protože u toho vypadáš nevinně.",
    strength: "Rychle se učíš, přirozeně odzbrojuješ okolí a umíš najít radost i v krabici.",
    weakness: "Pozornost ti občas uteče za neviditelným klubíčkem v nejméně vhodnou chvíli.",
    rank: "VZÁCNÝ HYBRID",
    comment: "Mňau… totiž píp?",
  },
  sampion: {
    name: "Myší šampion",
    latin: "Mus musculus victor",
    color: "#f6c945",
    fur: "#a88973",
    belly: "#f2d6c4",
    accent: "#ef6b61",
    traits: ["soutěživý", "odvážný", "nezastavitelný"],
    description:
      "I cestu k lednici dokážeš proměnit v olympijskou disciplínu. Potřebuješ výzvu, cíl a ideálně někoho, kdo tvrdí, že to nejde. Prohra tě nezlomí — jen z ní uděláš velmi detailní tréninkový plán.",
    strength: "Zvedneš tempo celé smečce a dokážeš protlačit výsledek i zavřenými dvířky spíže.",
    weakness: "Odpočinek považuješ za závod, který se snažíš vyhrát co nejrychleji.",
    rank: "ŠPIČKOVÁ FORMA",
    comment: "Tři, dva, jedna… SÝR!",
  },
  manager: {
    name: "Myší manager",
    latin: "Mus musculus tabulcus",
    color: "#75a7c7",
    fur: "#8d9ca3",
    belly: "#dfe7e8",
    accent: "#f6c945",
    traits: ["organizovaný", "praktický", "strategický"],
    description:
      "Kdyby měl chaos kalendář, spravovala bys mu ho. Víš, kdo co dělá, do kdy to má být a proč se o tom neposlal zápis. V krizové situaci nevřískáš — otevřeš tabulku a přidáš sloupec „vřískání“.",
    strength: "Proměníš mlhavý nápad v plán, plán v úkoly a úkoly v hotovo před termínem.",
    weakness: "Ne každé objetí potřebuje agendu, časový blok a následný kontrolní e-mail.",
    rank: "MISTR PROCESŮ",
    comment: "Mám k tomu jednu doplňující tabulku.",
  },
  hlavni: {
    name: "Hlavní myš",
    latin: "Mus musculus principalis",
    color: "#de8d54",
    fur: "#7e6a58",
    belly: "#dbc4b0",
    accent: "#f6c945",
    traits: ["rozhodná", "charismatická", "ochranitelská"],
    description:
      "Nevstupuješ do místnosti — místnost se přeskupí kolem tebe. Přirozeně přebíráš odpovědnost, umíš určit směr a když je zle, stojíš první u díry ve zdi. Autoritu nenosíš na vizitce, ale v obočí.",
    strength: "Dodáš lidem jistotu, uděláš rozhodnutí a vezmeš za něj odpovědnost.",
    weakness: "Delegování někdy chápeš jako „vysvětlím vám, jak to pak stejně udělám sama“.",
    rank: "VELITEL NOR",
    comment: "Ano, šéfe. Tedy… myši.",
  },
  princezna: {
    name: "Myší princezna",
    latin: "Mus musculus regalis",
    color: "#d99bc8",
    fur: "#d9c2b6",
    belly: "#fff0e8",
    accent: "#f6c945",
    traits: ["vznešená", "citlivá", "náročná na kvalitu"],
    description:
      "Víš, že život je příliš krátký na špatný sýr, hrubé deky a lidi bez vychování. Pod elegantním povrchem je ale citlivá duše, která si pamatuje každý detail — kompliment z roku 2019 i nevhodný tón ze včerejška.",
    strength: "Vnášíš krásu, standardy a jemnost tam, kde by jinak zůstala jen plastová miska.",
    weakness: "Hrášek pod sedmi matracemi skutečně cítíš. A hodláš o něm sepsat recenzi.",
    rank: "MODRÁ KREV",
    comment: "Korunku prosím neleštit rukávem.",
  },
  krasnomyska: {
    name: "Krásnomyška",
    latin: "Mus musculus bellissima",
    color: "#ef8ba7",
    fur: "#b8907f",
    belly: "#f5d9ce",
    accent: "#8f7bd7",
    traits: ["okouzlující", "estetická", "společenská"],
    description:
      "Máš cit pro detail, atmosféru a přesně ten úhel, ze kterého vypadá i sklep jako konceptuální galerie. Krása pro tebe není povrchnost — je to způsob, jak dávat světu trochu větší jiskru.",
    strength: "Umíš zaujmout, propojovat lidi a proměnit obyčejný moment v událost.",
    weakness: "Někdy ladíš mašličku na dárku tak dlouho, až oslavenec zestárne o rok.",
    rank: "OSLNIVÝ EXEMPLÁŘ",
    comment: "Počkej, z téhle strany mám lepší profil.",
  },
};

const QUESTIONS = [
  {
    text: "V kuchyni zbyl poslední kousek výjimečně dobrého sýra. Co uděláš?",
    answers: [
      { icon: "🥷", text: "Zmizí. Nikdo nic neviděl.", types: ["zlobivka", "zla"] },
      { icon: "🤍", text: "Rozdělím ho. I kdyby na mě zbyla jen vůně.", types: ["hodna", "broskvomys"] },
      { icon: "🏁", text: "Vyhlásím férovou disciplínu. A vyhraju ji.", types: ["sampion", "hlavni"] },
      { icon: "🔪", text: "Nakrájím ho na dokonale stejné dílky. Jeden raději zvážím.", types: ["sampion", "princezna"] },
    ],
  },
  {
    text: "Dorazíš na večírek, kde skoro nikoho neznáš. Jaký je plán?",
    answers: [
      { icon: "🪩", text: "Za deset minut tančím na stole s novým nejlepším kamarádem.", types: ["zlobivka", "kotemys"] },
      { icon: "☕", text: "Najdu jednoho milého člověka a vedeme hluboký rozhovor v kuchyni.", types: ["hodna", "broskvomys"] },
      { icon: "📋", text: "Nenápadně pomůžu hostiteli a zachráním logistiku večera.", types: ["manager", "hlavni"] },
      { icon: "✨", text: "Přijdu pozdě, vypadám skvěle a nechám večírek, ať si mě všimne.", types: ["princezna", "krasnomyska"] },
    ],
  },
  {
    text: "Termín je zítra a práce je… řekněme v abstraktním stavu. Ty:",
    answers: [
      { icon: "⚡", text: "Zapnu turbo. Tlak je jen koření vítězství.", types: ["sampion", "zlobivka"] },
      { icon: "🗂️", text: "Rozsekám to na kroky, priority a dvě barevné tabulky.", types: ["manager", "sampion"] },
      { icon: "🫖", text: "Požádám o pomoc, uvařím čaj a uděláme to spolu.", types: ["hodna", "kotemys"] },
      { icon: "🖤", text: "Odstraním překážky. Jakékoliv. Další otázka.", types: ["zla", "princezna"] },
    ],
  },
  {
    text: "Dva lidé se před tebou začnou hádat. Jaká role ti sedne?",
    answers: [
      { icon: "🕊️", text: "Překladatel emocí. Každého nechám domluvit.", types: ["hodna", "krasnomyska"] },
      { icon: "⚖️", text: "Soudce. Rychle zjistím fakta a vynesu rozsudek.", types: ["hlavni", "zla"] },
      { icon: "🎈", text: "Šašek. Řeknu něco tak absurdního, že zapomenou, proč se hádali.", types: ["zlobivka", "kotemys"] },
      { icon: "💅", text: "Elegantně odejdu. Tohle představení nemá dobrou režii.", types: ["princezna", "krasnomyska"] },
    ],
  },
  {
    text: "Volná sobota bez povinností! Co se nejspíš stane?",
    answers: [
      { icon: "🏋️", text: "Výlet, trénink nebo projekt. Volno neznamená stát.", types: ["sampion", "hlavni"] },
      { icon: "🍑", text: "Deka, něco dobrého a nulová vina.", types: ["broskvomys", "kotemys"] },
      { icon: "🧁", text: "Přepadnu někoho, koho jsem dlouho neviděl/a, a přinesu mu překvapení.", types: ["hodna", "zlobivka"] },
      { icon: "🕶️", text: "Město, outfit a plán udělat z obyčejné soboty estetický zážitek.", types: ["krasnomyska", "princezna"] },
    ],
  },
  {
    text: "Vedoucí na den zmizí a nikdo neví, co dělat. Co uděláš?",
    answers: [
      { icon: "📣", text: "Převezmu řízení. Někdo přece musí.", types: ["hlavni", "manager"] },
      { icon: "🎉", text: "Vyhlásím neoficiální den svobody. Produktivita bude… kreativní.", types: ["zlobivka", "kotemys"] },
      { icon: "🧹", text: "Prostě udělám svou práci a pomůžu ostatním.", types: ["hodna", "broskvomys"] },
      { icon: "🦹", text: "Konečně. Nastal čas zavést nový pořádek.", types: ["zla", "sampion"] },
    ],
  },
  {
    text: "Jak vybíráš dárek pro někoho, na kom ti záleží?",
    answers: [
      { icon: "🧶", text: "Osobní, ručně vyrobený nebo plný společných vzpomínek.", types: ["hodna", "broskvomys"] },
      { icon: "🔎", text: "Udělám průzkum a vyberu něco, co skutečně využije.", types: ["manager", "hlavni"] },
      { icon: "🎀", text: "Musí být krásný, kvalitní a dokonale zabalený.", types: ["princezna", "krasnomyska"] },
      { icon: "🎢", text: "Spíš zážitek. Ideálně trochu šílený a nezapomenutelný.", types: ["zlobivka", "kotemys"] },
    ],
  },
  {
    text: "Před tebou je velký problém a nikde žádný návod. První reakce?",
    answers: [
      { icon: "💥", text: "Jdu proti němu čelně. Uvidíme, kdo koho.", types: ["sampion", "zla"] },
      { icon: "🧠", text: "Zmapuju situaci a vymyslím postup.", types: ["manager", "hlavni"] },
      { icon: "🤝", text: "Svolám lidi. Víc hlav, víc sýra.", types: ["hodna", "krasnomyska"] },
      { icon: "🪄", text: "Najdu nečekanou cestu a přesvědčím problém, aby spolupracoval.", types: ["krasnomyska", "princezna"] },
    ],
  },
  {
    text: "Dozvíš se šťavnatou, ale neověřenou informaci. Co s ní?",
    answers: [
      { icon: "🤭", text: "Přetvořím ji v dokonalý vtip. Bez jmen… skoro.", types: ["zlobivka", "kotemys"] },
      { icon: "🔐", text: "Nechám si ji pro sebe, ať nikomu neublíží.", types: ["zla", "broskvomys"] },
      { icon: "🧾", text: "Ověřím zdroj a teprve pak se rozhodnu.", types: ["manager", "zla"] },
      { icon: "♟️", text: "Informace je nástroj. Uložím si ji na správný okamžik.", types: ["zla", "krasnomyska"] },
    ],
  },
  {
    text: "Máš ostatní přesvědčit o svém nápadu. Jak na to jdeš?",
    answers: [
      { icon: "📈", text: "Data, argumenty, struktura. Tady je slide číslo 34.", types: ["manager", "sampion"] },
      { icon: "🎭", text: "Příběh, emoce a prezentace, na kterou se nezapomíná.", types: ["krasnomyska", "princezna"] },
      { icon: "💛", text: "Upřímně vysvětlím, proč to lidem pomůže.", types: ["hodna", "broskvomys"] },
      { icon: "🥊", text: "Energie a jistota. Když tomu věřím já, uvěří i oni.", types: ["sampion", "zla"] },
    ],
  },
  {
    text: "Společný výlet. Která věta je nejvíc tvoje?",
    answers: [
      { icon: "🗺️", text: "Odbočíme tady. Nevím proč, ale bude to příběh.", types: ["zlobivka", "kotemys"] },
      { icon: "🕘", text: "V 9:05 odjezd. Trasu, rezervace a svačiny mám.", types: ["manager", "hlavni"] },
      { icon: "🛋️", text: "Hlavně pohodlně, hezky a s kvalitní snídaní.", types: ["broskvomys", "princezna"] },
      { icon: "⛰️", text: "Dejte mi výzvu, výhled a něco, co ještě nikdo z nás nezkusil.", types: ["sampion", "zla"] },
    ],
  },
  {
    text: "Někdo tě upřímně pochválí. Jak reaguješ?",
    answers: [
      { icon: "🫣", text: "Zrudnu, zamumlám díky a tři dny na to myslím.", types: ["kotemys", "broskvomys"] },
      { icon: "👑", text: "Usměju se a poděkuju. Má pravdu.", types: ["princezna", "krasnomyska"] },
      { icon: "🌷", text: "Hned pochválím jeho nebo připomenu zásluhy ostatních.", types: ["hodna", "manager"] },
      { icon: "😎", text: "Samozřejmě. Ale cením si, že sis všiml/a.", types: ["hlavni", "zla"] },
    ],
  },
  {
    text: "Myší apokalypsa. Jakou pozici zaujmeš v bunkru?",
    answers: [
      { icon: "🛡️", text: "Držím skupinu pohromadě a hlídám, aby nikdo nezůstal sám.", types: ["hodna", "hlavni"] },
      { icon: "🥫", text: "Spravuju zásoby, směny a férové příděly.", types: ["manager", "broskvomys"] },
      { icon: "⚔️", text: "Vedoucí obrany. Konečně výzva hodná mé energie.", types: ["sampion", "zla"] },
      { icon: "🎊", text: "Organizuju poslední večírek civilizace. A bude legendární.", types: ["zlobivka", "krasnomyska"] },
    ],
  },
  {
    text: "Když se nemůžeš rozhodnout, co ti obvykle pomůže?",
    answers: [
      { icon: "🌙", text: "Pocit v břiše. Ten malý chlupatý radar ví.", types: ["kotemys", "broskvomys"] },
      { icon: "➕", text: "Seznam pro a proti, ideálně s vahami.", types: ["manager", "hlavni"] },
      { icon: "💌", text: "Co bude nejlepší pro lidi, na kterých mi záleží?", types: ["kotemys", "princezna"] },
      { icon: "🎲", text: "Rozhodnu se odvážně a za pochodu to doladím.", types: ["sampion", "zlobivka"] },
    ],
  },
  {
    text: "Vyber životní motto, které by mohlo viset nad tvou norou:",
    answers: [
      { icon: "🌼", text: "Buď laskavý. Nikdy nevíš, čím si druhá myš prochází.", types: ["hodna", "broskvomys"] },
      { icon: "🧭", text: "Kdo nemá plán, stává se součástí plánu někoho jiného.", types: ["hlavni", "manager"] },
      { icon: "💎", text: "Obyčejné je jen promarněná příležitost zazářit.", types: ["princezna", "krasnomyska"] },
      { icon: "🔥", text: "Když už průšvih, tak ať stojí za vyprávění.", types: ["zlobivka", "kotemys"] },
    ],
  },
];

const ANSWER_COLORS = ["#f6c945", "#87c7ae", "#f4a9bd", "#9aa8dd"];
const LETTERS = ["A", "B", "C", "D"];

const state = {
  current: 0,
  answers: Array(QUESTIONS.length).fill(null),
  name: "",
  result: null,
};

function accessoryMarkup(type, accent) {
  const accessories = {
    zlobivka: `
      <g class="accessory-float">
        <path d="M118 91l-18-30 16-9 17 31" fill="${accent}" stroke="#221e1f" stroke-width="6" stroke-linejoin="round"/>
        <path d="M100 61l-17-16m32 7 4-21" fill="none" stroke="#221e1f" stroke-width="6" stroke-linecap="round"/>
      </g>
      <path d="M282 277l29 11-8 29-31-12z" fill="${accent}" stroke="#221e1f" stroke-width="6"/>
      <path d="M284 283l19 18m-10-21 14 13" stroke="#221e1f" stroke-width="4"/>
    `,
    zla: `
      <path d="M130 137l-16-52 39 31m105-1 40-31-17 54" fill="${accent}" stroke="#221e1f" stroke-width="7" stroke-linejoin="round"/>
      <path d="M116 238q94 59 180 0l34 135H86z" fill="#342d3d" stroke="#221e1f" stroke-width="7" stroke-linejoin="round"/>
      <path d="M151 181l35 9m75-9-35 9" stroke="#221e1f" stroke-width="7" stroke-linecap="round"/>
    `,
    hodna: `
      <g class="accessory-float">
        <path d="M205 55c-31-29-64 14 0 54 64-40 31-83 0-54z" fill="${accent}" stroke="#221e1f" stroke-width="6"/>
      </g>
      <path d="M169 277c-19-24-50 4-7 38 43-34 12-62-7-38z" fill="${accent}" stroke="#221e1f" stroke-width="5"/>
    `,
    broskvomys: `
      <g class="accessory-float">
        <path d="M206 107c-50-4-56-62-3-64 55-2 58 59 3 64z" fill="#f39b75" stroke="#221e1f" stroke-width="6"/>
        <path d="M202 45q22-28 54-15-13 26-47 25" fill="${accent}" stroke="#221e1f" stroke-width="6"/>
        <path d="M205 45l1-20" stroke="#221e1f" stroke-width="6" stroke-linecap="round"/>
      </g>
      <path d="M157 298q47-32 94 0-11 55-47 58-37-3-47-58z" fill="#f39b75" opacity=".75"/>
    `,
    kotemys: `
      <path d="M127 135l-1-68 58 48m101 20 1-68-58 48" fill="${accent}" stroke="#221e1f" stroke-width="7" stroke-linejoin="round"/>
      <circle cx="318" cy="330" r="37" fill="${accent}" stroke="#221e1f" stroke-width="6"/>
      <path d="M292 309q35 2 51 26m-50 11q31-19 51-1m-42-42q3 36 24 61" fill="none" stroke="#221e1f" stroke-width="3"/>
      <path d="M285 307q-38-30-59 12" fill="none" stroke="#221e1f" stroke-width="5" stroke-linecap="round"/>
    `,
    sampion: `
      <path d="M126 135q80-37 160 0l-7 27q-74-29-146 0z" fill="${accent}" stroke="#221e1f" stroke-width="6"/>
      <path d="M281 142l46 27-33 17" fill="${accent}" stroke="#221e1f" stroke-width="6" stroke-linejoin="round"/>
      <g class="accessory-float">
        <circle cx="205" cy="300" r="28" fill="#f6c945" stroke="#221e1f" stroke-width="6"/>
        <path d="M188 273l-13-30h23l7 29m17 1 13-30h-23l-7 29" fill="${accent}" stroke="#221e1f" stroke-width="5"/>
        <path d="M205 286l6 10 12 2-9 8 2 12-11-6-11 6 2-12-9-8 12-2z" fill="#fffaf3" stroke="#221e1f" stroke-width="3"/>
      </g>
    `,
    manager: `
      <path d="M152 170q52-35 105 0" fill="none" stroke="#221e1f" stroke-width="5"/>
      <rect x="143" y="164" width="48" height="36" rx="10" fill="#dcecf2" stroke="#221e1f" stroke-width="6"/>
      <rect x="219" y="164" width="48" height="36" rx="10" fill="#dcecf2" stroke="#221e1f" stroke-width="6"/>
      <path d="M191 180h28" stroke="#221e1f" stroke-width="5"/>
      <path d="M204 247l-25 32 25 63 25-63z" fill="${accent}" stroke="#221e1f" stroke-width="6"/>
      <path d="M282 269h67v90h-67z" fill="#fffaf3" stroke="#221e1f" stroke-width="6"/>
      <path d="M297 290h36m-36 18h36m-36 18h25" stroke="#221e1f" stroke-width="4" stroke-linecap="round"/>
    `,
    hlavni: `
      <g class="accessory-float">
        <path d="M139 120l8-64 38 25 25-43 27 43 38-25 4 66z" fill="${accent}" stroke="#221e1f" stroke-width="7" stroke-linejoin="round"/>
        <circle cx="209" cy="91" r="8" fill="#ef6b61" stroke="#221e1f" stroke-width="4"/>
      </g>
      <path d="M285 275l60-32 22 42-60 31z" fill="${accent}" stroke="#221e1f" stroke-width="6"/>
      <path d="M334 249l15-26" stroke="#221e1f" stroke-width="6" stroke-linecap="round"/>
      <path d="M145 182l35-9m50 9 35-9" stroke="#221e1f" stroke-width="6" stroke-linecap="round"/>
    `,
    princezna: `
      <g class="accessory-float">
        <path d="M145 120l14-58 44 35 37-46 27 69z" fill="${accent}" stroke="#221e1f" stroke-width="7" stroke-linejoin="round"/>
        <circle cx="159" cy="62" r="7" fill="#ef8ba7" stroke="#221e1f" stroke-width="4"/>
        <circle cx="240" cy="51" r="7" fill="#8f7bd7" stroke="#221e1f" stroke-width="4"/>
      </g>
      <path d="M294 298l54-64" stroke="#221e1f" stroke-width="7" stroke-linecap="round"/>
      <path d="M352 222l4 17 17 4-17 5-4 17-5-17-17-5 17-4z" fill="${accent}" stroke="#221e1f" stroke-width="4"/>
      <path d="M150 360q56-47 112 0" fill="#f0b9dc" stroke="#221e1f" stroke-width="6"/>
    `,
    krasnomyska: `
      <g class="accessory-float">
        <path d="M205 111c-27-35-63-28-67 7 4 37 41 41 67 8 27 33 64 29 68-8-4-35-41-42-68-7z" fill="${accent}" stroke="#221e1f" stroke-width="6"/>
        <circle cx="205" cy="119" r="14" fill="#f6c945" stroke="#221e1f" stroke-width="5"/>
      </g>
      <path d="M152 169l-17-12m22 24-23 0m120-12 17-12m-22 24 23 0" stroke="#221e1f" stroke-width="4" stroke-linecap="round"/>
      <ellipse cx="325" cy="306" rx="36" ry="45" fill="#dcecf2" stroke="#221e1f" stroke-width="7"/>
      <path d="M311 344l-17 25m47-25 17 25" stroke="#221e1f" stroke-width="7" stroke-linecap="round"/>
      <path d="M313 296q12-15 24 0" fill="none" stroke="#fffaf3" stroke-width="4"/>
    `,
  };
  return accessories[type] || "";
}

function createMouseSvg(typeId, label = "") {
  const type = MOUSE_TYPES[typeId] || MOUSE_TYPES.broskvomys;
  const safeLabel = label || type.name;

  return `
    <div class="mouse-illustration mouse-${typeId}">
      <svg class="mouse-svg" viewBox="0 0 430 420" role="img" aria-label="${safeLabel}">
        <g class="tail">
          <path d="M110 285C41 258 26 318 51 347c26 31 84 9 64-31-11-23-55-4-31 19" fill="none" stroke="#221e1f" stroke-width="13" stroke-linecap="round"/>
          <path d="M110 285C41 258 26 318 51 347c26 31 84 9 64-31-11-23-55-4-31 19" fill="none" stroke="#e6a8b1" stroke-width="7" stroke-linecap="round"/>
        </g>
        <ellipse cx="205" cy="326" rx="105" ry="72" fill="${type.fur}" stroke="#221e1f" stroke-width="8"/>
        <ellipse cx="205" cy="333" rx="59" ry="53" fill="${type.belly}" opacity=".9"/>
        <ellipse cx="140" cy="382" rx="39" ry="17" fill="${type.fur}" stroke="#221e1f" stroke-width="7"/>
        <ellipse cx="270" cy="382" rx="39" ry="17" fill="${type.fur}" stroke="#221e1f" stroke-width="7"/>
        <g class="ear-left">
          <circle cx="139" cy="144" r="58" fill="${type.fur}" stroke="#221e1f" stroke-width="8"/>
          <circle cx="139" cy="144" r="34" fill="#e7aab2" stroke="#221e1f" stroke-width="5"/>
        </g>
        <g class="ear-right">
          <circle cx="273" cy="139" r="58" fill="${type.fur}" stroke="#221e1f" stroke-width="8"/>
          <circle cx="273" cy="139" r="34" fill="#e7aab2" stroke="#221e1f" stroke-width="5"/>
        </g>
        <ellipse cx="205" cy="213" rx="100" ry="97" fill="${type.fur}" stroke="#221e1f" stroke-width="8"/>
        <path d="M139 241q-42 17-61 3m64 13q-45 32-75 25m201-41q42 17 61 3m-64 13q45 32 75 25" fill="none" stroke="#221e1f" stroke-width="5" stroke-linecap="round"/>
        <ellipse cx="162" cy="204" rx="13" ry="17" fill="#221e1f" class="eye-blink"/>
        <ellipse cx="248" cy="204" rx="13" ry="17" fill="#221e1f" class="eye-blink"/>
        <circle cx="157" cy="197" r="4" fill="#fffaf3"/>
        <circle cx="243" cy="197" r="4" fill="#fffaf3"/>
        <ellipse cx="140" cy="229" rx="18" ry="10" fill="#ee8894" opacity=".72"/>
        <ellipse cx="270" cy="229" rx="18" ry="10" fill="#ee8894" opacity=".72"/>
        <path d="M193 231q12-12 24 0-1 17-12 17-11 0-12-17z" fill="#ef6b75" stroke="#221e1f" stroke-width="5"/>
        <path d="M205 248q-1 17-17 17m17-17q1 17 17 17" fill="none" stroke="#221e1f" stroke-width="5" stroke-linecap="round"/>
        <path d="M118 300q-27 12-33 37m207-37q27 12 33 37" fill="none" stroke="#221e1f" stroke-width="15" stroke-linecap="round"/>
        <path d="M118 300q-27 12-33 37m207-37q27 12 33 37" fill="none" stroke="${type.fur}" stroke-width="8" stroke-linecap="round"/>
        ${accessoryMarkup(typeId, type.accent)}
      </svg>
    </div>
  `;
}

function calculateScores(selectedAnswers) {
  const scores = Object.fromEntries(Object.keys(MOUSE_TYPES).map((id) => [id, 0]));

  selectedAnswers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null || !QUESTIONS[questionIndex]?.answers[answerIndex]) return;
    const [primary, secondary] = QUESTIONS[questionIndex].answers[answerIndex].types;
    scores[primary] += 2;
    scores[secondary] += 2;
  });

  return scores;
}

function rankResults(scores, seed = "") {
  const seedValue = [...seed].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return Object.entries(scores)
    .map(([id, score], index) => ({
      id,
      score,
      tieBreak: (seedValue + index * 17) % 29,
    }))
    .sort((a, b) => b.score - a.score || b.tieBreak - a.tieBreak);
}

function switchScreen(screenId) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.toggle("is-active", screen.id === screenId);
  });
  const main = document.querySelector("main");
  main.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  state.name = document.querySelector("#mouse-name").value.trim();
  state.current = 0;
  state.answers.fill(null);
  state.result = null;
  renderQuestion();
  switchScreen("quiz-screen");
}

function renderQuestion(direction = "forward") {
  const question = QUESTIONS[state.current];
  const card = document.querySelector("#question-card");
  const answerContainer = document.querySelector("#answers");

  document.querySelector("#question-number").textContent = `OTÁZKA ${String(state.current + 1).padStart(2, "0")}`;
  document.querySelector("#question-title").textContent = question.text;
  document.querySelector("#progress-count").textContent = `${state.current + 1} / ${QUESTIONS.length}`;
  document.querySelector("#progress-fill").style.width = `${((state.current + 1) / QUESTIONS.length) * 100}%`;
  document.querySelector(".progress-track").setAttribute("aria-valuenow", String(state.current + 1));
  document.querySelector("#back-question").disabled = state.current === 0;

  const previewIds = Object.keys(MOUSE_TYPES);
  const previewId = previewIds[state.current % previewIds.length];
  document.querySelector("#quiz-mouse").innerHTML = createMouseSvg(previewId);
  document.querySelector("#mouse-comment").textContent = MOUSE_TYPES[previewId].comment;

  answerContainer.innerHTML = "";
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.style.setProperty("--answer-color", ANSWER_COLORS[index]);
    button.innerHTML = `
      <span class="answer-icon" aria-hidden="true">${answer.icon}</span>
      <span class="answer-text">${answer.text}</span>
      <span class="answer-letter" aria-hidden="true">${LETTERS[index]}</span>
    `;
    if (state.answers[state.current] === index) button.classList.add("is-selected");
    button.addEventListener("click", () => selectAnswer(index, button));
    answerContainer.appendChild(button);
  });

  card.classList.remove("is-leaving", "is-entering");
  void card.offsetWidth;
  card.classList.add("is-entering");
  card.style.setProperty("--entry-direction", direction === "back" ? "-1" : "1");
  setTimeout(() => card.classList.remove("is-entering"), 400);
}

function selectAnswer(index, button) {
  if (button.dataset.locked === "true") return;

  document.querySelectorAll(".answer-button").forEach((candidate) => {
    candidate.dataset.locked = "true";
    candidate.classList.remove("is-selected");
  });
  button.classList.add("is-selected");
  state.answers[state.current] = index;

  setTimeout(() => {
    if (state.current === QUESTIONS.length - 1) {
      showResult();
      return;
    }
    state.current += 1;
    renderQuestion();
  }, 430);
}

function goBack() {
  if (state.current <= 0) return;
  state.current -= 1;
  renderQuestion("back");
}

function showResult() {
  const scores = calculateScores(state.answers);
  const seed = `${state.name}-${state.answers.join("")}`;
  const ranking = rankResults(scores, seed);
  const winner = ranking[0];
  const runnerUp = ranking[1];
  const type = MOUSE_TYPES[winner.id];
  const match = Math.min(98, 79 + Math.round(winner.score / 2));

  state.result = { winner, runnerUp, match };

  document.documentElement.style.setProperty("--result-color", type.color);
  document.querySelector("#result-person").textContent = state.name
    ? `${state.name}, myšometr má jasno.`
    : "Myšometr má jasno.";
  document.querySelector("#result-title").innerHTML = `Jsi <em>${type.name}!</em>`;
  document.querySelector("#result-latin").textContent = type.latin;
  document.querySelector("#result-description").textContent = type.description;
  document.querySelector("#result-strength").textContent = type.strength;
  document.querySelector("#result-weakness").textContent = type.weakness;
  document.querySelector(".result-rank").textContent = type.rank;
  document.querySelector("#result-mouse").innerHTML = createMouseSvg(winner.id);
  document.querySelector("#match-value").textContent = `${match} %`;
  document.querySelector("#match-fill").style.width = "0";
  document.querySelector("#runner-up").textContent =
    `Těsně pod kožíškem se schovává také ${MOUSE_TYPES[runnerUp.id].name.toLowerCase()} (${runnerUp.score} myšobodů).`;

  const chips = document.querySelector("#trait-chips");
  chips.innerHTML = type.traits.map((trait) => `<span class="trait-chip">${trait}</span>`).join("");

  switchScreen("result-screen");
  createConfetti();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.querySelector("#match-fill").style.width = `${match}%`;
    });
  });
}

function createConfetti() {
  const container = document.querySelector("#confetti");
  const colors = ["#f6c945", "#f17868", "#87c7ae", "#8f7bd7", "#f4a9bd"];
  container.innerHTML = "";

  for (let index = 0; index < 42; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.setProperty("--confetti-color", colors[index % colors.length]);
    piece.style.setProperty("--fall-time", `${2.5 + Math.random() * 2.5}s`);
    piece.style.setProperty("--fall-delay", `${Math.random() * 0.8}s`);
    piece.style.setProperty("--drift", `${-90 + Math.random() * 180}px`);
    if (index % 3 === 0) piece.style.borderRadius = "50%";
    container.appendChild(piece);
  }

  setTimeout(() => {
    container.innerHTML = "";
  }, 6000);
}

function buildAtlas() {
  const grid = document.querySelector("#atlas-grid");
  grid.innerHTML = Object.entries(MOUSE_TYPES)
    .map(
      ([id, type], index) => `
        <button
          class="atlas-card"
          type="button"
          data-type="${id}"
          style="--card-color:${type.color};--card-rotate:${index % 2 ? "1.5deg" : "-1.5deg"}"
          aria-label="Zobrazit detail: ${type.name}"
        >
          <div class="atlas-card-art"><div>${createMouseSvg(id)}</div></div>
          <div class="atlas-card-copy">
            <span>${type.rank}</span>
            <h3>${type.name}</h3>
            <p>${type.traits.join(" • ")}</p>
          </div>
        </button>
      `,
    )
    .join("");

  grid.querySelectorAll(".atlas-card").forEach((card) => {
    card.addEventListener("click", () => openTypeDetail(card.dataset.type));
  });
}

function openAtlas() {
  const atlas = document.querySelector("#atlas-dialog");
  if (!atlas.open) atlas.showModal();
}

function closeAtlas() {
  document.querySelector("#atlas-dialog").close();
}

function openTypeDetail(id) {
  const type = MOUSE_TYPES[id];
  const dialog = document.querySelector("#type-dialog");
  document.querySelector("#type-detail-art").innerHTML = createMouseSvg(id);
  document.querySelector("#type-detail-art").style.setProperty("--detail-color", type.color);
  document.querySelector("#type-detail-latin").textContent = type.latin;
  document.querySelector("#type-dialog-title").textContent = type.name;
  document.querySelector("#type-detail-description").textContent = type.description;
  document.querySelector("#type-detail-strength").textContent = type.strength;
  document.querySelector("#type-detail-weakness").textContent = type.weakness;
  document.querySelector("#type-detail-traits").innerHTML = type.traits
    .map((trait) => `<span class="trait-chip">${trait}</span>`)
    .join("");
  dialog.showModal();
}

function closeOnBackdrop(event) {
  if (event.target === event.currentTarget) event.currentTarget.close();
}

async function shareResult() {
  if (!state.result) return;
  const type = MOUSE_TYPES[state.result.winner.id];
  const intro = state.name ? `${state.name} je` : "Jsem";
  const url = window.location.href.split("#")[0];
  const text = `${intro} ${type.name.toLowerCase()}! 🐭 ${type.traits.join(", ")}. Zjisti, jaká myš jsi ty: ${url}`;

  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }

  showToast("Výsledek zkopírován do schránky!");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function goHome() {
  switchScreen("home-screen");
}

function initCursorCheese() {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  const cursor = document.querySelector(".cursor-cheese");
  document.addEventListener("pointermove", (event) => {
    cursor.style.transform = `translate(${event.clientX + 12}px, ${event.clientY + 14}px) rotate(-15deg)`;
    cursor.classList.toggle("is-visible", Boolean(event.target.closest("button")));
  });
}

function init() {
  document.querySelector("#hero-mouse").innerHTML = createMouseSvg("broskvomys", "Animovaná broskvomyš");
  buildAtlas();
  initCursorCheese();

  document.querySelector("#start-quiz").addEventListener("click", startQuiz);
  document.querySelector("#mouse-name").addEventListener("keydown", (event) => {
    if (event.key === "Enter") startQuiz();
  });
  document.querySelector("#back-question").addEventListener("click", goBack);
  document.querySelector("#restart-quiz").addEventListener("click", startQuiz);
  document.querySelector("#share-result").addEventListener("click", shareResult);
  document.querySelectorAll("[data-open-atlas]").forEach((button) => {
    button.addEventListener("click", openAtlas);
  });
  document.querySelectorAll("[data-go-home]").forEach((button) => {
    button.addEventListener("click", goHome);
  });
  document.querySelector("#close-atlas").addEventListener("click", closeAtlas);
  document.querySelector("#close-type").addEventListener("click", () => {
    document.querySelector("#type-dialog").close();
  });
  document.querySelector("#atlas-dialog").addEventListener("click", closeOnBackdrop);
  document.querySelector("#type-dialog").addEventListener("click", closeOnBackdrop);

  document.addEventListener("keydown", (event) => {
    if (!document.querySelector("#quiz-screen").classList.contains("is-active")) return;
    const index = LETTERS.indexOf(event.key.toUpperCase());
    const buttons = document.querySelectorAll(".answer-button");
    if (index >= 0 && buttons[index]) buttons[index].click();
  });
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", init);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    MOUSE_TYPES,
    QUESTIONS,
    calculateScores,
    rankResults,
    createMouseSvg,
  };
}
