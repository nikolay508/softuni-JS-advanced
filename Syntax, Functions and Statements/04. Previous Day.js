function date(year, month, day){
    let date = new Date(year, month-1, day)
    date.setDate(date.getDate()-1)
    let previousYear = date.getFullYear()
    let previousMonth = date.getMonth()+1
    let previousDay = date.getDate()
    console.log(`${previousYear}-${previousMonth}-${previousDay}`)
}