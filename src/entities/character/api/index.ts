import { $api } from '@/shared/http'
import { ICharacter } from '@/entities/character/model'
import { isAxiosError } from 'axios'

interface ICharacterResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: ICharacter[];
}

export const fetchCharacters = async (page: number, name?: string): Promise<ICharacterResponse> => {
    try {
        const response = await $api.get<ICharacterResponse>('/character', {
            params: { page, name },
        })
        return response.data
    } catch (error) {
        if (isAxiosError(error)) {
            console.error('API Error:', error.response?.data || error.message)
            throw error
        }
        throw new Error('An unexpected error occurred')
    }
}