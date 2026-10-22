# Smart E8 — środowisko QA

Testowa kopia części uczniowskiej. Nie jest wersją dla uczniów. Dane wyłącznie fikcyjne.

- Publikacja GitHub Pages: gałąź `main`, katalog `/docs`.
- Profile: weak30, average50, good70, ambitious90, focus, compact.
- Postęp: localStorage z osobną kopią dla każdego profilu; eksport JSON w menu QA.
- Trwałe raporty agenta i deduplikacja problemów: GitHub Issues.
- Pochodzenie plików i sumy SHA-256: `docs/qa-version.json`.
- Zakres nieobejmowany przez kopię statyczną: logowanie ChatGPT/Supabase, API, synchronizacja online, panel administratora.

## Odświeżanie kopii

`node scripts/build-qa.mjs /absolute/path/to/smart-e8-source`

Skrypt kopiuje zasoby uczniowskie, usuwa zależność od serwerowego zgłaszania błędów i dodaje profile QA. Nie modyfikuje źródłowego projektu. Po aktualizacji przeglądaj różnice, zaktualizuj manifest, opublikuj i sprawdź wejście do kursu. Brak automatycznej synchronizacji ze stroną produkcyjną: raport zawsze wskazuje badany commit.

## Zasady testowania

Każdy przebieg: przeczytaj `QA-PROTOCOL.md`, wcześniejsze raporty `[RUN]` oraz otwarte błędy `[BUG]`; wybierz najmniej pokrytą ścieżkę i profil; wykonaj jedną pełną ścieżkę; zachowaj rzeczywiste obserwacje. Nie zaznaczaj czegoś jako sprawdzone na podstawie samego przejrzenia kodu. Zapis w przeglądarce i zapis w chmurze są oddzielnymi kategoriami.

Repozytorium jest publiczne. Nie zapisuj haseł, tokenów, cookies, adresów uczniów ani danych rzeczywistych osób w plikach i Issues. `robots.txt` jest sugestią dla robotów, a nie kontrolą dostępu.
