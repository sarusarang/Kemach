import { CommonApi } from "./CommonApi";


const base_url = "https://server.kemachequipments.com"



// Get Machine
export const GetMachine = async () => {

    return CommonApi("GET", `${base_url}/machineries/`, "", "")

}


// Get Slider
export const GetSlider = async () => {

    return CommonApi("GET", `${base_url}/home-slider/`, "", "")

}
