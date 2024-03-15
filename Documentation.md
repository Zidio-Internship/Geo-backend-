
Certainly! Here's the documentation in plain Markdown format:

---

# Authentication API Documentation

This repository contains an authentication API built with Node.js and Express.

## Endpoints

### 1. Signup User

**Endpoint:** `POST /signup`

**Description:** This endpoint allows users to sign up by providing their email and full name. Upon successful signup, an OTP (One-Time Password) is generated and associated with the user's email.

**Request Body:**
```json
{
  "email": "user@example.com",
  "fullname": "John Doe"
}
```

**Response:**
- **Status Code:** 201 (Created)
- **Body:** `{ "message": "success" }`

### 2. Login User

**Endpoint:** `POST /login`

**Description:** This endpoint allows users to log in by providing their email. It returns user details if the email is registered.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
- **Status Code:** 200 (OK)
- **Body:** User details (if found)

### 3. Verify OTP

**Endpoint:** `POST /verify-otp`

**Description:** This endpoint allows users to verify their OTP (One-Time Password) received during signup.

**Request Body:**
```json
{
  "email": "user@example.com",
  "otp": "123456"
}
```

**Response:**
- **Status Code:** 200 (OK) if OTP is valid
- **Status Code:** 404 (Not Found) if OTP is invalid

## Error Handling

- If any error occurs during signup, login, or OTP verification, the server returns a 500 (Internal Server Error) status code along with an error message.

---

You can copy and paste this Markdown content into your README.md file or any other documentation file. Adjust the formatting as needed for your purposes.