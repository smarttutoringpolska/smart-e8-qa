/* Reviewed calculation sequences; generic lessons reuse their existing hints. */
(() => {
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const reviewed = {
    'Oblicz 1/3 + 1/6.': [
      ['1/3 + 1/6', 'Mianowniki są różne. Wybierz wspólny mianownik: 6.'],
      ['2/6 + 1/6', 'Pomnóż licznik i mianownik pierwszego ułamka przez 2.'],
      ['3/6', 'Dodaj liczniki. Mianownik pozostaje równy 6.'],
      ['1/2', 'Podziel licznik i mianownik przez 3.']
    ],
    'Oblicz 5/8 − 1/4.': [
      ['5/8 − 1/4', 'Wspólny mianownik to 8.'], ['5/8 − 2/8', 'Rozszerz 1/4 przez 2.'], ['3/8', 'Odejmij liczniki: 5 − 2 = 3.']
    ],
    'Oblicz 2/3 · 9/10.': [
      ['2/3 · 9/10', 'Przed mnożeniem możesz skrócić czynniki.'], ['1/1 · 3/5', 'Podziel 9 i 3 przez 3, a 2 i 10 przez 2.'], ['3/5', 'Pomnóż pozostałe liczniki i mianowniki.']
    ],
    'Oblicz 3/4 : 1/2.': [
      ['3/4 : 1/2', 'Dzielenie zamień na mnożenie przez odwrotność.'], ['3/4 · 2/1', 'Odwróć tylko drugi ułamek.'], ['6/4', 'Pomnóż liczniki i mianowniki.'], ['3/2', 'Skróć licznik i mianownik przez 2.']
    ],
    'Rozwiąż 3x+7=25.': [
      ['3x + 7 = 25', 'Chcemy zostawić niewiadomą samą.'], ['3x + 7 − 7 = 25 − 7', 'Odejmij 7 po obu stronach równania.'], ['3x = 18', 'Uporządkuj obie strony.'], ['x = 6', 'Podziel obie strony przez 3. Sprawdzenie: 3 · 6 + 7 = 25.']
    ],
    'Rozwiąż 5x−9=2x+12.': [
      ['5x − 9 = 2x + 12', 'Zbierz wyrazy z niewiadomą po jednej stronie.'], ['3x − 9 = 12', 'Odejmij 2x po obu stronach.'], ['3x = 21', 'Dodaj 9 po obu stronach.'], ['x = 7', 'Podziel obie strony przez 3. Sprawdzenie: 26 = 26.']
    ],
    'Rozwiąż 4(x−2)=20.': [
      ['4(x − 2) = 20', 'Najpierw usuń mnożenie przez 4.'], ['x − 2 = 5', 'Podziel obie strony przez 4.'], ['x − 2 + 2 = 5 + 2', 'Dodaj 2 po obu stronach.'], ['x = 7', 'Sprawdź w równaniu: 4 · (7 − 2) = 20.']
    ],
    'Rozwiń 3(x + 4).': [
      ['3(x + 4)', 'Liczba 3 mnoży każdy składnik w nawiasie.'], ['3 · x + 3 · 4', 'Rozdziel mnożenie na dwa składniki.'], ['3x + 12', 'Oblicz oba iloczyny.']
    ],
    'Rozwiń −2(3x − 5).': [
      ['−2(3x − 5)', 'Pomnóż oba składniki przez −2.'], ['(−2) · 3x + (−2) · (−5)', 'Drugi składnik jest ujemny: −5.'], ['−6x + 10', 'Iloczyn dwóch liczb ujemnych jest dodatni.']
    ],
    'Pole trójkąta o podstawie 10 cm i wysokości 6 cm to…': [
      ['a = 10 cm', 'Zaznacz podstawę trójkąta.'], ['h = 6 cm', 'Wysokość jest prostopadła do tej podstawy.'], ['P = 10 · 6 / 2', 'Pomnóż podstawę przez wysokość i podziel przez 2.'], ['P = 30 cm²', 'Pole zapisujemy w jednostkach kwadratowych.']
    ]
  };
  function stages(step) {
    const extra = window.E8SolutionExamples?.[step.q];
    if (extra) return extra.stages.map(([formula, note]) => ({ formula, note }));
    if (reviewed[step.q]) return reviewed[step.q].map(([formula, note]) => ({ formula, note }));
    const conclusion = String(step.conclusion || '').trim();
    return [...new Set((step.hints || []).map(String).map(x => x.trim()).filter(x => x && x !== conclusion))].map(note => ({formula: '', note})).concat(conclusion ? [{formula: '', note: conclusion}] : []);
  }
  function math(value) {
    return esc(value).replace(/([a-zA-Z]|\d+(?:,\d+)?)\/(\d+(?:,\d+)?)/g, '<span class="e8-player-frac" aria-label="$1 przez $2"><span>$1</span><span>$2</span></span>').replace(/([a-zA-Z]|\d+)\^\(([^()<>]+)\)/g, '$1<sup class="e8-power-exponent">$2</sup>');
  }
  function triangle() {
    return '<svg class="e8-player-triangle" viewBox="0 0 360 260" role="img" aria-label="Trójkąt z podstawą 10 cm i prostopadłą wysokością 6 cm"><path class="triangle-outline" d="M30 200L180 20L330 200Z"/><path class="triangle-base" d="M30 200H330"/><path class="triangle-height" d="M180 20V200"/><path class="triangle-right" d="M180 183H197V200"/><text class="triangle-base-label" x="180" y="238" text-anchor="middle">a = 10 cm</text><text class="triangle-height-label" x="195" y="110">h = 6 cm</text></svg>';
  }
  function diagram(visual, index) {
    if (!visual) return '';
    if (visual.type === 'percent') {
      const [value,label] = visual.frames[Math.min(index,visual.frames.length-1)], max = Math.max(100,visual.max || 100);
      const base = Math.min(value,100)/max*100, extra = Math.max(0,value-100)/max*100;
      return `<div class="e8-percent-diagram"><p>${esc(label)}</p><div class="e8-percent-track" role="img" aria-label="${esc(label)}: ${value}% ceny lub wartości początkowej"><i class="e8-percent-part" data-stage-motion style="width:${base}%"></i>${extra?`<i class="e8-percent-extra" data-stage-motion style="width:${extra}%"></i>`:''}</div><div class="e8-percent-labels"><span>0%</span><strong>${value}%</strong><span>${max}%</span></div></div>`;
    }
    if (visual.type === 'factors') {
      const row = values => `<div class="e8-factor-row">${values.map((value,n)=>`<span data-stage-motion class="${index>0&&n<(visual.cancel||0)?'is-cancelled':''} ${visual.group&&(visual.repeatGroup?Math.floor(n/visual.group)%2:n>=visual.group)?'second-group':''}">${esc(value)}</span>`).join('<i aria-hidden="true">·</i>')}</div>`;
      return `<div class="e8-factor-diagram" aria-label="Rozpisanie potęgi na czynniki">${visual.negativeOutside?'<b class="e8-outside-minus">−</b>':''}<div>${row(visual.values)}${visual.denominator?`<div class="e8-factor-denominator">${row(visual.denominator,true)}</div>`:''}</div></div>`;
    }
    if (visual.type === 'rightTriangle') {
      const scale = Math.min(230/visual.a,170/visual.b), x=65,y=220,right=x+visual.a*scale,top=y-visual.b*scale;
      const label = (name,value) => visual.unknown===name&&index<visual.revealAt?'?':esc(value);
      const unit=esc(visual.unit||''),cname=esc(visual.hypotenuseLabel||'c'),bname=esc(visual.verticalLabel||'b');
      return `<svg class="e8-pythagoras-diagram" viewBox="0 0 400 280" role="img" aria-label="Trójkąt prostokątny: a = ${label('a',visual.a)}, ${bname} = ${label('b',visual.b)}, ${cname} = ${label('c',visual.c)}${unit}">${visual.rectangle?`<path class="e8-rectangle-frame" d="M${x} ${y}V${top}H${right}"/>`:''}<path class="e8-pythagoras-leg ${index===1?'active':''}" data-stage-motion d="M${x} ${y}H${right}"/><path class="e8-pythagoras-leg ${index===1?'active':''}" data-stage-motion d="M${right} ${y}V${top}"/><path class="e8-pythagoras-hypotenuse ${index!==1?'active':''}" data-stage-motion d="M${x} ${y}L${right} ${top}"/><path class="e8-pythagoras-right" d="M${right-15} ${y}V${y-15}H${right}"/><text x="${(x+right)/2}" y="250" text-anchor="middle">a = ${label('a',visual.a)}${unit}</text><text x="${right+12}" y="${(y+top)/2+5}">${bname} = ${label('b',visual.b)}${unit}</text><text x="${(x+right)/2-42}" y="${(y+top)/2-15}" text-anchor="middle">${cname} = ${label('c',visual.c)}${unit}</text></svg>`;
    }
    if (visual.type === 'ratio') {
      return `<div class="e8-ratio-diagram"><table><caption>Powiązane wartości</caption><thead><tr>${visual.headings.map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${visual.rows.map(([a,b,reveal],n)=>`<tr class="${index>=reveal?'is-known':''}" ${index>=reveal?'data-stage-motion':''}><td>${visual.unknownColumn===0&&index<reveal?'x = ?':esc(a)}</td><td>${visual.unknownColumn===0||index>=reveal?esc(b):'?'}</td></tr>`).join('')}</tbody></table></div>`;
    }
    if (visual.type === 'partition') {
      return `<div class="e8-partition-diagram"><div class="e8-partition-track" role="img" aria-label="${esc(visual.caption)}">${Array.from({length:visual.count},(_,n)=>`<span class="${n>=visual.count-visual.selected?'is-selected':''}" data-stage-motion>${index>=visual.revealAt?esc(visual.value):'?'}</span>`).join('')}</div><p>${esc(visual.caption)}</p></div>`;
    }
    if (visual.type === 'story') {
      return `<div class="e8-story-diagram"><strong>${esc(visual.total)}</strong><div class="e8-story-pieces">${visual.pieces.map(([text,weight])=>`<span data-stage-motion style="flex-grow:${weight}">${esc(text)}</span>`).join('')}</div><p>${index>=visual.revealAt?esc(visual.result):'Oznacz szukaną liczbę przez x.'}</p></div>`;
    }
    return '';
  }
  function render(step) {
    const list = stages(step); if(list.length < 2) return '';
    const extra = window.E8SolutionExamples?.[step.q];
    return `<details class="e8-step-player" data-current="0"><summary>Przejdź przez rozwiązanie</summary>${step.q === 'Pole trójkąta o podstawie 10 cm i wysokości 6 cm to…' ? triangle() : ''}<div class="e8-step-viewport">${list.map((item, index) => `<section data-solution-stage="${index}" ${index ? 'hidden' : ''}><span class="e8-step-kicker">${extra?`${esc(extra.topic)} · `:''}${index === list.length - 1 ? 'WYNIK' : 'KROK ' + (index + 1)}</span>${diagram(extra?.visual,index)}${item.formula ? `<div class="e8-step-formula">${math(item.formula)}</div>` : ''}<p>${esc(item.note)}</p></section>`).join('')}</div><div class="e8-step-controls"><button type="button" data-solution-move="-1" disabled>Wstecz</button><span data-solution-status role="status" aria-live="polite" aria-atomic="true">Krok 1 z ${list.length}</span><button type="button" data-solution-move="1">Dalej</button></div><button type="button" class="e8-step-restart" data-solution-move="start">Od początku</button></details>`;
  }
  function move(player, direction) {
    const list = [...player.querySelectorAll('[data-solution-stage]')];
    if (!list.length) return;
    const current = Math.max(0, Math.min(list.length - 1, direction === 'start' ? 0 : (Number(player.dataset.current) || 0) + Number(direction)));
    player.dataset.current = String(current);
    list.forEach((node,index) => node.hidden = index !== current);
    player.querySelector('[data-solution-status]').textContent = `Krok ${current + 1} z ${list.length}`;
    player.querySelector('[data-solution-move="-1"]').disabled = current === 0;
    player.querySelector('[data-solution-move="1"]').disabled = current === list.length - 1;
    window.E8Experience?.motion(list[current], [{opacity:.2,transform:'translateY(8px)'},{opacity:1,transform:'none'}], {duration:380});
    list[current].querySelectorAll?.('[data-stage-motion]').forEach((node,index) => {
      const percent = node.classList.contains('e8-percent-part') || node.classList.contains('e8-percent-extra');
      let length=0;try{if(node.classList.contains('active'))length=node.getTotalLength?.()||0;}catch{}
      const frames=length>0?[{strokeDasharray:`${length} ${length}`,strokeDashoffset:String(length)},{strokeDasharray:`${length} ${length}`,strokeDashoffset:'0'}]:percent?[{transform:'scaleX(.05)',transformOrigin:'left'},{transform:'scaleX(1)',transformOrigin:'left'}]:[{opacity:.35},{opacity:1}];
      window.E8Experience?.motion(node, frames, {duration:percent||length?650:450,delay:Math.min(index*35,200)});
    });
    // SVG emphasis changes color only; labels and measured geometry stay fixed.
    player.querySelectorAll(current === 0 ? '.triangle-base' : current === 1 ? '.triangle-height' : '.triangle-base,.triangle-height').forEach(node => window.E8Experience?.motion(node, [{strokeWidth:3},{strokeWidth:6},{strokeWidth:3}], {duration:650}));
  }
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-solution-move]'); if (!button || button.disabled) return;
    const player = button.closest('.e8-step-player'); if (player) move(player, button.dataset.solutionMove);
  });
  document.addEventListener('toggle', event => {
    if(event.target.matches?.('.e8-step-player') && event.target.open) move(event.target,'0');
  },true);
  window.E8SolutionPlayer = { render, stages, move };
})();
