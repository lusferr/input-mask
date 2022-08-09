import React, { useCallback } from "react";
import { cep, normalizePhonenumber, currency, cnpj } from "../../utils/masks";
import "./style.css"

interface inputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string,
    id: string;
    mask?: 'cep' | 'normalizePhonenumber' | 'currency' | 'cnpj'
}

export default function Input({ id, label, mask, ...props }: inputProps) {

    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        if(mask === 'cep'){
            cep(e)
        }
        if(mask === 'normalizePhonenumber'){
            normalizePhonenumber(e);
        }
        if(mask === 'currency'){
            currency(e)
        }
        if(mask === 'cnpj'){
            cnpj(e)
        }
    }, [mask]);
    return (

        <div className="inputGroup">
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} {...props} onKeyUp={handleKeyUp}/>
        </div>
    );
};