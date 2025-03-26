import { useQuery } from '@tanstack/react-query'
import { fetchCharacters } from '@/entities/character/api'

export const useFetchCharacters = (page: number, name: string) => {
    const {} = useQuery({
        queryKey: ['characters', page, name],
        queryFn: () => fetchCharacters(page, name),
        staleTime: 1000 * 60,
    })
}