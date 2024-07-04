function ageCalculate(){ 
let DOB=document.getElementById("dob").value;
let DOBdate=new Date(DOB);
let currDate=new Date();
let age=currDate.getFullYear()-DOBdate.getFullYear();
let monthDiff=currDate.getMonth()-DOBdate.getMonth();
if(monthDiff<0 || (monthDiff===0 && currDate.getDate()<DOBdate.getDate())){
    age--;
}
document.getElementById("result").innerText="Your age is: " + age;
}
