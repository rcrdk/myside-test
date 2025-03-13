export function searchOnString(search: string, string: string) {
  const normalize = (entry: string) =>
    entry
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()

  const normalizeSearch = normalize(search)
  const normalizeString = normalize(string)

  return normalizeString.includes(normalizeSearch)
}
