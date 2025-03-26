import { useQuery } from '@tanstack/react-query'
import { fetchCharacters } from '@/entities/character/api'

export const useFetchCharacters = (page: number, name: string) => {
    return useQuery({
        queryKey: ['characters', page, name],
        queryFn: () => fetchCharacters(page, name),
        staleTime: 1000 * 60,
    })

}