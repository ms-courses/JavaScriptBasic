# Cwiczenia 1
*  Podaj wyniki wykonania operacji w konsoli JS. Uzyj firebug.
```
	var a; typeof a;
	var s = '1s'; s++;
    !!"false"
    !!undefined
    typeof -Infinity
    10 % "0"
    undefined == null
    false === ""
    typeof "2E+2"
    a = 3e+3; a++;
```
*  Podaj wartości następujących operacji
```
    x=100; var x = x|| 10;
    x=0; var x  = x || 10;
    x= null; var x = x || 10;
    delete x; var x = x || 10;
```
*  Napisz skrypt znajdujący najwiekszy element w podanej tablicy i wyświetajacy go na konsoli
```
var tab=[1,2,3,10,5,100,29]
```
#Ćwiczenia 2)
*   Skrypt z cwiczenia 3 zapisz jako funkcję.
*   Napisz funkcję która konwertuje kolor w zapisie szesnastkowym na kolor RGB "#0000FF" => rgb(0,0,255);
Test poniższy kod

```
var a = getRGB("#00FF00");
a; 
"rgb(0, 255, 0)" 
```
*   Co zostanie wypisane na konsoli po wykonaniu poniższych operacji
```
	parseInt(1e1) 

	parseInt('1e1') 

	parseFloat('1e1') 

	isFinite(0/10) 

	isFinite(20/0) 

	isNaN(parseInt(NaN)); 
```

*   Co wyswietli funkcja console.log

```
var a = 1;

function f() {
  var a = 2;
  function n() {
    console.log(a);
  }
  n();
}
f();
```
*   Wszystkie przykłady wyświetlaja „Boo!” Wyjaśnij dlaczego ?

```
var f = console.log;
eval('f("Boo!")'); 
```
```
var e;
var f = console.log;
eval('e=f')('Boo!'); 
```
```
	(
  function(){ 
    return console.log;
  } 
)()('Boo!'); 
```
*   Napisz funkcję która znajduje największy i najmniejszy element w tablicy oraz wypisuje je na konsoli.
Funkcja ma być funkcją anonimową. (Samodefiniujaca)
```
var tab= [2,4,7,33,121,1]
```
*   Zmien funkcję anonimową na funkcję o nazwie findMaxAndMin.
*   Napisz funkcję która deklaruje tablicę z punktu 10 i
wywołaj funkcję findMaxAndMin()  jako funkcję callback.
*   Napisz funkcję która deklaruje tablicę ale znajdowanie minumum i maximum
ma wykonywać funkcja prywatna.

#Ćwiczenia 3)
*   Przepisz skrypt z przykładu przyklad1.js tak aby pozbyć się zmiennej globalnej licznik.
*   Używając closures napisz funkcję dla której będzie działał poniższy kod
```
var a = fun16();    //Zwraca tablicę której elementami są referencje funkcji.
a[0]();  //0
a[1]();  //1
a[2]();  //2
a[3]();  //TypeError: a[3] is not a function
```

#Ćwiczenia 4)
*   Jaki jest wynik wykonania ponizszego kodu?
```
c = [1,2, [1, 2]]; 
c.sort(); 
c.join('--'); 
console.log(c);
```
*	Załóżmy że obiekt String nie istnie i musimy stworzyć nowy o nazwie MyString który działa podbnie jak to możliwe do String. Nie używając żadnych metod wbudowanych dla łańcuchów znakowych. (Użyj ciągu znaków jako tablicy i petli for-in )
Użyj poniższego kodu do przetestowania własnego obiektu:
>>> var s = new MyString('hello'); 
>>> s.length; 
	5 ;	
