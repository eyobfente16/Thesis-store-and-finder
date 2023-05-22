import React, { useState } from "react";
import './upload.css';

function Upload() {
  const [author, setAuthor] = useState("");
  const [project, setProject] = useState("");
  const [university, setUniversity] = useState("");
  const [department, setDepartment] = useState("");
  const [file, setFile] = useState("");

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  function handleProjectChange(event) {
    setProject(event.target.value);
  }

  function handleUniversityChange(event) {
    setUniversity(event.target.value);
  }

  function handleDepartmentChange(event) {
    setDepartment(event.target.value);
  }

  function handleFileChange(event) {
    setFile(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Author:", author);
    console.log("Project:", project);
    console.log("University:", university);
    console.log("Department:", department);
    console.log("File:", file);
  }

  return (
    <div className="upload-container">
      <h2>Upload Project/Thesis</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="author">Author Name:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={handleAuthorChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="project">Project Name:</label>
          <input
            type="text"
            id="project"
            value={project}
            onChange={handleProjectChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="university">University:</label>
          <input
            type="text"
            id="university"
            value={university}
            onChange={handleUniversityChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={handleDepartmentChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Upload File:</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Upload</button>
      </form>
      
    </div>
  );
}

export default Upload;
