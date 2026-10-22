// Krótka próba po pięciu zadaniach prowadzonych. Odpowiedzi ujawniamy dopiero po oddaniu.
window.E8_SELF_WORK={
  'e8-numbers':{
    title:'Punkty w konkursie',problem:'Klasa zdobyła 3 × (12 − 5) + 4² punktów. Za spóźnienie odjęto jej jeszcze 6 punktów. Ile punktów zostało?',
    steps:[
      ['PLAN','Od czego zaczniesz?',['Od nawiasu i potęgi, potem wykonam mnożenie i odejmę karę.','Najpierw odejmę 6 od 5 w nawiasie.','Dodam 3 + 12, zanim obliczę nawias.','Pominę potęgę i od razu dodam 4.'],0,'Najpierw oblicz nawias i potęgę; karę odejmij na końcu.','Najpierw: 12 − 5 = 7 oraz 4² = 16.'],
      ['OBLICZENIE','Ile punktów było przed karą?',['27','31','37','43'],2,'3 × 7 = 21, a następnie dodaj 16.','Przed karą: 3 × 7 + 16 = 37 punktów.'],
      ['ODPOWIEDŹ','Ile punktów zostało?',['31','37','43','25'],0,'Od 37 punktów odejmij 6 za spóźnienie.','Odpowiedź: 37 − 6 = 31 punktów.']
    ]
  },
  'e8-fractions':{
    title:'Sok w dzbanku',problem:'W dzbanku było ¾ litra soku. Wypito ⅓ tej ilości. Ile soku zostało?',
    steps:[
      ['PLAN','Jak obliczysz pozostały sok?',['Odejmę ⅓ litra od ¾ litra.','Obliczę ⅓ z ¾ litra, a wynik odejmę od ¾ litra.','Dodam ⅓ i ¾ litra.','Podzielę ¾ litra przez 3 i to będzie ilość pozostała.'],1,'⅓ dotyczy ilości w dzbanku, a nie całego litra.','Najpierw obliczamy, ile wypito: ⅓ · ¾.'],
      ['OBLICZENIE','Ile litra wypito?',['⅓ l','¼ l','½ l','¾ l'],1,'Pomnóż ⅓ przez ¾.','Wypito ⅓ · ¾ = ¼ litra.'],
      ['ODPOWIEDŹ','Ile soku zostało?',['¼ l','¾ l','½ l','⅓ l'],2,'Od ¾ litra odejmij ¼ litra.','Odpowiedź: ¾ − ¼ = ½ litra.']
    ]
  },
  'e8-percent-plus':{
    title:'Bluza i kupon',problem:'Bluza kosztowała 200 zł. Najpierw przeceniono ją o 20%, a potem zastosowano kupon 10% na nową cenę. Ile zapłacisz?',
    steps:[
      ['PLAN','Jak zaplanujesz obliczenia?',['Odejmę 20% od 200 zł, potem 10% od obniżonej ceny.','Odejmę od razu 30% od 200 zł.','Oba rabaty obliczę od pierwotnych 200 zł.','Najpierw podniosę cenę o 20%, potem odejmę 10%.'],0,'Drugi rabat liczysz od ceny po pierwszej przecenie.','Najpierw 200 zł − 20%, potem 10% od otrzymanej ceny.'],
      ['OBLICZENIE','Ile kosztuje bluza po pierwszej przecenie?',['180 zł','160 zł','140 zł','40 zł'],1,'20% z 200 zł to 40 zł.','Po przecenie: 200 − 40 = 160 zł.'],
      ['ODPOWIEDŹ','Ile zapłacisz po użyciu kuponu?',['140 zł','150 zł','144 zł','160 zł'],2,'Kupon obniża 160 zł o 16 zł.','Odpowiedź: 160 − 16 = 144 zł.']
    ]
  },
  'e8-powers-plus':{
    title:'Potęga i pierwiastek',problem:'Oblicz wartość wyrażenia 4³ : 4¹ + √81.',
    steps:[
      ['PLAN','Który plan jest poprawny?',['Najpierw dodam 4¹ i √81, potem podzielę 4³.','Zamienię 4³ : 4¹ na 4², obliczę √81 i dodam wyniki.','Odejmę wykładniki i otrzymam 4⁴.','Podzielę 4³ przez √81, potem dodam 4¹.'],1,'Przy dzieleniu potęg o tej samej podstawie odejmujesz wykładniki.','4³ : 4¹ = 4², a √81 = 9.'],
      ['OBLICZENIE','Ile wynosi 4³ : 4¹?',['4','8','16','64'],2,'4³ : 4¹ = 4².','4³ : 4¹ = 4² = 16.'],
      ['ODPOWIEDŹ','Jaka jest wartość całego wyrażenia?',['7','16','25','97'],2,'Do 16 dodaj √81.','Odpowiedź: 16 + 9 = 25.']
    ]
  },
  'e8-algebra':{
    title:'Wzór z płytek',problem:'Pierwszy wzór ma 7 płytek. Każdy następny ma o 4 płytki więcej. Ile płytek ma wzór dwunasty?',
    steps:[
      ['PLAN','Który zapis opisuje n-ty wzór?',['7 + 4n','7 + 4(n − 1)','4 + 7(n − 1)','7 · 4n'],1,'Od pierwszego do n-tego wzoru wykonujesz n − 1 przyrostów.','Liczba płytek: 7 + 4(n − 1).'],
      ['OBLICZENIE','Jaka jest uproszczona postać wzoru?',['4n + 3','4n + 7','7n + 4','4n − 3'],0,'Rozmnażając nawias, otrzymasz 7 + 4n − 4.','7 + 4(n − 1) = 4n + 3.'],
      ['ODPOWIEDŹ','Ile płytek ma wzór dwunasty?',['44','48','51','55'],2,'Do 4 · 12 dodaj 3.','Odpowiedź: 4 · 12 + 3 = 51 płytek.']
    ]
  },
  'e8-equations-plus':{
    title:'Bilety do muzeum',problem:'Kupiono 3 bilety normalne i 2 ulgowe. Ulgowy kosztuje o 5 zł mniej od normalnego. Zapłacono 65 zł. Ile kosztuje każdy bilet?',
    steps:[
      ['PLAN','Jeśli normalny kosztuje x zł, które równanie ułożysz?',['3x + 2(x − 5) = 65','3x + 2(x + 5) = 65','5x − 5 = 65','3(x − 5) + 2x = 65'],0,'Bilet ulgowy kosztuje x − 5 zł.','Równanie: 3x + 2(x − 5) = 65.'],
      ['OBLICZENIE','Ile kosztuje bilet normalny?',['10 zł','13 zł','15 zł','20 zł'],2,'Po uproszczeniu: 5x − 10 = 65.','5x = 75, więc x = 15 zł.'],
      ['ODPOWIEDŹ','Ile kosztują bilety normalny i ulgowy?',['15 zł i 10 zł','15 zł i 20 zł','10 zł i 15 zł','20 zł i 15 zł'],0,'Od ceny normalnego odejmij 5 zł.','Odpowiedź: normalny 15 zł, ulgowy 10 zł. Kontrola: 3 · 15 + 2 · 10 = 65 zł.']
    ]
  },
  'e8-proportion':{
    title:'Wycieczka na mapie',problem:'Na mapie w skali 1 : 50 000 trasa ma długość 6 cm. Ile kilometrów wynosi jej rzeczywista długość?',
    steps:[
      ['PLAN','Co oznacza skala 1 : 50 000?',['1 cm na mapie odpowiada 50 000 km.','1 cm na mapie odpowiada 50 000 cm w terenie.','50 000 cm na mapie odpowiada 1 cm w terenie.','1 cm na mapie odpowiada 50 000 m.'],1,'Obie liczby w skali wyrażone są w tej samej jednostce.','1 cm na mapie to 50 000 cm w terenie.'],
      ['OBLICZENIE','Ile kilometrów odpowiada 1 cm na mapie?',['0,05 km','0,5 km','5 km','50 km'],1,'50 000 cm = 500 m.','50 000 cm = 500 m = 0,5 km.'],
      ['ODPOWIEDŹ','Ile kilometrów ma trasa?',['0,3 km','3 km','30 km','300 km'],1,'Pomnóż 6 przez 0,5 km.','Odpowiedź: 6 · 0,5 km = 3 km.']
    ]
  },
  'e8-geometry':{
    title:'Pole trapezu',problem:'Trapez ma podstawy długości 10 cm i 6 cm oraz wysokość 5 cm. Oblicz jego pole.',
    steps:[
      ['PLAN','Który wzór zastosujesz?',['P = (a + b) · h / 2','P = a · b · h','P = (a − b) · h / 2','P = 2(a + b)'],0,'Pole to średnia długość podstaw pomnożona przez wysokość.','P = (a + b) · h / 2.'],
      ['OBLICZENIE','Ile wynosi (10 + 6) · 5?',['50','60','80','160'],2,'Dodaj podstawy, potem pomnóż przez wysokość.','(10 + 6) · 5 = 80.'],
      ['ODPOWIEDŹ','Jakie jest pole trapezu?',['20 cm²','40 cm²','80 cm²','160 cm²'],1,'Wynik 80 podziel przez 2.','Odpowiedź: P = 80 / 2 = 40 cm².']
    ]
  },
  'e8-circle-plus':{
    title:'Trójkąt na układzie współrzędnych',problem:'Punkty A(−2, 1), B(4, 1) i C(4, 5) tworzą trójkąt. Oblicz jego pole.',
    steps:[
      ['PLAN','Jak wykorzystasz położenie punktów?',['AB jest poziomy, BC pionowy, więc obliczę połowę iloczynu ich długości.','AB i BC są równoległe, więc dodam ich długości.','Obliczę pole kwadratu o boku AB.','Wystarczy dodać współrzędne punktów.'],0,'Odcinki AB i BC tworzą kąt prosty.','P = AB · BC / 2.'],
      ['OBLICZENIE','Jakie są długości AB i BC?',['2 i 4','6 i 4','6 i 5','4 i 4'],1,'AB: od −2 do 4; BC: od 1 do 5.','AB = 6, BC = 4.'],
      ['ODPOWIEDŹ','Jakie jest pole trójkąta?',['10','12','20','24'],1,'Pomnóż 6 · 4 i podziel przez 2.','Odpowiedź: P = 6 · 4 / 2 = 12 jednostek².']
    ]
  },
  'e8-space':{
    title:'Pudełko bez pokrywki',problem:'Pudełko ma dno 8 cm × 5 cm i wysokość 3 cm. Ile cm² papieru potrzeba na oklejenie dna i czterech ścian zewnętrznych, bez zakładek?',
    steps:[
      ['PLAN','Które powierzchnie doliczysz?',['Dno, cztery ściany i pokrywkę.','Tylko dno i jedną ścianę.','Dno oraz dwie pary ścian bocznych, bez pokrywki.','Same ściany boczne, bez dna.'],2,'Pudełko jest otwarte, więc nie ma pokrywki.','P = 8 · 5 + 2 · (8 · 3) + 2 · (5 · 3).'],
      ['OBLICZENIE','Ile wynosi pole czterech ścian bocznych?',['39 cm²','78 cm²','80 cm²','118 cm²'],1,'Dwie ściany 8 × 3 i dwie 5 × 3.','Ściany: 2 · 24 + 2 · 15 = 78 cm².'],
      ['ODPOWIEDŹ','Ile papieru potrzeba łącznie?',['78 cm²','80 cm²','118 cm²','158 cm²'],2,'Dodaj pole dna: 8 · 5 = 40 cm².','Odpowiedź: 78 + 40 = 118 cm².']
    ]
  },
  'e8-data':{
    title:'Pięć wyników',problem:'W pięciu próbach uzyskano 4, 7, 7, 10 i 12 punktów. Oblicz medianę oraz średnią arytmetyczną.',
    steps:[
      ['PLAN','Jak znajdziesz medianę?',['Wybiorę środkową liczbę po uporządkowaniu wyników.','Dodam skrajne wyniki i podzielę przez 2.','Wybiorę największy wynik.','Podzielę sumę wyników przez 5.'],0,'Mediana pięciu uporządkowanych liczb to trzecia liczba.','Uporządkowane wyniki: 4, 7, 7, 10, 12; mediana = 7.'],
      ['OBLICZENIE','Ile wynosi suma pięciu wyników?',['35','38','40','42'],2,'Dodaj 4 + 7 + 7 + 10 + 12.','Suma = 40 punktów.'],
      ['ODPOWIEDŹ','Ile wynoszą mediana i średnia?',['7 i 8','8 i 7','7 i 40','8 i 8'],0,'Średnia to 40 / 5, mediana to trzeci wynik.','Odpowiedź: mediana 7, średnia 8 punktów.']
    ]
  },
  'e8-reasoning':{
    title:'Dwucyfrowy kod',problem:'Z cyfr 1, 2 i 3 losowo układamy kod z dwóch różnych cyfr. Wszystkie możliwe kody są jednakowo prawdopodobne. Jakie jest prawdopodobieństwo, że kod będzie liczbą większą od 20?',
    steps:[
      ['PLAN','Ile wszystkich kodów można utworzyć?',['3','6','9','12'],1,'Na pierwszą cyfrę są 3 wybory, na drugą pozostają 2.','Wszystkich kodów jest 3 · 2 = 6.'],
      ['OBLICZENIE','Ile kodów jest większych od 20?',['2','3','4','5'],2,'Wypisz kody rozpoczynające się od 2 lub 3.','Sprzyjają 21, 23, 31 i 32 — 4 kody.'],
      ['ODPOWIEDŹ','Jakie jest prawdopodobieństwo?',['1/3','1/2','2/3','4/3'],2,'Podziel liczbę kodów sprzyjających przez 6.','Odpowiedź: P = 4/6 = 2/3.']
    ]
  }
};

