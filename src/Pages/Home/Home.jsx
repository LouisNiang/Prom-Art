import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import ModalPhoto from "../../Components/ModalPhoto/ModalPhoto";
import "./home.scss";

function Home() {
  const [modalPhoto, setModalPhoto] = useState(false);
  const showModalPhoto = () => {
    setModalPhoto(!modalPhoto);
  };
  return (
    <>
      <Header />
      {modalPhoto && <ModalPhoto setModalPhoto={showModalPhoto} modalPhoto={modalPhoto} />}
      <div className="home">
        <div className="hero">
          <div className="xl">
            <div className="hero-intro">
              <h1>
                Trouvez l’image haute résolution parfaite pour enrichir votre
                prochain projet créatif.
              </h1>
              <div className="hero-intro__search">
                <img src="/assets/images/search.svg" alt="serch" />
                <input type="text" placeholder="Que recherchez-vous ?" />
              </div>
              <div className="hero-intro__categorie">
                <button className="active">can21</button>
                <button>agences</button>
                <button>particuliers</button>
                <button>portrait</button>
              </div>
              <p className="hero-intro__artist">
                Artiste : Christian Mendy
              </p>
            </div>
          </div>
          <div className="hero-footer">
            <div className="xl">
              <p>
                Inscrivez-vous pour télécharger gratuitement 10 oeuvres chaque
                semaine.
              </p>
              <div>
                <Link to="/login">connectez-vous maintenant</Link>
                <Link to="/">Devenir créateur</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="archives">
          <div className="xl">
            <div className="archives-header">
              <h2>Collection de photos d'archives</h2>
              <p>
                Les photos préférées de l'année, sélectionnées par l'équipe de
                sélection Prom'Art.
              </p>
              <div>
                <h3>Populaires</h3>
                <button>Consert ...</button>
                <button>Fete de la musique</button>
                <button>monuments historique</button>
                <button>diversité</button>
                <button>football feminin</button>
                <button>populaires</button>
                <button>images vectorielles</button>
              </div>
            </div>
            <div className="archives-photos">
              <div>
                <img
                  onClick={showModalPhoto}
                  src="/assets/images/image-1.jpeg"
                  alt="photo"
                />
                <img
                  onClick={showModalPhoto}
                  src="/assets/images/image-2.jpeg"
                  alt="photo"
                />
                <img
                  onClick={showModalPhoto}
                  src="/assets/images/image-3.jpeg"
                  alt="photo"
                />
                <img
                  onClick={showModalPhoto}
                  src="/assets/images/image-4.jpeg"
                  alt="photo"
                />
                <img
                  onClick={showModalPhoto}
                  src="/assets/images/image-5.jpeg"
                  alt="photo"
                />
                <img
                  onClick={showModalPhoto}
                  src="/assets/images/image-6.jpeg"
                  alt="photo"
                />
                <img
                  onClick={showModalPhoto}
                  src="/assets/images/image-7.jpeg"
                  alt="photo"
                />
                <img
                  onClick={showModalPhoto}
                  src="/assets/images/image-8.jpeg"
                  alt="photo"
                />
                <img
                  onClick={showModalPhoto}
                  src="/assets/images/image-9.jpeg"
                  alt="photo"
                />
                <img
                  onClick={showModalPhoto}
                  src="/assets/images/image-10.jpeg"
                  alt="photo"
                />
                <img
                  onClick={showModalPhoto}
                  src="/assets/images/image-11.jpeg"
                  alt="photo"
                />
                <img
                  onClick={showModalPhoto}
                  src="/assets/images/image-12.jpeg"
                  alt="photo"
                />
              </div>
            </div>
            <Link to="/photos">
              <button className="archives-all">
                <span>Afficher plus</span>
                <img src="/assets/images/arrow-right.svg" alt="arrow" />
              </button>
            </Link>
          </div>
        </div>
        <div className="trends">
          <div className="xl">
            <div className="trends-header">
              <h2>Découvrez les tendances de 2024</h2>
              <p>
                Explorez les catalogue d'artiste libres de droits les plus
                populaires.
              </p>
              <button>Tout consulter</button>
            </div>
            <div className="trends-cards">
              <div>
                <img src="/assets/images/image-14.jpeg" alt="photo" />
                <h3>Evènement...</h3>
              </div>
              <div>
                <img src="/assets/images/image-15.jpeg" alt="photo" />
                <h3>Concert</h3>
              </div>
              <div>
                <img src="/assets/images/image-16.jpeg" alt="photo" />
                <h3>Animaux</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="articles">
          <div className="articles-header">
            <div className="xl">
              <h2>
                Une bonne dose d’inspiration toutes les semaines, juste pour
                vous
              </h2>
              <p>Conseils et astuces tirés de notre blog.</p>
              <button>
                <span>Voir tout les articles</span>
                <img src="/assets/images/arrow-right.svg" alt="arrow" />
              </button>
            </div>
          </div>
          <div className="articles-cards">
            <div>
              <img src="/assets/images/image-17.jpeg" alt="photo" />
              <button>11 Mai 2024</button>
              <h3>On rend hommage à Bob Marley</h3>
            </div>
            <div>
              <img src="/assets/images/image-18.jpeg" alt="photo" />
            </div>
            <div>
              <img src="/assets/images/image-19.jpeg" alt="photo" />
            </div>
            <div>
              <img src="/assets/images/image-20.jpeg" alt="photo" />
            </div>
            <div>
              <img src="/assets/images/image-21.jpeg" alt="photo" />
            </div>
            <div>
              <img src="/assets/images/image-18.jpeg" alt="photo" />
            </div>
            <div>
              <img src="/assets/images/image-19.jpeg" alt="photo" />
            </div>
            <div>
              <img src="/assets/images/image-20.jpeg" alt="photo" />
            </div>
            <div>
              <img src="/assets/images/image-21.jpeg" alt="photo" />
            </div>
          </div>
        </div>
        <div className="partner">
          <div className="xl">
            <img src="/assets/images/spark-black.svg" alt="logo-partner" />
            <img src="/assets/images/didier-lefa.svg" alt="logo-partner" />
            <img src="/assets/images/ltf.svg" alt="logo-partner" />
            <img src="/assets/images/dark-code.svg" alt="logo-partner" />
            <img src="/assets/images/tuple.svg" alt="logo-partner" />
            <img src="/assets/images/mirage.svg" alt="logo-partner" />
            <img src="/assets/images/statickit.svg" alt="logo-partner" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;