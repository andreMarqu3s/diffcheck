function getValue1() {return document.getElementById("input1").value}
function getValue2() {return document.getElementById("input2").value}

function findDiff(str1, str2){ 
    let diff= "";
    str2.split('').forEach(function(v, i){
      if (v != str1.charAt(i))
        diff += v ;         
    });
    return diff;
}

function retDiff() {
    let diff = findDiff(getValue1(), getValue2())
    let resD = document.getElementById("res")
    resD.innerHTML = diff
    resD.style.color = "red"
}
