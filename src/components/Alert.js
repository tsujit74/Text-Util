import React from 'react'

export default function Alert(props) {
    return (
        <div>
            <div className="alert alert-success alert-dismissible fade show"  role="alert">
                <strong style={{color:'blue'}}>{props.alert.type}:- &nbsp;</strong><strong>{props.alert.msg}</strong>
            </div>
        </div>
    )
}
