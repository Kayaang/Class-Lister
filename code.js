
name_array=[];


function Submit(){
var name1=document.getElementById("N1").value;
var name2=document.getElementById("N2").value;
var name3=document.getElementById("N3").value;
var name4=document.getElementById("N4").value;
name_array.push(name1);
name_array.push(name2);
name_array.push(name3);
name_array.push(name4);
console.log(name_array);
document.getElementById("namer").innerHTML=name_array;
document.getElementById("Sub").style.display="none";
document.getElementById("Sort").style.display="inline-block";
}
function Sorting(){
name_array.sort();
document.getElementById("namer").innerHTML=name_array;
}