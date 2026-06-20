export function paintingImage(filename) {
  const base = import.meta.env.BASE_URL || '/'
  const prefix = base.endsWith('/') ? base : `${base}/`
  return `${prefix}paintings/${encodeURI(filename)}`
}
