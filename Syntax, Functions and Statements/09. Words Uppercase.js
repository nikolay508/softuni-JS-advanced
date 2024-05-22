function task(str){
    let regex = /[^\w\s]/g
    let text = str.replace(regex, '')
    let words = text.split(/\s+/)
    console.log(words.join(', ').toUpperCase())
}
