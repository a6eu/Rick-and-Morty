'use client'

import { useFetchCharacters } from '@/entities/character/hooks'
import { useRouter, useSearchParams } from 'next/navigation'
import { CharactersGrid } from '@/widgets/characters'
import { Pagination } from '@/widgets/pagination/Pagination'
import { ErrorComponent } from '@/shared/error/Error'
import { Loading } from '@/shared/loading/Loading'

export default function Home() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const page = Number(searchParams.get('page')) || 1
    const name = searchParams.get('name') || ''

    const { isPending, error, data } = useFetchCharacters(page, name)

    const handlePageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('page', newPage.toString())
        router.push(`?${params.toString()}`, { scroll: false })
    }

    if (isPending) return <Loading />
    if (error) return <div className="flex justify-center items-center min-h-screen">
        <ErrorComponent message={'Unknown Error'} />
    </div>

    console.log(data)

    return (
        <div className="min-h-screen flex flex-col gap-10 items-center py-20">
            <CharactersGrid characters={data?.results ?? []} />
            <Pagination
                totalItems={data?.info.count ?? 0}
                itemsPerPage={20}
                setCurrentPage={handlePageChange}
                currentPage={page}
            />
        </div>
    )
}
