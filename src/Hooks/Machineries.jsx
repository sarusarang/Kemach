import { useQuery } from "@tanstack/react-query"
import { GetMachine } from "../Services/AllApi"



export const Machineries = () => {


    return useQuery({

        queryKey: ["ProductData"],
        queryFn: async () => {

            const response = await GetMachine()

            return response.data

        }

    })

}


