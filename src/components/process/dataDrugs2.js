import { Select } from "antd";
import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import { api } from "../../api/api.js";

function ListDrugsSelect() {
	const [listDrugs, setListDrugs] = useState([]);
    const [selectedDrug, setSelectedDrug] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		try {
			const fetchDrugs = async () => {
				const response = await api.get("/drug");
				setListDrugs(response.data);
				setIsLoading(false);
			};
			fetchDrugs();
		} catch (error) {
			console.log(error);
		}
	}, []);

	const handleDrugChange = (value) => {
		setSelectedDrug(value);
        console.log(value);
		
	};
	
	return (
		<>
			<Select
                defaultValue={""}
				style={{
					width: 200,
				}}
                onChange={handleDrugChange}
				options={listDrugs.map((item) => ({
					label: item.name,
					value: item._id,
				}))}
			/>
			
		</>
	);
}

export default ListDrugsSelect;
