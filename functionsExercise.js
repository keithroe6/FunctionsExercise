
// 1.
function fozzieBear() {
    console.log(`Wocka Wocka!`);
}

fozzieBear();

// 2.
function beaker(speak) {
    console.log(speak.repeat(4));    
}

beaker(`Meep `);

// 3.
function muppetShow(a,b) {
    if (a === `Muppet` && b === `Show`){
        console.log(`It's time to play the music. It's time to light the lights`);
    }
      
}

muppetShow('Muppet', 'Show');

// 4.
function kermit() {
    return `Kermit The Frog`
}

console.log(kermit());

// 5. 
function muppetShowSeasons(seasons) {
    if (seasons === 5){
        return true;
    }
    else {
        return false;
    }
}

console.log(muppetShowSeasons(5));

// 6.
 const manOrMuppet = function() {
    console.log(`Am I a man or am I a Muppet?`);
}

manOrMuppet();

// 7.
rainbowConnection = () => `Someday We'll find it. The Rainbow Connection. The lovers, the dreamers and me`;

rainbowConnection();

// 8. no

// 9. yes
 
// 10a.
const newMuppetMovies = [`The Muppets`, `Muppets Most Wanted`];

// 10b.
const upperMovies = newMuppetMovies.map(function(movie) {
    return movie.toUpperCase();
});
console.log(upperMovies);

// Bonus
// 11a.
const oldMuppetMovies = [`The Muppet Movie`, `The Muppets Take Manhattan`, `The Great Muppet Caper`, `The Muppet Christmas Carol`, `Muppet Treasure Island`, `Muppets From Space`];

// 11b.

const twoMovies = oldMuppetMovies.filter(movie => movie === `The Great Muppet Caper` || `Muppet Treasure Island`);
 console.log(twoMovies);

// function film(title){             Did not use arrow function :-(
//     return title.length === 22;
// } 

// const twoMovies= oldMuppetMovies.filter(film);
// console.log(twoMovies); 

//OR

// const twoMovies = oldMuppetMovies.filter(a => a.length === 22);
// console.log(twoMovies);

// 12a.
const charactersOne = [`Statler`, `Waldorf`];

// 12b. 
const charactersTwo = [`The Swedish Chef`, `Animal`, `Rowlf`];

// 12c.
randomMuppet = (characters) => {

    console.log(characters[((Math.floor((Math.random()*characters.length))))]);
}

// 12d.
randomMuppet(charactersOne);
randomMuppet(charactersTwo);

// 13.
test = `Kids these days`;

// const caps = string => {
//     let newString = ``;
//     for(i=0; i<string.length; i++) {
//         if(i%2 === 0) {
//             newString += string[i].toUpperCase();
//         }
//         else if (string[i] === ` `) {
//             newString += ` `;
//         }
//         else {
//             newString += string[i].toLowerCase();
//         }
//     }
// console.log(newString);
// }



caps = (string) => {
    let noSpaceString = string.split(" ").join("");
     result = "";
            for ( i=0; i < noSpaceString.length; i++) {
                if (i%2 == 0) {
                    result += noSpaceString[i].toUpperCase();
               //console.log( noSpaceString[i].toUpperCase());
                }
                else {
               //console.log( noSpaceString[i].toLowerCase());
               result += noSpaceString[i].toLowerCase();
                }
            }
            return result;
}


console.log(caps(test));













