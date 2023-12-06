import oski from "./oski.jpeg";
import "./UserPage.css";
import plus from "./plus.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import fileImg from "./file.png";
const UserPage = () => {
  const [sessionNames, setSessionNames] = useState([]);
  const [currName, setCurrName] = useState("");
  const [displaySessionModal, setDisplaySessionModal] = useState(false);

  const [selectedSession, setSelectedSession] = useState("");

  const [displayFileUpload, setDisplayFileUpload] = useState(false);
  const nav = useNavigate();

  const [files, setFiles] = useState({});
  const [currFile, setCurrFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSessionNames((prev) => [...prev, currName]);
    setCurrName("");
    setDisplaySessionModal(false);
  };
  const handleChange = (e) => {
    setCurrName(e.target.value);
  };
  const SessionForm = () => {
    return (
      <div className="session-form">
        <form onSubmit={handleSubmit}>
          <label className="login-label">Session Name</label>
          <input
            name="Session Name"
            type="text"
            value={currName}
            onChange={handleChange}
            required
          />
          <input type="submit" value="Add Session" />
        </form>
      </div>
    );
  };

  const handleFileUpload = (e) => {
    e.preventDefault();

    if (currFile) {
      let prevFiles =
        files[selectedSession] == null ? [] : files[selectedSession];
      setFiles((prev) => {
        let tmp = { ...prev };
        tmp[selectedSession] = [...prevFiles, currFile];
        return tmp;
      });

      setCurrFile(null);
    }
    setDisplayFileUpload(false);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setCurrFile(selectedFile);
  };

  const FileForm = () => {
    return (
      <div className="session-form">
        <form onSubmit={handleFileUpload}>
          <label>
            Choose a file:
            <input type="file" onChange={handleFileChange} />
          </label>
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  };

  const updateContext = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append each file to the FormData object
    for (const file of files[selectedSession]) {
      formData.append("files", file);
    }

    try {
      const response = await fetch("http://localhost:5000/upload_files", {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.error("Error uploading files:", error);
    }
    nav("/chat/123/123");
  };

  const DocumentList = () => {
    let docLst = files[selectedSession] == null ? [] : files[selectedSession];
    console.log(docLst);
    return docLst.map((doc) => {
      return (
        <div className="doc-entry">
          <img src={fileImg} className="file-img" />
          <p>{doc.name}</p>
        </div>
      );
    });
  };

  return (
    <>
      {displaySessionModal && <SessionForm />}
      {displayFileUpload && <FileForm />}
      <div className="user-wrapper">
        <div className="user-sidebar">
          <img src={oski} className="user-profile" />
          <div className="session-names">
            <div className="session-name-block session-name-header">
              <p>Sessions</p>
            </div>
            {sessionNames.map((name) => {
              let is_selected = name == selectedSession;
              return (
                <div
                  style={is_selected ? { backgroundColor: "#ffb703" } : {}}
                  className="session-name-block"
                  onClick={() => setSelectedSession(name)}
                >
                  <p>{name}</p>
                </div>
              );
            })}
            <div
              className="session-name-block"
              onClick={() => setDisplaySessionModal(true)}
            >
              <p>Add Session</p>
            </div>
          </div>
        </div>
        <div className="user-main-section">
          <div className="user-search">
            <input className="user-input" placeholder="Search..." />
          </div>
          <div className="chat-link">
            <button onClick={updateContext} className="user-start-button">
              Start ChatBot
            </button>
          </div>
          <div
            className="add-wrapper"
            onClick={() => setDisplayFileUpload(true)}
          >
            {selectedSession != "" && <img className="add-image" src={plus} />}
          </div>
          <div className="user-document-section">
            <DocumentList />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
