console.log(Math.sqrt(9))
var a=prompt('a value')
var b=prompt('b value')
var c=prompt('c value')
var sol1a=(-1*b)+Math.sqrt(Math.pow(b,2)-4*a*c)
var sol1=sol1a/(2*a)


var sol2a=(-1*b)-Math.sqrt(Math.pow(b,2)-4*a*c)
var sol2=sol2a/(2*1)
if(sol1==NaN&&sol2==NaN){
    alert('no solution-- gimme a real quadratic stoopid');
}else{
alert('solutions are '+sol1+" and "+sol2)
}