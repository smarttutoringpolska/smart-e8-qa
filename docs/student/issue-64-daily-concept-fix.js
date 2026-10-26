(() => {
  const originalContextProblem = contextProblem;
  const originalTaskVisual = taskVisual;
  const originalVisualNote = visualNote;

  contextProblem = function issue64ContextProblem(task, context = "lesson") {
    if (context === "daily" && task.exam && task.problem) return task.problem;
    return originalContextProblem(task, context);
  };

  taskVisual = function issue64TaskVisual(task) {
    if (state.route === "session" && task.visual === "concept") {
      const session = activeDailySession();
      const answered = session?.answers?.[Number(session.current) || 0];
      return answered ? geometryTrainingBoard(task) : examConceptBoard(task);
    }
    return originalTaskVisual(task);
  };

  visualNote = function issue64VisualNote(task) {
    if (state.route === "session" && task.visual === "concept") {
      const session = activeDailySession();
      const answered = session?.answers?.[Number(session.current) || 0];
      if (!answered) return "Wybierz metodę samodzielnie. Wzór i wynik pokażemy dopiero po Twojej odpowiedzi.";
    }
    return originalVisualNote(task);
  };
})();
