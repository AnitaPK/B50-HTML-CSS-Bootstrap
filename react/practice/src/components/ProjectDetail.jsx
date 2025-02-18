import React, { useState } from "react";

const ProjectDetail = () => {
  const [projectOBJ, setProjectOBJ] = useState([
    {
      name: "P1",
      date: "2025/02/14",
      dicri: "fg dfgh cvbn fgh",
      status: "running",
    },
  ]);

  function handleChangeStatus() {
    // setProjectOBJ({...projectOBJ, projectOBJ.status:"Complete"});
    setProjectOBJ((p)=>p[0].status = 'stoped')
  }

  return (
    <div>
      <ul>
        {projectOBJ.map((elmt, index) => (
          <>
            <li key={index}>Name: {elmt.name}</li>
            <li>Name: {elmt.name}</li>
            <li>Start Date:{elmt.date}</li>
            <li>Discription:{elmt.dicri}</li>
            <li>Status:{elmt.status}</li>
          </>
        ))}
      </ul>
      \<button onClick={()=>{handleChangeStatus()}}>Change Status</button>
    </div>
  );
};

export default ProjectDetail;
