import React, {useState, useEffect} from "react";
//config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";
//api
import API from "../API";
//hook
import {useHomeFetch} from "../hooks/useHomeFetch";
//image

//components
import Option from "./Options";
import QuestionData from "./QuestionData";
import {OptionButton} from "./OptionButton";

const Home =() =>{
const {state, loading, error, setSearchTerm, searchTerm, questions, response} = useHomeFetch();
    // const options = QuestionData[0];

    // console.log(options)
    return (
        <>
        <OptionButton option={"Expend energy, enjoy groups"} />
        </>
    );

};
export default Home;