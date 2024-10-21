// JavaScript to display opening hours on the canvas
const canvas = document.getElementById('openingHoursCanvas');
const ctx = canvas.getContext('2d');

// Background color for the canvas 
ctx.fillStyle = "#f1f1f1";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Text settings 
ctx.font = "16px bold Arial";
ctx.fillStyle = "#333";

// Title 
ctx.fillText("Opening Hours", 120, 30);

// Array of opening hours
const hours = [
    { day: "Monday", time: "10:00 AM - 9:00 PM" },
    { day: "Tuesday", time: "10:00 AM - 9:00 PM" },
    { day: "Wednesday", time: "10:00 AM - 9:00 PM" },
    { day: "Thursday", time: "10:00 AM - 9:00 PM" },
    { day: "Friday", time: "10:00 AM - 9:00 PM" },
    { day: "Saturday", time: "10:00 AM - 8:00 PM" },
    { day: "Sunday", time: "Closed" }];

// Loop to display each day's opening hours 
let y = 60;

// Starting y-position 
for (let i = 0; i < hours.length; i++) {
    const day = hours[i].day; const time = hours[i].time;

    // Day of the week
    ctx.fillStyle = "#000";
    ctx.fillText(day, 50, y);

    // Opening time
    ctx.fillStyle = "orange";
    ctx.fillText(time, 200, y);

    y += 30; // Move down for the next line
}