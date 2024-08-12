function Todo (props) {
    return (
        <div>
            <h1>{props.todo.title}</h1>
            <h2>{props.todo.description}</h2>
        </div>
    )
}

export default Todo;