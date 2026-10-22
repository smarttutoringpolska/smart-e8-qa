// Autorskie zadania wieloetapowe: cztery decyzje A–D składają się na pełne rozwiązanie.
window.E8_OPEN_WORK = {
  'e8-numbers': {
    title:'Temperatura w górach', problem:'O 6:00 temperatura wynosiła −4°C. Do południa wzrosła o 7°C, a do wieczora spadła o 5°C. Oblicz temperaturę wieczorem i różnicę między temperaturą wieczorną a poranną.',
    steps:[
      ['Jaki rachunek opisuje temperaturę w południe?',['−4 + 7','−4 − 7','4 + 7','7 − 4 − 5'],0,'Wzrost oznacza dodawanie 7 do temperatury początkowej.','W południe: −4 + 7 = 3°C.'],
      ['Ile stopni było w południe?',['−11°C','3°C','11°C','−3°C'],1,'Od −4 przechodzimy o 7 miejsc w prawo na osi liczbowej.','Temperatura w południe wynosiła 3°C.'],
      ['Jaki rachunek wyznacza temperaturę wieczorem?',['3 + 5 = 8','−4 − 5 = −9','3 − 5 = −2','5 − 3 = 2'],2,'Wieczorny spadek licz od temperatury w południe.','Wieczorem: 3 − 5 = −2°C.'],
      ['Jaka jest różnica między wieczorem a porankiem?',['2°C','−2°C','6°C','4°C'],0,'Odległość między −4 a −2 na osi liczbowej wynosi 2.','Odpowiedź: wieczorem było −2°C, czyli o 2°C cieplej niż rano.']
    ]
  },
  'e8-fractions': {
    title:'Sok na wycieczce', problem:'W dzbanku były 2 litry soku. Rano wypito 3/8 całej zawartości, a po południu 1/4 całej zawartości. Ile soku zostało?',
    steps:[
      ['Jaką część całego soku wypito?',['3/8 + 1/4','3/8 × 1/4','3/8 + 1/8','1 − 3/8'],0,'Obie części odnoszą się do początkowych 2 litrów.','Wypito 3/8 + 1/4 całego soku.'],
      ['Ile wynosi 3/8 + 1/4?',['4/12','4/8','5/8','1/2'],2,'Zamień 1/4 na 2/8, a potem dodaj liczniki.','Wypito 3/8 + 2/8 = 5/8 soku.'],
      ['Jaka część soku została?',['5/8','3/8','2/8','1/8'],1,'Od całej zawartości odejmij część wypitą.','Zostało 1 − 5/8 = 3/8 soku.'],
      ['Ile to litrów?',['3/8 l','1 i 3/8 l','3/4 l','1/4 l'],2,'Oblicz 3/8 z 2 litrów: pomnóż 2 przez 3/8.','Odpowiedź: 2 × 3/8 = 3/4 litra soku.']
    ]
  },
  'e8-percent-plus': {
    title:'Rabat na plecak', problem:'Plecak kosztował 160 zł. W sklepie obniżono jego cenę o 15%. Klient miał jeszcze kupon dający 10% rabatu od ceny po pierwszej obniżce. Ile zapłacił?',
    steps:[
      ['Od jakiej kwoty liczysz pierwszy rabat?',['Od 160 zł','Od 15 zł','Od ceny po obu rabatach','Od 10 zł'],0,'Pierwszy rabat dotyczy ceny początkowej.','Pierwsza obniżka to 15% z 160 zł.'],
      ['Ile wynosi pierwszy rabat?',['15 zł','24 zł','16 zł','40 zł'],1,'10% z 160 zł to 16 zł, a 5% to 8 zł.','15% × 160 zł = 24 zł.'],
      ['Od jakiej kwoty liczysz drugi rabat?',['Od 160 zł','Od 24 zł','Od 136 zł','Od 16 zł'],2,'Po pierwszej obniżce cena wynosi 160 − 24 zł.','Cena po pierwszym rabacie: 160 − 24 = 136 zł.'],
      ['Ile klient zapłaci po dodatkowym rabacie 10%?',['122,40 zł','120 zł','112 zł','136 zł'],0,'10% z 136 zł to 13,60 zł; odejmij tę kwotę.','Odpowiedź: 136 − 13,60 = 122,40 zł.']
    ]
  },
  'e8-powers-plus': {
    title:'Bakterie w laboratorium', problem:'W próbce jest 2³ bakterii. Ich liczba podwaja się co godzinę. Ile bakterii będzie po 4 godzinach? Zapisz wynik jako potęgę i liczbę.',
    steps:[
      ['Ile bakterii jest na początku?',['2','6','8','16'],2,'2³ oznacza 2 × 2 × 2.','Na początku: 2³ = 8 bakterii.'],
      ['Przez jaki czynnik wzrośnie liczba po 4 godzinach?',['2⁴','2 × 4','4²','2³'],0,'Cztery podwojenia oznaczają mnożenie przez 2 cztery razy.','Czynnik wzrostu: 2⁴.'],
      ['Jaki zapis potęgowy opisuje wynik?',['2³ + 2⁴ = 2⁷','2³ × 2⁴ = 2⁷','2³ × 2⁴ = 2¹²','2⁴ − 2³ = 2'],1,'Przy mnożeniu potęg o tej samej podstawie dodaj wykładniki.','Liczba bakterii: 2³ × 2⁴ = 2⁷.'],
      ['Ile to bakterii?',['64','112','128','256'],2,'2⁷ to siedem czynników równych 2.','Odpowiedź: 2⁷ = 128 bakterii.']
    ]
  },
  'e8-algebra': {
    title:'Bilety do kina', problem:'Bilet normalny kosztuje x zł, a ulgowy jest o 8 zł tańszy. Kupiono 3 bilety normalne i 2 ulgowe za łącznie 104 zł. Oblicz cenę każdego biletu.',
    steps:[
      ['Ile kosztuje bilet ulgowy?',['x + 8','8x','x − 8','x/8'],2,'Tańszy o 8 zł oznacza odjęcie 8 od ceny normalnej.','Cena biletu ulgowego: x − 8 zł.'],
      ['Które równanie opisuje zakup?',['3x + 2(x − 8) = 104','5(x − 8) = 104','3x + 2x + 8 = 104','3(x − 8) + 2x = 104'],0,'Zsumuj cenę trzech normalnych i dwóch ulgowych.','3x + 2(x − 8) = 104.'],
      ['Co otrzymasz po usunięciu nawiasu i redukcji?',['5x + 16 = 104','5x − 16 = 104','x − 16 = 104','6x − 16 = 104'],1,'Pomnóż 2 przez oba składniki w nawiasie.','5x − 16 = 104, zatem 5x = 120 i x = 24.'],
      ['Jakie są ceny biletów?',['20 zł i 12 zł','24 zł i 8 zł','24 zł i 16 zł','16 zł i 24 zł'],2,'Ulgowy jest o 8 zł tańszy od normalnego za 24 zł.','Odpowiedź: normalny 24 zł, ulgowy 16 zł; 3 × 24 + 2 × 16 = 104 zł.']
    ]
  },
  'e8-equations-plus': {
    title:'Dwie półki', problem:'Na pierwszej półce było dwa razy więcej książek niż na drugiej. Po przeniesieniu 6 książek z pierwszej na drugą liczba książek na obu półkach była jednakowa. Ile książek było początkowo na każdej półce?',
    steps:[
      ['Jeśli na drugiej półce jest x książek, ile jest na pierwszej?',['x + 2','2x','x/2','x − 2'],1,'„Dwa razy więcej” oznacza dwukrotność liczby x.','Początkowo: pierwsza półka 2x, druga x.'],
      ['Jak zapisać stan po przeniesieniu sześciu książek?',['2x + 6 = x − 6','2x − 6 = x + 6','2x − 6 = x − 6','2x + 6 = x + 6'],1,'Na pierwszej ubywa 6, a na drugiej przybywa 6.','Po przeniesieniu: 2x − 6 = x + 6.'],
      ['Ile wynosi x?',['6','18','24','12'],3,'Odejmij x od obu stron i dodaj 6.','2x − 6 = x + 6, więc x = 12.'],
      ['Ile książek było na półkach na początku?',['12 i 24','24 i 12','18 i 18','12 i 6'],1,'Pierwsza półka miała 2x, druga x.','Odpowiedź: 24 na pierwszej i 12 na drugiej; po przeniesieniu po 18.']
    ]
  },
  'e8-proportion': {
    title:'Trasa na mapie', problem:'Na mapie w skali 1 : 50 000 odległość między miejscowościami wynosi 7 cm. Rowerzysta jedzie tę trasę ze średnią prędkością 14 km/h. Ile minut zajmie mu przejazd?',
    steps:[
      ['Ile centymetrów w terenie odpowiada 7 cm na mapie?',['7 × 50 000','7 / 50 000','50 000 / 7','7 + 50 000'],0,'Każdy centymetr na mapie to 50 000 cm w terenie.','Odległość w terenie: 7 × 50 000 = 350 000 cm.'],
      ['Ile to kilometrów?',['35 km','0,35 km','3,5 km','350 km'],2,'100 000 cm to 1 km.','350 000 cm = 3,5 km.'],
      ['Jaki czas w godzinach wynika ze wzoru droga / prędkość?',['4 h','0,25 h','2,5 h','0,5 h'],1,'Podziel 3,5 km przez 14 km/h.','Czas: 3,5 / 14 = 0,25 godziny.'],
      ['Ile minut trwa przejazd?',['15 min','25 min','30 min','45 min'],0,'Ćwierć godziny to 60 / 4 minut.','Odpowiedź: 0,25 × 60 = 15 minut.']
    ]
  },
  'e8-geometry': {
    title:'Rabata w kształcie trapezu', problem:'Rabata ma kształt trapezu o podstawach 10 m i 6 m oraz wysokości 4 m. Na każdy metr kwadratowy potrzeba 3 sadzonek. Ile sadzonek trzeba kupić?',
    steps:[
      ['Który wzór wyznacza pole trapezu?',['(a + b) × h / 2','a × b × h','(a + b) × h','a × h / 2'],0,'Średnią długość podstaw pomnóż przez wysokość.','Pole trapezu: (a + b) × h / 2.'],
      ['Jaka jest suma podstaw?',['4 m','14 m','16 m','60 m'],2,'Dodaj 10 m oraz 6 m.','Suma podstaw: 10 + 6 = 16 m.'],
      ['Ile wynosi pole rabaty?',['64 m²','32 m²','20 m²','8 m²'],1,'Podstaw 16 i 4 do wzoru, a wynik podziel przez 2.','Pole: 16 × 4 / 2 = 32 m².'],
      ['Ile sadzonek potrzeba?',['35','64','96','128'],2,'Na każde z 32 m² przypadają 3 sadzonki.','Odpowiedź: 32 × 3 = 96 sadzonek.']
    ]
  },
  'e8-circle-plus': {
    title:'Przekątna boiska', problem:'Prostokątne boisko ma wymiary 9 m na 12 m. Uczeń idzie po przekątnej zamiast przechodzić wzdłuż dwóch boków. Ile metrów drogi oszczędza?',
    steps:[
      ['Jakim twierdzeniem policzysz przekątną?',['9 + 12 = d','9² + 12² = d²','9 × 12 = d²','12² − 9² = d²'],1,'Boki i przekątna tworzą trójkąt prostokątny.','Z twierdzenia Pitagorasa: d² = 9² + 12².'],
      ['Ile wynosi kwadrat przekątnej?',['21','105','225','441'],2,'9² = 81, a 12² = 144.','d² = 81 + 144 = 225.'],
      ['Jak długa jest przekątna?',['15 m','25 m','112,5 m','225 m'],0,'Szukamy dodatniego pierwiastka z 225.','d = √225 = 15 m.'],
      ['Ile drogi oszczędza uczeń?',['3 m','6 m','15 m','21 m'],1,'Trasa wzdłuż boków ma 9 + 12 = 21 m.','Odpowiedź: 21 − 15 = 6 m krótszej drogi.']
    ]
  },
  'e8-space': {
    title:'Pudełko z piaskiem', problem:'Pudełko ma kształt prostopadłościanu o wymiarach wewnętrznych 20 cm × 15 cm × 10 cm. Chcemy wypełnić piaskiem dokładnie połowę jego objętości. Ile porcji piasku po 50 cm³ trzeba wsypać?',
    steps:[
      ['Który rachunek daje objętość pudełka?',['20 + 15 + 10','20 × 15 × 10','2 × (20 + 15) × 10','20 × 15'],1,'Objętość prostopadłościanu to iloczyn trzech wymiarów.','V = 20 × 15 × 10 = 3000 cm³.'],
      ['Ile wynosi połowa objętości?',['750 cm³','1500 cm³','3000 cm³','6000 cm³'],1,'Podziel 3000 cm³ przez 2.','Połowa objętości: 1500 cm³.'],
      ['Jak obliczysz liczbę porcji?',['1500 × 50','3000 / 50','1500 / 50','50 / 1500'],2,'Podziel potrzebną objętość przez objętość jednej porcji.','Liczba porcji: 1500 / 50.'],
      ['Ile porcji potrzeba?',['15','30','50','60'],1,'1500 podzielone przez 50 daje 30.','Odpowiedź: potrzeba 30 porcji piasku po 50 cm³.']
    ]
  },
  'e8-data': {
    title:'Wyniki treningu', problem:'Pięciu uczniów zdobyło kolejno 6, 8, 8, 10 i 13 punktów. Oblicz medianę oraz średnią liczbę punktów i porównaj te wartości.',
    steps:[
      ['Która wartość jest medianą?',['6','8','9','10'],1,'Dane są uporządkowane; mediana to środkowa, trzecia liczba.','Mediana wynosi 8 punktów.'],
      ['Ile punktów zdobyto łącznie?',['40','45','48','50'],1,'Dodaj 6 + 8 + 8 + 10 + 13.','Suma punktów: 45.'],
      ['Ile wynosi średnia?',['8','9','10','11,25'],1,'Sumę 45 podziel przez liczbę pięciu uczniów.','Średnia wynosi 45 / 5 = 9 punktów.'],
      ['Jak porównać medianę ze średnią?',['Mediana jest o 1 większa','Są równe','Średnia jest o 1 większa','Średnia jest dwa razy większa'],2,'Porównaj 8 z 9.','Odpowiedź: mediana to 8, średnia to 9; średnia jest większa o 1 punkt.']
    ]
  },
  'e8-reasoning': {
    title:'Losowanie kul', problem:'W pudełku jest 5 czerwonych, 3 niebieskie i 2 zielone kule. Losujemy jedną kulę. Oblicz prawdopodobieństwo wylosowania kuli, która nie jest niebieska.',
    steps:[
      ['Ile kul jest w pudełku?',['8','10','15','3'],1,'Dodaj kule wszystkich trzech kolorów.','Razem: 5 + 3 + 2 = 10 kul.'],
      ['Ile kul spełnia warunek „nie jest niebieska”?',['3','5','7','10'],2,'Policz czerwone i zielone razem.','Sprzyjających kul jest 5 + 2 = 7.'],
      ['Jaki ułamek opisuje prawdopodobieństwo?',['3/10','7/10','7/3','10/7'],1,'Liczba sprzyjających wyników jest w liczniku.','P = 7/10.'],
      ['Jaki to procent?',['7%','30%','70%','100%'],2,'7/10 to 70/100.','Odpowiedź: P = 7/10 = 70%.']
    ]
  }
};
