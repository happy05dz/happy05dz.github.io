(function(W){
 var I,pos=0;
 function init(){
  I=document.getElementById('write'); 
 }
 function h(e){  
  if(e.target.parentNode.id=='keyboard'){
   pos=(I.selectionStart?I.selectionStart:pos?pos:0);
   var end=I.selectionEnd?I.selectionEnd:pos;
   I.value=I.value.substr(0,pos)+
   e.target.innerText+
   I.value.substr(end);
   I.focus();
   pos++
   I.selectionStart=pos;
   I.selectionEnd=pos;
  }
 }
W.addEventListener('load',init,false);

 
 var l = document.getElementById('keyboard').getElementsByTagName('li');

 for (var i=0; i<l.length; i++)
 {
 l[i].addEventListener('click', h,false);
 }

  
 })(window)


 
 var input = document.getElementById("write"),
    button1 = document.getElementById("button-undo"),
    button2 = document.getElementById("button-redo");
	button3 = document.getElementById("button-caps-lock");

var undoStack = [{
    value: 0,
    selectionStart: 0,
    selectionEnd: 0
}];
var undoPosition = 0;

input.addEventListener("input", function() {
    var undoItem = {
        value: input.value,
        selectionStart: input.selectionStart,
        selectionEnd: input.selectionEnd
    };
    undoStack.length = ++undoPosition;
    undoStack.push(undoItem);
}, false);

function restoreUndoItem(item) {
    input.value = item.value;
    input.selectionStart = item.selectionStart;
    input.selectionEnd = item.selectionEnd;
}

function doUndo(e) {
    if (undoPosition > 0) {
        restoreUndoItem( undoStack[--undoPosition] );
    }
    input.focus();
}

function doRedo(e) {
    if (undoPosition < undoStack.length - 1) {
        restoreUndoItem( undoStack[++undoPosition] );
    }
    input.focus();
}

button1.addEventListener("click", doUndo, false);
button2.addEventListener("click", doRedo, false);
button3.addEventListener("click", toUppertoLowerCase, false); 
 
 
 function toUppertoLowerCase() {
	
     var ul = document.getElementById("keyboard");
     var items = ul.getElementsByTagName("li");
	 
	if (items[13].innerHTML=="a") {
	for (var i = 0; i < items.length; ++i) {
     items[i].innerHTML = items[i].innerHTML.toUpperCase();
	 } 

     }	else {
	 for (var j = 0; j < items.length; ++j) {
     items[j].innerHTML = items[j].innerHTML.toLowerCase();
	 } }
 
}

 function mypace() {
	 var pos=0;
   var   I=document.getElementById('write'); 
	 
   pos=(I.selectionStart?I.selectionStart:pos?pos:0);
   var end=I.selectionEnd?I.selectionEnd:pos;
   I.value=I.value.substr(0,pos)+
   " "+
   I.value.substr(end);
   I.focus();
   pos++
   I.selectionStart=pos;
   I.selectionEnd=pos;
}