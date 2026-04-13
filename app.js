const mainDisp = document.getElementById('main-display');
const upperDisp = document.getElementById('upper-display');

function addText(val) {
    mainDisp.value += val;
}

function clearAll() {
    mainDisp.value = "";
    upperDisp.innerText = "";
}

// Custom function for Numerical Integration (Simpson's Rule)
function integrate(f, a, b) {
    const n = 100; // Intervals
    const h = (b - a) / n;
    let sum = math.evaluate(f, {x: a}) + math.evaluate(f, {x: b});

    for (let i = 1; i < n; i++) {
        let x = a + i * h;
        sum += math.evaluate(f, {x: x}) * (i % 2 === 0 ? 2 : 4);
    }
    return (h / 3) * sum;
}

function integratePrompt() {
    const func = prompt("Enter function of x (e.g., x^2):", "x^2");
    const lower = parseFloat(prompt("Lower bound:", "0"));
    const upper = parseFloat(prompt("Upper bound:", "1"));
    
    if(func && !isNaN(lower)) {
        const res = integrate(func, lower, upper);
        upperDisp.innerText = `∫(${func}) from ${lower} to ${upper}`;
        mainDisp.value = res;
    }
}

function solve() {
    try {
        let expression = mainDisp.value;
        upperDisp.innerText = expression + " =";
        
        // Use Math.js to evaluate complex engineering strings
        let result = math.evaluate(expression);
        
        // Format result to avoid long decimals
        mainDisp.value = math.format(result, { precision: 10 });
    } catch (e) {
        mainDisp.value = "Syntax Error";
    }
}