import React from "react";
import StudentsMarkList from "../components/StudentsMarkList";
import TeacherProfile from "../components/TeacherProfile";

const Main = () => {
    return (
        <div style={{ backgroundColor: "#e8e8ea" }} className="w-100 d-flex justify-content-center">
            {/* <TeacherProfile /> */}
            <StudentsMarkList/>
        </div>
    );
};

export default Main;
