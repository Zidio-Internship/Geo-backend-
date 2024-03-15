Here's a README documentation for the provided TypeScript file:

---

# Authentication API Documentation

This repository contains an authentication API built with Node.js, Express, and Passport.js for OAuth authentication with Facebook and Google.

## Endpoints

### 1. Facebook Authentication

#### Facebook OAuth Endpoint

- **Endpoint:** `GET /auth/facebook`
- **Description:** Initiates the Facebook OAuth authentication process.
- **Redirects to:** Facebook login page with email scope.

#### Facebook OAuth Redirect Endpoint

- **Endpoint:** `GET /auth/facebook/redirect`
- **Description:** Handles the redirection after Facebook OAuth authentication.
- **Redirects to:** `/home` on successful authentication, `/failed` on failure.

### 2. Google Authentication

#### Google OAuth Endpoint

- **Endpoint:** `GET /auth/google`
- **Description:** Initiates the Google OAuth authentication process.
- **Redirects to:** Google login page with profile scope.

#### Google OAuth Redirect Endpoint

- **Endpoint:** `GET /auth/google/redirect`
- **Description:** Handles the redirection after Google OAuth authentication.
- **Redirects to:** `/home` on successful authentication, `/login` on failure.

### 3. User Authentication

#### Login Endpoint

- **Endpoint:** `POST /login`
- **Description:** Allows users to log in using email and password.
- **Returns:** User details if login is successful.

#### Signup Endpoint

- **Endpoint:** `POST /signup`
- **Description:** Allows users to sign up by providing email and full name.
- **Returns:** Success message upon successful signup.

#### OTP Verification Endpoint

- **Endpoint:** `POST /verify`
- **Description:** Allows users to verify their OTP (One-Time Password) received during signup.
- **Returns:** Success message if OTP is valid, error message if invalid.

## Error Handling

- If any error occurs during authentication, login, signup, or OTP verification, the server returns appropriate error responses along with error messages.

---

Feel free to expand this documentation with additional details such as how to set up and run the API, any dependencies required, and any authentication mechanisms used. Additionally, you can include examples of request/response payloads for each endpoint if needed.