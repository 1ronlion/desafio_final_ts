import { Country } from "./types";

const API_BASE_URL = "https://restcountries.com/v3.1/region/europe"


async function fetchData() {
    
}


abstract class CountryModel {

    static async getCountry()//: Promise<Country>
    {

        const result = await fetchData()


    }
    static async getCountryById()//: Promise<Country>
    {

        const result = await fetchData()
        

    }


}

export { CountryModel }
