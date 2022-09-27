import React from 'react'

const TodoItem : React.FC<{ text: string, id: string, onRemove: (id: string) => void }> = props => {
    function clickHandler(e:MouseEvent) {
        e.target!.remove()
        props.onRemove(props.id)
    }
    return <li onClick={clickHandler}>{props.text}</li>
}

export default TodoItem