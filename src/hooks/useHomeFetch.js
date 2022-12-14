import {useEffect, useState} from "react";
import API from "../API";
import QuestionData from "../components/QuestionData";

const initialState = {
    page: 0,
    results : [],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () =>{
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState]= useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1)
    const [question, setQuestion] = useState(QuestionData);
    const [response, setResponse] = useState([]);
    const fetchMovies = async (page, searchTerm = "") =>{
        try{
            setError(false)
            setLoading(true);
            const movies = await  API.fetchMovies(searchTerm, page);
           console.log(movies)
            setState(prev =>({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results]: [...movies.results]
            }));
        }
        catch (error){
            setError(true);
        }
        setLoading(false)
    };
    //initial render and search
    useEffect(()=>{
        setState(initialState)
        fetchMovies(1, searchTerm);
    }, [searchTerm]);

    return {state, loading, error, setSearchTerm, searchTerm };
};