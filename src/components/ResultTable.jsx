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
          {data.stream ? (
            <tr>
              <th>Stream</th>
              <td>{data.stream}</td>
            </tr>
          ) : (
            ""
          )}
        </tbody>
      </table>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Theory</th>
            <th>Practical</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.marks.map((mark, index) => {
            return (
              <tr key={index}>
                <td>{mark.subject}</td>
                <td>{mark.obtained_theory}</td>
                <td>{parseInt(mark.obtained_total) - mark.obtained_theory}</td>
                <td>{mark.obtained_total}</td>
              </tr>
            );
          })}
          {data.marks.length === 0 ? (
            ""
          ) : (
            <tr>
              <td colSpan={3}>Percentage</td>
              <td>
                <b>{data.percentage.toFixed(2)}%</b>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
