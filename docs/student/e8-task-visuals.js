(() => {
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
  const mathHtml = (value) => esc(value).replace(/(\([^()]+\)|[A-Za-z0-9²³Δ]+)\s*\/\s*(\([^()]+\)|[A-Za-z0-9²³−-]+)/g, '<span class="task-math-frac"><span>$1</span><span>$2</span></span>');
  const fmt = (value) => Number.isInteger(Number(value)) ? String(Number(value)) : Number(value).toFixed(1).replace(".", ",");
  const signed = (value) => Number(value) < 0 ? `− ${fmt(Math.abs(value))}` : `+ ${fmt(value)}`;
  const safeId = (prefix, values) => `${prefix}-${values.map(value => String(value).replace(/[^a-z0-9]/gi, "x")).join("-")}`;
  const pointLabel = (x, y, label, kind = "blue", side = "right") => {
    const width = Math.max(48, String(label).length * 5.4 + 16);
    const left = side === "left" ? x - width - 8 : x + 8;
    const top = Math.max(7, Math.min(203, y - 23));
    return `<g class="task-point-label ${kind}"><rect x="${left}" y="${top}" width="${width}" height="19" rx="6"/><text x="${left + width / 2}" y="${top + 13}" text-anchor="middle">${esc(label)}</text></g>`;
  };

  function graphGrid(originX = 180, originY = 116) {
    const vertical = Array.from({ length: 15 }, (_, index) => 40 + index * 20).map(x => `<line x1="${x}" y1="25" x2="${x}" y2="207"/>`).join("");
    const horizontal = Array.from({ length: 9 }, (_, index) => 36 + index * 20).map(y => `<line x1="40" y1="${y}" x2="320" y2="${y}"/>`).join("");
    const xTicks = [-6, -4, -2, 2, 4, 6].map(value => `<text x="${originX + value * 20}" y="${originY + 17}" text-anchor="middle">${value}</text>`).join("");
    const yTicks = [-4, -2, 2, 4].map(value => `<text x="${originX - 10}" y="${originY - value * 20 + 4}" text-anchor="end">${value}</text>`).join("");
    return `<g class="task-grid">${vertical}${horizontal}</g><g class="task-ticks">${xTicks}${yTicks}<text x="${originX - 9}" y="${originY + 17}" text-anchor="end">0</text></g>`;
  }

  function linear({ a = 1, b = 0, second = null, showZero = true, showSlope = false, title = "" } = {}) {
    a = Number(a); b = Number(b);
    const ox = 180, oy = 116, scale = 20, id = safeId("e8-line", [a, b, second?.a, second?.b]);
    const plot = (slope, intercept, className) => {
      const points = [];
      for (let x = -8; x <= 8; x += .16) points.push(`${(ox + x * scale).toFixed(1)},${(oy - (slope * x + intercept) * scale).toFixed(1)}`);
      return `<polyline class="${className}" clip-path="url(#${id})" points="${points.join(" ")}"/>`;
    };
    const interceptY = oy - b * scale, interceptVisible = interceptY >= 29 && interceptY <= 203;
    const x0 = a === 0 ? null : -b / a, zeroX = x0 === null ? null : ox + x0 * scale, zeroVisible = showZero && zeroX >= 43 && zeroX <= 317;
    let slope = "";
    if (showSlope && a !== 0) {
      const dx = Math.min(42, 54 / Math.abs(a)), x1 = ox, y1 = interceptY, x2 = x1 + dx, y2 = y1 - a * dx;
      slope = `<g class="task-slope"><path d="M${x1} ${y1}H${x2}V${y2}"/><text x="${(x1 + x2) / 2}" y="${y1 + 14}" text-anchor="middle">Δx = 1</text><text x="${x2 + 7}" y="${(y1 + y2) / 2 + 3}">Δy = ${esc(fmt(a))}</text></g>`;
    }
    return `<svg class="graph-svg task-graph task-linear-graph" viewBox="0 0 360 230" role="img" aria-label="Wykres funkcji y = ${esc(fmt(a))}x ${esc(signed(b))}"><defs><clipPath id="${id}"><rect x="40" y="25" width="280" height="182" rx="12"/></clipPath><marker id="${id}-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 10 5 0 10z"/></marker></defs><rect class="task-plot" x="40" y="25" width="280" height="182" rx="12"/>${graphGrid(ox, oy)}<path class="task-axis" marker-end="url(#${id}-arrow)" d="M40 ${oy}H320"/><path class="task-axis" marker-end="url(#${id}-arrow)" d="M${ox} 207V25"/>${plot(a, b, "task-line primary")}${second ? plot(Number(second.a), Number(second.b), "task-line secondary") : ""}${slope}${interceptVisible ? `<circle class="task-halo warm" cx="${ox}" cy="${interceptY}" r="8"/><circle class="task-point warm" cx="${ox}" cy="${interceptY}" r="4"/>${pointLabel(ox, interceptY, `(0, ${fmt(b)})`, "warm", b > 3 ? "left" : "right")}` : ""}${zeroVisible ? `<circle class="task-halo good" cx="${zeroX}" cy="${oy}" r="8"/><circle class="task-point good" cx="${zeroX}" cy="${oy}" r="4"/>${pointLabel(zeroX, oy, `x₀ = ${fmt(x0)}`, "good", x0 > 3 ? "left" : "right")}` : ""}<text class="task-axis-name" x="309" y="106">x</text><text class="task-axis-name" x="188" y="38">y</text><g class="task-graph-badge"><rect x="50" y="34" width="${second ? 150 : 120}" height="24" rx="8"/><text x="${second ? 125 : 110}" y="50" text-anchor="middle">${esc(title || `y = ${fmt(a)}x ${signed(b)}`)}</text></g></svg>`;
  }

  function quadratic(config = {}) {
    const a = Number(config.a ?? -1 / 3), p = Number(config.p ?? 3), q = Number(config.q ?? 6), ox = 180, oy = 132, sx = 16, sy = 13;
    const id = safeId("e8-quad", [a, p, q]), points = [];
    for (let x = -10; x <= 10; x += .1) points.push(`${(ox + x * sx).toFixed(1)},${(oy - (a * (x - p) ** 2 + q) * sy).toFixed(1)}`);
    const vx = ox + p * sx, vy = oy - q * sy, rootOffset = a !== 0 && -q / a >= 0 ? Math.sqrt(-q / a) : null;
    const roots = rootOffset === null || config.showRoots === false ? [] : [p - rootOffset, p + rootOffset].filter(value => ox + value * sx >= 42 && ox + value * sx <= 318);
    const grid = Array.from({ length: 15 }, (_, i) => 40 + i * 20).map(x => `<line x1="${x}" y1="25" x2="${x}" y2="209"/>`).join("") + Array.from({ length: 9 }, (_, i) => 35 + i * 21).map(y => `<line x1="40" y1="${y}" x2="320" y2="${y}"/>`).join("");
    return `<svg class="graph-svg task-graph task-quadratic-graph" viewBox="0 0 360 230" role="img" aria-label="Parabola z wierzchołkiem W = (${esc(fmt(p))}, ${esc(fmt(q))})"><defs><clipPath id="${id}"><rect x="40" y="25" width="280" height="184" rx="12"/></clipPath><marker id="${id}-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 10 5 0 10z"/></marker></defs><rect class="task-plot" x="40" y="25" width="280" height="184" rx="12"/><g class="task-grid">${grid}</g><path class="task-axis" marker-end="url(#${id}-arrow)" d="M40 ${oy}H320"/><path class="task-axis" marker-end="url(#${id}-arrow)" d="M${ox} 209V25"/><path class="task-symmetry" d="M${vx} 27V207"/><polyline class="task-parabola" clip-path="url(#${id})" points="${points.join(" ")}"/><circle class="task-halo primary" cx="${vx}" cy="${vy}" r="9"/><circle class="task-point primary" cx="${vx}" cy="${vy}" r="4"/>${pointLabel(vx, vy, `W = (${fmt(p)}, ${fmt(q)})`, "blue", p > 4 ? "left" : "right")}${roots.map((root, index) => { const x = ox + root * sx; return `<circle class="task-point good" cx="${x}" cy="${oy}" r="4"/>${pointLabel(x, oy, `x${index + 1} = ${fmt(root)}`, "good", root > 4 ? "left" : "right")}`; }).join("")}<text class="task-axis-name" x="309" y="123">x</text><text class="task-axis-name" x="188" y="38">y</text><g class="task-graph-badge"><rect x="50" y="34" width="150" height="24" rx="8"/><text x="125" y="50" text-anchor="middle">W = (${esc(fmt(p))}, ${esc(fmt(q))}) · x = ${esc(fmt(p))}</text></g></svg>`;
  }

  function table(rows = []) {
    return `<div class="task-table-visual" role="img" aria-label="Tabela wartości i odpowiadające jej punkty"><header><span>TABELA WARTOŚCI</span><b>kolumna = jeden punkt</b></header><div class="task-table-grid" style="--columns:${Math.max(1, rows.length)}"><div class="task-table-name">x</div>${rows.map(([x]) => `<strong>${esc(fmt(x))}</strong>`).join("")}<div class="task-table-name">f(x)</div>${rows.map(([, y]) => `<strong>${esc(fmt(y))}</strong>`).join("")}</div><div class="task-point-list"><span>PUNKTY</span>${rows.map(([x, y], index) => `<i style="--delay:${index}">(${esc(fmt(x))}, ${esc(fmt(y))})</i>`).join("")}</div><p>Najpierw odczytaj <b>x</b>, później wartość <b>f(x)</b> z tej samej kolumny.</p></div>`;
  }

  function sequence(config = {}) {
    const values = config.values || [3, 7, 11, 15, 19], formula = config.formula || "aₙ = 4n − 1", change = config.change || "+4";
    return `<div class="task-sequence-visual" role="img" aria-label="Ciąg ${esc(formula)}"><header><span>REGUŁA CIĄGU</span><strong>${esc(formula)}</strong></header><div class="task-sequence-flow">${values.map((value, index) => `<div class="task-sequence-term"><small>a<sub>${index + 1}</sub></small><b>${esc(fmt(value))}</b></div>${index < values.length - 1 ? `<div class="task-sequence-change"><i>→</i><span>${esc(change)}</span></div>` : ""}`).join("")}</div><footer><span>CO SIĘ NIE ZMIENIA?</span><b>${esc(config.note || `Każdy kolejny wyraz zmienia się o ${change}.`)}</b></footer></div>`;
  }

  function probability() {
    let cells = "";
    for (let a = 1; a <= 6; a += 1) for (let b = 1; b <= 6; b += 1) cells += `<div class="${a + b === 11 ? "hit" : ""}"><span>${a}, ${b}</span>${a + b === 11 ? "<b>✓</b>" : ""}</div>`;
    return `<div class="task-probability-visual" role="img" aria-label="Przestrzeń wyników dwóch rzutów kostką i dwa wyniki o sumie jedenaście"><header><div><span>PRZESTRZEŃ WYNIKÓW</span><b>Dwa rzuty kostką</b></div><strong>2 z 36</strong></header><div class="task-probability-layout"><div class="task-dice-axis vertical"><span>1. rzut</span></div><div class="task-outcome-grid">${cells}</div></div><footer><span>Zdarzenie: suma 11</span><b>(5, 6) oraz (6, 5)</b><strong>P = ${mathHtml("2/36")} = ${mathHtml("1/18")}</strong></footer></div>`;
  }

  function algebra(config = {}, options = {}) {
    const lines = config.lines || [], visible = Math.max(1, Math.min(lines.length, options.visible ?? lines.length));
    return `<div class="task-algebra-visual" role="img" aria-label="Tok rozwiązania odkrywany krok po kroku"><header><span>${esc(config.label || "TOK PRZEKSZTAŁCEŃ")}</span><b>${visible}/${Math.max(1, lines.length)} kroków odkrytych</b></header><div class="task-algebra-steps">${lines.map((entry, index) => index < visible ? `<div class="task-algebra-step ${index === lines.length - 1 ? "result" : ""}"><i>${index + 1}</i><div><small>${index === 0 ? "ZAPISZ" : index === lines.length - 1 ? "WNIOSEK" : "PRZEKSZTAŁĆ"}</small><b>${mathHtml(entry)}</b></div><span>✓</span></div>` : `<div class="task-algebra-step locked"><i>${index + 1}</i><div><small>NASTĘPNY KROK</small><b>${esc(options.lockedText || "Odkryjesz po odpowiedzi")}</b></div><span aria-hidden="true">•••</span></div>`).join("")}</div><footer><span>REGUŁA</span><p>${esc(config.rule || "Po obu stronach wykonaj tę samą operację.")}</p></footer></div>`;
  }

  function practice(config = {}) {
    return `<div class="task-practice-visual" role="img" aria-label="Plan samodzielnego rozwiązania"><header><span>NOWY PRZYKŁAD</span><b>Teraz rozwiązujesz samodzielnie</b></header><div>${[["1", "Rozpoznaj", "Jakiej metody potrzebujesz?"], ["2", "Wykonaj krok", "Policz na kartce lub w pamięci."], ["3", "Sprawdź", "Wybierz odpowiedź A–D."]].map(([n, title, copy]) => `<article><i>${n}</i><div><b>${title}</b><span>${copy}</span></div></article>`).join("")}</div><footer><span>REGUŁA</span><p>${esc(config.rule || "Po obu stronach wykonaj tę samą operację.")}</p></footer></div>`;
  }

  window.E8_TASK_VISUALS = { linear, quadratic, table, sequence, probability, algebra, practice };
})();
