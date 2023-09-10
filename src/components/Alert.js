import React from 'react'

export default function Alert(props) {
    return (
        <div>
            <div className="alert alert-success alert-dismissible fade show" role="alert" row="3">
                <strong>{props.alert.type}</strong>:{props.alert.msg}
            </div>
        </div>
    )
}
