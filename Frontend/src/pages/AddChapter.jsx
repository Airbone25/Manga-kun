import React from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";
import { useState } from "react";
import "./appchapter.css";
import Loading from "../components/Loading";

function AddChapter() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [pdf, setPdf] = useState(null);
  const [error, setError] = useState("");
  const [loading,setLoading] = useState(false)

  const context = useContext(LoginContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("pdf", pdf);
    postData(formData);
  }

  async function postData(formdata) {
    console.log("FormData: ", formdata);
    setLoading(true)
    try {
      const res = await fetch(`${import.meta.env.VITE_URL}/api/new-chapter/${id}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${context.user.token}`,
        },
        body: formdata,
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setTitle("");
        setPdf();
        // document.getElementById("pdf").value = "";
        navigate(`/${id}`);
      }
    } catch (error) {
      setError(error.message);
      console.error(error);
    }finally{
        setLoading(false)
    }
  }

  return loading === true ? (<Loading/>) : (
    <div className="add-chapter-page">
      <form onSubmit={handleSubmit} className="add-chapter-form">
        <h4>Title:</h4>
        <input
          type="text"
          placeholder="Enter Chapter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          name="title"
          autoComplete="off"
          required
        />

        <h4>Chapter PDF:</h4>
        <input
          type="file"
          name="pdf"
          id="pdf"
          accept=".pdf"
          onChange={(e) => setPdf(e.target.files[0])}
          required
        />

        <button type="submit">Add Chapter</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default AddChapter;
