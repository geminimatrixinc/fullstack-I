
Requirements for Building a Timer Application as a React Functional Component:

1. Component Structure:
   - Create a functional component named `Timer`.
   - Use a state management to manage start time, end time, and logs.

2. User Interface:
   - The component should render a table layout similar to the original HTML structure.
   - Include labels and input fields for "Start Time" and "End Time" as read-only inputs.
   - Provide three buttons: "Start", "Stop", and "Reset".

3. Functionality:
   - Implement event handlers for each button:
     a. "Start" button should:
        - Capture the current time as the start time and display it in the corresponding input field.
        - Log the action with a message indicating the time the button was clicked.
     b. "Stop" button should:
        - Capture the current time as the end time and display it in the corresponding input field.
        - Log the action with a message indicating the time the button was clicked.
     c. "Reset" button should:
        - Clear both the start and end time input fields.
        - Remove all log entries displayed on the screen.

4. Logging:
   - Maintain a log of actions in the component's state, showing messages for each button click.

5. CSS Styling:
   - Include the same styles from `timerStyle.css` to ensure the component visually matches the original design.

6. Rendering:
   - Ensure the component is rendered within an appropriate parent component or directly in the application.



