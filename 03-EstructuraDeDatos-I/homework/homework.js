'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) { // 4!=4*3!   1! = 1  0!=1
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  if(n>-1 && n<2) {
    return 1;
  }else{
    return n * nFactorial(n-1);
  }
}
//nFactorial(4); 24




function nFibonacci(n) { // n=0  1  2  3  4  5  6  
  // Secuencia de Fibonacci:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  if(n>-1 && n<2) return n; // caso base
  else return nFibonacci(n-1)+nFibonacci(n-2);
}
//nFibonacci(6); = 5+3=8





// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

function Queue(){  //1ro que entra, 1ro que sale
  this.data=[];
  this.length=0;
}

Queue.prototype.enqueue=function(value){
  this.data.push(value);
  this.length++;
}

Queue.prototype.dequeue=function(){
  if(this.length>0){
    this.length--;
    return this.data.shift(); //debe retornarlo como dice el enunciado
  }else{
    return undefined;
  }
}

Queue.prototype.size=function(){
  return this.length;
}

//Queue.prototype.enqueue=function(value){
//  this.data=[...this.data,value]
//  this.length++;
//}
//
//Queue.prototype.dequeue=function(){
//  if(this.length>0){
//    this.length--;
//    const [elem,...rest]=this.data;
//    this.data=[...rest];
//		return elem;
//  }else{//
//    return undefined;
//  }
//}
//
//Queue.prototype.size=function(){//
//  return this.length;
//}
//const myQueue = new Queue();
//myQueue.enqueue(1);
//myQueue.enqueue(2);
//myQueue.dequeue();
//myQueue.enqueue(3);


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
