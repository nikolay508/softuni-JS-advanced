function fruits(fruit, weightGrams, priceKG){
    let weightKG = weightGrams / 1000
    let money = priceKG * weightKG
    console.log(`I need $${money.toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${fruit}.`)
}