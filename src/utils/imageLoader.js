export default function imageLoader({ src, width, quality }) {
  const isDev = process.env.NODE_ENV !== 'production'
  const basePath = isDev ? '' : '/'
  
  // Handle both absolute and relative paths
  const imagePath = src.startsWith('/') ? src : `/${src}`
  return `${basePath}${imagePath}${quality ? `?q=${quality}` : ''}`
}
