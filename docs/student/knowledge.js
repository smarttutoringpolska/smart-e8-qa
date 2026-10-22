const knowledgeState={course:null,topic:null};

const knowledgeBase={
  linear:{
    lead:'Funkcja liniowa opisuje zależność o stałym tempie zmiany. Jej wykresem jest prosta.',
    definitions:[
      ['Funkcja i sposoby jej przedstawiania','Funkcja przypisuje każdemu argumentowi x dokładnie jedną wartość y. Możemy opisać ją wzorem, tabelą, wykresem albo słownie.'],
      ['Dziedzina, argument i zbiór wartości','Dziedzina to zbiór dopuszczalnych argumentów x. Zbiór wartości zawiera wszystkie wyniki y, które funkcja może przyjąć.'],
      ['Postać funkcji liniowej','Funkcję postaci f(x)=ax+b, gdzie a i b są liczbami rzeczywistymi, nazywamy funkcją liniową. Jej wykresem jest prosta.'],
      ['Współczynnik kierunkowy a','Współczynnik a opisuje nachylenie prostej i tempo zmiany wartości funkcji. Decyduje też o monotoniczności.'],
      ['Wyraz wolny b','Wyraz wolny b jest wartością f(0), dlatego wskazuje punkt przecięcia wykresu z osią Oy.'],
      ['Miejsce zerowe i znaki funkcji','Miejsce zerowe x₀ to argument, dla którego f(x₀)=0. Dzieli ono oś na obszary, w których wartości funkcji mają określony znak.'],
      ['Wyznaczanie wzoru prostej','Dwa punkty o różnych współrzędnych x wyznaczają jedną prostą. Najpierw obliczamy a, a następnie podstawiamy punkt, aby wyznaczyć b.'],
      ['Proste równoległe i prostopadłe','Wzajemne położenie prostych odczytujemy ze współczynników kierunkowych. Równoległość oznacza to samo nachylenie, a prostopadłość — nachylenia przeciwne i odwrotne.'],
      ['Parametr i przypadki szczególne','Parametr zmienia współczynniki funkcji. Trzeba osobno sprawdzić wartości, dla których znika współczynnik przy x i prosta staje się pozioma.']
    ],
    formulas:['x → f → y','D i Zw','f(x)=ax+b','a=Δy/Δx','f(0)=b','x₀=−b/a','a=(y₂−y₁)/(x₂−x₁)','a₁=a₂ lub a₁a₂=−1','a(m)=0 — przypadek szczególny'],
    conditions:['Każdemu argumentowi odpowiada dokładnie jedna wartość.','Wzór na a z dwóch punktów wymaga x₁≠x₂.','Prosta pionowa x=c nie jest wykresem funkcji y=f(x).','Funkcja stała f(x)=0 ma nieskończenie wiele miejsc zerowych.'],
    trap:'Przy parametrze najpierw sprawdź przypadek, w którym współczynnik przy x znika. Wtedy funkcja może stać się stała.'
  },
  quadratic:{
    lead:'Funkcja kwadratowa łączy wzór algebraiczny z geometrią paraboli.',
    definitions:[
      ['Funkcja kwadratowa i parabola','Funkcja postaci f(x)=ax²+bx+c, gdzie a≠0. Jej wykresem jest parabola, a dziedziną bez dodatkowych ograniczeń jest zbiór liczb rzeczywistych.'],
      ['Współczynnik a i ramiona','Znak a ustala kierunek ramion paraboli, a wartość |a| wpływa na jej szerokość. Współczynniki b i c nie zmieniają kierunku ramion.'],
      ['Wyróżnik Δ','Wyróżnik Δ=b²−4ac pozwala określić liczbę rzeczywistych miejsc zerowych jeszcze przed ich obliczeniem.'],
      ['Miejsca zerowe','Miejsca zerowe są argumentami, dla których f(x)=0. Na wykresie odpowiadają punktom przecięcia paraboli z osią Ox.'],
      ['Wierzchołek i oś symetrii','Wierzchołek W=(p,q) jest najniższym albo najwyższym punktem paraboli, a pionowa prosta x=p jest jej osią symetrii.'],
      ['Monotoniczność i zbiór wartości','Wierzchołek dzieli parabolę na część malejącą i rosnącą. Wartość q wyznacza początek zbioru wartości.'],
      ['Trzy postacie funkcji','Postać ogólna pokazuje współczynniki, kanoniczna wierzchołek, a iloczynowa miejsca zerowe. Każda opisuje tę samą parabolę.'],
      ['Przesunięcia paraboli','W zapisie a(x−p)²+q liczba p przesuwa wykres poziomo, a q pionowo. Znaki wewnątrz nawiasu odczytujemy przeciwnie.'],
      ['Parametr i liczba rozwiązań','Parametr może zmieniać współczynniki, położenie paraboli i liczbę rozwiązań równania. Warunki zapisujemy za pomocą delty oraz założenia a≠0.']
    ],
    formulas:['f(x)=ax²+bx+c, a≠0','a>0: ramiona w górę · a<0: ramiona w dół','Δ=b²−4ac','x₁,₂=(−b±√Δ)/(2a)','p=−b/(2a), q=−Δ/(4a)','a>0: Zw=[q,∞) · a<0: Zw=(−∞,q]','ogólna ↔ kanoniczna ↔ iloczynowa','f(x)=a(x−p)²+q','liczba rozwiązań zależy od znaku Δ'],
    conditions:['Współczynnik a musi być różny od zera.','Liczba miejsc zerowych zależy od znaku delty.','Postać iloczynowa nad liczbami rzeczywistymi istnieje tylko dla Δ≥0.','Zbiór wartości i monotoniczność zależą od kierunku ramion oraz wierzchołka.'],
    trap:'Najpierw sprawdź, czy współczynnik przy x² nie znika. Dopiero później stosuj deltę i wzory właściwe dla funkcji kwadratowej.'
  },
  sequences:{
    lead:'Ciąg to funkcja, której argumentami są kolejne liczby naturalne.',
    definitions:[
      ['Pojęcie ciągu i indeks','Ciąg jest funkcją określoną na kolejnych liczbach naturalnych. Symbol aₙ oznacza wartość wyrazu stojącego na pozycji n.'],
      ['Wzór ogólny i monotoniczność','Wzór ogólny pozwala obliczyć dowolny wyraz bez wypisywania wcześniejszych. Monotoniczność opisuje, czy kolejne wartości rosną, maleją albo pozostają stałe.'],
      ['Ciąg arytmetyczny i różnica','W ciągu arytmetycznym każdy kolejny wyraz powstaje przez dodanie tej samej liczby r. Stałą różnicę obliczamy jako aₙ₊₁−aₙ.'],
      ['Wzór ciągu arytmetycznego','Od pierwszego do n-tego wyrazu wykonujemy n−1 jednakowych kroków o wartości r, dlatego aₙ=a₁+(n−1)r.'],
      ['Suma ciągu arytmetycznego','Suma n początkowych wyrazów jest równa liczbie wyrazów pomnożonej przez średnią pierwszego i ostatniego wyrazu.'],
      ['Ciąg geometryczny i iloraz','W ciągu geometrycznym każdy kolejny wyraz powstaje przez pomnożenie poprzedniego przez stały iloraz q.'],
      ['Suma ciągu geometrycznego','Sumę n początkowych wyrazów można obliczyć jednym wzorem zależnym od a₁, q i n. Przypadek q=1 rozpatrujemy osobno.'],
      ['Ciąg rekurencyjny','Rekurencja podaje wartość początkową i regułę przejścia do następnego wyrazu. Bez obu informacji ciąg nie jest wyznaczony jednoznacznie.'],
      ['Procent składany i zastosowania','Powtarzająca się zmiana procentowa tworzy ciąg geometryczny. W każdym okresie mnożymy aktualną wartość przez ten sam współczynnik.']
    ],
    formulas:['(a₁,a₂,a₃,…,aₙ,…)','aₙ=f(n)','r=aₙ₊₁−aₙ','aₙ=a₁+(n−1)r','Sₙ=n(a₁+aₙ)/2','q=aₙ₊₁/aₙ · aₙ=a₁qⁿ⁻¹','Sₙ=a₁(1−qⁿ)/(1−q), q≠1','a₁=… oraz aₙ₊₁=F(aₙ)','Kₙ=K₀(1+p)ⁿ'],
    conditions:['Indeks n jest dodatnią liczbą naturalną.','Dla ilorazu q sprawdzamy, czy wyraz w mianowniku nie jest zerem.','Wzór na sumę geometryczną z ułamkiem wymaga q≠1.','W zadaniach procentowych wykładnik oznacza liczbę pełnych okresów.'],
    trap:'Nie myl indeksu z wartością wyrazu. We wzorach na aₙ pojawia się n−1, ponieważ od a₁ do aₙ wykonujemy właśnie n−1 przejść.'
  },
  equations:{
    lead:'Rozwiązać równanie lub nierówność znaczy znaleźć wszystkie liczby spełniające zapisane warunki.',
    definitions:[
      ['Równanie','Równość zawierająca niewiadomą. Rozwiązaniem jest każda liczba, po której podstawieniu otrzymujemy zdanie prawdziwe.'],
      ['Nierówność','Relacja z symbolem <, >, ≤ lub ≥. Jej rozwiązaniem jest zwykle przedział albo suma przedziałów.'],
      ['Dziedzina równania','Zbiór wartości, dla których wszystkie występujące wyrażenia mają sens.'],
      ['Układ równań','Zestaw warunków spełnianych jednocześnie. Rozwiązanie musi pasować do każdego równania układu.']
    ],
    formulas:['ax+b=0 ⇒ x=−b/a, a≠0','ab=0 ⇔ a=0 lub b=0','a/b=0 ⇔ a=0 i b≠0','|x|<a ⇔ −a<x<a, a>0'],
    conditions:['Mianownik nie może być równy zero.','Pierwiastek parzystego stopnia wymaga liczby pod pierwiastkiem nieujemnej.','Mnożąc nierówność przez liczbę ujemną, odwracamy znak nierówności.'],
    trap:'Po podniesieniu równania do kwadratu mogą pojawić się rozwiązania obce. Każdy wynik sprawdź w równaniu wyjściowym.'
  },
  numbers:{
    lead:'Własności liczb, potęg, pierwiastków i logarytmów są językiem wszystkich dalszych działów.',
    definitions:[
      ['Liczby rzeczywiste','Obejmują liczby wymierne i niewymierne. Można je przedstawiać na osi liczbowej.'],
      ['Potęga','Zapis aⁿ opisuje iloczyn jednakowych czynników, a wykładniki całkowite i wymierne rozszerzają to pojęcie.'],
      ['Logarytm','logₐb=c wtedy i tylko wtedy, gdy aᶜ=b. Odpowiada na pytanie o wykładnik potęgi.'],
      ['Wartość bezwzględna','|x| jest odległością liczby x od zera, dlatego zawsze jest nieujemna.']
    ],
    formulas:['aᵐ·aⁿ=aᵐ⁺ⁿ','(aᵐ)ⁿ=aᵐⁿ','logₐ(xy)=logₐx+logₐy','nowa wartość=stara·(1±p/100)'],
    conditions:['Dla pierwiastka parzystego stopnia liczba pod pierwiastkiem musi być nieujemna.','W logarytmie: a>0, a≠1 oraz b>0.','Ujemny wykładnik wymaga niezerowej podstawy.'],
    trap:'Kolejnych zmian procentowych nie dodajemy. Mnożymy odpowiednie współczynniki, np. 1,10·0,90=0,99.'
  },
  trigonometry:{
    lead:'Trygonometria opisuje zależności między bokami i kątami trójkąta.',
    definitions:[
      ['Sinus kąta ostrego','Stosunek długości przyprostokątnej leżącej naprzeciw kąta do przeciwprostokątnej.'],
      ['Cosinus kąta ostrego','Stosunek długości przyprostokątnej leżącej przy kącie do przeciwprostokątnej.'],
      ['Tangens kąta ostrego','Stosunek przyprostokątnej naprzeciw kąta do przyprostokątnej przy kącie.'],
      ['Twierdzenia sinusów i cosinusów','Pozwalają rozwiązywać dowolne trójkąty, nie tylko prostokątne.']
    ],
    formulas:['sinα=a/c · cosα=b/c · tgα=a/b','sin²α+cos²α=1','c²=a²+b²−2ab·cosγ','P=½ab·sinγ'],
    conditions:['We wzorach a i α muszą być elementami leżącymi naprzeciw siebie.','Dla kąta ostrego sinus, cosinus i tangens są dodatnie.','Wzór na pole wymaga kąta zawartego między wskazanymi bokami.'],
    trap:'Najpierw zaznacz kąt i podpisz boki względem niego. Ten sam bok może być „przy kącie” dla jednego kąta i „naprzeciw” dla drugiego.'
  },
  planimetry:{
    lead:'Planimetria bada własności figur płaskich: długości, kąty, pola i podobieństwo.',
    definitions:[
      ['Figury przystające','Mają ten sam kształt i rozmiar; odpowiadające boki oraz kąty są równe.'],
      ['Figury podobne','Mają równe odpowiadające kąty i proporcjonalne odpowiadające boki.'],
      ['Okrąg i koło','Okrąg jest zbiorem punktów w stałej odległości od środka, a koło zawiera także jego wnętrze.'],
      ['Kąt wpisany','Ma wierzchołek na okręgu. Jest dwa razy mniejszy od kąta środkowego opartego na tym samym łuku.']
    ],
    formulas:['a²+b²=c²','P△=½ah','Pkoła=πr² · l=2πr','podobieństwo: długości k, pola k²'],
    conditions:['Twierdzenie Pitagorasa stosujemy w trójkącie prostokątnym.','Promień poprowadzony do punktu styczności jest prostopadły do stycznej.','Kąt wpisany oparty na średnicy ma 90°.'],
    trap:'Skala pól jest kwadratem skali długości. Przy skali boków 3 pole rośnie 9 razy, nie 3 razy.'
  },
  analytic:{
    lead:'Geometria analityczna zamienia własności figur na równania i obliczenia we współrzędnych.',
    definitions:[
      ['Odległość punktów','Długość odcinka między punktami obliczana z twierdzenia Pitagorasa dla różnic współrzędnych.'],
      ['Środek odcinka','Punkt, którego każda współrzędna jest średnią odpowiednich współrzędnych końców odcinka.'],
      ['Współczynnik kierunkowy','Iloraz zmiany współrzędnej y przez zmianę współrzędnej x.'],
      ['Okrąg w układzie','Zbiór punktów odległych o r od środka S=(p,q).']
    ],
    formulas:['d=√((x₂−x₁)²+(y₂−y₁)²)','S=((x₁+x₂)/2,(y₁+y₂)/2)','a=(y₂−y₁)/(x₂−x₁)','(x−p)²+(y−q)²=r²'],
    conditions:['Dla prostej pionowej x₁=x₂ współczynnik kierunkowy nie istnieje.','Proste prostopadłe o istniejących współczynnikach spełniają a₁a₂=−1.','Punkt należy do figury, jeśli jego współrzędne spełniają jej równanie.'],
    trap:'Znaki środka okręgu odczytujemy przeciwnie do znaków w nawiasach: (x+2)² oznacza p=−2.'
  },
  expressions:{
    lead:'Przekształcenia algebraiczne służą do zmiany formy zapisu bez zmiany jego wartości.',
    definitions:[
      ['Jednomian','Iloczyn liczby i zmiennych podniesionych do nieujemnych potęg całkowitych.'],
      ['Wielomian','Suma jednomianów. Stopień wielomianu to najwyższy stopień jego niezerowego składnika.'],
      ['Tożsamość algebraiczna','Równość prawdziwa dla wszystkich dopuszczalnych wartości zmiennych.'],
      ['Wyrażenie wymierne','Iloraz wielomianów, którego dziedzina wyklucza miejsca zerowe mianownika.']
    ],
    formulas:['(a+b)²=a²+2ab+b²','(a−b)²=a²−2ab+b²','a²−b²=(a−b)(a+b)','a³±b³=(a±b)(a²∓ab+b²)'],
    conditions:['Redukujemy tylko wyrazy podobne.','Skracać można czynniki iloczynu, nie składniki sumy.','Założenia z mianownika zachowujemy także po skróceniu wyrażenia.'],
    trap:'Zapis (a+b)² nie jest równy a²+b². Brakuje składnika 2ab.'
  },
  stereometry:{
    lead:'Stereometria opisuje bryły, ich przekroje, pola powierzchni i objętości.',
    definitions:[
      ['Graniastosłup prosty','Bryła o dwóch przystających, równoległych podstawach i krawędziach bocznych prostopadłych do podstaw.'],
      ['Ostrosłup','Bryła o jednej podstawie, której pozostałe ściany są trójkątami mającymi wspólny wierzchołek.'],
      ['Wysokość bryły','Najkrótsza odległość między płaszczyznami podstaw albo od wierzchołka do płaszczyzny podstawy.'],
      ['Przekrój osiowy','Przekrój bryły obrotowej płaszczyzną zawierającą jej oś.']
    ],
    formulas:['Vgraniastosłupa=Pₚ·H','Vostrosłupa=⅓Pₚ·H','Vwalca=πr²H · Vstożka=⅓πr²H','Pkuli=4πr² · Vkuli=4πr³/3'],
    conditions:['Wysokość bryły jest prostopadła do płaszczyzny podstawy.','Tworząca stożka nie jest jego wysokością.','Przy podobieństwie długości zmieniają się k razy, pola k², a objętości k³.'],
    trap:'W zadaniach z ostrosłupem rozróżniaj wysokość bryły, apotemę ściany i krawędź boczną — to trzy różne odcinki.'
  },
  probability:{
    lead:'Prawdopodobieństwo zaczyna się od dokładnego opisania wszystkich możliwych wyników.',
    definitions:[
      ['Przestrzeń zdarzeń Ω','Zbiór wszystkich możliwych wyników doświadczenia losowego.'],
      ['Zdarzenie losowe','Dowolny podzbiór przestrzeni Ω. Wyniki należące do zdarzenia nazywamy sprzyjającymi.'],
      ['Zdarzenia rozłączne','Nie mają wspólnych wyników i nie mogą zajść jednocześnie.'],
      ['Zdarzenia niezależne','Zajście jednego nie zmienia prawdopodobieństwa drugiego.']
    ],
    formulas:['P(A)=|A|/|Ω|','P(A̅)=1−P(A)','rozłączne: P(A∪B)=P(A)+P(B)','niezależne: P(A∩B)=P(A)P(B)'],
    conditions:['Model klasyczny wymaga jednakowo prawdopodobnych wyników.','Prawdopodobieństwo zawsze należy do przedziału [0,1].','W zliczaniu kolejnych wyborów stosujemy regułę mnożenia.'],
    trap:'„Rozłączne” nie znaczy „niezależne”. Dwa rozłączne zdarzenia o dodatnim prawdopodobieństwie nie są niezależne.'
  },
  dataopt:{
    lead:'Statystyka porządkuje dane, a optymalizacja szuka najlepszego wyniku w dopuszczalnym zakresie.',
    definitions:[
      ['Średnia arytmetyczna','Suma wszystkich wartości podzielona przez ich liczbę.'],
      ['Mediana','Środkowa wartość uporządkowanego zestawu; przy parzystej liczbie danych średnia dwóch środkowych.'],
      ['Dominanta','Wartość występująca najczęściej. Zestaw może mieć więcej niż jedną dominantę albo nie mieć jej wcale.'],
      ['Funkcja celu','W optymalizacji jest to wielkość, którą chcemy zmaksymalizować albo zminimalizować.']
    ],
    formulas:['x̄=(x₁+…+xₙ)/n','średnia ważona=Σ(wᵢxᵢ)/Σwᵢ','xw=−b/(2a)','dla f(x)=a(x−p)²+q ekstremum jest w x=p'],
    conditions:['Przed wyznaczeniem mediany dane trzeba uporządkować.','W optymalizacji dziedzina wynika z treści, np. długości muszą być dodatnie.','Wynik matematyczny trzeba zinterpretować wraz z jednostką.'],
    trap:'Skrócona skala osi wykresu może wyolbrzymiać różnice. Zawsze sprawdź początek osi, jednostkę i legendę.'
  }
};

