// Function to convert currency
document.getElementById("convert").addEventListener("click", function () {
    const amount = parseFloat(document.getElementById("amount").value);
    const rate = parseFloat(document.getElementById("currency").value);

    if (isNaN(amount)) {
        document.getElementById("result").textContent = "Please enter a valid amount.";
    } else {
        const convertedAmount = (amount * rate).toFixed(2);
        document.getElementById("result").textContent = `Converted Amount: ${convertedAmount}`;
    }
});
