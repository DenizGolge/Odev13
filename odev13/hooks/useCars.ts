import { cars } from '@/data/cars';
import { Car } from '@/types/car';
import { useQuery } from '@tanstack/react-query';

export const useCars = () => {
  return useQuery<Car[]>({
    queryKey: ['cars'],
    queryFn: ()=> Promise.resolve(cars),
    staleTime: 1000 * 60,
  }
    
  )
}



