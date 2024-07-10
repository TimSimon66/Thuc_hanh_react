
const TodoData = (props) => {
    console.log("check, ", props);
    const { name, address, age, phone } = props;
    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>{JSON.stringify(props)}</div>
        </div>
    )
}

export default TodoData;