import React from "react";

/**
 * Represents a single todo item in the list.
 * Handles display, completion toggle, editing, and deletion of a todo.
 *
 * @param {object} props - The component props.
 * @param {object} props.todo - The todo item object ({ id, text, completed }).
 * @param {number} props.index - The index of the todo item in the list (for serial number).
 * @param {Function} props.toggleComplete - Function to toggle the completion status.
 * @param {Function} props.handleEdit - Function to initiate editing mode for this todo.
 * @param {Function} props.deleteTodo - Function to delete this todo.
 * @param {number | null} props.editingTodoId - The ID of the todo currently being edited.
 * @param {string} props.editText - The current text value in the edit input.
 * @param {Function} props.setEditText - Function to update the edit text value.
 * @param {Function} props.handleSaveEdit - Function to save the edited todo.
 * @param {Function} props.handleCancelEdit - Function to cancel editing.
 * @returns {JSX.Element}
 */
function TodoItem({
  todo,
  index,
  toggleComplete,
  handleEdit,
  deleteTodo,
  editingTodoId,
  editText,
  setEditText,
  handleSaveEdit,
  handleCancelEdit,
}) {
  // Determine if the current todo item is the one being edited
  const isEditing = editingTodoId === todo.id;

  return (
    <li
      className={`flex justify-between items-center p-3 mb-2 border-b dark:border-gray-700 group ${
        // Apply a different background if the item is being edited
        isEditing ? "bg-blue-50 dark:bg-blue-900/20" : ""
      }`}
    >
      {/* Conditional Rendering: Show edit form or display view */}
      {isEditing ? (
        // --- Edit Mode --- //
        <>
          {/* Keep serial number visible during edit */}
          <span className="mr-3 text-gray-500 dark:text-gray-400 w-6 text-right">
            {index + 1}.
          </span>
          {/* Input field for editing the todo text */}
          <input
            type="text"
            value={editText} // Controlled input for edit text
            onChange={(e) => setEditText(e.target.value)} // Update edit text state
            onKeyDown={(e) => {
              // Save on Enter key press
              if (e.key === "Enter") {
                handleSaveEdit(todo.id);
              }
              // Cancel on Escape key press
              if (e.key === "Escape") {
                handleCancelEdit();
              }
            }}
            onBlur={() => handleSaveEdit(todo.id)} // Save when the input loses focus
            autoFocus // Automatically focus the input when edit mode starts
            className="border rounded px-2 py-1 flex-grow mr-2 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {/* Save Button */}
          <button
            onClick={() => handleSaveEdit(todo.id)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded text-xs mr-1"
            aria-label="Save changes"
          >
            Save
          </button>
          {/* Cancel Button */}
          <button
            onClick={handleCancelEdit}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded text-xs"
            aria-label="Cancel editing"
          >
            Cancel
          </button>
        </>
      ) : (
        // --- Display Mode --- //
        <>
          <div className="flex items-center flex-grow">
            {/* Serial number */}
            <span className="mr-3 text-gray-500 dark:text-gray-400 w-6 text-right">
              {index + 1}.
            </span>
            {/* Checkbox to toggle completion status */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
            />
            {/* Todo text - strike-through if completed */}
            <span
              className={`flex-grow cursor-pointer ${
                todo.completed
                  ? "line-through text-gray-500 dark:text-gray-400"
                  : "text-gray-900 dark:text-gray-100"
              }`}
              onDoubleClick={() => handleEdit(todo)} // Enter edit mode on double click
              title="Double-click to edit"
            >
              {todo.text}
            </span>
          </div>
          {/* Action buttons (Edit, Delete) - visible on hover/focus within the group */}
          <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
            {/* Edit Button */}
            <button
              onClick={() => handleEdit(todo)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded text-xs"
              aria-label={`Edit todo: ${todo.text}`}
            >
              Edit
            </button>
            {/* Delete Button */}
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded text-xs"
              aria-label={`Delete todo: ${todo.text}`}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
