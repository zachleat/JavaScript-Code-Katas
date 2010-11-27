BowlingGameTest = TestCase('BowlingGameTest');

BowlingGameTest.prototype.setUp = function()
{
    this.g = new Game();
};

BowlingGameTest.prototype.rollMany = function(n, pins)
{
    for(var j = 0; j < n; j++) {
        this.g.roll(pins);
    }
};

BowlingGameTest.prototype.rollSpare = function()
{
    this.g.roll(5);
    this.g.roll(5);
};

BowlingGameTest.prototype.rollStrike = function()
{
    this.g.roll(10);
};

BowlingGameTest.prototype.testGutterGame = function()
{
    this.rollMany(20, 0);
    assertEquals(0, this.g.score());
};

BowlingGameTest.prototype.testAllOnes = function()
{
    this.rollMany(20, 1);
    assertEquals(20, this.g.score());
};

BowlingGameTest.prototype.testOneSpare = function()
{
    this.rollSpare();
    this.g.roll(3);
    this.rollMany(17, 0);

    assertEquals(16, this.g.score());
};

BowlingGameTest.prototype.testOneStrike = function()
{
    this.rollStrike();
    this.g.roll(3);
    this.g.roll(4);
    this.rollMany(16, 0);

    assertEquals(24, this.g.score());
};

BowlingGameTest.prototype.testPerfectGame = function()
{
    this.rollMany(12, 10);
    assertEquals(300, this.g.score());
};
