function selectminutes(){
    let minutesselected = document.getElementById("minute-select").value;
    localStorage.setItem("selectedminutes", minutesselected); 
};

let savedMinutes = localStorage.getItem("selectedminutes");
if (savedMinutes) {
    document.getElementById("minute-select").value = savedMinutes;
};
