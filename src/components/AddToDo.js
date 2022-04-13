export default function AddToDo(props) {
  
  // form's on submit function
  const submit = (e) => {
    e.preventDefault();
    if (!props.title || !props.desc) {
      alert("title or description cannot be empty");
    } else {
      props.addtodo(props.title, props.desc,props.setTitle,props.setDesc);
    }
  };
  return (
    <div className="container">
      <h1 className="text-center">Add to do</h1>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={props.title}
            onChange={(e) => {
              props.setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            style={{ minHeight: "100px" }}
            className="form-control"
            id="exampleInputPassword1"
            value={props.desc}
            onChange={(e) => {
              props.setDesc(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}
