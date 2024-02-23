import Image from "next/image"

export default function Avatar({size, src}: {size: number, src: string}){
    return(
        <Image
            alt="Avatar"
            className="rounded-full"
            src={src}
            width={size}
            height={size}
            style={{ aspectRatio: '40/40', objectFit: 'cover' }}
          />
    )
}