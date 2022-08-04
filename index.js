//question 1



// function pow(a){
//     var c=1;
//    for(var i=1;i<=3;i++){
//       c*=a;
//    }
//    console.log(c);
// }

// pow(2);

// 

// var a= 16;
// var b= 2;
// function lo(x){
//    return  (a+b)-x
// }
// console.log(lo(a));


//question 2

// function leep(){
// var year=+prompt("")
// if(year%4===0){
// alert("its leep year")
// }
// else{
//     alert("its not leep year")
// }
// }
// leep()



// question 4

// function percentage(){
// var student1=+prompt("enter the number ")
// var student2=+prompt("enter the number")
// var student3=+prompt("enter the number")
// var object=student1+student2+student3
//  var total=300
// var per=(object/total)*100
// var result=Math.round(per)
// return result
// }
// var result=percentage()
// document.write(result)


// question 5

// flag=false
// function indexof(user,find){
//     for(var i=0; i < user.length; i++){
//         if(user[i]===find){
// alert([i])
// flag=true
//         }
       
       

//     }

//     if(flag ===false){
//         alert(-1)
//     }
// }

// indexof("ahmed","w")

// question 6

// first answer

// function vowels(){
// var  nam="tha quick brown box"
// var result=nam.replace(/[aeiou]/g,"")
// return result
// }
// console.log(vowels())

// 2nd answer

// var store="";
// function vowel(){
//     var nam="thA qUIck brOwn bOx".toLowerCase()
//     var change=nam.split('');
//    for(var i=0;i<change.length;i++){
//      if(change[i]=="a" || change[i]=="e" || change[i]=="i" || change[i]=="o" || change[i]=="u" ){
      
//     change[i]=store
//      }
//    }
//    result=change.join("")
//    return result
  
//   }
//   alert(vowel())


// question 7 

// first answer

// function count(){
// var count = 0;
// var store;
// var word = "Pleases read this application and give me gratuity"
    
// for(var i=0; i < word.length; i++){

//     if(word[i]==="a" || word[i]==='i' || word[i]==='o' || word[i]==='u' || word[i]==='e'){
// store=count++
//     }
// }
// return store
// }

// alert(count())

// 2nd answer

// function vowels(){
// var word = "Pleases read this application and give me gratuity"
// var vowels=['ae','ai','ao','au','ea','ei','eo','eu','ia','ie','io','iu','oa','oe','oi','ou','ua','ue','uo']
// var count=0
// for(var i=0; i < word.length; i++){

//  if(word.slice(i,i+2) === vowels[0] || word.slice(i,i+2)=== vowels[1] || word.slice(i,i+2)=== vowels[2] || word.slice(i,i+2)===vowels[3]  || word.slice(i,i+2)===vowels[4] || word.slice(i,i+2)===vowels[5] || word.slice(i,i+2)===vowels[6] ||  word.slice(i,i+2)===vowels[7] || word.slice(i,i+2)===vowels[8] || word.slice(i,i+2)===vowels[9] || word.slice(i,i+2)===vowels[10] || word.slice(i,i+2)===vowels[11] || word.slice(i,i+2)===vowels[12] || word.slice(i,i+2)===vowels[13] || word.slice(i,i+2)===vowels[14] || word.slice(i,i+2)===vowels[15] || word.slice(i,i+2)===vowels[16] || word.slice(i,i+2)===vowels[17] ||  word.slice(i,i+2)===vowels[18] || word.slice(i,i+2)===vowels[19]){
// count++
//  }

// }
// return count
// }
// console.log(vowels())


// question 9

// function overtime(){
 
//   var hourse=+prompt("ap kitne ghunte kam krna cahte ho")

//   if(hourse > 40){
//   var bonus=(hourse-40)*12
//   alert("rupees is the bonus of the emlpoy "+bonus)
//   }
 
//   else{
//     alert(" apko bonus nhi milega ap over time kam nhi cahte")
//   }
  

// }
// overtime()