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

  Object.assign(smart.specs['e8-fractions'], {
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
