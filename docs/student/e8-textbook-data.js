(function(){
  const f=(name,formula,use)=>({name,formula,use});
  const v=(type,title,caption)=>({type,title,caption});
  window.E8_TEXTBOOK={
    'e8-numbers':{
      formulas:[
        f('Kolejność działań','( ) → potęgi → · i : → + i −','Zawsze wykonuj działania tego samego rzędu od lewej strony.'),
        f('Liczba przeciwna','a + (−a) = 0','Zmiana znaku daje liczbę położoną symetrycznie względem zera.'),
        f('Wartość bezwzględna','|a| = odległość liczby a od 0','Wartość bezwzględna nigdy nie jest ujemna.'),
        f('Dzielenie z resztą','a = b · q + r,  0 ≤ r < b','Stosuj w zadaniach o cyklach, pakowaniu i podzielności.'),
        f('NWD i NWW','NWD(a,b) · NWW(a,b) = a · b','Dla dodatnich a i b; pomaga kontrolować wynik.'),
        f('Cecha podzielności przez 3','suma cyfr jest podzielna przez 3','Analogicznie działa cecha podzielności przez 9.'),
        f('Potęga','aⁿ = a · a · … · a','W iloczynie występuje n jednakowych czynników.'),
        f('Pierwiastek','√a = b ⇔ b² = a,  b ≥ 0','Szukasz nieujemnej liczby, której kwadrat daje a.'),
        f('Zaokrąglanie','cyfra następnego rzędu ≥ 5 ⇒ zaokrąglij w górę','Najpierw zaznacz rząd, do którego zaokrąglasz, i sprawdź cyfrę stojącą bezpośrednio po nim.'),
        f('Błąd bezwzględny przybliżenia','błąd = |wartość dokładna − wartość przybliżona|','Odejmij wartości i weź wartość bezwzględną; sam znak ≈ oznacza jedynie przybliżenie.')
      ],
      skills:['system dziesiętny i rzymski','oś liczbowa i porównywanie','liczby ujemne','kolejność działań','cechy podzielności','liczby pierwsze i złożone','NWD i NWW','zaokrąglanie i szacowanie'],
      visuals:[v('priority','Kolejka działań','Nawias i potęga mają pierwszeństwo przed mnożeniem, dzieleniem, dodawaniem i odejmowaniem.'),v('numberline','Znaki na osi','Im dalej w prawo, tym większa liczba. Liczby przeciwne leżą w tej samej odległości od zera.'),v('divisibility','Rozkład na czynniki','Rozkład liczby na czynniki pierwsze porządkuje zadania o NWD i NWW.')]
    },
    'e8-fractions':{
      formulas:[
        f('Rozszerzanie ułamka','a/b = (a · k)/(b · k)','Licznik i mianownik mnożysz przez tę samą liczbę różną od zera.'),
        f('Skracanie ułamka','(a · k)/(b · k) = a/b','Podziel licznik i mianownik przez wspólny dzielnik.'),
        f('Dodawanie','a/b + c/d = (ad + bc)/bd','Najpierw sprowadź ułamki do wspólnego mianownika.'),
        f('Odejmowanie','a/b − c/d = (ad − bc)/bd','Pilnuj znaku przed drugim licznikiem.'),
        f('Mnożenie','a/b · c/d = ac/bd','Przed mnożeniem warto skracać na krzyż.'),
        f('Dzielenie','a/b : c/d = a/b · d/c','Drugi ułamek odwróć i zamień dzielenie na mnożenie.'),
        f('Liczba mieszana','m a/b = (m · b + a)/b','Zamień na ułamek niewłaściwy przed wykonaniem działania.'),
        f('Ułamek dziesiętny','a/10ⁿ','Mianownik 10, 100, 1000… pozwala zapisać liczbę przecinkiem.'),
        f('Zapis dziesiętny ułamka','a/b = a : b','Podziel licznik przez mianownik; rozwinięcie może być skończone albo okresowe.'),
        f('Część całości','część = ułamek · całość','W zadaniu ustal najpierw, co jest całością.')
      ],
      skills:['porównywanie ułamków','liczby mieszane','cztery działania','ułamki dziesiętne','rozwinięcia dziesiętne','zamiana ułamek–procent','część i całość','zadania praktyczne'],
      visuals:[v('fraction','Część całości','Licznik wskazuje wybrane części, a mianownik liczbę wszystkich równych części.'),v('equivalent','Ułamki równoważne','Ten sam fragment można opisać różnymi ułamkami, np. jedna druga i dwie czwarte.'),v('decimal','Ułamek i przecinek','Pozycja cyfry po przecinku odpowiada częściom dziesiątym, setnym i tysięcznym.')]
    },
    'e8-algebra':{
      formulas:[
        f('Wyrazy podobne','ax + bx = (a + b)x','Łącz tylko składniki z identyczną częścią literową.'),
        f('Rozdzielność','a(b + c) = ab + ac','Każdy składnik w nawiasie mnożysz przez liczbę przed nawiasem.'),
        f('Iloczyn dwóch sum','(a + b)(c + d) = ac + ad + bc + bd','Każdy składnik pierwszego nawiasu pomnóż przez każdy składnik drugiego nawiasu.'),
        f('Minus przed nawiasem','−(a + b) = −a − b','Minus zmienia znak każdego składnika.'),
        f('Wyłączanie czynnika','ab + ac = a(b + c)','Wspólny czynnik przenieś przed nawias.'),
        f('Wartość wyrażenia','W(x) dla x = a','Podstaw liczbę w nawiasie, szczególnie gdy jest ujemna.'),
        f('Niewiadoma po obu stronach','ax + b = cx + d ⇒ x = (d − b)/(a − c)','Najpierw zbierz wyrazy z x po jednej stronie; wzór obowiązuje dla a różnego od c.'),
        f('Iloczyn równy zero','A · B = 0 ⇒ A = 0 lub B = 0','Wystarczy, by jeden czynnik był zerem.'),
        f('Proporcja','a/b = c/d ⇒ ad = bc','Mianowniki muszą być różne od zera.'),
        f('Obwód figury','O = suma długości wszystkich boków','Najpierw wyraź każdy bok za pomocą tej samej niewiadomej.'),
        f('Model tekstowy','dane + warunek → równanie','Po rozwiązaniu wróć do pytania z treści.')
      ],
      skills:['obliczanie wartości wyrażeń','redukcja wyrazów podobnych','mnożenie dwóch nawiasów','usuwanie nawiasów','równania liniowe','sprawdzanie rozwiązania','wzory z geometrii','modelowanie zadań'],
      visuals:[v('tiles','Klocki algebraiczne','Takie same klocki można łączyć: 2x + 3x = 5x.'),v('distribution','Pole i nawias','Rozdzielność mnożenia widać jako sumę pól dwóch prostokątów.'),v('balance','Równanie jak waga','Ta sama operacja po obu stronach zachowuje równowagę.')]
    },
    'e8-proportion':{
      formulas:[
        f('Proporcja','a/b = c/d ⇒ a · d = b · c','Ustaw odpowiadające sobie wielkości w tej samej kolejności.'),
        f('Proporcjonalność prosta','y = a · x','Iloraz y/x jest stały i równy współczynnikowi a.'),
        f('Współczynnik proporcjonalności','a = y/x','Oblicz go z jednej pary odpowiadających sobie wartości.'),
        f('Skala','skala = długość na planie / długość rzeczywista','Przed dzieleniem ujednolić jednostki.'),
        f('Skala 1 : n','rzeczywistość = plan · n','Wymiary liniowe zmieniają się n razy.'),
        f('Droga','s = v · t','Prędkość i czas muszą mieć zgodne jednostki.'),
        f('Prędkość','v = s/t','Drogę dzielisz przez czas.'),
        f('Czas','t = s/v','Drogę dzielisz przez prędkość.'),
        f('Cena jednostkowa','cena 1 sztuki = koszt / liczba sztuk','Pozwala porównać opłacalność opakowań.'),
        f('Podział proporcjonalny','częśćᵢ = całość · udziałᵢ / suma udziałów','Najpierw dodaj liczby opisujące stosunek, a potem podziel całość na odpowiadające im udziały.'),
        f('Średnia prędkość','vśr = cała droga / cały czas','Nie jest zwykłą średnią dwóch prędkości.')
      ],
      skills:['tabele proporcjonalności','iloczyn krzyżowy','podział proporcjonalny','skala mapy i planu','cena jednostkowa','przeliczanie czasu','droga–prędkość–czas','zadania o wydajności'],
      visuals:[v('ratio','Stały stosunek','Gdy x rośnie dwa razy, w proporcjonalności prostej y również rośnie dwa razy.'),v('scale','Plan i rzeczywistość','Skala 1 : 100 oznacza, że 1 cm na planie odpowiada 100 cm w rzeczywistości.'),v('motion','Trójkąt s–v–t','Zasłoń szukaną wielkość, aby zobaczyć potrzebne działanie.')]
    },
    'e8-geometry':{
      formulas:[
        f('Kąty przyległe','α + β = 180°','Tworzą razem kąt półpełny.'),
        f('Kąty wierzchołkowe','α = β','Leżą naprzeciwko siebie przy przecięciu prostych.'),
        f('Kąty przy prostych równoległych','kąty odpowiadające i naprzemianległe są równe','Reguła działa, gdy dwie proste równoległe przecina sieczna.'),
        f('Nierówność trójkąta','a + b > c,  a + c > b,  b + c > a','Suma długości każdych dwóch boków musi być większa od trzeciego.'),
        f('Cechy przystawania','bbb · bkb · kbk','Wystarczy jedna z tych cech, aby stwierdzić równość odpowiednich boków i kątów dwóch trójkątów.'),
        f('Suma kątów trójkąta','α + β + γ = 180°','Dotyczy każdego trójkąta.'),
        f('Suma kątów wielokąta','S = (n − 2) · 180°','n oznacza liczbę boków wielokąta.'),
        f('Pole prostokąta','P = a · b','Boki a i b muszą być wyrażone w tej samej jednostce.'),
        f('Pole kwadratu','P = a²','Obwód kwadratu wynosi 4a.'),
        f('Pole trójkąta','P = a · hₐ / 2','Wysokość musi być prostopadła do wybranej podstawy.'),
        f('Pole równoległoboku','P = a · hₐ','Nie mnoż dwóch sąsiednich boków, jeśli nie tworzą kąta prostego.'),
        f('Pole trapezu','P = (a + b) · h / 2','a i b są bokami równoległymi.'),
        f('Pole rombu','P = e · f / 2','e i f oznaczają przekątne rombu.'),
        f('Pitagoras','a² + b² = c²','c jest przeciwprostokątną w trójkącie prostokątnym.'),
        f('Podobieństwo','długości: k,  pola: k²','Skala pól jest kwadratem skali długości.')
      ],
      skills:['rodzaje kątów','proste równoległe','własności trójkątów','czworokąty','obwody i pola','wysokości figur','Pitagoras','podobieństwo i skala'],
      visuals:[v('angles','Kąty przy prostych','Wierzchołkowe są równe, a przyległe sumują się do 180°.'),v('triangle','Podstawa i wysokość','Wysokość zawsze pada prostopadle na prostą zawierającą podstawę.'),v('quadrilaterals','Rodzina czworokątów','Kwadrat jest jednocześnie prostokątem i rombem, ale nie każdy romb jest kwadratem.')]
    },
    'e8-space':{
      formulas:[
        f('Objętość prostopadłościanu','V = a · b · c','Pomnóż trzy wymiary zapisane w tej samej jednostce.'),
        f('Objętość sześcianu','V = a³','Sześcian ma wszystkie krawędzie równe.'),
        f('Pole prostopadłościanu','P₍c₎ = 2(ab + ac + bc)','Każda para jednakowych ścian występuje dwa razy.'),
        f('Pole sześcianu','P₍c₎ = 6a²','Sześcian ma sześć jednakowych kwadratowych ścian.'),
        f('Objętość graniastosłupa','V = P₍p₎ · H','Pole podstawy pomnóż przez wysokość bryły.'),
        f('Pole graniastosłupa','P₍c₎ = 2P₍p₎ + P₍b₎','Dodaj dwie podstawy i pole ścian bocznych.'),
        f('Objętość ostrosłupa','V = ⅓ · P₍p₎ · H','Pole podstawy pomnóż przez wysokość ostrosłupa i podziel przez 3.'),
        f('Pole ostrosłupa','P₍c₎ = P₍p₎ + P₍b₎','Dodaj pole jednej podstawy oraz pola wszystkich ścian bocznych.'),
        f('Litry i decymetry','1 l = 1 dm³','Jeden litr to również 1000 cm³.'),
        f('Jednostki sześcienne','1 dm³ = 1000 cm³','Zmiana długości 10 razy zmienia objętość 1000 razy.'),
        f('Środek odcinka','S = ((x₁+x₂)/2, (y₁+y₂)/2)','Uśrednij osobno współrzędne x i y.'),
        f('Symetria względem osi x','(x,y) → (x,−y)','Przy odbiciu zmienia się znak drugiej współrzędnej.')
      ],
      skills:['rozpoznawanie brył','siatki graniastosłupów i ostrosłupów','pole powierzchni','objętość','pojemność','jednostki sześcienne','układ współrzędnych','symetrie punktów'],
      visuals:[v('cuboid','Graniastosłup','Objętość graniastosłupa to pole podstawy pomnożone przez wysokość bryły.'),v('pyramid','Ostrosłup','Ostrosłup o tej samej podstawie i wysokości ma trzy razy mniejszą objętość niż graniastosłup.'),v('coordinates','Punkt (x, y)','Najpierw przesuwasz się po osi x, potem równolegle do osi y.')]
    },
    'e8-data':{
      formulas:[
        f('Średnia arytmetyczna','x̄ = suma danych / liczba danych','Średnia rozdziela sumę po równo między wszystkie dane.'),
        f('Brakująca suma','suma = średnia · liczba danych','Przydatne, gdy trzeba odtworzyć brakujący wynik.'),
        f('Mediana — liczba nieparzysta','środkowa wartość po uporządkowaniu','Najpierw ustaw dane rosnąco.'),
        f('Mediana — liczba parzysta','Me = (dwie środkowe wartości)/2','Uśrednij dwa elementy leżące w środku.'),
        f('Rozstęp','R = maksimum − minimum','Pokazuje rozpiętość zestawu danych.'),
        f('Częstość','częstość = liczba wystąpień / liczba danych','Można ją zapisać jako ułamek, liczbę dziesiętną lub procent.'),
        f('Kąt na diagramie kołowym','α = udział · 360°','Zamień procent na ułamek dziesiętny i pomnóż przez pełny kąt.'),
        f('Prawdopodobieństwo','P(A) = liczba wyników sprzyjających / liczba wszystkich wyników','Wyniki elementarne muszą być jednakowo prawdopodobne.'),
        f('Zdarzenie przeciwne','P(Ā) = 1 − P(A)','Często szybciej policzyć to, czego nie chcemy.'),
        f('Reguła mnożenia','m · n','Gdy pierwszy wybór ma m możliwości, a kolejny n możliwości.'),
        f('Prawdopodobieństwo pewne i niemożliwe','0 ≤ P(A) ≤ 1','0 oznacza niemożliwe, a 1 — pewne.')
      ],
      skills:['tabele i diagramy','diagram kołowy','skala osi wykresu','średnia','mediana i dominanta','rozstęp','systematyczne zliczanie','prawdopodobieństwo klasyczne'],
      visuals:[v('chart','Czytanie wykresu','Tytuł, opis osi i skala są równie ważne jak wysokość słupka.'),v('median','Mediana','Uporządkuj dane i znajdź środek; nie zaczynaj od ich dodawania.'),v('probability','Wyniki sprzyjające','Zdarzenie to wybrana część wszystkich możliwych wyników doświadczenia.')]
    },
    'e8-powers-plus':{
      formulas:[
        f('Iloczyn potęg','aᵐ · aⁿ = aᵐ⁺ⁿ','Wykładniki dodajesz tylko przy tej samej podstawie.'),
        f('Iloraz potęg','aᵐ : aⁿ = aᵐ⁻ⁿ','Dla a różnego od zera.'),
        f('Potęga potęgi','(aᵐ)ⁿ = aᵐⁿ','Wykładniki mnożysz.'),
        f('Potęga iloczynu','(ab)ⁿ = aⁿbⁿ','Wykładnik obejmuje każdy czynnik w nawiasie.'),
        f('Potęga ilorazu','(a/b)ⁿ = aⁿ/bⁿ','Dla b różnego od zera.'),
        f('Potęga zerowa','a⁰ = 1','Dla a różnego od zera.'),
        f('Znak potęgi liczby ujemnej','(−a)²ⁿ > 0,  (−a)²ⁿ⁺¹ < 0  dla a > 0','Dla ujemnej podstawy parzysty wykładnik daje wynik dodatni, a nieparzysty — ujemny.'),
        f('Iloczyn pierwiastków','√a · √b = √(ab)','Dla a i b nieujemnych.'),
        f('Iloraz pierwiastków','√a/√b = √(a/b)','Dla a nieujemnego i b dodatniego.'),
        f('Pierwiastek z kwadratu','√(a²) = |a|','Wynik pierwiastka kwadratowego nie może być ujemny.'),
        f('Notacja wykładnicza','a · 10ⁿ,  1 ≤ a < 10','Przesunięcie przecinka odpowiada zmianie wykładnika.'),
        f('Szacowanie pierwiastka','n² < a < (n+1)² ⇒ n < √a < n+1','Porównaj z sąsiednimi pełnymi kwadratami.')
      ],
      skills:['znak potęgi','prawa działań na potęgach','potęga iloczynu i ilorazu','wykładnik zero','notacja wykładnicza','pierwiastki dokładne','wyłączanie czynnika spod pierwiastka','szacowanie pierwiastków'],
      visuals:[v('power','Potęga jako iloczyn','Wykładnik liczy powtórzenia czynnika, a nie wynik mnożenia.'),v('root','Pierwiastek jako bok','√49 to długość boku kwadratu o polu 49.'),v('scientific','Notacja wykładnicza','Współczynnik pozostaje od 1 do 10, a wykładnik pamięta przesunięcie przecinka.')]
    },
    'e8-percent-plus':{
      formulas:[
        f('Procent jako ułamek','p% = p/100','Zawsze można przejść z procentu na liczbę dziesiętną.'),
        f('Procent liczby','p% z a = p/100 · a','Obliczasz wskazaną część całości.'),
        f('Jakim procentem?','p = część/całość · 100%','W mianowniku wpisz wartość, względem której porównujesz.'),
        f('Obliczanie całości','całość = część : (p/100)','Stosuj, gdy znasz część i odpowiadający jej procent.'),
        f('Podwyżka','nowa = stara · (1 + p/100)','Mnożnik podwyżki jest większy od 1.'),
        f('Obniżka','nowa = stara · (1 − p/100)','Mnożnik obniżki jest mniejszy od 1.'),
        f('Zmiana procentowa','zmiana = różnica/wartość początkowa · 100%','Punktem odniesienia jest zawsze wartość początkowa.'),
        f('Dwie kolejne zmiany','nowa = stara · m₁ · m₂','Nie dodawaj procentów — pomnóż kolejne mnożniki.'),
        f('Punkty procentowe','różnica dwóch wartości procentowych','Wzrost z 20% do 30% to 10 p.p., ale wzrost względny o 50%.'),
        f('Zysk lub strata','wynik = przychód − koszt','Procent zysku najczęściej liczysz względem kosztu.')
      ],
      skills:['procent liczby','obliczanie całości','porównanie procentowe','podwyżka','obniżka','zmiany wielokrotne','punkty procentowe','promocje i finanse'],
      visuals:[v('percent','Sto równych części','25% to 25 części ze 100, czyli jedna czwarta.'),v('multiplier','Mnożnik zmiany','Podwyżka o 15% to mnożenie przez 1,15, a rabat 15% — przez 0,85.'),v('percentagepoints','Procent a punkt procentowy','Różnica odsetków i względna zmiana wartości odpowiadają na inne pytania.')]
    },
    'e8-equations-plus':{
      formulas:[
        f('Zasada równowagi','L = P ⇒ L + c = P + c','Tę samą operację wykonuj po obu stronach.'),
        f('Równanie liniowe','ax + b = c ⇒ x = (c − b)/a','Dla a różnego od zera.'),
        f('Nawias','a(x + b) = ax + ab','Pomnóż przez a każdy składnik nawiasu.'),
        f('Ułamek w równaniu','x/a = b ⇒ x = ab','Dla a różnego od zera.'),
        f('Tożsamość','0 · x = 0','Każda liczba spełnia takie równanie.'),
        f('Sprzeczność','0 · x = liczba różna od 0','Takie równanie nie ma rozwiązania.'),
        f('Dwie kolejne liczby','x oraz x + 1','Kolejne liczby parzyste lub nieparzyste różnią się o 2.'),
        f('Wiek','wiek za n lat = wiek dziś + n','Dla każdej osoby upływa dokładnie tyle samo czasu.'),
        f('Obwód prostokąta','O = 2a + 2b','W zadaniu tekstowym boki możesz wyrazić przez x.'),
        f('Spotkanie dwóch obiektów','(v₁ + v₂) · t = s','Przy ruchu naprzeciw siebie prędkości się sumują; wcześniej ujednolić jednostki.'),
        f('Sprawdzenie','lewa strona = prawa strona','Podstaw otrzymane x do równania wyjściowego.'),
        f('Odpowiedź','wynik + jednostka + kontekst','Samo x = 7 nie zawsze odpowiada na pytanie zadania.')
      ],
      skills:['równania z jedną niewiadomą','niewiadoma po obu stronach','równania z nawiasami','równania z ułamkami','równanie sprzeczne i tożsamościowe','zadania o wieku i liczbach','geometria i ruch','sprawdzenie w kontekście'],
      visuals:[v('balance','Dwie strony równania','Równowaga zostaje zachowana tylko po wykonaniu tej samej operacji po obu stronach.'),v('story','Od tekstu do modelu','Najpierw nazwij x, później wyraź pozostałe wielkości, a dopiero potem ułóż równanie.'),v('check','Sprawdzenie rozwiązania','Podstaw wynik do równania i porównaj wartość lewej oraz prawej strony.')]
    },
    'e8-circle-plus':{
      formulas:[
        f('Średnica','d = 2r','Promień jest połową średnicy.'),
        f('Długość okręgu','l = 2πr = πd','Okrąg jest linią — wynik ma jednostkę długości.'),
        f('Pole koła','P = πr²','Koło obejmuje wnętrze — wynik ma jednostkę kwadratową.'),
        f('Półkole — pole','P = πr²/2','To połowa pola całego koła.'),
        f('Półkole — obwód','O = πr + 2r','Do połowy długości okręgu dodaj średnicę.'),
        f('Pierścień','P = πR² − πr²','Odejmij pole mniejszego koła od większego.'),
        f('Przeciwprostokątna','c = √(a² + b²)','Stosuj wyłącznie w trójkącie prostokątnym, gdy szukasz najdłuższego boku.'),
        f('Brakująca przyprostokątna','a = √(c² − b²)','Od kwadratu przeciwprostokątnej odejmij kwadrat znanego boku.'),
        f('Przekątna kwadratu','d = a√2','Powstaje z Pitagorasa dla boków a i a.'),
        f('Przekątna prostokąta','d = √(a² + b²)','Przekątna jest przeciwprostokątną.'),
        f('Skala obwodu','O₂ = k · O₁','Obwody podobnych figur zmieniają się k razy.'),
        f('Skala pola','P₂ = k² · P₁','Pola podobnych figur zmieniają się k² razy.')
      ],
      skills:['promień i średnica','okrąg a koło','długość okręgu','pole koła','półkole i pierścień','Pitagoras i odwrotność','przekątne','figury złożone'],
      visuals:[v('circle','Promień, średnica, styczna','Średnica przechodzi przez środek, a promień do punktu styczności jest prostopadły do stycznej.'),v('pythagoras','Trójkąt prostokątny','Najdłuższy bok c leży zawsze naprzeciw kąta prostego.'),v('composite','Figura złożona','Podziel figurę na prostsze części albo odejmij pole wyciętego fragmentu.')]
    },
    'e8-reasoning':{
      formulas:[
        f('Plan zadania','dane → cel → związek → rachunki → odpowiedź','Taki zapis porządkuje również zadania nietypowe.'),
        f('Liczba parzysta','n = 2k','k jest liczbą całkowitą.'),
        f('Liczba nieparzysta','n = 2k + 1','Każda liczba całkowita ma dokładnie jedną z tych dwóch postaci.'),
        f('Wielokrotność','n = a · k','Taki zapis uzasadnia podzielność n przez a.'),
        f('Dowód ogólny','założenie → własność → wniosek','Argument musi obejmować każdy przypadek spełniający założenie.'),
        f('Kontrprzykład','jeden poprawny wyjątek obala zdanie ogólne','Przykład nie dowodzi reguły, ale może ją obalić.'),
        f('Kontrola jednostek','cm · cm = cm²,  cm² · cm = cm³','Jednostka pomaga sprawdzić poprawność modelu.'),
        f('Kontrola oszacowaniem','wynik dokładny ≈ wynik szacunkowy','Duża różnica sygnalizuje błąd rachunkowy.'),
        f('Warunki zadania','wynik musi należeć do dziedziny sytuacji','Długość, liczba osób czy czas nie mogą być ujemne.'),
        f('Pełna odpowiedź','liczba + jednostka + interpretacja','Zakończ rozwiązanie zdaniem odnoszącym się do pytania.')
      ],
      skills:['wybieranie strategii','dane i szukana','model matematyczny','zadania wieloetapowe','uzasadnienie','dowód a przykład','kontrprzykład','kontrola warunków i jednostek'],
      visuals:[v('flow','Tok rozwiązania','Każdy krok powinien wynikać z poprzedniego i przybliżać do celu.'),v('proof','Argument ogólny','Użyj zmiennej, aby rozumowanie dotyczyło wszystkich dopuszczalnych liczb.'),v('units','Kontrola jednostek','Jednostki długości, pola i objętości zachowują się inaczej przy przeliczaniu.')]
    }
  };
})();
