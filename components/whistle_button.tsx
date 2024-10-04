import { useEffect, useRef } from 'react';

const WhistleButton = () => {
	const audioRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		// Preload the whistle sound
		audioRef.current = new Audio('/sounds/whistle.mp3');
	}, []);

	const playWhistle = () => {
		if (audioRef.current) {
			audioRef.current.play();
		}
	};

	return (
		<button
			onClick={playWhistle}
			style={{
				marginTop: '20px',
				padding: '10px 20px',
				fontSize: '16px',
				backgroundColor: '#4CAF50',
				color: 'white',
				border: 'none',
				borderRadius: '5px',
				cursor: 'pointer'
			}}
		>
			Blow the Whistle
		</button>
	);
};
export default WhistleButton;
