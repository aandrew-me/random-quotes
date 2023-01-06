import quotes from "../../quotes.json";
const totalQuotes = 5421;

export default function handler(req, res) {
	const randomNum = Math.floor(Math.random() * totalQuotes);
	const randomQuote = quotes[randomNum];
	res.status(200).json(randomQuote);
}
