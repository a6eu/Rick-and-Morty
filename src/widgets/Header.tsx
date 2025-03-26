'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const Header = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [query, setQuery] = useState(searchParams.get('name') || '')
    const params = new URLSearchParams(searchParams.toString())

    useEffect(() => {
        if (query) {
            params.set('name', query)
            params.set('page', '1')
        } else {
            params.delete('name')
        }
        router.push(`?${params.toString()}`, { scroll: false })
    }, [query, router, searchParams])

    return (
        <header
            className="w-full max-w-4xl bg-green/50 text-black shadow-lg h-20 fixed top-5 rounded-full left-1/2 -translate-x-1/2 z-50">
            <input
                type="text"
                placeholder="Search..."
                className="w-full h-full pl-10 select-none outline-0 text-3xl"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </header>
    )
}
