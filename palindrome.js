let orginalword="kaviya"
let word=orginalword.split("")
 let reversedword=""
for(i=word.length-1;i>=0;i--)

{
  reversedword+=orginalword[i]

}
if(reversedword===orginalword)
{
    console.log("this is palindrome")
}
else
{
    console.log("this is not a palindrome")
}
