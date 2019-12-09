
let s = 'CDMXXX'
const dictionary = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
};


const romanTonum = (s) => {
    // Good Space But Slow
    // const dictionary = {
    //     'I': 1,
    //     'V': 5,
    //     'X': 10,
    //     'L': 50,
    //     'C': 100,
    //     'D': 500,
    //     'M': 1000
    // };

    let nums = s.split("")
    let total = 0;

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        const element2 = nums[index + 1];

        if (element === 'I' && element2 === 'V') {
            total = total + 4;
            index++;
        }
        else if (element === 'I' && element2 === 'X') {
            total = total + 9;
            index++;
        }
        else if (element === 'X' && element2 === 'L') {
            total = total + 40;
            index++;
        }
        else if (element === 'X' && element2 === 'C') {
            total = total + 90;
            index++;
        }
        else if (element === 'C' && element2 === 'D') {
            total = total + 400;
            index++;
        }
        else if (element === 'C' && element2 === 'M') {
            total = total + 900;
            index++;
        }
        else {
            total = total + dictionary[element]
        }


    }

    console.log(total)
    return total

}

const romanTonum2 = (s) => {
    //really fast but uses more space...
    const dictionary = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    };

    let nums = s.split("")
    let total = 0;

    for (let index = 0; index < nums.length; index++) {
        let element = nums[index];
        let element2 = nums[index + 1];
        // const combo = element + element2;

        if (dictionary[(element + element2)]) {
            total = total + dictionary[(element + element2)];
            index++;
        }
        else {
            total = total + dictionary[element]
        }

    }

    console.log(total)
    return total

}

romanTonum(s);
romanTonum2(s);