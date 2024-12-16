function showCollect(ibp){
   document.getElementById('textoutput').innerHTML = ibp;
   var collect = Math.floor(Math.random() * 9) + 1;
   document.getElementById('textcollect').innerHTML = collect;
   if(ibp == collect){
    var message = "正解！";
   } else{
    var message = "不正解、、、";
   }
   document.getElementById('message').innerHTML = message;
}