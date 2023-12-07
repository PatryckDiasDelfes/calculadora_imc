import Image from 'next/image'

export default function Home() {
  return (
    <>
    
      <header className='bg-[#A68A58]'>
        <div className='flex flex-col p-5 gap-3 / font-semibold text-base text-[white]'>
          <h1 className='flex justify-center'>
            calculadora de imc (Índice de massa corporal)</h1>
          <p className='flex justify-center'>
            O índice de massa corporal é uma medida internacional usada para calcular se uma pessoa está no peso ideal.</p>
        </div>
      </header>

      <section className='flex justify-evenly p-10 gap-10'>
        <div className='w-[40%]'>
          <h1 className='flex justify-center p-10 / text-[28px] font-bold'>
            Tabela de IMC
          </h1>
          <table>
            <thead className=''>
              <th className='w-[10rem] justify-evenly p-2 border-[1px] border-[#262626] border-dashed bg-[#A4A5A6] bg-opacity-50 / text-xl'>IMC</th>
              <th className='w-[18rem] justify-evenly p-2 border-[1px] border-[#262626] border-dashed bg-[#A4A5A6] bg-opacity-50 / text-xl'>Status</th>
            </thead>
            <tbody>
              <tr>
                <td className='w-[18rem] justify-evenly p-2 border-[1px] border-[#262626] border-dashed / text-xl'>Abaixo de 18.5</td>
                <td className='w-[18rem] justify-evenly p-2 border-[1px] border-[#262626] border-dashed / text-xl'>Abaixo do peso</td>
              </tr>
              <tr>
                <td className='w-[18rem] justify-evenly p-2 border-[1px] border-[#262626] border-dashed / text-xl'>De 18.5 a 24.9</td>
                <td className='w-[18rem] justify-evenly p-2 border-[1px] border-[#262626] border-dashed / text-xl'>Peso normal</td>
              </tr>
              <tr>
                <td className='w-[18rem] justify-evenly p-2 border-[1px] border-[#262626] border-dashed / text-xl'>De 25.0 a 29.9</td>
                <td className='w-[18rem] justify-evenly p-2 border-[1px] border-[#262626] border-dashed / text-xl'>Sobrepeso</td>
              </tr>
              <tr>
                <td className='w-[18rem] justify-evenly p-2 border-[1px] border-[#262626] border-dashed / text-xl'>30.0 - e acima</td>
                <td className='w-[18rem] justify-evenly p-2 border-[1px] border-[#262626] border-dashed / text-xl'>Obesidade</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='flex flex-col gap-11 w-[60%]'>
          <div>
            <h1 className='flex justify-center p-10 / text-[28px] font-bold'>
              Calcule seu IMC
            </h1>
            <span className='flex indent-6'>
              A calculadora de IMC gera o número de calorias que seu corpo queima por dia em repouso. Sua IMC com fator de atividade é o número de calorias que seu corpo queima por dia com base no fator de atividade que você selecionou.
            </span>
          </div>
          <div className='grid justify-center grid-cols-2 gap-6'>
            <input type="text" placeholder='  Altura / cm' className='outline p-3'/>
            <input type="text" placeholder='  Peso / kg' className='outline p-3'/>
            <input type="text" placeholder='  Idade' className='outline p-3'/>
            <select placeholder='  Sexo' className='p-3'>
              <option>Sexo</option>
              <option>Masculino</option>
              <option>Feminino</option>
            </select>
            <select className="appearance-none p-3">
              <option>Selecione o nivel de atividade:</option>
              <option>pouco ou nenhum exercicio</option>
              <option>Exercicio level 1 - 3 dias por semana</option>
              <option>Exercicio moderado 3 - 5 dias por semana</option>
              <option>Exercicio intenso 6 - 7 dias por semana</option>
              <option>Treino intenso, trabalho pesado 2x por dia</option>
            </select>
          </div>
          <button className='flex bg-green-400 w-40 p-4 justify-center / border-[5px] border-green-400 rounded-full  hover:border-green-400 hover:bg-white text-white hover:text-green-400  duration-[]' >
            Calcular
          </button>
        </div>
      </section>

    </>
  )
}
