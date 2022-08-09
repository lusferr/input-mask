import React, { useState, useCallback } from 'react';
import Input from './components/input';
import './style.css'

interface IDados {
  cep: string;
  telefone: string;
  dinheiro: string;
  cnpj: string;
}

function App() {
  const [dados, setDados] = useState<IDados>({} as IDados);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setDados({
        ...dados,
        [e.currentTarget.name]: e.currentTarget.value
      });
    },
    [dados]
  );

  function handleClick(){
    console.log(dados)
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='form'>
          <h1>Input Mask</h1>
          <Input id='cep' label='CEP' placeholder="00000-000" onChange={handleChange} mask='cep' />

          <Input id='telefone' label='Telefone' placeholder="(00) 00000-0000 " onChange={handleChange} mask='normalizePhonenumber' />

          <Input id='dinheiro' label='Valor em R$' placeholder="00,00" onChange={handleChange}  mask='currency'/>

          <Input id='cnpj' label='Digite o CNPJ' placeholder="00.000.000/0000-00" onChange={handleChange}  mask='cnpj'/>

          <button onClick={handleClick}>Testar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
