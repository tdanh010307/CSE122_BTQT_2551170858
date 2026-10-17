document.addEventListener("DOMContentLoaded", function () {
    const printBtn= document.getElementById("printBtn");
    const inputDay= document.getElementById("Day");
    const inputMonth= document.getElementById("Month");
    const inputYears= document.getElementById("Years")

    const displayDay= document.getElementById("displayDay");
    const displayMonth= document.getElementById("displayMonth");
    const displayYears= document.getElementById("displayYears");
    const displayDayOfWeek = document.getElementById("displayDayOfWeek");


    const daysOfWeek = [
                "Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", 
                "Thứ năm", "Thứ sáu", "Thứ bảy"
            ];
    
    printBtn.addEventListener("click",function(){
        const day = parseInt(inputDay.value);
        const month = parseInt(inputMonth.value);
        const year = parseInt(inputYears.value);
    
    const dateObj = new Date(year, month - 1, day);
        

        displayDay.textContent = day < 10 ? `0${day}` : day;
        displayMonth.textContent = `Tháng ${month}`;
        displayYears.textContent= year;
        const dayIndex = dateObj.getDay();
        displayDayOfWeek.textContent = daysOfWeek[dayIndex];
        printBtn.textContent = greeting;
    });
});