>>> s[0]; 
"h" 
>>> s.toString(); 
"hello" 
>>> s.valueOf(); 
"hello" 
>>> s.charAt(1); 
"e" 
>>> s.charAt('2'); 
"l" 
>>> s.charAt('e'); 
"h" 
>>> s.concat(' world!'); 
"hello world!" 
>>> s.slice(1,3); 
"el" 
>>> s.slice(0,-1); 
"hell" 
>>> s.split('e'); 
["h", "llo"] 
>>> s.split('l'); 
["he", "", "o"] 
23)	 Stwórz klasę MyArray zakładając że obiekt Array nie istnieje.
Test:
var a = new MyArray(1,2,3,"test"); 
>>> a.toString(); 
"1,2,3,test" 
 >>> a.length; 
 4 
 >>> a[a.length - 1] 
 "test" 
 >>> a.push('boo'); 
 5 
 >>> a.toString(); 
 "1,2,3,test,boo" 
 >>> a.pop(); 
 [1, 2, 3, "test"] 
 >>> a.toString(); 
 "1,2,3,test" 
 >>> a.join(',') 
 "1,2,3,test" 
 >>> a.join(' isn\'t ') 
 "1 isn't 2 isn't 3 isn't test" 

Ćwiczenia 5)

*	 Stwórz obiekt o nazwie shape kóry ma właściwośc type i metodę getType();
*	 Stwórz konstruktor Triangle dla którego prototypem jest shape. Obiekt stworzony przez Triangle powinien mieć własne właściwości a,b,c
*	 Dodaj do prototypu nową metodę: getPerimeter().
*	 Test swój kod:
var t = new Triangle(1, 2, 3); 
>>> var t = new Triangle(1, 2, 3); 
>>> t.constructor 
Triangle(a, b, c) 
>>> shape.isPrototypeOf(t) 
true 
>>> t.getPerimeter() 	
6 	 
>>> t.getType() 
triangle
28)	Przeiteruj (loop) t pokazując tylko własne właściwości i metody bez prototypu
29)	Spraw aby ten kod działał:
>>>[1,2,3,4,5,6,7,8,9].print();
123456789 
Cwiczenia 7) Dziedziczenie

30)	Stworz własną hierachię dla figur: Figura, Figura2D, Trojkat, Kwadrat,. Użyj jednego z omówionych mechanizmów. Zdefiniuj metody:
toString();
getName();
obliczPole();

Ćwiczenia 6)
31)	Stworzymy teraz bardzo zły program. Napisz kod który przesuwa okno po ekranie.
Użyj move, setInterval(), setTimeout()

Ćwiczenia 7)
32)	Zaimplementuj funkcję  walkDOM() (plik  walkDOM.js) inaczej. Dodatkowo zamiast hard-code console.log() użyj funkcji callback.
33)	Zaimplementuj funkcję która: usuwa zdarzenia listeners , węzły DOM
TIP: You can loop through the attributes of a node and check if the value is a function. If it is, it's most likely an attribute like onclick. You need to set it to null before removing the element from the tree. 
34)	Stwórz funkcję include która ładuje zewnętrzny skrypt na żądanie. To znaczy że funkcja ma tworzyć nowy znacznik <script> i ustawiać atrybut src.

TEST:
include('somescript.js'); 
35)	Stwórz obiekt narzędziowy o nazwie myevent który ma następujące metody:
addListener(element, event_name, callback)— gdzie lement może być tablicą elementów.
removeListener(element, event_name, callback) 
getTarget(event) 
stopPropagation(event) 
preventDefault(event) 
Użycie:
function myCallback(e) { 
e = myevent.getEvent(e); 
alert(myevent.getTarget(e).href); 
myevent.stopPropagation(e); 
myevent.preventDefault(e); 
} 
myevent.addListener(document.links, 'click', myCallback); 

Wszystkie linki prowadzą nigdzie i pojawia się okienko alert wyświetlające atrybut href.

36)	Stwórz absolutnie wypozycjonowany <div> gdzie x=100px, y=100px. Napisz kod który będzie przesuwał <div> po stronie używając strzałek klawiszy albo klawiszy J (lewo) K (prawo) M (na dół) K (do góry). Użyj myevent z poprzedniego ćwiczenia.




