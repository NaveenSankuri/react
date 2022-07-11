function AgeSatge(n) {
    if (n < 0) {
        console.log("Enter properly");
    }
    else if (n <= 17) {
        console.log("Children")
    }
    else if (n >= 18 && n <= 24) {
        console.log("Teenager")
    }
    else if (n >= 25 && n <= 35) {
        console.log("Adult")
    }
    else if (n >= 36 && n <= 55) {
        console.log("Men")
    }
    else if (n >= 55 && n <= 80) {
        console.log("senier citigen")
    }
    else {
        console.log("The legend")
    }
}
var age = 34
AgeSatge(age)