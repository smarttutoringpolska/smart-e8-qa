(function(){
  if(!window.SMART_E8)return;
  const row=(q,options,correct,hint,answer)=>[q,options,correct,hint,answer.trim().length>=52?answer:`Krok 1: ${hint} Krok 2: ${answer}`];

  window.SMART_E8.topics.push(
    {id:'e8-powers-plus',n:'VIII',course:'e8-powers-plus',title:'Potęgi i pierwiastki',group:'numbers',desc:'Prawa działań na potęgach, notacja wykładnicza, pierwiastki i szacowanie.',items:['Iloczyn i iloraz potęg','Potęga potęgi','Notacja wykładnicza','Pierwiastki kwadratowe i sześcienne','Szacowanie wartości'],progress:0},
    {id:'e8-percent-plus',n:'IX',course:'e8-percent-plus',title:'Procenty i finanse',group:'numbers',desc:'Procent liczby, zadania odwrotne, podwyżki, obniżki i proste finanse.',items:['Procent liczby','Obliczanie całości','Zmiany procentowe','Punkty procentowe','Promocje i oszczędności'],progress:0},
    {id:'e8-equations-plus',n:'X',course:'e8-equations-plus',title:'Równania i zadania tekstowe',group:'algebra',desc:'Równania liniowe, dobieranie modelu oraz zadania o wieku, cenach i geometrii.',items:['Przekształcanie równań','Równania z nawiasami','Zadania o wieku','Zadania o cenach','Równania w geometrii'],progress:0},
    {id:'e8-circle-plus',n:'XI',course:'e8-circle-plus',title:'Koło, Pitagoras i geometria',group:'geometry',desc:'Okręgi, koła, przekątne, trójkąty prostokątne i figury złożone.',items:['Twierdzenie Pitagorasa','Przekątna kwadratu i prostokąta','Długość okręgu','Pole koła','Figury złożone'],progress:0},
    {id:'e8-reasoning',n:'XII',course:'e8-reasoning',title:'Strategie do zadań otwartych',group:'algebra',desc:'Planowanie rozwiązania, argumentacja, uzasadnianie i zadania wieloetapowe.',items:['Wybór strategii','Ocena poprawności rozwiązania','Uzasadnianie','Zadania wieloetapowe','Kontrola wyniku'],progress:0}
  );

  Object.assign(window.SMART_E8.specs,{
    'e8-powers-plus':{n:'08',title:'Potęgi i pierwiastki',desc:'Osobny, pełny kurs rachunków na potęgach i pierwiastkach.',accent:'cyan',lead:'Zanim zaczniesz liczyć, sprawdź podstawę potęgi, wykładnik i znak całego wyrażenia.',formulas:['aᵐ·aⁿ=aᵐ⁺ⁿ','aᵐ:aⁿ=aᵐ⁻ⁿ','(aᵐ)ⁿ=aᵐⁿ','√(a²)=|a|'],theory:[
      ['Potęgi o tej samej podstawie','Przy mnożeniu dodajemy wykładniki, a przy dzieleniu je odejmujemy. Podstawa pozostaje bez zmian.'],
      ['Potęga potęgi','Podnosząc potęgę do potęgi, mnożymy wykładniki. Nawias decyduje, czy znak minus należy do podstawy.'],
      ['Notacja wykładnicza','Liczbę zapisujemy jako a·10ⁿ, gdzie 1≤a<10. Dodatni wykładnik opisuje duże liczby, a ujemny małe.'],
      ['Pierwiastki','Pierwiastek kwadratowy jest działaniem odwrotnym do podnoszenia nieujemnej liczby do kwadratu.'],
      ['Szacowanie','Porównuj liczbę pod pierwiastkiem z sąsiednimi pełnymi kwadratami, np. 25<30<36.']
    ],paths:[
      {id:'xpow-laws',n:'01',title:'Prawa działań na potęgach',desc:'Mnożenie, dzielenie i potęgowanie potęg.',concept:{label:'POTĘGI',formula:'aᵐ·aⁿ=aᵐ⁺ⁿ',items:['ta sama podstawa','dodaj lub odejmij wykładniki','pilnuj nawiasów']},rows:[
        row('Uprość 2³·2⁵.',['2⁸','4⁸','2¹⁵','4¹⁵'],0,'Podstawa jest taka sama, więc dodaj wykładniki.','2³·2⁵=2⁸.'),
        row('Uprość 7⁹:7⁴.',['7⁵','7¹³','1⁵','49⁵'],0,'Przy dzieleniu odejmij wykładniki.','7⁹:7⁴=7⁵.'),
        row('Uprość (3²)⁴.',['3⁶','3⁸','9⁶','12⁸'],1,'Pomnóż wykładniki.','(3²)⁴=3⁸.'),
        row('Ile wynosi (−2)⁴?',['−16','−8','8','16'],3,'Parzysta liczba czynników ujemnych daje wynik dodatni.','(−2)⁴=16.'),
        row('Ile wynosi −2⁴?',['−16','−8','8','16'],0,'Bez nawiasu potęgujemy tylko 2.','−2⁴=−16.'),
        row('Uprość 5⁶·5²:5³.',['5¹','5⁵','5⁷','5¹¹'],1,'Dodaj 6+2, potem odejmij 3.','5⁶·5²:5³=5⁵.'),
        row('Który zapis jest równy 4⁶?',['(4²)³','4²+4⁴','8³','16⁶'],0,'W potędze potęgi pomnóż wykładniki.','(4²)³=4⁶.'),
        row('Ile wynosi 10⁰?',['0','1','10','100'],1,'Każda niezerowa liczba do potęgi zerowej jest równa 1.','10⁰=1.'),
        row('Uprość a⁷:a² dla a≠0.',['a⁵','a⁹','a¹⁴','5a'],0,'Odejmij wykładniki.','a⁷:a²=a⁵.'),
        row('Wartość 2²+2³ wynosi…',['2⁵','8','12','32'],2,'Najpierw oblicz każdą potęgę.','4+8=12; nie wolno dodawać wykładników przy dodawaniu potęg.')
      ]},
      {id:'xpow-roots',n:'02',title:'Pierwiastki i szacowanie',desc:'Obliczaj, upraszczaj i porównuj pierwiastki.',concept:{label:'PIERWIASTKI',formula:'√(a·b)=√a·√b',items:['szukaj pełnego kwadratu','wyłącz czynnik przed znak','sprawdź przybliżenie']},rows:[
        row('Ile wynosi √144?',['12','14','72','288'],0,'Szukaj liczby, której kwadrat to 144.','12²=144, więc √144=12.'),
        row('Ile wynosi ∛125?',['3','5','15','25'],1,'5·5·5=125.','∛125=5.'),
        row('Uprość √72.',['6√2','8√2','12√2','36√2'],0,'Rozłóż 72 na 36·2.','√72=6√2.'),
        row('Uprość 3√5+2√5.',['5√5','5√10','6√5','√25'],0,'Dodaj współczynniki przy takim samym pierwiastku.','3√5+2√5=5√5.'),
        row('Między którymi liczbami leży √50?',['5 i 6','6 i 7','7 i 8','8 i 9'],2,'Porównaj 50 z pełnymi kwadratami.','49<50<64, więc 7<√50<8.'),
        row('Która liczba jest większa?',['√80','9','Są równe','Nie da się ustalić'],1,'Porównaj 80 z 81.','√80<√81=9.'),
        row('Wartość √9+√16 wynosi…',['5','7','√25','25'],1,'Oblicz oba pierwiastki osobno.','3+4=7.'),
        row('Wartość √(9+16) wynosi…',['5','7','12','25'],0,'Najpierw oblicz sumę w nawiasie.','√25=5.'),
        row('Uprość √48.',['2√12','3√5','4√3','8√6'],2,'Rozłóż 48 na 16·3.','√48=4√3.'),
        row('Jeśli x²=81 i x<0, to x=…',['−9','9','−81','81'],0,'Równanie ma dwa rozwiązania, ale warunek wybiera ujemne.','x=−9.')
      ]},
      {id:'xpow-science',n:'03',title:'Notacja wykładnicza',desc:'Zapisuj bardzo duże i małe liczby oraz wykonuj na nich działania.',concept:{label:'NOTACJA',formula:'a·10ⁿ, 1≤a<10',items:['jedna cyfra przed przecinkiem','policz przesunięcia','kontroluj rząd wielkości']},rows:[
        row('Zapisz 450 000 w notacji wykładniczej.',['4,5·10⁴','4,5·10⁵','45·10⁵','0,45·10⁶'],1,'Przesuń przecinek o pięć miejsc w lewo.','450 000=4,5·10⁵.'),
        row('Zapis 7,2·10⁴ oznacza…',['720','7200','72 000','720 000'],2,'Przesuń przecinek o cztery miejsca w prawo.','7,2·10⁴=72 000.'),
        row('Zapisz 0,0035 w notacji wykładniczej.',['3,5·10⁻²','3,5·10⁻³','35·10⁻³','0,35·10⁻²'],1,'Przesuń przecinek o trzy miejsca w prawo.','0,0035=3,5·10⁻³.'),
        row('Ile wynosi (2·10³)·(3·10²)?',['5·10⁵','6·10⁵','6·10⁶','6·10¹'],1,'Pomnóż współczynniki i dodaj wykładniki.','Wynik to 6·10⁵.'),
        row('Ile wynosi (8·10⁶):(2·10²)?',['4·10³','4·10⁴','6·10⁴','16·10⁸'],1,'Podziel 8 przez 2 i odejmij wykładniki.','Wynik to 4·10⁴.'),
        row('Która liczba jest największa?',['9·10³','1,2·10⁴','8·10³','7,5·10³'],1,'Porównaj rzędy wielkości.','1,2·10⁴=12 000 i jest największa.'),
        row('Liczba 6,04·10⁵ ma zapis dziesiętny…',['60 400','604 000','6 040 000','604'],1,'Przesuń przecinek o pięć miejsc.','6,04·10⁵=604 000.'),
        row('Rząd wielkości liczby 2 900 000 to…',['10⁴','10⁵','10⁶','10⁷'],2,'Liczba ma siedem cyfr i wynosi 2,9 miliona.','2 900 000=2,9·10⁶.'),
        row('Wynik 3·10²+4·10² to…',['7·10²','7·10⁴','12·10²','12·10⁴'],0,'Wyłącz wspólny czynnik 10².','(3+4)·10²=7·10².'),
        row('1,5·10³ metrów to…',['0,15 km','1,5 km','15 km','150 km'],1,'1 km=10³ m.','1,5·10³ m=1,5 km.')
      ]}
    ]},

    'e8-percent-plus':{n:'09',title:'Procenty i finanse',desc:'Pełny kurs procentów w zadaniach codziennych i egzaminacyjnych.',accent:'gold',lead:'Za każdym razem nazwij całość równą 100% i ustal, czy szukasz części, procentu czy wartości początkowej.',formulas:['p% z a=p/100·a','całość=część:(p/100)','podwyżka p% → ·(1+p/100)','obniżka p% → ·(1−p/100)'],theory:[
      ['Trzy typy zadań','Możesz szukać części, procentu albo całej wartości. Najpierw ustal, która liczba stanowi 100%.'],
      ['Zadania odwrotne','Jeżeli znasz wartość po zmianie, podziel ją przez odpowiedni mnożnik, np. przez 0,8 po obniżce o 20%.'],
      ['Dwie zmiany','Kolejne zmiany procentowe wykonuj osobno. Podwyżka o 10% i obniżka o 10% nie znoszą się.'],
      ['Punkty procentowe','Różnica między 40% a 55% to 15 punktów procentowych, ale wzrost względny wynosi 37,5%.'],
      ['Finanse','W zadaniach o cenach zapisuj kwoty z dokładnością do grosza i odróżniaj oszczędność od ceny po rabacie.']
    ],paths:[
      {id:'xpct-basics',n:'01',title:'Procent, część i całość',desc:'Rozpoznawaj trzy podstawowe schematy procentowe.',concept:{label:'100% TO CAŁOŚĆ',formula:'część=p%·całość',items:['nazwij całość','zamień procent na ułamek','sprawdź wynik']},rows:[
        row('15% z 240 wynosi…',['24','36','40','60'],1,'Pomnóż 240 przez 0,15.','240·0,15=36.'),
        row('Liczba 18 stanowi jaki procent 60?',['18%','25%','30%','42%'],2,'Podziel 18 przez 60.','18/60=0,3=30%.'),
        row('35% pewnej liczby to 70. Ta liczba wynosi…',['105','150','200','245'],2,'Podziel 70 przez 0,35.','70:0,35=200.'),
        row('W klasie 8 z 32 uczniów ma rower. To…',['20%','25%','32%','40%'],1,'Oblicz 8/32.','8/32=1/4=25%.'),
        row('72 to 120% pewnej liczby. Ta liczba to…',['60','72','86,4','120'],0,'Podziel 72 przez 1,2.','72:1,2=60.'),
        row('O ile procent 50 jest większe od 40?',['10%','20%','25%','40%'],2,'Różnicę 10 porównaj z wartością początkową 40.','10/40=25%.'),
        row('O ile procent 40 jest mniejsze od 50?',['10%','20%','25%','40%'],1,'Różnicę 10 porównaj z 50.','10/50=20%.'),
        row('9 punktów z 12 to…',['60%','70%','75%','90%'],2,'Podziel 9 przez 12.','9/12=75%.'),
        row('Liczba stanowiąca 5% z 800 to…',['4','40','80','160'],1,'5%=0,05.','800·0,05=40.'),
        row('Jeśli 100% to 450, to 1% wynosi…',['0,45','4,5','45','450'],1,'Podziel całość przez 100.','450:100=4,5.')
      ]},
      {id:'xpct-changes',n:'02',title:'Podwyżki i obniżki',desc:'Stosuj mnożniki i rozwiązuj zadania odwrotne.',concept:{label:'MNOŻNIK ZMIANY',formula:'nowa=stara·(1±p/100)',items:['podwyżka >1','obniżka <1','zmiany licz kolejno']},rows:[
        row('Cena 160 zł po podwyżce o 15% wynosi…',['176 zł','184 zł','190 zł','200 zł'],1,'Pomnóż przez 1,15.','160·1,15=184 zł.'),
        row('Cena 250 zł po rabacie 12% wynosi…',['220 zł','225 zł','230 zł','238 zł'],0,'Zapłacisz 88% ceny.','250·0,88=220 zł.'),
        row('Po obniżce o 25% cena wynosi 90 zł. Cena początkowa to…',['112,50 zł','115 zł','120 zł','125 zł'],2,'90 zł to 75% ceny.','90:0,75=120 zł.'),
        row('Po podwyżce o 20% cena wynosi 144 zł. Wcześniej było…',['115,20 zł','120 zł','124 zł','172,80 zł'],1,'Podziel przez 1,2.','144:1,2=120 zł.'),
        row('Cena 100 zł wzrosła o 20%, a potem spadła o 20%. Wynosi…',['96 zł','100 zł','104 zł','120 zł'],0,'Zastosuj kolejno 1,2 i 0,8.','100·1,2·0,8=96 zł.'),
        row('Dwie kolejne obniżki o 10% ceny 200 zł dają…',['160 zł','162 zł','180 zł','190 zł'],1,'Dwa razy pomnóż przez 0,9.','200·0,9²=162 zł.'),
        row('Liczba mieszkańców wzrosła z 800 do 920. Wzrost wyniósł…',['12%','15%','20%','120%'],1,'Przyrost 120 porównaj z 800.','120/800=15%.'),
        row('Wartość spadła z 500 do 425. Spadek wyniósł…',['15%','17,5%','25%','75%'],0,'Spadek 75 porównaj z 500.','75/500=15%.'),
        row('Po wzroście o 50% liczba wynosi 90. Początkowo było…',['45','60','75','135'],1,'Podziel przez 1,5.','90:1,5=60.'),
        row('Cena po rabacie 30% stanowi…',['30% ceny','60% ceny','70% ceny','130% ceny'],2,'Od 100% odejmij 30%.','Pozostaje 70% ceny.')
      ]},
      {id:'xpct-money',n:'03',title:'Finanse i punkty procentowe',desc:'Promocje, oszczędności, marża i interpretacja zmian.',concept:{label:'PROCENTY W FINANSACH',formula:'oszczędność=stara−nowa',items:['kwoty do grosza','odróżnij cenę od rabatu','punkty procentowe ≠ procent']},rows:[
        row('Produkt kosztował 80 zł, a po promocji 68 zł. Oszczędność to…',['12 zł','15 zł','68 zł','148 zł'],0,'Odejmij nową cenę od starej.','80−68=12 zł.'),
        row('Rabaty 20% i potem 10% odpowiadają łącznie rabatowi…',['30%','28%','20%','18%'],1,'Po zmianach zostaje 0,8·0,9 ceny.','Zostaje 72%, więc rabat wynosi 28%.'),
        row('Cena netto to 200 zł, a podatek 8%. Cena brutto wynosi…',['208 zł','216 zł','220 zł','232 zł'],1,'Pomnóż przez 1,08.','200·1,08=216 zł.'),
        row('Frekwencja wzrosła z 64% do 80%. To wzrost o…',['16%','16 punktów procentowych','20 punktów procentowych','25 punktów procentowych'],1,'Odejmij wartości procentowe.','Wzrost wynosi 16 punktów procentowych.'),
        row('Wzrost z 64% do 80% jest względnym wzrostem o…',['16%','20%','25%','80%'],2,'Różnicę 16 porównaj z 64.','16/64=25%.'),
        row('Lokata 1000 zł zyskuje 4% w rok. Po roku jest…',['1004 zł','1040 zł','1400 zł','4000 zł'],1,'Oblicz 4% z 1000 i dodaj.','1000·1,04=1040 zł.'),
        row('Sklep kupił towar za 60 zł i sprzedał za 75 zł. Zysk względem kosztu to…',['15%','20%','25%','75%'],2,'Zysk 15 zł porównaj z kosztem 60 zł.','15/60=25%.'),
        row('Produkt 120 zł przeceniono o 25%. Kwota rabatu to…',['25 zł','30 zł','90 zł','95 zł'],1,'Policz 25% z 120.','Rabat wynosi 30 zł.'),
        row('Trzy produkty po 40 zł objęto rabatem 15%. Łączna cena to…',['96 zł','102 zł','108 zł','114 zł'],1,'Najpierw policz 120 zł, potem 85%.','120·0,85=102 zł.'),
        row('Budżet 500 zł wykorzystano w 84%. Pozostało…',['16 zł','42 zł','80 zł','420 zł'],2,'Pozostało 16% budżetu.','500·0,16=80 zł.')
      ]}
    ]},

    'e8-equations-plus':{n:'10',title:'Równania i zadania tekstowe',desc:'Więcej równań oraz pełne modelowanie sytuacji opisanych tekstem.',accent:'coral',lead:'Nadaj niewiadomej znaczenie, zapisz jedno równanie i zawsze sprawdź, czy wynik odpowiada pytaniu.',formulas:['ax+b=c','a(x+b)=ax+ab','obwód=2a+2b','droga=prędkość·czas'],theory:[
      ['Równoważne przekształcenia','Do obu stron równania można dodać tę samą liczbę albo obie strony pomnożyć przez tę samą liczbę różną od zera.'],
      ['Nawiasy i ułamki','Najpierw usuń nawiasy lub mianowniki, a dopiero potem porządkuj wyrazy z niewiadomą.'],
      ['Model tekstu','Zapisz, co oznacza x. Każdą wielkość z treści wyraź przez x, a warunek zadania zamień na równanie.'],
      ['Sprawdzenie','Podstaw wynik do pierwotnego równania i oceń go w kontekście, np. długość nie może być ujemna.'],
      ['Odpowiedź','W zadaniu tekstowym podaj jednostkę i odpowiedz na dokładnie to pytanie, które zostało zadane.']
    ],paths:[
      {id:'xeq-transform',n:'01',title:'Równania krok po kroku',desc:'Równania z niewiadomą po jednej lub obu stronach.',concept:{label:'RÓWNANIE',formula:'ta sama operacja po obu stronach',items:['uprość obie strony','zbierz x po jednej stronie','sprawdź wynik']},rows:[
        row('Rozwiąż 3x+7=25.',['x=4','x=6','x=8','x=10'],1,'Odejmij 7, potem podziel przez 3.','3x=18, więc x=6.'),
        row('Rozwiąż 5x−9=2x+12.',['x=1','x=5','x=7','x=21'],2,'Przenieś wyrazy z x na lewo.','3x=21, więc x=7.'),
        row('Rozwiąż 4(x−2)=20.',['x=3','x=5','x=7','x=18'],2,'Najpierw podziel przez 4.','x−2=5, więc x=7.'),
        row('Rozwiąż 2(x+3)=3x−4.',['x=2','x=4','x=8','x=10'],3,'Usuń nawias i zbierz x po jednej stronie.','2x+6=3x−4, więc x=10.'),
        row('Rozwiąż x/3+5=9.',['x=4','x=12','x=14','x=27'],1,'Odejmij 5 i pomnóż przez 3.','x/3=4, więc x=12.'),
        row('Równanie 3(x+2)=3x+6 ma…',['brak rozwiązań','jedno rozwiązanie','dwa rozwiązania','nieskończenie wiele rozwiązań'],3,'Rozwiń nawias.','Obie strony są identyczne dla każdego x.'),
        row('Równanie 2x+5=2x−1 ma…',['brak rozwiązań','jedno rozwiązanie','dwa rozwiązania','nieskończenie wiele rozwiązań'],0,'Odejmij 2x od obu stron.','Otrzymujemy sprzeczność 5=−1.'),
        row('Dla x=−2 wartość 3x+1 wynosi…',['−7','−5','5','7'],1,'Podstaw x wraz ze znakiem.','3·(−2)+1=−5.'),
        row('Które równanie ma rozwiązanie x=4?',['2x+1=7','3x−2=10','5x=15','x+6=12'],1,'Podstaw 4 do każdego równania.','3·4−2=10.'),
        row('Rozwiąż 0,5x=8.',['x=4','x=8,5','x=16','x=40'],2,'Podziel przez 0,5.','x=16.')
      ]},
      {id:'xeq-stories',n:'02',title:'Wiek, ceny i liczby',desc:'Buduj równania do klasycznych zadań tekstowych.',concept:{label:'MODEL ZADANIA',formula:'nazwij x → zapisz zależność',items:['jedna niewiadoma','wszystko wyraź przez x','sprawdź sens']},rows:[
        row('Suma liczby i liczby o 8 większej wynosi 34. Mniejsza liczba to…',['10','13','17','21'],1,'Zapisz x+(x+8)=34.','2x=26, więc x=13.'),
        row('Trzy kolejne liczby mają sumę 72. Środkowa to…',['22','23','24','25'],2,'Zapisz (x−1)+x+(x+1)=72.','3x=72, więc x=24.'),
        row('Mama ma 4 razy tyle lat co córka. Razem mają 50 lat. Córka ma…',['8 lat','10 lat','12 lat','40 lat'],1,'Wiek córki oznacz x, wtedy mama ma 4x lat.','x + 4x = 50, więc 5x = 50 i córka ma 10 lat.'),
        row('Za 3 jednakowe zeszyty i długopis za 6 zł zapłacono 30 zł. Zeszyt kosztuje…',['6 zł','8 zł','10 zł','12 zł'],1,'Zapisz 3x+6=30.','3x=24, więc x=8 zł.'),
        row('Liczbę zwiększono dwukrotnie i dodano 7, otrzymując 31. Liczba to…',['7','12','15','19'],1,'Zapisz 2x+7=31.','2x=24, więc x=12.'),
        row('W skarbonce jest o 15 monet więcej srebrnych niż złotych. Razem jest 45 monet. Złotych jest…',['15','20','30','35'],0,'Zapisz x+(x+15)=45.','2x=30, więc złotych jest 15.'),
        row('Bilet normalny kosztuje dwa razy tyle co ulgowy. Za oba zapłacono 36 zł. Ulgowy kosztuje…',['9 zł','12 zł','18 zł','24 zł'],1,'Zapisz x+2x=36.','3x=36, więc x=12 zł.'),
        row('Po wydaniu 1/3 oszczędności zostało 80 zł. Początkowo było…',['100 zł','120 zł','160 zł','240 zł'],1,'Zostało 2/3 kwoty.','(2/3)x=80, więc x=120 zł.'),
        row('Liczba o 20% mniejsza od x jest równa 56. x wynosi…',['67,2','70','76','80'],1,'56 stanowi 80% x.','0,8x=56, więc x=70.'),
        row('Suma dwóch liczb to 50, a jedna jest o 10 większa. Większa liczba to…',['20','25','30','40'],2,'Mniejszą oznacz x, większą x+10.','2x+10=50, więc liczby to 20 i 30.')
      ]},
      {id:'xeq-geometry',n:'03',title:'Równania w geometrii i ruchu',desc:'Stosuj równania w zadaniach z obwodem, kątami, drogą i czasem.',concept:{label:'RÓWNANIE W KONTEKŚCIE',formula:'wzór + warunek = równanie',items:['zapisz jednostki','narysuj schemat','odpowiedz w kontekście']},rows:[
        row('Obwód prostokąta o bokach x i x+4 wynosi 40. Krótszy bok ma…',['6','8','10','12'],1,'Zapisz 2x+2(x+4)=40.','4x=32, więc x=8.'),
        row('Kąty przyległe mają miary x i 3x. Mniejszy kąt ma…',['30°','45°','60°','90°'],1,'Ich suma wynosi 180°.','4x=180°, więc x=45°.'),
        row('W trójkącie kąty mają x, x+20° i 2x. Najmniejszy ma…',['30°','40°','50°','80°'],1,'Suma kątów to 180°.','4x+20°=180°, więc x=40°.'),
        row('Samochód przejechał 180 km z prędkością 60 km/h. Czas jazdy to…',['2 h','3 h','4 h','6 h'],1,'Zapisz 60t=180.','t=3 h.'),
        row('Rowerzysta jedzie 15 km/h. Jak długo pokona 45 km?',['2 h','3 h','4 h','6 h'],1,'Zapisz 15t=45.','t=3 h.'),
        row('Bok kwadratu zwiększono o 3 cm, a nowy obwód wynosi 36 cm. Stary bok miał…',['6 cm','7 cm','9 cm','12 cm'],0,'Zapisz 4(x+3)=36.','x+3=9, więc x=6 cm.'),
        row('Ramię trójkąta równoramiennego ma x, a podstawa 8. Obwód to 30. Ramię ma…',['8','10','11','14'],2,'Zapisz 2x+8=30.','2x=22, więc x=11.'),
        row('Pociąg jechał 2 h z prędkością x i pokonał 140 km. Prędkość to…',['60 km/h','70 km/h','80 km/h','280 km/h'],1,'Zapisz 2x=140.','x=70 km/h.'),
        row('Dłuższy bok prostokąta jest o 5 cm większy. Polecenie „obwód 34 cm” prowadzi do równania…',['x(x+5)=34','2x+2(x+5)=34','x+x+5=34','4(x+5)=34'],1,'Obwód to suma czterech boków.','Poprawny model to 2x+2(x+5)=34.'),
        row('W trójkącie równoramiennym kąt przy podstawie ma x, a wierzchołkowy 40°. x wynosi…',['40°','60°','70°','140°'],2,'Dwa kąty przy podstawie są równe.','2x+40°=180°, więc x=70°.')
      ]}
    ]},

    'e8-circle-plus':{n:'11',title:'Koło, Pitagoras i geometria',desc:'Rozbudowany kurs geometrii obliczeniowej i figur złożonych.',accent:'violet',lead:'Zrób szkic, zaznacz kąt prosty, promień lub wysokość i dopiero wtedy wybierz wzór.',formulas:['a²+b²=c²','d kwadratu=a√2','l=2πr','P koła=πr²'],theory:[
      ['Pitagoras','Twierdzenie stosujemy wyłącznie w trójkącie prostokątnym. Najdłuższy bok jest przeciwprostokątną.'],
      ['Odwrotność twierdzenia','Jeżeli dla najdłuższego boku c zachodzi a²+b²=c², to trójkąt jest prostokątny.'],
      ['Koło i okrąg','Okrąg jest brzegiem, a koło zawiera również wnętrze. Długość okręgu liczymy 2πr, a pole koła πr².'],
      ['Skala pola','Gdy wszystkie długości rosną k razy, obwód rośnie k razy, a pole k² razy.'],
      ['Figury złożone','Dziel figurę na prostsze części albo odejmuj pole wyciętego fragmentu od większej figury.']
    ],paths:[
      {id:'xgeo-pythagoras',n:'01',title:'Pitagoras i przekątne',desc:'Boki trójkątów, przekątne i rozpoznawanie kąta prostego.',concept:{label:'TRÓJKĄT PROSTOKĄTNY',formula:'a²+b²=c²',items:['c — najdłuższy bok','zaznacz kąt prosty','na końcu spierwiastkuj']},rows:[
        row('Przyprostokątne mają 6 i 8. Przeciwprostokątna ma…',['10','12','14','48'],0,'Oblicz √(6²+8²).','c=√100=10.'),
        row('Przeciwprostokątna ma 15, a bok 9. Drugi bok ma…',['6','9','12','18'],2,'Oblicz √(15²−9²).','√144=12.'),
        row('Przekątna prostokąta 5×12 ma…',['13','15','17','60'],0,'Przekątna tworzy trójkąt prostokątny.','d=√(25+144)=13.'),
        row('Przekątna kwadratu o boku 7 ma…',['7','7√2','14','49'],1,'Użyj d=a√2.','d=7√2.'),
        row('Który trójkąt jest prostokątny?',['4,5,6','5,12,13','6,7,8','7,8,9'],1,'Sprawdź kwadraty boków.','5²+12²=13².'),
        row('Czy boki 8, 10, 12 tworzą trójkąt prostokątny?',['Tak','Nie','Tylko równoramienny','Nie tworzą trójkąta'],1,'Porównaj 8²+10² z 12².','164≠144, więc trójkąt nie jest prostokątny.'),
        row('Drabina długości 5 m stoi 3 m od ściany. Sięga na wysokość…',['2 m','4 m','5 m','8 m'],1,'Drabina jest przeciwprostokątną.','h=√(25−9)=4 m.'),
        row('Kwadrat ma przekątną 10√2. Jego bok ma…',['5','10','20','100'],1,'Podziel przekątną przez √2.','a=10.'),
        row('W trójkącie prostokątnym c=17 i a=8. b² wynosi…',['161','225','289','353'],1,'b²=c²−a².','b²=289−64=225.'),
        row('Odległość punktów (0,0) i (6,8) wynosi…',['7','10','12','14'],1,'Współrzędne tworzą przyprostokątne 6 i 8.','d=√(36+64)=10.')
      ]},
      {id:'xgeo-circle',n:'02',title:'Koło i okrąg',desc:'Promień, średnica, obwód, pole i fragmenty koła.',concept:{label:'KOŁO',formula:'l=2πr · P=πr²',items:['d=2r','okrąg to brzeg','koło ma pole']},rows:[
        row('Długość okręgu o promieniu 5 wynosi…',['5π','10π','25π','50π'],1,'Użyj l=2πr.','l=10π.'),
        row('Pole koła o średnicy 12 wynosi…',['12π','24π','36π','144π'],2,'Promień ma 6.','P=π·6²=36π.'),
        row('Jeśli długość okręgu to 14π, promień wynosi…',['3,5','7','14','28'],1,'Rozwiąż 2πr=14π.','r=7.'),
        row('Pole półkola o promieniu 4 wynosi…',['4π','8π','16π','32π'],1,'Weź połowę pola koła.','P=8π.'),
        row('Długość półokręgu o promieniu 6 bez średnicy wynosi…',['3π','6π','12π','36π'],1,'To połowa 2πr.','Połowa okręgu ma długość 6π.'),
        row('Obwód półkola o promieniu 3 wraz ze średnicą wynosi…',['3π','6π','3π+6','6π+6'],2,'Dodaj łuk półokręgu i średnicę.','Obwód to 3π+6.'),
        row('Promień zwiększono 3 razy. Pole koła wzrosło…',['3 razy','6 razy','9 razy','27 razy'],2,'Pole zależy od r².','Pole wzrosło 3²=9 razy.'),
        row('Pierścień ma promienie 5 i 3. Jego pole wynosi…',['2π','8π','16π','34π'],2,'Odejmij pola kół.','π·25−π·9=16π.'),
        row('Koło ma pole 49π. Jego średnica wynosi…',['7','14','24,5','49'],1,'Najpierw znajdź r z r²=49.','r=7, więc d=14.'),
        row('Ćwiartka koła o promieniu 8 ma pole…',['8π','16π','32π','64π'],1,'Podziel pole 64π przez 4.','Pole wynosi 16π.')
      ]},
      {id:'xgeo-composite',n:'03',title:'Figury złożone',desc:'Pola zacieniowane, skala i wieloetapowe obliczenia geometryczne.',concept:{label:'FIGURA ZŁOŻONA',formula:'podziel lub odejmij pola',items:['zaznacz części','pilnuj wspólnych boków','podaj jednostkę²']},rows:[
        row('Z prostokąta 10×8 wycięto kwadrat 3×3. Pozostałe pole to…',['71','77','80','89'],0,'Odejmij pole kwadratu od pola prostokąta.','80−9=71.'),
        row('Kwadrat o boku 10 zawiera koło o promieniu 5. Pole poza kołem to…',['100−25π','100−10π','25π−100','100π−25'],0,'Odejmij pole koła od pola kwadratu.','Pole wynosi 100−25π.'),
        row('Figura składa się z dwóch prostokątów o polach 24 i 35 bez nakładania. Łączne pole to…',['11','59','70','840'],1,'Dodaj pola rozłącznych części.','24+35=59.'),
        row('Trójkąt ma podstawę 12 i wysokość 7. Po odcięciu części o polu 12 zostaje…',['30','36','42','54'],0,'Najpierw policz całe pole.','Pole trójkąta 42, więc zostaje 30.'),
        row('Boki figury zwiększono 2 razy. Pole 18 zmieniło się na…',['36','54','72','144'],2,'Pole zmienia się jak kwadrat skali.','18·2²=72.'),
        row('Pola podobnych figur są w stosunku 9:16. Skala długości wynosi…',['3:4','9:16','81:256','6:8 tylko dla obwodu'],0,'Spierwiastkuj stosunek pól.','Skala długości to 3:4.'),
        row('Prostokąt 14×9 otacza ramka szerokości 1 wewnątrz. Pole środka to…',['84','96','108','126'],0,'Wymiary środka to 12×7.','Pole środka wynosi 84.'),
        row('Trapez ma podstawy 8 i 14 oraz wysokość 5. Pole wynosi…',['22','44','55','110'],2,'Użyj (a+b)h/2.','(8+14)·5/2=55.'),
        row('Romb ma przekątne 12 i 16. Pole wynosi…',['48','96','192','384'],1,'Pole to połowa iloczynu przekątnych.','12·16/2=96.'),
        row('Prostokąt ma pole 96 i bok 8. Jego obwód wynosi…',['20','32','40','48'],2,'Drugi bok to 96:8=12.','Obwód 2·8+2·12=40.')
      ]}
    ]},

    'e8-reasoning':{n:'12',title:'Strategie do zadań otwartych',desc:'Strategie potrzebne do zadań za 2–3 punkty i uzasadnień.',accent:'navy',lead:'Nie zaczynaj od przypadkowego rachunku. Nazwij cel, wypisz dane i zaplanuj dwa lub trzy logiczne kroki.',formulas:['dane → plan → obliczenia → odpowiedź','przykład nie jest dowodem ogólnym','kontrprzykład obala zdanie','wynik musi spełniać warunki'],theory:[
      ['Plan rozwiązania','Najpierw zapisz dane i szukaną wielkość. Następnie nazwij zależność lub wzór, który je łączy.'],
      ['Istotny postęp','W zadaniu otwartym poprawny model, kluczowe równanie lub właściwa zależność może być oceniona nawet przy późniejszym błędzie rachunkowym.'],
      ['Uzasadnienie','Uzasadnienie musi wyjaśniać, dlaczego wniosek wynika z danych. Sam wynik lub kilka przykładów często nie wystarcza.'],
      ['Kontrprzykład','Aby obalić zdanie ogólne, wystarczy znaleźć jeden przykład, który spełnia założenia, lecz nie spełnia wniosku.'],
      ['Kontrola rozwiązania','Sprawdź rachunki, jednostkę, warunki z treści i realistyczność odpowiedzi.']
    ],paths:[
      {id:'xreason-plan',n:'01',title:'Wybór strategii',desc:'Rozpoznawaj pierwszy krok i dobieraj właściwą metodę.',concept:{label:'PLAN',formula:'dane → związek → wynik',items:['co wiem?','czego szukam?','jaki wzór łączy dane?']},rows:[
        row('W zadaniu o drodze i czasie znamy s i t. Pierwszym krokiem jest użycie…',['v=s/t','s=v/t','t=s·v','P=a·b'],0,'Szukamy prędkości.','Właściwa zależność to v=s/t.'),
        row('Chcemy znaleźć bok prostokąta, znając pole i drugi bok. Należy…',['dodać pole i bok','podzielić pole przez bok','pomnożyć pole przez bok','obliczyć połowę obwodu'],1,'P=a·b.','Brakujący bok to P podzielone przez znany bok.'),
        row('W zadaniu o dwóch kolejnych liczbach najlepiej oznaczyć je jako…',['x i 2x','x i x+1','x i x+2','x i 1/x'],1,'Kolejne liczby różnią się o 1.','Poprawny zapis to x oraz x+1.'),
        row('Przed użyciem wzoru s=v·t dla 45 minut należy…',['zamienić 45 min na 0,45 h','zamienić 45 min na 0,75 h','pomnożyć przez 60','pominąć jednostki'],1,'Godzina ma 60 minut.','45/60=0,75 h.'),
        row('Aby sprawdzić, czy trójkąt 5,12,13 jest prostokątny, należy…',['dodać długości boków','porównać 5²+12² z 13²','obliczyć pole koła','podzielić 13 przez 5'],1,'Użyj odwrotności twierdzenia Pitagorasa.','25+144=169, więc trójkąt jest prostokątny.'),
        row('W zadaniu procentowym po rabacie 20% wartość 120 zł stanowi…',['20% ceny','80% ceny','100% ceny','120% ceny'],1,'Po rabacie pozostaje 100%−20%.','120 zł to 80% ceny początkowej.'),
        row('Gdy figura złożona ma kształt litery L, dobry plan to…',['zawsze użyć Pitagorasa','podzielić ją na prostokąty','obliczyć tylko obwód','pomnożyć wszystkie boki'],1,'Szukaj prostych składowych.','Figurę L można podzielić na dwa prostokąty.'),
        row('W równaniu z ułamkami wspólny mianownik pomaga…',['usunąć mianowniki','zmienić znak x','znaleźć pole','zaokrąglić wynik'],0,'Pomnóż obie strony przez wspólny mianownik.','Dzięki temu otrzymujemy równanie bez ułamków.'),
        row('Dla danych z tabeli przed obliczeniem mediany trzeba…',['dodać wszystkie dane','uporządkować dane','pomnożyć skrajne dane','zamienić dane na procenty'],1,'Mediana zależy od pozycji.','Najpierw ustawiamy wartości rosnąco.'),
        row('Najlepsza kontrola wyniku 49·21=1029 to…',['sprawdzenie, czy wynik jest bliski 50·20','dodanie 49+21','podzielenie przez 10','zamiana na procent'],0,'Najpierw oszacuj rząd wielkości.','50·20≈1000, więc 1029 jest wiarygodne.')
      ]},
      {id:'xreason-open',n:'02',title:'Tok rozwiązania zadania otwartego',desc:'Układaj poprawne kroki i rozpoznawaj istotny postęp.',concept:{label:'ZADANIE OTWARTE',formula:'model → rachunki → interpretacja',items:['pokaż tok rozumowania','nie pomijaj jednostek','zakończ odpowiedzią']},rows:[
        row('Uczeń szuka ceny po rabacie 25% z 160 zł. Poprawny pierwszy rachunek to…',['160:25','160·0,25','160−25','160·1,25'],1,'Najpierw oblicz kwotę rabatu lub 75% ceny.','Kwota rabatu to 160·0,25=40 zł.'),
        row('Po obliczeniu rabatu 40 zł następny krok to…',['160+40','160−40','40:160','40·160'],1,'Cena po rabacie jest mniejsza.','160−40=120 zł.'),
        row('W zadaniu o prostokącie znasz obwód 30 i bok 6. Poprawne równanie to…',['6+x=30','12+2x=30','6x=30','2(6+x)=60'],1,'Obwód to dwa razy suma boków.','2·6+2x=30.'),
        row('Z równania 12+2x=30 wynika…',['x=6','x=9','x=15','x=18'],1,'Odejmij 12 i podziel przez 2.','2x=18, więc x=9.'),
        row('Uczeń otrzymał bok −4 cm. Co powinien zrobić?',['przyjąć wynik','zmienić znak bez uzasadnienia','odrzucić wynik jako niemożliwy w kontekście','zaokrąglić do zera'],2,'Długość nie może być ujemna.','Wynik nie spełnia warunków zadania.'),
        row('W zadaniu o objętości poprawna jednostka wyniku to…',['cm','cm²','cm³','°'],2,'Objętość opisuje trzy wymiary.','Objętość podajemy w jednostkach sześciennych.'),
        row('Które zakończenie rozwiązania jest najlepsze?',['x=12','Wynik: 12','Odp.: Pociąg jechał 12 godzin.','Obliczono niewiadomą.'],2,'Odnieś wynik do pytania i dodaj jednostkę.','Pełna odpowiedź interpretuje liczbę w kontekście.'),
        row('Błąd rachunkowy po zapisaniu poprawnego równania oznacza, że…',['cały tok jest bezwartościowy','model może być istotnym postępem','nie trzeba nic poprawiać','odpowiedź jest zawsze poprawna'],1,'W zadaniach otwartych ocenia się również drogę rozwiązania.','Poprawny model pokazuje istotny postęp.'),
        row('W rozwiązaniu pola figury uczeń podał 48 cm. Czego brakuje?',['liczby','jednostki kwadratowej','znaku procent','równania'],1,'Pole ma jednostkę do kwadratu.','Poprawnie: 48 cm².'),
        row('Po otrzymaniu x=7 najlepszy sposób sprawdzenia równania to…',['podstawić 7 do równania wyjściowego','podwoić 7','zaokrąglić 7','zmienić stronami równanie'],0,'Sprawdź, czy obie strony mają tę samą wartość.','Podstawienie do równania wyjściowego weryfikuje wynik.')
      ]},
      {id:'xreason-proof',n:'03',title:'Uzasadnianie i argumentacja',desc:'Oceniaj zdania, szukaj kontrprzykładów i buduj krótkie dowody.',concept:{label:'ARGUMENT',formula:'założenie → własność → wniosek',items:['przykład nie dowodzi reguły','kontrprzykład obala','każdy krok uzasadnij']},rows:[
        row('Zdanie „każda liczba parzysta jest podzielna przez 4” obala liczba…',['4','6','8','12'],1,'Szukaj liczby parzystej niepodzielnej przez 4.','6 jest parzyste, ale nie jest podzielne przez 4.'),
        row('Aby udowodnić, że suma dwóch liczb parzystych jest parzysta, zapisz je jako…',['2a i 2b','a+2 i b+2','a/2 i b/2','2a+1 i 2b+1'],0,'Liczba parzysta ma postać 2·liczba całkowita.','2a+2b=2(a+b), więc suma jest parzysta.'),
        row('Suma dwóch liczb nieparzystych ma postać…',['2(a+b)+1','2(a+b+1)','a+b+1','4ab+1'],1,'Zapisz liczby jako 2a+1 i 2b+1.','Suma to 2a+2b+2=2(a+b+1).'),
        row('Czy kilka poprawnych przykładów dowodzi zdania dla wszystkich liczb?',['Tak','Nie','Tylko dla liczb dodatnich','Tylko przy 10 przykładach'],1,'Przykłady wspierają przypuszczenie, ale nie są dowodem ogólnym.','Potrzebne jest rozumowanie obejmujące wszystkie przypadki.'),
        row('Jeden poprawny kontrprzykład…',['dowodzi zdania ogólnego','obala zdanie ogólne','nie ma znaczenia','działa tylko w geometrii'],1,'Zdanie ogólne musi działać dla każdego przypadku.','Jeden wyjątek wystarcza do obalenia zdania.'),
        row('Jeśli n jest całkowite, liczba 3n jest zawsze…',['parzysta','podzielna przez 3','dodatnia','nieparzysta'],1,'3n zawiera czynnik 3.','Z definicji jest wielokrotnością 3.'),
        row('Kwadrat dowolnej liczby całkowitej jest…',['zawsze ujemny','zawsze nieujemny','zawsze dodatni','zawsze parzysty'],1,'Iloczyn dwóch liczb o tym samym znaku jest nieujemny.','n²≥0.'),
        row('Który argument uzasadnia, że 234 jest podzielne przez 3?',['Liczba kończy się na 4','2+3+4=9, a 9 jest podzielne przez 3','234 jest parzyste','2·3·4=24'],1,'Użyj cechy podzielności przez 3.','Suma cyfr wynosi 9, więc liczba jest podzielna przez 3.'),
        row('Jeśli dwa kąty są wierzchołkowe, to są równe. Kąty α i β są wierzchołkowe, więc…',['α+β=90°','α=β','α+β=180°','α=2β'],1,'Zastosuj podaną własność.','Wniosek: α=β.'),
        row('Uczeń twierdzi, że 0,333…=1/3. Najmocniejsze uzasadnienie to…',['tak wygląda kalkulator','3·0,333…=0,999…=1','liczby są podobne','oba zapisy mają cyfrę 3'],1,'Pokaż równoważność rachunkiem.','Skoro trzykrotność wynosi 1, liczba jest równa 1/3.')
      ]}
    ]}
  });
})();
