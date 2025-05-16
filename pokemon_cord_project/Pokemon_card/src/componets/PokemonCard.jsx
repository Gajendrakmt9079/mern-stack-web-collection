import React, { useEffect, useState } from 'react';

export const PokemonCard = () => {
    const [pokemon, setPokemon] = useState([]);

    const [search ,setSearch] = useState("")

    const API = 'https://pokeapi.co/api/v2/pokemon?limit=613'; // Fixed 'limit'

  
    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();

            const detailedPokemonData = data.results.map(async (curPokemon) => {
                const response = await fetch(curPokemon.url);
                return await response.json();
            });

            const detailResponse = await Promise.all(detailedPokemonData);
            
            setPokemon(detailResponse);
        } catch (error) {
            console.error('Failed to fetch Pokémon data:', error);
        }
    };

   const searchpokemon = pokemon.filter((curpokemoncard)=> curpokemoncard.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="grid justify-items-center p-10 select-none">
            <h1 className="text-5xl mb-16">Let's catch Pokémon</h1>

            <div className='mb-12'>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" name="" id="" placeholder='Search Pokemon' className='w-80 h-10 border-b-2 rounded-md p-5 bg-gray-50 focus:outline-none border-black' />
            </div>

            {pokemon.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">
                    {searchpokemon.map((curPokemon) => (
                        <div
                            key={curPokemon.id}
                            className="w-96 h-full rounded-xl hover:shadow-2xl shadow-xl overflow-hidden  p-4"
                        >
                            <section className="grid justify-items-center h-72 overflow-hidden bg-pokemon1-bg bg-no-repeat hover:bg-pokemon2-bg">
                                <img
                                    src={curPokemon.sprites?.other?.dream_world?.front_default}
                                    alt={curPokemon.name}
                                    className="h-64"
                                />
                            </section>
                            <section className="grid justify-items-center p-2">
                                <p className="text-xl bg-green-500 text-white rounded-full w-fit px-6 py-2 h-fit grid justify-items-center capitalize my-4" >
                                    {curPokemon.types.map((curtype) => curtype.type.name).join(", ")}
                                </p>
                            </section>
                            <h1 className="text-2xl font-bold tracking-widest grid justify-items-center capitalize my-4">
                                {curPokemon.name}
                            </h1>

                            <div className="flex flex-row justify-between">
                                <p className="text-lg">
                                    Height: <span className="font-bold">{curPokemon.height}</span>
                                </p>
                                <p className="text-lg">
                                    Weight: <span className="font-bold">{curPokemon.weight}</span>
                                </p>
                                <p className="text-lg">
                                    Speed:{' '}
                                    <span className="font-bold">
                                        {curPokemon.stats?.[5]?.base_stat ?? 'N/A'}
                                    </span>
                                </p>
                            </div>
                            <div className="flex flex-row justify-between my-3">
                                <p className="text-lg">
                                    Experience: <span className="font-bold"> {curPokemon.base_experience
                                    }</span>
                                </p>
                                <p className="text-lg">
                                    Attack: <span className="font-bold">{curPokemon.stats?.[1]?.base_stat}</span>
                                </p>
                                <p className="text-lg">
                                    Abilities:{' '}
                                    <span className="font-bold">`
                                        {curPokemon.abilities.map((abilitieinfo) => abilitieinfo.ability.name).slice(0, 1).join(", ")}'
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading Pokémon data...</p>
            )}
        </div>
    );
};
