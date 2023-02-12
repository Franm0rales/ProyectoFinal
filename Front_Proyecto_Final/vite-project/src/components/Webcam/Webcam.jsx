import { useState } from 'react';


export default function Webcam() {
	const [playing, setPlaying] = useState(false);

	const HEIGHT = 500;
	const WIDTH = 500;

	const startVideo = () => {
		setPlaying(true);
		navigator.getUserMedia(
			{
				// audio:true,
				video: true,
			},
			(stream) => {
				let video = document.getElementsByClassName('app__videoFeed')[0];
				if (video) {
					video.srcObject = stream;
				}
			},
			(err) => console.error(err)
		);
	};

	const stopVideo = () => {
		setPlaying(false);
		let video = document.getElementsByClassName('app__videoFeed')[0];
		video.srcObject.getTracks()[0].stop();

		
	};

	return (
		<div className="app">
            <h2  className='text-center eventos'>MeetUp online</h2>
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
					<button id='botones' className='bt text-white border-0  rounded mb-5' onClick={stopVideo}>Stop</button>
				) : (
					<button id='botones' className='bt text-white border-0 rounded mb-5' onClick={startVideo}>Start</button>
				)}
			</div>
		</div>
	);
}

