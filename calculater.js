function pick(val) {
    let input = document.getElementById("a");
    if (input.value === "0") {
        input.value = "";  // pehle 0 hatado
    }
    input.value += val;
}
function solve()
{
    var x=document.getElementById("a").value;
    // eval means all operation perform automatically
    var y=eval(x);
    document.getElementById("a").value=y;
}
function clr()
{
    document.getElementById("a").value=" ";
}