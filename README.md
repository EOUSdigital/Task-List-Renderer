# 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 08.02 Array.forEach Method — Task List Renderer

## 📖 Scenario
You’re building a **Task List Renderer** for a productivity web app.

You have the following array of task objects:

```javascript
const tasks = [
  { title: 'Buy groceries', completed: false },
  { title: 'Clean the house', completed: true },
  { title: 'Read a book', completed: false }
];
```

---

## 🎯 Objective
Create a function `renderTasks(tasks)` that:

1. Uses **`forEach()`** to loop through the array.
2. Logs each task in the format:
   - `"✔ Buy groceries"` if `completed` is `true`.
   - `"✖ Buy groceries"` if `completed` is `false`.
3. Counts how many tasks are completed and logs:
   `"Completed tasks: X of Y"` at the end.

---

## 🧮 Solution
```javascript
function renderTasks(tasks) {
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
    });

    console.log(`Completed tasks: ${completedCount} of ${tasks.length}`);
}

renderTasks(tasks);
```

---

## 📝 Expected Output
```
✖ Buy groceries
✔ Clean the house
✖ Read a book
Completed tasks: 1 of 3
```

---

## 💡 Key Points Learned
- `forEach()` is ideal for iterating through arrays when performing actions (side effects) on each element.
- You can use an external counter to track conditions met during iteration.
- Perfect for logging and summarizing array data without returning a new array.