const knowledgeFormulaNotes={
  linear:['To podstawowy zapis prostej. Dla każdego argumentu x mnożysz go przez a, a następnie dodajesz b.','Licznik mówi, o ile zmieniła się wysokość y, a mianownik — o ile przesunęliśmy się wzdłuż osi x.','Miejsce zerowe otrzymujemy po przyrównaniu ax+b do zera i rozwiązaniu równania.','Równe nachylenia dają proste równoległe. Nachylenia przeciwne i odwrotne dają proste prostopadłe.'],
  quadratic:['Delta porównuje wpływ współczynników b oraz a·c i rozstrzyga, ile razy parabola przecina oś x.','Znak ± tworzy dwa obliczenia: jedno z dodawaniem, drugie z odejmowaniem pierwiastka z delty.','Współrzędna p wyznacza oś symetrii, a q jest najmniejszą albo największą wartością funkcji.','Postać kanoniczna pozwala od razu odczytać wierzchołek W=(p,q) i kierunek ramion.'],
  sequences:['Każdy kolejny wyraz ciągu arytmetycznego powstaje przez dodanie stałej różnicy r.','Sumę liczymy jako liczbę wyrazów razy średnia pierwszego i ostatniego wyrazu.','Każdy kolejny wyraz ciągu geometrycznego powstaje przez mnożenie przez stały iloraz q.','Wzór skraca dodawanie wielu wyrazów ciągu geometrycznego; osobno traktujemy przypadek q=1.'],
  equations:['Dzielimy przez a dopiero po sprawdzeniu, że a nie jest zerem.','Iloczyn jest równy zero wtedy, gdy przynajmniej jeden z jego czynników jest zerem.','Ułamek jest równy zero wyłącznie wtedy, gdy licznik jest zerem, a mianownik pozostaje niezerowy.','Wartość bezwzględna opisuje odległość, dlatego nierówność tworzy przedział symetryczny względem zera.'],
  numbers:['Przy mnożeniu potęg o tej samej podstawie dodajemy wykładniki.','Potęga potęgi oznacza powtórzenie mnożenia, dlatego wykładniki się mnożą.','Logarytm iloczynu można rozdzielić na sumę logarytmów przy tej samej podstawie.','Procent zamieniamy na współczynnik: podwyżka daje liczbę większą od 1, a obniżka mniejszą od 1.'],
  trigonometry:['Wszystkie trzy ilorazy zależą od wybranego kąta; przeciwprostokątna występuje tylko w sinusie i cosinusie.','Tożsamość pozwala obliczyć sinus z cosinusa albo cosinus z sinusa.','Twierdzenie cosinusów łączy trzy boki z kątem zawartym między dwoma z nich.','Pole wyznaczamy z dwóch boków i sinusa kąta leżącego między nimi.'],
  planimetry:['Kwadrat przeciwprostokątnej jest sumą kwadratów przyprostokątnych.','Pole trójkąta to połowa pola prostokąta o tej samej podstawie i wysokości.','Promień jest kluczową wielkością: obwód zależy od r, a pole od r².','Jeżeli długości rosną k razy, pole rośnie k² razy.'],
  analytic:['Różnice współrzędnych tworzą przyprostokątne pomocniczego trójkąta prostokątnego.','Środek leży dokładnie w połowie, dlatego uśredniamy osobno współrzędne x i y.','Nachylenie prostej to zmiana pionowa podzielona przez zmianę poziomą.','Każdy punkt okręgu jest odległy od środka o r; po podniesieniu wzoru na odległość do kwadratu otrzymujemy równanie.'],
  expressions:['Kwadrat sumy zawiera dwa kwadraty i podwojony iloczyn składników.','Zmiana znaku w nawiasie zmienia znak wyrazu 2ab.','Różnicę kwadratów rozkładamy na iloczyn sumy i różnicy tych samych składników.','Wzór na sumę lub różnicę sześcianów pozwala szybko wyłączyć czynnik liniowy.'],
  stereometry:['Objętość graniastosłupa to pole podstawy powtórzone na całej wysokości.','Ostrosłup o tej samej podstawie i wysokości ma jedną trzecią objętości graniastosłupa.','Walec korzysta z pola koła, a stożek ma dodatkowy czynnik 1/3.','Pole kuli zależy od r², natomiast jej objętość od r³.'],
  probability:['W modelu klasycznym dzielimy liczbę wyników sprzyjających przez liczbę wszystkich jednakowo możliwych wyników.','Zdarzenie przeciwne obejmuje wszystko, co nie należy do A, dlatego oba prawdopodobieństwa sumują się do 1.','Dla zdarzeń rozłącznych nie ma części wspólnej, więc ich prawdopodobieństwa dodajemy.','Przy niezależności zajście jednego zdarzenia nie wpływa na drugie, dlatego prawdopodobieństwa mnożymy.'],
  dataopt:['Średnia rozdziela łączną sumę danych po równo na wszystkie obserwacje.','Waga mówi, ile razy lub jak silnie dana wartość wpływa na wynik.','Współrzędna wierzchołka wskazuje argument, dla którego funkcja kwadratowa osiąga ekstremum.','W postaci kanonicznej q jest wartością ekstremalną, a p argumentem, dla którego ją osiągamy.']
};

const knowledgeExamples={
  linear:['Dla f(x)=2x+3 mamy a=2 i b=3, więc prosta rośnie i przecina oś Oy w punkcie (0,3).','Dla punktów (1,2) i (3,6): a=(6−2)/(3−1)=2.','Dla f(x)=2x−6: x₀=−(−6)/2=3.','Prosta prostopadła do y=2x+1 ma współczynnik −1/2.'],
  quadratic:['Dla x²−5x+6 delta wynosi 25−24=1, więc istnieją dwa miejsca zerowe.','Dla x²−5x+6 otrzymujemy x₁=2 oraz x₂=3.','Dla f(x)=x²−4x+3: p=2, q=−1, więc W=(2,−1).','Funkcja 2(x−3)²−5 ma wierzchołek (3,−5) i ramiona skierowane w górę.'],
  sequences:['Jeśli a₁=4 i r=3, to a₅=4+4·3=16.','Dla a₁=2 i a₅=10: S₅=5·(2+10)/2=30.','Jeśli a₁=3 i q=2, to a₄=3·2³=24.','Dla a₁=1, q=2 i n=4: S₄=1+2+4+8=15.'],
  equations:['Dla 3x−6=0 mamy x=2.','Z równania (x−2)(x+5)=0 otrzymujemy x=2 lub x=−5.','Ułamek (x−3)/(x+1) jest zerem dla x=3, przy założeniu x≠−1.','Nierówność |x|<4 oznacza −4<x<4.'],
  numbers:['2³·2⁴=2⁷=128.','(3²)³=3⁶=729.','log₂8+log₂4=log₂32=5.','Po obniżce 200 zł o 15%: 200·0,85=170 zł.'],
  trigonometry:['W trójkącie 3–4–5 dla kąta naprzeciw boku 3: sinα=3/5, cosα=4/5, tgα=3/4.','Jeśli sinα=3/5 i α jest ostry, to cosα=4/5.','Dla boków 5 i 7 oraz kąta 60°: c²=25+49−35=39.','Dla boków 6 i 8 oraz kąta 30°: P=1/2·6·8·1/2=12.'],
  planimetry:['Przy przyprostokątnych 3 i 4 przeciwprostokątna ma długość 5.','Dla a=8 i h=5: P=1/2·8·5=20.','Koło o r=3 ma pole 9π i obwód 6π.','Przy skali długości 3 pole figury rośnie 9 razy.'],
  analytic:['Odległość punktów (0,0) i (3,4) wynosi √(9+16)=5.','Środek odcinka o końcach (2,−1) i (6,3) to (4,1).','Dla punktów (1,2) i (3,6) współczynnik a=2.','Okrąg o środku (2,−3) i promieniu 4 ma równanie (x−2)²+(y+3)²=16.'],
  expressions:['(x+3)²=x²+6x+9.','(2x−5)²=4x²−20x+25.','x²−16=(x−4)(x+4).','x³+8=(x+2)(x²−2x+4).'],
  stereometry:['Przy Pₚ=12 i H=5 objętość graniastosłupa wynosi 60.','Przy Pₚ=18 i H=6 objętość ostrosłupa wynosi 36.','Walec o r=2 i H=5 ma objętość 20π, a taki stożek 20π/3.','Kula o r=3 ma pole 36π i objętość 36π.'],
  probability:['Przy rzucie kostką P(liczby parzystej)=3/6=1/2.','Jeśli P(A)=0,3, to P(A̅)=0,7.','Dla rozłącznych zdarzeń o P(A)=0,2 i P(B)=0,5 mamy P(A∪B)=0,7.','Dla dwóch niezależnych rzutów monetą P(OO)=1/2·1/2=1/4.'],
  dataopt:['Średnia liczb 2, 4 i 6 wynosi (2+4+6)/3=4.','Oceny 4 z wagą 2 i 2 z wagą 1 dają średnią (8+2)/3=10/3.','Dla f(x)=−x²+6x maksimum występuje przy x=3.','Dla f(x)=2(x−3)²+1 najmniejsza wartość wynosi 1 i jest osiągana dla x=3.']
};

const knowledgeSymbols={
  linear:['x — argument funkcji','f(x) lub y — wartość funkcji','a — nachylenie prostej','b — przecięcie osi Oy','x₀ — miejsce zerowe'],quadratic:['a — kierunek i szerokość ramion','b, c — współczynniki postaci ogólnej','Δ — wyróżnik','p, q — współrzędne wierzchołka'],sequences:['aₙ — n-ty wyraz','a₁ — pierwszy wyraz','r — różnica','q — iloraz'],equations:['x — niewiadoma','a, b — znane współczynniki','|x| — odległość x od zera','D — dziedzina'],numbers:['a — podstawa potęgi lub logarytmu','m, n — wykładniki','p — zmiana procentowa','|x| — wartość bezwzględna'],trigonometry:['α, β, γ — kąty','a, b, c — boki naprzeciw odpowiednich kątów','c — przeciwprostokątna w trójkącie prostokątnym','P — pole'],planimetry:['a, b, c — długości boków','h — wysokość','r — promień','k — skala podobieństwa'],analytic:['(x₁,y₁), (x₂,y₂) — punkty','d — odległość','a — współczynnik kierunkowy','S=(p,q) — środek'],expressions:['a, b — dowolne wyrażenia','x — zmienna','stopień — największy wykładnik','D — dziedzina wyrażenia'],stereometry:['Pₚ — pole podstawy','H — wysokość bryły','r — promień','V — objętość'],probability:['Ω — wszystkie wyniki','A, B — zdarzenia','A̅ — zdarzenie przeciwne','∩ / ∪ — część wspólna / suma'],dataopt:['xᵢ — wartość obserwacji','wᵢ — jej waga','x̄ — średnia','p, q — współrzędne wierzchołka']
};

