module.exports = function zeros(expression) {
    // your solution
    //0 = 5*2, then define all two and five in all elements

    //split string on *
    let arrExpr = (expression.split('*'));
    //   console.log(arrExpr);  
    let typeOfFactor = {
        'single': []
        , 'double': []
    };

    //define type of factorial
    arrExpr.forEach(elem => {
        if (elem.endsWith('!!')) {
            typeOfFactor['double'].push(parseInt(elem));
        } else {
            typeOfFactor['single'].push(parseInt(elem));
        }
    })
    //   console.log(typeOfFactor); 

    //define 2 and 5
    let twoAndfive = {
        'two': 0
      , 'five': 0
    };

    //make division on 2 and 5 on the all array elements
    typeOfFactor['single'].forEach(elem => {
        for (let i = elem; i > 0; i--) {
            let devider = i;
            for (devider; devider % 5 == 0; devider /= 5){
                twoAndfive['five']++;
            }
            for (devider; devider % 2 == 0; devider /= 2) {
                twoAndfive['two']++;
            }
        }
    });

    typeOfFactor['double'].forEach(elem => {
        for (let i = elem; i > 0; i -= 2) {
            let devider = i;
            for (devider; devider % 5 == 0; devider /= 5) {
                twoAndfive['five']++;
            }
            for (devider; devider % 2 == 0; devider /= 2) {
                twoAndfive['two']++;
            }
        }
    });

    // console.log(twoAndfive);
    // result zero trailing
    if (twoAndfive['two'] > twoAndfive['five']) {
        return twoAndfive['five'];
    } else{
        return twoAndfive['two'];
    } 

    
}
