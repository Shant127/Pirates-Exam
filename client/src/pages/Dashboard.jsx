import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

const Dashboard = () => {
    //STATE
    const [allPirates, setAllPirates] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            // .then(res => console.log(res.data))
            .then(res => setAllPirates(res.data))
            .catch(errors => console.log(errors))
    }, [refresh])

    const deletePirate = (pirate_id) => {
        axios.delete(`http://localhost:8000/api/pirates/${pirate_id}`)
            .then(res => {
                setRefresh(!refresh)
            })
            .catch(errors => console.log(errors))
    }

    const createPirate = (pirate_id) => {
        axios.create(`http://localhost:8000/api/pirates/${pirate_id}`)
            .then(res => {
                setRefresh(!refresh)
            })
            .catch(errors => console.log(errors))
    }

    //HANDLER
    return (
    <fieldset>
        <legend>Dashboard.jsx</legend>
        <table>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Treasure</th>
                    <th>peg leg</th>
                    <th>eye patch</th>
                    <th>hook hand</th>
                </tr>
            </thead>
            <tbody>
                {
                    allPirates.map((pirate) => {
                        //WE WILL DESTRUCTURE TO NOT HAVE TO REPEAT OUR ITEM SO MUCH IN THE TAGS AND CAN JUST CALL THE PROPERTIES DIRECTLY
                        const { _id, chest, pegleg,eyepatch, hookhand, ImageURL } = pirate
                        return (
                            <tr key={pirate._id}>
                                {/* DECONSTRUCTING OUR CONSTRUCTOR FROM OUR MODEL */}
                                <td>
                                    <img style={{"width":"100px"}} src={ImageURL} alt="" />
                                </td>
                                <td>{chest}</td>
                                <td>{pegleg ? 'yes' : 'no'}</td>
                                <td>{eyepatch ? 'yes' : 'no'}</td>
                                <td>{hookhand ? 'yes' : 'no'}</td>
                                <td>
                                    <Link to={`/pirates/detail/${_id}`}>View</Link>
                                    <button onClick={() => deletePirate(_id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </fieldset>
    )
}
export default Dashboard