import Image from 'next/image'

export const ErrorComponent = ({ message }: { message: string }) => {
    return (
        <div className="flex items-center justify-center text-3xl relative rounded-2xl overflow-hidden">
            <Image src="/error-bg.png" alt="Error" height={700} width={700} />
            <div className="absolute bottom-0 left-3 text-red-500">
                {message}
            </div>
        </div>
    )
}