import { useState } from 'react';

const Type_Dropdown = ({ name, selectedType, setSelectedType }) => {
    const [isOpen, setIsOpen] = useState(false);

    const PokemonTypes = [
        { "id": 1, "name": "Normal" },
        { "id": 2, "name": "Fire" },
        { "id": 3, "name": "Water" },
        { "id": 4, "name": "Electric" },
        { "id": 5, "name": "Grass" },
        { "id": 6, "name": "Ice" },
        { "id": 7, "name": "Fighting" },
        { "id": 8, "name": "Poison" },
        { "id": 9, "name": "Ground" },
        { "id": 10, "name": "Flying" },
        { "id": 11, "name": "Psychic" },
        { "id": 12, "name": "Bug" },
        { "id": 13, "name": "Rock" },
        { "id": 14, "name": "Ghost" },
        { "id": 15, "name": "Dragon" },
        { "id": 16, "name": "Dark" },
        { "id": 17, "name": "Steel" },
        { "id": 18, "name": "Fairy" }
    ]


    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelection = (type) => {
        setSelectedType(type);
        setIsOpen(false);
    };

    return (
        <div className=''>
            <button
                onClick={toggleDropdown}
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                {selectedType ? selectedType : name}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {isOpen && (
                <div className="z-10 absolute bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="h-60 py-2 text-sm text-gray-700 dark:text-gray-200 overflow-y-scroll">
                        {PokemonTypes.map((type, index) => (
                            <li key={type.id}>
                                <button
                                    className={`block ${index === 0 ? "border-t-none" : "border-t border-t-zinc-200"} pb-2 w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                                    onClick={() => handleSelection(type.name)}
                                >
                                    {type.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Type_Dropdown;