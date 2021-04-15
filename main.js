function join(){
    var input1=document.getElementById("input_1").value;
    var input2=document.getElementById("input_2").value;
    var input3=document.getElementById("input_3").value;
    var input4=document.getElementById("input_4").value;
    var input5=document.getElementById("input_5").value;
    var input6=document.getElementById("input_6").value;
    var input7=document.getElementById("input_7").value;
    var input8=document.getElementById("input_8").value;
    var sentence=input1.concat(input2);
   sentence= sentence.concat(input3);
   sentence=sentence.concat(input4);
   sentence=sentence.concat(input5);
   sentence=sentence.concat(input6);
   sentence=sentence.concat(input7);
   sentence=sentence.concat(input8);
   document.getElementById("para_div").innerHTML=sentence;
}
