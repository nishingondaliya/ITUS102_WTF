// Access element by ID
        function changeText() {
            document.getElementById("title").innerHTML =
                "Welcome to ShopEase!";
        }

        // Change CSS style
        function changeTheme() {
            document.body.style.backgroundColor = "lightblue";
        }

        // Create and append an element
        function addProduct() {
            let item = document.createElement("li");
            item.textContent = "Mouse";
            document.getElementById("products").appendChild(item);
        }

        // Handle user input
        function greet() {
            let name = document.getElementById("name").value;
            document.getElementById("output").textContent =
                "Hello, " + name + "!";
        }

        // Mouse event
        document.getElementById("message").onmouseover = function() {
            this.style.color = "red";
        };

        // Keyboard event
        document.getElementById("name").onkeyup = function() {
            document.getElementById("output").textContent = this.value;
        };