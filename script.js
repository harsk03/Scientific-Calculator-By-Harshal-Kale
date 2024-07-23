const inputValue = document.getElementById("user-input");

document.querySelectorAll(".numbers").forEach(function(item) {
    item.addEventListener("click", function(e) {
        if (inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerHTML.trim();
    });
});

document.querySelectorAll(".operations").forEach(function(item) {
    item.addEventListener("click", function(e) {
        let lastValue = inputValue.innerText.slice(-1);
        let currentValue = parseFloat(inputValue.innerText);

        if (e.target.innerHTML === "=") {
            try {
                if (inputValue.innerText.includes("/0")) {
                    alert("1/0 Division by Zero Error");
                } else {
                    inputValue.innerText = eval(inputValue.innerText);
                }
            } catch (error) {
                alert("Invalid Expression");
            }
        } else if (e.target.innerHTML === "AC") {
            inputValue.innerText = "0";
        } else if (e.target.innerHTML === "DEL") {
            inputValue.innerText = inputValue.innerText.slice(0, -1);
            if (inputValue.innerText.length === 0) {
                inputValue.innerText = "0";
            }
        } else if (e.target.innerHTML === "sin") {
            inputValue.innerText = Math.sin(degToRad(currentValue)).toFixed(4);
        } else if (e.target.innerHTML === "cos") {
            inputValue.innerText = Math.cos(degToRad(currentValue)).toFixed(4);
        } else if (e.target.innerHTML === "tan") {
            inputValue.innerText = Math.tan(degToRad(currentValue)).toFixed(4);
        } else if (e.target.innerHTML === "log") {
            inputValue.innerText = Math.log10(currentValue).toFixed(4);
        } else if (e.target.innerHTML === "sin⁻¹") {
            inputValue.innerText = radToDeg(Math.asin(currentValue)).toFixed(4);
        } else if (e.target.innerHTML === "cos⁻¹") {
            inputValue.innerText = radToDeg(Math.acos(currentValue)).toFixed(4);
        } else if (e.target.innerHTML === "tan⁻¹") {
            inputValue.innerText = radToDeg(Math.atan(currentValue)).toFixed(4);
        } else if (e.target.innerHTML === "ln") {
            inputValue.innerText = Math.log(currentValue).toFixed(4);
        } else {
            if (!isNaN(lastValue)) {
                inputValue.innerText += e.target.innerHTML;
            }
        }
    });
});

// Convert degrees to radians
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

// Convert radians to degrees
function radToDeg(radians) {
    return radians * (180 / Math.PI);
}
