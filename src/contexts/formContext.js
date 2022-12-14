import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { api } from '../api/api.js';

const FormDatasContext = createContext({});

function ProcessContextComponent (props) {

    const [dataProcess, setDataProcess] = useState([]);
    const [countParte, setCountParte] = useState(1);
    const [dataParte, setDataParte] = useState([]);
    const [countDrug, setCountDrug] = useState(1);
    const [dataDrug, setDataDrug] = useState([]);

    const [lawsuit, setLawsuit] = useState([]);

    async function saveProcess (values) {
        
        const newDataProcess = {
            lawsuitNumber: values.processo
        }
        console.log(newDataProcess);
        await setDataProcess(newDataProcess);
        console.log(dataProcess);
        
        CompiledData();
        
    }

    function saveParte (values) {
        const newDataParte = {
            key: countParte,
            parte: values.parte,
            cpfCnpj: values.cpfCnpj,
            polo: values.polo,
        };
        
        setDataParte([...dataParte, newDataParte]);
        setCountParte(countParte + 1);

    }

    function deleteParte (key) {
        const newDataParte = dataParte.filter((item) => item.key !== key);
		setDataParte(newDataParte);
	    
    }

    function saveDrug (values) {
        
        const newDataDrug = {
            key: countDrug,
            diseaseCID: values.diseaseCID,
            drug: values.drug,
            amount: values.amount,
            price: values.price,
            total: values.amount * values.price,
            
        };
            
        setDataDrug([...dataDrug, newDataDrug]);
        setCountDrug(countDrug + 1);
        
    }

    function deleteDrug (key) {
        console.log(key);
        const newDataDrug = dataDrug.filter((item) => item.key !== key);
        setDataDrug(newDataDrug);
		
	    
    }

    const CompiledData = async () => {

        const newLawsuit = {
            
            lawsuitNumber: dataProcess.lawsuitNumber,
            persons: dataParte.map( (item) => 
                [
                    {    
                    cpfCnpj: item.cpfCnpj,
                    name: item.parte,
                    position: item.polo
                    }
                    ]
                ),
            
            drugs: dataDrug.map ( (item) => 
            [
                {
                    diseaseCID: item.diseaseCID,
                    amount: item.amount,
                    price: item.price
                }
            ]
            )
        }

        await setLawsuit(newLawsuit);

        handleSubmit();

    }

    const handleSubmit =  async () => {
        

        try {
            // criar a requisição para enviar este novo usuário
                // requisição método POST
             console.log(lawsuit);
            
            await api.post("/court-information/create", { ...lawsuit })
    
            // Navigate('/processos')
        } catch (error) {
            console.log(error)
        } 
        
    }
    

    return (
        <FormDatasContext.Provider value={{dataParte, dataDrug, saveProcess, saveParte, deleteParte, saveDrug, deleteDrug}}>
            {props.children}
        </FormDatasContext.Provider>
    )

}

export { ProcessContextComponent, FormDatasContext };





