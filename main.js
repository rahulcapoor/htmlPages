function reverse(str) {
    if (str === "") {
        return str
    } else {
        return reverse(str.substr(1)) + str[0]
    }
}

function Solve(N) {
    var trueNumber = "";
    while (N >= 1) {
        N--;
        if (N % 2 == 0) {
            if (trueNumber) {
                trueNumber = trueNumber + "4";
            } else {
                trueNumber = 4;
            }
        } else {
            if (trueNumber) {
                trueNumber = trueNumber + "5";
            } else {
                trueNumber = 5;
            }
        }

        N /= 2;
    }
    if (trueNumber) {
        var len = String(trueNumber).length;
        trueNumber = reverse(String(trueNumber));
        for (var i = len - 1; i >= 0; i--)
            trueNumber += trueNumber[i];
        return trueNumber;
    }
}

console.log(Solve(1));
console.log(Solve(2));
console.log(Solve(3));
console.log(Solve(4));
console.log(Solve(5));
console.log(Solve(6));
console.log(Solve(7));