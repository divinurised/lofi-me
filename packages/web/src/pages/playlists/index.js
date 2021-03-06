import Head from 'next/head';
import Footer from '../../components/Footer';
import styles from '../../styles/home.module.scss';
import playlistStyles from './styles.module.scss';

export default function Playlists() {
	return (
		<>
			<Head>
				<title>lofi me | playlists</title>
			</Head>
			<main>
				<section className={`${styles.preview} ${playlistStyles.container}`}>
					<section>
						<div>
							<h1>available playlists</h1>
							<p>most popular lofi playlists on youtube</p>
						</div>
						<div className={playlistStyles.playlistContainer}>
							<div>
								<div>
									<p>relax</p>
								</div>
								<h3>lofi hip hop radio - beats to relax/study to</h3>
								<a
									target="_blank"
									href="https://www.youtube.com/playlist?list=PLofht4PTcKYnaH8w5olJCI-wUVxuoMHqM"
									rel="noreferrer"
								>
									see all songs here
								</a>
							</div>
							<div className={playlistStyles.playlistImageContainer}></div>
						</div>
						<div className={playlistStyles.playlistContainer}>
							<div>
								<div>
									<p>focus</p>
								</div>
								<h3>Study Session - lofi beats to focus/work to</h3>
								<a
									target="_blank"
									href="https://www.youtube.com/playlist?list=PLofht4PTcKYki_6M4TCWftA2SIcdD0x7h"
									rel="noreferrer"
								>
									see all songs here
								</a>
							</div>
							<div className={playlistStyles.playlistImageContainer}></div>
						</div>
						<div className={playlistStyles.playlistContainer}>
							<div>
								<div>
									<p>sleepy</p>
								</div>
								<h3>lofi hip hop radio - beats to sleep/chill to</h3>
								<a
									target="_blank"
									href="https://www.youtube.com/playlist?list=PLofht4PTcKYkwt9NTxtpfw8VPllgfe-sm"
									rel="noreferrer"
								>
									see all songs here
								</a>
							</div>
							<div className={playlistStyles.playlistImageContainer}></div>
						</div>

						<div className={playlistStyles.mobilePlaylistContainer}>
							<div className={playlistStyles.playlistImageContainer}></div>
							<div className={playlistStyles.playlistTextContainer}>
								<div>
									<p>Sleepy</p>
								</div>
								<h3>lofi hip hop radio - beats to sleep/chill to</h3>
								<a
									target="_blank"
									href="https://www.youtube.com/playlist?list=PLofht4PTcKYkwt9NTxtpfw8VPllgfe-sm"
									rel="noreferrer"
								>
									see all songs here
								</a>
							</div>
						</div>
						<div className={playlistStyles.mobilePlaylistContainer}>
							<div className={playlistStyles.playlistImageContainer}></div>
							<div className={playlistStyles.playlistTextContainer}>
								<div>
									<p>Sleepy</p>
								</div>
								<h3>lofi hip hop radio - beats to sleep/chill to</h3>
								<a
									target="_blank"
									href="https://www.youtube.com/playlist?list=PLofht4PTcKYkwt9NTxtpfw8VPllgfe-sm"
									rel="noreferrer"
								>
									see all songs here
								</a>
							</div>
						</div>
						<div className={playlistStyles.mobilePlaylistContainer}>
							<div className={playlistStyles.playlistImageContainer}></div>
							<div className={playlistStyles.playlistTextContainer}>
								<div>
									<p>Sleepy</p>
								</div>
								<h3>lofi hip hop radio - beats to sleep/chill to</h3>
								<a
									target="_blank"
									href="https://www.youtube.com/playlist?list=PLofht4PTcKYkwt9NTxtpfw8VPllgfe-sm"
									rel="noreferrer"
								>
									see all songs here
								</a>
							</div>
						</div>
					</section>
				</section>
				<section className={styles.preview}>
					<section>
						<div>
							<div className={playlistStyles.linkContainer}>
								<h1>do you have any playlist suggestions?</h1>
								<p>tell us your idea </p>
								<a href="https://github.com/divinurised/lofi-me/blob/main/CONTRIBUTING.md">
									here
								</a>
								<p>.</p>
							</div>
						</div>
					</section>
				</section>
			</main>
			<Footer />
		</>
	);
}
