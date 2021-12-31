import { useState, useRef, useEffect, useContext } from 'react';
import usePlayer from '../../hooks/usePlayer';
import Menu from '../Menu';
import './styles.scss';
import {
	FiSkipBack,
	FiSkipForward,
	FiChevronDown,
	FiPause,
	FiPlay,
	FiVolume2,
} from 'react-icons/fi';
import { FaRandom } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import playlist from '../../playlist.json';
import { PlayingContext } from '../../contexts/PlayingContext';

function Player() {
	const previousVolume = parseInt(localStorage.getItem('currentVolume'));
	const [value, setValue] = useState(previousVolume || 50);
	const [isOpen, setIsOpen] = useState(true);
	const $audioPlayer = useRef(null);

	const { isPlaying, setIsPlaying } = useContext(PlayingContext);

	const { ToggleAudioPlay, currentSong, skipSong, handleRandomize } = usePlayer(
		$audioPlayer,
		value,
		playlist,
		isPlaying,
		setIsPlaying
	);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		$audioPlayer.current.volume = value / 100;
		localStorage.setItem('currentVolume', value);
	};

	const toggleMenu = () => {
		if (isOpen === true) {
			document.getElementById('toggler').style.display = 'block';
			document.getElementById('footer').style.display = 'flex';
		} else {
			document.getElementById('toggler').style.display = 'none';
			document.getElementById('footer').style.display = 'none';
		}
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const currentAudio = document.getElementById('player');
		currentAudio.onended = () => skipSong();
	}, [skipSong]);

	return (
		<div className="player">
			<div className="title-container">
				<p title={currentSong.name}>{currentSong.name}</p>
				<button>
					<FiChevronDown onClick={toggleMenu} />
				</button>
			</div>
			<div className="audio-container">
				<div>
					<button onClick={() => skipSong(false)}>
						<FiSkipBack />
					</button>
					<button id="play-pause-button" onClick={ToggleAudioPlay}>
						{isPlaying ? <FiPause /> : <FiPlay />}
					</button>
					<button onClick={() => skipSong()}>
						<FiSkipForward />
					</button>
					<button onClick={handleRandomize}>
						<FaRandom size={15} />
					</button>
				</div>
				<Box className="volume-container" sx={{ width: 200 }}>
					<FiVolume2 size={20} />
					<Slider
						size="small"
						aria-label="volume"
						valueLabelDisplay="auto"
						value={value}
						onChange={handleChange}
					/>
				</Box>
				<audio ref={$audioPlayer} id="player">
					<source type="audio/mp3" src={currentSong.url} />
				</audio>
			</div>
			<Menu isPlaying={isPlaying} />
		</div>
	);
}

export default Player;
