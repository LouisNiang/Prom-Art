import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <>
      <div class="footer">
        <div class="xl">
          <div class="footer-header">
            <div class="footer-header-links">
              <h2>Notre entreprise</h2>
              <ul>
                <li>Vendez votre contenu</li>
                <li>Qui sommes-nous ?</li>
                <li>Emplois</li>
                <li>Presse/Médias</li>
                <li>Relations avec nos artistes</li>
                <li>Evénement</li>
                <button>
                  <img src="/assets/images/world-black.svg" alt="icon" />
                  <span>Français</span>
                </button>
              </ul>
            </div>
            <div class="footer-header-links">
              <h2>Formation</h2>
              <ul>
                <li>Certification</li>
                <li>Diplome</li>
              </ul>
              <h2>Partenaires</h2>
              <ul>
                <li></li>
                <li>Affilié/Revendeur</li>
                <li>Revendeur international</li>
              </ul>
            </div>
            <div class="footer-header-links">
              <h2>Prom'Art news</h2>
              <ul>
                <li>Spectacle</li>
                <li>Nouvelle Projet</li>
                <li>Artiste far</li>
                <li>Politique de confidentialité</li>
              </ul>
            </div>
            <div class="footer-header-links">
              <h2>Contactez-nous</h2>
              <ul>
                <li>Aide</li>
              </ul>
            </div>
          </div>
          <div class="footer-copy">
            <h3>© Copyright 2024-2025 Prom'Art</h3>
            <div>
              <img src="/assets/images/GitHub.svg" alt="logo-social" />
              <img src="/assets/images/Telegram.svg" alt="logo-social" />
              <img src="/assets/images/Vkontakte.svg" alt="logo-social" />
              <img src="/assets/images/Twitter.svg" alt="logo-social" />
            </div>
          </div>
        </div>
      </div>
      <div class="author">
        <p>
          Designé par
          <a href="https://twitter.com/mbagnajohan">  </a> et codé par
          <a href="https://lndev.me"> Louis NIANG </a>
        </p>
      </div> 
    </>
  );
}