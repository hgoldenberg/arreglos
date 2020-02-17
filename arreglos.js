//Ejercicio: Lista de Super (1)
/* Instanciá un nuevo arreglo y guardalo en la variable listaDeSuper
Usa la notación con corchetes y agregá los productos que tienes que comprar. Ej listaDeSuper[0]="sal"
Accedé al primer elemento de tu lista usando la notación de corchetes.
Crea una variable llamada ultimoElemento y asignale un número que represente
el índice del último elemento de tu lista de super. (length - 1 ??)
Accedé a ese último elemento usando la variable ultimoElemento*/

var listaDeSuper = []
listaDeSuper[0]="mermelada"
listaDeSuper[1]="queso"
listaDeSuper[2]="fideos"
listaDeSuper[3]="agua"
listaDeSuper[4]="pan"
coonsole.log(listaDeSuper.length)
var ultimoElemento = listaDeSuper.length-1
ultimoElemento

/* Ejercicio:
var amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Juan"]

(OJO: recordá que JavaScript es CASE SENSITIVE, osea que las mayúsculas y minúsculas son valores diferentes)

Escribí un código que chequee si tenés algun amigo llamado Roberto dentro de tu arreglo de amigos.
Si tenés un amigo llamado Roberto, tenés que ejecutar un console.log que diga "ah si! me había olvidado de beto!"
Si no tenés un amigo llamado Roberto, tu código tiene que ejecutar un console.log que diga
"… tengo que conseguirme algún amigo Roberto!"
Transformá tu código en una función que pueda tomar cualquier nombre por parámetro y chequear si tenés ese amigo o
no (repitiendo las mismas frases que en el punto anterior para cada caso).*/

//var amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Juan"]
//amigos.indexOf("Roberto")
//console.log("… tengo que conseguirme algún amigo Roberto!")
//amigos.push("Roberto")
//amigos
//console.log("ah si! me había olvidado de beto!")

var amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Juan"]
var amigos_1 = function (amigo){
    if (amigos.indexOf(amigo)) {
      console.log("… tengo que conseguirme algún amigo:"+amigo+" !!")
    } else {
      console.log("ah si! me había olvidado de: "+amigo+" !!")
    }

}

//Ejercicio: Lista de Súper (2)
//Vuelve a la lista del ejercicio anterior y haz lo siguiente:

/* Usa .push() y agrega dos nuevos productos a tu lista.
Usa .unshift() y agrega dos productos al principio de tu lista.
Qué tan largo es el arreglo en este punto?
Usa .pop() y sacá un producto y guardalo en una variable que se llame noHabia
Usa .shift() y sacá un objetivo y guárdalo en otra variable que se llame comprado
Qué tan largo es el arreglo ahora?*/

var listaDeSuper = ["mermelada","queso","fideos","agua","pan"]
listaDeSuper.push("manteca","aceite")
listaDeSuper.unshift("arroz","atun")
listaDeSuper.length
var noHabia=listaDeSuper.pop()
var comprado=listaDeSuper.shift()
listaDeSuper.length

//Ejercicio Lista de Súper (3)
/*Vuelve a la lista del ejercicio anterior y haz lo siguiente:

Usa un For Loop y muestra cada ítem de listaDeSuper en la consola
Refactoreá tu código de manera que el for loop viva adentro de una función que se llame
logItems que tome un arreglo como input (argumento) e imprima sus elementos en la consola.
Invoca logItems dos veces, pasando la listaDeSuper la primera vez y otro arreglo que quieras
la segunda vez (puedes crear uno nuevo).
Refactoreá el código de logItems para que use .forEach() en vez de un for loop.*/

//FOR LOOP 1
var listaDeSuper = ["mermelada","queso","fideos","agua","pan"]
for (var i=0; i<listaDeSuper.length; i++){
  console.log ("for",listaDeSuper[i],i)
}

//FOR LOOP 2
function logItems(listaDeSuper) {
  for (var i=0; i<listaDeSuper.length; i++){
    console.log ("for",listaDeSuper[i],i)
  }
}

logItems (listaDeSuper)
var listaSemana = ["cata","gym","curso",1234567]
logItems (listaSemana)

