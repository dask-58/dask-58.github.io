export function getLinkTarget(link: string) {
  return link.includes('https') ? '_blank' : '_self'
}

export function isExternalLink(link: string) {
  return link.includes('https')
}
