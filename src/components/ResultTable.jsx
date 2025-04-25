import React from "react";

export default function ResultTable({ data }) {
  return (
    <div className="mt-5">
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Student Name</th>
            <td>{data.name}</td>
          </tr>
          <tr>
            <th>Father Name</th>
            <td>{data.father}</td>
          </tr>
          <tr>
            <th>Mother Name</th>
            <td>{data.mother}</td>
          </tr>
          <tr>
            <th>Stream</th>
            <td>{data.stream}</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered">
        <thead>
          <th>Subject</th>
          <th>Theory</th>
          <th>Practical</th>
          <th>Total</th>
        </thead>
        <tbody>
          {data.marks.map((mark) => {
            return (
              <tr>
                <td>{mark.subject}</td>
                <td>{mark.obtained_theory}</td>
                <td>{mark.obtained_total - mark.obtained_theory}</td>
                <td>{mark.obtained_total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
