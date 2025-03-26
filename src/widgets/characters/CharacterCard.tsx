import { ICharacter } from '@/entities/character/model'

export const CharacterCard = ({ character }: { character: ICharacter }) => {
    return (
        <div
            style={{
                background: 'url(' + character.image + ') no-repeat center center',
                backgroundSize: 'cover',
            }}
            className="bg-black rounded-lg overflow-hidden shadow-lg min-h-[400px] w-full relative cursor-pointer transition-all hover:scale-110 flex flex-col justify-between"
        >
            <div className="p-2 text-center font-semibold z-10 bg-green">
                {character.name}
            </div>
            <div className="w-full h-1/3 p-2 text-white">
                <div
                    className="bg-black/80 rounded-lg w-full h-full px-2 py-3 flex flex-col items-center justify-between"
                >
                    <div>Status: {character.status}</div>
                    <div>Species: {character.species}</div>
                    <div>Located: {character.location.name}</div>
                </div>
            </div>
        </div>
    )
}
