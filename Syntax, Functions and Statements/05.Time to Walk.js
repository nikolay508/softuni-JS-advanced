function task(steps, footprint, speedKM){
    let distanceKM = (steps * footprint)/1000
    let brakes = Math.floor((distanceKM*1000) / 500)
    let hours = distanceKM / speedKM
    let minutes = (hours * 60) + brakes
    let seconds = ((minutes - Math.floor(minutes)) * 60).toFixed()
    let finalHour = Math.floor(hours)
    let finalMinute = Math.floor(minutes)
    let finalSecond = Math.floor(seconds)
    console.log(`${String(finalHour).padStart(2, '0')}:${String(finalMinute).padStart(2, '0')}:${String(finalSecond).padStart(2, '0')}`)
}
