const userInput = document.getElementById("num");
let output = document.getElementsByClassName("output")[0];

function result() {
    const userOption = document.getElementById("choose").value;
    if (userOption === "meter to kilometer" && userInput.value) {
        const res = userInput.value / 1000;
        output.innerHTML = res + " km";
    }  else if (userOption === "kilometer to meter" && userInput.value) {
        const res = userInput.value * 1000;
        output.innerHTML = res + " meter";
    }  else if (userOption === "hour to minutes" && userInput.value) {
        const res = userInput.value * 60;
        output.innerHTML = res + " min.";
    }  else if (userOption === "minutes to seconds" && userInput.value) {
        const res = userInput.value * 60;
        output.innerHTML = res + " sec.";
    }  else if (userOption === "seconds to hour" && userInput.value) {
        const res = userInput.value / 3600;
        output.innerHTML = res + " hr";
    }  else {
        output.innerHTML = "Please enter a valid Number !";
    }
}

