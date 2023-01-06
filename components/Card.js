import { useState, useEffect, useRef } from "react";
import quotes from "../quotes.json";

export default function Card() {
	const card = useRef();
	const totalQuotes = 5421;
	const [author, setAuthor] = useState();
	const [quote, setQuote] = useState();

	function generateQuote() {
		const randomNum = Math.floor(Math.random() * totalQuotes);
		const randomQuote = quotes[randomNum];
		setQuote(randomQuote.quoteText);
		setAuthor(randomQuote.quoteAuthor);
	}

	function setRandomColor() {
		const red = Math.floor(Math.random() * 255);
		const green = Math.floor(Math.random() * 255);
		const blue = Math.floor(Math.random() * 255);

		const randomColor = `rgb(${red},${green},${blue})`;

		card.current.style.color = randomColor;
		document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
	}

	useEffect(() => {
		generateQuote();
	}, []);

	return (
		<div id="card" ref={card}>
			<p className="quote">{`"${quote}"`}</p>
			<p className="author">-{author}</p>
			<button
				onClick={() => {
					setRandomColor();
					generateQuote();
				}}
			>
				New Quote
			</button>
		</div>
	);
}
