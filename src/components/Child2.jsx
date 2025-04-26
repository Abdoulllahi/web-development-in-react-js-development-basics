
function Child2(props) {
    return (
        <div>
            <p style={{color: props.color}}>The current color of this paragraph is {props.color}</p>
        </div>
    )
}

export default Child2;