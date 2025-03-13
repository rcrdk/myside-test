type Props<T> = {
  data: T[]
  page: number
  itemsPerPage?: number
}

export function paginate<T>({ data, page = 1, itemsPerPage = 12 }: Props<T>) {
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const totalPages = Math.ceil(data.length / itemsPerPage)

  return {
    items: data.slice(startIndex, endIndex),
    totalPages,
  }
}
