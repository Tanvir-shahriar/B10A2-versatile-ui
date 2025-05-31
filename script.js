        const menuIcon = document.getElementById('menu-icon');
        const navLinks = document.getElementById('nav-links');
      
        menuIcon.addEventListener('click', () => {
          navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
        });

        document.querySelector('.bmi-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const age = parseInt(document.getElementById('age').value);
        const sex = document.getElementById('sex').value;
        const activityFactor = document.getElementById('activity').value;

        if (isNaN(height) || isNaN(weight) || isNaN(age)) {
            alert("Please enter valid numeric values for height, weight, and age.");
            return;
        }

        // Convert height from cm to meters
        const heightInMeters = height / 100;

        // BMI calculation formula
        const bmi = weight / (heightInMeters * heightInMeters);

        // Display BMI result
        const bmiResult = document.getElementById('bmiResult');
        bmiResult.textContent = bmi.toFixed(2);

        // Determine weight status based on BMI
        let weightStatus = '';

        if (bmi < 18.5) {
            weightStatus = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            weightStatus = 'Healthy';
        } else if (bmi >= 25.0 && bmi < 29.9) {
            weightStatus = 'Overweight';
        } else {
            weightStatus = 'Obese';
        }

        const weightStatusElement = document.getElementById('weightStatus');
        weightStatusElement.textContent = weightStatus;
        });
