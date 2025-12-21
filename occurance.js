let welcome="Hi students welcome to testleaf testleaf is a testing training institute in chennai testleaf provides a good quality training to the students"
let word="testleaf"

let sentence = welcome.split(" ")
let count=0

for(let i=0;i<sentence.length;i++)
{
   if(word===sentence[i])
   {
        count++;
   }
}

console.log("The word "+word+"  appears "+count+" times.");
)

