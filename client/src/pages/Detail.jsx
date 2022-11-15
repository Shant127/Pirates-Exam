import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'



const Edit = () => {

    // GET PATH VARIABLE
    const { pirate_id } = useParams()
    const navigate = useNavigate()

    // STATE
    const [position, setPosition] = useState("")
    const [name, setName] = useState("")
    const [chest, setChest] = useState("")
    const [pegleg, setPegleg] = useState("")
    const [eyepatch, setEyePatch] = useState("")
    const [hook, setHook] = useState("")
    const [phrase, setPhrase] = useState("")
    const [ImageURL, setImageURL] = useState("")

    const [errors, setErrors] = useState([]); 
    const handleCheck =() => {
        setChest(!chest)
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${pirate_id}`)
            .then(res => {
                console.log(res.data)
                setName(res.data.name)
                setPosition(res.data.Position)
                setImageURL(res.data.ImageURL)
                setPhrase(res.data.phrase)
                setChest(res.data.Chests)
                setPegleg(res.data.pegleg)
                setEyePatch(res.data.eyepatch)
                setHook(res.data.hook)
            })
            .catch(errors => console.log(errors))
    }, [])

    const gotoDashboard = (e) => {
        navigate('/pirates')
    }


    return (
        <fieldset>
            <legend>Detail.jsx</legend>
            <h1>Name:{name}</h1>
            <img src={ImageURL} alt="" />
            <h1>Position:{position}</h1>
            <h1>Treasure: {chest}</h1>
            <h1>Peg Leg: {pegleg ? 'yes' : 'no'}</h1>
            <h1>Hook hand: {hook ? 'yes' : 'no'}</h1>
            <h1>Eye Patch: {eyepatch ? 'yes' : 'no'}</h1>
            
        </fieldset>
        
    )
}

export default Edit