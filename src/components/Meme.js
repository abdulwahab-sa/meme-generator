import React from 'react';
import Memesdata from '../Memesdata';

function Meme() {
	const [meme, setmeme] = React.useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
	});

	const [allMemeImages, setallMemeImages] = React.useState(Memesdata);

	React.useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then((res) => res.json())
			.then((data) => setallMemeImages(data.data.memes));
	}, []);

	function getRandomMeme() {
		const randomNumber = Math.floor(Math.random() * allMemeImages.length);
		const url = allMemeImages[randomNumber].url;
		setmeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setmeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}

	return (
		<>
			<form>
				<input type="text" id="captionOne" className="form--input" onChange={handleChange} name="topText" value={meme.topText} />
				<input type="text" id="captionTwo" className="form--input" onChange={handleChange} name="bottomText" value={meme.bottomText} />
			</form>
			<button type="button" id="form--btn" onClick={getRandomMeme}>
				Get a new meme image
			</button>
			<div className="meme">
				<img src={meme.randomImage} className="meme--img" alt="" />
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</>
	);
}

export default Meme;
