//TODO 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 08.02 Array.forEach Method - Challenge


//TODO  🧩 Step 6: Project Integration — Task List Renderer

//* Scenario
//  You are building a small Task List Renderer for a productivity web app.
//  You have an array of task objects:

const tasks = [
    { title: 'Buy groceries', completed: false },
    { title: 'Clean the house', completed: true },
    { title: 'Read a book', completed: false }
];

//  Your Objective
//  Create a function renderTasks(tasks) that:
//  1. Uses forEach() to loop through the array.
//  2. Logs each task in the format:
//  • "✔ Buy groceries" if completed is true.
//  • "✖ Buy groceries" if completed is false.
//  3. Counts how many tasks are completed and logs:
//  • "Completed tasks: X of Y" at the end.

//! Solution

function  renderTasks(tasks) {
    let completedCount = 0;

    tasks.forEach(task => {
        if (task.completed === true) {
            console.log(`✔ ${task.title}`);
        } else {
            console.log(`✖ ${task.title}`);
        }

        if (task.completed) {
        completedCount++;
        }
    })

    console.log(`Completed tasks: ${completedCount} of ${tasks.length} `);
}

renderTasks(tasks);
