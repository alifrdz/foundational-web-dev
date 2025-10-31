# Project 12: JavaScript `POST` Request Form

This project is the final exam for the API module. It involves taking the `POST` request logic we tested in Postman (Project 12) and implementing it natively in JavaScript.

## 🎯 Project Goals

To build an HTML form that, upon submission, captures user input and sends it to a public API (`jsonplaceholder`) using the `fetch()` method configured for a `POST` request.

## 🚀 Features & Concepts Practiced

- **HTML Forms (`<form>`)**: Creating a semantic form with inputs and a submit button.
- **DOM Events (`submit`)**: Using `.addEventListener()` to listen for the form's `submit` event.
- **`event.preventDefault()`**: A critical method to stop the browser's default form submission (which reloads the page).
- **`fetch()` with `POST`**: Configuring the `fetch()` function to send data.
- **Fetch Options (`method`, `headers`, `body`)**: Learning how to write the `fetch` options object, including setting the `POST` method.
- **`JSON.stringify()`**: Converting a JavaScript object into a JSON string, which is the format the API requires in its "body".