const knowledgeTopicFormulas={
  linear:['x ∈ D  →  f(x)=y','D — argumenty · Zw — wartości','f(x)=ax+b','a=Δy/Δx','f(0)=b','x₀=−b/a, a≠0','a=(y₂−y₁)/(x₂−x₁), b=y₁−ax₁','równoległe: a₁=a₂ · prostopadłe: a₁a₂=−1','f(x)=(u(m))x+v(m)'],
  quadratic:['f(x)=ax²+bx+c, a≠0','a>0: ∪ · a<0: ∩','Δ=b²−4ac','x₁,₂=(−b±√Δ)/(2a)','W=(p,q), p=−b/(2a), q=−Δ/(4a)','a>0: Zw=[q,∞) · a<0: Zw=(−∞,q]','ax²+bx+c = a(x−p)²+q = a(x−x₁)(x−x₂)','f(x)=a(x−p)²+q','Δ(m)>0, Δ(m)=0 lub Δ(m)<0'],
  sequences:['(a₁,a₂,a₃,…,aₙ,…)','aₙ=f(n)','r=aₙ₊₁−aₙ','aₙ=a₁+(n−1)r','Sₙ=n(a₁+aₙ)/2','q=aₙ₊₁/aₙ · aₙ=a₁qⁿ⁻¹','Sₙ=a₁(1−qⁿ)/(1−q), q≠1','a₁=… oraz aₙ₊₁=F(aₙ)','Kₙ=K₀(1+p)ⁿ'],
  equations:['L=P ⇔ szukamy x, dla których L(x)=P(x)','L<P, L>P, L≤P lub L≥P','D: mianownik≠0, pod pierwiastkiem≥0','(x,y) spełnia każde równanie układu'],
  numbers:['ℝ=ℚ∪(ℝ∖ℚ)','aᵐ·aⁿ=aᵐ⁺ⁿ','logₐb=c ⇔ aᶜ=b','|x|={x dla x≥0; −x dla x<0}'],
  trigonometry:['sinα=naprzeciw/przeciwprostokątna','cosα=przy kącie/przeciwprostokątna','tgα=naprzeciw/przy kącie','c²=a²+b²−2ab·cosγ'],
  planimetry:['przystawanie: odpowiadające boki i kąty są równe','podobieństwo: długości k, pola k²','Pkoła=πr² · l=2πr','kąt wpisany=½ kąta środkowego'],
  analytic:['d=√((x₂−x₁)²+(y₂−y₁)²)','S=((x₁+x₂)/2,(y₁+y₂)/2)','a=(y₂−y₁)/(x₂−x₁)','(x−p)²+(y−q)²=r²'],
  expressions:['c·xᵐyⁿ','W(x)=aₙxⁿ+…+a₁x+a₀','(a+b)²=a²+2ab+b²','W(x)/Q(x), Q(x)≠0'],
  stereometry:['V=Pₚ·H','V=⅓Pₚ·H','H ⟂ płaszczyzna podstawy','walec: prostokąt · stożek: trójkąt równoramienny'],
  probability:['Ω={wszystkie możliwe wyniki}','A⊆Ω','A∩B=∅','A, B niezależne ⇒ P(A∩B)=P(A)P(B)'],
  dataopt:['x̄=(x₁+…+xₙ)/n','Me: środkowa wartość lub średnia dwóch środkowych','Mo=wartość o największej częstości','x₍w₎=−b/(2a) dla funkcji kwadratowej']
};

const knowledgeTopicNotes={
  linear:['Argument przechodzi przez regułę funkcji i daje dokładnie jeden wynik. Ten sam związek może pokazać wzór, tabela, wykres albo opis słowny.','Dziedzina odpowiada na pytanie „co wolno wstawić?”, a zbiór wartości — „co może wyjść?”.','Liczba a steruje zmianą wartości, a b ustala wysokość wykresu dla x=0.','Porównujemy zmianę pionową Δy ze zmianą poziomą Δx. Znak ilorazu pokazuje kierunek prostej.','Po podstawieniu x=0 składnik ax znika, dlatego f(0)=b.','Na osi Ox współrzędna y jest równa zero, więc przyjmujemy ax+b=0.','Najpierw odczytujemy nachylenie z dwóch punktów, później z równania y=ax+b wyznaczamy b.','Równoległe proste zmieniają wysokość w tym samym tempie. Przy prostopadłości iloczyn nachyleń wynosi −1.','Wartość parametru może zmienić nie tylko nachylenie, ale też typ funkcji — dlatego najpierw badamy warunek u(m)=0.'],
  quadratic:['Warunek a≠0 odróżnia funkcję kwadratową od liniowej. Wykres każdego takiego wzoru jest parabolą.','Znak a wystarcza do określenia kierunku ramion. Im większe |a|, tym parabola jest węższa.','Znak delty rozstrzyga, czy parabola przecina oś Ox dwa razy, dotyka jej, czy jej nie przecina.','Wzoru z ± używamy dla Δ≥0. Dla Δ=0 oba wyniki zlewają się w jeden.','Pierwsza współrzędna wierzchołka wskazuje oś symetrii, a druga wartość minimalną lub maksymalną funkcji.','Dla ramion w górę q jest minimum, a dla ramion w dół maksimum. Po obu stronach osi symetrii zmienia się monotoniczność.','Każda postać pokazuje coś innego: współczynniki, wierzchołek albo miejsca zerowe. Wybieramy tę, która skraca rozwiązanie.','Odejmowanie p w nawiasie przesuwa wykres w prawo o p, a dodanie q podnosi go o q.','Najpierw ustalamy wartości parametru, dla których a=0. Dla pozostałych badamy znak delty lub położenie wierzchołka.'],
  sequences:['Ciąg zapisuje uporządkowane wartości, a indeks n informuje o pozycji wyrazu, nie o jego wartości.','Podstawienie konkretnego n daje wybrany wyraz. Zachowanie różnicy aₙ₊₁−aₙ pomaga rozpoznać monotoniczność.','Stała różnica r jest dodawana przy każdym przejściu do następnego wyrazu.','Od a₁ do aₙ wykonujemy n−1 przejść, dlatego różnicę r mnożymy przez n−1.','Pary skrajnych wyrazów mają tę samą sumę, dlatego średnia pierwszego i ostatniego reprezentuje średnią całego ciągu.','Stały iloraz q jest mnożnikiem używanym przy każdym przejściu do następnego wyrazu.','Wzór skraca dodawanie kolejnych potęg q. Gdy q=1, wszystkie wyrazy są równe a₁.','Do jednoznacznego wyznaczenia ciągu rekurencyjnego potrzebna jest reguła oraz co najmniej jedna wartość początkowa.','Podwyżka o p oznacza mnożenie przez 1+p, a obniżka przez 1−p. Operację powtarzamy tyle razy, ile jest okresów.'],
  equations:['Lewa i prawa strona są wyrażeniami zależnymi od x; szukamy takich x, dla których mają tę samą wartość.','Rozwiązaniem nierówności jest zbiór liczb, a nie zawsze jedna liczba.','Dziedzinę zapisujemy przed przekształceniami, aby na końcu odrzucić wyniki niedozwolone.','Para jest rozwiązaniem tylko wtedy, gdy po podstawieniu spełnia jednocześnie wszystkie równania.'],
  numbers:['Liczby wymierne mają rozwinięcie dziesiętne skończone lub okresowe; pozostałe liczby rzeczywiste są niewymierne.','Dla tej samej podstawy mnożenie potęg łączy liczbę wszystkich czynników, dlatego wykładniki się dodają.','Logarytm jest wykładnikiem potęgi; zawsze sprawdzamy warunki na podstawę i liczbę logarytmowaną.','Wartość bezwzględna jest odległością od zera, więc nigdy nie przyjmuje wartości ujemnej.'],
  trigonometry:['Sinus łączy bok naprzeciw wybranego kąta z najdłuższym bokiem trójkąta prostokątnego.','Cosinus korzysta z przyprostokątnej dotykającej wybranego kąta.','Tangens porównuje obie przyprostokątne i nie wykorzystuje przeciwprostokątnej.','Twierdzenie cosinusów działa w dowolnym trójkącie i dla kąta 90° przechodzi w twierdzenie Pitagorasa.'],
  planimetry:['Przystawanie oznacza ten sam kształt i ten sam rozmiar, czyli skalę równą 1.','Podobieństwo zachowuje kąty, a długości zmienia w jednej stałej skali.','Okrąg jest brzegiem, a koło obejmuje również wnętrze; dlatego mają inne wielkości: długość i pole.','Oba kąty muszą być oparte na tym samym łuku, aby można było zastosować tę zależność.'],
  analytic:['Różnice współrzędnych są długościami przyprostokątnych pomocniczego trójkąta prostokątnego.','Środek leży w połowie odcinka, dlatego uśredniamy osobno x i y.','Współczynnik pokazuje zmianę pionową przypadającą na jedną jednostkę zmiany poziomej.','Równanie mówi, że odległość każdego punktu (x,y) od środka (p,q) jest równa r.'],
  expressions:['Współczynnik liczbowy mnoży część literową, a stopień jednomianu jest sumą wykładników zmiennych.','Stopień wielomianu wyznacza najwyższa niezerowa potęga zmiennej.','Tożsamość pozostaje prawdziwa dla każdej dopuszczalnej wartości zmiennych.','Mianownik wyznacza ograniczenia dziedziny, które zachowujemy nawet po skróceniu wyrażenia.'],
  stereometry:['Pole podstawy jest powtarzane na całej prostopadłej wysokości graniastosłupa.','Ostrosłup o tej samej podstawie i wysokości ma jedną trzecią objętości graniastosłupa.','Wysokość oznacza najkrótszą odległość od wierzchołka lub drugiej podstawy do płaszczyzny podstawy.','Płaszczyzna zawierająca oś pokazuje pełną wysokość i średnicę bryły obrotowej.'],
  probability:['Najpierw zapisujemy wszystkie wyniki doświadczenia, nie pomijając kolejności tam, gdzie ma ona znaczenie.','Zdarzenie jest zbiorem wybranych wyników z Ω, które spełniają podany warunek.','Pusta część wspólna oznacza, że dwa zdarzenia nie mogą zajść jednocześnie.','Niezależność oznacza brak wpływu jednego zdarzenia na prawdopodobieństwo drugiego.'],
  dataopt:['Średnia rozdziela łączną sumę wartości równo na wszystkie obserwacje.','Mediana zależy od kolejności danych, dlatego przed jej wyznaczeniem musimy je uporządkować.','Dominanta opisuje częstość, a nie wielkość liczby; może być więcej niż jedna.','Najpierw budujemy funkcję celu i jej dziedzinę, a dopiero potem szukamy minimum lub maksimum.']
};

const knowledgeTopicExamples={
  linear:['Dla f(x)=2x+1 argument x=3 daje dokładnie jedną wartość: f(3)=7.','Dla f(x)=2x−1 i D={0,1,2} zbiór wartości wynosi Zw={−1,1,3}.','Dla f(x)=2x+3 współczynniki wynoszą a=2 i b=3.','Dla punktów (1,2) i (3,6): a=(6−2)/(3−1)=2.','Dla f(x)=−4x+5 mamy f(0)=5, więc wykres przecina Oy w punkcie (0,5).','Dla f(x)=2x−6: x₀=3, bo f(3)=0.','Dla A=(0,−2) i B=(3,1): a=1 oraz b=−2, więc f(x)=x−2.','Prosta prostopadła do y=2x+1 ma współczynnik a=−1/2.','Dla f(x)=(3−m)x−4 funkcja jest stała, gdy 3−m=0, czyli m=3.'],
  quadratic:['f(x)=2x²−3x+1 jest kwadratowa, bo a=2≠0.','Dla f(x)=−2x²+3 ramiona są skierowane w dół, a parabola jest węższa niż y=−x².','Dla x²−5x+6 mamy Δ=1>0, więc są dwa miejsca zerowe.','Dla x²−5x+6 otrzymujemy x₁=2 oraz x₂=3.','Dla x²−4x+3 otrzymujemy W=(2,−1) i oś symetrii x=2.','Dla f(x)=(x−2)²−1 funkcja maleje do x=2, potem rośnie, a Zw=[−1,∞).','x²−5x+6=(x−2)(x−3)=(x−5/2)²−1/4.','Wykres y=(x−3)²−2 powstaje z y=x² przez przesunięcie o 3 w prawo i 2 w dół.','Aby równanie x²−2mx+1=0 miało dwa rozwiązania, wymagamy Δ=4m²−4>0.'],
  sequences:['W ciągu (2,5,8,11,…) liczba a₃=8, a indeks 3 oznacza jej pozycję.','Dla aₙ=4n−1 mamy a₁=3, a₂=7, a₃=11, więc ciąg jest rosnący.','Dla ciągu 7,4,1,−2,… różnica wynosi r=−3.','Dla a₁=4 i r=3 mamy a₅=4+4·3=16.','Jeśli a₁=4 i a₁₀=31, to S₁₀=10(4+31)/2=175.','Dla a₁=3 i q=2 mamy a₄=3·2³=24.','Dla a₁=2, q=3 i n=4 mamy S₄=2(1−3⁴)/(1−3)=80.','Jeśli a₁=2 i aₙ₊₁=aₙ+3, to kolejne wyrazy to 2,5,8,11,…','Lokata 1000 zł na 2 lata przy 10% rocznie ma wartość 1000·1,1²=1210 zł.'],
  equations:['L(x)=3x−2 i P(x)=7 są równe dla x=3.','Nierówność 2x<6 ma nieskończenie wiele rozwiązań: x<3.','Dla 1/(x−2) zapisujemy założenie x≠2.','Para (2,1) spełnia układ x+y=3 oraz x−y=1.'],
  numbers:['1/3 jest wymierna, a √2 niewymierna; obie należą do ℝ.','2³·2⁴=2⁷=128.','log₂8=3, ponieważ 2³=8.','|−7|=7, ponieważ −7 leży 7 jednostek od zera.'],
  trigonometry:['W trójkącie 3–4–5 dla kąta naprzeciw boku 3 mamy sinα=3/5.','Dla tego samego kąta cosα=4/5.','Dla tego samego kąta tgα=3/4.','Dla boków 5 i 7 oraz kąta 60°: c²=25+49−35=39.'],
  planimetry:['Dwa trójkąty o bokach 3,4,5 są przystające.','Przy skali długości 3 pole figury rośnie 9 razy.','Koło o r=3 ma pole 9π, a jego okrąg ma długość 6π.','Kąt środkowy 120° odpowiada kątowi wpisanemu 60° na tym samym łuku.'],
  analytic:['Odległość punktów (0,0) i (3,4) wynosi 5.','Środek odcinka o końcach (2,−1) i (6,3) to (4,1).','Dla punktów (1,2) i (3,6) otrzymujemy a=2.','Okrąg o środku (2,−3) i r=4 ma równanie (x−2)²+(y+3)²=16.'],
  expressions:['Jednomian −3x²y ma współczynnik −3 i stopień 3.','Wielomian 2x³−x+4 ma stopień 3.','(x+3)²=x²+6x+9.','Dla (x+1)/(x−2) dziedzina wyklucza x=2.'],
  stereometry:['Przy Pₚ=12 i H=5 objętość graniastosłupa wynosi 60.','Przy Pₚ=18 i H=6 objętość ostrosłupa wynosi 36.','Krawędź boczna może być ukośna, ale wysokość zawsze jest prostopadła do podstawy.','Przekrój osiowy walca o r=2 i H=7 jest prostokątem 4×7.'],
  probability:['Dla rzutu kostką Ω={1,2,3,4,5,6}.','Zdarzenie „liczba parzysta” to A={2,4,6}.','„Wypadła 1” i „wypadła 6” są rozłączne.','Dla dwóch niezależnych rzutów monetą P(OO)=1/2·1/2=1/4.'],
  dataopt:['Średnia liczb 2,4,6 wynosi 4.','Mediana liczb 1,3,8 wynosi 3.','Dominantą zestawu 1,2,2,5 jest 2.','Dla f(x)=−x²+6x maksimum występuje przy x=3.']
};

const knowledgeTopicSymbols={linear:[
  ['x — argument, czyli liczba wejściowa','f — reguła przyporządkowania','f(x)=y — wynik działania funkcji'],
  ['D — dziedzina funkcji','x — dowolny argument należący do D','Zw — zbiór wszystkich możliwych wartości y'],
  ['x — argument','f(x) lub y — wartość','a — współczynnik kierunkowy','b — wyraz wolny'],
  ['Δx — zmiana argumentu','Δy — zmiana wartości','a — iloraz Δy/Δx'],
  ['b — wyraz wolny','f(0) — wartość dla argumentu zero','(0,b) — punkt przecięcia z osią Oy'],
  ['x₀ — miejsce zerowe','f(x₀)=0 — warunek miejsca zerowego','(x₀,0) — punkt na osi Ox'],
  ['A=(x₁,y₁), B=(x₂,y₂) — dane punkty','a — obliczone nachylenie','b — wyraz wolny wyznaczony z punktu'],
  ['a₁, a₂ — współczynniki kierunkowe prostych','a₁=a₂ — równoległość','a₁a₂=−1 — prostopadłość'],
  ['m — parametr','u(m) — współczynnik przy x','v(m) — wyraz wolny zależny od m']
],quadratic:[
  ['x — argument funkcji','f(x) lub y — wartość funkcji','a, b, c — współczynniki wzoru','a≠0 — warunek kwadratowości'],
  ['a — współczynnik przy x²','znak a — kierunek ramion','|a| — liczba wpływająca na szerokość paraboli'],
  ['Δ — wyróżnik','a, b, c — współczynniki postaci ogólnej','znak Δ — informacja o liczbie miejsc zerowych'],
  ['x₁, x₂ — miejsca zerowe','√Δ — pierwiastek z delty','(x₁,0), (x₂,0) — punkty na osi Ox'],
  ['W=(p,q) — wierzchołek','p — oś symetrii x=p','q — wartość ekstremalna'],
  ['q — minimum albo maksimum','Zw — zbiór wartości','p — argument zmiany monotoniczności'],
  ['a, b, c — postać ogólna','p, q — postać kanoniczna','x₁, x₂ — postać iloczynowa'],
  ['p — przesunięcie poziome','q — przesunięcie pionowe','a — niezmieniony kształt i kierunek ramion'],
  ['m — parametr','Δ(m) — delta zależna od parametru','a(m) — współczynnik, który nie może zniknąć']
],sequences:[
  ['n — numer pozycji','aₙ — wartość n-tego wyrazu','a₁ — pierwszy wyraz ciągu'],
  ['f(n) — reguła wyznaczająca aₙ','aₙ₊₁−aₙ — zmiana między kolejnymi wyrazami','monotoniczność — kierunek zmian'],
  ['r — stała różnica','aₙ₊₁ — kolejny wyraz','aₙ — poprzedni wyraz'],
  ['a₁ — pierwszy wyraz','n−1 — liczba przejść','r — wartość każdego przejścia'],
  ['Sₙ — suma n wyrazów','n — liczba dodawanych wyrazów','a₁, aₙ — skrajne wyrazy sumy'],
  ['q — stały iloraz','a₁ — pierwszy wyraz','qⁿ⁻¹ — n−1 kolejnych mnożeń'],
  ['Sₙ — suma n wyrazów','q — iloraz różny od 1','qⁿ — potęga zależna od liczby wyrazów'],
  ['a₁ — wartość początkowa','aₙ₊₁ — następny wyraz','F(aₙ) — reguła przejścia'],
  ['K₀ — wartość początkowa','p — procent zapisany dziesiętnie','n — liczba pełnych okresów']
]};

