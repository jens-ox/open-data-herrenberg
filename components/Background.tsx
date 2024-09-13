import Image from 'next/image'
import mountains from '../public/bg.webp'

export default function Background() {
  return (
    <Image
      alt="Herrenberg"
      src={mountains}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      className="w-full object-cover absolute top-0 -z-10"
    />
  )
}
