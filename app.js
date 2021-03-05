'use strict';
let myName='duaa ';
let myNationality='jordainian';
let myfavoriteAnimal="hippo";
let myfavoriteColor="green";
let myLength='164'
let myfavMovie='up'
let userScore=0;


let userName=prompt('welcome to you on my website.what is your name?')
alert('hi '+ userName + ' answer with yes or no ');

function mynam(name){
    if (name.toLowerCase==='yes' || name.toLowerCase==='y'){
        let m=('thats true');
        return m;
         userScore+=1;
    } else{
        let m1=('thats fales, my name is duaa');
        return m1;
    } 
}
let name=prompt(' my name is duaa?');
alert(mynam(name));
 
function mynation(nationality){
    if (nationality.toLowerCase==='yes' || nationality.toLowerCase==='y'){
        let m2=('thats true ');
        return m2;
        userScore+=1;
    } else{
        let m3=('thats fales, my nationality is jordanian');
        return m3;
    } 
}
let nationality=prompt(' my nationality is jordanian ');
alert(mynation(nationality));

let myani;
function favanimal(myani){
    if (myani.toLowerCase==='yes' || myani.toLowerCase==='y'){
        let m4=('thats true ,my favorite animal is hippo' );
        return m4;
        userScore+=1;
    }else{
        let m5=('thats fales, my favorite animal is hippo');
        return m5;
    }
}
let favoriteAnimal=prompt(' my favorite animal is hippo');
alert(favanimal(myani));

function mycolor(color){
    if (color.toLowerCase==='yes' || color.toLowerCase==='y'){
        let m6=('thats true ,my favorite color is green' );
        return m6;
        userScore+=1;
    }else{
        let m7=('thats fales, my favorite color is green');
        return m7;
    } 
}
let favcolor=prompt(' my favorite color is green');
alert(mycolor(color));

function mymovie(movie){
    if (movie.toLowerCase=== 'yes' || movie.toLowerCase==='y'){
        let m8=('thats true ,my favorite movie is up' );
        return m8;
    userScore+=1;
    }else{
        let m9=('thats fales, my favorite movie is up');
        return m9;
    }
}
let movie=prompt(' my favorite movie is up');
alert(mymovie(movie));


let length;
function mylen(){
    for(let i=0;i<4;i++){
        length=parseInt(prompt('How do you think My length? You have 4 attempts, guess number between (160 to 170) please'));
        console.log(length);
        
        if(length===164){
         alert('congrates, is correct');
         userScore+=1;
         break;
    
        }else if(length<164){
            alert('Wow, Too low');
        }else{
                alert('Oh, Too high');
            }
        }
        let m10=('correct answer is 24');
        return m10;
}
alert(mylen());

let myfavFood=['msakhan','mqlobah','mansaf','malfof'];
let count=0;
let food=prompt('What kind of fruits do you think I like the most?');
let userCorrect=false;

function favfo(){
    
    while(count<6){

        for(let i=0;i<myfavFood.length;i++){ 
   
                if(food.toLowerCase()===myfavFood[i]){
                alert('congrates, is correct');
                count=6;
                userCorrect=true;
                userScore+=1;
                break;
                } 
             }
                count++;
                if(count<6 && userCorrect===false){
                food=prompt('its wrong, try again please!');
                } 
   
                if(count>6 && userCorrect===false){
                alert('your attempts have ended!')
                
                } 
   } 
   let m11=('correct answer are: msakhan, mqlobah, mansaf, malfof')
   return m11;
}
alert(favfo());

alert(userName +  'your Score: ' + userScore + '/7, your welcom any time');
