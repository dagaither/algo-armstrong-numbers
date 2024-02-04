// How can you make this more scalable and reusable later?

exports.findArmstrongNumbers = function() {

};

function findArmstrongNumbers(numbers) {
    const armstrongs = [];

    for (const num of numbers) {
        if (num < 10) {
            armstrongs.push(num);
        } 
        
        else {
            const digits = num.toString().split('').map(Number);
            const power = digits.length;
            let sum = 0;

            for (let i = 0; i < power; i++) {
                sum += Math.pow(digits[i], power);
            }

            if (sum === num) {
                armstrongs.push(num);
            }
        }
    }

    return armstrongs;
}
