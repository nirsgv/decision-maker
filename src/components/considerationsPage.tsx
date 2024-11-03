import { useParams } from "react-router-dom";
import { useState } from 'react';
import AddConsiderationButton from './addConsiderationButton';
import BottomDrawer from './bottomDrawer';

function ConsiderationsPage() {
	const { id } = useParams();
  const [addConsiderationDrawerOpen, setAddConsiderationDrawerOpen] = useState(false);


	const handleToggleDrawer = () => {
		setAddConsiderationDrawerOpen((current) => !current);
	}

	return (
		<>
			<h1 className="underline">Decision</h1>
			<h2>{id}</h2>
			<h2>{String(addConsiderationDrawerOpen)}</h2>
			<AddConsiderationButton onClick={handleToggleDrawer}/>
			<BottomDrawer open={addConsiderationDrawerOpen} onClose={handleToggleDrawer}/>
		</>
	)
}

export default ConsiderationsPage;