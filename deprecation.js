// get values specified in HTML for deprecation calc function
function getDeprecation() {
    var startingValue = document.getElementById("start").value;

    var deprecationAmount = document.getElementById("deprecation-amount").value;
    var deprecationIntervalDays = document.getElementById("interval-days").value;

    var deprecationPeriodDays = document.getElementById("period-days").value;

    var endValue = deprecationCalc(startingValue, deprecationAmount, deprecationIntervalDays, deprecationPeriodDays);
    console.log("Deprecation end value", endValue);

    var output = document.getElementById("end-value");
    //console.log(output.innerText);
    output.innerText = endValue;
    document.getElementById("results").removeAttribute("hidden");
}

/*
    Calculate the deprecation given:
        starting value
        deprecation (i.e. subtract) amount
        number of days per deprecation cycle
        total period of deprecation, in days
*/
function deprecationCalc(startingValue, deprecationAmount, intervalDays, periodDays) {
    var endValue = startingValue - deprecationAmount * (periodDays/intervalDays);
    return endValue;
}
