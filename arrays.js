let data =["chrome",true,132.8]
data[5]="webkit"
console.log(data)
data.pop()
console.log(data)
data.push("firefox")
console.log(data)
data.shift(data)
console.log(data)
data.unshift("chrome browser")
console.log(data)
data.push("safari")
for(let browser of data)
{
    console.log(browser)
}