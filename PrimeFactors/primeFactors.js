PrimeFactors = {};
PrimeFactors.generate = function(n)
{
    var primes = [];
    for(var candidate = 2; n > 1; candidate++) {
        for(; n % candidate === 0; n /= candidate) {
            primes.push(candidate);
        }
    }
    return primes;
};