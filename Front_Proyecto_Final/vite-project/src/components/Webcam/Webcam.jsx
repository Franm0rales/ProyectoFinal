import Swal from "sweetalert2";

import { useState } from "react";

export default function Webcam() {
  const [playing, setPlaying] = useState(false);

  const HEIGHT = 500;
  const WIDTH = 500;

  const startVideo = async () => {
    let timerInterval;
    await Swal.fire({
      title: "Comienza Meet Up!",
      html: "La conferencia va iniciar en <b></b> milliseconds.",
      timer: 2200,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });

    // await new Promise((resolve) => setTimeout(resolve, 2000));

    navigator.getUserMedia(
      {
        // audio: true,
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("app__videoFeed")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
    setPlaying(true);
  };

  const stopVideo = () => {
    setPlaying(false);
    let video = document.getElementsByClassName("app__videoFeed")[0];
    video.srcObject.getTracks()[0].stop();
  };

  return (
    <div className="app">
      <h2 className="text-center eventos">MeetUp online</h2>
      <div className="app__container">
        <video
          height={HEIGHT}
          width={WIDTH}
          muted
          autoPlay
          className="app__videoFeed"
        ></video>
      </div>
      <div className="app__input">
        {playing ? (
          <button
            id="botones"
            className="bt text-white border-0  rounded mb-5"
            onClick={stopVideo}
          >
            Stop
          </button>
        ) : (
          <button
            id="botones"
            className="bt text-white border-0 rounded mb-5"
            onClick={startVideo}
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
}
