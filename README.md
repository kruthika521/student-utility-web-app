# 🎓 Smart Student Utility Web App

## 📌 Project Overview

**Smart Student Utility** is a simple web application designed to help students perform common academic and programming-related tasks in one place.

The application provides multiple tools such as a **Grade Calculator, Palindrome Checker, Number Analyzer, Login Validation, and Dark Mode**. It is developed using basic web technologies: **HTML, CSS, and JavaScript**.

## 🚀 Features

* 🎓 Student Grade Calculator
* 🔁 Palindrome Checker
* 🔢 Number Analyzer
* 🔐 Simple Login Validation
* 🌙 Dark Mode
* 📱 Responsive viewport support
* 🧭 Navigation between multiple pages
* 👆 Interactive buttons and feature details
* 🎨 Gradient backgrounds and card-based UI
* 🔄 Reset buttons for the application tools

## 🛠️ Technologies Used

* **HTML5** – Creates the structure of the web pages
* **CSS3** – Provides styling, layouts, colors, cards, and dark mode
* **JavaScript** – Provides functionality and user interaction

## 📂 Project Structure

```text
Smart-Student-Utility/
│
├── index.html
├── about.html
├── features.html
├── app.html
├── style.css
└── script.js
```

## 📄 Pages

### 🏠 Home Page

The Home page introduces the Smart Student Utility Web App.

It contains:

* Project title
* Navigation buttons
* Welcome message
* Start Using button

The **Start Using** button takes the user to the App page.

### ℹ️ About Page

The About page explains the purpose of the application and the different tools available for students.

### ⭐ Features Page

The Features page displays the main features of the application.

Each feature has a **View Details** button that displays or hides additional information using JavaScript.

Features include:

1. Grade Calculator
2. Palindrome Checker
3. Number Analyzer
4. Login Validation
5. Dark Mode

### 🧰 App Page

The App page contains the working student utility tools.

#### 1. Grade Calculator

The user enters marks for five subjects.

The application calculates:

* Average marks
* Grade

The grading logic is:

| Average      | Grade |
| ------------ | ----- |
| 90 and above | A     |
| 75–89        | B     |
| 60–74        | C     |
| Below 60     | D     |

A **Reset** button clears the entered values and result.

#### 2. Palindrome Checker

The user enters a word and clicks **Check**.

The application reverses the entered word and compares it with the original word.

Example:

```text
Input: madam
Output: It is a Palindrome
```

#### 3. Number Analyzer

The user enters a number.

The application identifies whether the number is:

* Even or Odd
* Positive
* Negative
* Zero

Example:

```text
Input: 10
Output: Even | Positive
```

#### 4. Simple Login

The application demonstrates basic username and password validation.

For demonstration purposes, the credentials are:

```text
Username: admin
Password: 1234
```

If the entered credentials match, the application displays **Login Successful**.

Otherwise, it displays **Invalid Credentials**.

> Note: This is only a frontend demonstration and is not a secure real-world authentication system.

#### 5. Dark Mode

The **Toggle Dark Mode** button switches the website between light and dark themes.

CSS variables are used to change the background, text, and card colors.

## 🎨 Design

The application uses:

* Gradient backgrounds
* Card-based layout
* Rounded buttons
* Box shadows
* Hover effects
* CSS transitions
* Dark mode
* Responsive viewport settings

## ⚙️ JavaScript Functions

The project uses several JavaScript functions to provide interactivity.

```text
go()
calculateGrade()
resetGrade()
checkPalindrome()
resetPalindrome()
analyzeNumber()
resetNumber()
validateLogin()
toggleDarkMode()
toggleContent()
```

### Navigation

The `go()` function is used to navigate between HTML pages.

### Grade Calculation

`calculateGrade()` calculates the average marks and determines the grade.

### Palindrome

`checkPalindrome()` reverses the entered string and checks whether it is a palindrome.

### Number Analysis

`analyzeNumber()` checks whether the number is even/odd and positive/negative/zero.

### Login Validation

`validateLogin()` checks the entered username and password.

### Dark Mode

`toggleDarkMode()` adds or removes the `dark-mode` CSS class.

### Feature Details

`toggleContent()` displays or hides additional information for each feature.

## ▶️ How to Run the Project

### Step 1: Download or Clone

Download the project files or clone the repository.

### Step 2: Open the Project

Open the project folder in **VS Code**.

### Step 3: Check the Files

Make sure all files are in the same folder:

```text
index.html
about.html
features.html
app.html
style.css
script.js
```

### Step 4: Run the Website

Open `index.html` in a web browser.

You can also install the **Live Server** extension in VS Code and select:

```text
Right Click → Open with Live Server
```

## 🎯 Project Objective

The main objective of this project is to develop a simple and interactive student utility web application while demonstrating fundamental concepts of:

* HTML page structure
* CSS styling
* JavaScript functions
* DOM manipulation
* Conditional statements
* String operations
* User input handling
* Event handling
* CSS classes
* Page navigation

## 🔮 Future Enhancements

The application can be improved by adding:

* Student data storage using Local Storage
* More subjects in the grade calculator
* Percentage calculation
* GPA calculation
* Password visibility toggle
* Real authentication using a backend
* Mobile-friendly navigation menu
* Additional student tools
* Database integration

## 👩‍💻 Author

**Kruthika**

Frontend Developer | Student

## 📜 License

This project is created for **educational and learning purposes**.
