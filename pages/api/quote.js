import quotes from "../../quotes.json";
const totalQuotes = quotes.length;

export default function handler(req, res) {
	const randomNum = Math.floor(Math.random() * totalQuotes);
	const randomQuote = quotes[randomNum];
	res.status(200).json(randomQuote);
}
