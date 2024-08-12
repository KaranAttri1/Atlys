function CustomButton (props) {
    function onClickHandler () {
        props.setCount(props.count + 1);
    }
    return (
        <button onClick={onClickHandler}>
           Counter : {props.count} 
        </button>
    )
}
export default CustomButton