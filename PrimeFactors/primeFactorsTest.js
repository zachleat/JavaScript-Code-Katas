PrimeFactorsTest = TestCase("PrimeFactorsTest");

PrimeFactorsTest.prototype.testOne = function(){
    assertEquals([], PrimeFactors.generate(1));
};

PrimeFactorsTest.prototype.testTwo = function(){
    assertEquals([2], PrimeFactors.generate(2));
};

PrimeFactorsTest.prototype.testThree = function()
{
    assertEquals([3], PrimeFactors.generate(3));
};

PrimeFactorsTest.prototype.testFour = function()
{
    assertEquals([2,2], PrimeFactors.generate(4));
};

PrimeFactorsTest.prototype.testSix = function()
{
    assertEquals([2,3], PrimeFactors.generate(6));
};

PrimeFactorsTest.prototype.testEight = function()
{
    assertEquals([2,2,2], PrimeFactors.generate(8));
};

PrimeFactorsTest.prototype.testNine = function()
{
    assertEquals([3,3], PrimeFactors.generate(9));
};