// Two transfer tasks supplement the original task in each course.
// Tuple: label, question, four choices, correct index, hint, worked explanation.
(() => {
 const step=(label,q,options,correct,hint,line)=>[label,q,options,correct,hint,line];
 const task=(title,problem,plan,calc,result)=>({title,problem,steps:[step('PLAN',...plan),step('OBLICZENIE',...calc),step('ODPOWIEDŹ',...result)]});
 window.E8_SELF_WORK_MORE={
 'e8-numbers':[
 task('Zmiana temperatury','Rano było −4°C. Do południa temperatura wzrosła o 9°C, a wieczorem spadła o 7°C. Jaka była wieczorem?',
 ['Który zapis opisuje zmianę?',['−4 + 9 − 7','−4 − 9 + 7','4 + 9 + 7','−4 + 9 + 7'],0,'Wzrost dodaj, spadek odejmij.','Zaczynamy od −4, dodajemy 9 i odejmujemy 7.'],
 ['Ile stopni było w południe?',['−13°C','−5°C','5°C','13°C'],2,'Od −4 przesuń się o 9 w prawo na osi.','−4 + 9 = 5°C.'],
 ['Jaka była temperatura wieczorem?',['2°C','−2°C','−12°C','12°C'],1,'Od wyniku południowego odejmij spadek.','5 − 7 = −2°C.']),
 task('Reszta z zakupów','Kupujesz 3 zeszyty po 7 zł i 2 długopisy po 4 zł. Płacisz banknotem 50 zł. Ile otrzymasz reszty?',
 ['Jak obliczysz koszt?',['3 + 7 + 2 + 4','3 · 7 + 2 · 4','3 · (7 + 2) · 4','50 + 3 · 7'],1,'Każdą cenę pomnóż przez liczbę sztuk.','Koszt: 3 · 7 + 2 · 4.'],
 ['Ile kosztują zakupy?',['21 zł','25 zł','29 zł','36 zł'],2,'Dodaj koszt zeszytów i długopisów.','21 + 8 = 29 zł.'],
 ['Ile wynosi reszta?',['29 zł','19 zł','31 zł','21 zł'],3,'Odejmij koszt od zapłaconych 50 zł.','50 − 29 = 21 zł.'])],
 'e8-fractions':[
 task('Wstążka','Wstążka miała 2½ m. Odcięto ¾ m i ½ m. Ile zostało?',
 ['Jak zapiszesz obliczenie?',['2½ − ¾ − ½','2½ + ¾ + ½','2½ · ¾ · ½','2½ − (¾ − ½)'],0,'Oba odcięte fragmenty odejmij.','Pozostała długość to 2½ − ¾ − ½.'],
 ['Ile odcięto łącznie?',['¼ m','1 m','1¼ m','1½ m'],2,'Zamień ½ na ćwiartki.','¾ + ½ = ¾ + ²⁄₄ = ⁵⁄₄ = 1¼ m.'],
 ['Ile wstążki zostało?',['¾ m','1¼ m','1¾ m','2 m'],1,'Od 2½ odejmij 1¼.','2½ − 1¼ = 1¼ m.']),
 task('Mąka na ciasteczka','Na jedną porcję ciasteczek potrzeba ⅔ kg mąki. Przygotowujesz 1½ porcji. Ile mąki potrzebujesz?',
 ['Jak obliczysz ilość mąki?',['⅔ + 1½','⅔ : 1½','⅔ · 1½','1½ − ⅔'],2,'Liczba porcji jest mnożnikiem ilości na porcję.','Mnożymy ⅔ przez 1½.'],
 ['Jak zapiszesz 1½ jako ułamek niewłaściwy?',['¹⁄₂','²⁄₃','³⁄₂','⁵⁄₂'],2,'Jedna całość to dwie połówki.','1½ = ³⁄₂.'],
 ['Ile mąki potrzeba?',['⅓ kg','⅔ kg','1½ kg','1 kg'],3,'Pomnóż i skróć ⅔ · ³⁄₂.','⅔ · ³⁄₂ = 6/6 = 1 kg.'])],
 'e8-percent-plus':[
 task('Uczniowie na wycieczce','Na wycieczkę jedzie 18 z 24 uczniów klasy. Jaki procent klasy jedzie?',
 ['Jaki iloraz opisuje udział?',['24 : 18','18 : 24','18 : 100','24 : 100'],1,'Część dzielimy przez całość.','Udział to 18/24.'],
 ['Jaki ułamek otrzymasz po skróceniu?',['½','⅔','¾','¼'],2,'Podziel licznik i mianownik przez 6.','18/24 = 3/4.'],
 ['Jaki to procent?',['25%','50%','70%','75%'],3,'Pomnóż udział przez 100%.','3/4 · 100% = 75%.']),
 task('Cena po podwyżce','Abonament kosztował 80 zł. Cenę podniesiono o 15%. Ile kosztuje teraz?',
 ['Który zapis daje nową cenę?',['80 · 0,15','80 · 1,15','80 − 15','80 + 15'],1,'Nowa cena stanowi 115% starej ceny.','Dodajemy 15% wartości, czyli 80 · 1,15.'],
 ['Ile wynosi podwyżka?',['8 zł','12 zł','15 zł','20 zł'],1,'Oblicz 0,15 · 80.','15% z 80 zł = 12 zł.'],
 ['Ile wynosi nowa cena?',['68 zł','88 zł','92 zł','95 zł'],2,'Dodaj podwyżkę do ceny początkowej.','80 + 12 = 92 zł.'])],
 'e8-powers-plus':[
 task('Iloczyn potęg','Oblicz 2³ · 2⁴ : 2².',
 ['Jak połączysz wykładniki?',['3 · 4 : 2','3 + 4 − 2','3 + 4 + 2','3 − 4 − 2'],1,'W iloczynie dodajemy wykładniki, w ilorazie odejmujemy.','2³ · 2⁴ : 2² = 2^(3 + 4 − 2).'],
 ['Ile wynosi wykładnik otrzymanej potęgi?',['3','4','5','9'],2,'Oblicz 3 + 4 − 2.','3 + 4 − 2 = 5.'],
 ['Ile wynosi wyrażenie?',['10','16','25','32'],3,'Oblicz pięć czynników równych 2.','2⁵ = 32.']),
 task('Różnica pierwiastków','Oblicz √144 − √49 + 3².',
 ['Który plan jest poprawny?',['Obliczę osobno oba pierwiastki i potęgę.','Obliczę √(144 − 49 + 3).','Dodam 144 i 49.','Zamienię 3² na 6.'],0,'Pierwiastek i potęgę oblicz przed dodawaniem.','√144 = 12, √49 = 7, 3² = 9.'],
 ['Ile wynosi √144 − √49?',['5','7','√95','19'],0,'Odejmij wartości pierwiastków, a nie liczby pod nimi.','12 − 7 = 5.'],
 ['Ile wynosi całe wyrażenie?',['8','11','14','26'],2,'Dodaj wartość potęgi do różnicy.','5 + 9 = 14.'])],
 'e8-algebra':[
 task('Obwód prostokąta','Boki prostokąta mają długości x cm i (x + 3) cm. Zapisz obwód i oblicz go dla x = 5.',
 ['Który zapis przedstawia obwód?',['x(x + 3)','2x + 2(x + 3)','x + x + 3','2x + 3'],1,'W obwodzie są po dwa boki każdej długości.','Obwód = 2x + 2(x + 3).'],
 ['Jak uprościsz wyrażenie?',['4x + 3','2x + 6','4x + 6','2x² + 6'],2,'Rozmnóż nawias i dodaj wyrazy z x.','2x + 2x + 6 = 4x + 6.'],
 ['Ile wynosi obwód dla x = 5?',['16 cm','23 cm','26 cm','40 cm'],2,'Wstaw 5 w miejsce x.','4 · 5 + 6 = 26 cm.']),
 task('Koszt biletów','Bilet kosztuje x zł. Kupujesz 4 bilety i płacisz dodatkowo 6 zł jednorazowej opłaty. Ile zapłacisz dla x = 9?',
 ['Który wzór opisuje koszt?',['4(x + 6)','4x + 6','x + 4 + 6','6x + 4'],1,'Opłatę dodaj tylko raz.','Koszt to 4x + 6.'],
 ['Ile kosztują same bilety?',['13 zł','24 zł','36 zł','54 zł'],2,'Pomnóż cenę jednego biletu przez 4.','4 · 9 = 36 zł.'],
 ['Ile zapłacisz łącznie?',['36 zł','40 zł','42 zł','60 zł'],2,'Dodaj jednorazową opłatę.','36 + 6 = 42 zł.'])],
 'e8-equations-plus':[
 task('Uczniowie w autokarze','Po zabraniu 8 uczniów z drugiej szkoły w autokarze było 35 uczniów. Ilu uczniów było na początku?',
 ['Które równanie opisuje sytuację?',['x − 8 = 35','8x = 35','x + 8 = 35','35x = 8'],2,'Do początkowej liczby dodano 8.','x + 8 = 35.'],
 ['Jak wyznaczysz x?',['Dodam 8 do obu stron.','Odejmę 8 od obu stron.','Podzielę obie strony przez 8.','Pomnożę obie strony przez 8.'],1,'Usuń +8 działaniem przeciwnym.','x = 35 − 8.'],
 ['Ilu uczniów było początkowo?',['27','28','35','43'],0,'Sprawdź, czy po dodaniu 8 otrzymasz 35.','x = 27; kontrola: 27 + 8 = 35.']),
 task('Boki prostokąta','Prostokąt ma obwód 34 cm. Dłuższy bok jest o 3 cm dłuższy od krótszego. Oblicz długości boków.',
 ['Jeśli krótszy bok ma x cm, które równanie zapiszesz?',['x + (x + 3) = 34','2x + 2(x + 3) = 34','x(x + 3) = 34','4x + 3 = 34'],1,'Obwód zawiera dwa krótsze i dwa dłuższe boki.','2x + 2(x + 3) = 34.'],
 ['Ile wynosi krótszy bok?',['7 cm','8 cm','10 cm','14 cm'],0,'Po uproszczeniu 4x + 6 = 34.','4x = 28, zatem x = 7 cm.'],
 ['Jakie są długości boków?',['7 cm i 9 cm','7 cm i 10 cm','10 cm i 13 cm','14 cm i 17 cm'],1,'Do krótszego boku dodaj 3 cm.','Boki: 7 cm i 10 cm; 2 · 7 + 2 · 10 = 34 cm.'])],
 'e8-proportion':[
 task('Cena jabłek','Za 3 kg jabłek zapłacono 12 zł. Cena kilograma jest stała. Ile kosztuje 5 kg?',
 ['Jak wyznaczysz cenę kilograma?',['12 · 3','12 + 3','12 : 3','3 : 12'],2,'Podziel zapłaconą kwotę przez masę.','Cena kilograma = 12 : 3.'],
 ['Ile kosztuje kilogram?',['3 zł','4 zł','9 zł','36 zł'],1,'Oblicz 12 : 3.','Kilogram kosztuje 4 zł.'],
 ['Ile kosztuje 5 kg?',['15 zł','17 zł','20 zł','60 zł'],2,'Pomnóż cenę kilograma przez masę.','5 · 4 = 20 zł.']),
 task('Długość na planie','Na planie w skali 1 : 200 ściana ma długość 4 cm. Ile metrów ma w rzeczywistości?',
 ['Co oznacza 1 cm na planie?',['200 cm w rzeczywistości','200 m w rzeczywistości','1/200 cm w rzeczywistości','200 km w rzeczywistości'],0,'W skali obie długości podano w tej samej jednostce.','1 cm na planie odpowiada 200 cm w rzeczywistości.'],
 ['Ile centymetrów ma ściana w rzeczywistości?',['50 cm','204 cm','400 cm','800 cm'],3,'Pomnóż 4 cm przez 200.','4 · 200 = 800 cm.'],
 ['Ile to metrów?',['0,8 m','8 m','80 m','800 m'],1,'W metrze jest 100 centymetrów.','800 : 100 = 8 m.'])],
 'e8-geometry':[
 task('Pole rombu','Przekątne rombu mają 12 cm i 8 cm. Oblicz pole rombu.',
 ['Który wzór zastosujesz?',['P = 12 · 8','P = 12 · 8 / 2','P = 2(12 + 8)','P = (12 + 8) / 2'],1,'Pole rombu to połowa iloczynu długości przekątnych.','P = d₁ · d₂ / 2.'],
 ['Ile wynosi iloczyn przekątnych?',['20','48','96','192'],2,'Pomnóż 12 przez 8.','12 · 8 = 96.'],
 ['Ile wynosi pole rombu?',['20 cm²','40 cm²','48 cm²','96 cm²'],2,'Podziel iloczyn przekątnych przez 2.','P = 96 / 2 = 48 cm².']),
 task('Wysokość trójkąta','Trójkąt ma pole 36 cm² i podstawę 9 cm. Oblicz wysokość opuszczoną na tę podstawę.',
 ['Które równanie zapiszesz?',['9h = 36','9h/2 = 36','9 + h = 36','2(9 + h) = 36'],1,'Pole trójkąta jest połową iloczynu podstawy i wysokości.','P = ah/2, więc 9h/2 = 36.'],
 ['Ile wynosi iloczyn 9h?',['18','36','72','144'],2,'Pomnóż obie strony równania przez 2.','9h = 72.'],
 ['Ile wynosi wysokość?',['4 cm','6 cm','8 cm','9 cm'],2,'Podziel 72 przez 9.','h = 8 cm; kontrola: 9 · 8 / 2 = 36 cm².'])],
 'e8-circle-plus':[
 task('Odcinek poziomy','Punkty A(−3, 2) i B(5, 2) leżą na jednej poziomej prostej. Oblicz długość AB i współrzędne środka odcinka.',
 ['Jak obliczysz długość AB?',['Dodam −3 i 5.','Obliczę różnicę 5 − (−3).','Odejmę współrzędne y.','Pomnożę −3 przez 5.'],1,'Długość to odległość między współrzędnymi x.','AB = 5 − (−3).'],
 ['Ile wynosi AB?',['2','6','8','10'],2,'Odejmowanie liczby ujemnej zamień na dodawanie.','5 − (−3) = 8.'],
 ['Gdzie leży środek odcinka?',['(1, 2)','(2, 1)','(4, 2)','(0, 2)'],0,'Współrzędna x środka to średnia współrzędnych x końców.','x = (−3 + 5)/2 = 1, y = 2; środek to (1, 2).']),
 task('Przekątna prostokąta','Boki prostokąta mają 5 cm i 12 cm. Oblicz długość przekątnej.',
 ['Które równanie zastosujesz?',['d = 5 + 12','d² = 5² + 12²','d² = 12² − 5²','d = 5 · 12'],1,'Przekątna jest przeciwprostokątną trójkąta prostokątnego.','Z twierdzenia Pitagorasa: d² = 5² + 12².'],
 ['Ile wynosi d²?',['17','119','169','289'],2,'Dodaj 25 i 144.','d² = 25 + 144 = 169.'],
 ['Ile ma przekątna?',['13 cm','17 cm','√119 cm','169 cm'],0,'Długość jest dodatnim pierwiastkiem z d².','d = √169 = 13 cm.'])],
 'e8-space':[
 task('Pojemność akwarium','Akwarium ma wymiary wewnętrzne 40 cm × 25 cm × 30 cm. Ile litrów mieści, gdy jest pełne?',
 ['Jak obliczysz objętość?',['Dodam trzy wymiary.','Pomnożę trzy wymiary.','Obliczę dwukrotność sumy wymiarów.','Pomnożę tylko 40 przez 25.'],1,'Objętość prostopadłościanu to iloczyn długości, szerokości i wysokości.','V = 40 · 25 · 30 cm³.'],
 ['Ile wynosi objętość w cm³?',['1000 cm³','3000 cm³','30 000 cm³','60 000 cm³'],2,'Najpierw 40 · 25 = 1000.','1000 · 30 = 30 000 cm³.'],
 ['Ile to litrów?',['3 l','30 l','300 l','3000 l'],1,'1 litr = 1000 cm³.','30 000 : 1000 = 30 litrów.']),
 task('Pole sześcianu','Krawędź sześcianu ma długość 4 cm. Oblicz całkowite pole jego powierzchni.',
 ['Jaki wzór zastosujesz?',['P = 4³','P = 6 · 4²','P = 4 · 4','P = 12 · 4'],1,'Sześcian ma sześć jednakowych kwadratowych ścian.','Pole całkowite = 6a².'],
 ['Ile wynosi pole jednej ściany?',['8 cm²','12 cm²','16 cm²','64 cm²'],2,'Pole kwadratu to bok razy bok.','4² = 16 cm².'],
 ['Ile wynosi całkowite pole?',['48 cm²','64 cm²','80 cm²','96 cm²'],3,'Pomnóż pole jednej ściany przez liczbę ścian.','6 · 16 = 96 cm².'])],
 'e8-data':[
 task('Brakujący wynik','Średnia czterech wyników wynosi 8 punktów. Trzy wyniki to 5, 7 i 10 punktów. Oblicz czwarty.',
 ['Jak wyznaczysz sumę czterech wyników?',['8 + 4','8 · 4','8 : 4','5 + 7 + 10'],1,'Suma to średnia razy liczba wyników.','Suma wszystkich wyników = 8 · 4.'],
 ['Ile wynosi suma trzech znanych wyników?',['18','20','22','24'],2,'Dodaj 5, 7 i 10.','5 + 7 + 10 = 22.'],
 ['Ile wynosi czwarty wynik?',['8','9','10','12'],2,'Od sumy wszystkich wyników odejmij sumę znanych.','32 − 22 = 10 punktów.']),
 task('Mediana czterech wyników','Cztery wyniki to 9, 3, 7 i 5. Oblicz medianę.',
 ['Jak uporządkujesz wyniki?',['9, 7, 5, 3','3, 5, 7, 9','3, 7, 5, 9','5, 3, 9, 7'],1,'Zapisz wyniki od najmniejszego do największego.','Uporządkowane wyniki: 3, 5, 7, 9.'],
 ['Które wyniki leżą pośrodku?',['3 i 9','3 i 5','5 i 7','7 i 9'],2,'Dla czterech wyników są dwa środkowe: drugi i trzeci.','Dwie środkowe liczby to 5 i 7.'],
 ['Ile wynosi mediana?',['5','6','7','8'],1,'Oblicz średnią dwóch środkowych liczb.','Mediana = (5 + 7) / 2 = 6.'])],
 'e8-reasoning':[
 task('Dwie monety','Rzucasz dwoma uczciwymi monetami. Oblicz prawdopodobieństwo otrzymania dokładnie jednego orła.',
 ['Ile jest jednakowo prawdopodobnych uporządkowanych wyników?',['2','3','4','6'],2,'Każda moneta ma dwa możliwe wyniki.','Wyniki: OO, OR, RO, RR — razem 4.'],
 ['Które wyniki spełniają warunek?',['OO i RR','OR i RO','Tylko OR','OO, OR i RO'],1,'Dokładnie jeden orzeł może wypaść na pierwszej albo drugiej monecie.','Sprzyjają OR i RO, czyli 2 wyniki.'],
 ['Jakie jest prawdopodobieństwo?',['¼','⅓','½','¾'],2,'Dwa wyniki sprzyjające spośród czterech.','P = 2/4 = 1/2.']),
 task('Liczby z trzech cyfr','Z cyfr 0, 2 i 5 układasz liczby trzycyfrowe, używając każdej cyfry dokładnie raz. Losujesz jedną z tych liczb z jednakową szansą. Jaka jest szansa podzielności przez 5?',
 ['Jakie liczby spełniają warunek trzycyfrowości?',['025, 052, 205, 250, 502, 520','205, 250, 502, 520','200, 255, 500','250 i 520'],1,'Pierwsza cyfra nie może być zerem.','Możliwe liczby to 205, 250, 502 i 520.'],
 ['Ile z nich jest podzielnych przez 5?',['1','2','3','4'],2,'Liczba podzielna przez 5 kończy się cyfrą 0 lub 5.','Sprzyjają 205, 250 i 520 — trzy liczby.'],
 ['Jakie jest prawdopodobieństwo?',['¼','½','⅔','¾'],3,'Podziel liczbę sprzyjających wyników przez cztery możliwości.','P = 3/4.'])]
 };
})();
