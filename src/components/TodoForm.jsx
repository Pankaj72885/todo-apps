import React from "react";

/**
 * A form component for adding new todo items.
 *
 * @param {object} props - The component props.
 * @param {string} props.newTodo - The current value of the new todo input.
 * @param {Function} props.setNewTodo - Function to update the new todo input value.
 * @param {Function} props.addTodo - Function to add the new todo to the list.
 * @returns {JSX.Element}
 */
function TodoForm({ newTodo, setNewTodo, addTodo }) {
  return (
    // Form element with submit handler
    <form onSubmit={addTodo} className="mb-6 flex w-full max-w-md">
      {/* Input field for the new todo text */}
      <input
        type="text"
        value={newTodo} // Controlled input value
        onChange={(e) => setNewTodo(e.target.value)} // Update state on change
        placeholder="Add a new todo"
        className="border rounded-l px-4 py-2 flex-grow dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* Submit button to add the todo */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
