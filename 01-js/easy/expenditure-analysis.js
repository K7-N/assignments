/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let sol = [];
  let k = {};
  for(let j=0; j<transactions.length; j++){
    let i = transactions[j];
    let i1 = i["category"];
    if(i1 in k){
      sol[k[i1]]["totalSpent"] += i["price"];
    } else{
      let temp = {};
      temp["category"] = i1;
      temp["totalSpent"] = i["price"];
      k[i1] = sol.length;
      sol.push(temp);
    }
  }
  return(sol);
}
module.exports = calculateTotalSpentByCategory;
