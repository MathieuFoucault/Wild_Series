import { useLoaderData } from "react-router-dom";

type Program = {
	id: number;
	title: string;
	synopsis: string;
	poster: string;
	country: string;
	year: number;
};

const ProgramsPage = () => {
	const programs = useLoaderData() as Program[];

	return (
		<div>
			<h1>Programs</h1>
			<ul>
				{programs.map((program) => (
					<li key={program.id}>
						<h2>{program.title}</h2>
						<p>{program.synopsis}</p>
						<p>{program.country}</p>
						<p>{program.year}</p>
						<img src={program.poster} alt={program.title} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProgramsPage;
