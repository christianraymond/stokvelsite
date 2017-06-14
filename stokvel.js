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
    data.push(prevMonth+members*amount);
    prevMonth = prevMonth+members*amount;
  }
  console.log(data);
  return data;
}
function updateRealityGraph() {
  var inputBoxes = document.querySelectorAll(".amounts");
  var realityData = [];
  var runningTotal = 0;
  for(var i=0; i<inputBoxes.length; i++){
    runningTotal += Number(inputBoxes[i].value)
    realityData.push(runningTotal);
  }
  //console.log(realityData);
  realityDataset.datasets[0].data = realityData;
  realityChart.update();
}


function updateIdealGraph() {
  var members = document.querySelector("#noOfMembers");
  var monthlyAmount = document.querySelector("#monthlyAmmount");
  var data = expectedMonthlyContributions(Number(members.value),Number(monthlyAmount.value));

  idealDataset.datasets[0].data = data;
  idealChart.update();

  realityDataset.datasets[1].data = data;

  var amounts = document.querySelectorAll(".amounts");
  amounts.forEach(function(amount){
    amount.value = Number(members.value) * Number(monthlyAmount.value);
  });

  updateRealityGraph();

}
