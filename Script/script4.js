    // Product class with name and price fields
    class Product {
        constructor(name, price) {
          this.name = name;
          this.price = price;
        }
      }
      
      // Flag to track if the price field has been clicked
      let priceFieldClicked = false;
      
      // Event listener for the price field click
      document.getElementById("productPrice").addEventListener("click", function() {
        if (!priceFieldClicked) { // If priceFieldClicked is false
          let prices = ''; // Initialize an empty string for prices
          for (let i = 0; i < 8; i++) { // Loop 8 times
            const randomPrice = Math.floor(Math.random() * (120 - 10 + 1)) + 10; // Generate a random price between 10 and 120
            prices += randomPrice + '\n'; // Add the random price followed by a line break to the prices string
          }
          this.value = prices.trim(); // Set the generated prices as the value of the price field
          priceFieldClicked = true; // Update the flag to prevent further number generation on click
        }
      });
      
      // Flag to track if the product name field has been clicked
      let productNameClicked = false;
      
      // Arrays containing adjectives, nouns, and suffixes for generating product names
      let adjectives = [
      "Mega",
      "Epic",
      "Stellar",
      "Supreme",
      "Incredible",
      "Turbo",
      "Phenomenal",
      "Legendary",
      "Mind-blowing",
      "Spectacular",
      "Fantastic",
      "Out-of-this-world",
      "Unbelievable",
      "Top-notch",
      "Astounding",
      "Fabulous",
      "Splendid",
      "Exceptional",
      "Marvelous",
      "Unparalleled",
      "Electrifying",
      "Awe-inspiring",
      "Transcendent",
      "Insane",
      "Dazzling",
      "Groovy",
      "Majestic",
      "Rocking",
      "Sensational",
      "Wondrous"
      ];
        let nouns = [
      "Banshee",
      "Wendigo",
      "Kraken",
      "Chupacabra",
      "Manticore",
      "Gorgon",
      "Jackalope",
      "Nuckelavee",
      "Bogeyman",
      "Dullahan",
      "Harpy",
      "Skinwalker",
      "Wraith",
      "Chimera",
      "Revenant",
      "Basilisk",
      "Siren",
      "Imp",
      "Goblin",
      "Shadowkin",
      "Will-o'-the-wisp",
      "Lycanthrope",
      "Gryphon",
      "Kelpie",
      "Minotaur",
      "Poltergeist",
      "Satyr",
      "Vampire",
      "Yeti",
      "Zombie"
      ];
        let suffixes = [
      "Steak",
      "Bacon",
      "Ribs",
      "Brisket",
      "Chops",
      "Sausage",
      "Jerky",
      "Ham",
      "Burger",
      "Turkey",
      "Duck",
      "Venison",
      "Salami",
      "Prosciutto",
      "Pastrami",
      "Pancetta",
      "Bologna",
      "Mortadella",
      "Guanciale",
      "Carpaccio",
      "Filet",
      "Tripe",
      "Liver",
      "Kidney",
      "Tongue",
      "Haggis",
      "Pâté",
      "Bresaola",
      "Andouille",
      "Bloodwurst"
      ];
      
      // Event listener for the product name field click
      document.getElementById("productName").addEventListener("click", function() {
        if (!productNameClicked) { // If productNameClicked is false
          let names = ''; // Initialize an empty string for names
          for (let i = 0; i < 8; i++) { // Loop 8 times
            const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]; // Select a random adjective
            const randomNoun = nouns[Math.floor(Math.random() * nouns.length)]; // Select a random noun
            const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)]; // Select a random suffix
            const productName = `${randomAdjective} ${randomNoun} ${randomSuffix}`; // Combine the words
            names += productName + '\n'; // Add the generated product name followed by a line break to the names string
          }
          this.value = names.trim(); // Set the generated product names as the value of the product name field
          productNameClicked = true; // Update the flag to prevent further name generation on click
        }
        
      });
      // Event listener for the Populate Products button click
      document.getElementById("populateButton").addEventListener("click", function() {
        const productNames = document.getElementById("productName").value.split('\n');
        const productPrices = document.getElementById("productPrice").value.split('\n');
      
        const products = [];
      
        // Check if both fields have values
        if (productNames.length === productPrices.length && productNames[0] !== "" && productPrices[0] !== "") {
          for (let i = 0; i < productNames.length; i++) {
            const productName = productNames[i];
            const productPrice = parseFloat(productPrices[i]);
      
            // Create Product instances and add them to the products array
            const product = new Product(productName, productPrice);
            products.push(product);
          }
      
          // You now have an array of Product instances called 'products'
          console.log(products); // You can use this array as needed
        } });
      // Function to calculate the average of an array of numbers
      function calculateAverage(numbers) {
        const sum = numbers.reduce((acc, val) => acc + val, 0);
        return sum / numbers.length;
      }
      
      // Function to calculate the standard deviation of an array of numbers
      function calculateStandardDeviation(numbers) {
        const average = calculateAverage(numbers);
        const squaredDifferences = numbers.map(num => Math.pow(num - average, 2));
        const avgSquareDiff = calculateAverage(squaredDifferences);
        return Math.sqrt(avgSquareDiff);
      }
      
      // Event listener for the Populate Products button click
      document.getElementById("populateButton").addEventListener("click", function() {
        const productNames = document.getElementById("productName").value.split('\n');
        const productPrices = document.getElementById("productPrice").value.split('\n');
      
        const products = [];
      
        // Check if both fields have values
        if (productNames.length === productPrices.length && productNames[0] !== "" && productPrices[0] !== "") {
          for (let i = 0; i < productNames.length; i++) {
            const productName = productNames[i];
            const productPrice = parseFloat(productPrices[i]);
      
            // Create Product instances and add them to the products array
            const product = new Product(productName, productPrice);
            products.push(product);
          }
      
          // Calculate average price
          const prices = products.map(product => product.price);
          const averagePrice = calculateAverage(prices);
      
          // Calculate standard deviation of prices
          const standardDeviation = calculateStandardDeviation(prices);
      
          // Find the cheapest product
          const cheapestProduct = products.reduce((cheapest, current) => {
            return current.price < cheapest.price ? current : cheapest;
          }, products[0]);
      
          // Display results
          console.log("Average Price:", averagePrice);
          console.log("Standard Deviation of Prices:", standardDeviation);
          console.log("Cheapest Product:", cheapestProduct.name, "-", cheapestProduct.price);
          
          // You now have access to the average price, standard deviation, and cheapest product
          // Feel free to use these values as needed
        } else {
          alert("Please generate names and prices first, or check data validity and cohesion!");
        }
      });
      // Update HTML elements with calculated values
      document.getElementById("populateButton").addEventListener("click", function() {
          const productNames = document.getElementById("productName").value.split('\n');
          const productPrices = document.getElementById("productPrice").value.split('\n');
      
          const products = [];
      
          if (productNames.length === productPrices.length && productNames[0] !== "" && productPrices[0] !== "") {
            for (let i = 0; i < productNames.length; i++) {
              const productName = productNames[i];
              const productPrice = parseFloat(productPrices[i]);
              const product = new Product(productName, productPrice);
              products.push(product);
            }
      
            const prices = products.map(product => product.price);
            const averagePrice = calculateAverage(prices);
            const standardDeviation = calculateStandardDeviation(prices);
            const cheapestProduct = products.reduce((cheapest, current) => {
              return current.price < cheapest.price ? current : cheapest;
            }, products[0]);
      
            // Update HTML elements with data and display results section
            document.getElementById("cheapestProductName").textContent = cheapestProduct.name;
            document.getElementById("cheapestProductPrice").textContent = cheapestProduct.price;
            document.getElementById("standardDeviation").textContent = standardDeviation.toFixed(2);
            document.getElementById("averagePrice").textContent = averagePrice.toFixed(2);
      
            // Show the results section
            document.querySelector('.result-container').style.display = 'block';
          } 
          
        });