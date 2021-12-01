function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var data = {
        principal: principal,
        rate: rate,
        interest: interest.toFixed(2),
        year: year,
    };

    data = validateAmount(data)

    updateResult(data)

}

function validateAmount(data) {
    if (!data.principal || data.principal <= 0) {
        data.error = "Enter a positive number";
    }

    return data;
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}

function updateResult(data) {
    if (data.error) {
        document.getElementById('result').innerHTML = ""
        document.getElementById('principal').value = "";

        alert(data.error);
        document.getElementById('principal').focus();

    } else {
        document.getElementById('result').innerHTML = `
            If you deposit <span class="highlight">$${data.principal}</span>,<br>
            at an interest rate of <span class="highlight">${data.rate}%</span>.<br>
            You will receive an amount of <span class="highlight">$${data.interest}</span>,<br>
            in the year <span  class="highlight">${data.year}</span>
        `;
    }


}

document.getElementById("rate").addEventListener('change', () => {
    updateRate()
})

