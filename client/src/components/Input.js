import React, { Fragment, useState } from 'react';

const Input = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description };
            await fetch("http://localhost:5000/todos", {
                method: 'POST',
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }

    return(
        <Fragment>
            <form onSubmit={onSubmitForm}>
                <div className="d-flex p-3">
                    <input type="text" className="form-control"
                    placeholder="toddo"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />
                    <button className="btn btn-success w-25 px-2">Add todo</button>
            </div>
            </form>
        </Fragment>
    )
}

export default Input;