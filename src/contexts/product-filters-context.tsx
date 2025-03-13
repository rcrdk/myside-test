import { createContext, useState } from 'react'

interface ProductFiltersContextDataProps {
  searchQuery: string
  onChangeSearchQuery: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchCategory: string
  onChangeSearchCategory: (category: string) => void
  filtersSelected: {
    query: string
    category: string
  }
  onChangeFilters: (e: React.FormEvent) => void
}
export const ProductFiltersContext = createContext<ProductFiltersContextDataProps>({} as ProductFiltersContextDataProps)

interface ProductFiltersContextProviderProps {
  children: React.ReactNode
}

export function ProductFiltersContextProvider({ children }: ProductFiltersContextProviderProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchCategory, setSearchCategory] = useState('')

  const [filtersSelected, setFiltersSelected] = useState({ query: '', category: '' })

  function onChangeSearchQuery(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value)
  }

  function onChangeSearchCategory(category: string) {
    setSearchCategory(category)
  }

  function onChangeFilters(e: React.FormEvent) {
    e.preventDefault()

    setFiltersSelected({
      query: searchQuery,
      category: searchCategory,
    })
  }

  return (
    <ProductFiltersContext.Provider
      value={{
        searchQuery,
        onChangeSearchQuery,
        searchCategory,
        onChangeSearchCategory,
        filtersSelected,
        onChangeFilters,
      }}
    >
      {children}
    </ProductFiltersContext.Provider>
  )
}
