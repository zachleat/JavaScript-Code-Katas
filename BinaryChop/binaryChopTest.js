BinaryChopTest = TestCase('BinaryChop');

BinaryChopTest.prototype.testLengthZero = function()
{
    assertEquals(-1, BinaryChop(0, []));
};

BinaryChopTest.prototype.testLengthOne = function()
{
    assertEquals(0, BinaryChop(1, [1]));
    assertEquals(-1, BinaryChop(0, [1]));
    assertEquals(-1, BinaryChop(2, [1]));
};

BinaryChopTest.prototype.testLengthTwo = function()
{
    assertEquals(0, BinaryChop(1, [1,3]));
    assertEquals(1, BinaryChop(3, [1,3]));
    assertEquals(-1, BinaryChop(0, [1,3]));
    assertEquals(-1, BinaryChop(2, [1,3]));
    assertEquals(-1, BinaryChop(4, [1,3]));
};

BinaryChopTest.prototype.testLengthThree = function()
{
    assertEquals(0, BinaryChop(1, [1,3,5]));
    assertEquals(1, BinaryChop(3, [1,3,5]));
    assertEquals(2, BinaryChop(5, [1,3,5]));
    assertEquals(-1, BinaryChop(0, [1,3,5]));
    assertEquals(-1, BinaryChop(2, [1,3,5]));
    assertEquals(-1, BinaryChop(4, [1,3,5]));
    assertEquals(-1, BinaryChop(6, [1,3,5]));
};

BinaryChopTest.prototype.testLengthFour = function()
{
    assertEquals(0, BinaryChop(1, [1,3,5,7]));
    assertEquals(1, BinaryChop(3, [1,3,5,7]));
    assertEquals(2, BinaryChop(5, [1,3,5,7]));
    assertEquals(3, BinaryChop(7, [1,3,5,7]));
    assertEquals(-1, BinaryChop(0, [1,3,5,7]));
    assertEquals(-1, BinaryChop(2, [1,3,5,7]));
    assertEquals(-1, BinaryChop(4, [1,3,5,7]));
    assertEquals(-1, BinaryChop(6, [1,3,5,7]));
    assertEquals(-1, BinaryChop(8, [1,3,5,7]));
};