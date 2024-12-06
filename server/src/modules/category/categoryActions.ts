import type { Request, Response } from "express";

// Some data to make the trick

const categories = [
	{
		id: 1,
		name: "Comédie",
	},
	{
		id: 2,
		name: "Science-Fiction",
	},
];

// Declare the actions
const browse = (req: Request, res: Response) => {
	res.json(categories);
};

const read = (req: Request, res: Response) => {
	const parsedId = Number.parseInt(req.params.id);
	const category = categories.find((cat) => cat.id === parsedId);

	if (category != null) {
		res.json(category);
	} else {
		res.sendStatus(404);
	}
};

export default { browse, read };
