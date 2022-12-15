import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { api } from '../api/api.js';

const FormDatasContext = createContext({});

function ProcessContextComponent (props) {

    const [dataProcess, setDataProcess] = useState([]);
    const [countParte, setCountParte] = useState(1);
    const [dataParte, setDataParte] = useState([]);
    const [countDrug, setCountDrug] = useState(1);
    const [dataDrug, setDataDrug] = useState([]);

    const [vai, setVai] = useState(false);

    const [lawsuit, setLawsuit] = useState([]);

    function SaveProcess (values) {
        
        const newDataProcess = {
            lawsuitNumber: values.processo
        }
        console.log("newdata", newDataProcess);
        
        const DataSetProcess =  (data) => {
            console.log("data", data)
            return new Promise((resolve, reject) => {
                if (data) {
                    resolve(
                        setDataProcess(data)
                    );
                }
            }
            )
        }

        DataSetProcess(newDataProcess)
            .then(response => {
                console.log("dataprocess", dataProcess)
            })





        
        // setDataProcess(newDataProcess);

        // console.log(dataProcess);
        
        // useEffect( ( ) => {
        //     const response = Teste(newDataProcess);
        //     const data = response;
        //     if (data) {
        //         console.log("pronto")
        //     } else {
        //        console.log("não");
        //     } 
        // },[vai]); 



       
        
            // CompiledData();
            
        // }, "20000");
        
    }

    function Teste (prop) {
        setDataProcess(prop);
        return true;
    }
    

    function SaveParte (values) {
        const newDataParte = {
            key: countParte,
            parte: values.parte,
            cpfCnpj: values.cpfCnpj,
            polo: values.polo,
        };
        
        setDataParte([...dataParte, newDataParte]);
        setCountParte(countParte + 1);

    }

    function DeleteParte (key) {
        const newDataParte = dataParte.filter((item) => item.key !== key);
		setDataParte(newDataParte);
	    
    }

    function SaveDrug (values) {
        
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

    function DeleteDrug (key) {
        console.log(key);
        const newDataDrug = dataDrug.filter((item) => item.key !== key);
        setDataDrug(newDataDrug);
		
	    
    }

    const CompiledData = () => {

        console.log(dataProcess);

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

       setLawsuit(newLawsuit);

       console.log(lawsuit);

        // handleSubmit();

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
        <FormDatasContext.Provider value={{dataParte, dataDrug, SaveProcess, SaveParte, DeleteParte, SaveDrug, DeleteDrug}}>
            {props.children}
        </FormDatasContext.Provider>
    )

}

export { ProcessContextComponent, FormDatasContext };





