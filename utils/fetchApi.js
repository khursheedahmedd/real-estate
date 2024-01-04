import axios from "axios";

// Base URL
export const baseURL = "https://bayut.p.rapidapi.com";

// Fetch Data from API
export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key': '575e6c470amshea625682afa2db1p1f2b99jsndc2dfa7b9139',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        },
    });

    return data;
};
