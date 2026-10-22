// Zadania 3–5 w każdym kursie: nowe konteksty, cztery decyzje i pełne rozwiązanie.
window.E8_OPEN_WORK_EXTRA={
  'e8-numbers':[
    {title:'Kolejność działań',problem:'W konkursie klasa zdobyła 4 × (18 − 9) + 2³ punktów. Za spóźnienie odjęto jeszcze 5 punktów. Ile punktów zostało?',steps:[
      ['Co liczymy jako pierwsze?',['4 × 18','18 − 9','2³ − 5','4 + 2³'],1,'Nawias ma pierwszeństwo przed mnożeniem.','W nawiasie: 18 − 9 = 9.'],
      ['Ile wynosi 2³?',['6','8','9','16'],1,'Pomnóż trzy dwójki.','Potęga: 2³ = 8.'],
      ['Ile punktów było przed karą?',['39','44','46','72'],1,'Oblicz 4 × 9 + 8.','Przed karą: 36 + 8 = 44 punkty.'],
      ['Ile punktów zostało?',['36','39','44','49'],1,'Odejmij 5 punktów od 44.','Odpowiedź: 44 − 5 = 39 punktów.']
    ]},
    {title:'Autobusy na przystanku',problem:'Autobus A odjeżdża co 12 minut, a B co 18 minut. Oba odjechały razem o 8:00. O której godzinie po raz pierwszy znów odjadą jednocześnie?',steps:[
      ['Czego szukamy w odstępach 12 i 18 minut?',['Sumy','NWW','NWD','Różnicy'],1,'Szukamy pierwszej wspólnej wielokrotności.','Wyznaczamy NWW(12, 18).'],
      ['Które liczby są kolejnymi wielokrotnościami 12?',['12, 24, 36','12, 18, 24','12, 22, 32','12, 36, 48'],0,'Dodawaj po 12 minut.','Wielokrotności 12: 12, 24, 36, …'],
      ['Jaka jest pierwsza wspólna wielokrotność 12 i 18?',['18','24','30','36'],3,'36 dzieli się zarówno przez 12, jak i przez 18.','NWW(12, 18) = 36 minut.'],
      ['O której godzinie odjadą razem?',['8:18','8:30','8:36','9:00'],2,'Dodaj 36 minut do 8:00.','Odpowiedź: pierwszy wspólny odjazd będzie o 8:36.']
    ]},
    {title:'Rachunek za zakupy',problem:'Kupiono trzy produkty po 19,80 zł i dwa po 7,40 zł. Oblicz dokładną kwotę i sprawdź, czy 75 zł wystarczy.',steps:[
      ['Ile kosztują trzy pierwsze produkty?',['39,60 zł','59,40 zł','60,00 zł','79,20 zł'],1,'Pomnóż 19,80 zł przez 3.','3 × 19,80 = 59,40 zł.'],
      ['Ile kosztują dwa pozostałe?',['7,40 zł','12,80 zł','14,80 zł','16,40 zł'],2,'Pomnóż 7,40 zł przez 2.','2 × 7,40 = 14,80 zł.'],
      ['Jaka jest łączna kwota?',['72,20 zł','74,20 zł','75,20 zł','76,20 zł'],1,'Dodaj obie kwoty, zachowując miejsca po przecinku.','Razem: 59,40 + 14,80 = 74,20 zł.'],
      ['Czy 75 zł wystarczy?',['Nie, brakuje 0,80 zł','Tak, zostanie 0,80 zł','Tak, zostanie 1,20 zł','Nie, brakuje 1,20 zł'],1,'Od 75 zł odejmij kwotę rachunku.','Odpowiedź: wystarczy; reszta wyniesie 75 − 74,20 = 0,80 zł.']
    ]}
  ],
  'e8-fractions':[
    {title:'Składniki ciasta',problem:'Przepis na jedno ciasto wymaga 3/4 kg mąki. Ile kilogramów mąki potrzeba na 2 i 1/2 takiego ciasta?',steps:[
      ['Jak zapiszesz 2 i 1/2 jako ułamek niewłaściwy?',['3/2','4/2','5/2','5/4'],2,'Dwie całe to 4/2, do tego dodaj 1/2.','2 i 1/2 = 5/2.'],
      ['Które działanie oblicza ilość mąki?',['3/4 + 5/2','3/4 × 5/2','3/4 / 5/2','5/2 − 3/4'],1,'Liczbę ciast pomnóż przez ilość mąki na jedno ciasto.','Mąka: 3/4 × 5/2.'],
      ['Ile wynosi iloczyn?',['8/6','15/8','15/6','5/8'],1,'Pomnóż liczniki i mianowniki.','3/4 × 5/2 = 15/8 kg.'],
      ['Jak zapisać wynik jako liczbę mieszaną?',['1 i 3/8 kg','1 i 5/8 kg','1 i 7/8 kg','2 i 1/8 kg'],2,'15/8 to 8/8 i jeszcze 7/8.','Odpowiedź: 15/8 = 1 i 7/8 kg.']
    ]},
    {title:'Reszta z zakupów',problem:'Ania kupiła zeszyt za 6,75 zł i długopis za 3,40 zł. Zapłaciła banknotem 20 zł. Ile reszty otrzymała?',steps:[
      ['Ile razem kosztują zakupy?',['9,15 zł','10,15 zł','10,75 zł','11,15 zł'],1,'Dodaj 6,75 i 3,40, wyrównując przecinki.','Koszt: 6,75 + 3,40 = 10,15 zł.'],
      ['Jakim działaniem obliczysz resztę?',['20 + 10,15','20 − 10,15','10,15 − 20','20 × 10,15'],1,'Od kwoty wręczonej sprzedawcy odejmij koszt zakupów.','Reszta: 20 − 10,15.'],
      ['Ile groszy to 0,85 zł?',['8,5 gr','15 gr','85 gr','850 gr'],2,'Jeden złoty to 100 groszy.','0,85 zł to 85 gr.'],
      ['Ile reszty otrzymała Ania?',['8,85 zł','9,15 zł','9,85 zł','10,85 zł'],2,'Wykonaj 20,00 − 10,15.','Odpowiedź: 9,85 zł reszty.']
    ]},
    {title:'Książka w weekend',problem:'W sobotę przeczytano 2/5 książki. W niedzielę przeczytano połowę tego, co zostało po sobocie. Jaka część całej książki została nieprzeczytana?',steps:[
      ['Jaka część książki została po sobocie?',['2/5','3/5','1/2','4/5'],1,'Od całej książki odejmij 2/5.','Po sobocie: 1 − 2/5 = 3/5.'],
      ['Jaką część całości przeczytano w niedzielę?',['1/2','1/5','3/10','2/10'],2,'Połowa z 3/5 to 1/2 × 3/5.','W niedzielę: 3/10 całej książki.'],
      ['Jaką część przeczytano łącznie?',['5/15','7/10','3/5','1/2'],1,'2/5 to 4/10; dodaj 3/10.','Razem przeczytano 4/10 + 3/10 = 7/10.'],
      ['Jaka część została?',['1/10','2/10','3/10','7/10'],2,'Od całości odejmij przeczytane 7/10.','Odpowiedź: nieprzeczytane zostało 3/10 książki.']
    ]}
  ],
  'e8-percent-plus':[
    {title:'Cena przed przeceną',problem:'Po obniżce o 25% buty kosztują 180 zł. Ile kosztowały przed obniżką i ile złotych wyniosła przecena?',steps:[
      ['Jaką część starej ceny stanowi 180 zł?',['25%','50%','75%','125%'],2,'Po obniżce o 25% pozostaje 75% ceny.','180 zł to 75% ceny początkowej.'],
      ['Ile wynosi 25% ceny początkowej?',['45 zł','60 zł','75 zł','120 zł'],1,'75% to trzy równe części po 25%; podziel 180 przez 3.','25% to 180 / 3 = 60 zł.'],
      ['Ile kosztowały buty przed przeceną?',['200 zł','220 zł','240 zł','260 zł'],2,'Dodaj brakujące 25% do 180 zł.','Cena początkowa: 180 + 60 = 240 zł.'],
      ['Jaką kwotę zaoszczędzono?',['45 zł','60 zł','75 zł','180 zł'],1,'Odejmij cenę promocyjną od początkowej.','Odpowiedź: buty kosztowały 240 zł, rabat wyniósł 60 zł.']
    ]},
    {title:'Punkty procentowe',problem:'W jednej klasie 40% uczniów wybrało zajęcia sportowe, a w drugiej 55%. O ile punktów procentowych różnią się te udziały i o ile procent udział drugiej klasy jest większy względem pierwszej?',steps:[
      ['Jaka jest różnica udziałów w punktach procentowych?',['5 pp','15 pp','25 pp','95 pp'],1,'Odejmij 40% od 55%.','Różnica to 55% − 40% = 15 punktów procentowych.'],
      ['Do jakiej wartości odniesiesz względny wzrost?',['Do 15%','Do 40%','Do 55%','Do 100%'],1,'Porównujemy udział drugiej klasy do pierwszej.','Podstawą względnego wzrostu jest 40%.'],
      ['Jaki iloraz opisuje względny wzrost?',['15 / 40','15 / 55','40 / 55','55 / 15'],0,'Różnicę podziel przez wartość początkową.','Wzrost względny to 15 / 40 = 0,375.'],
      ['Ile wynosi względny wzrost?',['15%','25%','37,5%','55%'],2,'Zamień 0,375 na procent.','Odpowiedź: 15 pp różnicy, czyli 37,5% więcej względem 40%.']
    ]},
    {title:'Odsetki na koncie',problem:'Na konto wpłacono 1000 zł. Po roku bank dopisał 4% odsetek, a w drugim roku 4% od nowego salda. Ile pieniędzy będzie po dwóch latach? Pomijamy podatek.',steps:[
      ['Ile wynoszą odsetki za pierwszy rok?',['4 zł','40 zł','80 zł','400 zł'],1,'4% z 1000 zł to 0,04 × 1000.','Pierwszy rok: 40 zł odsetek.'],
      ['Jakie jest saldo po pierwszym roku?',['1004 zł','1020 zł','1040 zł','1400 zł'],2,'Dodaj odsetki do wpłaty.','Po roku: 1000 + 40 = 1040 zł.'],
      ['Ile wynoszą odsetki w drugim roku?',['40 zł','41,60 zł','42 zł','104 zł'],1,'4% licz od nowego salda 1040 zł.','Drugi rok: 0,04 × 1040 = 41,60 zł.'],
      ['Jakie jest końcowe saldo?',['1080 zł','1081,60 zł','1041,60 zł','1120 zł'],1,'Dodaj odsetki z drugiego roku do salda po pierwszym.','Odpowiedź: 1040 + 41,60 = 1081,60 zł.']
    ]}
  ],
  'e8-powers-plus':[
    {title:'Działania na potęgach',problem:'Uprość wyrażenie (2⁵ × 2³) / 2⁴ i podaj jego wartość liczbową.',steps:[
      ['Ile wynosi 2⁵ × 2³ w zapisie potęgowym?',['2²','2⁸','4⁸','2¹⁵'],1,'Mnożąc potęgi o tej samej podstawie, dodaj wykładniki.','2⁵ × 2³ = 2⁸.'],
      ['Jak uprościć 2⁸ / 2⁴?',['2²','2⁴','2⁸','2¹²'],1,'Przy dzieleniu takich potęg odejmij wykładniki.','2⁸ / 2⁴ = 2⁴.'],
      ['Ile wynosi 2⁴?',['8','12','16','32'],2,'Pomnóż cztery dwójki.','2⁴ = 16.'],
      ['Która kontrola zgadza się z wynikiem?',['256 / 16 = 16','256 / 8 = 16','128 / 16 = 16','32 / 16 = 16'],0,'2⁸ to 256, a 2⁴ to 16.','Odpowiedź: (2⁵ × 2³) / 2⁴ = 16.']
    ]},
    {title:'Pierwiastek i pole',problem:'Pole kwadratu wynosi 144 cm². Oblicz długość boku i obwód kwadratu.',steps:[
      ['Jak powiązane są pole P i bok a kwadratu?',['P = 4a','P = a²','P = 2a','P = a/2'],1,'Pole kwadratu to bok razy bok.','a² = 144 cm².'],
      ['Jak wyznaczyć długość boku?',['a = 144/2','a = 144/4','a = √144','a = 144²'],2,'Szukamy dodatniego pierwiastka pola.','a = √144 = 12 cm.'],
      ['Ile wynosi bok?',['6 cm','10 cm','12 cm','72 cm'],2,'12 × 12 = 144.','Bok ma 12 cm.'],
      ['Ile wynosi obwód?',['24 cm','36 cm','48 cm','144 cm'],2,'Pomnóż długość boku przez 4.','Odpowiedź: obwód to 4 × 12 = 48 cm.']
    ]},
    {title:'Duża odległość',problem:'Światło przebywa około 3 × 10⁵ km w sekundę. Jaki dystans pokona w 2 × 10² sekund? Podaj wynik w notacji wykładniczej i zwykłej.',steps:[
      ['Jakim działaniem obliczysz drogę?',['3 × 10⁵ + 2 × 10²','(3 × 10⁵) × (2 × 10²)','(3 × 10⁵) / (2 × 10²)','3 × 10⁵ − 2 × 10²'],1,'Prędkość pomnóż przez czas.','Droga: (3 × 10⁵) × (2 × 10²) km.'],
      ['Jaki będzie iloczyn współczynników 3 i 2?',['5','6','9','32'],1,'Współczynniki mnożymy osobno.','3 × 2 = 6.'],
      ['Jaka potęga dziesiątki powstanie?',['10³','10⁷','10¹⁰','10²⁵'],1,'Dodaj wykładniki 5 i 2.','10⁵ × 10² = 10⁷.'],
      ['Ile to kilometrów?',['600 000 km','6 000 000 km','60 000 000 km','600 000 000 km'],2,'6 × 10⁷ ma siedem zer po szóstce.','Odpowiedź: 6 × 10⁷ km = 60 000 000 km.']
    ]}
  ],
  'e8-algebra':[
    {title:'Karnety i wejścia',problem:'Wejście na basen kosztuje x zł. Karnet na 5 wejść ma zniżkę 10 zł od sumy cen pojedynczych wejść. Za dwa karnety zapłacono 130 zł. Ile kosztuje jedno wejście?',steps:[
      ['Jak zapisać cenę jednego karnetu?',['5x − 10','5(x − 10)','x − 10','2x + 10'],0,'Pięć wejść kosztuje 5x, a zniżka dotyczy całego karnetu.','Karnet: 5x − 10 zł.'],
      ['Jakie równanie opisuje zakup dwóch karnetów?',['5x − 20 = 130','2(5x − 10) = 130','2x(5 − 10) = 130','10x + 20 = 130'],1,'Pomnóż cenę jednego karnetu przez 2.','2(5x − 10) = 130.'],
      ['Co otrzymasz po usunięciu nawiasu?',['10x − 20 = 130','10x − 10 = 130','7x − 20 = 130','10x + 20 = 130'],0,'Dwójka mnoży zarówno 5x, jak i −10.','10x − 20 = 130, więc 10x = 150.'],
      ['Ile kosztuje pojedyncze wejście?',['13 zł','15 zł','20 zł','30 zł'],1,'Podziel 150 przez 10 i sprawdź cenę karnetu.','Odpowiedź: x = 15 zł; dwa karnety po 65 zł kosztują 130 zł.']
    ]},
    {title:'Wzór na liczbę płytek',problem:'Pierwszy wzór ma 5 płytek. Każdy kolejny ma o 3 płytki więcej. Zapisz liczbę płytek w n-tym wzorze i oblicz ją dla n = 10.',steps:[
      ['Ile płytek dodajemy po pierwszym wzorze do n-tego?',['n','n − 1','n + 1','3n'],1,'Od wzoru 1 do wzoru n są n − 1 przejścia.','Liczba przyrostów: n − 1.'],
      ['Które wyrażenie opisuje liczbę płytek?',['5 + 3(n − 1)','5n + 3','3(n + 1)','5 + n − 1'],0,'Zacznij od 5 płytek i dodaj po 3 za każde przejście.','Liczba płytek: 5 + 3(n − 1).'],
      ['Jaka jest postać uproszczona?',['3n + 5','3n + 2','5n − 3','8n − 1'],1,'Usuń nawias: 5 + 3n − 3.','5 + 3n − 3 = 3n + 2.'],
      ['Ile płytek ma wzór dziesiąty?',['27','30','32','35'],2,'Podstaw n = 10 do 3n + 2.','Odpowiedź: 3 × 10 + 2 = 32 płytki.']
    ]},
    {title:'Parzystość sumy',problem:'Dwie kolejne liczby parzyste można zapisać jako 2n oraz 2n + 2. Wykaż, że ich suma jest podzielna przez 2, i wskaż, czy zawsze jest podzielna przez 4.',steps:[
      ['Jak zapisać ich sumę?',['2n + (2n + 2)','2n × (2n + 2)','2n + (n + 2)','2n − (2n + 2)'],0,'Dodaj obie podane liczby.','Suma: 2n + (2n + 2).'],
      ['Jaka jest postać po redukcji?',['2n + 2','4n + 2','4n + 4','2n² + 2'],1,'Połącz 2n z 2n.','Suma wynosi 4n + 2.'],
      ['Który zapis dowodzi podzielności przez 2?',['2(2n + 1)','4(n + 2)','2n(2 + 2)','n(4 + 2)'],0,'Wyłącz 2 przed nawias.','4n + 2 = 2(2n + 1), więc suma jest parzysta.'],
      ['Czy suma jest zawsze podzielna przez 4?',['Tak, bo obie liczby są parzyste','Tak, bo zawiera 4n','Nie, ma resztę 2 z dzielenia przez 4','Tylko gdy n = 0'],2,'4n jest wielokrotnością 4, ale zostaje jeszcze 2.','Odpowiedź: podzielna przez 2, lecz nigdy przez 4.']
    ]}
  ],
  'e8-equations-plus':[
    {title:'Wiek rodzeństwa',problem:'Kasia ma 3 lata więcej niż Tomek. Za 5 lat będą mieli razem 37 lat. Ile lat mają dziś?',steps:[
      ['Jeśli Tomek ma x lat, ile ma Kasia?',['x − 3','x + 3','3x','x + 5'],1,'Kasia jest starsza o 3 lata.','Dziś: Tomek x, Kasia x + 3.'],
      ['Które równanie opisuje ich wiek za 5 lat?',['x + (x + 3) = 37','(x + 5) + (x + 3 + 5) = 37','(x + 5) + (x + 3) = 37','2x + 5 = 37'],1,'Za 5 lat każdemu przybędzie po 5 lat.','(x + 5) + (x + 8) = 37.'],
      ['Ile wynosi x?',['10','12','15','18'],1,'Uprość do 2x + 13 = 37.','2x = 24, więc x = 12.'],
      ['Ile lat mają dziś?',['12 i 15','12 i 17','15 i 18','10 i 13'],0,'Kasia jest o 3 lata starsza; sprawdź sumę za 5 lat.','Odpowiedź: Tomek 12, Kasia 15; za 5 lat razem 17 + 20 = 37.']
    ]},
    {title:'Rozdzielanie cukierków',problem:'W pudełku była pewna liczba cukierków. Po rozdaniu połowy i jeszcze 6 cukierków zostało 14. Ile cukierków było na początku?',steps:[
      ['Jak zapisać liczbę po rozdaniu połowy z x cukierków?',['2x','x/2','x − 2','x + 2'],1,'Po rozdaniu połowy zostaje również połowa.','Po pierwszym rozdaniu zostaje x/2.'],
      ['Które równanie opisuje resztę po oddaniu kolejnych 6?',['x/2 + 6 = 14','x/2 − 6 = 14','2x − 6 = 14','x − 6 = 14'],1,'Od pozostałej połowy odejmij jeszcze 6.','x/2 − 6 = 14.'],
      ['Ile wynosi połowa początkowej liczby?',['8','14','20','28'],2,'Dodaj 6 do obu stron równania.','x/2 = 20.'],
      ['Ile cukierków było na początku?',['20','28','40','56'],2,'Pomnóż obie strony przez 2 i sprawdź.','Odpowiedź: 40 cukierków; po oddaniu 20 i 6 zostaje 14.']
    ]},
    {title:'Ogródek z ogrodzeniem',problem:'Prostokątny ogródek ma długość o 4 m większą od szerokości. Na ogrodzenie całego obwodu potrzeba 32 m siatki. Jakie są wymiary ogródka i jego pole?',steps:[
      ['Jeśli szerokość to x, jak zapisać długość?',['4x','x − 4','x + 4','x/4'],2,'Dłuższy o 4 m to x + 4 m.','Boki: x oraz x + 4.'],
      ['Jakie równanie daje obwód?',['x + x + 4 = 32','2x + 2(x + 4) = 32','x(x + 4) = 32','4x + 4 = 32'],1,'W obwodzie każdy z dwóch boków występuje dwa razy.','2x + 2(x + 4) = 32.'],
      ['Ile wynosi szerokość x?',['4 m','6 m','8 m','10 m'],1,'Po uproszczeniu 4x + 8 = 32.','4x = 24, zatem x = 6 m.'],
      ['Jakie jest pole?',['32 m²','48 m²','60 m²','96 m²'],2,'Długość to 6 + 4 = 10 m.','Odpowiedź: wymiary 6 m × 10 m, pole 60 m².']
    ]}
  ],
  'e8-proportion':[
    {title:'Skala planu mieszkania',problem:'Na planie w skali 1 : 100 pokój ma wymiary 4 cm × 3 cm. Jakie są rzeczywiste wymiary i pole pokoju?',steps:[
      ['Ile centymetrów w rzeczywistości odpowiada 1 cm na planie?',['1','10','100','1000'],2,'W skali 1 : 100 każda długość rośnie sto razy.','1 cm na planie to 100 cm w pokoju.'],
      ['Jakie są rzeczywiste długości boków?',['4 m i 3 m','40 m i 30 m','4 cm i 3 cm','400 m i 300 m'],0,'4 × 100 cm to 400 cm = 4 m; podobnie 3 m.','Wymiary pokoju: 4 m × 3 m.'],
      ['Które działanie oblicza pole?',['4 + 3','2(4 + 3)','4 × 3','4 / 3'],2,'Pole prostokąta to iloczyn boków.','Pole: 4 m × 3 m.'],
      ['Ile wynosi pole pokoju?',['7 m²','12 m²','14 m²','1200 m²'],1,'Pomnóż 4 przez 3 i zapisz jednostkę kwadratową.','Odpowiedź: 4 m na 3 m, pole 12 m².']
    ]},
    {title:'Droga przy stałej prędkości',problem:'Rowerzysta pokonuje 18 km w 1,5 godziny. Ile kilometrów przejedzie w 2 godziny przy tej samej średniej prędkości?',steps:[
      ['Jaka jest średnia prędkość?',['9 km/h','12 km/h','18 km/h','27 km/h'],1,'Podziel 18 km przez 1,5 godziny.','Prędkość: 18 / 1,5 = 12 km/h.'],
      ['Jakim działaniem obliczysz nową drogę?',['12 / 2','12 + 2','12 × 2','18 × 1,5'],2,'Prędkość pomnóż przez czas.','Droga w 2 h: 12 × 2 km.'],
      ['Ile kilometrów przejedzie?',['12 km','18 km','24 km','36 km'],2,'12 kilometrów w godzinę razy dwie godziny.','W 2 godziny przejedzie 24 km.'],
      ['O ile to dalej niż w 1,5 godziny?',['3 km','6 km','12 km','24 km'],1,'Od 24 km odejmij wcześniejsze 18 km.','Odpowiedź: 24 km, o 6 km dalej.']
    ]},
    {title:'Porównanie cen',problem:'Paczka 6 długopisów kosztuje 27 zł, a paczka 10 długopisów 42 zł. Która paczka ma niższą cenę jednej sztuki i ile można zaoszczędzić na 10 sztukach względem kupowania w pierwszej cenie?',steps:[
      ['Ile kosztuje jeden długopis z paczki 6 sztuk?',['4 zł','4,50 zł','5 zł','6 zł'],1,'Podziel 27 zł przez 6.','Cena jednostkowa pierwszej paczki: 4,50 zł.'],
      ['Ile kosztuje jeden z paczki 10 sztuk?',['3,60 zł','4,20 zł','4,50 zł','42 zł'],1,'Podziel 42 zł przez 10.','Cena jednostkowa drugiej paczki: 4,20 zł.'],
      ['Która paczka jest korzystniejsza na sztukę?',['Pierwsza o 0,30 zł','Druga o 0,30 zł','Pierwsza o 3 zł','Są równe'],1,'Porównaj 4,50 zł i 4,20 zł.','Druga paczka jest tańsza o 0,30 zł na sztuce.'],
      ['Ile wynosi oszczędność na 10 sztukach?',['0,30 zł','2 zł','3 zł','4,50 zł'],2,'Pomnóż 0,30 zł różnicy przez 10.','Odpowiedź: paczka 10 sztuk; oszczędność 3 zł względem ceny jednostkowej pierwszej.']
    ]}
  ],
  'e8-geometry':[
    {title:'Obwód figury w kształcie L',problem:'Z prostokąta 10 m × 8 m wycięto z jednego narożnika prostokąt 4 m × 3 m, tworząc figurę w kształcie L. Ile wynosi obwód nowej figury?',steps:[
      ['Ile wynosi obwód pierwotnego prostokąta?',['18 m','36 m','80 m','160 m'],1,'Obwód to 2 × (10 + 8).','Obwód początkowy: 36 m.'],
      ['Jakie fragmenty zewnętrznych boków znikają?',['4 m i 3 m','10 m i 8 m','4 m i 4 m','3 m i 3 m'],0,'Wycięcie przy narożniku zabiera odcinki odpowiadające bokom wyciętego prostokąta.','Znika 4 m + 3 m z zewnętrznych boków.'],
      ['Jakie nowe krawędzie pojawiają się we wcięciu?',['Tylko 4 m','Tylko 3 m','4 m i 3 m','10 m i 8 m'],2,'Dwa boki wcięcia mają takie same długości jak zabrane.','We wcięciu przybywa 4 m + 3 m.'],
      ['Jaki jest obwód figury L?',['29 m','33 m','36 m','43 m'],2,'Odjęte i dodane długości się równoważą.','Odpowiedź: obwód pozostaje równy 36 m.']
    ]},
    {title:'Kąty w trójkącie',problem:'W trójkącie jeden kąt ma 48°, a drugi jest od niego o 24° większy. Oblicz trzeci kąt i ustal, czy trójkąt jest ostrokątny.',steps:[
      ['Ile ma drugi kąt?',['24°','48°','72°','96°'],2,'Dodaj 24° do pierwszego kąta.','Drugi kąt: 48° + 24° = 72°.'],
      ['Ile wynosi suma dwóch znanych kątów?',['96°','110°','120°','132°'],2,'Dodaj 48° i 72°.','Suma dwóch kątów: 120°.'],
      ['Ile ma trzeci kąt?',['48°','60°','72°','120°'],1,'W trójkącie suma wynosi 180°.','Trzeci kąt: 180° − 120° = 60°.'],
      ['Jaki jest to trójkąt?',['Ostrokątny','Prostokątny','Rozwartokątny','Nie można stwierdzić'],0,'Wszystkie trzy kąty: 48°, 72°, 60° są mniejsze niż 90°.','Odpowiedź: trzeci kąt 60°, trójkąt ostrokątny.']
    ]},
    {title:'Okrągła podkładka',problem:'Podkładka ma kształt koła o promieniu 7 cm. Oblicz długość jej brzegu oraz pole. Podaj dokładne wyniki z π.',steps:[
      ['Ile wynosi średnica podkładki?',['3,5 cm','7 cm','14 cm','49 cm'],2,'Średnica jest dwa razy dłuższa od promienia.','Średnica: 2 × 7 = 14 cm.'],
      ['Który wzór daje długość brzegu?',['πr²','2πr','2r²','π/r'],1,'Długość okręgu to 2π razy promień.','Obwód: 2πr = 14π cm.'],
      ['Który wzór daje pole podkładki?',['πr²','2πr','πr','4πr'],0,'Pole koła to π razy kwadrat promienia.','Pole: π × 7².'],
      ['Jakie są dokładne wyniki?',['14π cm i 49π cm²','49π cm i 14π cm²','7π cm i 14π cm²','14π cm i 14π cm²'],0,'7² to 49, a 2 × 7 to 14.','Odpowiedź: brzeg 14π cm, pole 49π cm².']
    ]}
  ],
  'e8-circle-plus':[
    {title:'Punkt na siatce',problem:'Punkty A(−3, 2) i B(5, 2) leżą na jednej poziomej linii. Punkt C(5, 6) leży nad B. Oblicz pole trójkąta ABC.',steps:[
      ['Jaką długość ma odcinek AB?',['2','5','8','11'],2,'Odejmij współrzędne x: 5 − (−3).','AB = 8 jednostek.'],
      ['Jaką długość ma odcinek BC?',['2','4','6','8'],1,'Odejmij współrzędne y: 6 − 2.','BC = 4 jednostki.'],
      ['Które odcinki tworzą kąt prosty?',['AB i BC','AB i AC','BC i AC','Żadne'],0,'AB jest poziomy, a BC pionowy.','AB i BC są prostopadłe.'],
      ['Jakie jest pole trójkąta ABC?',['12','16','24','32'],1,'Dla prostopadłych boków użyj połowy ich iloczynu.','Odpowiedź: P = 8 × 4 / 2 = 16 jednostek².']
    ]},
    {title:'Drabina przy ścianie',problem:'Drabina długości 13 m opiera się o ścianę. Jej dolny koniec stoi 5 m od ściany. Na jakiej wysokości znajduje się górny koniec?',steps:[
      ['Który bok jest przeciwprostokątną?',['Wysokość','Odległość 5 m','Drabina 13 m','Ściana'],2,'Najdłuższy bok trójkąta prostokątnego to drabina.','Przeciwprostokątna ma 13 m.'],
      ['Jakie równanie wyznacza wysokość h?',['h² + 5² = 13²','h² + 13² = 5²','h + 5 = 13','h × 5 = 13'],0,'Zastosuj twierdzenie Pitagorasa.','h² + 5² = 13².'],
      ['Ile wynosi h²?',['25','144','169','194'],1,'Odejmij 25 od 169.','h² = 169 − 25 = 144.'],
      ['Na jakiej wysokości jest koniec drabiny?',['8 m','12 m','13 m','144 m'],1,'Długość jest dodatnim pierwiastkiem z 144.','Odpowiedź: h = √144 = 12 m.']
    ]},
    {title:'Prostokąt na osi',problem:'Wierzchołki prostokąta to A(1, 1), B(7, 1), C(7, 5), D(1, 5). Oblicz jego obwód i pole.',steps:[
      ['Ile jednostek ma poziomy bok AB?',['4','6','7','8'],1,'Odejmij pierwsze współrzędne punktów B i A.','AB = 7 − 1 = 6.'],
      ['Ile jednostek ma pionowy bok BC?',['3','4','5','6'],1,'Odejmij drugie współrzędne punktów C i B.','BC = 5 − 1 = 4.'],
      ['Ile wynosi obwód?',['10','20','24','40'],1,'Pomnóż sumę boków 6 + 4 przez 2.','Obwód: 2(6 + 4) = 20.'],
      ['Ile wynosi pole?',['10','20','24','40'],2,'Pole to 6 razy 4.','Odpowiedź: obwód 20 jednostek, pole 24 jednostki².']
    ]}
  ],
  'e8-space':[
    {title:'Oklejanie pudełka',problem:'Zamknięte pudełko ma wymiary 4 cm × 5 cm × 6 cm. Ile cm² papieru potrzeba na oklejenie wszystkich jego ścian, pomijając zakładki?',steps:[
      ['Ile wynosi pole pary ścian 4 × 5?',['20 cm²','40 cm²','60 cm²','120 cm²'],1,'Takie ściany są dwie.','Dwie ściany 4 × 5: 2 × 20 = 40 cm².'],
      ['Ile wynosi pole pary ścian 4 × 6?',['24 cm²','40 cm²','48 cm²','60 cm²'],2,'Takie ściany również są dwie.','Dwie ściany 4 × 6: 2 × 24 = 48 cm².'],
      ['Ile wynosi pole pary ścian 5 × 6?',['30 cm²','48 cm²','60 cm²','120 cm²'],2,'Pomnóż 5 × 6, a potem razy 2.','Dwie ściany 5 × 6: 60 cm².'],
      ['Ile papieru potrzeba łącznie?',['108 cm²','120 cm²','148 cm²','240 cm²'],2,'Dodaj 40 + 48 + 60.','Odpowiedź: pole powierzchni wynosi 148 cm².']
    ]},
    {title:'Sześcian z siatki',problem:'Siatka sześcianu składa się z sześciu kwadratów o boku 3 cm. Oblicz pole całej siatki i objętość sześcianu.',steps:[
      ['Ile wynosi pole jednej ściany?',['6 cm²','9 cm²','12 cm²','27 cm²'],1,'Kwadrat ma pole bok razy bok.','Jedna ściana: 3 × 3 = 9 cm².'],
      ['Ile ścian ma sześcian?',['4','5','6','8'],2,'Siatka z treści zawiera sześć kwadratów.','Sześcian ma 6 ścian.'],
      ['Ile wynosi pole całej siatki?',['27 cm²','36 cm²','54 cm²','81 cm²'],2,'Pomnóż pole ściany przez ich liczbę.','Pole siatki: 6 × 9 = 54 cm².'],
      ['Jaka jest objętość?',['9 cm³','18 cm³','27 cm³','54 cm³'],2,'Objętość sześcianu to bok do sześcianu.','Odpowiedź: pole 54 cm², objętość 3³ = 27 cm³.']
    ]},
    {title:'Graniastosłup trójkątny',problem:'Podstawa graniastosłupa jest trójkątem prostokątnym o przyprostokątnych 6 cm i 8 cm. Wysokość graniastosłupa wynosi 10 cm. Oblicz jego objętość.',steps:[
      ['Jak obliczysz pole trójkątnej podstawy?',['6 × 8','6 × 8 / 2','6 + 8','(6 + 8) × 2'],1,'Trójkąt prostokątny to połowa prostokąta o tych bokach.','Pole podstawy: 6 × 8 / 2.'],
      ['Ile wynosi pole podstawy?',['14 cm²','24 cm²','48 cm²','60 cm²'],1,'48 podziel przez 2.','Pp = 24 cm².'],
      ['Który wzór daje objętość graniastosłupa?',['Pp + H','Pp × H','2Pp × H','Pp / H'],1,'Pole podstawy pomnóż przez wysokość bryły.','V = Pp × H = 24 × 10.'],
      ['Ile wynosi objętość?',['120 cm³','240 cm³','480 cm³','240 cm²'],1,'Zapisz wynik w centymetrach sześciennych.','Odpowiedź: V = 240 cm³.']
    ]}
  ],
  'e8-data':[
    {title:'Mediana pięciu wyników',problem:'W pięciu sprawdzianach uczeń otrzymał 3, 5, 2, 4 i 5 punktów. Uporządkuj wyniki, wyznacz medianę i rozstęp.',steps:[
      ['Które uporządkowanie jest poprawne?',['2, 3, 4, 5, 5','3, 5, 2, 4, 5','5, 5, 4, 3, 2','2, 3, 5, 5, 4'],0,'Ułóż liczby rosnąco.','Uporządkowane wyniki: 2, 3, 4, 5, 5.'],
      ['Która liczba jest medianą?',['3','4','5','19'],1,'W pięciu liczbach mediana jest trzecią.','Mediana = 4.'],
      ['Jak obliczysz rozstęp?',['5 + 2','5 − 2','5 / 2','4 − 3'],1,'Rozstęp to największa wartość minus najmniejsza.','Rozstęp: 5 − 2.'],
      ['Ile wynosi rozstęp?',['2','3','4','5'],1,'Odejmij 2 od 5.','Odpowiedź: mediana 4, rozstęp 3.']
    ]},
    {title:'Głosy w ankiecie',problem:'W ankiecie 40 osób wybierało sposób dojazdu: 16 rowerem, 14 autobusem, a reszta pieszo. Jaki procent ankietowanych chodzi pieszo?',steps:[
      ['Ile osób wybrało rower lub autobus?',['14','16','30','40'],2,'Dodaj 16 i 14.','Rower lub autobus: 30 osób.'],
      ['Ile osób chodzi pieszo?',['10','14','16','30'],0,'Od wszystkich 40 odejmij 30.','Pieszo: 40 − 30 = 10 osób.'],
      ['Jaki ułamek wszystkich stanowią piesi?',['10/30','10/40','30/40','40/10'],1,'W liczniku umieść pieszych, w mianowniku wszystkich uczestników.','Udział pieszych: 10/40 = 1/4.'],
      ['Jaki to procent?',['10%','20%','25%','40%'],2,'Jedna czwarta całości to 25%.','Odpowiedź: pieszo chodzi 25% ankietowanych.']
    ]},
    {title:'Średnia po dopisaniu wyniku',problem:'Cztery wyniki ucznia to 6, 8, 9 i 9 punktów. W piątym sprawdzianie zdobył 13 punktów. Ile wynosi nowa średnia?',steps:[
      ['Ile wynosi suma czterech pierwszych wyników?',['30','32','34','36'],1,'Dodaj 6 + 8 + 9 + 9.','Suma czterech wyników = 32.'],
      ['Ile wynosi suma po piątym sprawdzianie?',['37','41','45','49'],2,'Dodaj nowy wynik 13 do 32.','Nowa suma: 32 + 13 = 45.'],
      ['Przez jaką liczbę podzielisz sumę?',['4','5','13','45'],1,'Średnia dotyczy teraz pięciu sprawdzianów.','Dzielimy sumę przez 5.'],
      ['Ile wynosi nowa średnia?',['8','9','10','11,25'],1,'45 podzielone przez 5 to 9.','Odpowiedź: nowa średnia wynosi 9 punktów.']
    ]}
  ],
  'e8-reasoning':[
    {title:'Zestawy ubrań',problem:'Ola ma 3 koszulki i 2 pary spodni. Na ile sposobów może wybrać jedną koszulkę i jedną parę spodni? Jeśli dokupi jedną koszulkę, ile będzie możliwości?',steps:[
      ['Ile par spodni można połączyć z jedną koszulką?',['1','2','3','5'],1,'Dla każdej koszulki są dwie możliwości.','Jedna koszulka daje 2 zestawy.'],
      ['Ile jest zestawów przed zakupem?',['5','6','8','9'],1,'Pomnóż 3 koszulki przez 2 pary spodni.','Początkowo: 3 × 2 = 6 zestawów.'],
      ['Ile koszulek będzie po zakupie?',['3','4','5','6'],1,'Do trzech dodaj jedną.','Po zakupie są 4 koszulki.'],
      ['Ile będzie różnych zestawów?',['6','7','8','12'],2,'Każdą z czterech koszulek połącz z dwiema parami spodni.','Odpowiedź: 4 × 2 = 8 zestawów.']
    ]},
    {title:'Rzut kostką',problem:'Rzucamy uczciwą sześcienną kostką. Oblicz prawdopodobieństwo wyrzucenia liczby większej od 3, a potem prawdopodobieństwo liczby parzystej większej od 3.',steps:[
      ['Ile możliwych wyników ma kostka?',['3','4','6','12'],2,'Na ściankach są liczby od 1 do 6.','Możliwe wyniki: 1, 2, 3, 4, 5, 6.'],
      ['Które liczby są większe od 3?',['3, 4, 5','4, 5, 6','2, 4, 6','5, 6'],1,'Warunek jest ostry: 3 nie spełnia go.','Wyniki sprzyjające: 4, 5, 6.'],
      ['Jakie jest pierwsze prawdopodobieństwo?',['1/6','2/6','3/6','4/6'],2,'Trzy z sześciu wyników są większe od 3.','P(>3) = 3/6 = 1/2.'],
      ['Jakie jest prawdopodobieństwo liczby parzystej większej od 3?',['1/6','2/6','3/6','4/6'],1,'Spośród 4, 5, 6 parzyste są 4 i 6.','Odpowiedź: P(>3) = 1/2; P(parzysta i >3) = 2/6 = 1/3.']
    ]},
    {title:'Losowanie bez zwracania',problem:'W woreczku są 3 czerwone i 2 niebieskie żetony. Losujemy dwa kolejno bez zwracania. Jakie jest prawdopodobieństwo, że oba będą czerwone?',steps:[
      ['Ile żetonów jest na początku?',['2','3','5','6'],2,'Dodaj czerwone i niebieskie.','Na początku jest 5 żetonów.'],
      ['Jakie jest prawdopodobieństwo czerwonego w pierwszym losowaniu?',['2/5','3/5','3/4','1/2'],1,'Trzy z pięciu żetonów są czerwone.','P(pierwszy czerwony) = 3/5.'],
      ['Po pierwszym czerwonym, jakie jest prawdopodobieństwo drugiego czerwonego?',['2/5','2/4','3/5','3/4'],1,'Zostały dwa czerwone spośród czterech żetonów.','P(drugi czerwony | pierwszy czerwony) = 2/4.'],
      ['Jakie jest prawdopodobieństwo dwóch czerwonych?',['2/20','3/10','1/2','3/5'],1,'Pomnóż 3/5 przez 2/4 i skróć wynik.','Odpowiedź: 3/5 × 2/4 = 6/20 = 3/10.']
    ]}
  ]
};
