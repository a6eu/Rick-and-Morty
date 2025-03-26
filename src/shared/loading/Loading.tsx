import Image from 'next/image'
import React from 'react'

export const Loading = () => {
    return (
        <Image src="/spaceship.png" alt="loading" width={300} height={200}
               className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 loading-animation" />
    )
}