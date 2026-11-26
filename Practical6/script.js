// Timer: change promotional message
        setTimeout(function() {
            document.getElementById("offer").innerHTML =
                "Book now for exciting holidays!";
        }, 3000);

        // Callback function
        function greet(callback) {
            callback();
        }

        greet(function() {
            console.log("Welcome to WanderGo!");
        });

        // Fetch API
        async function loadPackages() {
            let result = document.getElementById("result");
            result.innerHTML = "Loading packages...";

            try {
                let response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts?_limit=5"
                );

                if (!response.ok) {
                    throw new Error("Unable to load packages");
                }

                let data = await response.json();

                result.innerHTML = data.map(function(item) {
                    return "<p>" + item.title + "</p>";
                }).join("");

            } catch (error) {
                result.innerHTML = "Error loading packages.";
            }
        }

        // Local Storage
        function savePlace() {
            let place = document.getElementById("place").value;
            localStorage.setItem("destination", place);
            sessionStorage.setItem("currentPlace", place);
            document.getElementById("message").innerHTML =
                "Selected destination: " + place;
        }

        // Restore saved destination
        window.onload = function() {
            let saved = localStorage.getItem("destination");

            if (saved) {
                document.getElementById("place").value = saved;
            }

            setInterval(function() {
                console.log("Explore new travel destinations!");
            }, 5000);
        };