import React from 'react';
import { notFound } from 'next/navigation';

const games = [
  { id: 1, img: '/bus.png', name: 'Game One', desc: 'An exciting first game.' },
  { id: 2, img: '/bycicle.png', name: 'Game Two', desc: 'Second adventure awaits.' },
  { id: 3, img: '/plane.png', name: 'Game Three', desc: 'Thrilling and fun.' },
  { id: 4, img: '/rifle.png', name: 'Game Four', desc: 'Survival mode activated.' },
  { id: 5, img: '/sport-car.png', name: 'Game Five', desc: 'Mystery unfolds here.' },
  { id: 6, img: '/training.png', name: 'Game Six', desc: 'Final battle is here.' },
];

export default function GameDetail({ params }) {
  const game = games.find(g => g.id.toString() === params.id);
  if (!game) return notFound();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={game.img} alt={game.name} width={400} height={300} />
      <h1 className="text-3xl font-bold mt-4">{game.name}</h1>
      <p className="text-lg text-gray-700 mt-2">{game.desc}</p>
    </div>
  );
}
