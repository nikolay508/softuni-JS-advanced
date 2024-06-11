function attachEventsListeners() {
    let daysField = document.querySelector('#days'); let daysBtn = document.querySelector('#daysBtn');
    let hoursField = document.querySelector('#hours'); let hoursBtn = document.querySelector('#hoursBtn');
    let minsField = document.querySelector('#minutes'); let minutesBtn = document.querySelector('#minutesBtn');
    let secsField = document.querySelector('#seconds'); let secondsBtn = document.querySelector('#secondsBtn');

    daysBtn.addEventListener('click', function(){
        let days = daysField.value; days = Number(days);
        hoursField.value = days * 24;
        minsField.value = days * 1440;
        secsField.value = days * 86400;
    });

    hoursBtn.addEventListener('click', function(){
        let hours = hoursField.value; hours = Number(hours);
        daysField.value = hours / 24;
        minsField.value = hours * 60;
        secsField.value = hours * 3600;
    });

    minutesBtn.addEventListener('click', function(){
        let mins = minsField.value; mins = Number(mins);
        daysField.value = mins / 1440;
        hoursField.value = mins / 60;
        secsField.value = mins * 60;
    });

    secondsBtn.addEventListener('click', function(){
        let secs = secsField.value; secs = Number(secs);
        daysField.value = secs / 86400;
        hoursField.value = secs / 3600;
        minsField.value = secs /60;
    });
}
