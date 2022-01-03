import { useContext, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import { PlayingContext } from '../../contexts/PlayingContext';
import useMenuPlayer from '../../hooks/useMenuPlayer';

import './styles.scss';
import { BsFillCloudRainHeavyFill } from 'react-icons/bs';
import { MdLocalFireDepartment } from 'react-icons/md';
import { FaCity } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import noises from '../../noises.json';

function Menu() {
	const $rainPlayer = useRef(null);
	const $cityPlayer = useRef(null);
	const $firePlayer = useRef(null);

	const { isPlaying } = useContext(PlayingContext);

	const previousRainVolume =
		parseInt(localStorage.getItem('currentRainVolume')) || 0;
	const previousCityVolume =
		parseInt(localStorage.getItem('currentCityVolume')) || 0;
	const previousFireVolume =
		parseInt(localStorage.getItem('currentFireVolume')) || 0;

	const { handleChangeCity, handleChangeFire, handleChangeRain } =
		useMenuPlayer(
			$rainPlayer,
			$cityPlayer,
			$firePlayer,
			previousRainVolume,
			previousCityVolume,
			previousFireVolume,
			isPlaying
		);

	useEffect(() => {
		const buttons = document.getElementsByClassName('category-button');
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', function () {
				var current = document.getElementsByClassName('active');
				current[0].className = current[0].className.replace(' active', '');
				this.className += ' active';
			});
		}
	}, []);

	return (
		<div transition={{ delay: 1 }} className="menu" id="toggler">
			<div>
				<p>Background noises</p>
				<div className="background-sounds-container">
					<Box className="volume-container" sx={{ width: 200 }}>
						<BsFillCloudRainHeavyFill />
						<Slider
							size="small"
							aria-label="volume"
							value={previousRainVolume}
							valueLabelDisplay="auto"
							onChange={handleChangeRain}
						/>
					</Box>
					<Box className="volume-container" sx={{ width: 200 }}>
						<FaCity />
						<Slider
							size="small"
							value={previousCityVolume}
							aria-label="volume"
							valueLabelDisplay="auto"
							onChange={handleChangeCity}
						/>
					</Box>
					<Box className="volume-container" sx={{ width: 200 }}>
						<MdLocalFireDepartment />
						<Slider
							size="small"
							value={previousFireVolume}
							aria-label="volume"
							valueLabelDisplay="auto"
							onChange={handleChangeFire}
						/>
					</Box>
				</div>
			</div>
			<div className="category-container">
				<motion.button
					className="category-button active"
					whileTap={{ scale: 0.75 }}
				>
					Sleepy
				</motion.button>
				<motion.button className="category-button" whileTap={{ scale: 0.75 }}>
					Jazz
				</motion.button>
				<motion.button className="category-button" whileTap={{ scale: 0.75 }}>
					Chill
				</motion.button>
			</div>
			<audio loop ref={$rainPlayer} id="player">
				<source type="audio/mp3" src={noises[0].url} />
			</audio>
			<audio loop ref={$cityPlayer} id="player">
				<source type="audio/mp3" src={noises[1].url} />
			</audio>
			<audio loop ref={$firePlayer} id="player">
				<source type="audio/mp3" src={noises[2].url} />
			</audio>
		</div>
	);
}

export default Menu;
