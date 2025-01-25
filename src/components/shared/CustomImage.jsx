import Image from 'next/image'
import imageLoader from '@/utils/imageLoader'

export default function CustomImage(props) {
  return (
    <Image
      {...props}
      loader={imageLoader}
      alt='loader'
    />
  )
}
