import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import "./manga.css";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Manga() {
  const { id } = useParams();

  const [manga, setManga] = useState();
  const [verifyId, setVerifyId] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const token = JSON.parse(localStorage.getItem("user")).token;

  useEffect(() => {
    if (token) {
      const decode = jwtDecode(token);
      setVerifyId(decode.id);
    }
    getManga(id);
  }, []);

  async function getManga(id) {
    try {
      const res = await fetch(`${import.meta.env.VITE_URL}/api/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch manga");
      }
      const data = await res.json();
      setManga(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return isLoading ? (
    <Loading />
  ) : (
    <div className="manga-profile">
      <div className="manga-container">
        {manga && (
          <div className="manga-title-container">
            <div
              className="manga-cover"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%),url(${
                  import.meta.env.VITE_URL
                }/${manga.cover})`,
              }}
            >
              <h1>{manga.title}</h1>
            </div>
            <div className="manga-description">
              <h3>Description</h3>
              <p>{manga.description}</p>
            </div>
            <div className="manga-author">
              <h3>Author</h3>
              <p>{manga.author}</p>
            </div>
            <div className="manga-content">
              <h3>Book: </h3>
              {manga.manga.map((e, i) => (
                <ul style={{listStyle: "none"}} className="chapter-list" key={i}>
                  <li>
                    <Link to={`/view-chapter/${e.pdf}`}>{e.title}</Link>
                  </li>
                </ul>
              ))}
              {verifyId == manga.userId && (
                <div className="add-chapter-btn">
                  <Link to={`/add-chapter/${manga._id}`}>Add New Chapter</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
