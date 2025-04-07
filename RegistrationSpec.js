describe("Registration Form", function() {
    beforeEach(function() {
        // Set up our document body with the registration form
        document.body.innerHTML = `
            <form id="registrationForm">
                <input type="text" id="username" name="username" required>
                <input type="email" id="email" name="email" required>
                <input type="password" id="password" name="password" required>
                <input type="password" id="confirmPassword" name="confirmPassword" required>
                <button type="submit">Register</button>
            </form>
        `;

        // Include the main script
        const script = document.createElement('script');
        script.src = '../scripts/main.js';
        document.head.appendChild(script);
    });

    it("should display an alert if passwords do not match", function() {
        document.getElementById('username').value = 'testuser';
        document.getElementById('email').value = 'test@example.com';
        document.getElementById('password').value = 'password123';
        document.getElementById('confirmPassword').value = 'password321';

        spyOn(window, 'alert');

        document.getElementById('registrationForm').dispatchEvent(new Event('submit'));

        expect(window.alert).toHaveBeenCalledWith("Passwords do not match!");
    });

    it("should log user data on successful registration", function() {
        document.getElementById('username').value = 'testuser';
        document.getElementById('email').value = 'test@example.com';
        document.getElementById('password').value = 'password123';
        document.getElementById('confirmPassword').value = 'password123';

        spyOn(console, 'log');

        document.getElementById('registrationForm').dispatchEvent(new Event('submit'));

        expect(console.log).toHaveBeenCalledWith("User registered successfully:", {
            username: 'testuser',
            email: 'test@example.com',
            password: 'password123'
        });
    });
});
