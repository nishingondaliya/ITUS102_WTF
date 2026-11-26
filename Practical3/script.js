 
        function calculate() {
            const income = Number(document.getElementById("income").value);
            const loan = Number(document.getElementById("loan").value);
            const rate = Number(document.getElementById("rate").value);
            const years = Number(document.getElementById("years").value);

            let result = "";
            if (income >= 25000 && loan > 0 && rate >= 0 && years > 0) {
                result = "Eligible for loan (demo calculation).<br>";
            } else {
                result = "Not eligible. Check your input values.<br>";
            }

            var interest = (loan * rate * years) / 100;
            var total = loan + interest;
            var emi = total / (years * 12);

            result += "Total Interest: ₹" + interest.toFixed(2) + "<br>";
            result += "Total Amount: ₹" + total.toFixed(2) + "<br>";
            result += "Monthly EMI (approx.): ₹" + emi.toFixed(2) + "<br>";

            switch (true) {
                case income >= 50000:
                    result += "Income Category: High";
                    break;
                case income >= 25000:
                    result += "Income Category: Medium";
                    break;
                default:
                    result += "Income Category: Low";
            }

            document.getElementById("result").innerHTML = result;
        }
    