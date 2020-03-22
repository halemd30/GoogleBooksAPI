import React from 'react'

function Book(props) {
    return (
        <div>
            <img src={props.image} alt=''/>
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Book