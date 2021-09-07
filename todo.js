var mynodes= document.getElementById("LI");
var i;
for(i=0;i<mynodes.length;i++){
    var span = document.createElement("SPAN");
    var txt= document.createElement("\u00D7");
    span.className="close";
    span.appendChild(txt);
    mynodes[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display="none";
    }
}
var list=document.querySelector("ul");
list.addEventListener('click',function(ev) {
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('check');
    }
    },false);

    function addlist(){
       var li=document.getElementById("li");
       var inputValue= document.getElementById("my_list").ariaValueMax;
       var t=document.createTextNode(inputValue);
       li.appendChild(t);
       if(inputValue === ''){
           alert("write something");
       }else{
           document.getElementById("ul_list").appendChild(li);
       }
       document.getElementById("inputValue").value="";

       var span = document.createElement("SPAN");
       var txt=document.createTextNode("\u00D7");
       span.className="close";
       span.appendChild(txt);
       li.appendChild(span);
       for(i=0;i<close.length;i++){
           close[i].onclick=function(){
               var div = this.parentElement;
               div.style.dispaly="none";

           }
    }
}

    
    
