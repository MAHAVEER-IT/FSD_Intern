import React from 'react';
import Link from 'next/link';

function Card() {
  const games = [
    {
      id: 1,
      img: '/bus.png',
      name: 'Game One',
      desc: 'An exciting first game.',
    },
    {
      id: 2,
      img: '/bycicle.png',
      name: 'Game Two',
      desc: 'Second adventure awaits.',
    },
    {
      id: 3,
      img: '/plane.png',
      name: 'Game Three',
      desc: 'Thrilling and fun.',
    },
    {
      id: 4,
      img: '/rifle.png',
      name: 'Game Four',
      desc: 'Survival mode activated.',
    },
    {
      id: 5,
      img: '/sport-car.png',
      name: 'Game Five',
      desc: 'Mystery unfolds here.',
    },
    {
      id: 6,
      img: '/training.png',
      name: 'Game Six',
      desc: 'Final battle is here.',
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {games.map((game) => (
        <Link key={game.id} href={`/game/${game.id}`} className="hover:cursor-pointer">
          <div className="border p-4 rounded-xl shadow-md w-[300px] text-center">
            <img src={game.img} alt={game.name} width={300} height={200} />
            <h2 className="font-bold text-xl mt-2">{game.name}</h2>
            <p className="text-gray-600">{game.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;
