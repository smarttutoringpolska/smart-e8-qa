# Długoterminowy test ucznia

## Początek przebiegu

1. Odczytaj `docs/qa-version.json` i zapisz `sourceCommit` w raporcie.
2. Przejrzyj Issues `[RUN]` (ostatnie 30 przebiegów oraz ostatni raport danego profilu) i `[BUG]` (otwarte oraz ostatnio zamknięte).
3. Wybierz dział / profil / ścieżkę o najmniejszym pokryciu. Nie powtarzaj tej samej kombinacji przy niezmienionej wersji, dopóki istnieją nietestowane kombinacje.
4. Wejdź przez ekran wyboru profilu. Otwarta ma być jedna karta kursu, bo profile używają jednego aktywnego zapisu aplikacji.

## Rotacja i kryteria ukończenia

Rotuj profile weak30 (30%), average50 (50%), good70 (70%), ambitious90 (90%), focus (50%) i compact (70%). Rotuj ścieżki: Start, instrukcja, diagnoza, plan, kurs z pełną serią, Podręcznik z przykładem, 7 pytań, próba E8, postępy, powtórki, Dla rodzica. Rotuj wszystkie widoczne działy kursu.

Zapisz faktyczny viewport w pikselach. Zalecane punkty kontroli: 1366×768, 1440×900, 1920×1080, 390×844, 768×1024. Jeśli narzędzie nie pozwala zmienić viewportu, nie symuluj telefonu samą nazwą profilu — oznacz test urządzenia jako niewykonany.

W ścieżce z zadaniami sprawdź poprawną odpowiedź, pierwszą i drugą błędną próbę, podpowiedź, rozwiązanie, zakończenie i wynik. Wykonaj przerwanie, nawigację wstecz, powrót oraz odświeżenie i porównaj postęp. Wyjaśnij własne obliczenia przy zgłaszaniu błędu merytorycznego. Dźwięk oceniaj tylko, jeśli narzędzie rzeczywiście pozwala go usłyszeć; kod uruchamiający dźwięk nie dowodzi jego słyszalności.

## Rejestr problemów

Jeden odtwarzalny problem = jedno Issue `[BUG] Pn · dział · krótki opis`.

- P0: blokuje całą naukę albo utratę kluczowych danych.
- P1: błędne ocenianie / matematyka / blokada ścieżki.
- P2: czytelność, ucięcia lub niesprawna funkcja z obejściem.
- P3: kosmetyka, drobna niespójność.

Każdy błąd: wersja, profil, rzeczywisty viewport, dokładne miejsce, dane wejściowe i wybory, kroki odtworzenia, wynik obecny, oczekiwany, konkretna poprawka, dowód. Deduplikuj po miejscu + warunku wywołania + efekcie; istniejący problem oznacz jako „nienaprawiony” w nowym komentarzu, bez nowego Issue. Regresja wymaga dowodu, że problem był wcześniej naprawiony. Nie zamykaj zgłoszeń tylko na podstawie deklaracji zmiany kodu.

## Raport cyklu

## Koordynacja napraw — ochrona przed porzuconą rezerwacją

Sam komentarz „W NAPRAWIE” nie dowodzi aktywnej pracy. Rezerwacja obowiązuje przez dwie godziny od komentarza zawierającego dowód postępu (gałąź/commit, PR, wynik testu albo konkretną blokadę i następny krok). Po tym czasie agent sprawdza gałęzie, PR-y i najnowsze komentarze. Bez nowszego dowodu może wznowić naprawę, publikując komentarz „WZNOWIENIE NAPRAWY — poprzednia rezerwacja wygasła”. Nie wolno omijać zgłoszenia bez końca tylko z powodu starego znacznika. Istniejącego aktywnego PR nie dublujemy; blokadę raportujemy jawnie. „GOTOWE DO RETESTU” wymaga numeru PR, commitu, potwierdzonego wdrożenia i scenariusza testu. Zamknięcie wymaga niezależnego retestu.

### Treść raportu

Po każdym teście utwórz Issue `[RUN] YYYY-MM-DD HH:mm · profil · ścieżka` (Europe/Warsaw). Zachowaj w treści: identyfikator cyklu, commit źródłowy, profil i cel, viewport faktyczny, dział, wykonane kroki, poprawne/błędne odpowiedzi, wynik ścieżki, co działa, tabela nowych błędów z linkami, nienaprawione błędy i regresje, mapa pokrycia, ograniczenia weryfikacji, do pięciu rekomendacji i następna najmniej pokryta ścieżka. Dołącz blok JSON zgodny z `qa/run.schema.json`, aby można było liczyć pokrycie.

Jeśli nie udało się zapisać do GitHuba, raport końcowy musi to zaznaczyć i zawierać komplet danych do ponownego zapisu. Nigdy nie pisz, że raport zapisano, jeżeli narzędzie nie potwierdziło utworzenia Issue. Nie zmieniaj kodu ani nie publikuj w ramach testu. Nie usuwaj postępu. Repo i adres QA są publiczne — wyłącznie syntetyczne dane.
