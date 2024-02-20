import './App.css';
import exam from './1.png'
import sign from './lt.png'

function App() {
  return (
    <div className="flex flex-col items-center">
      <h1 className='font-bold text-4xl'>Exercise 5 - PokeDex!</h1>
      <div className='flex justify-evenly w-2/3'>
        <div className='flex flex-col justify-evenly'>
          <img className='w-72 border-2 border-black' src={exam}></img>
          <div className='text-center w-64 border bg-[#E8E8E8] self-center'>Bulbasaur</div>
          <p>Types:</p>
          <ul>
            <li className='normal'>normal</li>
          </ul>
          <div className='flex justify-evenly'>
            <button className='bg-[#E8E8E8] w-20'><img src={sign}></img></button>
            <button className='bg-[#E8E8E8] w-20'><img className=' rotate-180' src={sign}></img></button>
          </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='font-bold'>Moves</h3>
          <ul className=''></ul>
        </div>
      </div>
    </div>
  );
}

export default App;
