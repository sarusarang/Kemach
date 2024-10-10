import { GetAttachment } from "../Services/AllApi";
import { useQuery } from "@tanstack/react-query";




export const Attachments = () => {


    return useQuery({

        queryKey: ["Attachemnt"],
        queryFn: async () => {

            const response = await GetAttachment()

            return response.data

        }

    })


}