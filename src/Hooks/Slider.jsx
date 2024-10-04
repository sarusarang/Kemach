import { useQuery } from "@tanstack/react-query";
import { GetSlider } from "../Services/AllApi";



export const Slider = () => {

    
    return useQuery({

        queryKey: ["Slider"],
        queryFn: async () => {

            const response = await GetSlider()

            return response.data

        }

    })


}