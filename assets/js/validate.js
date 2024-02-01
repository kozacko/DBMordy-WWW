
    function validateEmail() {
        var emailInput = document.querySelector('.payments-email');
        var email = emailInput.value;


        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        var errorMessages = document.querySelectorAll('.error-message');
        var successMessage = document.querySelector('.success-message');
        
        if (errorMessages.length > 0) {
            errorMessages.forEach(function (errorMessage) {
                errorMessage.parentNode.removeChild(errorMessage);
            });
        }
        
        if (successMessage) {
            successMessage.parentNode.removeChild(successMessage);
        }

        if (!emailRegex.test(email)) {
            var errorMessage = document.createElement('p');
            errorMessage.className = 'error-message';
            errorMessage.textContent = "❌ Wprowadź poprawny adres e-mail.";

            emailInput.parentNode.appendChild(errorMessage);
            return false; 
        } else {
            var successMessage = document.createElement('p');
            successMessage.className = 'success-message';

            var successText = document.createElement('span');
            successText.textContent = "✔";
            successText.className = 'text-green';

            var successTextOrange = document.createElement('span');
            successTextOrange.textContent = "Mail poprawny!";
            successTextOrange.className = 'text-orange';

            successMessage.appendChild(successText);
            successMessage.appendChild(successTextOrange);

            emailInput.parentNode.appendChild(successMessage);
        }

        return true; 
    }

    document.querySelector('.payments-email').addEventListener('input', validateEmail);





    function validateEmail2() {
        var emailInput = document.querySelector('.eemail2');
        var email = emailInput.value;


        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        var errorMessages = document.querySelectorAll('.error-message');
        var successMessage = document.querySelector('.success-message');
        
        if (errorMessages.length > 0) {
            errorMessages.forEach(function (errorMessage) {
                errorMessage.parentNode.removeChild(errorMessage);
            });
        }
        
        if (successMessage) {
            successMessage.parentNode.removeChild(successMessage);
        }

        if (!emailRegex.test(email)) {
            var errorMessage = document.createElement('p');
            errorMessage.className = 'error-message';
            errorMessage.textContent = "❌ Wprowadź poprawny adres e-mail.";

            emailInput.parentNode.appendChild(errorMessage);
            return false; 
        } else {
            var successMessage = document.createElement('p');
            successMessage.className = 'success-message';

            var successText = document.createElement('span');
            successText.textContent = "✔";
            successText.className = 'text-green';

            var successTextOrange = document.createElement('span');
            successTextOrange.textContent = "Mail poprawny!";
            successTextOrange.className = 'text-orange';

            successMessage.appendChild(successText);
            successMessage.appendChild(successTextOrange);

            emailInput.parentNode.appendChild(successMessage);
        }

        return true; 
    }

    document.querySelector('.eemail2').addEventListener('input', validateEmail2);



    function validateEmail3() {
        var emailInput = document.querySelector('.eemail3');
        var email = emailInput.value;


        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        var errorMessages = document.querySelectorAll('.error-message');
        var successMessage = document.querySelector('.success-message');
        
        if (errorMessages.length > 0) {
            errorMessages.forEach(function (errorMessage) {
                errorMessage.parentNode.removeChild(errorMessage);
            });
        }
        
        if (successMessage) {
            successMessage.parentNode.removeChild(successMessage);
        }

        if (!emailRegex.test(email)) {
            var errorMessage = document.createElement('p');
            errorMessage.className = 'error-message';
            errorMessage.textContent = "❌ Wprowadź poprawny adres e-mail.";

            emailInput.parentNode.appendChild(errorMessage);
            return false; 
        } else {
            var successMessage = document.createElement('p');
            successMessage.className = 'success-message';

            var successText = document.createElement('span');
            successText.textContent = "✔";
            successText.className = 'text-green';

            var successTextOrange = document.createElement('span');
            successTextOrange.textContent = "Mail poprawny!";
            successTextOrange.className = 'text-orange';

            successMessage.appendChild(successText);
            successMessage.appendChild(successTextOrange);

            emailInput.parentNode.appendChild(successMessage);
        }

        return true; 
    }

    document.querySelector('.eemail3').addEventListener('input', validateEmail3);

    function validateEmail4() {
        var emailInput = document.querySelector('.eemail4');
        var email = emailInput.value;


        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        var errorMessages = document.querySelectorAll('.error-message');
        var successMessage = document.querySelector('.success-message');
        
        if (errorMessages.length > 0) {
            errorMessages.forEach(function (errorMessage) {
                errorMessage.parentNode.removeChild(errorMessage);
            });
        }
        
        if (successMessage) {
            successMessage.parentNode.removeChild(successMessage);
        }

        if (!emailRegex.test(email)) {
            var errorMessage = document.createElement('p');
            errorMessage.className = 'error-message';
            errorMessage.textContent = "❌ Wprowadź poprawny adres e-mail.";

            emailInput.parentNode.appendChild(errorMessage);
            return false; 
        } else {
            var successMessage = document.createElement('p');
            successMessage.className = 'success-message';

            var successText = document.createElement('span');
            successText.textContent = "✔";
            successText.className = 'text-green';

            var successTextOrange = document.createElement('span');
            successTextOrange.textContent = "Mail poprawny!";
            successTextOrange.className = 'text-orange';

            successMessage.appendChild(successText);
            successMessage.appendChild(successTextOrange);

            emailInput.parentNode.appendChild(successMessage);
        }

        return true; 
    }

    document.querySelector('.eemail4').addEventListener('input', validateEmail4);
