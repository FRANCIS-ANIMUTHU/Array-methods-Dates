//getDate()
let birthday=new Date('August 30, 1998 23:15:40');
a=birthday.getDate();
console.log(a);



//getFullYear()
let xmas=new Date('December 25,99 12:00:00');
b=xmas.getFullYear();
console.log(b);

//getDay()
let pongal=new Date('January 15, 2021 21:35:56');
c=pongal.getDay();
console.log(c);

//getHours()
let yesterday=new Date('April 11,2022 13:00:45');
d=yesterday.getHours();
console.log(d);

//getMilliseconds()
let pon=new Date('January 15, 2021 21:35:56:578');
milli=pon.getMilliseconds();
console.log(milli);

//getMinutes()
let diwali=new Date('November 21,2022 08:45:30');
e=diwali.getMinutes();
console.log(e);

//getMonths()
let diw=new Date('November 21,2022 08:45:30');
month=diw.getMonth();
console.log(month);

//getSeconds()
let normal=new Date('November 21,2022 08:45:30');
second=diwali.getSeconds();
console.log(second);

let currentdate=new Date();
console.log(currentdate);
currentdate.setDate(-12);
console.log(currentdate);

let date=new Date()
date.setDate(29)
console.log(date);
console.log(date.getMonth());
date.setMonth(-11)
console.log(date);

let date1=new Date()

date1.setHours(-24)
console.log(date1);

//getTime()
let s2=new Date()
console.log(s2);
let s3=s2.getTime();
console.log(s3);

