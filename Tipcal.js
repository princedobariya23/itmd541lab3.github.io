document.addEventListener("DOMContentLoaded", function () {
    const billTotal = document.getElementById("billTotal");
    const tip = document.getElementById("tip");
    const tipPercentage = document.getElementById("tipPercentage");
    const tipAmount = document.getElementById("tipAmount");
    const totalWithTip = document.getElementById("totalWithTip");
    const tipPercentageDisplay = document.getElementById("tipPercentageDisplay");

    function updateTip() {
        const billValue = parseFloat(billTotal.value) || 0;
        const tipValue = parseInt(tip.value) || 0;

        const tipPercent = (billValue * tipValue) / 100;
        const total = billValue + tipPercent;

        tipPercentage.value = tipValue + "%";
        tipAmount.value = tipPercent.toFixed(2);
        totalWithTip.value = total.toFixed(2);

        const tipWidth = tip.offsetWidth;
        const tipPosition = (tipValue / 100) * tipWidth;
        const tipThumbWidth = 12;
        const displayLeft = tipPosition - tipThumbWidth / 2;
        tipPercentageDisplay.style.left = `calc(${displayLeft}px)`;
        tipPercentageDisplay.textContent = tipValue + "%";
    }

    function showTipPercentage() {
        tipPercentageDisplay.style.display = "block";
    }

    function hideTipPercentage() {
        tipPercentageDisplay.style.display = "none";
    }

    billTotal.addEventListener("input", updateTip);
    tip.addEventListener("input", updateTip);
    tip.addEventListener("mousemove", showTipPercentage);
    tip.addEventListener("mouseout", hideTipPercentage);

    updateTip();
});