const knowledgeTopicConditions={linear:[
  ['Każdy argument może mieć tylko jedną wartość.','Jedna wartość może odpowiadać wielu różnym argumentom.','Pionowa linia może przeciąć wykres funkcji najwyżej raz.'],
  ['Argument musi należeć do dziedziny.','Dla funkcji liniowej bez dodatkowych ograniczeń D=ℝ.','Dla funkcji stałej f(x)=b z dziedziną ℝ mamy Zw={b}.'],
  ['Współczynniki a i b są liczbami rzeczywistymi.','Dla a≠0 wykres jest prostą ukośną.','Dla a=0 otrzymujemy funkcję stałą f(x)=b.'],
  ['Wzór z dwóch punktów wymaga x₁≠x₂.','a>0 oznacza funkcję rosnącą, a<0 malejącą.','Dla a=0 funkcja jest stała.'],
  ['Punkt (0,b) zawsze leży na wykresie.','Zmiana b przesuwa prostą pionowo i nie zmienia jej nachylenia.','Dwie proste o tym samym a i różnych b są równoległe.'],
  ['Wzór x₀=−b/a stosujemy tylko dla a≠0.','Dla a=0 i b≠0 miejsc zerowych nie ma.','Dla a=0 i b=0 każda liczba jest miejscem zerowym.'],
  ['Dwa punkty muszą mieć różne współrzędne x.','Po wyznaczeniu a wystarczy podstawić jeden z punktów.','Drugi punkt służy do sprawdzenia wyniku.'],
  ['Warunek a₁a₂=−1 dotyczy prostych niepionowych zapisanych kierunkowo.','Proste równoległe o różnych b nie mają punktu wspólnego.','Równe a i równe b oznaczają tę samą prostą.'],
  ['Najpierw rozwiąż warunek u(m)=0.','Dla u(m)≠0 funkcja ma dokładnie jedno miejsce zerowe.','Dla u(m)=0 liczba miejsc zerowych zależy od v(m).']
],quadratic:[
  ['a musi być różne od zera.','Dziedziną wielomianu kwadratowego jest ℝ.','Wykres jest symetryczny względem pionowej prostej przechodzącej przez wierzchołek.'],
  ['a>0 oznacza ramiona w górę.','a<0 oznacza ramiona w dół.','Porównując szerokość, patrzymy na |a|, a nie na znak a.'],
  ['Δ>0: dwa miejsca zerowe.','Δ=0: jedno podwójne miejsce zerowe.','Δ<0: brak rzeczywistych miejsc zerowych.'],
  ['Wzór z pierwiastkiem stosujemy dla Δ≥0.','Mianownik 2a jest niezerowy, bo a≠0.','Dla Δ=0 zapisujemy jedno rozwiązanie x₀=−b/(2a).'],
  ['Oś symetrii ma równanie x=p.','Dla a>0 wierzchołek daje minimum.','Dla a<0 wierzchołek daje maksimum.'],
  ['Przedziały monotoniczności rozdziela liczba p.','Końce przedziałów zapisujemy zgodnie z dziedziną.','Wartość q należy do zbioru wartości.'],
  ['Postać iloczynowa wymaga rzeczywistych miejsc zerowych.','W każdej postaci współczynnik a jest ten sam.','Po przekształceniu warto sprawdzić współczynniki przez rozwinięcie nawiasów.'],
  ['Znak przy p w nawiasie odczytujemy przeciwnie.','q odczytujemy zgodnie ze znakiem.','Zmiana a nie jest przesunięciem — zmienia kształt lub kierunek ramion.'],
  ['Najpierw wyklucz wartości m, dla których a(m)=0.','Dwa rozwiązania wymagają Δ(m)>0.','Jedno rozwiązanie wymaga Δ(m)=0, o ile równanie pozostaje kwadratowe.']
],sequences:[
  ['Najczęściej przyjmujemy n∈ℕ₊.','Indeks określa pozycję, nie wartość wyrazu.','Kolejność wyrazów ma znaczenie.'],
  ['Do wzoru podstawiamy n, a nie aₙ.','Dodatnia różnica kolejnych wyrazów oznacza wzrost.','Ujemna różnica oznacza spadek.'],
  ['Różnica aₙ₊₁−aₙ musi być stała.','r>0 daje ciąg rosnący, r<0 malejący, r=0 stały.','Stałość trzeba uzasadnić dla każdego n, nie tylko na kilku przykładach.'],
  ['Wzór zawiera n−1.','Znając dowolny wyraz aₖ, możemy użyć aₙ=aₖ+(n−k)r.','Wynik warto sprawdzić przez podstawienie n=1.'],
  ['Suma dotyczy dokładnie n początkowych wyrazów.','Można użyć także Sₙ=n(2a₁+(n−1)r)/2.','Liczba n musi odpowiadać indeksowi ostatniego składnika.'],
  ['Iloraz obliczamy tylko, gdy poprzedni wyraz jest niezerowy.','q>1 nie zawsze oznacza wzrost — znak a₁ i q ma znaczenie.','Dla q=0 kolejne wyrazy po pierwszym są zerowe.'],
  ['Wzór ułamkowy wymaga q≠1.','Dla q=1 mamy Sₙ=n·a₁.','Wykładnik przy q wynosi n, nie n−1.'],
  ['Trzeba podać wartość początkową.','Kolejne wyrazy wyznaczamy po kolei.','Reguła może wykorzystywać więcej niż jeden wcześniejszy wyraz.'],
  ['Procent zamieniamy na ułamek dziesiętny.','Podwyżka: 1+p, obniżka: 1−p.','Wykładnik odpowiada liczbie kapitalizacji lub okresów zmiany.']
]};

const knowledgeTopicTraps={linear:[
  'Relacja, w której jednemu x odpowiadają dwie różne wartości y, nie jest funkcją.',
  'Nie myl dziedziny ze zbiorem wartości: dziedzina dotyczy osi Ox, a zbiór wartości osi Oy.',
  'W zapisie f(x)=−x+4 współczynnik a wynosi −1, a nie 1.',
  'Odejmuj współrzędne w tej samej kolejności w liczniku i mianowniku.',
  'Wyraz wolny b nie jest miejscem zerowym. Opisuje przecięcie z osią Oy, nie Ox.',
  'Nie dziel przez a bez sprawdzenia, czy a może być równe zero.',
  'Po obliczeniu a nie zakładaj automatycznie, że b=0 — podstaw współrzędne punktu.',
  'Prostopadły współczynnik jest przeciwny i odwrotny: dla a=2 otrzymujemy −1/2, nie −2.',
  'W zadaniu z parametrem rozpatrz osobno wartość, dla której znika współczynnik przy x.'
],quadratic:[
  'Sam składnik x² nie wystarcza — jego współczynnik musi być różny od zera.',
  'Ujemne a zmienia kierunek ramion, ale o ich szerokości decyduje wartość bezwzględna |a|.',
  'Nie obliczaj miejsc zerowych, zanim nie sprawdzisz znaku delty. Dla Δ<0 nie istnieją w zbiorze liczb rzeczywistych.',
  'We wzorze na miejsca zerowe cały licznik dzielimy przez 2a, nie tylko pierwiastek z delty.',
  'Nie zamieniaj współrzędnych: oś symetrii to x=p, a wartość ekstremalna to q.',
  'Przy a<0 kolejność przedziałów monotoniczności jest odwrotna niż przy a>0.',
  'Postać iloczynowa nie istnieje nad ℝ, gdy Δ<0. Przy Δ=0 oba czynniki są jednakowe.',
  'W (x+3)² liczba p wynosi −3, więc wykres przesuwa się w lewo, nie w prawo.',
  'Warunek na deltę może być poprawny, ale wynik nadal trzeba przeciąć z warunkiem a(m)≠0.'
],sequences:[
  'a₅ oznacza piąty wyraz, a nie wartość równą 5.',
  'Sprawdzając monotoniczność, porównuj aₙ₊₁ z aₙ dla całej dziedziny, nie tylko pierwsze trzy wyrazy.',
  'Stała różnica oznacza ciąg arytmetyczny; stały iloraz oznacza geometryczny. Nie zamieniaj tych testów.',
  'Od a₁ do aₙ wykonujesz n−1 kroków. To najczęstsze miejsce utraty punktu.',
  'We wzorze Sₙ=n(a₁+aₙ)/2 potrzebujesz ostatniego wyrazu aₙ, nie samej różnicy r.',
  'Przed dzieleniem przez aₙ sprawdź, czy nie jest zerem. Ciąg zawierający zero może wymagać osobnego rozumowania.',
  'Dla q=1 nie wolno użyć wzoru z mianownikiem 1−q, ponieważ prowadziłby do dzielenia przez zero.',
  'Sama reguła aₙ₊₁=aₙ+3 nie wystarcza — bez a₁ można otrzymać nieskończenie wiele różnych ciągów.',
  'Dwie podwyżki po 10% nie dają 20%, lecz mnożnik 1,1²=1,21, czyli wzrost o 21%.'
]};

const knowledgeDerivations={linear:[
  'Zapis f(x) oznacza wynik otrzymany po wstawieniu x do reguły funkcji. Dlatego strzałkę czytamy: „argument x przechodzi przez f i daje y”.',
  'Gdy przesuwamy się po dopuszczalnych x, otrzymujemy odpowiadające im wartości y. Zbiór wszystkich wejść tworzy D, a wszystkich wyjść — Zw.',
  'Stałe tempo zmiany opisuje a. Wartość początkową dla x=0 opisuje b. Połączenie obu informacji daje f(x)=ax+b.',
  'Na prostej stosunek zmiany pionowej do poziomej jest wszędzie taki sam. Ten stały iloraz nazywamy współczynnikiem kierunkowym.',
  'Podstawiamy x=0 do f(x)=ax+b. Otrzymujemy f(0)=a·0+b=b, więc punkt przecięcia osi Oy ma współrzędne (0,b).',
  'Punkt na osi Ox ma wysokość y=0. Zatem szukamy x spełniającego ax+b=0, skąd dla a≠0 otrzymujemy x=−b/a.',
  'Dwa punkty pozwalają policzyć stałe tempo zmiany a. Następnie równanie y=ax+b uzupełniamy o współrzędne jednego punktu i obliczamy b.',
  'Proste równoległe mają jednakowy przyrost y dla tego samego przyrostu x. Obrót o 90° zmienia nachylenie na liczbę przeciwną i odwrotną.',
  'Parametr działa jak przełącznik wartości współczynników. Jeśli u(m) znika, znika też składnik z x i trzeba zbadać funkcję stałą f(x)=v(m).'
],quadratic:[
  'Najwyższa potęga x wynosi dwa, dlatego tempo zmiany nie jest stałe jak w funkcji liniowej. Punkty układają się w symetryczną parabolę.',
  'Składnik ax² dominuje dla dużych |x|. Jego znak decyduje, czy wartości rosną do +∞, czy maleją do −∞, a moduł a skaluje wykres pionowo.',
  'Delta pojawia się po doprowadzeniu równania kwadratowego do postaci umożliwiającej wyciągnięcie pierwiastka. Jej znak mówi, czy pierwiastek jest rzeczywisty.',
  'Rozwiązujemy ax²+bx+c=0. Po przekształceniu otrzymujemy dwa warianty wynikające ze znaku ± przed √Δ.',
  'Punkty symetryczne paraboli mają tę samą wartość, dlatego środek między miejscami zerowymi leży na osi x=p. Podstawienie p daje q.',
  'Po lewej i prawej stronie osi symetrii wartości zmieniają się w przeciwnych kierunkach. Wierzchołek jest granicą osiąganych wartości.',
  'Rozwinięcie nawiasów w postaci kanonicznej lub iloczynowej prowadzi do ax²+bx+c. To różne sposoby zapisania tej samej zależności.',
  'Wzór bazowy y=ax² ma wierzchołek (0,0). Zastąpienie x przez x−p przesuwa argumenty, a dodanie q przesuwa wszystkie wartości.',
  'Dla każdej dopuszczalnej wartości m otrzymujemy konkretne równanie. Liczbę jego rozwiązań klasyfikujemy tak samo jak bez parametru — znakiem delty.'
],sequences:[
  'Ciąg jest funkcją, więc każdemu indeksowi n odpowiada dokładnie jedna wartość aₙ. Indeks porządkuje wyrazy i pozwala odwołać się do wybranej pozycji.',
  'Wzór ogólny zamienia numer pozycji na wartość. Porównanie wzorów dla n+1 i n pokazuje, jak zmieniają się kolejne wyrazy.',
  'Jeśli za każdym razem dodajemy tę samą liczbę, różnica kolejnych wyrazów jest stała. To właśnie definicja ciągu arytmetycznego.',
  'Pierwszy wyraz jest już dany. Aby dojść do drugiego, wykonujemy jeden krok r, a do n-tego dokładnie n−1 takich kroków.',
  'Po zapisaniu sumy w normalnej i odwrotnej kolejności każda para skrajnych wyrazów daje a₁+aₙ. Dodanie obu zapisów prowadzi do wzoru na Sₙ.',
  'Każde przejście oznacza mnożenie przez q. Po n−1 przejściach czynnik q został użyty n−1 razy, stąd potęga qⁿ⁻¹.',
  'Po pomnożeniu sumy przez q większość składników się redukuje. Pozostają pierwszy i wyraz po ostatnim, co prowadzi do wzoru z 1−q.',
  'Rekurencja opisuje proces krok po kroku: znamy start i operację. Dlatego a₂ zależy od a₁, a₃ od a₂ i tak dalej.',
  'Po każdym okresie nowa wartość staje się podstawą kolejnej zmiany. Powtarzane mnożenie przez 1+p tworzy potęgę i ciąg geometryczny.'
]};

