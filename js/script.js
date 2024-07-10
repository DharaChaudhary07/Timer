
let dy = document.getElementById('dy');
let hr = document.getElementById('hr');
let mn = document.getElementById('mn');
let sc = document.getElementById('sc');

const clock = () => {

    let day = 0;
    let hour = 23;
    let min = 55;
    let sec = 0;

    let days = day;
    let hours = hour;
    let minutes = min;
    let seconds = sec;

    setInterval(() => {

        sec++;
        // sc.innerHTML =  sec;

        if(sec < 10){
            sc.innerHTML = '0' + sec;
        }else{
            sc.innerHTML = sec;
        }

        if(sec >=59){

            min++;
            sec = 0;
            sc.innerHTML = sec;
            // mn.innerHTML = min;

        }

        if(min < 10){
            mn.innerHTML = '0' + min;
        }else{
            mn.innerHTML = min;
        }

        if(min >= 59){

            hour++;
            min = 0;
            mn.innerHTML = min;
            // hr.innerHTML = hour;
        }

        if(hour < 10){
            hr.innerHTML = '0' + hour;
        }else{
            hr.innerHTML = hour;
        }

        if(hour >= 24){
            day++;
            hour = 0;
            hr.innerHTML = hour;
            // dy.innerHTML = day;
        }


        if(day < 10){
            dy.innerHTML = '0' + day;
        }else{
            dy.innerHTML = day;
        }

    },100)

}

clock();