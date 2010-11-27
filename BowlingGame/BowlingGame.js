function Game()
{
    this.rolls = [];
    this.currentRoll = 0;
}

Game.prototype.roll = function(pins)
{
    this.rolls[this.currentRoll++] = pins;
};

Game.prototype.score = function()
{
    var points = 0,
        frameIndex = 0;

    for(var frame = 0; frame<10; frame++) {
        if(this.isStrike(frameIndex)) {
            points += this.strikeBonus(frameIndex);
            frameIndex++;
        } else if(this.isSpare(frameIndex)) {
            points += this.spareBonus(frameIndex);
            frameIndex += 2;
        } else {
            points += this.sumOfBallsInFrame(frameIndex);
            frameIndex += 2;
        }
    }

    return points;
};

Game.prototype.isSpare = function(frameIndex)
{
    return this.rolls[frameIndex] + this.rolls[frameIndex+1] == 10;
};

Game.prototype.spareBonus = function(frameIndex)
{
    return 10 + this.rolls[frameIndex+2];
};

Game.prototype.isStrike = function(frameIndex)
{
    return this.rolls[frameIndex] == 10;
};

Game.prototype.strikeBonus = function(frameIndex)
{
    return 10 + this.rolls[frameIndex+1] + this.rolls[frameIndex+2];
};

Game.prototype.sumOfBallsInFrame = function(frameIndex)
{
    return this.rolls[frameIndex] + (this.rolls[frameIndex+1] || 0);
};
