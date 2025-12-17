var browserversion 
{
    var browsername="Chrome"
    let browserversion= "143.0.7499.110 "
        const loadurl="https://www.google.com/"

            console.log("Inside the Block : "+browsername)
    console.log("Inside the Block : "+browserversion)
    console.log("Indside the Block : "+loadurl)
}

console.log("Outside the Block : "+browserversion) //undefined
    console.log("Outside the Block : "+browsername) 
        console.log("outside the Block : "+loadurl)// Reference error
