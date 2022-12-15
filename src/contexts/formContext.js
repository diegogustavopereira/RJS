import { createContext, useState } from "react";
import { api } from "../api/api.js";

const FormDatasContext = createContext({});

function ProcessContextComponent(props) {
	
	const [countParte, setCountParte] = useState(1);
	const [dataParte, setDataParte] = useState([]);

	const [countDrug, setCountDrug] = useState(1);
	const [dataDrug, setDataDrug] = useState([]);


    function SaveProcess2(values) {
        return new Promise((resolve, reject) => {
            resolve({
                lawsuitNumber: values.processo
            });
        });
    }


    function newLawsuit(data) {
        return new Promise((resolve, reject) => {
            resolve({
                        lawsuitNumber: data.lawsuitNumber,
                        persons: dataParte,
                        drugs: dataDrug
                        
                    });
            });
    };

    async function SaveProcess(values) {
        const lawsuitNumber = await SaveProcess2(values);
        const compiledData = await newLawsuit(lawsuitNumber);
        console.log(compiledData);
        const submit = await handleSubmit(compiledData)
        return console.log(submit);
    }

	function SaveParte(values) {
		const newDataParte = {
			key: countParte,
			name: values.name,
			cpfCnpj: values.cpfCnpj,
			position: values.position,
		};

		setDataParte([...dataParte, newDataParte]);
		setCountParte(countParte + 1);
	}

	function DeleteParte(key) {
		const newDataParte = dataParte.filter((item) => item.key !== key);
		setDataParte(newDataParte);
	}

	function SaveDrug(values) {
		const newDataDrug = {
			key: countDrug,
			diseaseCID: values.diseaseCID,
			drug: values.drug,
			amount: values.amount,
			price: values.price,
			total: values.amount * values.price,
		};
		console.log(newDataDrug)

		setDataDrug([...dataDrug, newDataDrug]);
		setCountDrug(countDrug + 1);
	}

	function DeleteDrug(key) {
		console.log(key);
		const newDataDrug = dataDrug.filter((item) => item.key !== key);
		setDataDrug(newDataDrug);
	}
	

	async function handleSubmit(data) {
        
		try {
			// criar a requisição para enviar este novo usuário
			// requisição método POST
			
			await api.post("/court-information/create", { ...data });

			return "success"
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<FormDatasContext.Provider
			value={{
				dataParte,
				dataDrug,
				SaveProcess,
				SaveParte,
				DeleteParte,
				SaveDrug,
				DeleteDrug,
			}}
		>
			{props.children}
		</FormDatasContext.Provider>
	);
}

export { ProcessContextComponent, FormDatasContext };
