module.exports = function toReadable (number) {
    const arrayNumTo10 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arrayTy= ['','','twenty', 'thirty' , 'forty', 'fifty' , 'sixty', 'seventy', 'eighty', 'ninety'];
    const arrayMore10 = ['ten','eleven','twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    if (number === 0) {
        return 'zero';
    }
    if (number / 10 < 1) {
        return arrayNumTo10[number];
    }
    if (number / 10 >= 1 && number / 20 < 1) {
        return arrayMore10[number-10];
    }
    if (number / 20 >= 1 && number / 100 < 1) {
        return (arrayTy[parseInt(number / 10)] + ' ' + arrayNumTo10[number % 10]).trim();
    }
    if (number / 100 >= 1) {
        if (number % 100 < 10) {
            return (arrayNumTo10[parseInt(number /100)] + ' ' + 'hundred' + " " + arrayNumTo10[number % 100]).trim();
        }
        if (number % 100 < 20 && number % 100 >= 10) {
            return (arrayNumTo10[parseInt(number /100)] + ' ' + 'hundred' + " " + arrayMore10[number % 10]).trim();
        }
        if (number % 100 >= 20 ) {
            return (arrayNumTo10[parseInt(number /100)] + ' ' + 'hundred' + " " + arrayTy[+number.toString().charAt(1)] + ' ' + arrayNumTo10[number % 10]).trim();
        }
    }
}