const knowledgeTakeaways={linear:[
  'Funkcja: jedno wejście x daje dokładnie jedno wyjście y.',
  'Dziedzina mówi, co można wstawić; zbiór wartości — co może wyjść.',
  'W funkcji liniowej a odpowiada za kierunek, a b za wysokość startową.',
  'Znak a wystarcza do określenia monotoniczności funkcji liniowej.',
  'b odczytasz na osi Oy w punkcie (0,b).',
  'Miejsce zerowe leży na osi Ox i spełnia f(x₀)=0.',
  'Dwa punkty wyznaczają jedną niepionową prostą.',
  'Równoległe: to samo a. Prostopadłe: iloczyn a równy −1.',
  'Przy parametrze najpierw sprawdź, kiedy współczynnik przy x jest zerem.'
],quadratic:[
  'Funkcja kwadratowa ma postać ax²+bx+c z koniecznym warunkiem a≠0.',
  'Znak a daje kierunek ramion, a |a| pomaga porównać ich szerokość.',
  'Znak delty od razu podaje liczbę rzeczywistych miejsc zerowych.',
  'Miejsca zerowe leżą na osi Ox i spełniają równanie f(x)=0.',
  'Wierzchołek W=(p,q), a oś symetrii ma równanie x=p.',
  'p rozdziela monotoniczność, a q wyznacza granicę zbioru wartości.',
  'Ogólna: współczynniki. Kanoniczna: wierzchołek. Iloczynowa: miejsca zerowe.',
  'W a(x−p)²+q odczytuj p przeciwnie do znaku w nawiasie, a q zgodnie.',
  'Przy parametrze połącz warunek na deltę z warunkiem a(m)≠0.'
],sequences:[
  'Indeks mówi, który to wyraz; aₙ mówi, jaką ma wartość.',
  'Wzór ogólny pozwala przejść bezpośrednio do dowolnego wyrazu.',
  'Arytmetyczny oznacza stałą różnicę r między kolejnymi wyrazami.',
  'We wzorze aₙ=a₁+(n−1)r zawsze pilnuj liczby n−1.',
  'Suma arytmetyczna to liczba wyrazów razy średnia pierwszego i ostatniego.',
  'Geometryczny oznacza stałe mnożenie przez q, a nie stałe dodawanie.',
  'Dla q=1 sumę licz osobno: Sₙ=n·a₁.',
  'Rekurencja potrzebuje reguły i wartości początkowej.',
  'Procent składany to ciąg geometryczny ze współczynnikiem 1±p.'
]};

const advancedKnowledge={
  equations:[
    ['Równanie i przekształcenia równoważne','Równanie porównuje dwa wyrażenia. Przekształcenie jest równoważne, gdy nie zmienia zbioru rozwiązań.','L(x)=P(x)','Tę samą dozwoloną operację wykonujemy po obu stronach równania.','3x+5=17 ⇔ 3x=12 ⇔ x=4.',['L(x) — lewa strona','P(x) — prawa strona','x — niewiadoma'],['Do obu stron dodajemy lub odejmujemy to samo wyrażenie.','Obie strony wolno mnożyć lub dzielić przez tę samą liczbę różną od zera.'],'Nie dziel równania przez wyrażenie, które może być zerem.','Równość działa jak waga: identyczna operacja po obu stronach zachowuje równowagę.','Każdy zapis w łańcuchu musi mieć dokładnie ten sam zbiór rozwiązań.','a-linear-basic'],
    ['Równania liniowe','Po uporządkowaniu równanie liniowe przyjmuje postać ax=b. Liczba rozwiązań zależy od współczynnika a.','ax=b, a≠0 ⇒ x=b/a','Dla a≠0 istnieje jedno rozwiązanie x=b/a. Dla a=0 trzeba rozpatrzyć przypadek osobno.','2x−6=0, więc 2x=6 i x=3.',['a — współczynnik przy x','b — liczba po drugiej stronie','x — szukana liczba'],['a≠0: jedno rozwiązanie.','a=0 i b≠0: brak rozwiązań.','a=0 i b=0: nieskończenie wiele rozwiązań.'],'Zapis 0x=0 nie prowadzi do x=0 — spełnia go każda liczba.','Po zebraniu wyrazów z x po jednej stronie zostaje porównanie ax=b.','Najpierw uporządkuj równanie, dopiero potem dziel przez współczynnik przy x.','a-linear-basic'],
    ['Równania z ułamkami','Mianowniki usuwamy przez pomnożenie całego równania przez ich najmniejszą wspólną wielokrotność.','NWW mianowników · całe równanie','Każdy składnik równania musi zostać pomnożony przez wybraną liczbę.','(x−1)/3+(x+2)/2=4; mnożymy wszystko przez 6.',['NWW — najmniejsza wspólna wielokrotność','licznik — wyrażenie nad kreską','mianownik — liczba pod kreską'],['Przy mianowniku zawierającym x najpierw zapisz dziedzinę.','Po usunięciu mianowników uprość nawiasy i wyrazy podobne.'],'Nie mnoż tylko składników z ułamkiem — mnożymy obie strony i każdy składnik.','Liczba podzielna przez każdy mianownik skraca wszystkie ułamki w jednym kroku.','Najpierw NWW, potem nawiasy, na końcu zwykłe równanie liniowe.','a-linear-fractions'],
    ['Układy równań','Rozwiązaniem układu jest para liczb spełniająca jednocześnie każde równanie. Możemy użyć podstawiania albo eliminacji.','(x,y) spełnia oba równania','Metoda eliminacji usuwa niewiadomą przez dodanie odpowiednio przygotowanych równań.','x+y=7 i x−y=1 daje 2x=8, zatem (x,y)=(4,3).',['x,y — dwie niewiadome','para (x,y) — rozwiązanie','punkt wspólny — interpretacja wykresów'],['Układ może mieć jedno, zero albo nieskończenie wiele rozwiązań.','Wynik trzeba sprawdzić w obu równaniach.'],'Wyznaczenie samego x nie kończy zadania — potrzebna jest cała para.','Punkt przecięcia wykresów ma współrzędne spełniające oba równania.','Rozwiązanie układu zawsze zapisuj jako uporządkowaną parę (x,y).','a-system-elimination'],
    ['Równania kwadratowe i delta','Równanie ax²+bx+c=0, gdzie a≠0, może mieć zero, jedno albo dwa rozwiązania rzeczywiste.','Δ=b²−4ac','Znak delty określa liczbę rozwiązań przed ich obliczeniem.','Dla x²−5x+6=0 mamy Δ=1 i rozwiązania 2 oraz 3.',['a,b,c — współczynniki','Δ — wyróżnik','x₁,x₂ — rozwiązania'],['a musi być różne od zera.','Δ>0: dwa rozwiązania; Δ=0: jedno; Δ<0: brak rzeczywistych.'],'We wzorze cały licznik −b±√Δ dzielimy przez 2a.','Po domknięciu kwadratu pojawia się liczba b²−4ac, której znak decyduje o istnieniu pierwiastka.','Najpierw odczytaj a,b,c i policz deltę; dopiero potem wybierz właściwy wzór.','a-quadratic-equation'],
    ['Równania iloczynowe','Iloczyn jest równy zero wtedy i tylko wtedy, gdy co najmniej jeden jego czynnik jest zerem.','A(x)·B(x)=0 ⇔ A(x)=0 lub B(x)=0','Każdy czynnik tworzy osobne, prostsze równanie.','(x−2)(x+5)=0 daje x=2 lub x=−5.',['A(x),B(x) — czynniki','x — wspólna niewiadoma','lub — suma zbiorów rozwiązań'],['Najpierw jedna strona równania musi być równa zero.','Każdy czynnik przyrównujemy do zera osobno.'],'Zasady iloczynu zerowego nie stosujemy, gdy po drugiej stronie nie ma zera.','Jeśli iloczyn liczb jest zerem, przynajmniej jedna z nich musi być zerem.','Doprowadź do iloczynu równego zero i nie pomijaj żadnego czynnika.','a-product-equation'],
    ['Nierówności liniowe, przedziały i |x|','Rozwiązaniem nierówności jest zwykle przedział. Mnożenie lub dzielenie przez liczbę ujemną odwraca znak nierówności.','−x<3 ⇔ x>−3','Wartość bezwzględna opisuje odległość od zera, dlatego |x|<a wyznacza środek przedziału.','|x|<4 oznacza −4<x<4.',['<,> — końce wyłączone','≤,≥ — końce włączone','|x| — odległość od zera'],['Przy dzieleniu przez liczbę ujemną odwróć znak.','Dla a>0: |x|<a ⇔ −a<x<a.'],'Wynik nierówności zapisujemy jako zbiór, a nie pojedynczą liczbę.','Kierunek porządku zmienia się po pomnożeniu obu stron przez liczbę ujemną.','Po rozwiązaniu pokaż wynik na osi albo zapisz go jako przedział.','a-linear-inequality'],
    ['Nierówności kwadratowe','Znak trójmianu odczytujemy z kierunku ramion paraboli oraz miejsc zerowych.','a(x−x₁)(x−x₂) ≷ 0','Miejsca zerowe dzielą oś na przedziały o stałym znaku funkcji.','x²−4<0 daje −2<x<2.',['a — kierunek ramion','x₁,x₂ — granice przedziałów','znak nierówności — szukany obszar'],['Najpierw przenieś wszystko na jedną stronę.','Przy ≤ lub ≥ miejsca zerowe należą do rozwiązania.'],'Nie rozwiązuj nierówności kwadratowej tak jak równania — potrzebny jest cały zbiór przedziałów.','Parabola przechodzi przez oś w miejscach zerowych, a między nimi lub na zewnątrz ma określony znak.','Narysuj szkic paraboli i zaznacz obszar nad albo pod osią.','a-quadratic-inequality'],
    ['Dziedzina i równania wymierne','Dziedzina wyklucza liczby zerujące mianownik. Dopiero potem wolno usuwać mianowniki.','M(x)≠0','Otrzymany wynik musi należeć do dziedziny równania wyjściowego.','4/(x−1)=2, x≠1; stąd x=3.',['M(x) — mianownik','D — dziedzina','wynik obcy — liczba niedozwolona'],['Dziedzinę zapisujemy przed przekształceniami.','Na końcu porównujemy każdy wynik z wykluczeniami.'],'Skrócenie czynnika nie przywraca liczby wcześniej wykluczonej z dziedziny.','Dzielenie przez zero nie ma sensu, więc zera mianownika nigdy nie mogą być rozwiązaniami.','Dziedzina → rozwiązanie → sprawdzenie wyniku w dziedzinie.','a-rational-equation'],
    ['Parametr i liczba rozwiązań','Parametr zmienia współczynniki równania. Szukamy jego wartości spełniających podany warunek o rozwiązaniach.','liniowe: a(m)=0 · kwadratowe: Δ(m) ≷ 0','W równaniu kwadratowym najpierw sprawdzamy, czy współczynnik przy x² nie znika.','x²+mx+1=0 ma dwa rozwiązania, gdy m²−4>0.',['m — parametr','a(m) — współczynnik zależny od m','Δ(m) — wyróżnik zależny od m'],['Rozpatrz osobno wartości zmieniające stopień równania.','Warunek Δ dotyczy tylko równania pozostającego kwadratowym.'],'Nie kończ na warunku z deltą, jeśli parametr może wyzerować współczynnik przy x².','Każda wartość parametru tworzy inne równanie; klasyfikujemy je według liczby rozwiązań.','Najpierw przypadek szczególny, następnie delta lub warunek na współczynnik.','a-parameter-linear']
  ],
  trigonometry:[
    ['Kąt i boki trójkąta prostokątnego','Nazwy boków zależą od wybranego kąta ostrego. Przeciwprostokątna zawsze leży naprzeciw kąta 90°.','0°<α<90°','Najpierw zaznacz kąt α, potem podpisz bok naprzeciw, przy kącie i przeciwprostokątną.','W trójkącie 3–4–5 bok 5 jest przeciwprostokątną.',['α — wybrany kąt ostry','c — przeciwprostokątna','a,b — przyprostokątne'],['Trójkąt musi być prostokątny.','Przeciwprostokątna jest najdłuższym bokiem.'],'Bok „naprzeciw” dla jednego kąta jest bokiem „przy” dla drugiego.','Nazwy przyprostokątnych wynikają z ich położenia względem wybranego kąta.','Bez podpisania boków łatwo zamienić sinus z cosinusem.','t-right-training'],
    ['Sinus kąta ostrego','Sinus porównuje przyprostokątną leżącą naprzeciw kąta z przeciwprostokątną.','sinα=naprzeciw/przeciwprostokątna','Sinus jest ilorazem dwóch długości, dlatego nie ma jednostki.','Dla boków 3–4–5 i kąta naprzeciw 3: sinα=3/5.',['α — kąt','a — bok naprzeciw','c — przeciwprostokątna'],['W trójkącie prostokątnym 0<sinα<1.','W liczniku stoi bok naprzeciw kąta.'],'Nie dziel przeciwprostokątnej przez przyprostokątną — iloraz jest zawsze mniejszy od 1.','Dwa podobne trójkąty mają ten sam iloraz odpowiadających boków, więc sinus zależy tylko od kąta.','Sinus: naprzeciw do najdłuższego boku.','t-right-training'],
    ['Cosinus kąta ostrego','Cosinus porównuje przyprostokątną przylegającą do kąta z przeciwprostokątną.','cosα=przy kącie/przeciwprostokątna','Zmiana wybranego kąta zamienia role dwóch przyprostokątnych.','Dla boków 3–4–5 i kąta przy boku 4: cosα=4/5.',['α — kąt','b — bok przy kącie','c — przeciwprostokątna'],['W trójkącie prostokątnym 0<cosα<1.','Mianownikiem jest przeciwprostokątna.'],'Bok przy kącie nie może być przeciwprostokątną — chodzi o przyprostokątną dotykającą α.','Cosinus jest stałym ilorazem boku przy kącie do najdłuższego boku.','Cosinus: przy kącie do najdłuższego boku.','t-right-training'],
    ['Tangens kąta ostrego','Tangens porównuje obie przyprostokątne i nie wykorzystuje przeciwprostokątnej.','tgα=naprzeciw/przy kącie','Tangens opisuje nachylenie kierunku tworzącego kąt α.','Dla boków 3 i 4: tgα=3/4.',['α — kąt','a — bok naprzeciw','b — bok przy kącie'],['Dla kąta ostrego tgα>0.','Mianownik nie może być zerem.'],'Tangens to nie iloraz z przeciwprostokątną.','Stosunek wzrostu pionowego do przesunięcia poziomego jest taki sam w podobnych trójkątach.','Tangens łączy wyłącznie dwie przyprostokątne.','t-right-training'],
    ['Wartości szczególne 30°, 45°, 60°','Dokładne wartości wynikają z trójkąta równobocznego i równoramiennego prostokątnego.','sin30°=1/2 · cos45°=√2/2 · tg60°=√3','Wartości zapisujemy dokładnie, bez przedwczesnego zaokrąglania.','cos60°=1/2, sin60°=√3/2, tg45°=1.',['30°,45°,60° — kąty szczególne','√2,√3 — wartości dokładne','tg — tangens'],['Sinus i cosinus należą do [−1,1].','Dla kątów ostrych wszystkie wartości są dodatnie.'],'Nie zamieniaj wartości sin30° z sin60°.','Dwa charakterystyczne trójkąty pozwalają odtworzyć całą tabelę wartości.','Wartości szczególne zapisuj dokładnie z pierwiastkiem.','t-identity-training'],
    ['Tożsamość trygonometryczna','Kwadraty sinusa i cosinusa tego samego kąta sumują się do jedności.','sin²α+cos²α=1','Dla kąta ostrego wybieramy dodatni pierwiastek.','Jeśli sinα=3/5, to cosα=4/5.',['sin²α — (sinα)²','cos²α — (cosα)²','α — ten sam kąt'],['Obie funkcje muszą dotyczyć tego samego kąta.','Znak pierwiastka zależy od położenia kąta.'],'Nie zapisuj sin²α jako sin(α²).','Tożsamość wynika z twierdzenia Pitagorasa po podzieleniu przez kwadrat przeciwprostokątnej.','Jeden iloraz i informacja o kącie pozwalają obliczyć drugi.','t-identity-training'],
    ['Twierdzenie sinusów','W dowolnym trójkącie bok łączymy z sinusem kąta leżącego dokładnie naprzeciw niego.','a/sinα=b/sinβ=c/sinγ','Wybierz parę bok–kąt, w której znane są oba elementy.','Jeśli a/sin30°=10, to a=5.',['a,b,c — boki','α,β,γ — kąty naprzeciw boków','R — promień okręgu opisanego'],['Pary bok–kąt muszą leżeć naprzeciw siebie.','Twierdzenie działa w dowolnym trójkącie.'],'Nie łącz boku z kątem przyległym.','Wszystkie trzy ilorazy są równe średnicy okręgu opisanego na trójkącie.','Najpierw zaznacz pary leżące naprzeciw siebie.','t-laws-training'],
    ['Twierdzenie cosinusów','Twierdzenie cosinusów łączy trzy boki i kąt zawarty między dwoma znanymi bokami.','c²=a²+b²−2ab·cosγ','Dla γ=90° składnik z cosinusem znika i otrzymujemy Pitagorasa.','Dla a=5,b=7,γ=60° mamy c²=39.',['c — bok naprzeciw γ','a,b — boki tworzące γ','γ — kąt zawarty'],['Kąt γ musi leżeć naprzeciw szukanego boku c.','Dla kąta rozwartego cosγ jest ujemny.'],'Pilnuj minusa przed 2ab·cosγ.','Rzut jednego boku na kierunek drugiego koryguje sumę kwadratów o składnik z cosinusem.','Zawsze sparuj kąt z bokiem po przeciwnej stronie.','t-laws-training'],
    ['Pole z sinusem kąta','Pole dowolnego trójkąta można obliczyć z dwóch boków i sinusa kąta zawartego między nimi.','P=½ab·sinγ','Wysokość opuszczona na bok a ma długość b·sinγ.','Dla a=6,b=8,γ=30° pole wynosi 12.',['P — pole','a,b — dwa boki','γ — kąt między nimi'],['Kąt musi być zawarty między użytymi bokami.','Jednostkę długości podnosimy do kwadratu.'],'Nie używaj kąta leżącego naprzeciw jednego z wybranych boków.','Wzór P=½ah oraz h=b·sinγ razem dają P=½ab·sinγ.','Dwa boki i kąt między nimi wystarczą do obliczenia pola.','t-laws-training']
  ],
  planimetry:[
    ['Trójkąt i suma kątów','W każdym trójkącie suma miar kątów wewnętrznych wynosi 180°. Długości boków spełniają nierówność trójkąta.','α+β+γ=180°','Najdłuższemu bokowi odpowiada największy kąt.','Jeśli kąty mają 50° i 60°, trzeci ma 70°.',['α,β,γ — kąty','a,b,c — boki naprzeciw','obwód — suma boków'],['Suma dwóch boków musi być większa od trzeciego.','Kąty wewnętrzne są dodatnie.'],'Trzy dodatnie długości nie zawsze tworzą trójkąt.','Prosta równoległa do jednego boku pokazuje, że kąty można złożyć w kąt półpełny.','Najpierw sprawdź, czy figura może istnieć.','p-triangles-training'],
    ['Twierdzenie Pitagorasa','W trójkącie prostokątnym suma kwadratów przyprostokątnych równa się kwadratowi przeciwprostokątnej.','a²+b²=c²','Bok c leży naprzeciw kąta prostego i jest najdłuższy.','Dla przyprostokątnych 3 i 4 otrzymujemy c=5.',['a,b — przyprostokątne','c — przeciwprostokątna','90° — wymagany kąt'],['Twierdzenie działa tylko w trójkącie prostokątnym.','Odwrotność pozwala sprawdzić, czy trójkąt jest prostokątny.'],'Nie sumuj długości boków — sumujemy ich kwadraty.','Kwadraty długości odpowiadają polom kwadratów zbudowanych na bokach.','Przed użyciem wskaż przeciwprostokątną.','p-triangles-training'],
    ['Pole trójkąta','Pole to połowa iloczynu boku i wysokości opuszczonej prostopadle na ten bok.','P=½a·hₐ','Dowolny bok może być podstawą, ale trzeba dobrać odpowiadającą mu wysokość.','Dla a=8 i hₐ=5 pole wynosi 20.',['a — wybrana podstawa','hₐ — wysokość na bok a','P — pole'],['Wysokość jest prostopadła do prostej zawierającej podstawę.','W trójkącie rozwartokątnym wysokość może leżeć poza figurą.'],'Nie łącz boku z wysokością opuszczoną na inny bok.','Dwa jednakowe trójkąty tworzą równoległobok o polu a·h.','Podstawa i odpowiadająca jej wysokość zawsze tworzą parę.','p-triangles-training'],
    ['Trójkąt równoboczny i szczególny','W trójkącie równobocznym wszystkie boki i kąty są równe. Wysokość dzieli go na dwa trójkąty 30°–60°–90°.','h=a√3/2 · P=a²√3/4','Wysokość jest jednocześnie medianą i dwusieczną.','Dla a=4 pole wynosi 4√3.',['a — bok','h — wysokość','60° — każdy kąt'],['Wszystkie środki szczególne pokrywają się.','Wysokość dzieli podstawę na połowy.'],'Nie używaj wzoru a²√3/4 dla dowolnego trójkąta.','Pitagoras w połowie trójkąta daje h²=a²−(a/2)².','Wzory z √3 dotyczą wyłącznie trójkąta równobocznego.','p-triangles-training'],
    ['Podobieństwo figur','Figury podobne mają równe kąty odpowiadające i proporcjonalne długości.','długości: k · pola: k²','Obwody zmieniają się jak k, a pola jak kwadrat skali.','Przy k=3 pole rośnie 9 razy.',['k — skala podobieństwa','P₁,P₂ — pola','O₁,O₂ — obwody'],['Odpowiadające elementy zapisujemy w tej samej kolejności.','Przystawanie jest podobieństwem w skali k=1.'],'Nie stosuj skali k do pól — pola zmieniają się k² razy.','Figura powiększona k razy w dwóch niezależnych kierunkach ma pole k·k razy większe.','Długości: k, pola: k².','p-similarity-training'],
    ['Czworokąty i ich pola','Pole czworokąta obliczamy wzorem dobranym do jego konstrukcji: boków, wysokości albo przekątnych.','trapez: P=(a+b)h/2','Przekątna często dzieli czworokąt na dwa prostsze trójkąty.','Trapez o podstawach 6 i 10 oraz h=4 ma pole 32.',['a,b — równoległe podstawy','h — wysokość','e,f — przekątne rombu'],['Wysokość jest prostopadła do podstaw.','W rombie P=ef/2.'],'W trapezie sumujemy podstawy, a nie ramiona.','Trapez jest połową równoległoboku zbudowanego z dwóch jednakowych kopii.','Najpierw rozpoznaj figurę i dostępne dane.','p-similarity-training'],
    ['Okrąg i koło','Okrąg jest brzegiem koła. Jego długość zależy od r, a pole koła od r².','l=2πr · P=πr²','Średnica ma długość d=2r.','Dla r=3 długość wynosi 6π, a pole 9π.',['r — promień','d — średnica','π — stała kołowa'],['Pole zapisujemy w jednostkach kwadratowych.','Długość łuku jest odpowiednią częścią pełnego obwodu.'],'Nie zamieniaj długości okręgu z polem koła.','Obwód rośnie liniowo z promieniem, a pole jak kwadrat skali.','Okrąg ma długość, a koło ma pole.','p-circle-training'],
    ['Kąty środkowe, wpisane i Tales','Kąt wpisany oparty na tym samym łuku ma połowę miary kąta środkowego. Kąt oparty na średnicy jest prosty.','αwpisany=½αśrodkowego','Zależność działa tylko dla kątów opartych na tym samym łuku.','Kąt środkowy 120° daje kąt wpisany 60°.',['łuk — wspólna część okręgu','αś — kąt środkowy','αw — kąt wpisany'],['Wierzchołek kąta wpisanego leży na okręgu.','Średnica wyznacza łuk o mierze 180°.'],'Najpierw sprawdź wspólny łuk, dopiero potem dziel przez dwa.','Kąt środkowy widzi cały obrót między promieniami, a wpisany ten sam łuk z brzegu okręgu.','Ten sam łuk oznacza prostą zależność 2:1.','p-circle-training'],
    ['Styczna do okręgu','Promień poprowadzony do punktu styczności jest prostopadły do stycznej.','OS ⟂ styczna','Odcinki styczne poprowadzone z jednego punktu zewnętrznego mają równe długości.','Jeśli PT i PS są styczne z punktu P, to PT=PS.',['O — środek okręgu','S — punkt styczności','PS — odcinek styczny'],['Promień musi kończyć się w punkcie styczności.','Powstający trójkąt jest prostokątny.'],'Nie każdy promień jest prostopadły do dowolnej prostej stycznej.','Najkrótsza odległość środka od stycznej biegnie po promieniu i tworzy kąt prosty.','Zaznacz promień do punktu styczności — natychmiast otrzymujesz 90°.','p-circle-training'],
    ['Okrąg wpisany i opisany','Środek okręgu wpisanego jest przecięciem dwusiecznych, a opisanego — symetralnych boków.','P=rs · P=abc/(4R)','Promień okręgu wpisanego jest prostopadły do każdego boku w punkcie styczności.','W trójkącie prostokątnym środek okręgu opisanego leży w połowie przeciwprostokątnej.',['r — promień wpisany','R — promień opisany','s — połowa obwodu'],['Okrąg wpisany dotyka wszystkich boków.','Okrąg opisany przechodzi przez wszystkie wierzchołki.'],'Nie zamieniaj dwusiecznych z symetralnymi.','Równe odległości od boków prowadzą do dwusiecznych, a równe odległości od wierzchołków do symetralnych.','Wpisany: boki i dwusieczne. Opisany: wierzchołki i symetralne.','p-circle-training']
  ]
};
Object.entries(advancedKnowledge).forEach(([course,guides])=>{
  knowledgeBase[course].definitions=guides.map(item=>[item[0],item[1]]);
  knowledgeBase[course].formulas=guides.map(item=>item[2]);
  knowledgeTopicFormulas[course]=guides.map(item=>item[2]);
  knowledgeTopicNotes[course]=guides.map(item=>item[3]);
  knowledgeTopicExamples[course]=guides.map(item=>item[4]);
  knowledgeTopicSymbols[course]=guides.map(item=>item[5]);
  knowledgeTopicConditions[course]=guides.map(item=>item[6]);
  knowledgeTopicTraps[course]=guides.map(item=>item[7]);
  knowledgeDerivations[course]=guides.map(item=>item[8]);
  knowledgeTakeaways[course]=guides.map(item=>item[9]);
});

