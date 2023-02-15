const TodoInput = ({ todo, setTodo, addTodo }) => {
    return (
        <div className="input-wrapper">
            <input
                type="text"
                name="todo"
                value={todo}
                placeholder="Input todo item"
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
            />
            <button
                className="new_button"
                onClick={addTodo}
            >
                Add
            </button>
        </div>
    );
};

export default TodoInput;