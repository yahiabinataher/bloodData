

const search = prompt("Search Now")

//filter data

 const result = blood.filter((item) => {
   return item.gender === search ||
    item.age >= search ||
    item.location === search ||
    item.group === search
 }

)


// final data
 const finalData = []

 //get data

 result.map((data) => {
    finalData.push(data)
 })

 //show data

 console.table(finalData);





  