function knowledgeAnimationControls(){return `<div class="kb-animation-controls"><button class="kb-replay" data-kb-replay type="button" aria-label="Odtwórz animację ponownie"><span>↻</span> Od początku</button><button class="kb-replay kb-pause" data-kb-pause type="button" aria-pressed="false" aria-label="Wstrzymaj animację"><span>Ⅱ</span> Pauza</button></div>`;}
function linearKnowledgeVisual(index){
  const replayButton=knowledgeAnimationControls();
  if(index===0)return `<section class="kb-visual-card is-replaying" data-kb-visual><div class="kb-visual-title"><div><span>SCHEMAT FUNKCJI</span><b>Jedno wejście → jedna wartość</b></div>${replayButton}</div><div class="kb-map"><div><small>ARGUMENT</small><strong>x = 3</strong></div><i>→</i><div class="machine"><small>REGUŁA</small><strong>2x + 1</strong></div><i>→</i><div><small>WARTOŚĆ</small><strong>y = 7</strong></div></div><div class="kb-animation-note"><i>1</i><span>Wstawiamy argument <b>x = 3</b>, wykonujemy działanie i otrzymujemy dokładnie jedną wartość <b>y = 7</b>.</span></div></section>`;
  if(index===1)return `<section class="kb-visual-card is-replaying" data-kb-visual><div class="kb-visual-title"><div><span>MAPA ZBIORÓW</span><b>Co wchodzi i co wychodzi?</b></div>${replayButton}</div><div class="kb-sets"><div><small>DZIEDZINA D</small><b>0</b><b>1</b><b>2</b></div><svg viewBox="0 0 170 120" aria-label="Strzałki przyporządkowania"><path d="M10 20 C70 20 100 20 160 20M10 60 C70 60 100 60 160 60M10 100 C70 100 100 100 160 100"/><path d="m148 13 12 7-12 7m0 26 12 7-12 7m0 26 12 7-12 7"/></svg><div><small>ZBIÓR WARTOŚCI</small><b>−1</b><b>1</b><b>3</b></div></div><div class="kb-animation-note"><i>2</i><span>Każda strzałka prowadzi od jednego argumentu do jednej wartości. To najprostszy test, czy przyporządkowanie jest funkcją.</span></div></section>`;
  const graphBodies=[
    `<path class="line main" d="M95 210 L430 42"/><text x="332" y="58">f(x)=ax+b</text>`,
    `<path class="line main" d="M105 215 L425 55"/><circle cx="185" cy="175" r="6"/><circle cx="345" cy="95" r="6"/><path class="helper" d="M185 175 H345 V95"/><text x="245" y="194">Δx</text><text x="354" y="138">Δy</text>`,
    `<path class="line main" d="M92 220 L430 52"/><circle class="point pink" cx="260" cy="136" r="7"/><text x="276" y="124">(0,b)</text><path class="helper pink" d="M260 136 H228"/>`,
    `<path class="line main" d="M92 50 L430 220"/><circle class="point green" cx="310" cy="160" r="7"/><text x="322" y="185">(x₀,0)</text><path class="helper green" d="M310 160 V180"/>`,
    `<path class="line main" d="M105 210 L425 50"/><circle cx="145" cy="190" r="6"/><circle cx="385" cy="70" r="6"/><text x="110" y="215">A</text><text x="398" y="70">B</text><path class="helper" d="M145 190 H385 V70"/><text x="250" y="210">x₂−x₁</text><text x="395" y="138">y₂−y₁</text>`,
    `<path class="line main" d="M80 205 L430 65"/><path class="line second" d="M80 150 L430 10"/><path class="line perpendicular" d="M170 25 L345 220"/><text x="340" y="46">a₁=a₂</text><text x="95" y="48">a₁a₃=−1</text>`,
    `<path class="line faded" d="M105 215 L420 55"/><path class="line faded" d="M80 180 L440 90"/><path class="line faded" d="M120 45 L405 220"/><path class="line main" d="M75 138 H445"/><text x="300" y="125">u(m)=0</text><text x="300" y="154">y=v(m)</text>`
  ];
  const captions=['Współczynniki a i b budują jeden wykres.','Nachylenie to stały iloraz Δy do Δx.','Wyraz wolny odczytujemy na osi Oy.','Miejsce zerowe odczytujemy na osi Ox.','Dwa punkty wyznaczają nachylenie i wzór.','Równe nachylenia oraz kąt prosty między prostymi.','Parametr może zmienić prostą ukośną w poziomą.'];
  const readouts=['Odczytaj dwa elementy: kierunek prostej wyznacza a, a przecięcie osi Oy wyznacza b.','Najpierw zaznaczamy zmianę poziomą Δx, potem pionową Δy. Ich iloraz daje współczynnik a.','Różowy punkt pojawia się dokładnie na osi Oy. Jego wysokość jest równa b.','Zielony punkt leży na osi Ox, dlatego jego druga współrzędna i wartość funkcji są równe zero.','Punkty A i B tworzą trójkąt pomocniczy. Z jego boków odczytujemy różnice współrzędnych.','Pomarańczowa prosta ma to samo nachylenie, a zielona przecina niebieską pod kątem prostym.','Gdy parametr wyzeruje współczynnik przy x, ukośna prosta zmienia się w funkcję stałą.'];
  const body=graphBodies[index-2]||graphBodies[0],caption=captions[index-2]||captions[0],readout=readouts[index-2]||readouts[0];
  const ticks=`<g class="ticks"><text x="94" y="179">−4</text><text x="174" y="179">−2</text><text x="252" y="179">0</text><text x="334" y="179">2</text><text x="414" y="179">4</text><text x="239" y="84">2</text><text x="235" y="44">3</text><text x="235" y="204">−1</text></g>`;
  return `<section class="kb-visual-card graph is-replaying" data-kb-visual><div class="kb-visual-title"><div><span>ANIMOWANY WYKRES</span><b>${caption}</b></div>${replayButton}</div><svg viewBox="0 0 520 270" role="img" aria-label="${caption}"><defs><pattern id="kbGrid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40"/></pattern></defs><rect x="60" y="20" width="400" height="220" rx="12" class="plot-bg"/><rect x="60" y="20" width="400" height="220" rx="12" fill="url(#kbGrid)"/><path class="axis" d="M60 160 H465 M260 240 V15"/><path class="axis-tip" d="m453 153 12 7-12 7M253 27l7-12 7 12"/><text class="axis-label" x="445" y="148">x</text><text class="axis-label" x="272" y="36">y</text>${ticks}${body}</svg><div class="kb-animation-note"><i>▶</i><span>${readout}</span></div></section>`;
}
function quadraticKnowledgeVisual(index){
  const replayButton=knowledgeAnimationControls();
  const bodies=[
    `<path class="line parabola main" d="M120 40 Q260 360 400 40"/><circle class="point pink" cx="260" cy="200" r="7"/><text x="274" y="216">wierzchołek</text>`,
    `<path class="line parabola main" d="M120 40 Q260 360 400 40"/><path class="line parabola second" d="M120 220 Q260 -100 400 220"/><text x="356" y="55">a&gt;0</text><text x="356" y="218">a&lt;0</text>`,
    `<path class="line parabola main" d="M100 20 Q260 346 420 20"/><path class="line parabola second" d="M120 10 Q260 310 400 10"/><path class="line parabola no-roots" d="M120 0 Q260 230 400 0"/><text x="76" y="50">Δ&gt;0</text><text x="235" y="222">Δ=0</text><text x="378" y="50">Δ&lt;0</text>`,
    `<path class="line parabola main" d="M100 20 Q260 346 420 20"/><circle class="point green" cx="200" cy="160" r="7"/><circle class="point green" cx="320" cy="160" r="7"/><text x="170" y="185">x₁</text><text x="330" y="185">x₂</text>`,
    `<path class="line parabola main" d="M120 40 Q260 360 400 40"/><path class="helper symmetry" d="M260 28 V230"/><circle class="point pink" cx="260" cy="200" r="7"/><text x="274" y="218">W=(p,q)</text><text x="270" y="60">x=p</text>`,
    `<path class="line parabola main" d="M120 40 Q200 200 260 200"/><path class="line parabola second" d="M260 200 Q320 200 400 40"/><path class="motion-arrow" d="M150 90 L205 174 M370 90 L315 174"/><circle class="point pink" cx="260" cy="200" r="7"/><text x="92" y="72">maleje</text><text x="370" y="72">rośnie</text><text x="274" y="218">q</text>`,
    `<path class="line parabola main" d="M100 20 Q260 346 420 20"/><circle class="point green" cx="200" cy="160" r="6"/><circle class="point green" cx="320" cy="160" r="6"/><circle class="point pink" cx="260" cy="183" r="6"/><text x="170" y="184">x₁</text><text x="328" y="184">x₂</text><text x="270" y="208">W</text>`,
    `<path class="line parabola faded" d="M80 20 Q220 340 360 20"/><path class="line parabola main" d="M180 45 Q320 365 460 45"/><path class="motion-arrow" d="M228 186 C255 190 280 198 307 204"/><circle cx="220" cy="180" r="5"/><circle class="point pink" cx="320" cy="205" r="7"/><text x="104" y="54">y=x²</text><text x="335" y="225">(p,q)</text>`,
    `<path class="line parabola faded" d="M80 40 Q260 300 440 40"/><path class="line parabola main" d="M120 20 Q260 360 400 20"/><path class="line parabola second" d="M170 20 Q260 380 350 20"/><text x="70" y="70">m₁</text><text x="385" y="70">m₂</text><text x="336" y="35">m₃</text>`
  ];
  const captions=['Parabola jest wykresem funkcji kwadratowej.','Znak a zmienia kierunek ramion.','Delta przewiduje liczbę przecięć z osią Ox.','Miejsca zerowe leżą dokładnie na osi Ox.','Wierzchołek leży na osi symetrii x=p.','Wierzchołek rozdziela dwa kierunki zmian.','Jeden wykres można zapisać w trzech postaciach.','Parametry p i q przesuwają całą parabolę.','Parametr tworzy rodzinę różnych parabol.'];
  const readouts=['Najwyższa potęga x wynosi dwa, dlatego wykres wygina się i tworzy dwie symetryczne gałęzie.','Najpierw porównaj kierunek ramion, a dopiero potem ich szerokość. To dwie różne informacje o liczbie a.','Niebieska parabola przecina oś dwa razy, pomarańczowa jej dotyka, a różowa pozostaje po jednej stronie osi.','Zielone punkty mają współrzędne (x₁,0) i (x₂,0), ponieważ wartość funkcji jest w nich równa zero.','Przerywana prosta przechodzi przez wierzchołek i dzieli parabolę na dwie lustrzane części.','Dla ramion w górę funkcja najpierw maleje, osiąga minimum q, a następnie rośnie.','Punkty charakterystyczne nie zmieniają się po zmianie postaci — zmienia się tylko sposób zapisu wzoru.','Szary wykres bazowy przesuwa się do nowego wierzchołka (p,q), zachowując kształt określony przez a.','Każda wartość parametru może dać inną parabolę. Najpierw sprawdzamy a(m)≠0, potem warunek na deltę.'];
  const ticks=`<g class="ticks"><text x="94" y="179">−4</text><text x="174" y="179">−2</text><text x="252" y="179">0</text><text x="334" y="179">2</text><text x="414" y="179">4</text><text x="239" y="84">2</text><text x="235" y="204">−1</text></g>`;
  return `<section class="kb-visual-card graph quadratic-graph is-replaying" data-kb-visual><div class="kb-visual-title"><div><span>ANIMOWANA PARABOLA</span><b>${captions[index]}</b></div>${replayButton}</div><svg viewBox="0 0 520 270" role="img" aria-label="${captions[index]}"><defs><pattern id="kbQGrid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40"/></pattern></defs><rect x="60" y="20" width="400" height="220" rx="12" class="plot-bg"/><rect x="60" y="20" width="400" height="220" rx="12" fill="url(#kbQGrid)"/><path class="axis" d="M60 160 H465 M260 240 V15"/><path class="axis-tip" d="m453 153 12 7-12 7M253 27l7-12 7 12"/><text class="axis-label" x="445" y="148">x</text><text class="axis-label" x="272" y="36">y</text>${ticks}${bodies[index]}</svg><div class="kb-animation-note"><i>▶</i><span>${readouts[index]}</span></div>${index===6?'<div class="kb-form-tabs"><b>OGÓLNA <span>ax²+bx+c</span></b><b>KANONICZNA <span>a(x−p)²+q</span></b><b>ILOCZYNOWA <span>a(x−x₁)(x−x₂)</span></b></div>':''}</section>`;
}
function sequenceKnowledgeVisual(index){
  const replayButton=knowledgeAnimationControls();
  const visuals=[
    `<div class="seq-rail"><div class="seq-node"><small>INDEKS n</small><b>1</b><span>a₁ = 3</span></div><i class="seq-arrow">→</i><div class="seq-node"><small>INDEKS n</small><b>2</b><span>a₂ = 5</span></div><i class="seq-arrow">→</i><div class="seq-node"><small>INDEKS n</small><b>3</b><span>a₃ = 7</span></div></div>`,
    `<div class="seq-chart"><svg viewBox="0 0 620 210" role="img" aria-label="Rosnące wartości ciągu"><path class="seq-axis" d="M55 170H580M70 188V24"/><path class="seq-line" d="M105 150L210 125L315 96L420 66L525 36"/><g class="seq-points"><circle cx="105" cy="150" r="6"/><circle cx="210" cy="125" r="6"/><circle cx="315" cy="96" r="6"/><circle cx="420" cy="66" r="6"/><circle cx="525" cy="36" r="6"/></g><g class="seq-labels"><text x="96" y="188">1</text><text x="201" y="188">2</text><text x="306" y="188">3</text><text x="411" y="188">4</text><text x="516" y="188">5</text><text x="535" y="29">aₙ rośnie</text></g></svg></div>`,
    `<div class="seq-rail arithmetic"><div class="seq-node"><small>a₁</small><b>7</b></div><i class="seq-arrow"><span>+ r = −3</span>→</i><div class="seq-node"><small>a₂</small><b>4</b></div><i class="seq-arrow"><span>+ r = −3</span>→</i><div class="seq-node"><small>a₃</small><b>1</b></div><i class="seq-arrow"><span>+ r = −3</span>→</i><div class="seq-node"><small>a₄</small><b>−2</b></div></div>`,
    `<div class="seq-steps"><div class="seq-node first"><small>START</small><b>a₁</b></div><div class="seq-jumps"><span>+r</span><span>+r</span><span>…</span><span>+r</span><strong>łącznie n−1 kroków</strong></div><div class="seq-node last"><small>CEL</small><b>aₙ</b><span>a₁+(n−1)r</span></div></div>`,
    `<div class="seq-pairs"><div><span>a₁</span><i>+</i><span>aₙ</span><b>= ta sama suma</b></div><div><span>a₂</span><i>+</i><span>aₙ₋₁</span><b>= ta sama suma</b></div><div><span>a₃</span><i>+</i><span>aₙ₋₂</span><b>= ta sama suma</b></div><strong>n par ÷ 2</strong></div>`,
    `<div class="seq-rail geometric"><div class="seq-node"><small>a₁</small><b>3</b></div><i class="seq-arrow"><span>× q = 2</span>→</i><div class="seq-node"><small>a₂</small><b>6</b></div><i class="seq-arrow"><span>× q = 2</span>→</i><div class="seq-node"><small>a₃</small><b>12</b></div><i class="seq-arrow"><span>× q = 2</span>→</i><div class="seq-node"><small>a₄</small><b>24</b></div></div>`,
    `<div class="seq-bars"><div style="--h:32px"><b>2</b><span>a₁</span></div><div style="--h:62px"><b>6</b><span>a₂</span></div><div style="--h:102px"><b>18</b><span>a₃</span></div><div style="--h:152px"><b>54</b><span>a₄</span></div><strong>S₄ = 2 + 6 + 18 + 54 = 80</strong></div>`,
    `<div class="seq-recurrence"><div class="seq-node"><small>WARUNEK</small><b>a₁ = 2</b></div><i class="seq-rule">aₙ₊₁ = aₙ + 3</i><div class="seq-node"><small>KOLEJNY</small><b>a₂ = 5</b></div><i class="seq-rule">ponownie +3</i><div class="seq-node"><small>KOLEJNY</small><b>a₃ = 8</b></div></div>`,
    `<div class="seq-growth"><div class="seq-money"><small>START</small><b>1000 zł</b><span>rok 0</span></div><i>× 1,10</i><div class="seq-money"><small>PO ROKU</small><b>1100 zł</b><span>rok 1</span></div><i>× 1,10</i><div class="seq-money final"><small>PO 2 LATACH</small><b>1210 zł</b><span>rok 2</span></div></div>`
  ];
  const titles=['Indeks wskazuje konkretną pozycję.','Wzór pokazuje kierunek zmian.','Stała różnica buduje ciąg arytmetyczny.','Od pierwszego do n-tego wyrazu są n−1 przejścia.','Skrajne wyrazy tworzą pary o tej samej sumie.','Stały iloraz buduje ciąg geometryczny.','Kolejne potęgi q szybko zmieniają wartości.','Rekurencja prowadzi od znanego startu do kolejnego wyrazu.','Każdy okres liczymy od nowej, zwiększonej wartości.'];
  const notes=['Numer pod symbolem a nie jest działaniem — mówi wyłącznie, na którym miejscu znajduje się wyraz.','Porównujemy aₙ₊₁ z aₙ. Jeśli różnica jest dodatnia dla każdego n, ciąg jest rosnący.','W każdym przejściu dodajemy dokładnie tę samą liczbę r. Tutaj r=−3, więc ciąg maleje.','Pierwszy wyraz nie wymaga przejścia. Dlatego liczba dodań różnicy wynosi n−1, a nie n.','Po odwróceniu kolejności składników każda para ma wartość a₁+aₙ. Połowa n takich par daje sumę.','Zamiast dodawać stałą liczbę, za każdym razem mnożymy przez ten sam iloraz q.','Wysokość słupków pokazuje kolejne składniki. Ich łączna wartość tworzy sumę Sₙ.','Bez wartości początkowej reguła nie wyznacza jednego ciągu. Najpierw odczytaj start, potem powtarzaj krok.','10% zapisujemy jako 0,10, więc każdy rok oznacza mnożenie przez 1,10 — także od wcześniej naliczonych odsetek.'];
  return `<section class="kb-visual-card sequence-visual is-replaying" data-kb-visual><div class="kb-visual-title"><div><span>ANIMOWANY SCHEMAT</span><b>${titles[index]}</b></div>${replayButton}</div>${visuals[index]}<div class="kb-animation-note"><i>▶</i><span>${notes[index]}</span></div></section>`;
}
function curriculumKnowledgeVisual(course,index){
  const guide=advancedKnowledge[course][index],replayButton=knowledgeAnimationControls();
  const equationBodies=[
    `<div class="eq-balance"><div><span>LEWA STRONA</span><b>3x + 5</b></div><i>=</i><div><span>PRAWA STRONA</span><b>17</b></div></div><div class="eq-operation">−5 po obu stronach</div>`,
    `<div class="eq-flow"><b>3x − 6 = 0</b><i>+ 6</i><b>3x = 6</b><i>÷ 3</i><b class="result">x = 2</b></div>`,
    `<div class="eq-flow"><b>(x−1)/3 + (x+2)/2 = 4</b><i>× 6</i><b>2(x−1)+3(x+2)=24</b></div>`,
    `<div class="eq-system"><span>2x + y = 7</span><span>x − y = 2</span><i>dodaj stronami</i><b>3x = 9 → x = 3 → y = 1</b></div>`,
    `<div class="eq-delta"><span>ax²+bx+c=0</span><div><b>Δ&lt;0</b><small>0 rozwiązań</small></div><div><b>Δ=0</b><small>1 rozwiązanie</small></div><div><b>Δ&gt;0</b><small>2 rozwiązania</small></div></div>`,
    `<div class="eq-branches"><b>(x−2)(x+5)=0</b><div><span>x−2=0</span><span>x+5=0</span></div><strong>x=2 lub x=−5</strong></div>`,
    `<div class="eq-numberline"><b>|x| &lt; 4</b><div><i style="--p:18%">−4</i><span></span><i style="--p:82%">4</i></div><strong>−4 &lt; x &lt; 4</strong></div>`,
    `<div class="eq-signs"><svg viewBox="0 0 520 190"><path class="eq-axis" d="M45 130H480"/><path class="eq-parabola" d="M70 25Q260 270 450 25"/><circle cx="170" cy="130" r="6"/><circle cx="350" cy="130" r="6"/><text x="150" y="156">x₁</text><text x="358" y="156">x₂</text></svg><b>dla a&gt;0 znak „−” jest między zerami</b></div>`,
    `<div class="eq-domain"><b>(x+1) / (x(x−3))</b><div><span>x ≠ 0</span><span>x ≠ 3</span></div><strong>najpierw dziedzina</strong></div>`,
    `<div class="eq-cases"><b>(m−2)x = 6</b><div><span>m ≠ 2<small>jedno rozwiązanie</small></span><span>m = 2<small>0·x=6 — brak</small></span></div></div>`
  ];
  if(course==='equations')return `<section class="kb-visual-card curriculum-visual equation-visual is-replaying" data-kb-visual><div class="kb-visual-title"><div><span>ANIMOWANY TOK</span><b>${guide[0]}</b></div>${replayButton}</div>${equationBodies[index]}<div class="kb-animation-note"><i>▶</i><span>${guide[8]}</span></div></section>`;
  const trigBodies=[
    ['#1aa577','#92a9c4','#0870ef','bok naprzeciw 90° to przeciwprostokątna'],
    ['#ec4b82','#92a9c4','#0870ef','sin α = naprzeciw / przeciwprostokątna'],
    ['#92a9c4','#ec9a32','#0870ef','cos α = przy kącie / przeciwprostokątna'],
    ['#ec4b82','#ec9a32','#b8c6d8','tg α = naprzeciw / przy kącie'],
    ['#1aa577','#7d58d6','#0870ef','30° · 45° · 60°'],
    ['#ec4b82','#ec9a32','#0870ef','sin²α + cos²α = 1'],
    ['#ec4b82','#ec9a32','#0870ef','a / sin α = b / sin β'],
    ['#ec4b82','#ec9a32','#0870ef','c² = a²+b²−2ab·cos γ'],
    ['#ec4b82','#ec9a32','#0870ef','P = ½ab·sin γ']
  ];
  if(course==='trigonometry'){const [opposite,adjacent,hypotenuse,label]=trigBodies[index];return `<section class="kb-visual-card curriculum-visual trig-visual is-replaying" data-kb-visual><div class="kb-visual-title"><div><span>PODPISANY TRÓJKĄT</span><b>${guide[0]}</b></div>${replayButton}</div><div class="trig-stage"><svg viewBox="0 0 560 280" role="img" aria-label="Trójkąt z podpisanymi bokami"><path class="trig-side" style="--side:${adjacent}" d="M95 225H455"/><path class="trig-side" style="--side:${opposite}" d="M455 225V55"/><path class="trig-side" style="--side:${hypotenuse}" d="M95 225L455 55"/><path class="trig-angle" d="M142 225A47 47 0 0 0 132 199"/><path class="trig-square" d="M430 225V200H455"/><text x="148" y="211">α</text><text x="270" y="248">przy kącie</text><text x="468" y="145">naprzeciw</text><text x="230" y="125">przeciwprostokątna</text></svg><strong>${label}</strong></div><div class="kb-animation-note"><i>▶</i><span>${guide[8]}</span></div></section>`;}
  const geometryBodies=[
    `<svg viewBox="0 0 560 260"><path class="geo-main" d="M100 215L285 42L455 215Z"/><text x="116" y="205">α</text><text x="277" y="73">β</text><text x="423" y="205">γ</text><text x="220" y="244">α+β+γ=180°</text></svg>`,
    `<svg viewBox="0 0 560 260"><path class="geo-main" d="M110 215H440V55Z"/><path class="geo-helper" d="M415 215V190H440"/><text x="260" y="242">a</text><text x="452" y="142">b</text><text x="244" y="120">c</text><text x="130" y="55">a²+b²=c²</text></svg>`,
    `<svg viewBox="0 0 560 260"><path class="geo-main" d="M90 215L300 45L470 215Z"/><path class="geo-helper" d="M300 45V215"/><path class="geo-helper" d="M300 195H320V215"/><text x="187" y="240">a</text><text x="315" y="135">hₐ</text><text x="350" y="75">P=½ahₐ</text></svg>`,
    `<svg viewBox="0 0 560 260"><path class="geo-main" d="M115 215L280 42L445 215Z"/><path class="geo-helper" d="M280 42V215"/><text x="175" y="240">a/2</text><text x="350" y="240">a/2</text><text x="292" y="130">a√3/2</text></svg>`,
    `<div class="geo-similar"><svg viewBox="0 0 250 180"><path class="geo-main" d="M35 145L110 55L190 145Z"/></svg><i>× k</i><svg viewBox="0 0 300 210"><path class="geo-main" d="M25 175L130 35L260 175Z"/></svg><strong>długości k · pola k²</strong></div>`,
    `<svg viewBox="0 0 560 260"><path class="geo-main" d="M105 210L170 65H405L470 210Z"/><path class="geo-helper" d="M170 65V210"/><text x="275" y="235">a</text><text x="275" y="55">b</text><text x="182" y="145">h</text><text x="310" y="145">P=(a+b)h/2</text></svg>`,
    `<svg viewBox="0 0 560 260"><circle class="geo-main" cx="280" cy="132" r="92"/><path class="geo-helper" d="M280 132H372M188 132H372"/><text x="318" y="121">r</text><text x="250" y="154">d=2r</text><text x="382" y="84">P=πr²</text></svg>`,
    `<svg viewBox="0 0 560 260"><circle class="geo-main" cx="280" cy="132" r="100"/><path class="geo-helper" d="M280 132L210 60M280 132L365 80M210 60L365 80M210 60L330 218M365 80L330 218"/><text x="270" y="115">2α</text><text x="316" y="190">α</text></svg>`,
    `<svg class="polished-figure circle-tangent-figure" viewBox="0 0 560 260" role="img" aria-label="Promień OT prostopadły do stycznej w punkcie T"><circle class="geo-main figure-shape" cx="244" cy="130" r="90"/><path class="geo-helper figure-radius" d="M244 130H334"/><path class="geo-tangent figure-tangent" d="M334 24V236"/><path class="geo-helper figure-right-angle" d="M312 130V108H334"/><circle class="figure-center" cx="244" cy="130" r="6"/><circle class="figure-touch" cx="334" cy="130" r="6"/><text class="diagram-label" x="228" y="155">O</text><text class="diagram-label" x="344" y="123">T</text><text class="diagram-label" x="285" y="116">r</text><text class="diagram-label tangent-label" x="372" y="136">styczna</text><text class="diagram-note" x="366" y="184">OT ⟂ styczna</text></svg>`,
    `<svg viewBox="0 0 560 260"><path class="geo-main" d="M105 215L280 35L455 215Z"/><circle class="geo-inner" cx="280" cy="154" r="61"/><circle class="geo-outer" cx="280" cy="139" r="176"/><text x="288" y="159">r</text><text x="390" y="78">R</text></svg>`
  ];
  return `<section class="kb-visual-card curriculum-visual geometry-visual is-replaying" data-kb-visual><div class="kb-visual-title"><div><span>ANIMOWANY RYSUNEK</span><b>${guide[0]}</b></div>${replayButton}</div><div class="geometry-stage">${geometryBodies[index]}</div><div class="kb-animation-note"><i>▶</i><span>${guide[8]}</span></div></section>`;
}
function knowledgeVisual(course,index){return course==='linear'?linearKnowledgeVisual(index):course==='quadratic'?quadraticKnowledgeVisual(index):course==='sequences'?sequenceKnowledgeVisual(index):advancedKnowledge[course]?curriculumKnowledgeVisual(course,index):'';}

