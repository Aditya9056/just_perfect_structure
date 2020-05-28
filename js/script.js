var welcome_msg = "Welcome to our site";

var float = "34.5";
var int = "233";

var i = "34.5";
var j = 34.5;


// alert(welcome_msg + float + int );  
//see something imp in php the above statement due to + it 
//would have made float and int to a float or double.
// but in javascript it keep it string


console.log(i+j); // if one is string both will be string.

console.log(true == "true");//this is true in php because it takes anything thta is not empy as 1.bar



var btn = document.getElementById('btn').addEventListener("click", function(){
    for(i=0; i< 10; i++){
        console.log(typeof(i));
    }
});

// var btn = document.getElementById('btn').addEventListener("click", function(){
//     print(5);
// });
function print(i){

    for(; i< 10; i++){
        document.writeln(i);
        console.log(typeof(i));
    }
    console.log("he");
}

// Arrays

let a= ['one', 'two', 'three', 'four'];

// console.log(a.push('sds'));
// console.log(a.pop('sds'));
// console.log(a.shift());
// console.log(a.unshift("dhe"));
// console.log(a);
// console.log(a[a.length - 1]);

a.forEach(function(items, i){
    console.log(items, i);
});

// To find index and to remove specific element

console.log(a.indexOf("three"));//find
a.splice(2, 2);//remove
console.log(a);



function test2(a, b){
    // document.write(a + b);
}

test2(a=null ,b = 34);


// Passing as object to function

function test3(obj){
    // document.write(obj.a + obj.b);
}

test3({a:4, b:4});//Passing direct object in js function


// Find Missing Number


function findnum(num){
    num.sort(function(a, b) { return a-b; });
    var missing = 1;

    for(var i=num[0]; i<=num.length+1; i++){//num.length=9
        if(num.indexOf(i) === -1){
            missing = i;
            break;
        }
    }
    return missing;
}

var num = [7, 5, 2, 6, 3, 9, 8, 1, 10];

console.log(findnum(num));


// Classes
class human{
    constructor(name, age){
        console.log("Human Created named "+ name +" and Age "+ age);
        this.name = name;
    }
}
human.planet = "Earth";
var h1 = new human("Raja", 56);
var h2 = new human("Ramu", 34);

class superhuman extends human{
    constructor(name, age, laser_eye, fly){
        super(name, age);
        console.log("Sup Created "+ name +" with Age "+ age +" laser eye "+ laser_eye + " Fly "+ fly );
    }
}

console.log(h1.name);
console.log(h1.constructor.planet);

var sup = new superhuman("Michael", 27, true, true);



// jQuery

$('#btn').on('click',function () {//mouseenter, mouseup, mousedown, mouseleave...etc
    alert("Alert Code Red");
});


$('#head').on('mouseenter', function(){
    $(".info").fadeIn(500);
    $(".info").addClass('active');
});

$('#head').on('mouseleave', function(){
    $(".info").fadeOut(500);
    $(".info").removeClass('active');
});

$('#head #other #another') //This is multiple target.
// $().attr.id can get id
// append prepend replace
// e.preventdefault()
// .is

$(document).click(function(e){
    e.preventDefault();
    console.log(e.button);
    if(e.button === 2){
        alert("Right!");
    }
});

// Find In jQuery
    // $("#articles").find("article").css("display", "none");//find
    // var eles = document.querySelector("#articles"); //vanilla js
    // eles.style.display ='none';
    // console.log(eles);

// First and last in Vanilla Js
    // var eles = $("#articles article").first().css("display", "none");
    // var eles = document.querySelector("#articles article"); //vanilla js
    // eles.text;
    // eles.style.display ='none';
    // console.log(eles);

// $().focusin and $().focusout

// Contains, is and hasClass

    // $('article:contains("A1")').html("This is changed i am telling you");
    var ele = $('#articles');

    console.log(ele.is('section')); //true
    console.log(ele.hasClass('articles')); //false

    //$().each(func(){});

    // $().css({ });


    