import Card from "../components/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import "./home.css"

function Home() {
  const [manga, setManga] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMangas();
  }, []);

  async function getMangas() {
    const res = await fetch(`${import.meta.env.VITE_URL}/api`);
    if (!res.ok) {
      throw new Error("Failed to fetch mangas");
    }
    const data = await res.json();
    setManga(data);
    setIsLoading(false);
  }

  if (isLoading) return <Loading />;

  return (
    <main className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to <span>Manga-kun</span></h1>
          <p>Read, upload and explore unique stories. Join the manga universe today.</p>
          <a href="#recent" className="cta-button">Explore Now</a>
        </div>
      </section>

      {/* WHAT & WHY */}
      <section className="whatandwhy">
        <div className="what">
          <h1>What is Manga-kun?</h1>
          <p>
            Manga-kun is a platform for manga enthusiasts to explore, read, and even
            create their own manga. Whether you're a seasoned fan or a newcomer, dive into
            our creative universe.
          </p>
        </div>
        <div className="why">
          <h1>Why Manga-kun?</h1>
          <p>
            Our platform combines a user-friendly interface with creative tools that empower
            readers and creators alike. Enjoy curated manga and turn your ideas into reality.
          </p>
        </div>
      </section>

      {/* RECENTLY UPLOADED */}
      <section className="popular-section" id="recent">
        <h2>Recently Uploaded</h2>
        <div className="popular-mangas">
          {manga &&
            manga.map((item, index) => (
              <Link to={`/${item._id}`} key={item._id}>
                <Card img={`${import.meta.env.VITE_URL}/${item.cover}`} />
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
