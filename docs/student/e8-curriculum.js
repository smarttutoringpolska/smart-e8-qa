(function(){
  const smart=window.SMART_E8;
  if(!smart||!smart.specs)return;

  const originalSpecs=smart.specs;
  const paths=new Map();
  Object.values(originalSpecs).forEach(spec=>(spec.paths||[]).forEach(path=>paths.set(path.id,path)));
  const get=id=>{
    const path=paths.get(id);
    if(!path)throw new Error(`Brak ścieżki programu: ${id}`);
    return path;
  };
  const slice=(id,newId,n,title,desc,indexes)=>{
    const source=get(id);
    return {
      ...source,
      id:newId,
      n,
      title,
      desc,
      rows:indexes.map(index=>source.rows[index]).filter(Boolean)
    };
  };

  const flatReasoning=slice(
    'e8-geometry-reasoning','e8-flat-reasoning','02','Własności figur w zadaniach',
    'Kąty, pola, obwody i skala figur w krótkich zadaniach problemowych.',[0,2,3,4,6,9]
  );
  const circleReasoning=slice(
    'e8-geometry-reasoning','e8-circle-reasoning','05','Pitagoras i koło — wnioski',
    'Dobieraj własność do rysunku i uzasadniaj kolejne kroki.',[1,5,7,8]
  );
  const solidReasoning=slice(
    'e8-solid-problems','e8-solid-reasoning','02','Bryły w zadaniach',
    'Łącz siatki, pola, objętości i jednostki w zadaniach wieloetapowych.',[0,1,2,3,4,8,9]
  );
  const coordinateReasoning=slice(
    'e8-solid-problems','e8-coordinate-reasoning','06','Współrzędne — zastosowania',
    'Odczytuj położenie punktów i wykorzystuj współrzędne w geometrii.',[5,6,7]
  );
  coordinateReasoning.rows[1]=[
    'Punkt A=(−3,2), a odcinek AB jest poziomy i ma długość 7. Które współrzędne może mieć punkt B?',
    ['B=(−3,9)','B=(4,2)','B=(4,9)','B=(2,7)'],1,
    'Na odcinku poziomym współrzędna y pozostaje taka sama.',
    'Punkt B ma współrzędną y=2. Różnica współrzędnych x wynosi 7, a 4−(−3)=7, więc B=(4,2).'
  ];
  const coordinateBasics={
    ...get('e8-coordinate'),
    title:'Układ współrzędnych',
    desc:'Odczytuj punkty, długości, przesunięcia i figury w układzie współrzędnych.',
    concept:{label:'WSPÓŁRZĘDNE',formula:'A=(x,y)',items:['najpierw poziomo','potem pionowo','porównuj odpowiednie współrzędne']},
    rows:get('e8-coordinate').rows.map(row=>[...row])
  };
  coordinateBasics.rows[2]=[
    'Punkt A=(−3,2) przesunięto o 5 jednostek w prawo. Jakie współrzędne ma nowy punkt?',
    ['(−8,2)','(2,2)','(−3,7)','(5,2)'],1,
    'Ruch w prawo zmienia tylko współrzędną x.',
    'Do współrzędnej x dodajemy 5: −3+5=2. Współrzędna y nie zmienia się, więc nowy punkt to (2,2).'
  ];
  coordinateBasics.rows[3]=[
    'Punkty A=(4,−1) i B=(4,6) są końcami odcinka pionowego. Jaka jest jego długość?',
    ['5','7','10','24'],1,
    'Dla odcinka pionowego odejmij współrzędne y.',
    'Współrzędne x są równe, więc długość odcinka wynosi 6−(−1)=7.'
  ];
  coordinateBasics.rows[9]=[
    'A=(1,2), B=(5,2) i C=(5,6) są trzema kolejnymi wierzchołkami prostokąta. Czwarty wierzchołek ma współrzędne…',
    ['(1,6)','(6,1)','(2,5)','(5,1)'],0,
    'Porównaj pionowe i poziome boki prostokąta.',
    'Czwarty wierzchołek ma tę samą współrzędną x co A i tę samą współrzędną y co C, czyli D=(1,6).'
  ];
  const statisticsReasoning=slice(
    'e8-data-reasoning','e8-statistics-reasoning','02','Wnioski z danych',
    'Porównuj średnią, medianę i rozstęp oraz uzasadniaj wnioski z tabel i wykresów.',[0,1,5,7,9]
  );
  const probabilityReasoning=slice(
    'e8-data-reasoning','e8-probability-reasoning','02','Zliczanie i zdarzenia losowe',
    'Porządkuj możliwości, rozpoznawaj zdarzenia i obliczaj prawdopodobieństwo.',[2,3,4,6,8]
  );
  const solutionStrategy={
    ...get('xreason-plan'),
    title:'Plan i kontrola rozwiązania',
    desc:'Rozpoznawaj dane, szukaną wielkość, właściwą zależność i sposób sprawdzenia wyniku.'
  };

  const courses=[
    {
      id:'e8-numbers',roman:'I',n:'01',group:'numbers',title:'Liczby i sprawność rachunkowa',accent:'blue',
      desc:'Systemy zapisu, liczby całkowite, podzielność, kolejność działań i kontrola wyniku.',
      lead:'Zacznij od poprawnego zapisu działania, pilnuj znaków, a wynik sprawdź szacowaniem.',
      items:['Liczby naturalne i całkowite','Kolejność działań','Podzielność, NWD i NWW','Zapis rzymski','Szacowanie i kontrola wyniku'],
      formulas:['( ) → · i : → + i −','a = b·q + r','NWD i NWW','|a| = odległość od 0'],
      theory:[
        ['Kolejność działań','Najpierw wykonuj działania w nawiasach, następnie mnożenie i dzielenie, a na końcu dodawanie i odejmowanie. Działania tego samego rzędu licz od lewej.'],
        ['Liczby i znaki','Na osi liczbowej większa liczba leży bardziej na prawo. Przy mnożeniu lub dzieleniu jednakowe znaki dają plus, a różne — minus.'],
        ['Podzielność','Rozkład na czynniki pierwsze pomaga znaleźć NWD i NWW oraz sprawdzić podzielność.'],
        ['Kontrola wyniku','Oszacuj rząd wielkości, sprawdź znak i wróć do warunków zadania. To szybki sposób na wykrycie pomyłki.']
      ],
      paths:[get('e8-calc'),get('e8-number-reasoning')]
    },
    {
      id:'e8-fractions',roman:'II',n:'02',group:'numbers',title:'Ułamki i różne postacie liczby',accent:'green',
      desc:'Ułamki zwykłe i dziesiętne, liczby mieszane oraz procent jako inny zapis tej samej części.',
      lead:'Najpierw rozpoznaj, która postać liczby ułatwi rachunek, a potem wykonaj zamianę.',
      items:['Ułamki zwykłe','Liczby mieszane','Ułamki dziesiętne','Zamiana postaci liczby','Procent jako część całości'],
      formulas:['a/b + c/d = (ad+bc)/bd','a/b : c/d = a/b · d/c','a/b = a : b','p% = p/100'],
      theory:[
        ['Wspólny mianownik','Przed dodawaniem lub odejmowaniem sprowadź ułamki do wspólnego mianownika.'],
        ['Mnożenie i dzielenie','Przed mnożeniem warto skracać. Przy dzieleniu pomnóż przez odwrotność drugiego ułamka.'],
        ['Trzy zapisy tej samej liczby','Ułamek zwykły, zapis dziesiętny i procent mogą opisywać tę samą część, np. 1/4 = 0,25 = 25%.'],
        ['Całość i część','Zawsze nazwij całość. Dopiero wtedy licznik, mianownik lub procent mają jednoznaczne znaczenie.']
      ],
      paths:[get('e8-fraction-calc'),get('e8-percent'),get('xpct-basics')]
    },
    {
      id:'e8-percent-plus',roman:'III',n:'03',group:'numbers',title:'Procenty w zadaniach',accent:'coral',
      desc:'Podwyżki, obniżki, zmiany procentowe, punkty procentowe i obliczenia finansowe.',
      lead:'Ustal wartość początkową i zamień zmianę procentową na właściwy mnożnik.',
      items:['Procent liczby','Obliczanie całości','Podwyżki i obniżki','Punkty procentowe','Promocje i finanse'],
      formulas:['p% z a = p/100 · a','nowa = stara · (1 ± p/100)','zmiana = różnica/początek · 100%','wynik = przychód − koszt'],
      theory:originalSpecs['e8-percent-plus'].theory,
      paths:[get('e8-percent-problems'),get('xpct-changes'),get('xpct-money')]
    },
    {
      id:'e8-powers-plus',roman:'IV',n:'04',group:'numbers',title:'Potęgi, pierwiastki i notacja',accent:'violet',
      desc:'Prawa działań na potęgach, pierwiastki, szacowanie i notacja wykładnicza.',
      lead:'Najpierw sprawdź podstawę i wykładnik, a dopiero potem wybierz właściwe prawo działania.',
      items:['Znaczenie potęgi','Prawa działań na potęgach','Pierwiastki','Szacowanie pierwiastków','Notacja wykładnicza'],
      formulas:originalSpecs['e8-powers-plus'].formulas,
      theory:originalSpecs['e8-powers-plus'].theory,
      paths:[get('e8-powers'),get('xpow-laws'),get('xpow-roots'),get('xpow-science')]
    },
    {
      id:'e8-algebra',roman:'V',n:'05',group:'algebra',title:'Wyrażenia algebraiczne i dowodzenie',accent:'purple',
      desc:'Wyrażenia, nawiasy i wyrazy podobne jako narzędzia do zapisu zależności i krótkich uzasadnień.',
      lead:'Traktuj literę jak liczbę: porządkuj zapis, zachowuj znaki i uzasadniaj każdy wniosek.',
      items:['Wartość wyrażenia','Wyrazy podobne','Nawiasy i rozdzielność','Zapis własności liczb','Uzasadnienie i kontrprzykład'],
      formulas:['ax + bx = (a+b)x','a(b+c)=ab+ac','n=2k lub n=2k+1','założenie → własność → wniosek'],
      theory:[
        ['Wyrazy podobne','Dodawaj współczynniki tylko przy wyrażeniach z identyczną częścią literową.'],
        ['Nawiasy','Każdy składnik w nawiasie pomnóż przez czynnik stojący przed nawiasem i pilnuj minusa.'],
        ['Zapis ogólny','Litera pozwala opisać wszystkie liczby spełniające warunek, np. 2k oznacza dowolną liczbę parzystą.'],
        ['Dowodzenie','Kilka przykładów nie dowodzi reguły. Uzasadnienie musi obejmować każdy dopuszczalny przypadek, a jeden kontrprzykład wystarcza do obalenia zdania.']
      ],
      paths:[get('e8-expressions'),get('xreason-proof')]
    },
    {
      id:'e8-equations-plus',roman:'VI',n:'06',group:'algebra',title:'Równania i modelowanie',accent:'indigo',
      desc:'Równania liniowe, zadania tekstowe i pełny tok rozwiązania z kontrolą odpowiedzi.',
      lead:'Nazwij niewiadomą, przełóż warunki na równanie, rozwiąż je i sprawdź sens wyniku.',
      items:['Równania liniowe','Równania z nawiasami','Modelowanie treści','Geometria i ruch','Pełna odpowiedź'],
      formulas:originalSpecs['e8-equations-plus'].formulas,
      theory:originalSpecs['e8-equations-plus'].theory,
      paths:[solutionStrategy,get('e8-equations'),get('e8-algebra-models'),get('xeq-transform'),get('xeq-stories'),get('xeq-geometry'),get('xreason-open')]
    },
    {
      id:'e8-proportion',roman:'VII',n:'07',group:'algebra',title:'Proporcje, skala i ruch',accent:'orange',
      desc:'Proporcjonalność, skala, cena jednostkowa oraz zależność droga–prędkość–czas.',
      lead:'Ustaw odpowiadające sobie wielkości w tej samej kolejności i przed obliczeniem ujednolić jednostki.',
      items:['Proporcjonalność prosta','Proporcje','Skala mapy i planu','Cena jednostkowa','Droga, prędkość i czas'],
      formulas:originalSpecs['e8-proportion'].formulas,
      theory:originalSpecs['e8-proportion'].theory,
      paths:[get('e8-ratio-scale'),get('e8-motion'),get('e8-practical-problems')]
    },
    {
      id:'e8-geometry',roman:'VIII',n:'08',group:'geometry',title:'Figury płaskie i kąty',accent:'pink',
      desc:'Kąty, trójkąty, czworokąty, wielokąty oraz pola i obwody figur płaskich.',
      lead:'Nazwij figurę, zaznacz na rysunku podstawę i wysokość, a następnie dobierz własność lub wzór.',
      items:['Kąty i proste','Trójkąty','Czworokąty i wielokąty','Pola i obwody','Figury złożone'],
      formulas:['α+β=180°','α+β+γ=180°','P△=a·h/2','P trapezu=(a+b)·h/2'],
      theory:[
        ['Kąty','Kąty przyległe sumują się do 180°, wierzchołkowe są równe, a przy prostych równoległych korzystamy z kątów odpowiadających i naprzemianległych.'],
        ['Trójkąty','Suma kątów każdego trójkąta wynosi 180°. Wysokość jest prostopadła do prostej zawierającej podstawę.'],
        ['Czworokąty','Zacznij od własności boków, kątów i przekątnych, zamiast wybierać wzór tylko po wyglądzie rysunku.'],
        ['Pole i obwód','Pole zapisuj w jednostkach kwadratowych, a obwód w jednostkach długości. Figurę złożoną dziel na prostsze części.']
      ],
      paths:[get('e8-figures'),flatReasoning,get('xgeo-composite')]
    },
    {
      id:'e8-circle-plus',roman:'IX',n:'09',group:'geometry',title:'Pitagoras, koło i współrzędne',accent:'violet',
      desc:'Trójkąty prostokątne, okrąg i koło oraz geometryczne zastosowania układu współrzędnych.',
      lead:'Zrób czytelny szkic, zaznacz kąt prosty, promień lub współrzędne i dopiero wtedy wybierz zależność.',
      items:['Twierdzenie Pitagorasa','Przekątne','Okrąg i koło','Układ współrzędnych','Odległość i środek odcinka'],
      formulas:['a²+b²=c²','l=2πr','P koła=πr²','S=((x₁+x₂)/2,(y₁+y₂)/2)'],
      theory:[...originalSpecs['e8-circle-plus'].theory,['Współrzędne','Położenie punktu odczytuj zawsze w kolejności x, potem y. Odcinki poziome i pionowe liczysz z różnicy odpowiednich współrzędnych.']],
      paths:[get('e8-circle-pythagoras'),coordinateBasics,get('xgeo-pythagoras'),get('xgeo-circle'),circleReasoning,coordinateReasoning]
    },
    {
      id:'e8-space',roman:'X',n:'10',group:'geometry',title:'Bryły i jednostki przestrzenne',accent:'teal',
      desc:'Graniastosłupy, ostrosłupy, siatki, pola powierzchni, objętości i pojemność.',
      lead:'Najpierw rozpoznaj podstawę i wysokość bryły, a potem pilnuj jednostek kwadratowych i sześciennych.',
      items:['Rozpoznawanie brył','Siatki','Pole powierzchni','Objętość','Pojemność i jednostki'],
      formulas:['V=Pp·H','Pc=2Pp+Pb','V ostrosłupa=1/3·Pp·H','1 l=1 dm³'],
      theory:[
        ['Graniastosłup','Objętość to pole podstawy pomnożone przez wysokość bryły. Pole powierzchni obejmuje dwie podstawy i ściany boczne.'],
        ['Ostrosłup','Objętość ostrosłupa o tej samej podstawie i wysokości jest trzy razy mniejsza niż objętość graniastosłupa.'],
        ['Siatki','Zanim policzysz pole, ustal liczbę i kształt wszystkich ścian oraz sprawdź, które krawędzie mają tę samą długość.'],
        ['Jednostki','Zmiana jednostki długości działa inaczej niż zmiana jednostki pola lub objętości: przy objętości współczynnik podnosisz do trzeciej potęgi.']
      ],
      paths:[get('e8-solids'),solidReasoning]
    },
    {
      id:'e8-data',roman:'XI',n:'11',group:'data',title:'Dane i statystyka',accent:'sky',
      desc:'Tabele, diagramy, średnia, mediana, dominanta, rozstęp i poprawne wnioskowanie z danych.',
      lead:'Najpierw przeczytaj tytuł, osie, skalę i jednostkę, a dopiero potem wykonuj obliczenia.',
      items:['Tabele i wykresy','Średnia arytmetyczna','Mediana i dominanta','Rozstęp','Wnioski z danych'],
      formulas:['średnia=suma danych/liczba danych','suma=średnia·liczba danych','rozstęp=max−min','kąt=udział·360°'],
      theory:[
        ['Odczytywanie danych','Tytuł, opisy osi, legenda i skala są częścią zadania. Nie odczytuj wartości wyłącznie z wysokości słupka.'],
        ['Średnia','Średnia dzieli sumę danych po równo. Może nie być jedną z wartości występujących w zestawie.'],
        ['Mediana i dominanta','Do mediany najpierw uporządkuj dane. Dominanta jest wartością występującą najczęściej.'],
        ['Porównywanie zbiorów','Średnia opisuje poziom danych, a rozstęp ich rozproszenie. Dwa zbiory mogą mieć tę samą średnią, ale inną zmienność.']
      ],
      paths:[get('e8-statistics'),statisticsReasoning]
    },
    {
      id:'e8-reasoning',roman:'XII',n:'12',group:'data',title:'Kombinatoryka i prawdopodobieństwo',accent:'navy',
      desc:'Systematyczne zliczanie możliwości, doświadczenia losowe i prawdopodobieństwo klasyczne.',
      lead:'Najpierw uporządkuj wszystkie możliwe wyniki, a dopiero potem policz wyniki sprzyjające.',
      items:['Reguła mnożenia','Drzewka i tabele','Wyniki elementarne','Zdarzenia losowe','Prawdopodobieństwo'],
      formulas:['liczba możliwości=m·n','P(A)=sprzyjające/wszystkie','P(Ā)=1−P(A)','0≤P(A)≤1'],
      theory:[
        ['Systematyczne zliczanie','Użyj tabeli, drzewka lub uporządkowanej listy, aby żadnej możliwości nie pominąć i żadnej nie policzyć dwa razy.'],
        ['Reguła mnożenia','Jeżeli pierwszy wybór ma m możliwości, a po nim każdy drugi wybór ma n możliwości, łącznie jest m·n wyników.'],
        ['Prawdopodobieństwo','Dla jednakowo możliwych wyników podziel liczbę wyników sprzyjających przez liczbę wszystkich wyników.'],
        ['Kontrola','Prawdopodobieństwo zawsze mieści się między 0 i 1. Zdarzenie przeciwne często pozwala policzyć wynik szybciej.']
      ],
      paths:[get('e8-probability'),probabilityReasoning]
    }
  ];

  const reordered={};
  courses.forEach(course=>{
    const base=originalSpecs[course.id]||{};
    reordered[course.id]={
      ...base,
      n:course.n,
      title:course.title,
      desc:course.desc,
      accent:course.accent,
      lead:course.lead,
      formulas:course.formulas,
      theory:course.theory,
      paths:course.paths.map((path,index)=>({...path,n:String(index+1).padStart(2,'0')}))
    };
  });
  smart.specs=reordered;
  smart.topics=courses.map(course=>({
    id:course.id,n:course.roman,course:course.id,title:course.title,group:course.group,
    desc:course.desc,items:course.items,progress:0
  }));

  const textbook=window.E8_TEXTBOOK;
  if(!textbook)return;
  const oldReasoning=textbook['e8-reasoning'];
  const oldData=textbook['e8-data'];
  const oldSpace=textbook['e8-space'];

  textbook['e8-numbers']={
    ...textbook['e8-numbers'],
    formulas:[
      ...textbook['e8-numbers'].formulas.filter(item=>!['Potęga','Pierwiastek'].includes(item.name)),
      {name:'Rozkład na czynniki pierwsze',formula:'n = p₁ · p₂ · … · pₖ',use:'Rozkład porządkuje obliczanie NWD, NWW i sprawdzanie podzielności.'},
      {name:'Szacowanie iloczynu',formula:'a · b ≈ liczby zaokrąglone',use:'Zaokrąglij czynniki do wygodnych liczb i porównaj rząd wielkości z wynikiem dokładnym.'}
    ],
    skills:['system dziesiętny i rzymski','oś liczbowa i porównywanie','liczby ujemne','kolejność działań','cechy podzielności','liczby pierwsze i złożone','NWD i NWW','zaokrąglanie i szacowanie']
  };
  textbook['e8-algebra']={
    ...textbook['e8-algebra'],
    formulas:[...textbook['e8-algebra'].formulas.filter(item=>!['Niewiadoma po obu stronach','Iloczyn równy zero','Proporcja','Obwód figury','Model tekstowy'].includes(item.name)),...oldReasoning.formulas.filter(item=>['Liczba parzysta','Liczba nieparzysta','Wielokrotność','Dowód ogólny','Kontrprzykład'].includes(item.name))],
    skills:['obliczanie wartości wyrażeń','redukcja wyrazów podobnych','usuwanie nawiasów','wyłączanie czynnika','zapis własności liczb','dowód ogólny','kontrprzykład','wnioskowanie z własności'],
    visuals:[...textbook['e8-algebra'].visuals.slice(0,2),oldReasoning.visuals.find(item=>item.type==='proof')].filter(Boolean)
  };
  textbook['e8-equations-plus']={
    ...textbook['e8-equations-plus'],
    formulas:[...textbook['e8-equations-plus'].formulas,...oldReasoning.formulas.filter(item=>['Plan zadania','Kontrola jednostek','Warunki zadania','Pełna odpowiedź'].includes(item.name))],
    visuals:[...textbook['e8-equations-plus'].visuals.slice(0,2),oldReasoning.visuals.find(item=>item.type==='flow')].filter(Boolean)
  };
  textbook['e8-geometry']={
    ...textbook['e8-geometry'],
    formulas:textbook['e8-geometry'].formulas.filter(item=>item.name!=='Pitagoras'),
    skills:['rodzaje kątów','proste równoległe','własności trójkątów','czworokąty','obwody i pola','wysokości figur','figury złożone','podobieństwo i skala']
  };
  textbook['e8-circle-plus']={
    ...textbook['e8-circle-plus'],
    formulas:[...textbook['e8-circle-plus'].formulas,...oldSpace.formulas.filter(item=>item.name==='Środek odcinka')],
    skills:[...textbook['e8-circle-plus'].skills,'układ współrzędnych','środek odcinka'],
    visuals:[textbook['e8-circle-plus'].visuals.find(item=>item.type==='pythagoras'),textbook['e8-circle-plus'].visuals.find(item=>item.type==='circle'),oldSpace.visuals.find(item=>item.type==='coordinates')].filter(Boolean)
  };
  textbook['e8-space']={
    ...oldSpace,
    formulas:oldSpace.formulas.filter(item=>!['Środek odcinka','Symetria względem osi x'].includes(item.name)),
    skills:['rozpoznawanie brył','siatki graniastosłupów','siatki ostrosłupów','pole powierzchni','objętość','pojemność','jednostki sześcienne','przeliczanie litrów'],
    visuals:[...oldSpace.visuals.filter(item=>item.type!=='coordinates'),oldReasoning.visuals.find(item=>item.type==='units')].filter(Boolean)
  };
  textbook['e8-data']={
    ...oldData,
    formulas:[
      ...oldData.formulas.filter(item=>!['Prawdopodobieństwo','Zdarzenie przeciwne','Reguła mnożenia','Prawdopodobieństwo pewne i niemożliwe'].includes(item.name)),
      {name:'Dominanta',formula:'wartość występująca najczęściej',use:'Może być więcej niż jedna dominanta albo może jej nie być.'},
      {name:'Udział procentowy',formula:'część / całość · 100%',use:'W mianowniku wpisz liczbę wszystkich obserwacji.'},
      {name:'Średnia ważona',formula:'x̄ = suma(waga · wartość) / suma wag',use:'Stosuj, gdy wyniki mają różne liczby wystąpień lub różne znaczenie.'}
    ],
    skills:['tabele i diagramy','diagram kołowy','skala osi wykresu','średnia','mediana i dominanta','rozstęp','częstość','porównywanie zbiorów danych'],
    visuals:[...oldData.visuals.filter(item=>item.type!=='probability'),{type:'spread',title:'Środek i rozproszenie',caption:'Dwa zbiory mogą mieć tę samą średnią, ale zupełnie inny rozstęp i układ wartości.'}]
  };
  textbook['e8-reasoning']={
    formulas:[
      ...oldData.formulas.filter(item=>['Prawdopodobieństwo','Zdarzenie przeciwne','Reguła mnożenia','Prawdopodobieństwo pewne i niemożliwe'].includes(item.name)),
      {name:'Reguła dodawania',formula:'m + n',use:'Dodaj liczby możliwości, gdy wybierasz jedną z rozłącznych dróg.'},
      {name:'Dwa rzuty monetą',formula:'2 · 2 = 4 wyniki',use:'Każdy kolejny niezależny wybór podwaja liczbę ścieżek.'},
      {name:'Dwa rzuty kostką',formula:'6 · 6 = 36 wyników',use:'Uporządkowane pary wyników najłatwiej zapisać w tabeli.'},
      {name:'Zdarzenie pewne',formula:'P(Ω) = 1',use:'Zawiera wszystkie możliwe wyniki doświadczenia.'},
      {name:'Zdarzenie niemożliwe',formula:'P(∅) = 0',use:'Nie zawiera żadnego wyniku sprzyjającego.'},
      {name:'Suma prawdopodobieństw wyników',formula:'P(w₁)+…+P(wₙ)=1',use:'Kontrola kompletności listy wszystkich rozłącznych wyników.'}
    ],
    skills:['systematyczne zliczanie','reguła mnożenia','reguła dodawania','drzewka i tabele','wyniki elementarne','zdarzenia losowe','prawdopodobieństwo klasyczne','zdarzenie przeciwne'],
    visuals:[
      oldData.visuals.find(item=>item.type==='probability'),
      {type:'outcome-table',title:'Tabela wszystkich wyników',caption:'Wiersze i kolumny tworzą uporządkowane pary, dzięki czemu żadnego wyniku nie pomijasz.'},
      {type:'favorable-fraction',title:'Część wyników sprzyjających',caption:'Prawdopodobieństwo porównuje liczbę wyników sprzyjających z liczbą wszystkich jednakowo możliwych wyników.'}
    ].filter(Boolean)
  };
})();