const knowledgePracticeTasks={
  linear:['table-start','point-belongs','coefficients-basic','graph-coefficients','coefficients-basic','zero-basic','two-points','perpendicular-basic','linear'],
  quadratic:['quadratic-course','q-read-graph','q-delta','q-factor','q-vertex','q-range','q-canonical','q-shift-form','q-parameter-roots'],
  sequences:['sequence-course','s-monotonic','s-arithmetic-basic','s-arithmetic-data','s-sum-basic','s-geometric-basic','s-geometric-sum','s-recursive','s-geometric-sum'],
  equations:advancedKnowledge.equations.map(item=>item[10]),
  trigonometry:advancedKnowledge.trigonometry.map(item=>item[10]),
  planimetry:advancedKnowledge.planimetry.map(item=>item[10])
};
function knowledgePracticeLink(course,index){const task=knowledgePracticeTasks[course]?.[index];return task?`<section class="kb-practice-link"><div><span>SPRAWDŹ, CZY ROZUMIESZ</span><b>Przećwicz ten temat na 10 przykładach A–D</b></div><button class="primary-btn" data-route="learn" data-task="${task}">Przejdź do treningu ${icon('arrow')}</button></section>`:'';}

function knowledgeCourses(){return courses.filter(course=>knowledgeBase[course.id]);}
function knowledgeText(value){return escapeHtml(value).replace(/&amp;(gt|lt);/g,'&$1;');}
function knowledgeFormula(value){return knowledgeText(value).replace(/\s*(⇔|→|≠|≤|≥|=|·)\s*/g,' $1 ').replace(/([A-Za-z0-9²³ⁿ₁₂\)])\+([A-Za-z0-9√])/g,'$1 + $2').replace(/([A-Za-z0-9²³ⁿ₁₂\)])−([A-Za-z0-9√])/g,'$1 − $2').replace(/\s{2,}/g,' ').trim();}
function knowledgeProgress(step){return `<div class="kb-progress" aria-label="Krok ${step} z 3"><span class="${step>=1?'active':''}"><i>1</i>Wybierz dział</span><b></b><span class="${step>=2?'active':''}"><i>2</i>Wybierz temat</span><b></b><span class="${step>=3?'active':''}"><i>3</i>Poznaj zasadę</span></div>`;}
function knowledgeCkeSkills(course,index){const base=['Rozumienie pojęć','Dobór reprezentacji','Uzasadnianie wyniku'];if(['linear','quadratic','sequences'].includes(course))return index%3===0?[base[0],base[1]]:index%3===1?[base[1],'Odczyt danych']:['Wykorzystanie wzoru',base[2]];if(course==='equations')return ['Przekształcanie zapisu',base[2]];if(course==='trigonometry'||course==='planimetry')return ['Analiza rysunku','Dobór wzoru'];return [base[index%base.length],'Rozwiązanie problemu'];}
function knowledgeCkeContext(course,index){return `<section class="kb-cke-context"><div><span>NA MATURZE SPRAWDZA</span><div class="kb-cke-tags">${knowledgeCkeSkills(course,index).map(skill=>`<b>${skill}</b>`).join('')}</div></div><p>Na właściwym egzaminie ten temat może pojawić się w zadaniu zamkniętym albo otwartym. Tutaj ćwiczysz decyzje A–D, a po odpowiedzi zawsze widzisz pełny tok.</p></section>`;}
function knowledgeOverview(){const available=knowledgeCourses();return `<div class="page knowledge-page kb-page"><header class="kb-head"><div><div class="eyebrow">${icon('book')} Kompendium maturalne</div><h1>Co chcesz zrozumieć?</h1><p>Najpierw wybierz dział. Definicje i wzory pokażemy dopiero na kolejnych ekranach.</p></div><span>${available.length} działów</span></header><aside class="kb-cke-strip"><div><b>Zakres maturalny 2027</b><span>Uporządkowany według podstawy programowej obowiązującej od matury 2025.</span></div><a href="https://cke.gov.pl/egzamin-maturalny/egzamin-maturalny-w-formule-2023/informatory/" target="_blank" rel="noopener">Oficjalny informator CKE ↗</a></aside>${knowledgeProgress(1)}<section class="kb-course-grid" aria-label="Wybierz dział">${available.map(course=>`<button class="kb-course card" data-knowledge-course="${course.id}" style="--kb:${courseColor(course)}"><i>${course.n}</i><div><small>DZIAŁ</small><h2>${course.title}</h2><p>${knowledgeBase[course.id].lead}</p><span>${knowledgeBase[course.id].definitions.length} kluczowe tematy</span></div><b>→</b></button>`).join('')}</section></div>`;}
function knowledgeTopics(){const course=courseById(knowledgeState.course),data=knowledgeBase[course.id],formulas=knowledgeTopicFormulas[course.id]||data.formulas;return `<div class="page knowledge-page kb-page" style="--knowledge:${courseColor(course)}"><button class="kb-back" data-knowledge-back="courses">← Wszystkie działy</button>${knowledgeProgress(2)}<header class="kb-section-hero"><div class="kb-section-index">${course.n||String(courses.indexOf(course)+1).padStart(2,'0')}</div><div class="kb-section-copy"><span>WYBRANY DZIAŁ</span><h1>${knowledgeText(course.title)}</h1><p>${knowledgeText(data.lead)}</p></div><div class="kb-section-status"><span>KROK 2 Z 3</span><strong>${data.definitions.length} tematów</strong><small>Wybierz jedną kartę. Otworzymy tylko jej definicję, wzór, rysunek i przykład.</small></div></header><div class="kb-topic-heading"><div><span>SPIS TEMATÓW</span><h2>Co dokładnie opanujesz</h2></div><p>Każdy temat ma osobną, uporządkowaną kartę. Najważniejszy wzór jest wyróżniony od razu.</p></div><section class="kb-topic-grid" aria-label="Wybierz temat">${data.definitions.map(([title,text],index)=>`<button class="kb-topic card" data-knowledge-topic="${index}"><div class="kb-topic-no">${String(index+1).padStart(2,'0')}</div><div><span>DEFINICJA I WZÓR</span><h2>${knowledgeText(title)}</h2><p>${knowledgeText(text)}</p><div class="kb-topic-formula"><small>KLUCZOWY ZAPIS</small><b class="kb-math">${knowledgeFormula(formulas[index])}</b></div></div><i>Otwórz temat →</i></button>`).join('')}</section></div>`;}
function knowledgeTopicDetail(){const course=courseById(knowledgeState.course),data=knowledgeBase[course.id],index=Math.max(0,Math.min(Number(knowledgeState.topic)||0,data.definitions.length-1)),[title,definition]=data.definitions[index],formula=(knowledgeTopicFormulas[course.id]||data.formulas)[index],note=knowledgeTopicNotes[course.id]?.[index]||'Ten zapis pokazuje najważniejszą zależność w tym temacie.',example=knowledgeTopicExamples[course.id]?.[index]||'',symbols=knowledgeTopicSymbols[course.id]?.[index]||knowledgeSymbols[course.id]||[],conditions=knowledgeTopicConditions[course.id]?.[index]||data.conditions,trap=knowledgeTopicTraps[course.id]?.[index]||data.trap,derivation=knowledgeDerivations[course.id]?.[index]||note,takeaway=knowledgeTakeaways[course.id]?.[index]||definition;return `<div class="page knowledge-page kb-page kb-detail" style="--knowledge:${courseColor(course)}"><div class="kb-detail-nav"><button class="kb-back" data-knowledge-back="topics">← Tematy: ${course.title}</button><span>Temat ${index+1} z ${data.definitions.length}</span></div>${knowledgeProgress(3)}<article class="kb-lesson"><header><span>DEFINICJA ${String(index+1).padStart(2,'0')}</span><h1>${knowledgeText(title)}</h1><p>${knowledgeText(definition)}</p></header>${knowledgeCkeContext(course.id,index)}${knowledgeVisual(course.id,index)}<section class="kb-formula-focus"><span>NAJWAŻNIEJSZY ZAPIS</span><strong class="kb-math">${knowledgeFormula(formula)}</strong><p>${knowledgeText(note)}</p></section><section class="kb-origin card"><div><span>SKĄD TO SIĘ BIERZE?</span><h2>Logika stojąca za zapisem</h2></div><p>${knowledgeText(derivation)}</p></section><div class="kb-explain-grid"><section class="card"><span>CO OZNACZAJĄ SYMBOLE?</span><ul>${symbols.map(item=>`<li>${knowledgeText(item)}</li>`).join('')}</ul></section><section class="card"><span>PRZYKŁAD UŻYCIA</span><div class="kb-example">${knowledgeText(example)}</div><p>Przykład pokazuje sposób odczytania zapisu — bez konieczności rozwiązywania zadania.</p></section></div><section class="kb-conditions card"><div><span>WARUNKI I PRZYPADKI SZCZEGÓLNE</span><h2>Zanim użyjesz tej zasady</h2></div><ul>${conditions.map(item=>`<li>${icon('check')}<span>${knowledgeText(item)}</span></li>`).join('')}</ul></section><section class="kb-warning"><div>!</div><p><span>UWAŻAJ NA MATURZE</span>${knowledgeText(trap)}</p></section><section class="kb-remember"><span>TO MUSISZ ZAPAMIĘTAĆ</span><strong>${knowledgeText(takeaway)}</strong></section>${knowledgePracticeLink(course.id,index)}</article><footer class="kb-next">${index>0?`<button data-knowledge-topic="${index-1}">← Poprzedni temat</button>`:'<span></span>'}${index<data.definitions.length-1?`<button class="primary" data-knowledge-topic="${index+1}">Następny temat →</button>`:`<button class="primary" data-knowledge-back="courses">Wybierz kolejny dział →</button>`}</footer></div>`;}
function knowledgePage(){if(!knowledgeState.course)return knowledgeOverview();if(!knowledgeBase[knowledgeState.course])knowledgeState.course=null;if(!knowledgeState.course)return knowledgeOverview();return knowledgeState.topic===null?knowledgeTopics():knowledgeTopicDetail();}
function bindKnowledge(){
  $$('[data-knowledge-course]').forEach(button=>button.addEventListener('click',()=>{knowledgeState.course=button.dataset.knowledgeCourse;knowledgeState.topic=null;render();window.scrollTo({top:0,behavior:'smooth'});}));
  $$('[data-knowledge-topic]').forEach(button=>button.addEventListener('click',()=>{knowledgeState.topic=Number(button.dataset.knowledgeTopic);render();window.scrollTo({top:0,behavior:'smooth'});}));
  $$('[data-knowledge-back]').forEach(button=>button.addEventListener('click',()=>{if(button.dataset.knowledgeBack==='courses'){knowledgeState.course=null;knowledgeState.topic=null;}else knowledgeState.topic=null;render();window.scrollTo({top:0,behavior:'smooth'});}));
  $$('[data-kb-replay]').forEach(button=>button.addEventListener('click',()=>{const visual=button.closest('[data-kb-visual]');if(!visual)return;visual.classList.remove('is-replaying');void visual.offsetWidth;visual.classList.add('is-replaying');}));
  $$('[data-kb-pause]').forEach(button=>button.addEventListener('click',()=>{const visual=button.closest('[data-kb-visual]');if(!visual)return;const paused=visual.classList.toggle('is-paused');button.setAttribute('aria-pressed',String(paused));button.setAttribute('aria-label',paused?'Wznów animację':'Wstrzymaj animację');button.innerHTML=paused?'<span>▶</span> Wznów':'<span>Ⅱ</span> Pauza';}));
}
