import React, { Fragment, useState } from "react";

const EditButton = (props) => {
    const [description, setDescription] = useState(props.todo.description);
    const id = props.todo.todo_id;

    const saveChanges = async e => {
        e.preventDefault();
        const body = { description }
        try {
                await fetch(`http://localhost:5000/todos/${id}`, {
                method: "PUT",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            })    
            window.location = '/';
        } catch (err) {
            console.log(err.message)
        }
    }
  return (
    <Fragment>
      <button 
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${props.todo.todo_id}`}
      >
        Edit
      </button>

      <div
        className="modal fade"
        id={`id${props.todo.todo_id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        onClick={e => setDescription(props.todo.description)}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control"
               value={description}
               onChange={e => setDescription(e.target.value)}
               ></input>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={e => setDescription(props.todo.description)}>
                Close
              </button>
              <button type="button" className="btn btn-primary"
                data-dismiss="modal"
                onClick={e => saveChanges(e)}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};


export default EditButton;