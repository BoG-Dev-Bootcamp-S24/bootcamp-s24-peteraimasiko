import './App.css';
import exam from './1.png'
import sign from './lt.png'
import { useState, useEffect } from 'react';

const API_URL = "https://pokeapi.co/api/v2/pokemon/";


function App() {
  const [index, setIndex] = useState(700) 
  const [data, setData] = useState(getData())
  const [enable, setEnable] = useState(false)
  
  async function getData() {
    try {
      const res = await fetch(API_URL + index);
      const newData = await res.json();

      setData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
    }
  }

  // fetch data at beginning and whenever index changes
  useEffect(() => {
    getData();
  }, [index]);

function getSprite() {
  try {
    return data.sprites.front_default;
  } catch (error) {
    return exam;
  }
}

function getTypes() {
  try {
    return data.types.map(type => (
      <li className={type.type.name}>{type.type.name}</li>
    ))
  } catch (error) {
    return <li className="grass">grass</li>
  }
  
}

function InfoMoves() {
  try {
    if (!enable) {
      return (
    <div className='flex justify-evenly'>
        <button className='bg-[#7CFF79] px-6 py-1 rounded' onClick={ () => setEnable(enable ? false : enable)}>Info</button>
        <button className='bg-[#E8E8E8] px-4 py-1 rounded' onClick={ () => setEnable(enable ? enable : true)}>Moves</button>
    </div>)
    } else {
      return (
        <div className='flex justify-evenly'>
            <button className='bg-[#E8E8E8] px-6 py-1 rounded' onClick={ () => setEnable(enable ? false : enable)}>Info</button>
            <button className='bg-[#7CFF79] px-4 py-1 rounded' onClick={ () => setEnable(enable ? enable : true)}>Moves</button>
        </div>)
    }
  } catch (error) {
    return <div></div>
  }
  
}

function getInfoMoves () {
  try {
    if (!enable) {
      return (
        <ul className='bg-[#E8E8E8] p-5 w-72 h-60 font-[Inter]'>
              <li>height: {data.height / 10}</li>
              <li>weight: {data.weight / 10}</li>
              {data.stats.map(stat => (
                <li>{stat.stat.name}: {stat.base_stat}</li>
              ))}
        </ul>
      )
    } else {
      return <ul className='bg-[#E8E8E8] p-5 w-72 h-60 font-[Inter] overflow-auto'>
          {data.moves.map(move => (
          <li>{move.move.name}</li>
        ))}
      </ul>
    }
  } catch (error) {
    return <div></div>
  }
  
}

  return (
    <div className="flex flex-col items-center">
      <h1 className='font-bold text-4xl'>Exercise 5 - PokeDex!</h1>
      <div className='flex justify-evenly w-2/3'>
        <div className='flex flex-col justify-evenly'>
          <img className='w-72 border-2 border-black' src={getSprite()}></img>
          <div className='text-center w-64 border bg-[#E8E8E8] self-center'>{data.name}</div>
          <p>Types:</p>
          <ul>
            {getTypes()}
          </ul>
          <div className='flex justify-evenly'>
            <button className='bg-[#E8E8E8] w-20'><img src={sign} onClick={() => {
          if (index > 1) setIndex(index - 1);
        }}></img></button>
            <button className='bg-[#E8E8E8] w-20'><img className=' rotate-180' src={sign} onClick={() => {
          setIndex(index + 1);
        }}></img></button>
          </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='font-bold self-center'>{!enable ? "Info" : "Moves"}</h3>
          {getInfoMoves()}
          {InfoMoves()}
        </div>
      </div>
    </div>
  );
}

export default App;
