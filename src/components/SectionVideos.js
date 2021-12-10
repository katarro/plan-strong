import React from "react";
// #151515
import "../styles/SectionVideos.css";
import Video_531 from "../media/videos/metodo_531.gif";
import Video_pendlay from "../media/videos/Pendlay5_5.gif";
import Video_regPark from "../media/videos/Reg_Park_5_5.gif";
import Video_ripptoe from "../media/videos/Rippetoe5_5.gif";

function SectionVideos() {
  return (
    <div className="container-section-videos">
      <div className="title-videos">
        <h2>MÉTODOS DE ENTRENAMIENTO DE FUERZA</h2>
      </div>

      <div className="videos_1">
        <img src={Video_531} alt="531" className="video" />
        <img src={Video_pendlay} alt="Pendlay" className="video" />
      </div>

      <div className="videos_2">
        <img src={Video_regPark} alt="RegPark" className="video" />
        <img src={Video_ripptoe} alt="Ripptoe" className="video" />
      </div>
    </div>
  );
}

export { SectionVideos };
