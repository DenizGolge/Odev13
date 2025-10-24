import { brands } from "@/data/brands"
import { Brand } from "@/types/brand"
import { useQuery } from "@tanstack/react-query"

export const useBrands = () => {
  return useQuery<Brand[]>({
    queryKey: ['brands'],
    queryFn: ()=> Promise.resolve(brands),
    staleTime: 1000 * 60,
  }
    
  )
}