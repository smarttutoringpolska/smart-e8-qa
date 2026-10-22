// Drugie zadanie w każdym kursie. Ten sam model A–D, inna sytuacja i inny schemat.
window.E8_OPEN_WORK_MORE={
  'e8-numbers':{
    title:'Naklejki w paczkach',problem:'Do 86 naklejek przygotowano paczki po 6 naklejek. Ile pełnych paczek można zrobić, ile naklejek zostanie i ilu brakuje do kolejnej pełnej paczki?',
    steps:[
      ['Które działanie rozpoczyna rozwiązanie?',['86 × 6','86 / 6','86 − 6','6 / 86'],1,'Podziel liczbę naklejek przez wielkość jednej paczki.','Dzielimy 86 przez 6.'],
      ['Ile pełnych paczek powstanie?',['13','14','15','16'],1,'6 × 14 = 84, ale 6 × 15 przekracza 86.','Powstaną 14 pełne paczki.'],
      ['Ile naklejek zostanie?',['2','4','6','14'],0,'Odejmij 14 × 6 od 86.','Reszta: 86 − 84 = 2 naklejki.'],
      ['Ilu naklejek brakuje do kolejnej pełnej paczki?',['2','3','4','6'],2,'W kolejnej paczce są już dwie naklejki z reszty.','Odpowiedź: 14 paczek, 2 naklejki zostaną, brakuje jeszcze 4.']
    ]
  },
  'e8-fractions':{
    title:'Woda w zbiorniku',problem:'Zbiornik mieści 24 litry wody i jest napełniony w 3/4. Zużyto 1/3 wody, która była w zbiorniku. Ile litrów wody zostało?',
    steps:[
      ['Jaka część pojemności była napełniona?',['1/3','3/4','1/4','4/3'],1,'Ta informacja jest podana w treści; odnosi się do całej pojemności.','Na początku było 3/4 z 24 litrów.'],
      ['Ile litrów było na początku?',['6 l','8 l','18 l','32 l'],2,'24 / 4 = 6, a 6 × 3 = 18.','Początkowo: 24 × 3/4 = 18 l.'],
      ['Ile litrów zużyto?',['6 l','8 l','12 l','18 l'],0,'Jedna trzecia dotyczy 18 litrów, które rzeczywiście były w zbiorniku.','Zużyto 18 × 1/3 = 6 l.'],
      ['Ile wody zostało?',['6 l','12 l','18 l','24 l'],1,'Odejmij zużytą wodę od początkowej ilości.','Odpowiedź: 18 − 6 = 12 litrów.']
    ]
  },
  'e8-percent-plus':{
    title:'Podwyżka i promocja',problem:'Kurtka kosztowała 200 zł. Najpierw podwyższono jej cenę o 20%, a tydzień później obniżono nową cenę o 20%. Ile kosztuje kurtka teraz i o ile różni się to od ceny początkowej?',
    steps:[
      ['Ile wynosi podwyżka 20% od 200 zł?',['20 zł','40 zł','80 zł','200 zł'],1,'20% to jedna piąta ceny początkowej.','Podwyżka: 20% × 200 = 40 zł.'],
      ['Jaka jest cena po podwyżce?',['160 zł','200 zł','220 zł','240 zł'],3,'Dodaj 40 zł do ceny początkowej.','Po podwyżce: 200 + 40 = 240 zł.'],
      ['Ile wynosi późniejsza obniżka?',['40 zł','48 zł','20 zł','60 zł'],1,'Nowe 20% licz od 240 zł, nie od 200 zł.','Obniżka: 20% × 240 = 48 zł.'],
      ['Jaka jest ostateczna cena?',['192 zł, o 8 zł mniej','200 zł, tyle samo','192 zł, o 8 zł więcej','240 zł, o 40 zł więcej'],0,'Odejmij 48 zł od 240 zł i porównaj z 200 zł.','Odpowiedź: 240 − 48 = 192 zł, czyli o 8 zł mniej niż na początku.']
    ]
  },
  'e8-powers-plus':{
    title:'Kwadrat z potęgą',problem:'Bok kwadratowej planszy ma długość 3² cm. Oblicz pole planszy i długość jej obwodu.',
    steps:[
      ['Ile centymetrów ma bok?',['6 cm','9 cm','12 cm','27 cm'],1,'3² = 3 × 3.','Bok: 3² = 9 cm.'],
      ['Który zapis opisuje pole?',['(3²)² = 3⁴','3² + 3² = 3⁴','4 × 3² = 3⁴','3² × 2 = 3⁴'],0,'Pole kwadratu to bok pomnożony przez siebie.','Pole: (3²)² = 3⁴ cm².'],
      ['Ile wynosi pole?',['18 cm²','36 cm²','81 cm²','729 cm²'],2,'3⁴ = 3 × 3 × 3 × 3.','Pole wynosi 81 cm².'],
      ['Ile wynosi obwód?',['18 cm','27 cm','36 cm','81 cm'],2,'Kwadrat ma cztery boki po 9 cm.','Odpowiedź: pole 81 cm², obwód 4 × 9 = 36 cm.']
    ]
  },
  'e8-algebra':{
    title:'Prostokąt z niewiadomą',problem:'Jeden bok prostokąta ma długość x cm, a drugi jest o 3 cm dłuższy. Obwód wynosi 34 cm. Oblicz pole prostokąta.',
    steps:[
      ['Jak zapisać dłuższy bok?',['3x','x − 3','x + 3','x / 3'],2,'O 3 cm dłuższy oznacza dodać 3.','Boki mają długości x oraz x + 3.'],
      ['Jakie równanie wynika z obwodu?',['x + (x + 3) = 34','2x + 2(x + 3) = 34','x(x + 3) = 34','4x + 3 = 34'],1,'Obwód to suma długości wszystkich czterech boków.','2x + 2(x + 3) = 34.'],
      ['Ile wynosi x?',['5','7','10','17'],1,'Po uproszczeniu 4x + 6 = 34.','4x = 28, więc x = 7 cm.'],
      ['Jakie jest pole prostokąta?',['34 cm²','49 cm²','70 cm²','140 cm²'],2,'Drugi bok ma 10 cm; pomnóż długości boków.','Odpowiedź: 7 × (7 + 3) = 70 cm².']
    ]
  },
  'e8-equations-plus':{
    title:'Przejazd taksówką',problem:'Opłata początkowa za taksówkę wynosi 8 zł, a każdy kilometr kosztuje 3 zł. Pasażer zapłacił 35 zł. Ile kilometrów przejechał? Ile zapłaciłby za trasę dwukrotnie dłuższą?',
    steps:[
      ['Które równanie opisuje rachunek za x kilometrów?',['8x + 3 = 35','8 + 3x = 35','3(x + 8) = 35','8 + x = 35'],1,'Opłatę początkową płaci się raz, a 3 zł za każdy kilometr.','8 + 3x = 35.'],
      ['Ile wynosi 3x po odjęciu opłaty początkowej?',['8','27','35','43'],1,'Od 35 zł odejmij 8 zł.','3x = 35 − 8 = 27.'],
      ['Jaką odległość przejechał pasażer?',['3 km','8 km','9 km','27 km'],2,'Podziel 27 przez cenę jednego kilometra.','x = 27 / 3 = 9 km.'],
      ['Ile kosztowałaby trasa dwukrotnie dłuższa?',['54 zł','62 zł','70 zł','78 zł'],1,'Za 18 km wciąż płaci się tylko jedną opłatę początkową.','Odpowiedź: 9 km; za 18 km byłoby 8 + 3 × 18 = 62 zł.']
    ]
  },
  'e8-proportion':{
    title:'Przepis na naleśniki',problem:'Do przygotowania 4 porcji naleśników potrzeba 300 g mąki. Ile mąki potrzeba na 10 takich samych porcji? O ile więcej niż na 4 porcje?',
    steps:[
      ['Ile mąki przypada na jedną porcję?',['30 g','75 g','120 g','300 g'],1,'Podziel 300 g przez 4 porcje.','Jedna porcja wymaga 300 / 4 = 75 g mąki.'],
      ['Ile razy więcej porcji przygotowujemy?',['2','2,5','4','6'],1,'Porównaj 10 porcji z początkowymi czterema.','Współczynnik: 10 / 4 = 2,5.'],
      ['Ile mąki potrzeba na 10 porcji?',['450 g','600 g','750 g','1200 g'],2,'Pomnóż 75 g przez 10.','Na 10 porcji potrzeba 750 g.'],
      ['O ile więcej mąki to jest?',['300 g','450 g','750 g','1050 g'],1,'Porównaj nową ilość z 300 g z przepisu.','Odpowiedź: 750 g, czyli o 750 − 300 = 450 g więcej.']
    ]
  },
  'e8-geometry':{
    title:'Trójkątny żagiel',problem:'Żagiel ma kształt trójkąta o podstawie 12 m i wysokości 7 m. Tkanina kosztuje 5 zł za 1 m². Ile kosztuje materiał na taki żagiel, jeśli pomijamy odpady?',
    steps:[
      ['Który wzór wyznacza pole trójkąta?',['a × h','a × h / 2','a + h / 2','2 × (a + h)'],1,'Trójkąt zajmuje połowę prostokąta o tej samej podstawie i wysokości.','Pole: a × h / 2.'],
      ['Jaki rachunek podstawisz do wzoru?',['12 × 7 / 2','12 + 7 / 2','12 × 7','12 / 7 × 2'],0,'Wstaw podstawę 12 m i wysokość 7 m.','Pole: 12 × 7 / 2.'],
      ['Ile wynosi pole żagla?',['19 m²','42 m²','84 m²','96 m²'],1,'12 × 7 = 84, a połowa 84 to 42.','Pole żagla wynosi 42 m².'],
      ['Ile kosztuje tkanina?',['47 zł','84 zł','210 zł','420 zł'],2,'Pomnóż pole przez cenę jednego metra kwadratowego.','Odpowiedź: 42 × 5 = 210 zł.']
    ]
  },
  'e8-circle-plus':{
    title:'Skrót na planie',problem:'Na planie punkty A(−2, 1), B(4, 1) i C(4, 9) tworzą trójkąt prostokątny. O ile krótsza jest droga wprost z A do C niż droga przez B? Jedna jednostka to 1 km.',
    steps:[
      ['Ile kilometrów ma odcinek AB?',['2 km','4 km','6 km','8 km'],2,'Współrzędne y są równe; porównaj współrzędne x.','AB = 4 − (−2) = 6 km.'],
      ['Ile kilometrów ma odcinek BC?',['6 km','8 km','9 km','10 km'],1,'Współrzędne x są równe; porównaj współrzędne y.','BC = 9 − 1 = 8 km.'],
      ['Ile ma przekątna AC?',['10 km','12 km','14 km','100 km'],0,'Użyj Pitagorasa dla przyprostokątnych 6 i 8.','AC = √(6² + 8²) = √100 = 10 km.'],
      ['O ile droga wprost jest krótsza?',['2 km','4 km','6 km','14 km'],1,'Trasa przez B ma 6 + 8 = 14 km.','Odpowiedź: 14 − 10 = 4 km krótsza.']
    ]
  },
  'e8-space':{
    title:'Akwarium i litry',problem:'Akwarium ma wymiary wewnętrzne 40 cm × 25 cm × 30 cm. Jest wypełnione wodą w 3/5 objętości. Ile litrów wody trzeba dolać do pełna? Przyjmij 1 litr = 1000 cm³.',
    steps:[
      ['Jak obliczysz objętość akwarium?',['40 + 25 + 30','40 × 25 × 30','2 × (40 + 25) × 30','40 × 25'],1,'Pomnóż trzy wymiary prostopadłościanu.','Objętość: 40 × 25 × 30 = 30 000 cm³.'],
      ['Ile litrów mieści akwarium?',['3 l','30 l','300 l','3000 l'],1,'Podziel centymetry sześcienne przez 1000.','30 000 cm³ = 30 l.'],
      ['Ile litrów wody jest teraz?',['12 l','15 l','18 l','24 l'],2,'Oblicz 3/5 z 30 litrów.','Wody jest 30 × 3/5 = 18 l.'],
      ['Ile litrów trzeba dolać?',['6 l','12 l','18 l','30 l'],1,'Odejmij obecną ilość od pełnej pojemności.','Odpowiedź: 30 − 18 = 12 litrów.']
    ]
  },
  'e8-data':{
    title:'Wypożyczenia książek',problem:'W bibliotece wypożyczono 12 książek w poniedziałek, 18 we wtorek i 24 w środę. Oblicz średnią dzienną i sprawdź, o ile środowy wynik ją przekracza.',
    steps:[
      ['Przez ile dni zbierano dane?',['2','3','12','54'],1,'W treści wymieniono poniedziałek, wtorek i środę.','Dane obejmują 3 dni.'],
      ['Ile książek wypożyczono łącznie?',['42','48','54','60'],2,'Dodaj wyniki ze wszystkich dni.','Suma: 12 + 18 + 24 = 54 książki.'],
      ['Ile wynosi średnia dzienna?',['12','18','24','54'],1,'Podziel sumę przez liczbę dni.','Średnia: 54 / 3 = 18 książek.'],
      ['O ile środa przekracza średnią?',['3','6','12','18'],1,'Od środowych 24 odejmij średnią 18.','Odpowiedź: średnia 18, w środę wypożyczono o 6 książek więcej.']
    ]
  },
  'e8-reasoning':{
    title:'Dwie monety',problem:'Rzucamy dwoma jednakowymi, uczciwymi monetami. Oblicz prawdopodobieństwo, że dokładnie jedna moneta pokaże orła. Rozróżniamy kolejność wyników obu monet.',
    steps:[
      ['Ile równoprawdopodobnych wyników ma doświadczenie?',['2','3','4','8'],2,'Każda z dwóch monet ma dwa możliwe wyniki.','Wyniki: OO, OR, RO, RR — razem 4.'],
      ['Które wyniki spełniają warunek?',['Tylko OO','OR i RO','OO i RR','Tylko RR'],1,'Jedna moneta pokazuje orła, druga reszkę; kolejność może być różna.','Sprzyjają OR i RO — 2 wyniki.'],
      ['Jaki ułamek opisuje prawdopodobieństwo?',['1/4','2/4','3/4','4/2'],1,'Podziel liczbę dwóch wyników sprzyjających przez cztery możliwe.','P = 2/4 = 1/2.'],
      ['Jaki to procent?',['25%','40%','50%','75%'],2,'Połowa wszystkich wyników to 50%.','Odpowiedź: P = 1/2 = 50%.']
    ]
  }
};
