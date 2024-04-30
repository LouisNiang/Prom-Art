import React, { useState } from "react";
import "./modalPhoto.scss";

export default function ModalPhoto({ modalPhoto, setModalPhoto }) {
  return (
    <div className="modalphoto" onClick={() => setModalPhoto(!modalPhoto)}>
      <div className="xl">
        <div className="container">
          <div className="container-hero">
            
            <img
              src="/assets/images/image-1.jpeg"
              alt="photo"
              className="container-hero__image"
            />
            <div className="container-hero__infos">
              <div>
                <img src="/assets/images/loge.png" alt="logo" />
                <div>
                  <h5>taxiphotographer</h5>
                  <p>Disponible pour collaboration</p>
                </div>
              </div>
              <button>Telecharger l’image gratuitement</button>
              <h2>Description détaillée :</h2>
              <p>
              Lorem ipsum dolor sit amet. Vel rerum sint est eaque earum aut enim quisquam sed amet ipsum qui molestiae sint! In architecto eaque ut voluptatem cupiditate sit explicabo dolor aut voluptates reiciendis.
Vel corporis sunt nam aspernatur autem hic numquam minima ut delectus dignissimos. Ea debitis deserunt in sapiente nihil non animi assumenda et sequi voluptas. Eum voluptas veniam nam omnis duciamus ut porro nihil ea dolores accusamus nam soluta sunt ut molestiae internos eum quia perspiciatis.
Id eaque repudiandae ea facere tenetur aut saepe Quis eum deleniti perferendis. Ut neque assumenda et obcaecati deserunt ab sequi laudantium a odit numquam.


              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}