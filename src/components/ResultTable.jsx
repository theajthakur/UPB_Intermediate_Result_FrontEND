import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

export default function ResultTable({ data }) {
  const marksData = [];
  data.marks.map((m) => {
    const tmp = {};
    tmp.name = m.subject;
    tmp.value = parseInt(m.obtained_total);
    marksData.push(tmp);
  });
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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
      <BarChart width={500} height={400} data={marksData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8">
          {marksData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}
