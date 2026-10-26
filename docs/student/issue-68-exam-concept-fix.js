(() => {
  const originalExamConceptBoard = examConceptBoard;

  examConceptBoard = function issue68ExamConceptBoard(task) {
    if (state.route !== 'exam' || state.examSubmitted) return originalExamConceptBoard(task);
    const label = task.concept?.label || task.examGroup || 'DANE DO ZADANIA';
    return `<div class="exam-concept-diagram" data-exam-neutral-visual style="--extra:${courseColor(courseById(task.course || 'e8-numbers'))}"><div class="e8-training-visual-stage"><svg class="visual-scene v2-scene" viewBox="0 0 360 180" role="img" aria-label="Neutralny schemat pracy bez wzoru i wyniku"><rect class="v2-canvas" x="3" y="3" width="354" height="174" rx="16"/><rect class="v2-panel v2-panel-primary" x="18" y="48" width="92" height="84" rx="12"/><rect class="v2-panel" x="134" y="48" width="92" height="84" rx="12"/><rect class="v2-panel v2-panel-good" x="250" y="48" width="92" height="84" rx="12"/><path class="v2-arrow" d="M112 90H130M226 90H246"/><text class="v2-kicker" x="64" y="72" text-anchor="middle">1 · DANE</text><text class="v2-label" x="64" y="103" text-anchor="middle">odczytaj</text><text class="v2-kicker" x="180" y="72" text-anchor="middle">2 · METODA</text><text class="v2-label" x="180" y="103" text-anchor="middle">wybierz</text><text class="v2-kicker" x="296" y="72" text-anchor="middle">3 · WYNIK</text><text class="v2-label" x="296" y="103" text-anchor="middle">oblicz</text><text class="v2-note" x="180" y="154" text-anchor="middle">Wzór i rozwiązanie pojawią się po oddaniu arkusza.</text></svg></div><div class="exam-concept-copy"><span>${label}</span><strong>Odczytaj dane i wybierz metodę</strong><small>Przed oddaniem arkusza nie pokazujemy mapy wzorów ani rozwiązania.</small></div></div>`;
  };
})();
