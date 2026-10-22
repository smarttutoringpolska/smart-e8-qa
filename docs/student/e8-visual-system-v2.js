(() => {
  const svg = (label, body, className = "") => `<svg class="visual-scene v2-scene ${className}" viewBox="0 0 360 180" role="img" aria-label="${label}" focusable="false"><rect class="v2-canvas" x="3" y="3" width="354" height="174" rx="16"/>${body}</svg>`;
  const panel = (x, y, w, h, kind = "") => `<rect class="v2-panel ${kind}" x="${x}" y="${y}" width="${w}" height="${h}" rx="12"/>`;
  const escapeText = (value) => String(value).replace(/[&<>]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[character]);
  const fittedKind = (value, kind) => kind.includes("v2-kicker") && String(value).length > 24 ? `${kind} v2-kicker-compact` : kind;
  const text = (x, y, value, kind = "v2-label", anchor = "start") => `<text class="${fittedKind(value, kind)}" x="${x}" y="${y}" text-anchor="${anchor}">${escapeText(value)}</text>`;
  const middleText = (x, y, value, kind = "v2-label") => `<text class="${fittedKind(value, kind)}" x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle">${escapeText(value)}</text>`;
  const line = (d, kind = "v2-line") => `<path class="${kind}" d="${d}"/>`;
  const chip = (x, y, w, value, kind = "") => {
    const safeWidth = Math.max(w, Math.min(118, String(value).length * 5.5 + 18));
    const safeX = Math.max(12, Math.min(x, 348 - safeWidth));
    return `${panel(safeX, y, safeWidth, 24, `v2-chip ${kind}`)}${middleText(safeX + safeWidth / 2, y + 12.5, value, "v2-chip-text")}`;
  };
  const fraction = (x, y, n, d, kind = "") => {
    const half = Math.max(11, Math.min(31, Math.max(String(n).length, String(d).length) * 3.6 + 5));
    return `<g class="v2-fraction ${kind}">${text(x, y - 5, n, "v2-fraction-text", "middle")}${line(`M${x - half} ${y}H${x + half}`, "v2-fraction-line")}${text(x, y + 15, d, "v2-fraction-text", "middle")}</g>`;
  };

  const scenes = {
    "integers-axis": () => svg("Porównanie liczb minus cztery i trzy na osi liczbowej", `
      ${panel(10, 10, 340, 160, "v2-panel-primary")}
      ${text(25, 31, "PORÓWNAJ LICZBY", "v2-kicker")}${chip(266, 17, 70, "liczby rosną →", "v2-chip-blue")}
      ${line("M25 112H338M328 104L338 112L328 120", "v2-axis")}
      ${[-4,-3,-2,-1,0,1,2,3,4].map((n,i)=>{const x=38+i*35;return `${line(`M${x} 104V120`, n===0?"v2-heavy":"v2-tick")}${middleText(x,133,n,"v2-meta")}`;}).join("")}
      <circle class="v2-point v2-point-warm" cx="38" cy="112" r="7"/><circle class="v2-point v2-point-good" cx="283" cy="112" r="7"/>
      ${line("M38 88C96 64 226 64 283 88M273 80L283 88L271 92", "v2-move")}${middleText(160.5,58,"7 jednostek w prawo","v2-move-label")}
      ${panel(105,137,150,25,"v2-panel-good")}${middleText(180,149.5,"−4 < 3", "v2-result")}
    `,"v2-numberline-scene"),

    "operation-order": () => svg("Kolejność działań na przykładzie osiemnaście minus trzy razy cztery", `
      ${text(18,25,"JEDEN RACHUNEK · CZTERY DECYZJE","v2-kicker")}${chip(260,13,82,"wynik: 6","v2-chip-good")}
      ${[[18,"1","Nawiasy","( )"],[101,"2","Potęgi","a²"],[184,"3","Mnożenie","×  ÷"],[267,"4","Dodawanie","+  −"]].map(([x,n,a,b],i)=>`${panel(x,40,74,70,i===2?"v2-panel-warm":"")}${text(x+12,58,n,"v2-step")}${text(x+37,82,b,"v2-formula","middle")}${text(x+37,101,a,"v2-meta","middle")}${i<3?line(`M${x+74} 75H${x+83}`,"v2-arrow"):""}`).join("")}
      ${panel(72,125,216,40,"v2-panel-primary")}${text(180,143,"18 − 3 · 4","v2-formula","middle")}${text(180,159,"18 − 12 = 6","v2-result","middle")}
    `),

    "factor-estimate": () => svg("Rozkład liczby osiemdziesiąt cztery i szacowanie iloczynu", `
      ${panel(12,15,158,150,"v2-panel-primary")}${text(28,34,"ROZKŁAD NA CZYNNIKI","v2-kicker")}${text(91,51,"84","v2-formula","middle")}
      ${line("M91 55L61 71M91 55L128 71M61 78L43 96M61 78L81 96M81 103L70 122M81 103L94 122","v2-tree")}
      ${[[61,75,"12"],[128,75,"7"],[43,100,"3"],[81,100,"4"],[70,126,"2"],[94,126,"2"]].map(([x,y,v])=>`${panel(x-12,y-11,24,20,"v2-mini")}${text(x,y+3,v,"v2-label","middle")}`).join("")}
      ${text(91,154,"84 = 2² · 3 · 7","v2-result","middle")}
      ${panel(182,15,166,150,"v2-panel-warm")}${text(198,36,"SZYBKA KONTROLA","v2-kicker")}${text(265,68,"198 · 51","v2-formula","middle")}${line("M222 82H308M299 75L308 82L299 89","v2-guide")}${text(265,105,"200 · 50","v2-formula","middle")}${text(265,137,"≈ 10 000","v2-result","middle")}${text(265,155,"wynik powinien być blisko","v2-meta","middle")}
    `),

    "fraction-meaning": () => svg("Trzy piąte jako część całości", `
      ${text(18,27,"UŁAMEK OPISUJE RÓWNE CZĘŚCI","v2-kicker")}${chip(276,14,66,"3 z 5","v2-chip-good")}
      ${panel(25,50,250,62,"v2-panel-primary")}${[0,1,2,3,4].map(i=>`<rect class="${i<3?"v2-fraction-fill":"v2-fraction-empty"}" x="${31+i*48}" y="56" width="46" height="50" rx="7"/>${text(54+i*48,87,i+1,"v2-label","middle")}`).join("")}
      ${fraction(309,73,"3","5","v2-fraction-main")}${text(309,113,"wybrane / wszystkie","v2-meta","middle")}
      ${line("M31 126H173","v2-brace")}${text(102,141,"licznik: 3 części","v2-note","middle")}${line("M31 151H269","v2-brace")}${text(269,164,"mianownik: 5 równych części","v2-note","end")}
    `),

    "fraction-operations": () => svg("Dodawanie jednej trzeciej i jednej szóstej przez wspólny mianownik", `
      ${text(18,25,"NAJPIERW WSPÓLNE CZĘŚCI","v2-kicker")}${chip(282,13,60,"mian. 6","v2-chip-blue")}
      ${panel(16,40,328,84,"v2-panel-primary")}
      ${fraction(50,75,"1","3","v2-fraction-main")}${text(81,78,"=","v2-formula","middle")}${fraction(110,75,"2","6")}${text(143,78,"+","v2-formula","middle")}${fraction(172,75,"1","6")}${text(204,78,"=","v2-formula","middle")}${fraction(234,75,"3","6")}${text(269,78,"=","v2-formula","middle")}${fraction(310,75,"1","2","v2-fraction-good")}
      ${line("M93 106H187","v2-brace")}${text(140,118,"ten sam mianownik","v2-meta","middle")}
      ${panel(52,137,256,29,"v2-panel-good")}${text(180,157,"⅓ + ⅙ = ½","v2-result","middle")}
    `),

    "decimal-place": () => svg("Dodawanie liczb dziesiętnych z wyrównanymi przecinkami", `
      ${panel(12,10,336,158,"v2-panel-primary")}
      ${text(28,29,"DODAWANIE PISEMNE","v2-kicker")}${chip(265,17,64,"4,65","v2-chip-good")}
      ${[[118,"JEDNOŚCI"],[201,"DZIESIĄTE"],[278,"SETNE"]].map(([x,label],index)=>`${panel(x-30,48,60,91,index===1?"v2-panel-warm":"")}${middleText(x,41,label,"v2-column-label")}`).join("")}
      ${middleText(56,93,"+","v2-operation")}
      ${middleText(118,69,"3","v2-place-number")}${middleText(159,69,",","v2-comma")}${middleText(201,69,"4","v2-place-number")}${middleText(278,69,"0","v2-place-number")}
      ${middleText(118,98,"1","v2-place-number")}${middleText(159,98,",","v2-comma")}${middleText(201,98,"2","v2-place-number")}${middleText(278,98,"5","v2-place-number")}
      ${line("M78 116H309","v2-heavy")}${line("M159 49V139","v2-decimal-guide")}
      ${middleText(118,129,"4","v2-place-result")}${middleText(159,129,",","v2-comma v2-comma-result")}${middleText(201,129,"6","v2-place-result")}${middleText(278,129,"5","v2-place-result")}
      ${panel(69,145,222,19,"v2-decimal-rule")}${middleText(180,155,"Przecinki zawsze w jednej kolumnie","v2-decimal-rule-text")}
    `),

    "percent-grid": () => svg("Trzydzieści pięć procent na siatce stu pól", `
      ${text(16,23,"35% = 35 ZE 100 PÓL","v2-kicker")}
      ${panel(14,35,128,126,"v2-panel-primary")}<g transform="translate(24 48)">${Array.from({length:100},(_,i)=>`<rect class="${i<35?"v2-grid-on":"v2-grid-off"}" x="${(i%10)*10.5}" y="${Math.floor(i/10)*9.4}" width="8.5" height="7.5" rx="1.8"/>`).join("")}</g>
      ${panel(154,35,190,126,"v2-panel-primary")}
      <g class="v2-equation-chain">
        ${text(205,68,"35%","v2-big","middle")}${text(245,68,"=","v2-formula","middle")}${text(291,68,"0,35","v2-formula","middle")}
        ${fraction(202,112,"35","100","v2-fraction-main")}${text(249,116,"=","v2-formula","middle")}${fraction(296,112,"7","20","v2-fraction-good")}
      </g>
      ${text(249,151,"35 zaznaczonych pól","v2-meta","middle")}
    `),

    "percent-change": () => svg("Kolejna obniżka i podwyżka procentowa", `
      ${text(16,24,"KAŻDA ZMIANA LICZY SIĘ OD NOWEJ WARTOŚCI","v2-kicker")}
      ${[[18,"100 zł","start",""],[139,"80 zł","po −20%","× 0,8"],[260,"96 zł","po +20%","× 1,2"]].map(([x,v,s,m],i)=>`${panel(x,48,82,66,i===2?"v2-panel-good":i===1?"v2-panel-warm":"")}${text(x+41,76,v,"v2-formula","middle")}${text(x+41,98,s,"v2-meta","middle")}${i?text(x-19,79,m,"v2-chip-text","middle")+line(`M${x-36} 85H${x-8}`,"v2-arrow"):""}`).join("")}
      ${panel(71,128,218,38,"v2-panel-warm")}${text(180,147,"96 zł ≠ 100 zł","v2-result","middle")}${text(180,161,"procent ma zawsze własną podstawę","v2-meta","middle")}
    `),

    "percent-finance": () => svg("Rabat ceny i zmiana w punktach procentowych", `
      ${panel(13,15,160,150,"v2-panel-warm")}${text(29,38,"RABAT CENOWY","v2-kicker")}${text(45,71,"80 zł","v2-formula")}${text(126,71,"−25%","v2-result","middle")}${line("M43 87H143M134 80L143 87L134 94","v2-arrow")}${text(93,118,"60 zł","v2-big","middle")}${text(93,145,"80 · 0,75","v2-note","middle")}
      ${panel(187,15,160,150,"v2-panel-primary")}${text(203,38,"PUNKTY PROCENTOWE","v2-kicker")}${line("M214 125V77M281 125V58","v2-heavy")}<rect class="v2-bar-blue" x="226" y="86" width="33" height="39" rx="5"/><rect class="v2-bar-good" x="293" y="68" width="33" height="57" rx="5"/>${text(242,79,"40%","v2-meta","middle")}${text(309,61,"55%","v2-meta","middle")}${text(270,146,"wzrost o 15 p.p.","v2-result","middle")}
    `),

    "power-laws": () => svg("Mnożenie potęg o tej samej podstawie", `
      ${text(18,25,"TA SAMA PODSTAWA · DODAJ WYKŁADNIKI","v2-kicker")}${chip(286,13,55,"3 + 2","v2-chip-blue")}
      ${panel(17,42,326,78,"v2-panel-primary")}${text(180,69,"2³ · 2² = 2⁵","v2-big","middle")}
      ${[72,126,180,234,288].map((x,i)=>`<circle class="${i<3?"v2-token-blue":"v2-token-warm"}" cx="${x}" cy="97" r="14"/>${text(x,102,"2","v2-label","middle")}`).join("")}
      ${line("M57 129H195","v2-brace")}${text(126,144,"3 czynniki","v2-meta","middle")}${line("M219 129H303","v2-brace")}${text(261,144,"2 czynniki","v2-meta","middle")}${text(180,163,"razem 5 czynników równych 2","v2-note","middle")}
    `),

    "roots-square": () => svg("Pierwiastek jako bok kwadratu", `
      ${panel(14,14,208,152,"v2-panel-primary")}<rect class="v2-square" x="58" y="34" width="106" height="106" rx="8"/>${text(111,82,"P = 49","v2-formula","middle")}${text(111,103,"jedn.²","v2-meta","middle")}${line("M58 148H164","v2-dimension")}${text(111,160,"a = 7","v2-label","middle")}
      ${panel(236,14,110,152,"v2-panel-good")}${text(291,42,"PIERWIASTEK","v2-kicker","middle")}${text(291,78,"√49","v2-big","middle")}${text(291,104,"= 7","v2-result","middle")}${text(291,134,"bo 7² = 49","v2-note","middle")}
    `),

    "scientific-shift": () => svg("Zapis liczby w notacji wykładniczej", `
      ${text(18,24,"NOTACJA WYKŁADNICZA","v2-kicker")}${chip(270,12,72,"5 miejsc","v2-chip-blue")}
      ${panel(18,42,324,58,"v2-panel-primary")}${["4","5","0","0","0","0"].map((v,i)=>`${panel(34+i*49,52,39,38,i<2?"v2-mini-active":"v2-mini")}${middleText(53.5+i*49,71,v,"v2-formula")}`).join("")}
      ${line("M296 109C256 139 118 139 70 109M80 105L70 109L78 118","v2-guide")}${middleText(183,125,"przecinek przesuwamy o 5 miejsc w lewo","v2-note")}
      ${panel(92,143,176,27,"v2-panel-good")}${middleText(180,157,"450 000 = 4,5 · 10⁵","v2-result")}
    `),

    "algebra-tiles": () => svg("Łączenie wyrazów podobnych dwa iksy plus trzy iksy", `
      ${text(16,23,"ŁĄCZ TYLKO TAKIE SAME KLOCKI","v2-kicker")}${chip(276,12,67,"2x + 3x","v2-chip-blue")}
      ${panel(15,38,330,84,"v2-panel-primary")}${[37,79].map(x=>`<rect class="v2-tile-blue" x="${x}" y="55" width="34" height="48" rx="8"/>${middleText(x+17,79,"x","v2-label")}`).join("")}${middleText(130,79,"+","v2-formula")}${[157,199,241].map(x=>`<rect class="v2-tile-warm" x="${x}" y="55" width="34" height="48" rx="8"/>${middleText(x+17,79,"x","v2-label")}`).join("")}
      ${line("M55 137H294M285 130L294 137L285 144","v2-arrow")}${text(180,164,"2x + 3x = 5x","v2-result","middle")}
    `),

    "algebra-pattern": () => svg("Wzór liczby patyczków trzy n plus jeden", `
      ${text(16,23,"OD FIGURY DO WZORU","v2-kicker")}${chip(269,11,75,"3n + 1","v2-chip-good")}
      ${[[25,1],[118,2],[229,3]].map(([x,n])=>`<g transform="translate(${x} 48)">${Array.from({length:n},(_,i)=>`<path class="v2-stick" d="M${i*32} 0H${i*32+32}V40H${i*32}Z"/>`).join("")}</g>${text(x+(n*32)/2,105,`figura ${n}`,"v2-meta","middle")}${text(x+(n*32)/2,122,`${3*n+1} patyczki`,"v2-label","middle")}`).join("")}
      ${line("M48 139H318","v2-guide")}${text(183,158,"za każdym razem dochodzą 3 patyczki","v2-note","middle")}
    `),

    "proof-argument": () => svg("Dowód ogólny i kontrprzykład", `
      ${panel(12,15,205,150,"v2-panel-primary")}${text(28,38,"DOWÓD · WSZYSTKIE PRZYPADKI","v2-kicker")}${text(114,72,"2a + 2b","v2-formula","middle")}${line("M67 85H161M152 78L161 85L152 92","v2-arrow")}${text(114,111,"2(a + b)","v2-big","middle")}${chip(62,127,104,"zawsze parzysta","v2-chip-good")}
      ${panel(231,15,117,150,"v2-panel-warm")}${text(289,38,"KONTRPRZYKŁAD","v2-kicker","middle")}<circle class="v2-token-warm" cx="289" cy="78" r="27"/>${text(289,87,"2","v2-big","middle")}${text(289,123,"pierwsza","v2-note","middle")}${text(289,141,"i parzysta","v2-result","middle")}
    `),

    "equation-balance": () => svg("Równanie jako waga x plus trzy równa się osiem", `
      ${text(16,23,"TA SAMA OPERACJA PO OBU STRONACH","v2-kicker")}${chip(281,11,63,"−3 | −3","v2-chip-blue")}
      ${line("M58 62H302M180 62V140M122 140H238","v2-heavy")}${line("M74 62L49 110M74 62L99 110M286 62L261 110M286 62L311 110","v2-scale-cord")}${line("M44 110Q74 122 104 110M256 110Q286 122 316 110","v2-scale-pan")}<circle class="v2-joint" cx="180" cy="62" r="8"/>
      ${text(74,101,"x + 3","v2-formula","middle")}${text(286,101,"8","v2-formula","middle")}${panel(132,145,96,28,"v2-panel-good")}${text(180,165,"x = 5","v2-result","middle")}
    `),

    "equation-story": () => svg("Od treści zadania do równania i odpowiedzi", `
      ${text(17,22,"PRZETŁUMACZ TREŚĆ NA MATEMATYKĘ","v2-kicker")}
      ${[[15,"1","NIEWIADOMA","x = cena biletu"],[126,"2","RELACJA","x + 8 zł"],[237,"3","RÓWNANIE","x + 8 = 20"]].map(([x,n,a,b],i)=>`${panel(x,39,103,79,i===2?"v2-panel-primary":"")}${panel(x+8,47,20,20,"v2-step-badge")}${middleText(x+18,57,n,"v2-step-number")}${middleText(x+52,75,a,"v2-kicker")}${middleText(x+52,99,b,"v2-note")}${i<2?line(`M${x+103} 79H${x+111}`,"v2-arrow"):""}`).join("")}
      ${panel(72,136,216,31,"v2-panel-good")}${text(180,157,"x = 12 zł · odpowiedź z jednostką","v2-result","middle")}
    `),

    "equation-geometry": () => svg("Równanie utworzone z obwodu prostokąta", `
      ${panel(14,15,208,150,"v2-panel-primary")}<rect class="v2-shape" x="45" y="47" width="142" height="78" rx="5"/>${line("M45 38H187","v2-dimension")}${text(116,32,"x + 3","v2-label","middle")}${line("M34 47V125","v2-dimension")}${text(22,89,"x","v2-label","middle")}${text(116,148,"obwód = 22","v2-result","middle")}
      ${panel(235,15,112,150,"v2-panel-warm")}${text(291,42,"OBWÓD","v2-kicker","middle")}${text(291,76,"2x +","v2-formula","middle")}${text(291,100,"2(x+3)","v2-formula","middle")}${line("M255 113H327","v2-rule")}${text(291,139,"x = 4","v2-result","middle")}
    `),

    "open-solution": () => svg("Pełne rozwiązanie zadania otwartego w pięciu krokach", `
      ${text(17,23,"PUNKTY DOSTAJESZ ZA TOK ROZUMOWANIA","v2-kicker")}${chip(289,11,54,"0–3 pkt","v2-chip-blue")}
      ${line("M42 84H318","v2-progress")}${[[42,"1","Dane"],[111,"2","Model"],[180,"3","Rachunek"],[249,"4","Sprawdź"],[318,"5","Odpowiedź"]].map(([x,n,l],i)=>`<circle class="${i<3?"v2-step-dot active":"v2-step-dot"}" cx="${x}" cy="84" r="16"/>${text(x,89,n,"v2-step-number","middle")}${text(x,119,l,"v2-meta","middle")}`).join("")}
      ${panel(58,137,244,29,"v2-panel-good")}${text(180,157,"zapisuj równanie, jednostki i wniosek","v2-result","middle")}
    `),

    "ratio-scale": () => svg("Proporcja o stałym stosunku dwa do trzech", `
      ${text(16,23,"ROZMIAR SIĘ ZMIENIA · STOSUNEK ZOSTAJE","v2-kicker")}${chip(290,11,53,"× 2","v2-chip-warm")}
      ${panel(16,40,328,92,"v2-panel-primary")}<rect class="v2-ratio-small" x="42" y="70" width="72" height="45" rx="7"/><rect class="v2-ratio-large" x="230" y="57" width="96" height="60" rx="7"/>${middleText(78,58,"2 × 3","v2-label")}${middleText(278,47,"4 × 6","v2-label")}${line("M128 88H211M201 80L211 88L201 96","v2-arrow")}${middleText(169,70,"×2","v2-formula")}${middleText(169,108,"ten sam stosunek boków","v2-note")}
      ${panel(93,142,174,28,"v2-panel-good")}${text(180,161,"2 : 3 = 4 : 6","v2-result","middle")}
    `),

    "motion-route": () => svg("Droga prędkość i czas na trasie", `
      ${text(16,23,"TRASA PORZĄDKUJE DANE","v2-kicker")}${chip(283,11,60,"t = 1,5 h","v2-chip-good")}
      ${panel(15,39,219,125,"v2-panel-primary")}${line("M43 121C76 63 141 132 207 67","v2-route")}<circle class="v2-route-point" cx="43" cy="121" r="7"/><circle class="v2-route-point end" cx="207" cy="67" r="7"/>${text(43,143,"A","v2-label","middle")}${text(207,55,"B","v2-label","middle")}${text(122,89,"s = 90 km","v2-result","middle")}${text(122,112,"v = 60 km/h","v2-note","middle")}
      ${panel(247,39,98,125,"v2-panel-warm")}${line("M296 55L259 125H333Z","v2-formula-triangle")}${text(296,82,"s","v2-formula","middle")}${line("M272 96H320M296 96V125","v2-rule")}${text(280,117,"v","v2-formula","middle")}${text(313,117,"t","v2-formula","middle")}${text(296,151,"t = s : v","v2-result","middle")}
    `),

    "practical-units": () => svg("Zamiana jednostek czasu długości i pieniędzy", `
      ${text(16,23,"NAJPIERW UJEDNOLIĆ JEDNOSTKI","v2-kicker")}
      ${[[15,"CZAS","1,5 h","90 min","× 60"],[126,"DŁUGOŚĆ","2,4 km","2400 m","× 1000"],[237,"PIENIĄDZE","12,50 zł","1250 gr","× 100"]].map(([x,a,b,c,d],i)=>`${panel(x,40,103,119,i===1?"v2-panel-primary":"")}${text(x+51,60,a,"v2-kicker","middle")}${text(x+51,85,b,"v2-formula","middle")}${line(`M${x+25} 96H${x+78}`,"v2-arrow")}${text(x+51,116,c,"v2-result","middle")}${chip(x+25,128,53,d,"v2-chip-blue")}`).join("")}
    `),

    "flat-figures": () => svg("Pole trójkąta z zaznaczoną wysokością", `
      ${text(16,23,"WYSOKOŚĆ ⟂ PODSTAWA","v2-kicker")}${chip(282,11,61,"kąt 90°","v2-chip-warm")}
      ${panel(14,39,218,125,"v2-panel-primary")}<path class="v2-triangle-fill" d="M42 136L128 55L207 136Z"/>${line("M42 136L128 55L207 136Z","v2-shape-line")}${line("M128 55V136","v2-guide")}${line("M128 125H139V136","v2-right-angle")}${middleText(117,96,"h","v2-label")}${middleText(125,151,"a","v2-label")}
      ${panel(245,39,100,125,"v2-panel-good")}${text(295,65,"POLE","v2-kicker","middle")}${text(295,91,"a · h","v2-formula","middle")}${line("M269 98H321","v2-fraction-line")}${text(295,119,"2","v2-formula","middle")}${text(295,146,"najpierw szkic","v2-note","middle")}
    `),

    "composite-area": () => svg("Pole figury złożonej podzielonej na dwa prostokąty", `
      ${text(16,23,"PODZIEL FIGURĘ NA PROSTE CZĘŚCI","v2-kicker")}${chip(282,11,61,"P₁ + P₂","v2-chip-blue")}
      ${panel(14,39,230,125,"v2-panel-primary")}<path class="v2-composite-a" d="M43 56H207V96H133V137H43Z"/><path class="v2-composite-b" d="M133 96H207V137H133Z"/>${line("M43 56H207V137H43Z M133 96H207 M133 96V137","v2-shape-line")}${middleText(86,96,"P₁","v2-formula")}${middleText(170,117,"P₂","v2-formula")}${line("M43 148H207","v2-dimension")}${middleText(125,158,"8 cm","v2-meta")}
      ${panel(257,39,88,125,"v2-panel-warm")}${text(301,63,"METODA","v2-kicker","middle")}${text(301,91,"P =","v2-formula","middle")}${text(301,113,"P₁ + P₂","v2-result","middle")}${text(301,142,"bez luk i","v2-note","middle")}${text(301,155,"nakładania","v2-note","middle")}
    `),

    "circle-measures": () => svg("Promień średnica i styczna do okręgu", `
      ${text(16,23,"PROMIEŃ · ŚREDNICA · STYCZNA","v2-kicker")}${chip(286,11,57,"d = 2r","v2-chip-blue")}
      ${panel(14,39,216,125,"v2-panel-primary")}<circle class="v2-circle" cx="104" cy="101" r="49"/><circle class="v2-center-point" cx="104" cy="101" r="5"/>${line("M55 101H153","v2-diameter")}${line("M104 101L149 82","v2-radius")}${line("M153 48V154","v2-tangent")}${line("M143 101H153V91","v2-right-angle")}${middleText(79,91,"d","v2-label")}${middleText(132,82,"r","v2-label")}${middleText(186,76,"styczna","v2-meta")}
      ${panel(243,39,103,125,"v2-panel-good")}${text(294,63,"WZORY","v2-kicker","middle")}${text(294,91,"l = 2πr","v2-formula","middle")}${line("M260 104H328","v2-rule")}${text(294,130,"P = πr²","v2-formula","middle")}${text(294,151,"π ≈ 3,14","v2-note","middle")}
    `),

    "pythagoras-squares": () => svg("Twierdzenie Pitagorasa w trójkącie trzy cztery pięć", `
      ${text(16,23,"TYLKO TRÓJKĄT PROSTOKĄTNY","v2-kicker")}${chip(279,11,64,"3–4–5","v2-chip-good")}
      ${panel(14,39,210,125,"v2-panel-primary")}<path class="v2-triangle-fill" d="M58 136L58 67L189 136Z"/>${line("M58 136V67L189 136Z","v2-shape-line")}${line("M58 124H70V136","v2-right-angle")}${middleText(42,102,"b = 3","v2-label")}${middleText(123,151,"a = 4","v2-label")}${middleText(132,91,"c = 5","v2-label")}${middleText(49,151,"A","v2-meta")}${middleText(50,59,"B","v2-meta")}${middleText(198,141,"C","v2-meta")}
      ${panel(238,39,108,125,"v2-panel-good")}${text(292,64,"PITAGORAS","v2-kicker","middle")}${text(292,89,"a² + b² = c²","v2-formula v2-formula-compact","middle")}${line("M253 102H331","v2-rule")}${text(292,122,"3² + 4² = 5²","v2-result","middle")}${text(292,145,"9 + 16 = 25","v2-note","middle")}
    `),

    "coordinate-point": () => svg("Punkt A minus dwa przecinek trzy w układzie współrzędnych", `
      ${text(16,23,"NAJPIERW x · POTEM y","v2-kicker")}${chip(286,11,57,"A(−2,3)","v2-chip-blue")}
      ${panel(14,39,234,125,"v2-panel-primary")}<g class="v2-coordinate-grid">${[46,78,110,142,174,206].map(x=>line(`M${x} 50V151`,`v2-grid-line`)).join("")}${[56,80,104,128,152].map(y=>line(`M28 ${y}H234`,`v2-grid-line`)).join("")}</g>${line("M28 104H234M142 50V153","v2-axis")}${line("M78 80V104M78 80H142","v2-guide")}<circle class="v2-point v2-point-warm" cx="78" cy="80" r="6"/>${text(67,72,"A","v2-label","middle")}${text(78,119,"−2","v2-meta","middle")}${text(151,84,"3","v2-meta")}
      ${panel(260,39,87,125,"v2-panel-good")}${text(303,67,"RUCH","v2-kicker","middle")}${text(303,91,"← 2","v2-formula","middle")}${text(303,115,"↑ 3","v2-formula","middle")}${text(303,143,"x → y","v2-result","middle")}
    `),

    "coordinate-shape": () => svg("Prostokąt w układzie współrzędnych i środek przekątnej", `
      ${text(16,23,"WSPÓŁRZĘDNE OPISUJĄ FIGURĘ","v2-kicker")}${chip(283,11,60,"S(2,2)","v2-chip-good")}
      ${panel(14,39,234,125,"v2-panel-primary")}<g class="v2-coordinate-grid">${[45,78,111,144,177,210].map(x=>line(`M${x} 50V151`,`v2-grid-line`)).join("")}${[55,79,103,127,151].map(y=>line(`M29 ${y}H233`,`v2-grid-line`)).join("")}</g>${line("M29 127H233M111 49V153","v2-axis")}<rect class="v2-coordinate-shape" x="78" y="55" width="132" height="72" rx="3"/>${line("M78 127L210 55","v2-guide")}<circle class="v2-point v2-point-good" cx="144" cy="91" r="6"/>${middleText(156,82,"S","v2-label")}
      ${panel(260,39,87,125,"v2-panel-warm")}${text(303,63,"ŚRODEK","v2-kicker","middle")}${fraction(303,92,"x₁ + x₂","2")}${fraction(303,132,"y₁ + y₂","2")}
    `),

    "solid-net": () => svg("Siatka sześcianu z sześcioma ścianami", `
      ${text(16,23,"KAŻDA ŚCIANA WYSTĘPUJE RAZ","v2-kicker")}${chip(292,11,49,"6 ścian","v2-chip-blue")}
      ${panel(14,39,231,125,"v2-panel-primary")}<g transform="translate(58 48)">${[[38,0,"v2-face-blue"],[0,38,"v2-face-warm"],[38,38,"v2-face-good"],[76,38,"v2-face-warm"],[114,38,"v2-face-blue"],[38,76,"v2-face-good"]].map(([x,y,c],i)=>`<rect class="${c}" x="${x}" y="${y}" width="36" height="36" rx="4"/>${middleText(x+18,y+18,i+1,"v2-label")}`).join("")}</g>
      ${panel(258,39,88,125,"v2-panel-good")}${text(302,64,"SPRAWDŹ","v2-kicker","middle")}${text(302,91,"6","v2-big","middle")}${text(302,112,"kwadratów","v2-note","middle")}${text(302,139,"bez nakładania","v2-result","middle")}
    `),

    "solid-volume": () => svg("Objętość prostopadłościanu", `
      ${text(16,23,"OBJĘTOŚĆ LICZY KOSTKI W ŚRODKU","v2-kicker")}${chip(282,11,62,"cm³","v2-chip-good")}
      ${panel(14,39,224,125,"v2-panel-primary")}<path class="v2-solid-front" d="M55 87L151 87L151 142L55 142Z"/><path class="v2-solid-top" d="M55 87L90 58L186 58L151 87Z"/><path class="v2-solid-side" d="M151 87L186 58L186 113L151 142Z"/>${line("M55 87L90 58H186V113L151 142H55Z M151 87H55 M151 87L186 58 M151 87V142","v2-shape-line")}${middleText(102,154,"a","v2-label")}${middleText(174,130,"b","v2-label")}${middleText(44,115,"H","v2-label")}
      ${panel(251,39,95,125,"v2-panel-warm")}${text(298,64,"OBJĘTOŚĆ","v2-kicker","middle")}${text(298,94,"V = Pₚ · H","v2-formula","middle")}${line("M267 108H329","v2-rule")}${text(298,132,"V = a · b · H","v2-result","middle")}${text(298,151,"jedn.³","v2-note","middle")}
    `),

    "solid-compare": () => svg("Porównanie objętości graniastosłupa i ostrosłupa", `
      ${text(16,23,"TA SAMA PODSTAWA I WYSOKOŚĆ","v2-kicker")}${chip(285,11,58,"1 : 3","v2-chip-warm")}
      ${panel(14,39,332,125,"v2-panel-primary")}<path class="v2-prism" d="M41 76L103 76L126 58L64 58ZM41 76V135L103 135L126 117V58M103 76V135M103 76L126 58"/><path class="v2-pyramid" d="M228 135L313 135L333 117L248 117ZM280 55L228 135M280 55L313 135M280 55L333 117M280 55L248 117"/>${middleText(83,151,"graniastosłup","v2-meta")}${middleText(280,151,"ostrosłup","v2-meta")}${middleText(83,106,"V","v2-big")}${middleText(280,103,"⅓ V","v2-big")}
    `),

    "chart-scale": () => svg("Wykres słupkowy ze skalą co pięć jednostek", `
      ${text(16,23,"NAJPIERW ODCZYTAJ SKALĘ OSI","v2-kicker")}${chip(285,11,58,"1 działka = 5","v2-chip-blue")}
      ${panel(14,39,251,125,"v2-panel-primary")}${line("M48 53V143H247","v2-axis")}${[0,5,10,15,20].map((v,i)=>`${line(`M43 ${143-i*21}H48`,`v2-tick`)}${text(37,147-i*21,v,"v2-meta","end")}${line(`M48 ${143-i*21}H247`,`v2-grid-line`)}`).join("")}<rect class="v2-bar-blue" x="75" y="101" width="31" height="42" rx="5"/><rect class="v2-bar-warm" x="127" y="80" width="31" height="63" rx="5"/><rect class="v2-bar-good" x="179" y="59" width="31" height="84" rx="5"/>${text(90,158,"A","v2-meta","middle")}${text(142,158,"B","v2-meta","middle")}${text(194,158,"C","v2-meta","middle")}
      ${panel(278,39,68,125,"v2-panel-good")}${text(312,64,"ODCZYT","v2-kicker","middle")}${text(312,91,"A = 10","v2-label","middle")}${text(312,114,"B = 15","v2-label","middle")}${text(312,137,"C = 20","v2-label","middle")}
    `),

    "statistics-center": () => svg("Średnia mediana i rozstęp zbioru danych", `
      ${text(16,23,"NAJPIERW UPORZĄDKUJ DANE","v2-kicker")}${chip(296,11,46,"n = 5","v2-chip-blue")}
      ${[40,92,144,196,248].map((x,i)=>`${panel(x,45,40,40,i===2?"v2-mini-active":"v2-mini")}${text(x+20,71,[2,5,7,9,12][i],"v2-formula","middle")}`).join("")}
      ${line("M164 92V107","v2-guide")}${text(164,121,"mediana = 7","v2-result","middle")}
      ${panel(19,137,102,29,"v2-panel-primary")}${text(70,157,"średnia = 7","v2-note","middle")}${panel(129,137,102,29,"v2-panel-warm")}${text(180,157,"mediana = 7","v2-note","middle")}${panel(239,137,102,29,"v2-panel-good")}${text(290,157,"rozstęp = 10","v2-note","middle")}
    `),

    "data-compare": () => svg("Dwa zbiory o tej samej średniej i różnym rozproszeniu", `
      ${text(16,23,"TA SAMA ŚREDNIA ≠ TAKIE SAME DANE","v2-kicker")}${chip(289,11,53,"średnia 5","v2-chip-good")}
      ${panel(14,39,332,125,"v2-panel-primary")}${text(32,74,"A","v2-label","middle")}${line("M51 70H322","v2-axis")}${[70,130,190,250,310].map(x=>`<circle class="v2-dot-blue" cx="${x}" cy="70" r="6"/>`).join("")}${line("M190 49V92","v2-mean-line")}
      ${middleText(32,124,"B","v2-label")}${line("M51 124H322","v2-axis")}${[158,174,190,206,222].map(x=>`<circle class="v2-dot-warm" cx="${x}" cy="124" r="6"/>`).join("")}${line("M190 103V145","v2-mean-line")}${middleText(190,157,"B ma mniejsze rozproszenie","v2-result")}
    `),

    "probability-space": () => svg("Prawdopodobieństwo wyrzucenia liczby parzystej", `
      ${text(16,23,"WYNIKI SPRZYJAJĄCE / WSZYSTKIE","v2-kicker")}${chip(291,11,50,"A={2,4,6}","v2-chip-blue")}
      ${[22,75,128,181,234,287].map((x,i)=>`${panel(x,42,45,48,(i+1)%2===0?"v2-mini-good":"v2-mini")}${middleText(x+22.5,66,i+1,"v2-formula")}`).join("")}
      ${line("M97 105V116H310V105","v2-brace")}${text(203,132,"3 wyniki sprzyjające","v2-note","middle")}${text(139,158,"P(A) =","v2-formula","end")}${fraction(177,153,"3","6","v2-fraction-main")}${text(211,158,"=","v2-formula","middle")}${fraction(248,153,"1","2","v2-fraction-good")}
    `),

    "counting-tree": () => svg("Drzewko dwóch rzutów monetą", `
      ${text(16,23,"KAŻDA ŚCIEŻKA TO JEDEN WYNIK","v2-kicker")}${chip(298,11,44,"2 · 2","v2-chip-blue")}
      ${text(28,96,"START","v2-kicker")}${line("M68 91L132 55M68 91L132 130M132 55L218 37M132 55L218 74M132 130L218 112M132 130L218 149","v2-tree")}
      ${[[132,55,"O"],[132,130,"R"],[218,37,"OO"],[218,74,"OR"],[218,112,"RO"],[218,149,"RR"]].map(([x,y,v],i)=>`<circle class="${i<2?"v2-tree-node":"v2-tree-leaf"}" cx="${x}" cy="${y}" r="17"/>${text(x,y+5,v,"v2-label","middle")}`).join("")}
      ${panel(254,42,91,112,"v2-panel-good")}${text(299,67,"WYNIKI","v2-kicker","middle")}${text(299,98,"4","v2-big","middle")}${text(299,122,"OO · OR","v2-note","middle")}${text(299,138,"RO · RR","v2-note","middle")}
    `)
  };

  const types = Object.keys(scenes);
  const aliases = {
    priority: "operation-order", numberline: "integers-axis", divisibility: "factor-estimate",
    fraction: "fraction-meaning", equivalent: "fraction-operations", decimal: "decimal-place",
    tiles: "algebra-tiles", distribution: "algebra-tiles", balance: "equation-balance", check: "equation-geometry",
    ratio: "ratio-scale", scale: "ratio-scale", motion: "motion-route", angles: "flat-figures",
    triangle: "flat-figures", pythagoras: "pythagoras-squares", quadrilaterals: "flat-figures",
    composite: "composite-area", cuboid: "solid-volume", pyramid: "solid-compare", net: "solid-net",
    coordinates: "coordinate-point", "coordinate-segment": "coordinate-shape", spread: "data-compare",
    "outcome-table": "counting-tree", "favorable-fraction": "probability-space", chart: "chart-scale",
    median: "statistics-center", probability: "probability-space", power: "power-laws", root: "roots-square",
    scientific: "scientific-shift", percent: "percent-grid", multiplier: "percent-change",
    percentagepoints: "percent-finance", circle: "circle-measures", story: "equation-story",
    flow: "open-solution", proof: "proof-argument", units: "practical-units"
  };
  const aliasScenes = Object.fromEntries(Object.entries(aliases).map(([alias, target]) => [alias, scenes[target]]));
  window.E8_VISUAL_SCENES = { ...(window.E8_VISUAL_SCENES || {}), ...scenes, ...aliasScenes };
  window.E8_VISUAL_V2_TYPES = types;
  window.E8_VISUAL_FALLBACK_TYPES = Object.keys(aliases);
})();
