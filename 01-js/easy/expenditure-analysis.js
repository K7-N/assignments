/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
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
