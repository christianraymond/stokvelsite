function calculateIdealAmounts(members, amount, duration) {
  return {
    totalAmount: members * amount * duration,
    totalAmountPerPerson: amount * duration
  }
}

function calculateAmountsInReality(dataList, members) {
  var totalAmount = 0;
  var totalAmountPerPerson = 0;
  for (var i = 0; i < dataList.length; i++) {
    totalAmount += dataList[i].amount + dataList[i].penalty;
  }
  return {
    totalAmount: totalAmount,
    totalAmountPerPerson: totalAmount / members
  }
}

function expectedMonthlyContributions(members,amount) {
  var data = [];
  var prevMonth = 0;
  for(var i=0; i<12; i++){
    data.push(prevMonth+10*200);
    prevMonth = prevMonth+10*200;
  }
  console.log(data);
  return data;
}
function graphData() {

}
