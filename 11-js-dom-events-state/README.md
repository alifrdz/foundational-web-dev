# Project 11: DOM Events & State - Live Search API Dashboard

This project is an upgrade to Project 10. It introduces two critical frontend concepts: responding to user actions (DOM Events) and managing application data (State).

## 🎯 Project Goals

To build an interactive product dashboard that fetches API data and allows the user to filter the displayed results in real-time using a search input field.

## 🚀 Features & Concepts Practiced

- **DOM Events**: Using `.addEventListener()` to listen for user input (specifically the `keyup` or `input` event on a search box).
- **State Management (Fundamental)**: Learning to hold a "master copy" of the API data (original state) while separately managing and re-rendering a "filtered copy" (UI state) based on user input.
- **`fetch` + `.map`**: Re-using skills from Project 10 to fetch and initially display all products.
- **`.filter()`**: Using the filter method dynamically inside an event listener to create the live search functionality.
- **String Method (`.toLowerCase()` & `.includes()`)**: Using string methods to match the search query against product titles.~`
