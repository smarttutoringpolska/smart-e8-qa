/* Each entry is tied to an exact live question, not guessed from its topic. */
(() => {
  window.E8SolutionExamples = {
    '15% z 240 wynosi…': {
      topic:'Procenty', visual:{type:'percent',max:100,frames:[[100,'Całość: 240'],[15,'Wybieramy 15% całości'],[15,'15% całości to 36']]},
      stages:[['15% = 15/100','Procent oznacza część ze stu.'],['240 · 15/100 = 36','Pomnóż całość przez ułamek odpowiadający procentowi.'],['36','To wartość 15% liczby 240.']]
    },
    'Liczba 18 stanowi jaki procent 60?': {
      topic:'Procenty',visual:{type:'percent',max:100,frames:[[100,'Całość: 60'],[30,'Część: 18 z 60'],[30,'18 z 60 to 30%']]},
      stages:[['18/60 = 3/10','Podziel część przez całość i skróć ułamek.'],['3/10 · 100% = 30%','Zamień otrzymany ułamek na procent.'],['30%','Liczba 60 jest tutaj podstawą, czyli 100%.']]
    },
    'Cena 160 zł po podwyżce o 15% wynosi…': {
      topic:'Procenty',visual:{type:'percent',max:115,frames:[[100,'Cena początkowa: 160 zł'],[115,'Po podwyżce płacimy 115% starej ceny'],[115,'Nowa cena: 184 zł']]},
      stages:[['100% + 15% = 115%','Do całej ceny dodaj 15% jej wartości.'],['160 · 1,15 = 184','115% zapisujemy jako mnożnik 1,15.'],['184 zł','Podwyżka wyniosła 24 zł. Sprawdzenie: 160 + 24 = 184.']]
    },
    'Po obniżce o 25% cena wynosi 90 zł. Cena początkowa to…': {
      topic:'Procenty',visual:{type:'percent',max:100,frames:[[75,'Po rabacie zostaje 75% ceny'],[75,'75% ceny to 90 zł'],[100,'100% ceny to 120 zł']]},
      stages:[['100% − 25% = 75%','Po rabacie płacimy 75% ceny początkowej.'],['90 : 0,75 = 120','Odtwórz całość: podziel znaną cenę przez 0,75.'],['120 zł','Sprawdzenie: 120 · 0,75 = 90 zł.']]
    },
    'Dwie kolejne obniżki o 10% ceny 200 zł dają…': {
      topic:'Procenty',visual:{type:'percent',max:100,frames:[[100,'Cena początkowa: 200 zł'],[90,'Po pierwszym rabacie: 180 zł'],[81,'Po drugim rabacie: 162 zł'],[81,'Zostało 81% ceny początkowej']]},
      stages:[['200 zł','Każda obniżka o 10% oznacza mnożenie przez 0,9.'],['200 · 0,9 = 180','Pierwszy rabat licz od 200 zł.'],['180 · 0,9 = 162','Drugi rabat licz od nowej ceny: 180 zł.'],['162 zł','Łączny rabat to 19%, ponieważ 0,9 · 0,9 = 0,81.']]
    },
    'Uprość 2³·2⁵.': {
      topic:'Potęgi',visual:{type:'factors',values:['2','2','2','2','2','2','2','2'],group:3},
      stages:[['2³ · 2⁵','Obie potęgi mają tę samą podstawę: 2.'],['2^(3+5)','Przy mnożeniu dodaj wykładniki.'],['2⁸','Trzy czynniki i pięć czynników dają razem osiem.']]
    },
    'Uprość 7⁹:7⁴.': {
      topic:'Potęgi',visual:{type:'factors',values:Array(9).fill('7'),denominator:Array(4).fill('7'),cancel:4},
      stages:[['7⁹ : 7⁴','W liczniku jest dziewięć czynników 7, a w mianowniku cztery.'],['7^(9−4)','Skróć cztery pary jednakowych czynników.'],['7⁵','W liczniku pozostało pięć czynników 7.']]
    },
    'Uprość (3²)⁴.': {
      topic:'Potęgi',visual:{type:'factors',values:Array(8).fill('3'),group:2,repeatGroup:true},
      stages:[['(3²)⁴','Czwarta potęga oznacza cztery grupy po dwa czynniki 3.'],['3^(2·4)','Przy potęgowaniu potęgi pomnóż wykładniki.'],['3⁸','Cztery grupy po dwa czynniki to osiem czynników.']]
    },
    'Ile wynosi (−2)⁴?': {
      topic:'Potęgi',visual:{type:'factors',values:Array(4).fill('−2'),group:2,repeatGroup:true},
      stages:[['(−2)⁴','Nawias mówi, że podstawą jest cała liczba −2.'],['(−2 · −2) · (−2 · −2)','Połącz czynniki w pary. Każda para ma dodatni iloczyn.'],['4 · 4','Iloczyn dwóch liczb ujemnych wynosi tutaj 4.'],['16','Parzysta potęga liczby ujemnej jest dodatnia.']]
    },
    'Ile wynosi −2⁴?': {
      topic:'Potęgi',visual:{type:'factors',values:Array(4).fill('2'),negativeOutside:true},
      stages:[['−2⁴','Brak nawiasu oznacza, że potęgujemy 2, a minus zostaje przed wynikiem.'],['−(2 · 2 · 2 · 2)','Najpierw oblicz potęgę.'],['−16','Dopiero po potęgowaniu uwzględnij znak minus.']]
    },
    'Przyprostokątne mają 6 i 8. Przeciwprostokątna ma…': {
      topic:'Pitagoras',visual:{type:'rightTriangle',a:6,b:8,c:10,unknown:'c',revealAt:3},
      stages:[['c² = 6² + 8²','Przeciwprostokątna leży naprzeciw kąta prostego.'],['c² = 36 + 64','Podnieś długości przyprostokątnych do kwadratu.'],['c² = 100','Dodaj pola odpowiadających im kwadratów.'],['c = √100 = 10','Długość jest dodatnia, więc wybierz dodatni pierwiastek.']]
    },
    'Przeciwprostokątna ma 15, a bok 9. Drugi bok ma…': {
      topic:'Pitagoras',visual:{type:'rightTriangle',a:9,b:12,c:15,unknown:'b',revealAt:3},
      stages:[['9² + b² = 15²','Nieznana jest przyprostokątna. Przeciwprostokątna ma 15.'],['b² = 225 − 81','Odejmij kwadrat znanej przyprostokątnej od kwadratu przeciwprostokątnej.'],['b² = 144','Wykonaj odejmowanie.'],['b = √144 = 12','Wyciągnij dodatni pierwiastek.']]
    },
    'Przekątna prostokąta 5×12 ma…': {
      topic:'Pitagoras',visual:{type:'rightTriangle',a:12,b:5,c:13,unknown:'c',hypotenuseLabel:'d',rectangle:true,revealAt:3},
      stages:[['d² = 5² + 12²','Przekątna dzieli prostokąt na dwa trójkąty prostokątne.'],['d² = 25 + 144','Podnieś długości boków do kwadratu.'],['d² = 169','Dodaj otrzymane liczby.'],['d = √169 = 13','Przekątna ma długość 13.']]
    },
    'Przekątna kwadratu o boku 7 ma…': {
      topic:'Pitagoras',visual:{type:'rightTriangle',a:7,b:7,c:'7√2',unknown:'c',hypotenuseLabel:'d',rectangle:true,revealAt:3},
      stages:[['d² = 7² + 7²','Obie przyprostokątne mają długość 7.'],['d² = 49 + 49','Oblicz kwadraty długości boków.'],['d² = 98','Dodaj oba kwadraty.'],['d = √98 = 7√2','Wyłącz 49 spod pierwiastka: √(49 · 2) = 7√2.']]
    },
    'Drabina długości 5 m stoi 3 m od ściany. Sięga na wysokość…': {
      topic:'Pitagoras',visual:{type:'rightTriangle',a:3,b:4,c:5,unknown:'b',verticalLabel:'h',unit:' m',revealAt:3},
      stages:[['3² + h² = 5²','Drabina jest przeciwprostokątną, a ściana i podłoże tworzą kąt prosty.'],['h² = 25 − 9','Odejmij kwadrat odległości od ściany.'],['h² = 16','Oblicz różnicę.'],['h = √16 = 4 m','Drabina sięga na wysokość 4 m.']]
    },
    '3 zeszyty kosztują 12 zł. Ile kosztuje 5 zeszytów?': {
      topic:'Proporcje',visual:{type:'ratio',headings:['Zeszyty','Cena'],rows:[['3','12 zł',0],['1','4 zł',0],['5','20 zł',1]]},
      stages:[['12 : 3 = 4 zł','Najpierw oblicz cenę jednego zeszytu.'],['5 · 4 = 20 zł','Pięć zeszytów kosztuje pięć razy tyle co jeden.'],['20 zł','Sprawdzenie: trzy zeszyty po 4 zł kosztują 12 zł.']]
    },
    'Rozwiąż proporcję x/6 = 4/3.': {
      topic:'Proporcje',visual:{type:'ratio',headings:['Licznik','Mianownik'],rows:[['x = 8','6',3],['4','3',0]],unknownColumn:0},
      stages:[['x/6 = 4/3','W proporcji obie strony opisują tę samą wartość.'],['3x = 6 · 4','Pomnóż obie strony przez 18, czyli wspólny mianownik.'],['3x = 24','Oblicz iloczyn po prawej stronie.'],['x = 8','Podziel obie strony przez 3. Sprawdzenie: 8/6 = 4/3.']]
    },
    'Mapa ma skalę 1:50 000. Odcinek 3 cm oznacza…': {
      topic:'Proporcje',visual:{type:'ratio',headings:['Na mapie','W terenie'],rows:[['1 cm','50 000 cm',0],['3 cm','150 000 cm',1],['3 cm','1,5 km',2]]},
      stages:[['1 · 50000 = 50000 cm','Jeden centymetr na mapie oznacza 50 000 cm w terenie.'],['3 · 50000 = 150000 cm','Pomnóż długość na mapie przez mianownik skali.'],['150000 : 100000 = 1,5','Jeden kilometr ma 100 000 cm. Podziel długość w centymetrach przez 100 000.'],['1,5 km','Odcinek na mapie ma w rzeczywistości długość 1,5 km.']]
    },
    'Przepis na 4 osoby wymaga 300 g mąki. Dla 6 osób potrzeba…': {
      topic:'Proporcje',visual:{type:'ratio',headings:['Osoby','Mąka'],rows:[['4','300 g',0],['1','75 g',0],['6','450 g',1]]},
      stages:[['300 : 4 = 75 g','Oblicz ilość mąki na jedną osobę.'],['6 · 75 = 450 g','Pomnóż tę ilość przez liczbę osób.'],['450 g','Sześć osób to 1,5 raza więcej niż cztery. Sprawdzenie: 300 · 1,5 = 450.']]
    },
    'Kwotę 240 zł podzielono w stosunku 1 : 3. Większa część wynosi…': {
      topic:'Proporcje',visual:{type:'partition',count:4,selected:3,value:'60 zł',revealAt:1,caption:'Jedna część dla pierwszej osoby, trzy części dla drugiej.'},
      stages:[['1 + 3 = 4','Całość składa się z czterech równych części.'],['240 : 4 = 60 zł','Oblicz wartość jednej części.'],['3 · 60 = 180 zł','Większy udział obejmuje trzy części.'],['180 zł','Sprawdzenie: 60 + 180 = 240 zł.']]
    },
    'Suma liczby i liczby o 8 większej wynosi 34. Mniejsza liczba to…': {
      topic:'Zadania tekstowe',visual:{type:'story',total:'Razem: 34',pieces:[['x',1],['x',1],['8',.62]],result:'x = 13',revealAt:3},
      stages:[['x + (x + 8) = 34','Oznacz mniejszą liczbę przez x. Większa jest równa x + 8.'],['2x + 8 = 34','Zbierz dwa wyrazy x.'],['2x = 26','Odejmij 8 po obu stronach.'],['x = 13','Podziel przez 2. Sprawdzenie: 13 + 21 = 34.']]
    },
    'Trzy kolejne liczby mają sumę 72. Środkowa to…': {
      topic:'Zadania tekstowe',visual:{type:'story',total:'Razem: 72',pieces:[['x − 1',1],['x',1],['x + 1',1]],result:'23, 24, 25',revealAt:2},
      stages:[['(x − 1) + x + (x + 1) = 72','Oznacz środkową liczbę przez x. Sąsiednie różnią się od niej o 1.'],['3x = 72','Wyrazy −1 i +1 się znoszą.'],['x = 24','Podziel sumę przez 3.'],['23 + 24 + 25 = 72','Sprawdzenie potwierdza, że środkowa liczba to 24.']]
    },
    'Mama ma 4 razy tyle lat co córka. Razem mają 50 lat. Córka ma…': {
      topic:'Zadania tekstowe',visual:{type:'story',total:'Razem: 50 lat',pieces:[['córka: x',1],['mama: 4x',4]],result:'Córka: 10 lat · mama: 40 lat',revealAt:2},
      stages:[['x + 4x = 50','Wiek córki oznacz przez x. Wiek mamy to 4x.'],['5x = 50','Razem mamy pięć jednakowych części.'],['x = 10','Podziel 50 przez 5.'],['10 + 40 = 50','Sprawdź sumę wieku i zależność: 40 = 4 · 10.']]
    },
    'Za 3 jednakowe zeszyty i długopis za 6 zł zapłacono 30 zł. Zeszyt kosztuje…': {
      topic:'Zadania tekstowe',visual:{type:'story',total:'Razem: 30 zł',pieces:[['x',1],['x',1],['x',1],['6 zł',.75]],result:'Zeszyt: 8 zł',revealAt:2},
      stages:[['3x + 6 = 30','Cena zeszytu to x. Trzy zeszyty kosztują 3x.'],['3x = 24','Odejmij cenę długopisu: 6 zł.'],['x = 8 zł','Podziel pozostałą kwotę przez trzy zeszyty.'],['3 · 8 + 6 = 30','Sprawdź, czy cały zakup kosztuje 30 zł.']]
    },
    'Po wydaniu 1/3 oszczędności zostało 80 zł. Początkowo było…': {
      topic:'Zadania tekstowe',visual:{type:'partition',count:3,selected:2,value:'40 zł',revealAt:2,caption:'Wydano 1/3 oszczędności. Dwie pozostałe części są warte 80 zł.'},
      stages:[['2/3 · x = 80','Jeśli wydano jedną trzecią, zostały dwie trzecie oszczędności.'],['2x = 240','Pomnóż obie strony przez 3.'],['x = 120 zł','Podziel obie strony przez 2.'],['120 − 40 = 80','Jedna trzecia ze 120 to 40. Po jej wydaniu zostaje 80 zł.']]
    }
  };
})();
