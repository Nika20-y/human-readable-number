module.exports = function toReadable (number) {
    const numbers = {
        '0':'zero',
        '1':'one',
        '2': 'two',
        '3':'three',
        '4':'four',
        '5':'five',
        '6':'six',
        '7':'seven',
        '8':'eight',
        '9':'nine',
        '10':'ten',
        '11':'eleven',
        '12':'twelve',
        '13':'thirteen',
        '14':'fourteen',
        '15':'fifteen',
        '16':'sixteen',
        '17':'seventeen',
        '18':'eighteen',
        '19':'nineteen',
        '20':'twenty',
        '30':'thirty',
        '40':'forty',
        '50':'fifty',
        '60':'sixty',
        '70':'seventy',
        '80':'eighty',
        '90':'ninety'
    }

    number = String(number);
    if(numbers[number]!==undefined){
        return numbers[number];
    }
    else{
        if(number.length===2){
            number = numbers[number[0]+'0']+' '+numbers[number[1]];
        }
        else if(number.length===3){
            if(numbers[number[1]+number[2]]!==undefined){
                number = numbers[number[0]]+' hundred '+numbers[number[1]+number[2]];
            }
            else if(number[1]==='0' && number[2]==='0'){
                number = numbers[number[0]] + ' hundred';
            }
            else {
                if (number[1] === '0') {
                    number = numbers[number[0]] + ' hundred ' + numbers[number[2]];
                }
                else if (number[2] === '0') {
                    number = numbers[number[0]] + ' hundred ' + numbers[number[1] + '0'];
                }
                else {
                    number = numbers[number[0]] + ' hundred ' + numbers[number[1] + '0'] + ' ' + numbers[number[2]];
                }
            }
        }
    }
    return number;
}
