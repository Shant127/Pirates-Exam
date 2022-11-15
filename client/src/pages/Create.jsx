import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const navigate = useNavigate()
    const [refresh, setRefresh] = useState(false)

    const [name,setName] = useState("")
    const [image, setImage] = useState("")
    const [chest, setChest] = useState("")
    const [phrase, setPhrase] = useState("")
    const [pegleg, setPegleg] = useState(true)
    const [position, setPosition] = useState("first mate")
    const [eyepatch, setEyepatch] = useState(true)
    const [hook, setHook] = useState(true)

    const[errors,setErrors] = useState([]);
    const handleCheck =() => {
        setEyepatch(!eyepatch)
    }

    const handledCheck =() => {
        setPegleg(!pegleg)
    }

    const handlesCheck =() => {
        setHook(!hook)
    }


    const deletePirate = (pirate_id) => {
        axios.delete(`http://localhost:8000/api/pirates/${pirate_id}`)
            .then(res => {
                setRefresh(!refresh)
            })
            .catch(errors => console.log(errors))
    }

    const createPirate = (e) => {
        e.preventDefault()
        let body = {
            "name" : name,
            "ImageURL" : image,
            "Chests" : chest,
            "Phrase" : phrase,
            "pegleg" : pegleg,
            "eyepatch" : eyepatch,
            "hook" : hook,
            "Position" : position,
        }
        axios.post("http://localhost:8000/api/pirates", body)
            .then(res =>  {
                console.log(res.data)
                setName("")
                setImage(false)
                setChest("")
                setPhrase("")
                setPegleg("")
                setEyepatch("")
                setHook("")
                setPosition("")
                navigate("/pirates")
            })
            .catch(err =>{
                console.log(err)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
            //.catch(errors => console.log(errors))
    }

    return (
        <fieldset>
            <legend>Create.jsx</legend>
            <form onSubmit={createPirate}>
                <p>
                Pirate Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </p>
                <p>
                Image URL:
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                </p>
                <p>
                    Number Of Chests:
                <input type="number" value={chest} onChange={(e) => setChest(e.target.value)} />
                </p>
                <p>
                Pirate Catch Phrase:
                    <input type="text" value={phrase} onChange={(e) => setPhrase(e.target.value)} />
                </p>
                <p>
                Crew Position:
                    <select name="" id="" value={position} onChange={(e) => setPosition(e.target.value)}>
                        <option value="first name">First Mate</option>
                        <option value="quarter master">Quarter Master</option>
                        <option value="bootswain">Bootswain</option>
                        <option value="powder monkey">Powder Monkey</option>
                    </select>
                </p>
                <p>
                    Peg Leg
                    <input type="checkbox" checked={pegleg} onChange={handledCheck}  />
                </p>
                <p>
                    Eye Patch
                    <input type="checkbox" checked={eyepatch} onChange={handleCheck}  />
                </p>
                <p>
                    Hook Hand
                <input type="checkbox" checked={hook} onChange={handlesCheck}  />
                </p>
                <button onSubmit={createPirate}>Create</button>
            </form>
            {
                errors.map((error) => <p> {error} </p> )
            }
        </fieldset>
    )
}

export default Create