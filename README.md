# Memoized Product Calculator

This project demonstrates the concept of **memoization** in JavaScript and React by creating a simple product calculator. Memoization is an optimization technique used to speed up computer programs by caching the results of expensive function calls and returning the cached result when the same inputs occur again.

---

## Features

- **Memoized Calculation**: The `Product` function, which performs the multiplication, is memoized. This means that if you calculate the product of the same two numbers multiple times, the actual calculation will only run once, and subsequent calls will retrieve the result from a cache.
- **Interactive UI**: A simple React component with input fields for two numbers (`a` and `b`) and a "Calculate" button.
- **Clear Result Display**: The calculated result is clearly displayed on the screen.
- **Console Logging**: Observe the `console.log` messages ("Calculating Product" and "Returning from cache") to understand when the memoization is effective.

---

## How it Works

1.  **`Product(a, b)` function**: This is the core function that performs the multiplication. It also logs "Calculating Product" to the console every time it's called.

2.  **`memo(fn)` higher-order function**:
    * It takes a function `fn` as an argument.
    * It maintains a `cache` object to store previously computed results.
    * It returns a new function (the memoized version).
    * When the memoized function is called, it creates a `key` based on the arguments passed to it (using `JSON.stringify`).
    * It checks if the `key` exists in the `cache`. If it does, it logs "Returning from cache" and returns the cached result.
    * If the `key` is not in the `cache`, it calls the original function `fn` with the arguments, stores the `result` in the `cache` with the corresponding `key`, and then returns the `result`.

3.  **`MemoizedProduct`**: This constant stores the memoized version of our `Product` function, created by calling `memo(Product)`.

4.  **`Memoization` React Component**:
    * Uses `useState` hooks for `a`, `b`, and `result` to manage the input values and the calculated output.
    * The `handleCalculate` function calls `MemoizedProduct(a, b)`. Because `MemoizedProduct` is memoized, the `Product` function will only execute if the combination of `a` and `b` hasn't been calculated before.

---

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository (or copy the code):**
    If you have this code as part of a larger repository, clone it. Otherwise, you can just copy the `Memoization.js` file into your React project.

2.  **Install dependencies (if it's a new React project):**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the application:**
    ```bash
    npm start
    # or
    yarn start
    ```
    This will typically open the application in your browser at `http://localhost:3000`.

---

## Usage

1.  Open the application in your browser.
2.  Enter numbers in the "Enter value for A" and "Enter value for B" input fields.
3.  Click the "Calculate" button.
4.  Observe the result displayed on the screen.
5.  **Open your browser's developer console.**
6.  Enter the **same numbers** again and click "Calculate". You will see "Returning from cache" in the console, indicating that the `Product` function was not re-executed.
7.  Enter **different numbers** and click "Calculate". You will see "Calculating Product" in the console, as a new calculation is performed.

---

## Technologies Used

* **React**
* **JavaScript**
* **Tailwind CSS** (for styling)

---
