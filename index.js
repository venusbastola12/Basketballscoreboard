let count1=0;
let count2=0;
let result1=document.getElementById("score1");
let result2=document.getElementById("score2");
function add1()
{
    count1=count1+1;
    result1.innerText=count1;
}
function add2()
{
    count1=count1+2;
    result1.innerText=count1;
}
function add3()
{
    count1=count1+3;
    result1.innerText=count1;
}
function Add1()
{
    count2=count2+1;
    result2.innerText=count2;
}
function Add2()
{
    count2=count2+2;
    result2.innerText=count2;
}
function Add3()
{
    count2=count2+3;
    result2.innerText=count2;
}
function reset()
{
    result1.innerText=0;
    result2.innerText=0;
    count1=0;
    count2=0;
}