//FOR EACH
var listaDeSuper = ["mermelada","queso","fideos","agua","pan"]
var superMercado = function(articulos){
  console.log(articulos)
}
listaDeSuper.forEach(superMercado)

//Ejercicio Poema Desordenado
/*Usa .split(' ') en poemaDesordenado y guárdalo en un arreglo arregloDesordenado
Instancia un nuevo arreglo arregloOrdenado
Mientras que el largo de arregloDesordenado sea mayor que 0, saca el primero y el último elemento y
guardalo en arregloOrdenado.Te conviene usar un for loop o un while? Piensa en como sería la condicional
Crea la variable poemaOrdenado y dale el valor de un string utilizando arregloOrdenado y el método .join(' ').*/

//resultado esperado = roses are red violets are blue bacon is crispy and i love bacon

/*var poemaDesordenado = "roses red are bacon crispy i bacon love and is blue violets are"
var arregloDesordenado = []
arregloDesordenado = poemaDesordenado.split(' ')
var arregloOrdenado=[]

while (arregloDesordenado.length>0){
  var elementoInicial = arregloDesordenado.shift()
  var elementoFinal = arregloDesordenado.pop()
  arregloOrdenado.unshift(elementoInicial)
  arregloOrdenado.push(elementoFinal)
}
var poemaOrdenado=arregloOrdenado.join(" ")
console.log(poemaOrdenado)*/

var poemaDesordenado = "roses red are bacon crispy i bacon love and is blue violets are"
var arregloDesordenado = poemaDesordenado.split(' ')

var arregloOrdenado = []

var longitud = arregloDesordenado.length
var cero = 0


while (longitud > (cero)) {

var primero =  arregloDesordenado.shift()
var ultimo =  arregloDesordenado.pop()

arregloOrdenado.push(primero)
arregloOrdenado.push(ultimo)
Number(cero++)
}
console.log(arregloOrdenado.join(' '));

//Ejercicio //  REVERSER

// Primer ejercicio

function printReverse(arreglof) {
var arreglofS = arreglof.split(",")
var longitud = arreglofS.length
    
var arregloAlrevez = []
for (var i = 0; i < longitud; i++) {
var elUltimo = arreglofS.pop()
console.log(elUltimo);
} 
}

var arreglo = prompt("Ingrese arreglo:(a,b,c)")
printReverse(arreglo)


// Segundo Ejercicio

function reverser(arreglof){
var arregloAux = arreglof.split(",")
var longitud = arregloAux.length 
var arreglofRetorno = []
for (var i = 0; i < longitud; i++) {
    arreglofRetorno.push(arregloAux.pop())
}
console.log(arreglofRetorno);
}

var arreglo = prompt("Ingrese arreglo: a,b,c")

reverser(arreglo)

//Ejercicio IS UNIFORM

   function isUniform(arreglo){
       var uniforme = true;
       var longitud = arreglo.length
       for(var i = 0;i<longitud;i++){
           if (arreglo[i]!=arreglo[i+1] && (i+1<longitud)){
               uniforme = false;
               break;
           }
       }
       console.log(uniforme);
   }

   var parametro = prompt("Ingrese arreglo:")

   isUniform(parametro)

  //Ejercicio SUM ARRAY

   function sumArray(arreglof) {
       var cont = 0
       newArreglof = arreglof.split(",")
       for (var i = 0; i < newArreglof.length; i++) {
           cont += Number(newArreglof[i])
       }    
       console.log(cont);
   }

   var arreglo = prompt("Ingrse arreglo de numeros:")

   sumArray(arreglo)


  //Ejercicio BIGGEST SMALLEST

  function biggest_smallest (arreglof) {

      var newArreglof = arreglof.split(",")
      var mayor = newArreglof[0]
      var menor = newArreglof[0]
      var arregloReturn = []
      
      newArreglof.forEach(function(numero) {
          if (Number(numero)>Number(mayor)) {
              mayor = numero
          }if (Number(numero)<Number(menor)) {
              menor = numero
          }
      });
      arregloReturn[0] = menor
      arregloReturn[1] = mayor

      return arregloReturn
  }

  var arreglo = prompt("Ingrese arreglo de numeros:")
  biggest_smallest(arreglo)