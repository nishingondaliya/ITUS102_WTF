function validateForm() {
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let mobile = document.getElementById("mobile").value.trim();
            let password = document.getElementById("password").value;
            let confirm = document.getElementById("confirm").value;

            let namePattern = /^[A-Za-z ]+$/;
            let mobilePattern = /^[0-9]{10}$/;
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!namePattern.test(name)) {
                alert("Enter a valid name");
                return false;
            }

            if (!emailPattern.test(email)) {
                alert("Enter a valid email");
                return false;
            }

            if (!mobilePattern.test(mobile)) {
                alert("Enter a 10-digit mobile number");
                return false;
            }

            if (password.length < 8) {
                alert("Password must contain at least 8 characters");
                return false;
            }

            if (password !== confirm) {
                alert("Passwords do not match");
                return false;
            }

            alert("Registration successful!");
            return false;
        }