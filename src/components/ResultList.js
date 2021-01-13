import React from "react";

function ResultList(props) {
  let results = props.hresults;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th
            className="user-select-all"
            scope="col"
            onClick={props.handleFormSubmit}
          >
            Name
          </th>

          <th scope="col">Phone</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.id.value}>
            <td>
              <img
                alt={result.name.first}
                className="img-fluid"
                src={result.picture.thumbnail}
              />
            </td>
            <td>
              {result.name.title} {result.name.first} {result.name.last}
            </td>

            <td>{result.cell}</td>
            <td>{result.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultList;
{
  /* <td>Mark</td>
<td>Otto</td>
<td>@mdo</td> */
}
