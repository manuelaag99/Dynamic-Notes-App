import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import Zoom from '@mui/material/Zoom';

function Note(props) {
    return (
        <Zoom in={true}>
        <div className="note">
            <h1> {props.title}
            </h1>
            <p> {props.content}
            </p>
            <Zoom in={true} timeout={{ enter: "400ms" }}>
                <button className="deleteButton" 
                onClick={() => {
                    {props.deleteButton(props.id)}
                }}
                >
                    <DeleteIcon />
                </button>
            </Zoom>
        </div>
        </Zoom>
    )
}

export default Note