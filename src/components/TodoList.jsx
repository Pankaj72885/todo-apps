import React from "react";
import TodoItem from "./TodoItem";

/**
 * Renders the list of todo items.
 *
 * @param {object} props - The component props.
 * @param {Array<object>} props.todos - The full list of all todo items (used for empty state checks).
 * @param {Array<object>} props.filteredTodos - The list of todos filtered by status and search term.
 * @param {Function} props.toggleComplete - Function to toggle the completion status of a todo.
 * @param {Function} props.handleEdit - Function to initiate editing a todo.
 * @param {Function} props.deleteTodo - Function to delete a todo.
 * @param {number | null} props.editingTodoId - The ID of the todo currently being edited.
 * @param {string} props.editText - The current text value in the edit input.
 * @param {Function} props.setEditText - Function to update the edit text value.
 * @param {Function} props.handleSaveEdit - Function to save the edited todo.
 * @param {Function} props.handleCancelEdit - Function to cancel editing.
 * @param {Function} props.clearCompleted - Function to clear all completed todos.
 * @returns {JSX.Element}
 */
function TodoList({
  todos, // The full list of todos (needed for empty check and clear button logic)
  filteredTodos,
  toggleComplete,
  handleEdit,
  deleteTodo,
  editingTodoId,
  editText,
  setEditText,
  handleSaveEdit,
  handleCancelEdit,
  clearCompleted,
}) {
  return (
    <>
      {/* Unordered list to display todo items */}
      <ul>
        {/* Map through the filtered todos and render a TodoItem for each */}
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={todo.id} // Unique key for each item
            todo={todo} // Pass the todo object
            index={index} // Pass index for serial number display
            toggleComplete={toggleComplete}
            handleEdit={handleEdit}
            deleteTodo={deleteTodo}
            editingTodoId={editingTodoId}
            editText={editText}
            setEditText={setEditText}
            handleSaveEdit={handleSaveEdit}
            handleCancelEdit={handleCancelEdit}
          />
        ))}
      </ul>

      {/* Conditional rendering for empty states */}
      {/* Show message if there are no todos at all */}
      {todos.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          No todos yet! Add one above.
        </p>
      )}
      {/* Show message if there are todos, but none match the current filter/search */}
      {filteredTodos.length === 0 && todos.length > 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          No todos match the current filter.
        </p>
      )}

      {/* Conditional rendering for the 'Clear Completed' button */}
      {/* Show button only if at least one todo is marked as completed */}
      {todos.some((todo) => todo.completed) && (
        <div className="mt-4 text-center">
          <button
            onClick={clearCompleted}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded text-sm"
          >
            Clear Completed
          </button>
        </div>
      )}
    </>
  );
}

export default TodoList;
