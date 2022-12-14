import { createContext, useState } from "react";

const FormContextDatas = createContext();

function FormProcessProvider (children) {
    
    const [dataParte, setDataParte] = useState([]);
    const [dataDrug, setDataDrug] = useState([]);

    function saveDrug (values) {
        
        const newData = {
            key: dataDrug.length + 1,
            diseaseCID: values.diseaseCID,
            drug: values.drug,
            amount: values.amount,
            price: values.price,
            total: values.amount * values.price,
            
        };
            
        setDataDrug([...dataDrug, newData]);
        
    }

    function saveParte (values) {
        const newData = {
            key: dataParte.length + 1,
            parte: values.parte,
            cpfCnpj: values.cpfCnpj,
            polo: values.polo,
        };
        
        setDataParte([...dataParte, newData]);

    }

    function deleteParte (key) {
        const newData = dataParte.filter((item) => item.key !== key);
		setDataParte(newData);
	    
    }

    return (
        <FormProcessProvider value={{dataParte, dataDrug, saveDrug, saveParte, deleteParte}}>
            {children}
        </FormProcessProvider>
    )

}

export { FormContextDatas, FormProcessProvider };

