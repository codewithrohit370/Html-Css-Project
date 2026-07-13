let dobOb = {
    year: 0,
    month: 0,
    day: 0,
}
let dateCuOb = {
    year: 0,
    month: 0,
    day: 0,
}


function Submit() {
    let dob = document.querySelector(".dob")
    let dob2 = dob.value.split('-');
    let currentDate = document.querySelector(".today-date")
    let currentDateValue = currentDate.value.split('-');

    dobOb.year = Number(dob2[0]);
    dobOb.month = Number(dob2[1]);
    dobOb.day = Number(dob2[2]);


    dateCuOb.year = Number(currentDateValue[0]);
    dateCuOb.month = Number(currentDateValue[1]);
    dateCuOb.day = Number(currentDateValue[2]);

    CalculateAge()

    setInterval(()=>{
     document.querySelector(".container").remove();
    },2000)
    
}

function CalculateAge() {
    let year = dateCuOb.year - dobOb.year;
    let month = dateCuOb.month - dobOb.month;
    let day = dateCuOb.day - dobOb.day;
    let html;

    if (day < 0) {

        const previousMonthDays = new Date(dateCuOb.year, dateCuOb.month - 1, 0).getDate();

        day += previousMonthDays;
        month--;
    }
    if (month < 0) {
        year--;
        month += 12;
    }
    html = `<div class="container">
                <div class="popup">
                    <p>Year:${year}</p>
                    <p>Month: ${month}</p>
                    <p>Day: ${day}</p>
                </div>
            </div>
                `
    let body = document.querySelector("body");
    body.insertAdjacentHTML("afterbegin", html);
}