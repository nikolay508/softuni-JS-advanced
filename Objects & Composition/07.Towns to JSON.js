function task(arr){
    arr.shift();
    let final = [];

    for(const str of arr){
        let [space, town, latitude, longitude] = str.split('|');

        latitude = JSON.parse(Number(latitude).toFixed(2));
        longitude = JSON.parse(Number(longitude).toFixed(2));
        let name = town.substring(1, town.length-1);

        final.push({Town: name, Latitude: latitude, Longitude: longitude});
    }
    console.log(JSON.stringify(final));
}
