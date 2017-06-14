describe('Our stokvel app', function(){
  it('should be able to calculate the ideal outcome', function(){
    // members, amount, duration
    var amounts = calculateIdealAmounts(20, 100, 12);
    assert.equal(24000, amounts.totalAmount);
    assert.equal(1200, amounts.totalAmountPerPerson);

    var amounts = calculateIdealAmounts(10, 50, 12);
    assert.equal(6000, amounts.totalAmount);
    assert.equal(600, amounts.totalAmountPerPerson);
  });

  it('should be able to calculate the income in reality', function(){
    var amounts = calculateAmountsInReality([
      {amount : 100, penalty : 10},
      {amount : 200, penalty : 10}], 2);

    assert.equal(320, amounts.totalAmount);
    assert.equal(160, amounts.totalAmountPerPerson);
  });
  // console.log(amounts);
  it("Should calculate expected monthly contributions",function(){
    assert.deepEqual([2000, 4000, 6000,8000,10000,12000,14000,16000,18000,20000,22000,24000], expectedMonthlyContributions(10, 200));
  });
  it('Should update reality graphs everytime data changes', function(){
    assert.equal(2,1);
  });
  it('should be able to create a data structure for the graph in reality', function(){
    assert.equal(2,1);
  });
});
