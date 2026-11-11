(() => {
  const smart = window.SMART_E8;
  const textbook = window.E8_TEXTBOOK;
  if (!smart || !textbook) return;

  const pathMap = new Map();
  Object.values(smart.specs).forEach(spec => (spec.paths || []).forEach(path => pathMap.set(path.id, path)));
  const clonePath = (id, patch = {}) => {
    const source = pathMap.get(id);
    if (!source) throw new Error(`Brak ścieżki: ${id}`);
    return { ...source, ...patch, concept: { ...source.concept, ...(patch.concept || {}) }, rows: (patch.rows || source.rows).map(row => [...row]) };
  };
  const q = (question, options, correct, hint, solution) => [question, options, correct, hint, solution];
  const makePath = (id, title, desc, concept, rows) => ({ id, title, desc, accent: 'blue', concept, rows });

  const calc = clonePath('e8-calc');
  const numberReasoning = clonePath('e8-number-reasoning');
  numberReasoning.rows[3] = q('Zaokrąglij 2498 do setek.', ['2400', '2500', '2490', '3000'], 1, 'Sprawdź cyfrę dziesiątek.', 'Cyfra dziesiątek to 9, więc zaokrąglamy w górę: 2498 ≈ 2500.');
  numberReasoning.rows[5] = q('Która liczba jest pierwsza?', ['21', '29', '39', '51'], 1, 'Liczba pierwsza ma dokładnie dwa dzielniki.', 'Liczba 29 ma tylko dwa dzielniki: 1 i 29. Pozostałe liczby są złożone.');
  const integers = makePath('e8-integers', 'Liczby całkowite i oś liczbowa', 'Porównuj liczby, interpretuj wartość bezwzględną i sprawnie pracuj na osi liczbowej.', { label: 'OŚ LICZBOWA', formula: '|a| = odległość liczby a od zera', items: ['większa liczba leży bardziej na prawo', 'liczby przeciwne mają tę samą wartość bezwzględną', 'odległość jest nieujemna'] }, [
    q('Która z liczb całkowitych −8, −3, 0, −1 jest największa?', ['−8', '−3', '0', '−1'], 2, 'Na osi większa liczba leży bardziej na prawo.', 'Spośród podanych liczb najbardziej na prawo leży 0.'),
    q('Liczbą przeciwną do −12 jest…', ['−12', '12', '0', '1/12'], 1, 'Liczby przeciwne sumują się do zera.', 'Liczbą przeciwną do −12 jest 12, ponieważ −12 + 12 = 0.'),
    q('Ile wynosi |−15|?', ['−15', '0', '15', '30'], 2, 'Wartość bezwzględna to odległość od zera.', 'Liczba −15 leży 15 jednostek od zera, więc |−15| = 15.'),
    q('Odległość na osi między −4 a 7 wynosi…', ['3', '7', '11', '−11'], 2, 'Odejmij mniejszą liczbę od większej.', 'Odległość to 7 − (−4) = 11.'),
    q('Temperatura wzrosła z −6°C do 2°C. O ile stopni wzrosła?', ['4°C', '6°C', '8°C', '−8°C'], 2, 'Policz różnicę temperatury końcowej i początkowej.', 'Zmiana wynosi 2 − (−6) = 8°C.'),
    q('Który zapis rzymski oznacza 94?', ['XCIV', 'XCVI', 'LXXXXIV', 'IC'], 0, '90 to XC, a 4 to IV.', 'Liczbę 94 zapisujemy jako XCIV.'),
    q('W liczbie 507 284 cyfra 7 oznacza…', ['7', '70', '7000', '70 000'], 2, 'Sprawdź pozycję cyfry w zapisie dziesiętnym.', 'Cyfra 7 stoi na miejscu tysięcy, więc oznacza 7000.'),
    q('Która liczba jest wielokrotnością 12?', ['54', '62', '72', '82'], 2, 'Sprawdź kolejne iloczyny 12.', '72 = 12 · 6, więc jest wielokrotnością 12.'),
    q('Rozkład liczby 84 na czynniki pierwsze to…', ['2·42', '2²·3·7', '4·21', '2·3·14'], 1, 'W rozkładzie mogą wystąpić wyłącznie liczby pierwsze.', '84 = 2·42 = 2²·21 = 2²·3·7.'),
    q('Najlepszym oszacowaniem iloczynu 198·51 jest…', ['1000', '5000', '10 000', '100 000'], 2, 'Zaokrąglij do 200 i 50.', '198·51 ≈ 200·50 = 10 000.')
  ]);

  const fractionMeaning = makePath('e8-fraction-meaning', 'Znaczenie, porównywanie i skracanie ułamków', 'Rozumiej licznik i mianownik, porównuj ułamki oraz rozpoznawaj równoważne zapisy.', { label: 'CZĘŚĆ CAŁOŚCI', formula: 'a/b = a : b', items: ['mianownik opisuje liczbę równych części', 'licznik mówi, ile części wybrano', 'wartość ułamka nie zmienia się przy skracaniu'] }, [
    q('Który ułamek jest równy 3/4?', ['6/8', '6/7', '9/16', '12/20'], 0, 'Pomnóż licznik i mianownik przez tę samą liczbę.', '3/4 · 2/2 = 6/8.'),
    q('Skróć ułamek 18/24 do postaci nieskracalnej.', ['9/12', '6/8', '3/4', '2/3'], 2, 'Podziel licznik i mianownik przez ich NWD.', 'NWD(18,24)=6, zatem 18/24 = 3/4. Liczby 3 i 4 nie mają już wspólnego dzielnika większego od 1.'),
    q('Który z ułamków o mianowniku 8 jest największy?', ['3/8', '5/8', '1/8', '4/8'], 1, 'Przy równych mianownikach porównaj liczniki.', 'Wszystkie mianowniki są równe 8, a największy licznik to 5, więc największy ułamek to 5/8.'),
    q('Który ułamek jest mniejszy od 1?', ['7/5', '9/9', '5/7', '8/3'], 2, 'Ułamek właściwy ma licznik mniejszy od mianownika.', '5/7 < 1, bo 5 < 7.'),
    q('Liczba mieszana 2 1/3 to ułamek…', ['3/3', '5/3', '7/3', '8/3'], 2, 'Pomnóż całości przez mianownik i dodaj licznik.', '2·3+1=7, więc 2 1/3 = 7/3.'),
    q('Ułamek 11/4 jako liczba mieszana to…', ['2 1/4', '2 3/4', '3 1/4', '4 3/4'], 1, 'Podziel licznik przez mianownik z resztą.', '11 : 4 = 2 reszty 3, więc 11/4 = 2 3/4.'),
    q('Jaka część godziny to 15 minut?', ['1/2', '1/3', '1/4', '1/5'], 2, 'Godzina ma 60 minut.', '15/60 = 1/4 godziny.'),
    q('Uzupełnij: 5/6 = 20/…', ['21', '24', '26', '30'], 1, 'Licznik pomnożono przez 4.', 'Mianownik także mnożymy przez 4: 6·4=24.'),
    q('Uporządkuj rosnąco: 1/2, 3/4, 2/3.', ['1/2, 2/3, 3/4', '1/2, 3/4, 2/3', '2/3, 1/2, 3/4', '3/4, 2/3, 1/2'], 0, 'Sprowadź ułamki do mianownika 12.', '1/2=6/12, 2/3=8/12, 3/4=9/12.'),
    q('Odwrotnością liczby 2 1/2 jest…', ['2/5', '5/2', '3/2', '1/2'], 0, 'Najpierw zamień liczbę mieszaną na ułamek niewłaściwy.', '2 1/2 = 5/2, więc odwrotnością jest 2/5.')
  ]);
  const decimals = makePath('e8-decimals', 'Liczby dziesiętne i zamiana postaci', 'Wykonuj działania pisemne, porównuj rozwinięcia dziesiętne i dobieraj wygodny zapis liczby.', { label: 'ZAPIS DZIESIĘTNY', formula: '7/20 = 0,35', items: ['wyrównuj przecinki', 'pilnuj liczby miejsc po przecinku', 'dobieraj zapis do działania'] }, [
    q('Oblicz 3,75 + 1,6.', ['4,35', '5,35', '5,31', '4,75'], 1, 'Wyrównaj miejsca po przecinku.', '3,75 + 1,60 = 5,35.'),
    q('Oblicz 8 − 2,47.', ['5,43', '5,53', '6,53', '6,47'], 1, 'Zapisz 8 jako 8,00.', '8,00 − 2,47 = 5,53.'),
    q('Ile wynosi 0,48 · 10?', ['0,048', '4,8', '48', '480'], 1, 'Przesuń przecinek o jedno miejsce w prawo.', '0,48·10 = 4,8.'),
    q('Ile wynosi 37,5 : 100?', ['0,375', '3,75', '375', '0,0375'], 0, 'Przesuń przecinek o dwa miejsca w lewo.', '37,5:100 = 0,375.'),
    q('Oblicz 1,2 · 0,5.', ['0,06', '0,6', '6', '1,7'], 1, 'Połowa z 1,2 to 0,6.', '1,2·0,5 = 0,6.'),
    q('Oblicz 4,2 : 0,6.', ['0,7', '7', '70', '2,52'], 1, 'Pomnóż obie liczby przez 10.', '4,2:0,6 = 42:6 = 7.'),
    q('Który zapis dziesiętny jest równy 3/8?', ['0,375', '0,38', '0,625', '0,83'], 0, 'Podziel 3 przez 8.', '3:8 = 0,375.'),
    q('Która z liczb dziesiętnych 0,507 i 0,57 jest większa?', ['0,507', '0,57', 'są równe', 'nie da się ustalić'], 1, 'Zapisz 0,57 jako 0,570.', '0,570 > 0,507, więc większa jest 0,57.'),
    q('Zaokrąglij 12,746 do części setnych.', ['12,74', '12,75', '12,7', '12,746'], 1, 'Sprawdź cyfrę tysięcznych.', 'Cyfra tysięcznych to 6, więc 12,746 ≈ 12,75.'),
    q('Trzy produkty kosztują 4,99 zł, 7,50 zł i 2,51 zł. Razem kosztują…', ['14,00 zł', '14,90 zł', '15,00 zł', '15,10 zł'], 2, 'Dodaj kwoty, wyrównując przecinki.', '4,99+7,50+2,51 = 15,00 zł.')
  ]);

  const algebraPatterns = makePath('e8-algebra-patterns', 'Wzory, zależności i zapis ogólny', 'Zapisuj zależności literami, wyłączaj wspólny czynnik i opisuj własności liczb.', { label: 'ZAPIS ALGEBRAICZNY', formula: 'a(b+c)=ab+ac', items: ['litera oznacza liczbę', 'wspólny czynnik można wyłączyć', 'zapis ogólny obejmuje wszystkie przypadki'] }, [
    q('Wartość 3a−2 dla a=5 wynosi…', ['7', '11', '13', '15'], 2, 'Podstaw 5 w miejsce a.', '3·5−2 = 15−2 = 13.'),
    q('Uprość 4x+3−2x+5.', ['2x+8', '2x−2', '6x+8', '6x−2'], 0, 'Połącz wyrazy podobne i liczby.', '4x−2x=2x, a 3+5=8, więc otrzymujemy 2x+8.'),
    q('Usuń nawias: 3(2x−4).', ['6x−4', '6x−12', '5x−7', '6x+12'], 1, 'Pomnóż oba składniki w nawiasie przez 3.', '3·2x−3·4 = 6x−12.'),
    q('Wyłącz wspólny czynnik z 8x+12.', ['2(4x+6)', '4(2x+3)', '8(x+12)', '12(8x+1)'], 1, 'Największy wspólny czynnik liczb 8 i 12 to 4.', '8x+12 = 4·2x+4·3 = 4(2x+3).'),
    q('Obwód prostokąta o bokach x i x+3 wynosi…', ['2x+3', '3x+3', '4x+6', 'x²+3x'], 2, 'Obwód to podwojona suma boków.', '2[x+(x+3)] = 2(2x+3) = 4x+6.'),
    q('Dowolną liczbę parzystą można zapisać jako…', ['2k', '2k+1', 'k/2', 'k+2'], 0, 'Liczba parzysta jest wielokrotnością 2.', 'Dla całkowitego k zapis 2k opisuje każdą liczbę parzystą.'),
    q('Następna liczba całkowita po n to…', ['n−1', '2n', 'n+1', 'n²'], 2, 'Kolejne liczby różnią się o 1.', 'Po liczbie n następuje n+1.'),
    q('Suma trzech kolejnych liczb n, n+1, n+2 to…', ['3n+2', '3n+3', 'n+3', '3n+6'], 1, 'Dodaj osobno wyrazy z n i liczby.', 'n+(n+1)+(n+2)=3n+3.'),
    q('Liczba o 7 większa od podwojonej liczby x ma zapis…', ['2(x+7)', '2x+7', 'x+14', '7x+2'], 1, 'Najpierw podwój x, potem dodaj 7.', 'Podwojona liczba to 2x, a o 7 większa to 2x+7.'),
    q('Który zapis jest zawsze podzielny przez 3?', ['3k', '3k+1', 'k+3', 'k/3'], 0, 'Wielokrotność 3 ma czynnik 3.', 'Dla całkowitego k liczba 3k jest wielokrotnością 3.')
  ]);

  const practical = makePath('e8-practical-units', 'Czas, pieniądze i jednostki', 'Rozwiązuj codzienne zadania z zegarem, kalendarzem, miarami i kosztami.', { label: 'WIELKOŚCI PRAKTYCZNE', formula: 'wartość = liczba jednostek · wartość jednej jednostki', items: ['najpierw ujednolić jednostki', 'zapisuj jednostkę w każdym kroku', 'sprawdź sens wyniku'] }, [
    q('2 godziny 35 minut to…', ['135 min', '145 min', '155 min', '235 min'], 2, 'Dwie godziny to 120 minut.', '120 min + 35 min = 155 min.'),
    q('Seans zaczął się o 16:45 i trwał 1 h 50 min. O której się skończył?', ['18:25', '18:35', '18:45', '19:05'], 1, 'Dodaj osobno godzinę i 50 minut.', '16:45+1:50 = 18:35.'),
    q('Ile dni ma 5 pełnych tygodni?', ['25', '30', '35', '40'], 2, 'Tydzień ma 7 dni.', '5·7 = 35 dni.'),
    q('Za 4 bilety po 17,50 zł zapłacimy…', ['60 zł', '65 zł', '70 zł', '75 zł'], 2, 'Pomnóż cenę jednego biletu przez 4.', '4·17,50 zł = 70 zł.'),
    q('Z 100 zł po zakupie za 63,80 zł zostanie…', ['36,20 zł', '36,80 zł', '37,20 zł', '46,20 zł'], 0, 'Odejmij koszt od zapłaconej kwoty.', '100,00−63,80 = 36,20 zł.'),
    q('3,4 m to…', ['34 cm', '340 cm', '3400 cm', '0,34 cm'], 1, 'Jeden metr ma 100 centymetrów.', '3,4·100 = 340 cm.'),
    q('2,5 kg to…', ['25 g', '250 g', '2500 g', '25 000 g'], 2, 'Jeden kilogram ma 1000 gramów.', '2,5·1000 = 2500 g.'),
    q('750 ml to…', ['0,075 l', '0,75 l', '7,5 l', '75 l'], 1, 'Jeden litr ma 1000 ml.', '750/1000 l = 0,75 l.'),
    q('Pole kwadratu wynosi 1 m². Ile to cm²?', ['100', '1000', '10 000', '100 000'], 2, 'Przelicznik długości 100 podnieś do kwadratu.', '1 m² = 100 cm·100 cm = 10 000 cm².'),
    q('Stan konta −35 zł zwiększył się o 50 zł. Nowy stan to…', ['−85 zł', '−15 zł', '15 zł', '85 zł'], 2, 'Dodaj 50 do liczby −35.', '−35+50 = 15 zł.')
  ]);

  const coordinateApps = clonePath('e8-coordinate-reasoning', {
    id: 'e8-coordinate-applications',
    title: 'Geometria w układzie współrzędnych',
    desc: 'Wyznaczaj środki odcinków, długości boków i brakujące wierzchołki figur.',
    concept: { label: 'WSPÓŁRZĘDNE FIGUR', formula: 'S=((x₁+x₂)/2,(y₁+y₂)/2)', items: ['oś x — kierunek poziomy', 'oś y — kierunek pionowy', 'najpierw szkic, potem rachunek'] }
  });
  coordinateApps.rows.push(
    q('Punkty A=(−1,2) i B=(5,2) są końcami odcinka. Jego długość wynosi…', ['4', '6', '7', '8'], 1, 'Odcinek jest poziomy — odejmij współrzędne x.', 'Długość wynosi 5−(−1)=6.'),
    q('Punkty A=(3,−4) i B=(3,5) są końcami odcinka. Jego długość wynosi…', ['1', '8', '9', '12'], 2, 'Odcinek jest pionowy — odejmij współrzędne y.', 'Długość wynosi 5−(−4)=9.'),
    q('Punkt P=(−2,4) odbito względem osi y. Obraz punktu ma współrzędne…', ['(2,4)', '(−2,−4)', '(4,−2)', '(2,−4)'], 0, 'Odbicie względem osi y zmienia znak współrzędnej x.', 'Po odbiciu otrzymujemy P′=(2,4).'),
    q('Punkt Q=(3,−5) odbito względem osi x. Obraz punktu ma współrzędne…', ['(−3,−5)', '(3,5)', '(−3,5)', '(5,3)'], 1, 'Odbicie względem osi x zmienia znak współrzędnej y.', 'Po odbiciu otrzymujemy Q′=(3,5).'),
    q('Który punkt leży w II ćwiartce układu współrzędnych?', ['(2,3)', '(−2,3)', '(−2,−3)', '(2,−3)'], 1, 'W II ćwiartce x<0 i y>0.', 'Punkt (−2,3) ma ujemną pierwszą i dodatnią drugą współrzędną.'),
    q('A=(1,1), B=(6,1), C=(6,4), D=(1,4). Pole prostokąta ABCD wynosi…', ['8', '12', '15', '18'], 2, 'Odczytaj długości poziomego i pionowego boku.', 'Boki mają długości 6−1=5 i 4−1=3, więc pole wynosi 5·3=15.'),
    q('Punkt A=(−4,−1) przesunięto o 3 w prawo i 5 w górę. Otrzymano punkt…', ['(−1,4)', '(−7,4)', '(1,2)', '(−1,−6)'], 0, 'Do x dodaj 3, a do y dodaj 5.', 'A′=(−4+3,−1+5)=(−1,4).')
  );

  const solidReasoning = clonePath('e8-solid-reasoning');
  solidReasoning.rows[4] = q('Graniastosłup ma objętość 96 cm³ i pole podstawy 16 cm². Jego wysokość wynosi…', ['4 cm', '6 cm', '8 cm', '12 cm'], 1, 'Skorzystaj z V=Pp·H.', 'H=V:Pp=96:16=6 cm.');
  solidReasoning.rows.push(
    q('Ostrosłup ma pole podstawy 30 cm² i wysokość 9 cm. Jego objętość wynosi…', ['90 cm³', '180 cm³', '270 cm³', '810 cm³'], 0, 'Objętość ostrosłupa to jedna trzecia iloczynu pola podstawy i wysokości.', 'V=1/3·30·9=90 cm³.'),
    q('Zbiornik ma pojemność 12 l. Ile to dm³?', ['1,2 dm³', '12 dm³', '120 dm³', '12 000 dm³'], 1, 'Jeden litr odpowiada jednemu dm³.', '12 l = 12 dm³.'),
    q('Objętość sześcianu wynosi 125 cm³. Długość krawędzi to…', ['4 cm', '5 cm', '25 cm', '125 cm'], 1, 'Szukamy liczby, której sześcian wynosi 125.', '5³=125, więc krawędź ma 5 cm.')
  );
  const nets = makePath('e8-nets-surfaces', 'Siatki i pole powierzchni brył', 'Rozpoznawaj siatki oraz obliczaj pola wszystkich ścian graniastosłupów i ostrosłupów.', { label: 'SIATKA BRYŁY', formula: 'Pc = 2Pp + Pb', items: ['policz wszystkie ściany', 'rozpoznaj pary ścian równoległych', 'pole ma jednostkę kwadratową'] }, [
    q('Ile kwadratowych ścian ma sześcian?', ['4', '6', '8', '12'], 1, 'Policz ściany bryły, nie krawędzie.', 'Sześcian ma 6 jednakowych kwadratowych ścian.'),
    q('Ile prostokątów tworzy powierzchnię boczną graniastosłupa trójkątnego?', ['2', '3', '4', '5'], 1, 'Liczba ścian bocznych odpowiada liczbie boków podstawy.', 'Trójkątna podstawa ma 3 boki, więc są 3 ściany boczne.'),
    q('Siatka prostopadłościanu składa się z…', ['4 prostokątów', '6 prostokątów', '8 prostokątów', '12 prostokątów'], 1, 'Prostopadłościan ma sześć ścian.', 'Każda z 6 ścian prostopadłościanu jest prostokątem.'),
    q('Pole powierzchni sześcianu o krawędzi 4 cm wynosi…', ['16 cm²', '64 cm²', '96 cm²', '128 cm²'], 2, 'Sześcian ma 6 ścian o polu a².', 'Pc=6·4²=6·16=96 cm².'),
    q('Prostopadłościan ma wymiary 2 cm, 3 cm i 5 cm. Pole powierzchni wynosi…', ['30 cm²', '31 cm²', '62 cm²', '90 cm²'], 2, 'Dodaj pola trzech par ścian.', 'Pc=2(2·3+2·5+3·5)=2(6+10+15)=62 cm².'),
    q('Graniastosłup prawidłowy trójkątny ma w podstawie trójkąt o obwodzie 12 cm i wysokość 5 cm. Pole boczne wynosi…', ['17 cm²', '30 cm²', '60 cm²', '120 cm²'], 2, 'Pole boczne graniastosłupa prostego to obwód podstawy razy wysokość.', 'Pb=12·5=60 cm².'),
    q('Ostrosłup czworokątny ma łącznie…', ['4 ściany', '5 ścian', '6 ścian', '8 ścian'], 1, 'Dodaj podstawę i cztery ściany boczne.', 'Ma 1 czworokątną podstawę i 4 trójkątne ściany boczne, razem 5.'),
    q('Która jednostka pasuje do pola powierzchni pudełka?', ['cm', 'cm²', 'cm³', 'l'], 1, 'Pole mierzymy w jednostkach kwadratowych.', 'Pole powierzchni zapisujemy np. w cm².'),
    q('Pole jednej ściany sześcianu wynosi 25 cm². Pole całkowite wynosi…', ['50 cm²', '100 cm²', '125 cm²', '150 cm²'], 3, 'Pomnóż pole jednej ściany przez 6.', '6·25 cm² = 150 cm².'),
    q('Pudełko bez pokrywki ma podstawę 6 cm × 4 cm i wysokość 3 cm. Pole użytego kartonu wynosi…', ['54 cm²', '60 cm²', '84 cm²', '108 cm²'], 2, 'Dodaj jedną podstawę i cztery ściany boczne.', 'P=6·4+2·6·3+2·4·3=24+36+24=84 cm².')
  ]);

  const statsReasoning = clonePath('e8-statistics-reasoning');
  statsReasoning.rows.push(
    q('Dominantą zestawu 2, 3, 3, 5, 7, 7, 7 jest…', ['3', '5', '7', 'nie ma dominanty'], 2, 'Znajdź wartość występującą najczęściej.', 'Liczba 7 występuje trzy razy, częściej niż pozostałe.'),
    q('Zestawy A: 4,4,4 i B: 2,4,6 mają tę samą średnią. Który ma większy rozstęp?', ['A', 'B', 'oba taki sam', 'nie da się ustalić'], 1, 'Rozstęp to maksimum minus minimum.', 'A ma rozstęp 0, a B ma rozstęp 6−2=4.'),
    q('W klasie jest 12 dziewcząt i 8 chłopców. Dziewczęta stanowią…', ['40%', '50%', '60%', '80%'], 2, 'Podziel 12 przez 20.', '12/20=0,6, czyli 60% klasy.'),
    q('Średnia 6 liczb wynosi 7. Ich suma wynosi…', ['13', '42', '49', '72'], 1, 'Suma to średnia razy liczba danych.', 'Suma danych to średnia razy ich liczba: 7·6=42.'),
    q('Do zestawu 3, 5, 7 dodano liczbę 100. Która miara zmieni się najbardziej?', ['mediana', 'dominanta', 'średnia', 'liczba danych się nie zmieni'], 2, 'Bardzo duża wartość skrajna silnie wpływa na średnią.', 'Średnia jest wrażliwa na wartość odstającą 100.')
  );
  const charts = makePath('e8-charts', 'Tabele, wykresy i diagramy', 'Czytaj skalę, legendę i jednostki oraz zamieniaj dane między tabelą i wykresem.', { label: 'ODCZYT DANYCH', formula: 'kąt sektora = udział · 360°', items: ['najpierw tytuł i legenda', 'sprawdź skalę osi', 'wniosek musi wynikać z danych'] }, [
    q('Na wykresie jedna działka osi oznacza 5 osób. Słupek sięga 4 działek. Ile osób przedstawia?', ['4', '9', '20', '25'], 2, 'Pomnóż liczbę działek przez wartość jednej działki.', '4·5=20 osób.'),
    q('W tabeli sprzedaż wynosiła: pon. 12, wt. 15, śr. 9. Którego dnia była największa?', ['w poniedziałek', 'we wtorek', 'w środę', 'każdego taka sama'], 1, 'Porównaj trzy wartości.', 'Największa wartość to 15 we wtorek.'),
    q('25% koła na diagramie kołowym odpowiada kątowi…', ['25°', '45°', '90°', '120°'], 2, 'Oblicz jedną czwartą z 360°.', '25%=1/4, więc kąt wynosi 360°:4=90°.'),
    q('Sektor o kącie 72° stanowi jaką część pełnego koła?', ['10%', '20%', '25%', '72%'], 1, 'Podziel 72 przez 360.', '72/360=0,2, czyli 20%.'),
    q('Wykres zaczyna oś pionową od 90 zamiast od 0. Co trzeba zrobić?', ['zignorować skalę', 'odczytać wartości z opisanych działek', 'uznać wykres za błędny', 'dodać 90 do każdego wyniku'], 1, 'Początek osi wpływa na wygląd różnic, ale nie na opisane wartości.', 'Wartości odczytujemy z rzeczywistej skali i zachowujemy ostrożność przy porównaniu.'),
    q('Tabela podaje 8, 11 i 6 zgłoszeń. Łącznie było…', ['17', '19', '25', '48'], 2, 'Dodaj wszystkie kategorie.', '8+11+6=25.'),
    q('Na piktogramie jeden symbol oznacza 4 książki. 3,5 symbolu oznacza…', ['7', '12', '14', '16'], 2, 'Połowa symbolu oznacza połowę z 4.', '3,5·4=14 książek.'),
    q('W ankiecie 18 z 30 osób wybrało odpowiedź A. Na diagramie kołowym sektor A ma kąt…', ['108°', '180°', '216°', '240°'], 2, 'Oblicz udział 18/30 i pomnóż przez 360°.', '18/30=0,6, a 0,6·360°=216°.'),
    q('Który wykres najlepiej pokazuje zmianę temperatury w kolejnych godzinach?', ['liniowy', 'kołowy', 'piktogram bez osi', 'diagram Venna'], 0, 'Szukamy zmian w czasie.', 'Wykres liniowy czytelnie pokazuje przebieg wartości w czasie.'),
    q('Z wykresu wynika, że grupa A ma wynik 24, a grupa B 18. O ile A przewyższa B?', ['4', '6', '24', '42'], 1, 'Oblicz różnicę wartości.', 'Różnica wyników grup wynosi 24−18=6.')
  ]);

  const probabilityReasoning = clonePath('e8-probability-reasoning');
  probabilityReasoning.rows.push(
    q('Rzucamy kostką. P(wynik nieparzysty) wynosi…', ['1/6', '1/3', '1/2', '2/3'], 2, 'Nieparzyste wyniki to 1, 3 i 5.', 'Są 3 wyniki sprzyjające z 6, więc P=3/6=1/2.'),
    q('W urnie są 2 kule czerwone i 8 niebieskich. P(niebieska) wynosi…', ['1/5', '1/4', '4/5', '8'], 2, 'Podziel liczbę kul niebieskich przez liczbę wszystkich kul.', 'P=8/(2+8)=8/10=4/5.'),
    q('Ile wyników ma doświadczenie polegające na rzucie monetą i kostką?', ['6', '8', '12', '36'], 2, 'Pomnóż liczbę wyników monety i kostki.', 'Moneta ma 2 wyniki, kostka 6, zatem 2·6=12.'),
    q('P(A)=0,35. Prawdopodobieństwo zdarzenia przeciwnego wynosi…', ['0,35', '0,55', '0,65', '1,35'], 2, 'P(Ā)=1−P(A).', 'P(Ā)=1−0,35=0,65.'),
    q('Zdarzenie niemożliwe ma prawdopodobieństwo…', ['0', '1/2', '1', '100'], 0, 'Nie ma żadnego wyniku sprzyjającego.', 'Dla zdarzenia niemożliwego liczba wyników sprzyjających wynosi 0, więc P=0.')
  );

  const chosen = {
    'e8-numbers': [integers, calc, numberReasoning],
    'e8-fractions': [fractionMeaning, clonePath('e8-fraction-calc', { title: 'Działania na ułamkach', desc: 'Dodawaj, odejmuj, mnóż i dziel ułamki zwykłe oraz liczby mieszane.' }), decimals],
    'e8-percent-plus': [clonePath('xpct-basics'), clonePath('xpct-changes'), clonePath('xpct-money')],
    'e8-powers-plus': [clonePath('xpow-laws'), clonePath('xpow-roots'), clonePath('xpow-science')],
    'e8-algebra': [clonePath('e8-expressions'), algebraPatterns, clonePath('xreason-proof')],
    'e8-equations-plus': [clonePath('xeq-transform'), clonePath('xeq-stories'), clonePath('xeq-geometry'), clonePath('xreason-open')],
    'e8-proportion': [clonePath('e8-ratio-scale'), clonePath('e8-motion'), practical],
    'e8-geometry': [clonePath('e8-figures'), clonePath('xgeo-composite'), clonePath('xgeo-circle')],
    'e8-circle-plus': [clonePath('xgeo-pythagoras'), clonePath('e8-coordinate'), coordinateApps],
    'e8-space': [nets, clonePath('e8-solids', { title: 'Objętość i jednostki sześcienne', desc: 'Obliczaj objętość graniastosłupów i ostrosłupów oraz przeliczaj jednostki pojemności.' }), solidReasoning],
    'e8-data': [charts, clonePath('e8-statistics', { title: 'Średnia, mediana i rozstęp', desc: 'Obliczaj i interpretuj podstawowe miary opisujące zestaw danych.' }), statsReasoning],
    'e8-reasoning': [clonePath('e8-probability', { title: 'Przestrzeń wyników i prawdopodobieństwo', desc: 'Opisuj doświadczenia losowe i obliczaj prawdopodobieństwo zdarzeń.' }), clonePath('e8-probability-reasoning', { ...probabilityReasoning, title: 'Systematyczne zliczanie i zdarzenia', desc: 'Twórz tabele i drzewka, licz możliwości oraz korzystaj ze zdarzenia przeciwnego.' })]
  };

  const coursePatch = {
    'e8-numbers': { title: 'Liczby naturalne i całkowite', desc: 'Zapis liczb, oś liczbowa, działania, podzielność oraz szacowanie.', items: ['System dziesiętny i rzymski', 'Liczby ujemne i wartość bezwzględna', 'Kolejność działań', 'Podzielność, NWD i NWW', 'Zaokrąglanie i szacowanie'] },
    'e8-fractions': { title: 'Ułamki zwykłe i dziesiętne', desc: 'Znaczenie ułamka, porównywanie, cztery działania i zapis dziesiętny.', items: ['Znaczenie i porównywanie ułamków', 'Skracanie i rozszerzanie', 'Cztery działania', 'Liczby mieszane', 'Ułamki dziesiętne'] },
    'e8-percent-plus': { title: 'Procenty i zmiany procentowe', desc: 'Procent liczby, obliczanie całości, podwyżki, rabaty i finanse.', items: ['Procent, część i całość', 'Wartość początkowa', 'Podwyżki i obniżki', 'Punkty procentowe', 'Zysk, strata i promocje'] },
    'e8-powers-plus': { title: 'Potęgi, pierwiastki i notacja wykładnicza', desc: 'Prawa działań, pierwiastki, szacowanie i zapis bardzo dużych liczb.', items: ['Prawa działań na potęgach', 'Potęgi liczb ujemnych', 'Pierwiastki', 'Szacowanie pierwiastków', 'Notacja wykładnicza'] },
    'e8-algebra': { title: 'Wyrażenia algebraiczne i argumentacja', desc: 'Wyrażenia, nawiasy, zapis ogólny oraz krótkie dowody i kontrprzykłady.', items: ['Wartość wyrażenia', 'Wyrazy podobne', 'Nawiasy i wyłączanie czynnika', 'Zapis własności liczb', 'Uzasadnienie i kontrprzykład'] },
    'e8-equations-plus': { title: 'Równania i zadania tekstowe', desc: 'Równania liniowe, modele z treści i kompletny zapis rozwiązania.', items: ['Równania krok po kroku', 'Równania z nawiasami i ułamkami', 'Wiek, ceny i liczby', 'Geometria i ruch', 'Zadania otwarte'] },
    'e8-proportion': { title: 'Proporcjonalność, skala i obliczenia praktyczne', desc: 'Proporcje, cena jednostkowa, skala, ruch, czas, pieniądze i jednostki.', items: ['Proporcjonalność prosta', 'Skala mapy i planu', 'Cena jednostkowa', 'Droga, prędkość i czas', 'Czas, pieniądze i jednostki'] },
    'e8-geometry': { title: 'Kąty, figury płaskie i okrąg', desc: 'Własności figur, pola, obwody, figury złożone oraz koło i okrąg.', items: ['Kąty i proste', 'Trójkąty i czworokąty', 'Pola i obwody', 'Figury złożone', 'Koło i okrąg'] },
    'e8-circle-plus': { title: 'Twierdzenie Pitagorasa i współrzędne', desc: 'Trójkąty prostokątne, przekątne, punkty i figury w układzie współrzędnych.', items: ['Twierdzenie Pitagorasa', 'Twierdzenie odwrotne', 'Przekątne i odległości', 'Układ współrzędnych', 'Środek odcinka i figury'] },
    'e8-space': { title: 'Bryły, siatki, pole i objętość', desc: 'Graniastosłupy, ostrosłupy, siatki, pola powierzchni, objętość i pojemność.', items: ['Rozpoznawanie brył', 'Siatki', 'Pole powierzchni', 'Objętość', 'Pojemność i jednostki sześcienne'] },
    'e8-data': { title: 'Dane, wykresy i statystyka', desc: 'Tabele, diagramy, średnia, mediana, dominanta, rozstęp i wnioskowanie.', items: ['Tabele i wykresy', 'Skala i legenda', 'Średnia', 'Mediana i dominanta', 'Rozstęp i wnioski'] },
    'e8-reasoning': { title: 'Kombinatoryka i prawdopodobieństwo', desc: 'Systematyczne zliczanie, przestrzeń wyników i prawdopodobieństwo klasyczne.', items: ['Reguła mnożenia', 'Tabele i drzewka', 'Wyniki elementarne', 'Zdarzenia losowe', 'Prawdopodobieństwo'] }
  };

  Object.entries(chosen).forEach(([courseId, paths]) => {
    const spec = smart.specs[courseId];
    Object.assign(spec, coursePatch[courseId]);
    spec.paths = paths.map((path, index) => ({ ...path, n: String(index + 1).padStart(2, '0'), accent: spec.accent }));
  });
  smart.topics = smart.topics.map(topic => ({ ...topic, ...coursePatch[topic.id] }));

  const chapterExams = {
    'e8-percent-plus': [
      [0, "Ile złotych stanowi 15% z 240 zł?", ["24","30","36","40"], 2, "0,15 · 240 = 36 zł."],
      [0, "W klasie jest 25 osób. Siedem z nich dojeżdża autobusem. Jaki to procent klasy?", ["28%","25%","32%","35%"], 0, "7 : 25 = 0,28 = 28%."],
      [0, "Który zapis oznacza największą część tej samej całości?", ["48%","0,45","2/5","1/2"], 3, "1/2 to 50%; pozostałe wartości to 48%, 45% i 40%."],
      [1, "Cena 160 zł wzrosła o 25%, a potem spadła o 20%. Ile wynosi teraz?", ["152 zł","160 zł","168 zł","180 zł"], 1, "160 · 1,25 = 200, a 200 · 0,8 = 160 zł."],
      [2, "Po obniżce o 30% rower kosztuje 840 zł. Jaka była cena przed obniżką?", ["1092 zł","1120 zł","1176 zł","1200 zł"], 3, "840 zł to 70% ceny, więc cena wyjściowa to 840 : 0,7 = 1200 zł."],
      [1, "Odsetek uczniów w kole wzrósł z 20% do 25%. O ile procent wzrósł sam odsetek względem początkowego?", ["O 25%","O 5%","O 20%","O 125%"], 0, "Przyrost to 5 punktów procentowych, czyli 5 : 20 = 25% wartości początkowej."],
      [2, "Dwie koszulki kosztują po 80 zł. Druga jest tańsza o 40%. Jaki rabat otrzymujesz na cały zakup?", ["10%","40%","20%","25%"], 2, "Rabat to 32 zł z wyjściowych 160 zł, czyli 20%."],
      [0, "W grupie 120 osób 65% wybrało zajęcia A, a pozostali B. Ilu więcej uczniów wybrało A niż B?", ["18","36","42","78"], 1, "Różnica udziałów to 65%−35%=30%. 30% ze 120 to 36."],
      [1, "Dwa sklepy obniżyły tę samą cenę. Pierwszy raz o 30%, drugi dwa razy o 15%. Który ma niższą cenę?", ["Drugi","Ceny są równe","Nie da się ustalić","Pierwszy"], 3, "Pierwszy zostawia 70% ceny, drugi 0,85²=72,25%."],
      [2, "Z 200 biletów sprzedano 60%. Z pozostałych sprzedano potem 25%. Jaki procent wszystkich biletów nadal czeka na sprzedaż?", ["30%","15%","25%","40%"], 0, "Pozostało 40% biletów, a z tego 75% nadal niesprzedane. 0,4 · 0,75 = 0,30."]
    ],
    'e8-powers-plus': [
      [0, "Który iloczyn jest równy 7⁴?", ["7·4","7·7·7","7·7·7·7","4·4·4·4·4·4·4"], 2, "Wykładnik 4 oznacza cztery czynniki równe 7."],
      [1, "Między którymi kolejnymi liczbami całkowitymi leży √52?", ["7 i 8","6 i 7","8 i 9","5 i 6"], 0, "49 < 52 < 64, zatem 7 < √52 < 8."],
      [2, "Który zapis jest notacją wykładniczą liczby 0,00038?", ["38·10⁻⁴","3,8·10⁻⁵","0,38·10⁻³","3,8·10⁻⁴"], 3, "Współczynnik musi należeć do przedziału od 1 włącznie do 10 wyłącznie; 3,8·10⁻⁴=0,00038."],
      [0, "Po którym z podanych działań na potęgach otrzymasz 3⁶?", ["(3²)²","3⁹ : 3³","3³ + 3³","3² · 3³"], 1, "Przy dzieleniu potęg o tej samej podstawie odejmujemy wykładniki: 9−3=6."],
      [1, "Dwa kwadraty mają pola 64 cm² i 144 cm². O ile obwód większego przekracza obwód mniejszego?", ["4 cm","8 cm","16 cm","80 cm"], 2, "Boki mają 8 i 12 cm, więc różnica obwodów to 4·(12−8)=16 cm."],
      [2, "Próbka zawiera 3·10⁶ ziaren. Rozdzielono je równo do 6·10² pojemników. Ile ziaren jest w jednym?", ["5·10³","2·10⁴","5·10⁴","2·10³"], 0, "Iloraz to 0,5·10⁴=5·10³."],
      [0, "W pierwszej rundzie uczestniczy 5 osób. Przed każdą następną rundą liczba uczestników się podwaja. Ile osób jest w piątej rundzie?", ["40","50","160","80"], 3, "Od rundy pierwszej do piątej są cztery podwojenia: 5·2⁴=80."],
      [1, "Która liczba jest równa √18 + √8?", ["√26","5√2","6√2","10√2"], 1, "√18=3√2 i √8=2√2, więc suma to 5√2."],
      [0, "Oceń zdania: I. (−2)⁶ = 2⁶. II. −2⁶ = (−2)⁶. Które są prawdziwe?", ["Tylko I","Tylko II","Oba","Żadne"], 0, "I jest prawdziwe, bo wykładnik jest parzysty. W II minus poza potęgą daje −64, a nawias daje 64."],
      [2, "Masa próbki A to 4,8·10⁻⁵ g, a B to 1,2·10⁻⁶ g. Ile razy A jest cięższa od B?", ["4","10","40","400"], 2, "Iloraz to (4,8 : 1,2)·10¹=40."]
    ],
    'e8-algebra': [
      [0, "Oblicz wartość 2a−3 dla a=−4.", ["5","−5","−11","11"], 2, "2·(−4)−3=−11."],
      [0, "Które wyrażenie jest równe 7x−2x+4?", ["9x+4","5x+4","5x−4","9x−4"], 1, "Łączymy wyrazy podobne: (7−2)x+4."],
      [1, "Pierwsze wyrazy ciągu to 6, 10, 14, 18. Wskaż wzór n-tego wyrazu, jeśli różnica jest stała i n zaczyna się od 1.", ["4n−2","6n","4n+6","4n+2"], 3, "Przyrost to 4, a dla n=1 wzór 4n+2 daje 6."],
      [0, "Karnet kosztuje x zł. Bilet jednorazowy jest o 12 zł tańszy. Który zapis opisuje koszt dwóch karnetów i trzech biletów?", ["5x−36","5x−12","5x+36","6x−36"], 0, "2x+3(x−12)=5x−36."],
      [0, "Prostokąt ma boki x+4 i 2x−1. Który wzór opisuje jego obwód?", ["3x+3","6x+3","6x+6","4x+8"], 2, "2[(x+4)+(2x−1)]=6x+6."],
      [1, "Rząd pierwszy ma 9 miejsc, każdy następny o 3 więcej. Ile miejsc łącznie mają rzędy ósmy i dziewiąty?", ["57","63","60","66"], 1, "Rząd ósmy ma 9+7·3=30, a dziewiąty 33; razem 63."],
      [2, "Które uzasadnienie pokazuje, że suma trzech kolejnych liczb całkowitych zawsze dzieli się przez 3?", ["Ich suma to 3n+1","Każda z tych liczb dzieli się przez 3","Wystarczy sprawdzić 1+2+3","Ich suma to 3n, gdzie n jest środkową liczbą"], 3, "Suma (n−1)+n+(n+1) to 3n."],
      [0, "Dla których wartości x wyrażenia 3(x−2)+x i 4x−6 mają tę samą wartość?", ["Dla wszystkich x","Tylko dla x=0","Tylko dla x=2","Dla żadnej wartości x"], 0, "Po usunięciu nawiasu 3x−6+x=4x−6."],
      [2, "Wskaż argument, że iloczyn dwóch kolejnych liczb całkowitych jest zawsze parzysty.", ["Obie liczby są parzyste","Jedna z liczb jest parzysta, więc iloczyn ma czynnik 2","Ich suma jest parzysta","Iloczyn liczb nieparzystych jest parzysty"], 1, "Spośród kolejnych liczb jedna jest parzysta; wystarczy jeden czynnik 2."],
      [1, "Z 4 patyczków zbudowano kwadrat. Każdy następny kwadrat w rzędzie ma wspólny bok z poprzednim. Ile patyczków oszczędza rząd 20 kwadratów względem 20 osobnych?", ["18","20","19","21"], 2, "Rząd zużywa 4+19·3=61 zamiast 80 patyczków, czyli o 19 mniej."]
    ],
    'e8-equations-plus': [
      [0, "Rozwiąż równanie x−13=−5.", ["−18","8","−8","18"], 1, "Po dodaniu 13 otrzymujemy x=8."],
      [0, "Która liczba spełnia równanie 5x+2=37?", ["5","6","8","7"], 3, "5x=35, więc x=7."],
      [0, "Które równanie ma to samo rozwiązanie co 4x−9=15?", ["4x=24","4x=6","4x=−24","4x=15"], 0, "Do obu stron dodajemy 9."],
      [1, "Książka jest o 16 zł droższa od zeszytu. Razem kosztują 46 zł. Ile kosztuje książka?", ["15 zł","23 zł","31 zł","32 zł"], 2, "x+(x+16)=46, więc zeszyt kosztuje 15 zł, a książka 31 zł."],
      [2, "Długość prostokąta jest o 7 cm większa od szerokości. Obwód wynosi 46 cm. Jaka jest szerokość?", ["7 cm","8 cm","9 cm","16 cm"], 1, "2(x+x+7)=46, więc 4x=32 i x=8 cm."],
      [0, "Rozwiąż równanie 3(2x−5)=4x+9.", ["3","6","9","12"], 3, "6x−15=4x+9, więc 2x=24."],
      [1, "Po wydaniu połowy oszczędności i jeszcze 18 zł Oli zostało 27 zł. Ile miała przed zakupami?", ["90 zł","72 zł","54 zł","45 zł"], 0, "Połowa kwoty przed wydaniem dodatkowych 18 zł to 27+18=45 zł."],
      [2, "Obwód trójkąta to 42 cm. Drugi bok jest dwa razy dłuższy od pierwszego, a trzeci o 2 cm dłuższy od drugiego. Ile mierzy najdłuższy bok?", ["14 cm","16 cm","18 cm","20 cm"], 2, "x+2x+(2x+2)=42, więc x=8, a najdłuższy bok ma 18 cm. Boki 8, 16 i 18 spełniają nierówność trójkąta."],
      [3, "Po rozwinięciu nawiasu równanie 4(x−2)=4x−8 przyjmuje postać 4x−8=4x−8. Ile ma rozwiązań?", ["Jedno","Nieskończenie wiele","Dwa","Żadnego"], 1, "Obie strony są tym samym wyrażeniem dla każdego x."],
      [3, "Dwa kina sprzedały razem 110 biletów. Po zwrocie 8 biletów w pierwszym kinie zostało w nim dwa razy tyle sprzedanych biletów co w drugim. Ile sprzedało pierwsze kino przed zwrotem?", ["68","70","74","76"], 3, "Jeśli drugie sprzedało x, pierwsze przed zwrotem sprzedało 2x+8. Z 3x+8=110 otrzymujemy x=34 i 76 biletów."]
    ],
    'e8-proportion': [
      [0, "Na mapie w skali 1:50 000 odcinek ma 6 cm. Jaka to odległość w terenie?", ["3 km","300 m","30 km","0,03 km"], 0, "6·50 000=300 000 cm, czyli 3 km."],
      [1, "Rowerzysta przejechał 36 km w 2 godziny. Jaka była jego średnia prędkość?", ["12 km/h","16 km/h","18 km/h","72 km/h"], 2, "36 km : 2 h = 18 km/h."],
      [2, "Pięć identycznych zeszytów kosztuje 27,50 zł. Ile kosztują dwa?", ["10 zł","11 zł","12,50 zł","13,75 zł"], 1, "Jeden zeszyt kosztuje 5,50 zł, więc dwa kosztują 11 zł."],
      [0, "W mieszance stosunek soku do wody to 2:5. Ile soku potrzeba na 1,4 l mieszanki?", ["0,2 l","0,28 l","0,5 l","0,4 l"], 3, "Sok to 2 z 7 części, więc 1,4·2/7=0,4 l."],
      [1, "Pociąg przejechał 90 km z prędkością 120 km/h. Ile minut trwała jazda?", ["35","45","50","75"], 1, "90 : 120 = 0,75 godziny, czyli 45 minut."],
      [2, "Maszyna pakuje 180 paczek w 12 minut. Ile zapakuje w 35 minut przy stałej wydajności?", ["525","510","540","630"], 0, "180 : 12 = 15 paczek na minutę, a 15·35=525."],
      [0, "Odcinek 7,5 cm na planie oznacza w rzeczywistości 15 m. Jaka jest skala planu?", ["1:20","1:150","1:200","1:2000"], 2, "15 m to 1500 cm; 7,5:1500=1:200."],
      [1, "Samochód pokonał 30 km w pół godziny, a kolejne 30 km w godzinę. Jaka była średnia prędkość na całej trasie?", ["30 km/h","45 km/h","50 km/h","40 km/h"], 3, "Cała trasa to 60 km w 1,5 godziny; 60 : 1,5=40 km/h."],
      [2, "Do pracy potrzeba 6 osób przez 8 godzin. Ile godzin zajmie ta sama praca 4 osobom przy tej samej wydajności każdej z nich?", ["12","10","6","5"], 0, "Praca wymaga 48 osobogodzin; 48 : 4=12 godzin."],
      [0, "Na planie A odcinek 4 cm oznacza 12 m. Na planie B odcinek 6 cm oznacza 15 m. Na którym planie ten sam obiekt będzie większy?", ["Na A","Na B","Na obu taki sam","Nie można ustalić"], 1, "1 cm oznacza 3 m na A i 2,5 m na B. Ta sama odległość zajmuje więcej centymetrów na planie B."]
    ],
    'e8-geometry': [
      [0, "Kąty trójkąta mają miary 35° i 65°. Ile ma trzeci?", ["70°","80°","90°","100°"], 1, "180°−35°−65°=80°."],
      [1, "Prostokąt ma boki 13 cm i 6 cm. Jakie ma pole?", ["38 cm²","72 cm²","78 cm²","84 cm²"], 2, "Pole to 13·6=78 cm²."],
      [2, "Średnica koła wynosi 14 cm. Jaki jest promień?", ["7 cm","14 cm","21 cm","28 cm"], 0, "Promień to połowa średnicy."],
      [0, "W trójkącie równoramiennym kąt między ramionami ma 38°. Ile ma każdy kąt przy podstawie?", ["38°","52°","69°","71°"], 3, "(180°−38°):2=71°."],
      [1, "Z prostokąta 12 cm na 9 cm wycięto z narożnika kwadrat o boku 4 cm. Jakie jest pole pozostałej figury?", ["88 cm²","92 cm²","96 cm²","104 cm²"], 1, "12·9−4²=92 cm²."],
      [2, "Koło ma promień 6 cm. Jaki jest obwód półkola, razem z jego prostym brzegiem?", ["6π+12 cm","12π+12 cm","6π+6 cm","6π cm"], 0, "Łuk ma 6π cm, a prosty brzeg to średnica 12 cm."],
      [1, "Podstawy trapezu mają 8 i 14 cm, a wysokość 5 cm. Prostokąt o tej samej wysokości ma to samo pole. Jaka jest jego podstawa?", ["10 cm","12 cm","11 cm","22 cm"], 2, "Pole trapezu to 55 cm², więc podstawa prostokąta ma 55:5=11 cm."],
      [0, "Boki trójkąta są całkowite. Dwa krótsze mają 6 i 9 cm. Jaka może być największa długość trzeciego boku?", ["13 cm","15 cm","16 cm","14 cm"], 3, "Trzeci bok jest krótszy od 6+9=15 cm. Największa możliwość to 14 cm."],
      [1, "Z narożnika prostokąta wycięto mniejszy prostokąt tak, że usunięte odcinki brzegu zastąpiły dwa nowe. Jak zmienił się obwód?", ["Nie zmienił się","Zmalał o sumę boków wycięcia","Wzrósł o sumę boków wycięcia","Zależy od pola wycięcia"], 0, "Dwa nowe odcinki mają te same długości co dwa usunięte."],
      [2, "Okrąg o promieniu 10 cm ma taką samą długość jak obwód kwadratu. Ile wynosi bok kwadratu?", ["4π cm","5π cm","10π cm","20π cm"], 1, "Długość okręgu to 20π cm. Dzielimy przez cztery."]
    ],
    'e8-circle-plus': [
      [0, "Przyprostokątne trójkąta prostokątnego mają 9 cm i 12 cm. Ile mierzy przeciwprostokątna?", ["13 cm","15 cm","18 cm","21 cm"], 1, "√(81+144)=15 cm."],
      [1, "Który punkt ma taką samą współrzędną y jak punkt (−3, 4)?", ["(4, −3)","(−3, −4)","(4, 3)","(2, 4)"], 3, "Druga współrzędna musi wynosić 4."],
      [1, "Punkt P=(−2, 7) przesunięto o 5 jednostek w prawo. Gdzie jest teraz?", ["(3, 7)","(−7, 7)","(−2, 12)","(3, 2)"], 0, "Dodajemy 5 tylko do współrzędnej x."],
      [0, "Drabina o długości 10 m opiera się o ścianę. Jej podstawa jest 6 m od ściany. Na jaką wysokość sięga?", ["4 m","6 m","8 m","16 m"], 2, "Wysokość to √(10²−6²)=8 m."],
      [2, "Punkty (−2, 1), (5, 1) i (5, 4) to kolejne wierzchołki prostokąta. Jakie ma pole?", ["18","21","24","28"], 1, "Boki mają 7 i 3 jednostki, a pole 21."],
      [1, "Punkty A=(−6, 2) i B=(4, 2) są końcami odcinka. Który punkt jest jego środkiem?", ["(−1, 2)","(1, 2)","(−2, 2)","(−1, 4)"], 0, "Połowa między −6 i 4 to −1; y zostaje bez zmian."],
      [0, "Działka ma boki 15 m i 20 m i jest prostokątna. O ile krótsza jest droga po przekątnej niż wzdłuż dwóch boków?", ["5 m","8 m","15 m","10 m"], 3, "Przekątna ma √(15²+20²)=25 m, a droga wzdłuż boków 35 m."],
      [2, "Punkty A=(−1, −2), B=(3, −2), C=(3, 1) tworzą trójkąt. Jaki ma obwód?", ["10","11","12","14"], 2, "AB=4, BC=3 i AC=5 z twierdzenia Pitagorasa."],
      [0, "Przekątna kwadratu ma 10 cm. Jakie jest pole tego kwadratu?", ["50 cm²","25 cm²","75 cm²","100 cm²"], 0, "Dla boku a mamy 2a²=10², więc a²=50."],
      [2, "Poziomy odcinek AB ma długość 10 i środek (1, −3). Punkt A leży na lewo od B. Gdzie leży A?", ["(−9, −3)","(−4, −3)","(1, −8)","(6, −3)"], 1, "A leży 5 jednostek w lewo od środka, więc x=1−5=−4."]
    ],
    'e8-space': [
      [0, "Ile kwadratów musi zawierać siatka sześcianu?", ["4","5","6","8"], 2, "Sześcian ma sześć kwadratowych ścian."],
      [1, "Ile litrów to 8 dm³?", ["8 l","0,8 l","80 l","800 l"], 0, "Jeden decymetr sześcienny to jeden litr."],
      [1, "Jaką objętość ma prostopadłościan o wymiarach 7 cm, 4 cm i 3 cm?", ["14 cm³","42 cm³","74 cm³","84 cm³"], 3, "7·4·3=84 cm³."],
      [0, "Otwarta skrzynka ma dno 6×4 dm i wysokość 3 dm. Ile dm² materiału potrzeba na dno i cztery ściany bez zakładek?", ["60","84","96","108"], 1, "24+2·18+2·12=84 dm²."],
      [1, "Akwarium o podstawie 50 cm × 30 cm napełniono do wysokości 20 cm. Ile litrów wody wlano?", ["3 l","15 l","30 l","300 l"], 2, "50·30·20=30 000 cm³, czyli 30 l."],
      [2, "Dwa sześciany o krawędzi 3 cm sklejono pełnymi ścianami. Jakie pole ma powierzchnia zewnętrzna nowej bryły?", ["90 cm²","54 cm²","99 cm²","108 cm²"], 0, "Z dwunastu ścian dwa kwadraty są ukryte: 10·9=90 cm²."],
      [1, "Ostrosłup i graniastosłup mają takie same podstawy i wysokość. Graniastosłup ma 96 cm³. O ile większa jest jego objętość?", ["24 cm³","32 cm³","48 cm³","64 cm³"], 3, "Ostrosłup ma 96:3=32 cm³, a różnica wynosi 64 cm³."],
      [2, "Do pojemnika w kształcie sześcianu o boku 4 dm wlano 48 l wody. Jak wysoko sięga woda?", ["2 dm","3 dm","3,5 dm","4 dm"], 1, "Pole dna to 16 dm². Wysokość to 48:16=3 dm."],
      [2, "Wszystkie wymiary pudełka zwiększono dwukrotnie. Jak zmieni się stosunek objętości do pola powierzchni?", ["Zmaleje dwukrotnie","Nie zmieni się","Wzrośnie dwukrotnie","Wzrośnie czterokrotnie"], 2, "Objętość rośnie osiem razy, a pole cztery razy, więc ich iloraz rośnie dwa razy."],
      [1, "Graniastosłup ma w podstawie trójkąt prostokątny o przyprostokątnych 6 i 8 cm. Jego objętość to 240 cm³. Ile wynosi wysokość bryły?", ["10 cm","5 cm","12 cm","20 cm"], 0, "Pole podstawy to 6·8:2=24 cm², więc wysokość to 240:24=10 cm."]
    ],
    'e8-data': [
      [0, "Liczby wypożyczeń od poniedziałku do czwartku wyniosły kolejno 12, 9, 17 i 14. Kiedy było najwięcej wypożyczeń?", ["W poniedziałek","We wtorek","W środę","W czwartek"], 2, "Największa liczba to 17, przypisana do środy."],
      [1, "Jaka jest mediana liczb 8, 3, 7, 4, 10?", ["7","6","8","10"], 0, "Po uporządkowaniu mamy 3, 4, 7, 8, 10; środkowa liczba to 7."],
      [1, "Jaki jest rozstęp wyników 11, 18, 13, 22, 17?", ["7","9","10","11"], 3, "Rozstęp to 22−11=11."],
      [0, "Tabela pokazuje 4 głosy na kino, 7 na rowery i 9 na basen. O ile punktów procentowych udział głosów na basen przewyższa udział kina?", ["5","25","20","45"], 1, "Różnica to 5 z 20 głosów, czyli 25 punktów procentowych."],
      [2, "Średnia czterech wyników to 12. Trzy z nich wynoszą 9, 10 i 15. Ile wynosi czwarty?", ["12","13","14","16"], 2, "Łączna suma to 48, a podane wyniki sumują się do 34."],
      [0, "W tabeli liczby uczniów przy ocenach 2, 3, 4 i 5 to odpowiednio 2, 4, 7 i 3. Ilu uczniów ma ocenę co najmniej 4?", ["10","7","9","12"], 0, "Liczymy oceny 4 i 5: 7+3=10."],
      [1, "Pięć wyników wynosi 4, 4, 5, 7 i 10. Zmieniono 10 na 20. Która miara nie zmieniła się?", ["Średnia","Rozstęp","Największa wartość","Mediana"], 3, "Środkowa wartość nadal wynosi 5."],
      [2, "W grupie 10 uczniów średnia wynosi 12 punktów, a w grupie 5 uczniów 18 punktów. Jaka jest średnia wszystkich 15 uczniów?", ["13","14","15","16"], 1, "Suma punktów to 10·12+5·18=210. 210:15=14."],
      [2, "Pięć różnych liczb całkowitych ma medianę 10 i najmniejszą wartość 7. Która liczba może być drugą po uporządkowaniu?", ["7","10","9","11"], 2, "Druga liczba musi być pomiędzy 7 i 10; przykładowy zbiór to 7, 9, 10, 11, 12."],
      [0, "Z dwóch klas zebrano głosy. W 8A wycieczkę poparło 12 z 20 uczniów, a w 8B 15 z 30. Które stwierdzenie jest poprawne?", ["8A ma większy odsetek, ale mniej głosów za","8B ma większy odsetek i więcej głosów za","Odsetki są równe","8A ma większy odsetek i więcej głosów za"], 0, "8A ma 60%, a 8B 50%; jednocześnie 12 jest mniejsze od 15."]
    ],
    'e8-reasoning': [
      [0, "W worku jest 5 kul białych i 3 czarne. Każda ma tę samą szansę wylosowania. Jakie jest prawdopodobieństwo wylosowania czarnej kuli?", ["3/5","3/8","5/8","1/2"], 1, "Trzy z ośmiu równoprawdopodobnych wyników sprzyjają zdarzeniu."],
      [1, "Do wyboru są 3 kanapki i 4 napoje. Ile zestawów po jednej kanapce i jednym napoju można utworzyć?", ["7","10","11","12"], 3, "Do każdej z trzech kanapek pasują cztery wybory napoju."],
      [0, "Rzucamy uczciwą kostką. Jaka jest szansa uzyskania liczby większej od 4?", ["1/3","1/6","1/2","2/3"], 0, "Sprzyjają 5 i 6, zatem 2/6=1/3."],
      [1, "Z cyfr 1, 3, 7, 9 tworzymy liczby dwucyfrowe bez powtarzania cyfr. Ile liczb powstanie?", ["8","10","12","16"], 2, "Wybieramy pierwszą cyfrę na cztery sposoby, drugą na trzy."],
      [0, "Losujemy jedną liczbę od 1 do 20 włącznie, z jednakową szansą. Jaka jest szansa, że liczba nie będzie wielokrotnością 4?", ["1/4","3/4","4/5","1/5"], 1, "Jest pięć wielokrotności 4, więc pozostałych liczb jest 15; 15/20=3/4."],
      [1, "Rzucamy dwiema niezależnymi uczciwymi monetami. Jaka jest szansa, że orzeł wypadnie dokładnie raz?", ["1/2","1/4","3/4","1"], 0, "Sprzyjają OR i RO, dwa spośród czterech równoprawdopodobnych wyników."],
      [1, "Na półce są trzy różne książki. Na ile sposobów można ustawić je w rzędzie, jeśli wskazana książka nie może stać pośrodku?", ["2","3","5","4"], 3, "Wskazana książka ma dwa możliwe krańce, a pozostałe dwie książki można ustawić na dwa sposoby."],
      [0, "W pudełku są 4 zielone i 6 żółtych żetonów. Ile zielonych trzeba dołożyć, aby losowanie zielonego dawało szansę 1/2?", ["1","3","2","4"], 2, "Przy szansie 1/2 obu kolorów musi być tyle samo, więc dokładamy 6−4=2."],
      [1, "Z cyfr 0, 1, 2, 3 wybieramy dwie różne cyfry do zapisu liczby dwucyfrowej. Ile takich liczb jest parzystych?", ["5","4","6","7"], 0, "Końcówka 0 daje 3 wybory dziesiątek, końcówka 2 daje 2 wybory: 1 albo 3."],
      [1, "Rzucamy dwiema niezależnymi uczciwymi kostkami. Która suma oczek jest bardziej prawdopodobna: 5 czy 9?", ["5","Obie mają tę samą szansę","9","Nie da się ustalić"], 1, "Obie sumy mają po cztery pary uporządkowane: 5 z 1+4, 2+3, 3+2, 4+1; 9 z 3+6, 4+5, 5+4, 6+3."]
    ]
  };
  Object.entries(chapterExams).forEach(([id, rows]) => {
    const spec = smart.specs[id];
    spec.examRows = rows.map(([path, question, options, correct, solution]) =>
      [...q(question, options, correct, '', solution), spec.paths[path].id]);
  });

  smart.specs['e8-numbers'].examRows = [
    [...q('Na osi liczbowej punkt P leży 4 jednostki na lewo od punktu o współrzędnej 1. Jaka jest współrzędna P?', ['−5','−3','3','5'], 1, '', 'Ruch w lewo oznacza odejmowanie: 1−4=−3.'), 'e8-integers'],
    [...q('Ile wynosi 72 : (5 + 4) − 3?', ['5','8','9','12'], 0, '', 'Najpierw nawias: 5+4=9. Następnie 72:9=8, a 8−3=5.'), 'e8-calc'],
    [...q('Która liczba po zaokrągleniu do setek daje 1800, a do dziesiątek 1750?', ['1748','1756','1752','1849'], 2, '', '1752 zaokrągla się do 1800, bo przekracza 1750, i do 1750, bo cyfra jedności to 2.'), 'e8-number-reasoning'],
    [...q('Rano było −7°C. Do południa temperatura wzrosła o 11°C, a wieczorem spadła o 9°C względem południa. Jaka była wieczorem?', ['−27°C','−5°C','5°C','13°C'], 1, '', 'W południe było −7+11=4°C. Wieczorem 4−9=−5°C.'), 'e8-integers'],
    [...q('Szkoła zamówiła 8 pudełek po 24 ołówki. Po odłożeniu 12 sztuk rozdzielono resztę równo między 6 klas. Ile ołówków dostała każda klasa?', ['28','30','32','34'], 1, '', 'Po odłożeniu zostało 8·24−12=180 ołówków. Każda klasa dostała 180:6=30.'), 'e8-calc'],
    [...q('Z 42 czerwonych i 30 niebieskich kartek trzeba zrobić jak najwięcej jednakowych zestawów, bez reszty. Ile kartek będzie w jednym zestawie?', ['6','7','12','18'], 2, '', 'NWD(42,30)=6, więc powstanie 6 zestawów. Każdy ma 42:6+30:6=7+5=12 kartek.'), 'e8-number-reasoning'],
    [...q('Dwa autobusy odjechały o 8:10. Pierwszy odjeżdża co 12 minut, drugi co 18 minut. O której znowu odjadą jednocześnie po raz pierwszy?', ['8:22','8:28','8:40','8:46'], 3, '', 'NWW(12,18)=36, więc najbliższy wspólny odjazd jest 36 minut po 8:10, czyli o 8:46.'), 'e8-number-reasoning'],
    [...q('Punkty A i B na osi są oddalone od siebie o 14 jednostek. Punkt A ma współrzędną −5, a punkt B jest bliżej zera niż A. Co można stwierdzić?', ['B ma współrzędną 9','B ma współrzędną −19','B ma współrzędną −9','Taki punkt B nie istnieje'], 3, '', 'Punkty oddalone od −5 o 14 to −19 i 9. Oba są dalej od zera niż −5.'), 'e8-integers'],
    [...q('W liczbie 4□2 wstaw cyfrę tak, by liczba była podzielna przez 6, lecz nie przez 9. Która odpowiedź podaje poprawną cyfrę i poprawne uzasadnienie?', ['0 — liczba jest parzysta, a suma cyfr to 6','3 — suma cyfr to 9, więc liczba nie dzieli się przez 9','2 — sama parzystość wystarczy','6 — suma cyfr to 12, więc liczba dzieli się przez 9'], 0, '', '402 jest parzysta, a suma cyfr 6 dzieli się przez 3, ale nie przez 9. Cyfra 6 też daje liczbę spełniającą warunek, ale uzasadnienie w D jest fałszywe.'), 'e8-number-reasoning'],
    [...q('Liczba uczestników jest większa niż 40 i mniejsza niż 70. Przy podziale na grupy po 6 zostaje 1 osoba, a przy podziale po 8 też zostaje 1 osoba. Ilu jest uczestników?', ['43','47','49','65'], 2, '', 'Po odjęciu jednej osoby liczba musi dzielić się przez 6 i 8, czyli przez NWW(6,8)=24. Jedyna wielokrotność 24 od 40 do 68 to 48, więc uczestników jest 49.'), 'e8-number-reasoning']
  ];

  Object.assign(smart.specs['e8-fractions'], {
    examRows: [
      q('Z 24 litrów soku rozlano 3/8 do butelek. Z pozostałego soku odłożono jeszcze 1/3. Ile litrów zostało?', ['10 l','12 l','15 l','6 l'], 0, '', 'Po rozlaniu zostało 24−9=15 l. Odłożono 5 l, więc zostało 10 l.'),
      q('Na odcinku od 0 do 2 zaznaczono 10 równych przedziałów. Punkt P jest na siódmej kresce za zerem. Jaka jest jego współrzędna?', ['7/10','1 2/5','1 3/5','2 1/5'], 1, '', 'Odstęp to 2/10=1/5. Siedem odstępów daje 7/5=1 2/5.'),
      q('Przepis na 6 porcji wymaga 3/4 kg mąki. Masz 1 1/8 kg mąki. Ile porcji przygotujesz, zachowując proporcje?', ['7','8','9','12'], 2, '', 'Na porcję przypada 3/4 : 6=1/8 kg. Z 9/8 kg powstanie 9 porcji.'),
      q('Oceń zdania. I. 5/12 > 0,4. II. 7/8 < 0,86. Które są prawdziwe?', ['oba','tylko II','żadne','tylko I'], 3, '', '5/12 > 2/5, bo 25>24. Natomiast 7/8=0,875 > 0,86.'),
      q('Kasia przeszła 2 3/4 km rano i 1 5/8 km po południu. Do celu 5 km brakuje jej…', ['5/8 km','3/8 km','7/8 km','1 1/8 km'], 0, '', 'Suma to 4 3/8 km. Do 5 km brakuje 5/8 km.'),
      q('W dzbanku jest 2,4 l napoju. Rozlano go do szklanek po 3/10 l. Ile pełnych szklanek otrzymano?', ['6','8','10','12'], 1, '', '2,4 : 0,3=8.'),
      q('Przeczytano 5/9 książki. Do końca zostało 64 stron. Ile stron ma książka?', ['80','115','144','160'], 2, '', 'Pozostałe 4/9 to 64 strony. Jedna dziewiąta to 16 stron, a całość to 144.'),
      q('Przed zajęciami dostępne było 3 1/2 m wstążki. Odcięto trzy odcinki po 3/4 m. Ile wstążki zostało?', ['3/4 m','1 m','1 3/4 m','1 1/4 m'], 3, '', 'Odcięto 9/4 m. Pozostało 14/4−9/4=5/4 m, czyli 1 1/4 m.'),
      q('Dwa pojemniki mieszczą tyle samo. Pierwszy jest wypełniony w 2/3, drugi w 3/5. O jaką część pojemności różnią się ilości wody?', ['1/15','1/8','2/15','1/5'], 0, '', '2/3−3/5=10/15−9/15=1/15.'),
      q('Z 4 kg jabłek zużyto 1 3/5 kg. Resztę rozdzielono równo na 6 paczek. Ile waży jedna paczka?', ['0,25 kg','0,4 kg','0,6 kg','2,4 kg'], 1, '', 'Pozostało 4−1,6=2,4 kg, więc każda paczka waży 2,4 : 6=0,4 kg.')
    ],
    lead: 'Najpierw rozpoznaj znaczenie ułamka, a potem wybierz postać, w której rachunek będzie najprostszy.',
    formulas: ['a/b = a : b', 'a/b = (a·k)/(b·k)', 'a/b + c/d = (ad+bc)/bd', 'a/b : c/d = a/b · d/c'],
    theory: [
      ['Znaczenie ułamka', 'Mianownik mówi, na ile równych części podzielono całość, a licznik — ile z tych części wybrano. Ułamek jest też ilorazem licznika przez mianownik.'],
      ['Równoważność i porównywanie', 'Rozszerzanie i skracanie przez tę samą liczbę nie zmienia wartości ułamka. Do porównania można użyć wspólnego mianownika, zapisu dziesiętnego albo położenia względem 1.'],
      ['Działania na ułamkach', 'Przy dodawaniu i odejmowaniu potrzebny jest wspólny mianownik. Przy mnożeniu mnożymy liczniki i mianowniki, a przy dzieleniu mnożymy przez odwrotność.'],
      ['Zapis dziesiętny', 'Ułamek zwykły zamieniamy na dziesiętny przez dzielenie licznika przez mianownik. W działaniach pisemnych wyrównujemy miejsca po przecinku.']
    ]
  });
  Object.assign(smart.specs['e8-geometry'], {
    lead: 'Nazwij figurę, odczytaj oznaczenia i dopiero wtedy wybierz własność, konstrukcję pomocniczą lub wzór.',
    formulas: ['α+β=180°', 'α+β+γ=180°', 'P△=a·h/2', 'P trapezu=(a+b)·h/2', 'l=2πr', 'P koła=πr²'],
    theory: [
      ['Kąty i proste', 'Kąty przyległe sumują się do 180°, wierzchołkowe są równe, a przy prostych równoległych korzystamy z kątów odpowiadających i naprzemianległych.'],
      ['Trójkąty i czworokąty', 'Suma kątów trójkąta wynosi 180°. W czworokątach rozpoznawaj równoległość boków, równość kątów i własności przekątnych.'],
      ['Pola i figury złożone', 'Wysokość jest prostopadła do podstawy. Figurę złożoną dziel na części o znanych polach albo odejmij brakujący fragment.'],
      ['Koło i okrąg', 'Okrąg jest brzegiem koła. Średnica ma długość dwóch promieni; długość okręgu liczymy z 2πr, a pole koła z πr².']
    ]
  });
  Object.assign(smart.specs['e8-circle-plus'], {
    lead: 'Zaznacz kąt prosty albo współrzędne punktów; w tym kursie nie ma wzorów na koło — są tylko Pitagoras i geometria współrzędnych.',
    formulas: ['a²+b²=c²', 'a²+b²=c² ⇒ trójkąt prostokątny', 'S=((x₁+x₂)/2,(y₁+y₂)/2)', 'odcinek poziomy=|x₂−x₁|', 'odcinek pionowy=|y₂−y₁|'],
    theory: [
      ['Twierdzenie Pitagorasa', 'W trójkącie prostokątnym suma kwadratów przyprostokątnych jest równa kwadratowi przeciwprostokątnej. Najdłuższy bok musi leżeć naprzeciw kąta prostego.'],
      ['Twierdzenie odwrotne i przekątne', 'Jeżeli dla boków zachodzi a²+b²=c², trójkąt jest prostokątny. Przekątne prostokątów tworzą trójkąty prostokątne, więc można obliczać je tym samym twierdzeniem.'],
      ['Punkty i odcinki', 'Współrzędne czytamy w kolejności x, potem y. Długość odcinka poziomego lub pionowego jest wartością bezwzględną różnicy odpowiednich współrzędnych.'],
      ['Środek i figury w układzie', 'Współrzędne środka są średnimi współrzędnych końców. Przy prostokątach i kwadratach wykorzystuj poziome oraz pionowe boki i podpisany szkic.']
    ]
  });

  textbook['e8-geometry'].formulas = [
    ...textbook['e8-geometry'].formulas,
    { name: 'Średnica', formula: 'd = 2r', use: 'Średnica przechodzi przez środek i ma długość dwóch promieni.' },
    { name: 'Długość okręgu', formula: 'l = 2πr = πd', use: 'Okrąg jest brzegiem koła; wynik można pozostawić z π.' },
    { name: 'Pole koła', formula: 'P = πr²', use: 'Do wzoru podstaw promień, nie średnicę.' },
    { name: 'Półkole', formula: 'P = πr²/2', use: 'Przy obwodzie półkola dolicz średnicę.' }
  ];
  textbook['e8-geometry'].skills = ['rodzaje kątów', 'kąty przy prostych równoległych', 'własności trójkątów', 'czworokąty i wielokąty', 'obwody i pola', 'figury złożone', 'długość okręgu', 'pole koła'];
  textbook['e8-fractions'].skills = ['znaczenie licznika i mianownika', 'porównywanie ułamków', 'skracanie i rozszerzanie', 'liczby mieszane', 'dodawanie i odejmowanie', 'mnożenie i dzielenie', 'ułamki dziesiętne', 'zaokrąglanie liczb dziesiętnych'];
  textbook['e8-geometry'].visuals = [
    { type: 'angles', title: 'Kąty przy przecięciu prostych', caption: 'Zaznacz równe kąty i pary sumujące się do 180°.' },
    { type: 'composite', title: 'Figura złożona', caption: 'Podziel figurę na prostsze części albo odejmij brakujący fragment.' },
    { type: 'circle', title: 'Promień, średnica i styczna', caption: 'Promień do punktu styczności jest prostopadły do stycznej.' }
  ];
  textbook['e8-circle-plus'].formulas = textbook['e8-circle-plus'].formulas.filter(item => !['Średnica', 'Długość okręgu', 'Pole koła', 'Półkole — pole', 'Półkole — obwód', 'Pierścień', 'Skala obwodu', 'Skala pola', 'Środek odcinka'].includes(item.name));
  textbook['e8-circle-plus'].formulas.push(
    { name: 'Środek odcinka', formula: 'S=((x₁+x₂)/2,(y₁+y₂)/2)', use: 'Uśrednij osobno współrzędne x i y.' },
    { name: 'Odcinek poziomy', formula: '|x₂−x₁|', use: 'Współrzędne y końców są równe.' },
    { name: 'Odcinek pionowy', formula: '|y₂−y₁|', use: 'Współrzędne x końców są równe.' },
    { name: 'Odległość punktów', formula: 'AB=√((x₂−x₁)²+(y₂−y₁)²)', use: 'Różnice współrzędnych są przyprostokątnymi pomocniczego trójkąta.' },
    { name: 'Odbicie względem osi y', formula: '(x,y) → (−x,y)', use: 'Zmienia się tylko znak pierwszej współrzędnej.' },
    { name: 'Odbicie względem osi x', formula: '(x,y) → (x,−y)', use: 'Zmienia się tylko znak drugiej współrzędnej.' }
  );
  textbook['e8-circle-plus'].skills = ['rozpoznawanie trójkąta prostokątnego', 'twierdzenie Pitagorasa', 'twierdzenie odwrotne', 'przekątna kwadratu', 'przekątna prostokąta', 'odczytywanie punktów', 'środek odcinka', 'figury w układzie współrzędnych'];
  textbook['e8-circle-plus'].visuals = [
    { type: 'pythagoras', title: 'Trójkąt prostokątny 3–4–5', caption: 'Przeciwprostokątna leży naprzeciw kąta prostego.' },
    { type: 'coordinates', title: 'Punkt w układzie współrzędnych', caption: 'Najpierw odczytaj x, potem y.' },
    { type: 'coordinate-segment', title: 'Odcinek i jego środek', caption: 'Długość i środek odcinka wynikają z położenia jego końców.' }
  ];

  window.E8_COURSE_META = {
    'e8-fractions': { goal: 'Rozumieć ułamki i swobodnie przechodzić między zapisem zwykłym a dziesiętnym.', intuition: 'Mianownik dzieli całość, licznik wybiera części.', caption: 'Ten sam fragment całości można opisać różnymi równoważnymi ułamkami.', method: ['Nazwij całość i rodzaj działania.', 'Sprowadź ułamki do wygodnej postaci.', 'Oblicz, skróć i sprawdź wielkość wyniku.'], trap: 'Przy dodawaniu i odejmowaniu ułamków mianowniki muszą być wspólne.', tips: ['porównywanie', 'skracanie', 'cztery działania', 'zapis dziesiętny'] },
    'e8-geometry': { goal: 'Rozpoznawać własności figur i dobierać wzór do danych na rysunku.', intuition: 'Czytelny szkic porządkuje kąty, długości, wysokości i promienie.', caption: 'Każdy znak na rysunku niesie informację potrzebną do rozwiązania.', method: ['Podpisz dane i szukaną wielkość.', 'Zaznacz wysokość, kąt lub promień.', 'Zapisz wzór, oblicz i dopisz jednostkę.'], trap: 'Wysokość musi być prostopadła do podstawy, a we wzorze na koło używamy promienia.', tips: ['kąty', 'pola', 'figury złożone', 'koło i okrąg'] },
    'e8-circle-plus': { goal: 'Stosować Pitagorasa i współrzędne wyłącznie tam, gdzie spełnione są ich warunki.', intuition: 'Kąt prosty uruchamia Pitagorasa, a układ osi zamienia położenie na liczby.', caption: 'Trójkąt 3–4–5 pokazuje zależność boków, a osie porządkują położenie punktów.', method: ['Zaznacz kąt prosty albo współrzędne końców.', 'Wybierz zależność i podstaw dane.', 'Sprawdź długość, położenie i jednostkę.'], trap: 'Twierdzenie Pitagorasa działa tylko w trójkącie prostokątnym.', tips: ['Pitagoras', 'przekątne', 'punkty', 'środek odcinka'] },
    'e8-space': { goal: 'Łączyć bryłę z jej siatką oraz odróżniać pole powierzchni od objętości.', intuition: 'Siatka pokazuje wszystkie ściany, a objętość opisuje wnętrze bryły.', caption: 'Rozłożona bryła pozwala policzyć każdą ścianę dokładnie raz.', method: ['Rozpoznaj podstawę, ściany i wysokość.', 'Wybierz pole powierzchni albo objętość.', 'Oblicz i użyj właściwej potęgi jednostki.'], trap: 'Pole zapisujemy w cm², a objętość w cm³.', tips: ['siatki', 'pole powierzchni', 'objętość', 'pojemność'] },
    'e8-data': { goal: 'Czytać dane z uwzględnieniem skali i wyciągać tylko uzasadnione wnioski.', intuition: 'Tytuł, legenda, skala i jednostka są częścią informacji.', caption: 'Wykres pokazuje dane, a miary statystyczne pomagają je podsumować.', method: ['Przeczytaj tytuł, osie i legendę.', 'Uporządkuj lub odczytaj potrzebne dane.', 'Policz miarę i sformułuj wniosek w kontekście.'], trap: 'Średnia nie musi być jedną z obserwowanych wartości i silnie reaguje na wartości odstające.', tips: ['wykresy', 'średnia', 'mediana', 'rozstęp'] },
    'e8-reasoning': { goal: 'Systematycznie zliczać możliwości i obliczać prawdopodobieństwo bez pomijania wyników.', intuition: 'Tabela lub drzewko zamienia chaos możliwości w kompletną listę.', caption: 'Wyniki sprzyjające są częścią wszystkich jednakowo możliwych wyników.', method: ['Zapisz wszystkie wyniki tabelą lub drzewkiem.', 'Zaznacz wyniki sprzyjające.', 'Utwórz ułamek, skróć go i sprawdź zakres od 0 do 1.'], trap: 'Mianownik zawiera wszystkie jednakowo możliwe wyniki, nie tylko te sprzyjające.', tips: ['reguła mnożenia', 'przestrzeń wyników', 'zdarzenie przeciwne', 'prawdopodobieństwo'] }
  };
  window.E8_COURSE_FOCUS = {
    'e8-fractions': { label: 'UŁAMKI', formula: '3/4 = 6/8 = 0,75', items: ['równoważne zapisy tej samej liczby', 'wspólny mianownik przy dodawaniu', 'skrót wyniku na końcu'] },
    'e8-geometry': { label: 'FIGURY PŁASKIE', formula: 'rysunek → własność → wzór → jednostka', items: ['kąty wynikają z położenia prostych', 'pole zależy od właściwej wysokości', 'koło liczymy z promienia'] },
    'e8-circle-plus': { label: 'PITAGORAS I WSPÓŁRZĘDNE', formula: 'a²+b²=c²  ·  A=(x,y)', items: ['Pitagoras wymaga kąta prostego', 'x odczytujemy przed y', 'różnica współrzędnych daje długość odcinka osiowego'] },
    'e8-space': { label: 'BRYŁY', formula: 'Pc — powierzchnia  ·  V — objętość', items: ['siatka pokazuje wszystkie ściany', 'V=Pp·H dla graniastosłupa', '1 l = 1 dm³'] },
    'e8-data': { label: 'DANE', formula: 'średnia = suma/liczba danych', items: ['najpierw skala i legenda', 'mediana wymaga uporządkowania', 'rozstęp = max−min'] },
    'e8-reasoning': { label: 'PRAWDOPODOBIEŃSTWO', formula: 'P(A)=wyniki sprzyjające/wszystkie wyniki', items: ['zliczaj systematycznie', 'wyniki muszą być jednakowo możliwe', '0≤P(A)≤1'] }
  };
  window.E8_THEORY_EXAMPLES = {
    'e8-fractions': [['3/4 = 6/8', 'Rozszerzenie licznika i mianownika przez tę samą liczbę nie zmienia wartości ułamka.'], ['1/3+1/6=1/2', 'Wspólny mianownik 6 daje 2/6+1/6=3/6=1/2.'], ['2 1/4 = 9/4', 'Dwie całości to 8/4, a po dodaniu 1/4 otrzymujemy 9/4.'], ['7/20=0,35', 'Dzielimy 7 przez 20 albo rozszerzamy ułamek do mianownika 100.']],
    'e8-geometry': [['110°+70°=180°', 'Kąty przyległe tworzą kąt półpełny.'], ['P△=8·5/2=20 cm²', 'Wysokość 5 cm musi być prostopadła do wybranej podstawy 8 cm.'], ['P=P₁+P₂', 'Figurę złożoną dzielimy na części, których pola umiemy obliczyć.'], ['l=2π·4=8π cm', 'Długość okręgu o promieniu 4 cm pozostawiamy w dokładnej postaci z π.']],
    'e8-circle-plus': [['3²+4²=5²', 'Równość 9+16=25 potwierdza zależność boków trójkąta prostokątnego.'], ['d=√(6²+8²)=10', 'Przekątna prostokąta jest przeciwprostokątną trójkąta o bokach 6 i 8.'], ['A=(−2,3)', 'Najpierw idziemy 2 jednostki w lewo, potem 3 w górę.'], ['S=((−2+6)/2,(1+5)/2)=(2,3)', 'Współrzędne środka są średnimi odpowiednich współrzędnych końców.']],
    'e8-space': [['Pc=2(ab+ac+bc)', 'Pole powierzchni prostopadłościanu jest sumą pól trzech par ścian.'], ['V=Pp·H', 'Objętość graniastosłupa otrzymujemy, mnożąc pole podstawy przez wysokość bryły.'], ['Vost=1/3·Pp·H', 'Ostrosłup o tej samej podstawie i wysokości ma trzy razy mniejszą objętość.'], ['2 l = 2 dm³', 'Litr jest równy decymetrowi sześciennemu.']],
    'e8-data': [['4 działki·5 osób=20 osób', 'Skalę osi odczytujemy przed wysokością słupka.'], ['(4+6+8)/3=6', 'Średnia dzieli sumę wyników przez ich liczbę.'], ['2,4,7,9,12 → mediana 7', 'Po uporządkowaniu pięciu wartości wybieramy środkową.'], ['14−6=8', 'Rozstęp jest różnicą wartości największej i najmniejszej.']],
    'e8-reasoning': [['3 bluzki·2 pary spodni=6 zestawów', 'Reguła mnożenia zlicza wszystkie pary kolejnych wyborów.'], ['OO, OR, RO, RR', 'Drzewko dwóch rzutów monetą pokazuje cztery wyniki elementarne.'], ['P(parzysta)=3/6=1/2', 'Na kostce sprzyjają wyniki 2, 4 i 6 spośród sześciu.'], ['P(Ā)=1−P(A)', 'Zdarzenie przeciwne obejmuje wszystkie wyniki nienależące do A.']]
  };

  const examDataTasks = [
    ["e8-numbers",1,"W magazynie było 120 paczek. O ile końcowy stan był większy od początkowego?","6;12;18;24",1,"Przyjęto 4·18=72 paczki i wydano 3·20=60, więc stan wzrósł o 12.",["Operacja","Liczba partii","Paczek w partii"],[["Przyjęcie","4","18"],["Wydanie","3","20"]]],
    ["e8-fractions",8,"Dwa zbiorniki mają podane pojemności i stopień napełnienia. W którym jest więcej wody i o ile?","W A o 2 l;W B o 2 l;W A o 4 l;W obu tyle samo",0,"W A jest 30·3/5=18 l, a w B 24·2/3=16 l.",["Zbiornik","Pojemność","Napełnienie"],[["A","30 l","3/5"],["B","24 l","2/3"]]],
    ["e8-percent-plus",6,"Dwa sklepy sprzedają ten sam zestaw. Po rabacie trzeba doliczyć dostawę. Gdzie zapłacisz mniej i o ile?","W A o 1 zł;W B o 1 zł;W A o 5 zł;W B o 5 zł",0,"A: 160·0,75+12=132 zł. B: 150·0,88+1=133 zł. Sklep A jest tańszy o 1 zł.",["Sklep","Cena","Rabat","Dostawa"],[["A","160 zł","25%","12 zł"],["B","150 zł","12%","1 zł"]]],
    ["e8-powers-plus",4,"Dwa kwadraty mają pola podane w tabeli. Czy taśma długości 100 cm wystarczy na obramowanie obu, bez zakładek?","Tak, zostanie 4 cm;Tak, wystarczy dokładnie;Nie, brakuje 4 cm;Nie, brakuje 8 cm",2,"Boki mają 10 cm i 16 cm. Potrzeba 4·(10+16)=104 cm.",["Kwadrat","Pole"],[["A","100 cm²"],["B","256 cm²"]]],
    ["e8-algebra",4,"Ceny podano w tabeli. Które wyrażenie opisuje różnicę kosztów: trzy bilety normalne minus dwa ulgowe?","x+8;x−8;5x−8;3x−4",0,"3x−2(x−4)=x+8.",["Rodzaj","Cena"],[["Normalny","x zł"],["Ulgowy","(x−4) zł"]]],
    ["e8-equations-plus",3,"Kupiono łącznie 9 biletów i zapłacono 114 zł. Ile kupiono biletów normalnych?","3;4;5;6",2,"Jeśli normalnych jest x, to 14x+11(9−x)=114. Stąd 3x=15.",["Bilet","Cena"],[["Normalny","14 zł"],["Ulgowy","11 zł"]]],
    ["e8-proportion",7,"Rowerzysta przejechał dwie części trasy. Ile wyniosła jego średnia prędkość na całej trasie?","15 km/h;16 km/h;18 km/h;20 km/h",2,"Cała droga to 27 km w 90 min, czyli 27:1,5=18 km/h.",["Odcinek","Droga","Czas"],[["I","9 km","45 min"],["II","18 km","45 min"]]],
    ["e8-geometry",4,"Podłogę o wymiarach 8 m na 6 m trzeba pokryć wykładziną z wyjątkiem dwóch wnęk. Ile metrów kwadratowych wykładziny potrzeba?","37;39;41;43",1,"Pole podłogi to 48 m². Odejmujemy 2·3=6 m² oraz 1·3=3 m².",["Wnęka","Wymiary"],[["A","2 m × 3 m"],["B","1 m × 3 m"]]],
    ["e8-circle-plus",7,"Porównaj drogę bezpośrednią z A do C z drogą przez B. O ile krótsza jest droga bezpośrednia?","2;4;6;8",1,"AB=6 i BC=8, a AC=√(36+64)=10. Różnica to 6+8−10=4.",["Punkt","x","y"],[["A","0","0"],["B","6","0"],["C","6","8"]]],
    ["e8-space",4,"Do dwóch pustych pojemników wlano łącznie 45 l wody. Najpierw napełniono A po brzegi. Do jakiej wysokości sięga woda w B?","1 dm;1,5 dm;2 dm;3 dm",2,"A mieści 5·3·1=15 l. Pozostało 30 l, a dno B ma 15 dm², więc wysokość to 2 dm.",["Pojemnik","Dno","Wysokość"],[["A","5 dm × 3 dm","1 dm"],["B","5 dm × 3 dm","4 dm"]]],
    ["e8-data",7,"Tabela podaje liczbę uczniów uzyskujących poszczególne wyniki. Która para poprawnie podaje medianę i średnią?","Mediana 4, średnia 4;Mediana 6, średnia 6;Mediana 4, średnia 5;Mediana 6, średnia 5",3,"Środkowy z 7 wyników to 6. Średnia to (3·2+3·6+1·11)/7. To 35:7=5.",["Wynik","2","6","11"],[["Liczba uczniów","3","3","1"]]],
    ["e8-reasoning",7,"Z każdego pudełka losuje się jeden żeton, z jednakową szansą dla żetonów w tym pudełku. Gdzie szansa wylosowania niebieskiego jest większa i o ile?","W A o 1/10;W B o 1/10;W A o 1/5;W obu taka sama",0,"W A szansa to 6/10=3/5, a w B 5/10=1/2. Różnica to 1/10.",["Pudełko","Niebieskie","Pozostałe"],[["A","6","4"],["B","5","5"]]],
  ];
  examDataTasks.forEach(([id, index, question, options, key, solution, headers, data]) => {
    const exam = smart.specs[id].examRows;
    exam[index] = [...q(question, options.split(';'), key, '', solution), exam[index][5], { headers, data }];
  });

  /* Klucz A–D jest równomierny w całym banku. Zamieniamy tylko pozycję
     wariantu; treść poprawnej odpowiedzi i rozwiązanie pozostają bez zmian. */
  let answerKeyIndex=0;
  Object.values(smart.specs).forEach(spec=>(spec.paths||[]).forEach(path=>{
    path.rows=(path.rows||[]).map(row=>{
      const next=[...row],options=[...(row[1]||[])],current=Number(row[2]),target=answerKeyIndex++%4;
      const correctText=String(options[current]??'').trim(),solutionText=String(row[4]??'').trim();
      const normalize=value=>String(value).toLocaleLowerCase('pl').replace(/\s+/g,'').replace(/,/g,'.').replace(/[−–]/g,'-');
      if(correctText&&!normalize(solutionText).includes(normalize(correctText))){
        const concluded=/[.!?]$/.test(solutionText)?solutionText:`${solutionText}.`;
        next[4]=`${concluded} Odpowiedź: ${correctText}.`;
      }
      if(options.length===4&&Number.isInteger(current)&&current>=0&&current<4&&current!==target){
        [options[current],options[target]]=[options[target],options[current]];
        next[1]=options;next[2]=target;
      }
      return next;
    });
  }));
})();
