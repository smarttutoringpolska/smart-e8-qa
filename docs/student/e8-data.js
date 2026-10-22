(function(){
  const row=(q,options,correct,hint,answer)=>[q,options,correct,hint,answer.trim().length>=52?answer:`Krok 1: ${hint} Krok 2: ${answer}`];
  window.SMART_E8={
    topics:[
      {id:'e8-numbers',n:'I',course:'e8-numbers',title:'Liczby i działania',group:'numbers',desc:'Liczby naturalne i całkowite, kolejność działań, potęgi, pierwiastki oraz podzielność.',items:['Kolejność wykonywania działań','Liczby ujemne','Podzielność, NWD i NWW','Potęgi i pierwiastki','Notacja wykładnicza'],progress:0},
      {id:'e8-fractions',n:'II',course:'e8-fractions',title:'Ułamki i procenty',group:'numbers',desc:'Ułamki zwykłe i dziesiętne, procenty, podwyżki, obniżki oraz obliczenia praktyczne.',items:['Działania na ułamkach','Zamiana postaci liczby','Procent liczby','Jakim procentem jest liczba','Podwyżki i obniżki'],progress:0},
      {id:'e8-algebra',n:'III',course:'e8-algebra',title:'Algebra i równania',group:'algebra',desc:'Wyrażenia algebraiczne, redukcja wyrazów podobnych, równania i modelowanie.',items:['Wartość wyrażenia','Redukcja wyrazów podobnych','Mnożenie przez nawias','Równania liniowe','Równania w zadaniach tekstowych'],progress:0},
      {id:'e8-proportion',n:'IV',course:'e8-proportion',title:'Proporcje i zadania tekstowe',group:'algebra',desc:'Proporcjonalność prosta, skala, droga–prędkość–czas i obliczenia praktyczne.',items:['Proporcja','Skala mapy i planu','Droga, prędkość i czas','Cena jednostkowa','Czas i kalendarz'],progress:0},
      {id:'e8-geometry',n:'V',course:'e8-geometry',title:'Geometria płaska',group:'geometry',desc:'Kąty, trójkąty, czworokąty, pola, obwody, okrąg i twierdzenie Pitagorasa.',items:['Kąty i wielokąty','Trójkąty','Czworokąty','Pola i obwody','Okrąg i koło','Twierdzenie Pitagorasa'],progress:0},
      {id:'e8-space',n:'VI',course:'e8-space',title:'Bryły i układ współrzędnych',group:'geometry',desc:'Graniastosłupy, ostrosłupy, jednostki objętości, punkty i symetrie na płaszczyźnie.',items:['Siatki brył','Pole powierzchni','Objętość','Jednostki objętości','Współrzędne punktów','Symetria'],progress:0},
      {id:'e8-data',n:'VII',course:'e8-data',title:'Dane i prawdopodobieństwo',group:'data',desc:'Tabele, wykresy, średnia, mediana, proste zliczanie i doświadczenia losowe.',items:['Odczytywanie danych','Średnia arytmetyczna','Mediana','Diagramy','Kombinatoryka','Prawdopodobieństwo'],progress:0}
    ],
    specs:{
      'e8-numbers':{n:'01',title:'Liczby i działania',desc:'Sprawne rachunki, podzielność, potęgi i pierwiastki.',accent:'blue',lead:'Najpierw ustal kolejność działań, potem wykonuj rachunki etapami.',formulas:['( ) → potęgi → · i : → + i −','aᵐ · aⁿ = aᵐ⁺ⁿ','√a · √b = √(ab)','a = b·q + r'],theory:[['Kolejność działań','Najpierw obliczamy nawiasy i potęgi, później mnożenie i dzielenie, a na końcu dodawanie i odejmowanie.'],['Liczby ujemne','Przy mnożeniu i dzieleniu jednakowe znaki dają plus, a różne znaki minus.'],['Podzielność','Liczba jest podzielna przez 3 lub 9, gdy odpowiednio suma jej cyfr jest podzielna przez 3 lub 9.'],['Potęgi i pierwiastki','Potęga skraca wielokrotne mnożenie. Pierwiastek kwadratowy z liczby nieujemnej jest liczbą nieujemną.']],paths:[
        {id:'e8-calc',n:'01',title:'Rachunki i podzielność',desc:'Kolejność działań, liczby ujemne, NWD, NWW i zapis rzymski.',concept:{label:'RACHUNKI',formula:'( ) → potęgi → · i : → + i −',items:['uważaj na znaki','sprawdzaj podzielność','szacuj wynik']},rows:[
          row('Oblicz: 18 − 3 · 4.',['6','12','60','72'],0,'Najpierw wykonaj mnożenie.','18 − 12 = 6.'),
          row('Oblicz: (18 − 3) · 4.',['15','21','60','72'],2,'Najpierw oblicz nawias.','15 · 4 = 60.'),
          row('Ile wynosi −7 + 12?',['−19','−5','5','19'],2,'Na osi liczbowej przesuń się o 12 w prawo.','−7 + 12 = 5.'),
          row('Ile wynosi (−4) · (−6)?',['−24','−10','10','24'],3,'Iloczyn dwóch liczb ujemnych jest dodatni.','(−4) · (−6) = 24.'),
          row('Która liczba jest podzielna przez 9?',['235','315','421','532'],1,'Dodaj cyfry każdej liczby. Suma cyfr musi być wielokrotnością 9.','Dla 315 suma cyfr wynosi 3 + 1 + 5 = 9, więc 315 jest podzielne przez 9. Pozostałe sumy cyfr nie są wielokrotnościami 9.'),
          row('Największy wspólny dzielnik 18 i 24 to…',['3','6','9','12'],1,'Wypisz dzielniki obu liczb.','Największym wspólnym dzielnikiem jest 6.'),
          row('Najmniejsza wspólna wielokrotność 6 i 8 to…',['12','18','24','48'],2,'Szukaj pierwszej wspólnej wielokrotności.','NWW(6,8) = 24.'),
          row('Liczba rzymska CXL oznacza…',['110','140','160','190'],1,'XL oznacza 40.','CXL = 100 + 40 = 140.'),
          row('Zaokrąglij 7849 do setek.',['7800','7850','7900','8000'],0,'Cyfra dziesiątek to 4.','Do setek patrzymy na cyfrę dziesiątek. Ponieważ jest nią 4, otrzymujemy 7800.'),
          row('Która liczba leży najbliżej zera?',['−8','−3','2','5'],2,'Porównaj wartości bezwzględne.','Najmniejszą odległość od zera ma liczba 2.')
        ]},
        {id:'e8-powers',n:'02',title:'Potęgi i pierwiastki',desc:'Obliczaj potęgi, stosuj ich własności i upraszczaj pierwiastki.',concept:{label:'POTĘGI',formula:'aᵐ · aⁿ = aᵐ⁺ⁿ',items:['a⁰ = 1 dla a ≠ 0','(aᵐ)ⁿ = aᵐⁿ','√a ≥ 0']},rows:[
          row('Ile wynosi 2⁵?',['10','16','25','32'],3,'Pomnóż pięć dwójek.','2⁵ = 32.'),
          row('Ile wynosi (−3)²?',['−9','−6','6','9'],3,'Kwadrat liczby ujemnej jest dodatni.','(−3)² = 9.'),
          row('Uprość 3² · 3⁴.',['3⁶','6⁶','9⁸','3⁸'],0,'Przy tej samej podstawie dodaj wykładniki.','3² · 3⁴ = 3⁶.'),
          row('Uprość 5⁷ : 5³.',['5⁴','5¹⁰','1⁴','25⁴'],0,'Przy dzieleniu odejmij wykładniki.','5⁷ : 5³ = 5⁴.'),
          row('Ile wynosi √81?',['8','9','18','40,5'],1,'Szukamy dodatniej liczby, której kwadrat to 81.','√81 = 9.'),
          row('Ile wynosi ∛64?',['3','4','8','16'],1,'4 · 4 · 4 = 64.','∛64 = 4.'),
          row('Uprość √50.',['2√5','5√2','10√5','25√2'],1,'Rozłóż 50 na 25 · 2.','√50 = 5√2.'),
          row('Która liczba jest większa?',['√36','2³','Są równe','Nie można porównać'],1,'Oblicz obie wartości.','√36 = 6, a 2³ = 8, więc większe jest 2³.'),
          row('Zapis 4,2 · 10⁵ oznacza…',['4200','42000','420000','4200000'],2,'Przesuń przecinek o 5 miejsc w prawo.','4,2 · 10⁵ = 420000.'),
          row('Ile wynosi 7⁰?',['0','1','7','Nie istnieje'],1,'Każda niezerowa liczba do potęgi zerowej daje 1.','7⁰ = 1.')
        ]}
      ]},
      'e8-fractions':{n:'02',title:'Ułamki i procenty',desc:'Ułamki zwykłe, dziesiętne i procenty w zadaniach praktycznych.',accent:'green',lead:'Sprowadź liczby do wygodnej postaci i pilnuj, czego dotyczy całość.',formulas:['a/b + c/d = (ad+bc)/bd','p% = p/100','część = procent · całość','nowa cena = stara · (1 ± p/100)'],theory:[['Ułamki','Przed dodawaniem i odejmowaniem sprowadź ułamki do wspólnego mianownika.'],['Liczby dziesiętne','Możesz zamieniać ułamki na zapis dziesiętny lub procentowy, wybierając najwygodniejszą postać.'],['Procent liczby','Aby obliczyć p% liczby, pomnóż ją przez p/100.'],['Zmiany procentowe','Po podwyżce o p% mnożymy przez 1+p/100, a po obniżce przez 1−p/100.']],paths:[
        {id:'e8-fraction-calc',n:'01',title:'Ułamki zwykłe i dziesiętne',desc:'Porównuj ułamki i wykonuj cztery działania.',concept:{label:'UŁAMKI',formula:'a/b + c/d = (ad+bc)/bd',items:['wspólny mianownik','dzielenie = mnożenie przez odwrotność','skracaj wynik']},rows:[
          row('Oblicz 1/3 + 1/6.',['1/9','1/3','1/2','2/3'],2,'Sprowadź ułamki do mianownika 6.','2/6 + 1/6 = 3/6 = 1/2.'),
          row('Oblicz 5/8 − 1/4.',['1/8','3/8','4/8','1/2'],1,'Zamień 1/4 na 2/8.','5/8 − 2/8 = 3/8.'),
          row('Oblicz 2/3 · 9/10.',['3/5','6/13','18/10','11/13'],0,'Skróć 9 z 3 i 2 z 10.','2/3 · 9/10 = 3/5.'),
          row('Oblicz 3/4 : 1/2.',['3/8','2/3','1','3/2'],3,'Pomnóż przez odwrotność 2/1.','3/4 · 2 = 3/2.'),
          row('Który ułamek jest największy?',['2/3','3/5','5/8','7/12'],0,'Porównaj rozwinięcia dziesiętne.','2/3 ≈ 0,667 i jest największy.'),
          row('Zamień 0,375 na ułamek zwykły.',['3/5','3/8','37/50','375/10'],1,'Zapisz 375/1000 i skróć.','0,375 = 3/8.'),
          row('Ile wynosi 2 1/4 + 1 1/2?',['3 1/4','3 3/4','4 1/4','4 3/4'],1,'Dodaj osobno części całkowite i ułamki.','2 + 1 + 1/4 + 1/2 = 3 3/4.'),
          row('Która liczba jest równa 7/20?',['0,07','0,35','0,7','3,5'],1,'Rozszerz mianownik do 100.','7/20 = 35/100 = 0,35.'),
          row('Oblicz 1 − 3/8.',['3/8','5/8','7/8','1 3/8'],1,'Zapisz 1 jako 8/8.','8/8 − 3/8 = 5/8.'),
          row('Ile wynosi 0,6 · 0,4?',['0,024','0,24','2,4','24'],1,'Pomnóż 6 · 4 i ustaw dwa miejsca po przecinku.','0,6 · 0,4 = 0,24.')
        ]},
        {id:'e8-percent',n:'02',title:'Procenty',desc:'Obliczaj procent liczby, całość, zmiany cen i punkty procentowe.',concept:{label:'PROCENTY',formula:'p% z a = p/100 · a',items:['100% = całość','podwyżka: ×(1+p/100)','obniżka: ×(1−p/100)']},rows:[
          row('Ile to 25% z 160?',['25','40','60','64'],1,'Jedna czwarta z 160.','25% z 160 to 40.'),
          row('Liczba 30 stanowi jaki procent liczby 120?',['20%','25%','30%','40%'],1,'Oblicz 30/120.','30/120 = 0,25 = 25%.'),
          row('Cena 200 zł wzrosła o 10%. Nowa cena to…',['210 zł','220 zł','230 zł','240 zł'],1,'Oblicz 110% ceny.','200 · 1,10 = 220 zł.'),
          row('Cena 300 zł spadła o 20%. Nowa cena to…',['60 zł','220 zł','240 zł','280 zł'],2,'Zostaje 80% ceny.','300 · 0,8 = 240 zł.'),
          row('Po rabacie 25% zapłacono 150 zł. Cena przed rabatem wynosiła…',['175 zł','187,50 zł','200 zł','225 zł'],2,'150 zł to 75% ceny początkowej.','150 : 0,75 = 200 zł.'),
          row('W klasie 12 z 30 uczniów to dziewczęta. Jaki to procent?',['30%','40%','50%','60%'],1,'Oblicz 12/30.','12/30 = 0,4 = 40%.'),
          row('Frekwencja wzrosła z 70% do 78%. O ile punktów procentowych?',['8 p.p.','8%','11 p.p.','148 p.p.'],0,'Odejmij wartości procentowe.','78% − 70% = 8 p.p.'),
          row('Liczbę 80 zwiększono o 50%, a potem zmniejszono o 50%. Wynik to…',['40','60','80','120'],1,'Kolejne zmiany licz od aktualnej wartości.','80 · 1,5 · 0,5 = 60.'),
          row('Ile wynosi 5‰ z 2000?',['1','5','10','100'],2,'5‰ = 5/1000.','2000 · 5/1000 = 10.'),
          row('Wynik 42 na 60 punktów to…',['60%','65%','70%','75%'],2,'Podziel 42 przez 60.','42/60 = 0,7 = 70%.')
        ]}
      ]},
      'e8-algebra':{n:'03',title:'Algebra i równania',desc:'Wyrażenia, równania liniowe i matematyczne modele sytuacji.',accent:'purple',lead:'Nazwij niewiadomą, zapisz zależność, a potem wykonuj tę samą operację po obu stronach równania.',formulas:['a(b+c)=ab+ac','(a+b)(c+d)=ac+ad+bc+bd','ax+b=c','A·B=0 ⇒ A=0 lub B=0'],theory:[['Wyrażenia','Wyrazy podobne mają tę samą część literową i można dodawać ich współczynniki.'],['Nawiasy','Przy mnożeniu dwóch nawiasów każdy składnik pierwszego mnożymy przez każdy składnik drugiego.'],['Równania','Wykonuj tę samą operację po obu stronach, aż niewiadoma zostanie sama.'],['Modelowanie','Zapisz niewiadomą, przetłumacz warunki na równanie i sprawdź wynik w treści.']],paths:[
        {id:'e8-expressions',n:'01',title:'Wyrażenia algebraiczne',desc:'Obliczaj wartości i upraszczaj wyrażenia.',concept:{label:'WYRAŻENIA',formula:'a(b+c)=ab+ac',items:['łącz wyrazy podobne','uważaj na minus','podstawiaj w nawiasach']},rows:[
          row('Uprość 3x + 5x.',['8','8x','15x','x⁸'],1,'Dodaj współczynniki.','3x + 5x = 8x.'),
          row('Uprość 7a − 2a + 4.',['5a + 4','9a + 4','5a','9a'],0,'Połącz wyrazy z a.','7a − 2a + 4 = 5a + 4.'),
          row('Rozwiń 3(x + 4).',['3x + 4','3x + 7','3x + 12','12x'],2,'Pomnóż 3 przez oba składniki.','3(x + 4) = 3x + 12.'),
          row('Rozwiń −2(3x − 5).',['−6x − 10','−6x + 10','6x − 10','6x + 10'],1,'Pomnóż −2 przez oba składniki.','−2(3x − 5) = −6x + 10.'),
          row('Dla x = 3 oblicz 2x² − 1.',['11','17','35','71'],1,'Najpierw oblicz x².','2 · 9 − 1 = 17.'),
          row('Który zapis opisuje liczbę o 7 większą od x?',['7x','x − 7','x + 7','7 − x'],2,'„O 7 większa” oznacza dodawanie.','Szukana liczba to x + 7.'),
          row('Uprość 4y + 3 − y + 2.',['3y + 5','5y + 5','3y + 1','4y + 4'],0,'Połącz osobno wyrazy z y i liczby.','4y − y + 3 + 2 = 3y + 5.'),
          row('Dla a = −2 oblicz a³ + 5.',['−13','−3','3','13'],1,'(−2)³ = −8.','−8 + 5 = −3.'),
          row('Wyłącz wspólny czynnik z 6x + 9.',['2(3x+9)','3(2x+3)','6(x+9)','9(6x+1)'],1,'NWD liczb 6 i 9 to 3.','6x + 9 = 3(2x + 3).'),
          row('Rozwiń (x + 2)(x + 3).',['x² + 5x + 6','x² + 6x + 5','2x² + 6','x² + 5'],0,'Pomnóż każdy składnik pierwszego nawiasu przez każdy składnik drugiego.','x·x + x·3 + 2·x + 2·3 = x² + 5x + 6.')
        ]},
        {id:'e8-equations',n:'02',title:'Równania',desc:'Rozwiązuj równania i układaj je do zadań.',concept:{label:'RÓWNANIE',formula:'ax+b=c',items:['ta sama operacja po obu stronach','sprawdź wynik','nazwij niewiadomą']},rows:[
          row('Rozwiąż 3x + 5 = 20.',['x=3','x=5','x=8','x=15'],1,'Odejmij 5, potem podziel przez 3.','3x = 15, więc x = 5.'),
          row('Rozwiąż 7 − 2x = 1.',['x=2','x=3','x=4','x=6'],1,'Odejmij 7 i podziel przez −2.','−2x = −6, więc x = 3.'),
          row('Rozwiąż 5(x − 2) = 15.',['x=1','x=3','x=5','x=17'],2,'Podziel przez 5.','x − 2 = 3, więc x = 5.'),
          row('Rozwiąż x/4 + 3 = 8.',['x=5','x=11','x=20','x=32'],2,'Odejmij 3 i pomnóż przez 4.','x/4 = 5, więc x = 20.'),
          row('Rozwiąż 4x + 1 = 2x + 9.',['x=2','x=4','x=5','x=8'],1,'Przenieś 2x na lewo, a 1 na prawo.','2x = 8, więc x = 4.'),
          row('Równanie 2(x+3)=2x+6 ma…',['brak rozwiązań','jedno rozwiązanie','dwa rozwiązania','nieskończenie wiele rozwiązań'],3,'Rozwiń nawias.','Obie strony są identyczne dla każdego x.'),
          row('Suma liczby x i jej podwojenia wynosi 36. Ile wynosi x?',['9','12','18','24'],1,'Zapisz x + 2x = 36.','3x = 36, więc x = 12.'),
          row('Prostokąt ma boki x i x+3 oraz obwód 26. Krótszy bok ma…',['5','6','8','10'],0,'Zapisz 2x + 2(x+3)=26.','4x + 6 = 26, więc x = 5.'),
          row('Trzy kolejne liczby mają sumę 42. Środkowa liczba to…',['12','13','14','15'],2,'Zapisz (x−1)+x+(x+1)=42.','3x = 42, więc x = 14.'),
          row('Po odjęciu 8 od pewnej liczby otrzymano jej połowę. Ta liczba to…',['8','12','16','24'],2,'Zapisz x−8=x/2.','x/2 = 8, więc x = 16.')
        ]}
      ]},
      'e8-proportion':{n:'04',title:'Proporcje i zadania tekstowe',desc:'Skala, proporcjonalność, prędkość, czas i ceny.',accent:'orange',lead:'Zapisuj jednostki i sprawdzaj, czy zależność rośnie wprost proporcjonalnie.',formulas:['y = ax','częśćᵢ = całość·udziałᵢ/suma udziałów','v = s/t','skala 1:n'],theory:[['Proporcjonalność','Wielkości wprost proporcjonalne mają stały iloraz y/x.'],['Podział proporcjonalny','Dodaj liczby opisujące stosunek, oblicz wartość jednej części i pomnóż ją przez każdy udział.'],['Skala','W skali 1:n jeden centymetr na planie odpowiada n centymetrom w rzeczywistości.'],['Ruch i cena','Przed obliczeniem ujednolić jednostki. Dziel koszt przez liczbę sztuk lub masę, aby porównywać oferty.']],paths:[
        {id:'e8-ratio-scale',n:'01',title:'Proporcje i skala',desc:'Rozwiązuj proporcje i przeliczaj skalę.',concept:{label:'PROPORCJA',formula:'a/b = c/d',items:['mnożenie na krzyż','stały iloraz','skala 1:n']},rows:[
          row('3 zeszyty kosztują 12 zł. Ile kosztuje 5 zeszytów?',['15 zł','18 zł','20 zł','24 zł'],2,'Najpierw oblicz cenę jednego zeszytu.','Jeden kosztuje 4 zł, więc pięć kosztuje 20 zł.'),
          row('Rozwiąż proporcję x/6 = 4/3.',['x=2','x=8','x=12','x=24'],1,'Pomnóż 6 przez 4/3.','x = 8.'),
          row('Mapa ma skalę 1:50 000. Odcinek 3 cm oznacza…',['150 m','500 m','1,5 km','15 km'],2,'3 · 50 000 cm = 150 000 cm.','150 000 cm = 1,5 km.'),
          row('Na planie w skali 1:200 ściana ma 4 cm. W rzeczywistości ma…',['0,8 m','8 m','80 m','800 m'],1,'4 · 200 cm = 800 cm.','800 cm = 8 m.'),
          row('6 kg jabłek kosztuje 27 zł. Cena 1 kg to…',['3,50 zł','4 zł','4,50 zł','5 zł'],2,'Podziel koszt przez masę.','27 : 6 = 4,50 zł.'),
          row('Przepis na 4 osoby wymaga 300 g mąki. Dla 6 osób potrzeba…',['400 g','450 g','500 g','600 g'],1,'Pomnóż przez 6/4.','300 · 1,5 = 450 g.'),
          row('Która zależność jest wprost proporcjonalna?',['Cena i liczba jednakowych biletów','Wiek i wzrost człowieka','Czas i temperatura','Numer buta i masa'],0,'Szukaj stałej ceny jednej sztuki.','Koszt jednakowych biletów rośnie proporcjonalnie do ich liczby.'),
          row('Kwotę 240 zł podzielono w stosunku 1 : 3. Większa część wynosi…',['60 zł','80 zł','120 zł','180 zł'],3,'Suma udziałów to 1 + 3 = 4.','Jedna część to 240 : 4 = 60 zł, więc większa część wynosi 3 · 60 = 180 zł.'),
          row('Model ma długość 25 cm w skali 1:20. Oryginał ma…',['0,5 m','5 m','20 m','50 m'],1,'25 · 20 cm = 500 cm.','500 cm = 5 m.'),
          row('Za 0,8 kg sera zapłacono 28 zł. Kilogram kosztuje…',['22,40 zł','32 zł','35 zł','36 zł'],2,'Podziel 28 przez 0,8.','28 : 0,8 = 35 zł.')
        ]},
        {id:'e8-motion',n:'02',title:'Droga, prędkość, czas i jednostki',desc:'Stosuj zależność s = v·t i przeliczaj jednostki.',concept:{label:'RUCH',formula:'s = v · t',items:['v = s/t','t = s/v','1 h = 60 min']},rows:[
          row('Samochód jedzie 60 km/h przez 2 h. Pokona…',['30 km','60 km','120 km','180 km'],2,'Pomnóż prędkość przez czas.','s = 60 · 2 = 120 km.'),
          row('Rowerzysta przejechał 45 km w 3 h. Średnia prędkość to…',['15 km/h','30 km/h','42 km/h','135 km/h'],0,'Podziel drogę przez czas.','v = 45 : 3 = 15 km/h.'),
          row('Pociąg pokona 240 km z prędkością 80 km/h w czasie…',['2 h','3 h','4 h','6 h'],1,'Podziel drogę przez prędkość.','t = 240 : 80 = 3 h.'),
          row('30 minut to…',['0,3 h','0,5 h','1/3 h','2 h'],1,'Podziel 30 przez 60.','30 min = 0,5 h.'),
          row('Prędkość 5 m/s to…',['5 km/h','12 km/h','18 km/h','50 km/h'],2,'Pomnóż przez 3,6.','5 m/s = 18 km/h.'),
          row('Piechur idzie 4 km/h przez 1 h 30 min. Pokona…',['4 km','5 km','6 km','8 km'],2,'1 h 30 min = 1,5 h.','4 · 1,5 = 6 km.'),
          row('Autobus ruszył o 8:45 i jechał 1 h 35 min. Przyjechał o…',['9:80','10:10','10:20','10:30'],2,'Dodaj najpierw godzinę, potem 35 minut.','8:45 + 1:35 = 10:20.'),
          row('2,5 km to…',['25 m','250 m','2500 m','25000 m'],2,'1 km = 1000 m.','2,5 km = 2500 m.'),
          row('450 sekund to…',['4 min 50 s','7 min 30 s','7 min 50 s','45 min'],1,'Podziel przez 60.','450 s = 7 min 30 s.'),
          row('Samochód zwiększył prędkość z 50 do 70 km/h. W 2 h pokona o…',['20 km więcej','40 km więcej','100 km więcej','140 km więcej'],1,'Porównaj drogi dla tego samego czasu.','Różnica to (70−50) · 2 = 40 km.')
        ]}
      ]},
      'e8-geometry':{n:'05',title:'Geometria płaska',desc:'Kąty, figury, pola, obwody, okręgi i twierdzenie Pitagorasa.',accent:'pink',lead:'Zaznacz dane na rysunku, nazwij figurę i dopiero potem wybierz wzór.',formulas:['P△ = a·h/2','P▭ = a·b','a²+b²=c²','l okręgu = 2πr'],theory:[['Kąty','Kąty przyległe sumują się do 180°, a wierzchołkowe są równe.'],['Trójkąty','Suma kątów trójkąta wynosi 180°. Pole to połowa iloczynu podstawy i wysokości.'],['Czworokąty','Rozpoznawaj własności boków, kątów i przekątnych, zanim zastosujesz wzór.'],['Pitagoras','W trójkącie prostokątnym suma kwadratów przyprostokątnych jest równa kwadratowi przeciwprostokątnej.']],paths:[
        {id:'e8-figures',n:'01',title:'Kąty, trójkąty i czworokąty',desc:'Rozpoznawaj własności figur i licz pola.',concept:{label:'FIGURY',formula:'P△ = a·h/2',items:['suma kątów △ = 180°','P prostokąta = ab','P trapezu = (a+b)h/2']},rows:[
          row('Dwa kąty przyległe mają miary 65° i…',['25°','65°','115°','295°'],2,'Ich suma wynosi 180°.','180° − 65° = 115°.'),
          row('W trójkącie kąty mają 40° i 70°. Trzeci kąt ma…',['60°','70°','80°','110°'],1,'Suma kątów trójkąta wynosi 180°.','180° − 40° − 70° = 70°.'),
          row('Pole trójkąta o podstawie 10 cm i wysokości 6 cm to…',['16 cm²','30 cm²','60 cm²','120 cm²'],1,'Podziel iloczyn przez 2.','P = 10 · 6 / 2 = 30 cm².'),
          row('Prostokąt ma boki 7 cm i 4 cm. Jego obwód to…',['11 cm','22 cm','28 cm','56 cm'],1,'Dodaj wszystkie boki.','2 · (7 + 4) = 22 cm.'),
          row('Pole równoległoboku o podstawie 8 cm i wysokości 5 cm to…',['13 cm²','20 cm²','40 cm²','80 cm²'],2,'Pomnóż podstawę przez wysokość.','P = 8 · 5 = 40 cm².'),
          row('Trapez ma podstawy 6 i 10 oraz wysokość 4. Pole wynosi…',['16','24','32','64'],2,'Użyj (a+b)h/2.','(6 + 10) · 4 / 2 = 32.'),
          row('Każdy kąt wewnętrzny kwadratu ma…',['45°','60°','90°','180°'],2,'Kwadrat ma cztery kąty proste.','Każdy kąt ma 90°.'),
          row('Przekątne rombu…',['są zawsze równe','przecinają się pod kątem prostym','nie przecinają się','są bokami'],1,'Przypomnij własności rombu.','Przekątne rombu są prostopadłe.'),
          row('Czy odcinki długości 3, 4 i 8 mogą być bokami trójkąta?',['Tak, zawsze','Tak, bo 3+4=7','Nie, bo 3+4<8','Nie, bo wszystkie boki są różne'],2,'Sprawdź nierówność trójkąta dla dwóch krótszych boków.','Nie. Suma 3 + 4 = 7 jest mniejsza od 8, więc odcinki nie zamkną trójkąta.'),
          row('Dwie proste równoległe przecięto sieczną. Kąt odpowiadający kątowi 68° ma…',['22°','68°','112°','180°'],1,'Kąty odpowiadające przy prostych równoległych są równe.','Szukany kąt ma 68°, ponieważ jest kątem odpowiadającym.')
        ]},
        {id:'e8-circle-pythagoras',n:'02',title:'Okrąg i twierdzenie Pitagorasa',desc:'Obliczaj długości, obwody i pola.',concept:{label:'PITAGORAS',formula:'a²+b²=c²',items:['c — przeciwprostokątna','O = 2πr','P koła = πr²']},rows:[
          row('Przyprostokątne mają 3 i 4. Przeciwprostokątna ma…',['5','6','7','12'],0,'Oblicz √(3²+4²).','√25 = 5.'),
          row('Przeciwprostokątna ma 13, a jedna przyprostokątna 5. Druga ma…',['8','10','12','18'],2,'Oblicz √(13²−5²).','√144 = 12.'),
          row('Czy trójkąt o bokach 6, 8, 10 jest prostokątny?',['Tak','Nie','Tylko równoramienny','Nie można ustalić'],0,'Sprawdź 6²+8² i 10².','36 + 64 = 100, więc jest prostokątny.'),
          row('Promień koła ma 5 cm. Średnica wynosi…',['2,5 cm','5 cm','10 cm','25 cm'],2,'Średnica to dwa promienie.','d = 2r = 10 cm.'),
          row('Długość okręgu o promieniu 3 wynosi…',['3π','6π','9π','12π'],1,'Użyj wzoru l = 2πr.','Podstawiamy r = 3: l = 2π · 3 = 6π. Wynik ma jednostkę długości.'),
          row('Pole koła o promieniu 4 wynosi…',['4π','8π','16π','32π'],2,'Użyj πr².','P = π · 4² = 16π.'),
          row('Kąt pełny ma…',['90°','180°','270°','360°'],3,'Pełny obrót wraca do kierunku początkowego.','Kąt pełny ma 360°.'),
          row('Kąt środkowy oparty na półokręgu ma…',['45°','90°','180°','360°'],2,'Półokrąg to połowa pełnego kąta.','Ma 180°.'),
          row('Drabina długości 5 m stoi 3 m od ściany. Sięga na wysokość…',['2 m','3 m','4 m','8 m'],2,'Drabina jest przeciwprostokątną.','√(5²−3²) = 4 m.'),
          row('Przekątna kwadratu o boku 6 ma długość…',['6','6√2','12','18'],1,'Zastosuj Pitagorasa do dwóch boków kwadratu.','d² = 36 + 36, więc d = 6√2.')
        ]}
      ]},
      'e8-space':{n:'06',title:'Bryły i układ współrzędnych',desc:'Pola i objętości brył oraz geometria na płaszczyźnie współrzędnych.',accent:'navy',lead:'Rozdziel dane podstawy od wysokości bryły i czytaj współrzędne zawsze w kolejności x, y.',formulas:['V graniastosłupa = Pp·H','V ostrosłupa = ⅓·Pp·H','Pc = Pp + Pb','S = ((x₁+x₂)/2,(y₁+y₂)/2)'],theory:[['Bryły','Objętość graniastosłupa to Pp·H, a ostrosłupa o tej samej podstawie i wysokości — jedna trzecia tej wartości.'],['Jednostki','1 dm³ = 1 l, a 1 cm³ = 1 ml. Przy zmianie jednostki długości w objętości współczynnik podnosimy do trzeciej potęgi.'],['Współrzędne','Pierwsza współrzędna opisuje ruch poziomy, druga pionowy.'],['Symetria','Odbicie względem osi y zmienia znak x, a względem osi x zmienia znak y.']],paths:[
        {id:'e8-solids',n:'01',title:'Bryły i jednostki objętości',desc:'Rozpoznawaj siatki i licz pola oraz objętości.',concept:{label:'BRYŁY',formula:'V = Pp · H',items:['1 dm³ = 1 l','sześcian: V=a³','prostopadłościan: V=abc']},rows:[
          row('Sześcian ma krawędź 3 cm. Jego objętość to…',['9 cm³','18 cm³','27 cm³','54 cm³'],2,'Oblicz a³.','3³ = 27 cm³.'),
          row('Prostopadłościan ma wymiary 2, 3 i 5. Objętość wynosi…',['10','15','30','60'],2,'Pomnóż trzy wymiary.','2 · 3 · 5 = 30.'),
          row('Pole powierzchni sześcianu o krawędzi 4 to…',['16','64','96','128'],2,'Sześcian ma 6 kwadratowych ścian.','6 · 4² = 96.'),
          row('Graniastosłup ma pole podstawy 12 cm² i wysokość 7 cm. Objętość to…',['19 cm³','42 cm³','84 cm³','168 cm³'],2,'Pomnóż pole podstawy przez wysokość.','12 · 7 = 84 cm³.'),
          row('1 dm³ to…',['1 ml','10 ml','100 ml','1 l'],3,'To objętość kostki 10 cm × 10 cm × 10 cm.','1 dm³ = 1 l.'),
          row('2500 cm³ to…',['0,25 l','2,5 l','25 l','250 l'],1,'1000 cm³ = 1 l.','2500 cm³ = 2,5 l.'),
          row('Ile ścian ma graniastosłup trójkątny?',['3','4','5','6'],2,'Ma dwie podstawy i trzy ściany boczne.','Razem ma 5 ścian.'),
          row('Ostrosłup ma pole podstawy 18 cm² i wysokość 10 cm. Jego objętość wynosi…',['60 cm³','90 cm³','180 cm³','540 cm³'],0,'Użyj V = ⅓·Pp·H.','V = ⅓ · 18 · 10 = 60 cm³.'),
          row('Ostrosłup ma pole podstawy 25 cm², a suma pól ścian bocznych wynosi 40 cm². Pole całkowite to…',['15 cm²','40 cm²','65 cm²','100 cm²'],2,'Dodaj pole podstawy i pole boczne.','Pc = Pp + Pb = 25 + 40 = 65 cm².'),
          row('Akwarium 40 cm × 25 cm × 30 cm ma pojemność…',['3 l','30 l','300 l','3000 l'],1,'Oblicz cm³ i podziel przez 1000.','40 · 25 · 30 = 30000 cm³ = 30 l.')
        ]},
        {id:'e8-coordinate',n:'02',title:'Układ współrzędnych i symetria',desc:'Odczytuj punkty, długości i obrazy w symetrii.',concept:{label:'WSPÓŁRZĘDNE',formula:'A=(x,y)',items:['najpierw poziomo','potem pionowo','symetria osiowa zmienia jeden znak']},rows:[
          row('Punkt A=(−3,4) leży w…',['I ćwiartce','II ćwiartce','III ćwiartce','IV ćwiartce'],1,'x jest ujemne, y dodatnie.','Punkt leży w II ćwiartce.'),
          row('Punkt na osi x ma zawsze…',['x=0','y=0','x=y','x=1'],1,'Oś x jest pozioma.','Na osi x druga współrzędna wynosi 0.'),
          row('Odbicie punktu (3,−2) względem osi y to…',['(−3,−2)','(3,2)','(−3,2)','(2,−3)'],0,'Zmień znak pierwszej współrzędnej.','Otrzymujemy (−3,−2).'),
          row('Odbicie punktu (−4,5) względem osi x to…',['(4,5)','(−4,−5)','(4,−5)','(−5,4)'],1,'Zmień znak drugiej współrzędnej.','Otrzymujemy (−4,−5).'),
          row('Odległość punktów (1,2) i (1,7) wynosi…',['4','5','6','8'],1,'Punkty leżą pionowo; odejmij y.','|7−2| = 5.'),
          row('Środek odcinka o końcach (0,0) i (6,4) to…',['(2,3)','(3,2)','(6,4)','(12,8)'],1,'Uśrednij współrzędne.','S=(3,2).'),
          row('Który punkt leży na osi y?',['(0,5)','(5,0)','(5,5)','(−5,5)'],0,'Na osi y pierwsza współrzędna wynosi 0.','Punkt (0,5) leży na osi y.'),
          row('Przesunięcie punktu (2,1) o 3 w prawo daje…',['(−1,1)','(2,4)','(5,1)','(5,4)'],2,'Zwiększ tylko x.','Otrzymujemy (5,1).'),
          row('Punkty (−2,3) i (4,3) leżą na prostej…',['pionowej','poziomej','ukośnej','x=3'],1,'Mają tę samą współrzędną y.','Leżą na prostej poziomej y=3.'),
          row('Punkt symetryczny do (−2,−6) względem początku układu to…',['(2,6)','(−2,6)','(2,−6)','(6,2)'],0,'Zmień znaki obu współrzędnych.','Otrzymujemy (2,6).')
        ]}
      ]},
      'e8-data':{n:'07',title:'Dane i prawdopodobieństwo',desc:'Analiza danych, średnia, mediana, diagramy, zliczanie i losowość.',accent:'teal',lead:'Najpierw ustal wszystkie możliwe wyniki, a dopiero potem licz lub porównuj.',formulas:['średnia = suma/liczba danych','kąt diagramu = udział·360°','P(A)=liczba wyników sprzyjających/liczba wszystkich','reguła mnożenia: m·n'],theory:[['Średnia i mediana','Dodaj wszystkie wartości i podziel przez ich liczbę; medianę wybierz dopiero po uporządkowaniu danych.'],['Diagramy','Na diagramie kołowym 100% odpowiada 360°, więc kąt sektora to udział pomnożony przez 360°.'],['Zliczanie','Jeśli pierwszy wybór ma m możliwości, a drugi n, razem jest m·n wyników.'],['Prawdopodobieństwo','Dla wyników jednakowo prawdopodobnych dzielimy liczbę wyników sprzyjających przez liczbę wszystkich.']],paths:[
        {id:'e8-statistics',n:'01',title:'Tabele, wykresy i statystyka',desc:'Odczytuj dane oraz licz średnią i medianę.',concept:{label:'DANE',formula:'średnia = suma / liczba danych',items:['uporządkuj dane','czytaj jednostki','mediana to środek']},rows:[
          row('Średnia liczb 4, 6 i 8 wynosi…',['5','6','7','18'],1,'Dodaj liczby i podziel przez 3.','(4+6+8)/3 = 6.'),
          row('Mediana liczb 2, 9, 4, 7, 5 to…',['4','5','7','9'],1,'Najpierw uporządkuj dane.','2,4,5,7,9 — mediana to 5.'),
          row('Mediana liczb 3, 5, 8, 10 to…',['5','6','6,5','8'],2,'Policz średnią dwóch środkowych.','(5+8)/2 = 6,5.'),
          row('Dominanta zbioru 2, 3, 3, 4, 5 to…',['2','3','4','5'],1,'Szukaj wartości występującej najczęściej.','Najczęściej występuje 3.'),
          row('Średnia czterech ocen wynosi 4. Suma ocen to…',['4','8','12','16'],3,'Pomnóż średnią przez liczbę ocen.','4 · 4 = 16.'),
          row('Temperatury wynosiły 10°, 12°, 8°, 14°. Rozstęp to…',['4°','6°','8°','44°'],1,'Odejmij minimum od maksimum.','14° − 8° = 6°.'),
          row('W ankiecie 18 z 60 osób wybrało A. To…',['18%','24%','30%','42%'],2,'Oblicz 18/60.','18/60 = 0,3 = 30%.'),
          row('Do danych 5, 7, 9 dopisano 11. Nowa średnia to…',['7','8','9','11'],1,'Dodaj cztery liczby i podziel przez 4.','(5+7+9+11)/4 = 8.'),
          row('Na diagramie kołowym odpowiedzi „tak” stanowią 25%. Jaki kąt ma ten sektor?',['25°','45°','90°','120°'],2,'Pełne koło ma 360°.','25% · 360° = 0,25 · 360° = 90°.'),
          row('Średnia pięciu liczb wynosi 12. Ich suma to…',['17','24','50','60'],3,'Pomnóż średnią przez 5.','12 · 5 = 60.')
        ]},
        {id:'e8-probability',n:'02',title:'Kombinatoryka i prawdopodobieństwo',desc:'Zliczaj możliwości i obliczaj szanse prostych zdarzeń.',concept:{label:'PRAWDOPODOBIEŃSTWO',formula:'P(A)=|A|/|Ω|',items:['wyniki jednakowo możliwe','policz wszystkie wyniki','policz wyniki sprzyjające']},rows:[
          row('Rzucamy kostką. Prawdopodobieństwo wyrzucenia 6 wynosi…',['1/2','1/3','1/6','5/6'],2,'Jeden wynik sprzyjający spośród sześciu.','P = 1/6.'),
          row('Rzucamy kostką. Prawdopodobieństwo liczby parzystej wynosi…',['1/6','1/3','1/2','2/3'],2,'Parzyste wyniki to 2, 4 i 6.','3/6 = 1/2.'),
          row('W woreczku są 3 czerwone i 2 niebieskie kule. Szansa czerwonej to…',['2/5','3/5','1/2','3/2'],1,'Trzy wyniki sprzyjające spośród pięciu.','P = 3/5.'),
          row('Rzucamy monetą dwa razy. Liczba wszystkich wyników to…',['2','3','4','8'],2,'Każdy rzut ma 2 wyniki.','2 · 2 = 4.'),
          row('W dwóch rzutach monetą dokładnie jeden orzeł wypada w…',['1 wyniku','2 wynikach','3 wynikach','4 wynikach'],1,'Wyniki to OR i RO.','Są dwa wyniki sprzyjające.'),
          row('Mamy 3 koszulki i 2 pary spodni. Liczba zestawów to…',['5','6','8','12'],1,'Zastosuj regułę mnożenia.','3 · 2 = 6 zestawów.'),
          row('Losujemy liczbę ze zbioru {1,2,3,4,5}. P(liczba > 3) to…',['1/5','2/5','3/5','4/5'],1,'Sprzyjają 4 i 5.','P = 2/5.'),
          row('Które zdarzenie jest pewne przy rzucie kostką?',['Wypadnie 7','Wypadnie liczba od 1 do 6','Wypadnie 1','Wypadnie liczba parzysta'],1,'Zdarzenie pewne obejmuje wszystkie wyniki.','Na kostce zawsze wypada liczba od 1 do 6.'),
          row('Prawdopodobieństwo zdarzenia niemożliwego wynosi…',['0','1/2','1','6'],0,'Nie ma wyników sprzyjających.','P = 0.'),
          row('Kod składa się z jednej litery A lub B i jednej cyfry 1,2,3. Ile kodów?',['3','5','6','8'],2,'Dwa wybory litery i trzy wybory cyfry.','2 · 3 = 6 kodów.')
        ]}
      ]}
    }
  };

  const extraLearningPaths={
    'e8-numbers':{id:'e8-number-reasoning',n:'03',title:'Szacowanie i własności liczb',desc:'Ćwicz kolejność działań, przybliżenia, jednostki i sprytne rachunki.',concept:{label:'SPRYTNE LICZENIE',formula:'najpierw oszacuj, potem oblicz',items:['pilnuj kolejności działań','zamieniaj jednostki','sprawdzaj sens wyniku']},rows:[
      row('Wartość |−7| + |3| wynosi…',['4','10','−4','−10'],1,'Wartość bezwzględna jest odległością od zera.','7+3=10.'),
      row('Liczba 398 zaokrąglona do dziesiątek to…',['390','398','400','410'],2,'Spójrz na cyfrę jedności.','8 powoduje zaokrąglenie w górę do 400.'),
      row('Który wynik jest najlepszym oszacowaniem 49·21?',['około 100','około 500','około 1000','około 5000'],2,'Zaokrąglij do 50·20.','50·20=1000.'),
      row('2,5 km to…',['25 m','250 m','2500 m','25 000 m'],2,'Jeden kilometr ma 1000 metrów.','2,5·1000=2500 m.'),
      row('Liczba 3·10⁴ ma zapis dziesiętny…',['300','3000','30 000','300 000'],2,'Przesuń przecinek o cztery miejsca.','3·10⁴=30 000.'),
      row('Która liczba jest podzielna przez 9?',['234','235','236','238'],0,'Suma cyfr musi być podzielna przez 9.','2+3+4=9, więc 234 jest podzielne przez 9.'),
      row('NWD liczb 18 i 30 wynosi…',['3','6','9','12'],1,'Wypisz wspólne dzielniki.','Największy wspólny dzielnik to 6.'),
      row('NWW liczb 6 i 8 wynosi…',['12','18','24','48'],2,'Szukaj najmniejszej wspólnej wielokrotności.','Pierwszą wspólną wielokrotnością jest 24.'),
      row('Wartość 48:6·2 zgodnie z kolejnością działań to…',['4','8','16','24'],2,'Dzielenie i mnożenie wykonuj od lewej.','48:6=8, a 8·2=16.'),
      row('Która liczba leży między √49 a √81?',['6','7','8','9'],2,'Oblicz oba pierwiastki.','√49=7 i √81=9, więc między nimi leży 8.')
    ]},
    'e8-fractions':{id:'e8-percent-problems',n:'03',title:'Procenty w zadaniach',desc:'Rozwiązuj obniżki, podwyżki, procenty składane i zadania odwrotne.',concept:{label:'PROCENTY W PRAKTYCE',formula:'nowa wartość = stara · mnożnik',items:['obniżka 20% → ·0,8','podwyżka 15% → ·1,15','nie dodawaj zmian procentowych']},rows:[
      row('Cena 200 zł po obniżce o 15% wynosi…',['170 zł','175 zł','185 zł','230 zł'],0,'Oblicz 85% ceny.','200·0,85=170 zł.'),
      row('Cena 80 zł wzrosła o 25%. Nowa cena to…',['90 zł','95 zł','100 zł','105 zł'],2,'Pomnóż przez 1,25.','80·1,25=100 zł.'),
      row('Po obniżce o 20% produkt kosztuje 120 zł. Cena początkowa to…',['144 zł','150 zł','160 zł','180 zł'],1,'120 zł stanowi 80% ceny.','120:0,8=150 zł.'),
      row('30 punktów z 40 to…',['60%','70%','75%','80%'],2,'Podziel 30 przez 40.','30/40=0,75=75%.'),
      row('Liczba 50 zwiększona o 10%, a potem zmniejszona o 10% wynosi…',['49,5','50','50,5','55'],0,'Użyj mnożników 1,1 i 0,9.','50·1,1·0,9=49,5.'),
      row('Podatek 8% od kwoty 250 zł wynosi…',['8 zł','16 zł','20 zł','25 zł'],2,'Oblicz 0,08·250.','Podatek wynosi 20 zł.'),
      row('Frekwencja wzrosła z 60% do 72%. To wzrost o…',['12%','12 punktów procentowych','20 punktów procentowych','72 punkty procentowe'],1,'Odejmij wartości procentowe.','72%−60%=12 punktów procentowych.'),
      row('40% pewnej liczby to 28. Ta liczba wynosi…',['56','70','84','112'],1,'Podziel 28 przez 0,4.','28:0,4=70.'),
      row('Po dwukrotnej podwyżce o 10% cena 100 zł wynosi…',['120 zł','121 zł','122 zł','110 zł'],1,'Dwa razy pomnóż przez 1,1.','100·1,1²=121 zł.'),
      row('W klasie 12 z 30 uczniów wybrało koło sportowe. To…',['30%','40%','45%','60%'],1,'Oblicz 12/30.','12/30=0,4=40%.')
    ]},
    'e8-algebra':{id:'e8-algebra-models',n:'03',title:'Równania w zadaniach',desc:'Zamieniaj treść zadania na równanie i sprawdzaj wynik w kontekście.',concept:{label:'MODEL ALGEBRAICZNY',formula:'niewiadoma → równanie → sprawdzenie',items:['nazwij x','zapisz zależność','odpowiedz pełnym zdaniem']},rows:[
      row('Liczba o 7 większa od x to…',['7x','x−7','x+7','7−x'],2,'Słowa „o 7 większa” oznaczają dodawanie.','Szukane wyrażenie to x+7.'),
      row('Suma liczby x i liczby dwa razy większej wynosi 36. x to…',['9','12','18','24'],1,'Zapisz x+2x=36.','3x=36, więc x=12.'),
      row('Obwód prostokąta o bokach x i x+3 wynosi 30. Krótszy bok ma…',['5','6','7','9'],1,'Zapisz 2x+2(x+3)=30.','4x=24, więc x=6.'),
      row('Trzy kolejne liczby naturalne mają sumę 42. Środkowa to…',['12','13','14','15'],2,'Zapisz (x−1)+x+(x+1)=42.','3x=42, więc x=14.'),
      row('Bilet ulgowy kosztuje x zł, a normalny o 8 zł więcej. Razem kosztują 32 zł. Bilet ulgowy kosztuje…',['10 zł','12 zł','16 zł','20 zł'],1,'Zapisz x+(x+8)=32.','2x=24, więc x=12 zł.'),
      row('Ojciec jest trzy razy starszy od syna. Razem mają 48 lat. Syn ma…',['12 lat','16 lat','24 lata','36 lat'],0,'Zapisz x+3x=48.','4x=48, więc syn ma 12 lat.'),
      row('Po odjęciu 5 od podwojonej liczby otrzymano 19. Ta liczba to…',['7','10','12','14'],2,'Zapisz 2x−5=19.','2x=24, więc x=12.'),
      row('W pudełku było x kulek. Po dołożeniu 25 jest ich 60. Początkowo było…',['25','35','60','85'],1,'Rozwiąż x+25=60.','x=35.'),
      row('Dłuższy bok prostokąta jest dwa razy większy od krótszego. Obwód wynosi 36. Krótszy bok ma…',['4','6','9','12'],1,'Zapisz 2x+2·2x=36.','6x=36, więc x=6.'),
      row('Liczba zmniejszona o 20% wynosi 64. Liczba początkowa to…',['72','76','80','84'],2,'64 stanowi 80% liczby.','64:0,8=80.')
    ]},
    'e8-proportion':{id:'e8-practical-problems',n:'03',title:'Skala, droga i czas',desc:'Łącz proporcje z mapami, prędkością, czasem i codziennymi sytuacjami.',concept:{label:'WIELKOŚCI W PRAKTYCE',formula:'s = v · t',items:['ujednolić jednostki','skala 1:n','sprawdzić proporcję']},rows:[
      row('Na mapie w skali 1:50 000 odcinek ma 4 cm. W terenie to…',['200 m','500 m','2 km','20 km'],2,'4·50 000 cm=200 000 cm.','200 000 cm=2 km.'),
      row('Samochód jedzie 60 km/h przez 2,5 h. Pokona…',['120 km','150 km','180 km','240 km'],1,'Użyj s=v·t.','60·2,5=150 km.'),
      row('Rowerzysta przejechał 36 km w 3 h. Średnia prędkość to…',['9 km/h','12 km/h','18 km/h','108 km/h'],1,'Podziel drogę przez czas.','36:3=12 km/h.'),
      row('90 minut to…',['1,2 h','1,5 h','1,9 h','2 h'],1,'Podziel liczbę minut przez 60.','90:60=1,5 h.'),
      row('Przepis na 4 osoby wymaga 300 g mąki. Dla 10 osób potrzeba…',['600 g','700 g','750 g','900 g'],2,'Pomnóż przez 10/4.','300·2,5=750 g.'),
      row('12 pracowników wykonuje zadanie w 6 dni. Przy tej samej wydajności 18 pracowników potrzebuje…',['3 dni','4 dni','6 dni','9 dni'],1,'To proporcjonalność odwrotna.','12·6=18·4, więc 4 dni.'),
      row('Na planie 3 cm odpowiada 12 m. Skala planu to…',['1:40','1:400','1:4000','1:40 000'],1,'12 m=1200 cm.','3:1200=1:400.'),
      row('Pieszy idzie 5 km/h. Ile kilometrów pokona w 36 minut?',['2 km','3 km','4 km','5 km'],1,'36 min=0,6 h.','5·0,6=3 km.'),
      row('Pociąg pokonał 210 km z prędkością 70 km/h. Czas jazdy to…',['2 h','3 h','4 h','5 h'],1,'Użyj t=s/v.','210:70=3 h.'),
      row('Cena 6 zeszytów to 27 zł. Przy tej samej cenie 10 zeszytów kosztuje…',['40 zł','42 zł','45 zł','54 zł'],2,'Jeden zeszyt kosztuje 27:6=4,50 zł.','10·4,50=45 zł.')
    ]},
    'e8-geometry':{id:'e8-geometry-reasoning',n:'03',title:'Geometria w zadaniach',desc:'Łącz kąty, pola, obwody, podobieństwo i twierdzenie Pitagorasa.',concept:{label:'PLAN ROZWIĄZANIA',formula:'rysunek → dane → własność → wynik',items:['zaznacz dane','dobierz wzór','sprawdź jednostkę']},rows:[
      row('Dwa kąty trójkąta mają 35° i 65°. Trzeci kąt ma…',['70°','80°','90°','100°'],1,'Suma kątów trójkąta to 180°.','180°−35°−65°=80°.'),
      row('Przekątna kwadratu o boku 5 ma długość…',['5','5√2','10','25'],1,'Zastosuj Pitagorasa.','d=√(25+25)=5√2.'),
      row('Prostokąt ma obwód 34 cm, a jeden bok 7 cm. Drugi bok ma…',['8 cm','10 cm','13 cm','20 cm'],1,'Zapisz 2·7+2b=34.','2b=20, więc b=10 cm.'),
      row('Pole trapezu o podstawach 5 i 9 oraz wysokości 4 wynosi…',['14','28','36','56'],1,'Użyj P=(a+b)h/2.','P=(5+9)·4/2=28.'),
      row('Kąt zewnętrzny przy wierzchołku trójkąta ma 120°. Kąt wewnętrzny przy tym wierzchołku ma…',['30°','60°','90°','120°'],1,'Kąty przyległe sumują się do 180°.','180°−120°=60°.'),
      row('Koło ma średnicę 10 cm. Jego pole wynosi…',['10π cm²','20π cm²','25π cm²','100π cm²'],2,'Promień to połowa średnicy.','r=5, więc P=25π cm².'),
      row('Figurę powiększono w skali 3. Jej pole wzrosło…',['3 razy','6 razy','9 razy','27 razy'],2,'Pole zmienia się jak kwadrat skali.','3²=9.'),
      row('Trójkąt o bokach 8, 15, 17 jest…',['równoboczny','prostokątny','rozwartokątny','niemożliwy'],1,'Sprawdź 8²+15².','64+225=289=17², więc jest prostokątny.'),
      row('Długość okręgu o średnicy 12 wynosi…',['6π','12π','24π','144π'],1,'We wzorze l=πd podstaw średnicę.','l=12π.'),
      row('Romb ma przekątne 10 cm i 6 cm. Jego pole wynosi…',['16 cm²','30 cm²','60 cm²','120 cm²'],1,'Pole rombu to połowa iloczynu przekątnych.','P=10·6/2=30 cm².')
    ]},
    'e8-space':{id:'e8-solid-problems',n:'03',title:'Bryły i współrzędne',desc:'Obliczaj objętości, pola powierzchni i położenie punktów.',concept:{label:'BRYŁY I UKŁAD',formula:'najpierw szkic i jednostki',items:['V=Pp·H','pole z siatki','współrzędne czytaj po kolei']},rows:[
      row('Sześcian ma krawędź 4 cm. Jego objętość wynosi…',['16 cm³','32 cm³','64 cm³','96 cm³'],2,'Objętość sześcianu to a³.','4³=64 cm³.'),
      row('Pole powierzchni sześcianu o krawędzi 3 cm wynosi…',['18 cm²','27 cm²','36 cm²','54 cm²'],3,'Sześcian ma sześć jednakowych ścian.','6·3²=54 cm².'),
      row('Prostopadłościan 2 cm × 3 cm × 5 cm ma objętość…',['10 cm³','15 cm³','30 cm³','60 cm³'],2,'Pomnóż trzy wymiary.','2·3·5=30 cm³.'),
      row('2 dm³ to…',['20 cm³','200 cm³','2000 cm³','20 000 cm³'],2,'1 dm³=1000 cm³.','2 dm³=2000 cm³.'),
      row('Graniastosłup ma pole podstawy 12 cm² i wysokość 7 cm. Objętość to…',['19 cm³','42 cm³','84 cm³','168 cm³'],2,'Użyj V=Pp·H.','12·7=84 cm³.'),
      row('Środek odcinka AB to S=(2,3), a A=(−2,1). Punkt B ma współrzędne…',['(0,2)','(4,5)','(6,5)','(6,7)'],2,'Ze wzoru na środek: (−2+xB)/2=2 oraz (1+yB)/2=3.','−2 + xB = 4, więc xB = 6; 1 + yB = 6, więc yB = 5. Zatem B=(6,5).'),
      row('Punkt symetryczny do (5,−2) względem osi x to…',['(−5,−2)','(−5,2)','(5,2)','(2,5)'],2,'Przy odbiciu względem osi x zmienia się znak y.','Otrzymujemy (5,2).'),
      row('Środek odcinka o końcach (−2,1) i (6,5) to…',['(2,3)','(4,3)','(2,6)','(8,6)'],0,'Uśrednij osobno obie współrzędne.','S=(2,3).'),
      row('Suma długości wszystkich krawędzi sześcianu o boku 5 cm wynosi…',['30 cm','40 cm','60 cm','125 cm'],2,'Sześcian ma 12 krawędzi.','12·5=60 cm.'),
      row('Akwarium 50 cm × 20 cm × 30 cm ma pojemność…',['3 l','30 l','300 l','3000 l'],1,'Policz cm³ i zamień: 1000 cm³=1 l.','50·20·30=30 000 cm³=30 l.')
    ]},
    'e8-data':{id:'e8-data-reasoning',n:'03',title:'Dane, wykresy i losowość',desc:'Wyciągaj wnioski z danych i rozwiązuj wieloetapowe zadania losowe.',concept:{label:'OD DANYCH DO WNIOSKU',formula:'uporządkuj → policz → zinterpretuj',items:['czytaj opis osi','sprawdź wszystkie wyniki','odpowiedz w kontekście']},rows:[
      row('Średnia pięciu liczb wynosi 8. Po dopisaniu liczby 14 nowa średnia wynosi…',['8','9','10','11'],1,'Pierwotna suma to 5·8.','(40+14):6=9.'),
      row('Mediana danych 2, 4, 4, 7, 9, 12 wynosi…',['4','5','5,5','7'],2,'Dla sześciu danych uśrednij trzecią i czwartą.','(4+7)/2=5,5.'),
      row('W pudełku są 4 białe i 6 czarnych kul. P(biała) wynosi…',['1/5','2/5','3/5','4/5'],1,'Cztery wyniki sprzyjające na dziesięć.','4/10=2/5.'),
      row('Rzucamy kostką. P(wynik mniejszy niż 3) wynosi…',['1/6','1/3','1/2','2/3'],1,'Sprzyjają wyniki 1 i 2.','2/6=1/3.'),
      row('Z cyfr 1, 2, 3 tworzymy dwucyfrowe liczby bez powtórzeń. Ile ich jest?',['3','6','8','9'],1,'Na pierwsze miejsce są 3 wybory, na drugie 2.','3·2=6.'),
      row('Średnia ocen 3, 4, 5 i x wynosi 4. x to…',['3','4','5','6'],1,'Suma czterech ocen musi wynosić 16.','3+4+5+x=16, więc x=4.'),
      row('W dwóch rzutach monetą P(co najmniej jeden orzeł) wynosi…',['1/4','1/2','3/4','1'],2,'Tylko wynik RR nie sprzyja zdarzeniu.','Sprzyjają 3 z 4 wyników, więc P=3/4.'),
      row('Rozstęp danych 6, 11, 9, 14, 8 wynosi…',['3','5','6','8'],3,'Odejmij minimum od maksimum.','14−6=8.'),
      row('Losujemy liczbę od 1 do 12. Ile wyników sprzyja podzielności przez 3?',['3','4','6','9'],1,'Wypisz 3, 6, 9, 12.','Są 4 wyniki sprzyjające.'),
      row('Sklep sprzedał kolejno 8, 12, 10 i 14 sztuk. Średnia dzienna sprzedaż to…',['10','11','12','44'],1,'Dodaj wyniki i podziel przez 4.','(8+12+10+14):4=11.')
    ]}
  };

  Object.entries(extraLearningPaths).forEach(([course,path])=>window.SMART_E8.specs[course].paths.push(path));
  const extraTheory={
    'e8-numbers':['Szacowanie i kontrola wyniku','Przed dokładnym rachunkiem określ rząd wielkości. Po obliczeniu sprawdź znak, jednostkę i to, czy odpowiedź pasuje do treści.'],
    'e8-fractions':['Kolejne zmiany procentowe','Każdą zmianę licz osobno za pomocą mnożnika. Obniżka o 20% to mnożenie przez 0,8, a podwyżka o 20% przez 1,2.'],
    'e8-algebra':['Modelowanie zadania','Nazwij niewiadomą, zapisz zależność jednym równaniem, rozwiąż je i na końcu sprawdź wynik w treści zadania.'],
    'e8-proportion':['Droga, prędkość i czas','Korzystaj z zależności s=v·t dopiero po ujednoliceniu jednostek, szczególnie minut i godzin.'],
    'e8-geometry':['Plan rozwiązania geometrycznego','Wykonaj szkic, zaznacz dane i szukaną wielkość. Jeden poprawnie dobrany wzór zwykle wystarcza do rozpoczęcia rozwiązania.'],
    'e8-space':['Jednostki pola i objętości','Przy zamianie jednostek pamiętaj, że jednostki pola zmieniają się w kwadracie, a objętości w sześcianie.'],
    'e8-data':['Wniosek z danych','Sam wynik rachunku nie wystarcza: odczytaj opis osi, jednostkę i sformułuj odpowiedź odnoszącą się do badanego zjawiska.']
  };
  Object.entries(extraTheory).forEach(([course,item])=>window.SMART_E8.specs[course].theory.push(item));
})();
