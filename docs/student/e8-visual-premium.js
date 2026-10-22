(() => {
  const esc=value=>String(value).replace(/[&<>]/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[char]);
  const t=(x,y,value,kind="premium-label",anchor="start")=>`<text class="${kind}" x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="middle">${esc(value)}</text>`;
  const p=(d,kind="premium-line")=>`<path class="${kind}" d="${d}"/>`;
  const card=(x,y,w,h,kind="")=>`<rect class="premium-card ${kind}" x="${x}" y="${y}" width="${w}" height="${h}" rx="12"/>`;
  const badge=(x,y,value,kind="blue")=>{const w=Math.max(48,Math.min(116,String(value).length*5.5+20)),safeX=Math.max(12,Math.min(x,348-w));return `${card(safeX,y,w,24,`premium-badge ${kind}`)}${t(safeX+w/2,y+12,value,"premium-badge-text","middle")}`;};
  const dot=(cx,cy,value,kind="blue")=>`<circle class="premium-dot ${kind}" cx="${cx}" cy="${cy}" r="14"/>${t(cx,cy+1,value,"premium-dot-text","middle")}`;
  const frac=(x,y,n,d,kind="")=>{
    const half=Math.max(17,Math.min(31,Math.max(String(n).length,String(d).length)*3.8+8));
    return `<g class="premium-frac ${kind}">${t(x,y-10,n,"premium-math","middle")}${p(`M${x-half} ${y}H${x+half}`,"premium-frac-line")}${t(x,y+13,d,"premium-math","middle")}</g>`;
  };
  const svg=(label,body)=>`<svg class="visual-scene v2-scene premium-scene" viewBox="0 0 360 180" role="img" aria-label="${esc(label)}" focusable="false"><defs><linearGradient id="premiumCanvas" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbfcff"/><stop offset="1" stop-color="#eef2ff"/></linearGradient><linearGradient id="premiumBlue" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6d63e8"/><stop offset="1" stop-color="#3d64d9"/></linearGradient><linearGradient id="premiumCoral" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff8068"/><stop offset="1" stop-color="#ee5261"/></linearGradient><filter id="premiumShadow" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#243257" flood-opacity=".13"/></filter></defs><rect class="v2-canvas" x="3" y="3" width="354" height="174" rx="16"/>${body}</svg>`;

  const scenes={
    "operation-order":()=>svg("Kolejność działań pokazana jako cztery etapy rachunku",`
      ${t(20,23,"KOLEJNOŚĆ DZIAŁAŃ","premium-kicker")}${badge(278,11,"wynik 6","green")}
      ${card(16,39,328,72,"premium-stage")}${p("M53 75H307","premium-track")}
      ${[[53,"1","( )","nawiasy"],[138,"2","a²","potęgi"],[223,"3","× ÷","od lewej"],[307,"4","+ −","od lewej"]].map(([x,n,s,l],i)=>`${dot(x,75,n,i===2?"coral":"blue")}${t(x,105,s,"premium-symbol","middle")}${t(x,121,l,"premium-caption","middle")}`).join("")}
      ${card(53,139,254,27,"premium-result")}${t(180,153,"18 − 3 · 4  →  18 − 12  →  6","premium-result-text","middle")}
    `),
    "fraction-meaning":()=>svg("Trzy piąte jako trzy zaznaczone części z pięciu",`
      ${t(20,23,"CZĘŚĆ CAŁOŚCI","premium-kicker")}${badge(280,11,"3 z 5","green")}
      ${card(17,42,232,91,"premium-stage")}${[0,1,2,3,4].map(i=>`<rect class="premium-fraction-part ${i<3?"filled":""}" x="${29+i*41}" y="58" width="37" height="55" rx="8"/>${t(47.5+i*41,87,i+1,"premium-part-number","middle")}`).join("")}
      ${card(263,42,80,91,"premium-formula-card")}${frac(303,79,"3","5","good")}${t(303,116,"= 60%","premium-result-text","middle")}
      ${p("M29 147H152","premium-brace")}${t(90,160,"licznik: wybrane","premium-caption","middle")}${p("M167 147H331","premium-brace")}${t(249,160,"mianownik: wszystkie","premium-caption","middle")}
    `),
    "percent-grid":()=>svg("Trzydzieści pięć procent jako trzydzieści pięć pól ze stu",`
      ${t(20,23,"PROCENT TO UŁAMEK O MIANOWNIKU 100","premium-kicker")}${badge(290,11,"35%","coral")}
      ${card(16,39,126,126,"premium-stage")}<g transform="translate(24 53)">${Array.from({length:100},(_,i)=>`<rect class="premium-grid-cell ${i<35?"on":""}" x="${(i%10)*10.5}" y="${Math.floor(i/10)*9.4}" width="8.5" height="7.5" rx="1.8"/>`).join("")}</g>
      ${card(154,39,190,126,"premium-formula-card")}
      <g class="premium-equation-chain">
        ${t(205,69,"35%","premium-hero-number","middle")}${t(245,69,"=","premium-math-lg","middle")}${t(291,69,"0,35","premium-math-lg","middle")}
        ${frac(202,112,"35","100","main")}${t(249,115,"=","premium-math-lg","middle")}${frac(296,112,"7","20","good")}
      </g>
      ${t(249,151,"35 zaznaczonych pól","premium-caption","middle")}
    `),
    "percent-change":()=>svg("Obniżka i podwyżka procentowa liczone od kolejnych wartości",`
      ${t(20,23,"PROCENT ZAWSZE MA SWOJĄ PODSTAWĘ","premium-kicker")}${badge(282,11,"nie zeruje się","coral")}
      ${[[22,"100 zł","START","blue"],[139,"80 zł","−20%","coral"],[256,"96 zł","+20%","green"]].map(([x,v,l,c],i)=>`${card(x,47,82,70,`premium-value ${c}`)}${t(x+41,73,v,"premium-value-number","middle")}${t(x+41,99,l,"premium-caption","middle")}${i?`${p(`M${x-28} 82H${x-9}`,"premium-arrow")}${t(x-19,68,i===1?"×0,8":"×1,2","premium-mini","middle")}`:""}`).join("")}
      ${card(58,134,244,31,"premium-result")}${t(180,150,"96 zł ≠ 100 zł","premium-result-text","middle")}
    `),
    "power-laws":()=>svg("Mnożenie potęg o tej samej podstawie",`
      ${t(20,23,"TA SAMA PODSTAWA · DODAJ WYKŁADNIKI","premium-kicker")}${badge(274,11,"aᵐ · aⁿ","blue")}
      ${card(18,43,324,75,"premium-stage")}${t(65,80,"aᵐ","premium-hero-number","middle")}${t(112,80,"·","premium-math-lg","middle")}${t(159,80,"aⁿ","premium-hero-number","middle")}${p("M198 80H241M231 70L241 80L231 90","premium-arrow")}${t(286,80,"aᵐ⁺ⁿ","premium-hero-number","middle")}
      ${card(56,135,248,30,"premium-result")}${t(180,150,"2³ · 2⁴ = 2⁷ = 128","premium-result-text","middle")}
    `),
    "equation-balance":()=>svg("Równanie jako wypoziomowana waga",`
      ${t(20,23,"RÓWNOWAGA MUSI ZOSTAĆ ZACHOWANA","premium-kicker")}${badge(283,11,"−3 po obu","blue")}
      ${card(16,40,328,125,"premium-stage")}${p("M67 77H293M180 77V143M132 143H228","premium-balance")}${p("M82 77L56 116M82 77L108 116M278 77L252 116M278 77L304 116","premium-cord")}${p("M47 116Q82 132 117 116M243 116Q278 132 313 116","premium-pan")}<circle class="premium-joint" cx="180" cy="77" r="9"/>
      ${t(82,107,"x + 3","premium-math-lg","middle")}${t(278,107,"8","premium-math-lg","middle")}${card(135,137,90,25,"premium-result")}${t(180,150,"x = 5","premium-result-text","middle")}
    `),
    "ratio-scale":()=>svg("Dwa podobne prostokąty o stałym stosunku boków",`
      ${t(20,23,"ROZMIAR ROŚNIE · PROPORCJA ZOSTAJE","premium-kicker")}${badge(292,11,"× 2","green")}
      ${card(17,40,326,102,"premium-stage")}<rect class="premium-ratio small" x="41" y="72" width="72" height="48" rx="8"/>${t(77,63,"2 × 3","premium-caption","middle")}${p("M132 94H211M201 84L211 94L201 104","premium-arrow")}${t(171,79,"×2","premium-symbol","middle")}<rect class="premium-ratio large" x="231" y="57" width="96" height="64" rx="8"/>${t(279,48,"4 × 6","premium-caption","middle")}
      ${card(88,148,184,20,"premium-result")}${t(180,158,"2 : 3 = 4 : 6","premium-result-text","middle")}
    `),
    "flat-figures":()=>svg("Pole trójkąta z wyraźnie zaznaczoną wysokością",`
      ${t(20,23,"WYSOKOŚĆ JEST PROSTOPADŁA DO PODSTAWY","premium-kicker")}${badge(290,11,"90°","coral")}
      ${card(17,40,221,124,"premium-stage")}<path class="premium-triangle" d="M45 137L133 55L211 137Z"/>${p("M133 55V137","premium-height")}${p("M133 124H146V137","premium-right-angle")}${t(122,94,"h","premium-symbol","middle")}${t(128,151,"a","premium-symbol","middle")}
      ${card(252,40,91,124,"premium-formula-card")}${t(297,64,"POLE","premium-kicker","middle")}${frac(297,105,"a · h","2","good")}${t(297,145,"P = ½ah","premium-result-text","middle")}
    `),
    "circle-measures":()=>svg("Promień średnica oraz styczna podpisane na jednym okręgu",`
      ${t(20,23,"PROMIEŃ · ŚREDNICA · STYCZNA","premium-kicker")}${badge(283,11,"d = 2r","blue")}
      ${card(16,40,226,124,"premium-stage")}<circle class="premium-circle" cx="111" cy="102" r="48"/><circle class="premium-center" cx="111" cy="102" r="5"/>${p("M63 102H159","premium-diameter")}${p("M111 102L151 75","premium-radius")}${p("M159 48V155","premium-tangent")}${p("M148 102H159V91","premium-right-angle")}${t(86,92,"d","premium-symbol","middle")}${t(139,75,"r","premium-symbol","middle")}${t(193,77,"styczna","premium-caption","middle")}
      ${card(255,40,88,124,"premium-formula-card")}${t(299,63,"WZORY","premium-kicker","middle")}${t(299,89,"l = 2πr","premium-math-lg","middle")}${p("M271 105H327","premium-divider")}${t(299,126,"P = πr²","premium-math-lg","middle")}${t(299,149,"r, nie d","premium-caption","middle")}
    `),
    "pythagoras-squares":()=>svg("Twierdzenie Pitagorasa z kwadratami na bokach trójkąta",`
      ${t(20,23,"POLE DWÓCH KWADRATÓW = POLE TRZECIEGO","premium-kicker")}${badge(286,11,"3–4–5","green")}
      ${card(16,40,230,124,"premium-stage")}<rect class="premium-square a" x="45" y="83" width="52" height="52" rx="4"/><rect class="premium-square b" x="97" y="44" width="39" height="39" rx="4"/><path class="premium-triangle" d="M97 135L97 83L136 83Z"/>${p("M97 122H110V135","premium-right-angle")}${t(70,110,"4²","premium-square-text","middle")}${t(117,64,"3²","premium-square-text","middle")}${t(145,111,"5²","premium-symbol","middle")}
      ${card(257,40,86,124,"premium-formula-card")}${t(300,65,"PITAGORAS","premium-kicker","middle")}${t(300,92,"a²+b²=c²","premium-math-lg","middle")}${p("M273 107H327","premium-divider")}${t(300,130,"9+16=25","premium-result-text","middle")}${t(300,151,"tylko przy 90°","premium-caption","middle")}
    `),
    "solid-volume":()=>svg("Objętość prostopadłościanu z warstwami sześcianów",`
      ${t(20,23,"OBJĘTOŚĆ LICZY KOSTKI W ŚRODKU","premium-kicker")}${badge(298,11,"cm³","green")}
      ${card(16,40,229,124,"premium-stage")}<path class="premium-solid-front" d="M58 86L153 86V140H58Z"/><path class="premium-solid-top" d="M58 86L92 57H187L153 86Z"/><path class="premium-solid-side" d="M153 86L187 57V111L153 140Z"/>${[82,106,130].map(x=>p(`M${x} 86V140`,`premium-solid-grid`)).join("")}${[104,122].map(y=>p(`M58 ${y}H153`,`premium-solid-grid`)).join("")}${p("M58 86L92 57H187V111L153 140H58Z M153 86L187 57 M153 86V140","premium-solid-line")}${t(105,153,"a","premium-symbol","middle")}${t(177,129,"b","premium-symbol","middle")}${t(47,114,"H","premium-symbol","middle")}
      ${card(258,40,85,124,"premium-formula-card")}${t(300,65,"OBJĘTOŚĆ","premium-kicker","middle")}${t(300,94,"V=Pₚ·H","premium-math-lg","middle")}${p("M274 109H326","premium-divider")}${t(300,133,"a·b·H","premium-result-text","middle")}${t(300,151,"jednostka³","premium-caption","middle")}
    `),
    "chart-scale":()=>svg("Wykres słupkowy z wyraźną skalą co pięć",`
      ${t(20,23,"NAJPIERW SPRAWDŹ SKALĘ OSI","premium-kicker")}${badge(268,11,"1 działka = 5","blue")}
      ${card(16,40,242,124,"premium-stage")}${p("M52 53V145H239","premium-axis")}${[0,5,10,15,20].map((v,i)=>`${p(`M48 ${145-i*21}H239`,`premium-grid-line`)}${t(42,145-i*21,v,"premium-axis-text","end")}`).join("")}<rect class="premium-bar blue" x="75" y="103" width="31" height="42" rx="6"/><rect class="premium-bar coral" x="128" y="82" width="31" height="63" rx="6"/><rect class="premium-bar green" x="181" y="61" width="31" height="84" rx="6"/>${t(90,157,"A","premium-caption","middle")}${t(143,157,"B","premium-caption","middle")}${t(196,157,"C","premium-caption","middle")}
      ${card(271,40,72,124,"premium-formula-card")}${t(307,63,"ODCZYT","premium-kicker","middle")}${[[88,"A","10"],[113,"B","15"],[138,"C","20"]].map(([y,l,v])=>`${t(288,y,l,"premium-caption")}${t(326,y,v,"premium-result-text","end")}`).join("")}
    `)
  };
  window.E8_VISUAL_SCENES={...(window.E8_VISUAL_SCENES||{}),...scenes};
  window.E8_PREMIUM_VISUAL_TYPES=Object.keys(scenes);
})();
