let x = 121;

const reverser = (x) => {

    let number = x.toString().split('');

    let y = number.length/2;
    let z = number.length;

    if (Math.sign(x) === -1) {
        console.log('false')
        return false
    }
    
    for( let i = 0; i < y; i++){
        z = z-1;
       
        digit = number[i]
        digit2 = number[z]
        if (digit !== digit2){
            console.log('false')
            return false
        }
    }
   
    console.log('true')
    return true;


    
   

    // if (ans - x === 0) {
    //     console.log(true) 
    // }
    // else {
    //     console.log(false)
    // }


}


reverser(x)