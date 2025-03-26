import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

type Props = {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
};

export const Pagination = ({
                               totalItems,
                               itemsPerPage,
                               setCurrentPage,
                           }: Props) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const maxVisiblePages = 5
    const searchParams = useSearchParams()
    const currentPage = parseInt(searchParams.get('page') || '1', 10)

    const generatePages = () => {
        if (totalPages <= maxVisiblePages) {
            return Array.from({ length: totalPages }, (_, i) => i + 1)
        }

        const pages: (number | string)[] = []
        const leftSide = Math.max(2, currentPage - 1)
        const rightSide = Math.min(totalPages - 1, currentPage + 1)

        pages.push(1)
        if (leftSide > 2) pages.push('...')
        for (let i = leftSide; i <= rightSide; i++) pages.push(i)
        if (rightSide < totalPages - 1) pages.push('...')
        pages.push(totalPages)

        return pages
    }

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    }

    return (
        <div className="flex justify-center items-center space-x-2 mt-4 rounded-lg">
            <button
                className={`p-2 rounded-full ${currentPage === 1 ? 'bg-gray-300' : 'bg-green text-white'}`}
                onClick={handlePrevious}
                disabled={currentPage === 1}
            >
                <ChevronLeft />
            </button>

            {generatePages().map((page, index) =>
                    typeof page === 'number' ? (
                        <button
                            key={index}
                            className={`size-10 rounded-full ${currentPage === page ? 'bg-green' : 'bg-gray-200'}`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    ) : (
                        <span key={index} className="px-2 py-2">
            {page}
          </span>
                    ),
            )}

            <button
                className={`p-2 rounded-full ${currentPage === totalPages ? 'bg-gray-300' : 'bg-green text-white'}`}
                onClick={handleNext}
                disabled={currentPage === totalPages}
            >
                <ChevronRight />
            </button>
        </div>
    )
}
