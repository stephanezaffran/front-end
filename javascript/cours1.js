// console.log('To be or not to be'.indexOf('To'));
// console.log('To be or not to be'.indexOf(' '));
// console.log('To be or not to be'.indexOf('o', 2));
// console.log('To be or not to be'.indexOf('be', 4));
// console.log('To be or not to be'.indexOf('to'));
// console.log('To be or not to be'.indexOf('B'));
// console.log('To be or not to be'.indexOf('', 9));

// console.log('3' + 4 + 5);
//  console.log("potato " + typeof("potato"));
//  console.log('15 ' + typeof(15));
//  console.log('5.5 ' + typeof(5.5));
//  console.log('NaN' +typeof(NaN));

//  console.log(typeof("johnny" - '5'));

//  console.log("johnny" + 5);



 
//  let people = ["Greg", "Mary", "Devon", "James"];

//  people.shift();
//  console.log(people);
//  people.splice(people.length-1,1,"Jason");
//  console.log(people);
//  people.push("Gleb");
//  console.log(people);
//  console.log(people.indexOf("Mary"));
 
function test1()
{
    let word = prompt("Give me your secret word, please.");
    console.log(word.replace(/[aeiou]/g, ""));
    let code = {
        "a": "1",
        "e": "2",
        "i": "3",
        "o": "4",
        "u": "5",
        
    }

    console.log(word.replace(/[aeiou]/g, aaa => code[aaa]));
}


function test2() {
    let paragraphs = document.getElementsByTagName("p");
    alert("Content in the second paragraph is " + paragraphs[1].innerHTML);
    document.getElementById("second").innerHTML = "The orginal message is changed.";
}
function write(a){
    return a+3;
}

let recursive = (n) => {
    if (n > 1) {
        return n + recursive(n - 1)
    }
    else return n
}

console.log(recursive(100));

// (function(){console.log(write(10))})();
// console.log(write(10));
