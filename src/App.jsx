import { useEffect, useState } from "react";
import FilterButtons from "./components/FilterButtons";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

/**
 * The main application component.
 * Manages the state and logic for the todo list application.
 */
function App() {
  // --- State Management ---

  /**
   * State for the list of todo items.
   * Initializes from localStorage if available, otherwise starts as an empty array.
   * @type {[Array<object>, Function]}
   */
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  /**
   * State for the input field for adding new todos.
   * @type {[string, Function]}
   */
  const [newTodo, setNewTodo] = useState("");

  /**
   * State for the current filter ('all', 'active', 'completed').
   * @type {[string, Function]}
   */
  const [filter, setFilter] = useState("all");

  /**
   * State for the search term used to filter todos.
   * @type {[string, Function]}
   */
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * State to track the ID of the todo currently being edited.
   * Null if no todo is being edited.
   * @type {[number | null, Function]}
   */
  const [editingTodoId, setEditingTodoId] = useState(null);

  /**
   * State for the text input while editing a todo.
   * @type {[string, Function]}
   */
  const [editText, setEditText] = useState("");

  // --- Effects ---

  /**
   * Effect to save the current list of todos to local storage
   * whenever the `todos` state changes.
   */
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // --- Event Handlers & Logic ---

  /**
   * Adds a new todo item to the list.
   * Prevents adding empty todos.
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const addTodo = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!newTodo.trim()) return; // Don't add empty or whitespace-only todos
    // Add the new todo with a unique ID, the text, and default completed status
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo(""); // Clear the input field
  };

  /**
   * Toggles the completed status of a specific todo item.
   * @param {number} id - The ID of the todo to toggle.
   */
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  /**
   * Deletes a specific todo item from the list.
   * @param {number} id - The ID of the todo to delete.
   */
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /**
   * Initiates the editing mode for a specific todo item.
   * Sets the editing ID and pre-fills the edit text input.
   * @param {object} todo - The todo object to edit.
   */
  const handleEdit = (todo) => {
    setEditingTodoId(todo.id);
    setEditText(todo.text);
  };

  /**
   * Saves the changes made to a todo item being edited.
   * If the edited text is empty, the todo is deleted.
   * @param {number} id - The ID of the todo being saved.
   */
  const handleSaveEdit = (id) => {
    if (!editText.trim()) {
      // If the edit text is empty or whitespace, delete the todo
      deleteTodo(id);
      setEditingTodoId(null); // Exit editing mode
      setEditText(""); // Clear edit text
      return;
    }
    // Update the specific todo with the new text
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
    );
    setEditingTodoId(null); // Exit editing mode
    setEditText(""); // Clear edit text
  };

  /**
   * Cancels the editing mode for a todo item.
   * Resets the editing state without saving changes.
   */
  const handleCancelEdit = () => {
    setEditingTodoId(null);
    setEditText("");
  };

  /**
   * Removes all completed todo items from the list.
   */
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // --- Derived State ---

  /**
   * Filters the `todos` list based on the current `filter` state ('all', 'active', 'completed')
   * and the `searchTerm`.
   * @type {Array<object>}
   */
  const filteredTodos = todos.filter((todo) => {
    // Check if the todo matches the current filter status
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !todo.completed) ||
      (filter === "completed" && todo.completed);

    // Check if the todo text includes the search term (case-insensitive)
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // A todo is included if it matches both the filter and the search term
    return matchesFilter && matchesSearch;
  });

  // --- JSX Rendering ---

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center pt-10 px-4">
      {/* App Title */}
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Todo App
      </h1>

      {/* Todo Input Form */}
      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />

      {/* Main Content Area: Search, Filters, Todo List */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded shadow-md p-6">
        {/* Search Input Field */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search todos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-4 py-2 w-full dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filter Buttons Component */}
        <FilterButtons filter={filter} setFilter={setFilter} />

        {/* Todo List Component */}
        <TodoList
          todos={todos} // Pass full list for empty checks and clear completed button logic
          filteredTodos={filteredTodos} // Pass the filtered list for rendering
          toggleComplete={toggleComplete}
          handleEdit={handleEdit}
          deleteTodo={deleteTodo}
          editingTodoId={editingTodoId}
          editText={editText}
          setEditText={setEditText}
          handleSaveEdit={handleSaveEdit}
          handleCancelEdit={handleCancelEdit}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
}

export default App;
