import React from "react";
import { students } from "../layouts/index";

const StudentsMarkList = () => {
    return (
        <div>
            <div className="d-flex justify-content-center" style={{ marginTop: "2rem" }}>
                <h3>Student's Details</h3>
            </div>
            <table style={{ width: "55vw", height: "auto", marginTop: "2rem" }} className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Roll.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Branch</th>
                        <th scope="col">Marks (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((data, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">{data.roll_no}</th>
                                <td>{data.name}</td>
                                <td>{data.branch}</td>
                                <td>{data.marks}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default StudentsMarkList;
