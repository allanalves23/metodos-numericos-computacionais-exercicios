module.exports = {
    
    letterA: function (numerator = 4, denominator = 1, terms = 200000) {
        let piTerms = []
        let pi = 0
        let op = 'add'

        printHeader('LETTER A')
        
        for (let i = 1; i <= terms; i++) {
            pi = op === 'add' ? pi + numerator / denominator : pi - numerator / denominator 
            op = op === 'add' ? 'minus' : 'add'
            denominator += 2
            
            piTerms.push(pi)
            
            printRow(i, pi)
        }
        
        printFooter()
        
        return piTerms
    },
    letterB: function (terms = []) {
        const acceptablePiValues = [3.14 , 3.141, 3.1415, 3.14159]
        const termsQuantity = []

        for (let i = 0; i < terms.length; i++) {
            if(terms[i].toString().indexOf(acceptablePiValues[termsQuantity.length]) !== -1){
                termsQuantity.push({
                    termIndex: i + 1,
                    valueFound: terms[i], 
                    acceptableValue: acceptablePiValues[termsQuantity.length]
                })
            }
        }

        return termsQuantity
    }
}

function printHeader(title){
    // function to print the table header
    console.log(`========= ${title} =========`)
    console.log('TERM  |   VALUE')
}

function printRow(index, value) {
    // function to print current value by the index value
    console.log(`#${index}  -   ${value}`)
}

function printFooter(){
    // function to print the table footer
    console.log('======================================')
}