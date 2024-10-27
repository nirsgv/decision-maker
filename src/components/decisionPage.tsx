import { useParams } from "react-router-dom";

function DecisionPage() {
	const { id } = useParams();
	return (
		<>
			<h1 className="underline">Decision</h1>
			<h2>{id}</h2>
		</>
	)
}

export default DecisionPage;