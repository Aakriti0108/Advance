var obj=
{
    num:3
};
var Student=function(a,b,c)
{
    return this.num+a+b+c;
}
var arr=[2,3,4]
console.log(Student.call(obj,2,3,4))
console.log(Student.apply(obj,arr))
var bound=Student.bind(obj)
console.log(bound(8,0,7));

var Student2={
    age1:20
}
var Student3=function(){
    return this.age1
}
console.log(Student3.call(Student2))




