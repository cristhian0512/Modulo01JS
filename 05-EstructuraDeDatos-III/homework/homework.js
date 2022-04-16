'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value=value;
  this.right=null;
  this.left=null;
}

BinarySearchTree.prototype.insert=function(value){
  if(value>this.value){
    if(this.right!==null){
      this.right.insert(value);
    }else{
      this.right=new BinarySearchTree(value);
    }
  }
  if(value<this.value){
    if(this.left!==null){
      this.left.insert(value);
    }else{
      this.left=new BinarySearchTree(value);
    }
  }
}

BinarySearchTree.prototype.contains=function(value){
  if(value===this.value) return true;
  if(value>this.value){//derecha
    if(this.right!==null){
      return this.right.contains(value);
    }else{
      return false;
    }
  }
  if(value<this.value){//izquierda
    if(this.left!==null){
      return this.left.contains(value);
    }else{
      return false;
    }
  }
}

BinarySearchTree.prototype.size=function(){
  if(this.right===null && this.left===null) return 1;
  if(this.right!==null && this.left===null) return 1 + this.right.size();
  if(this.left!==null && this.right===null) return 1 + this.left.size();
  if(this.left!==null && this.right!==null) return 1 + this.right.size() + this.left.size();
}

BinarySearchTree.prototype.depthFirstForEach=function(cb,order){
  if(order==='pre-order'){ // root-izq-der 
    cb(this.value);
    if(this.left!==null){
      this.left.depthFirstForEach(cb,order); //recursion
    }
    if(this.right!==null){
      this.right.depthFirstForEach(cb,order);//recursion
    }
  }else if(order==='post-order'){ //izq-der-root
    if(this.left!==null){
      this.left.depthFirstForEach(cb,order);//recursion
    }
    if(this.right!==null){
      this.right.depthFirstForEach(cb,order);//recursion
    }
    cb(this.value);
  }else if(order='in-order'){ //izq-root-der
    if(this.left!==null){
      this.left.depthFirstForEach(cb,order);//recursion
    }
    cb(this.value);
    if(this.right!==null){
      this.right.depthFirstForEach(cb,order);//recursion
    }
  }
}

BinarySearchTree.prototype.breadthFirstForEach=function(cb,arr=[]){
  if(this.left!==null){
    arr.push(this.left);
  }
  if(this.right!==null){
    arr.push(this.right);
  }
  cb(this.value);

  if(arr.length>0){
    arr.shift().breadthFirstForEach(cb, arr); //recursion
  }
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
