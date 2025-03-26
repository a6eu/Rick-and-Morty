import { CharacterCard } from '@/widgets/characters/CharacterCard'
import { ICharacter } from '@/entities/character/model'

export const CharactersGrid = (props: { characters: ICharacter[] }) => {
    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10 my-auto"
        >
            {props.characters.map((character: ICharacter) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </div>)
}