import React from "react";

function ListingsDisp({
  id,
  image,
  title,
  location,
  deadline,
  requirements,
  description,
  salary,
  deleteLists,
}) {
  function handleDeleteList() {
    fetch(`http://localhost:8001/lists/${id}`, {
      method: "DELETE",
    });
    deleteLists(id);
  }

  return (
    <tr>
      <td>{image}</td>
      <td>{title}</td>
      <td>{location}</td>
      <td>{deadline}</td>
      <td>{requirements}</td>
      <td>{description}</td>
      <td>{salary}</td>

      <td>
        <button onClick={handleDeleteList} className="ui button">
          Delete Button
        </button>
      </td>
    </tr>
  );
}

export default ListingsDisp;
