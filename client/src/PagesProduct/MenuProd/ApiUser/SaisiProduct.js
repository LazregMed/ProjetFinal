import '../../../App.css';

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTempsReels, AddSaisie ,DeletedSaisie,UpdateSaisie} from '../../../Redux/SaisieProductSlice'
import Table from 'react-bootstrap/Table';




const SaisiProduct = () => {

    
    const AllSaisie = useSelector(state => state.Saisie.RegisterSaisie)
    
    useEffect(() => {
        dispatch(getTempsReels())
    }, [])

    const dispatch = useDispatch()
    const Create = (e) => {
        e.preventDefault()
        dispatch(AddSaisie(newProduct))
        window.location.reload(false)
    }


    const [newProduct, setNewProduct] = useState({})
    const HandleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
    }

    const Errors = useSelector(state => state.Product.Errors)

    return (
        <div className="crud">
            <div className="head">
                <h2>crud</h2>
                <p>Page Saisie </p>
            </div>
            <div className='inputKey'>
                <input placeholder='Projet' onChange={HandleChange} type='text' name='Projet'></input>
                <input placeholder='CodeArticle' onChange={HandleChange} type='text' name='CodeArticle'></input>
                <input placeholder='Description' onChange={HandleChange} type='text' name='Description'></input>
                <input placeholder='Séquence' onChange={HandleChange} type='number' name='Séquence'></input>
                <input placeholder='Kittig' onChange={HandleChange} type='number' name='Kitting'></input>
                <input placeholder='Coupe' onChange={HandleChange} type='number' name='Coupe'></input>
                <input placeholder='Montage' onChange={HandleChange} type='number' name='Montage'></input>
                <input placeholder='Test' onChange={HandleChange} type='number' name='Test'></input>
               
            </div>

            <button onClick={Create} type='Submit'>Create</button>

            {Errors && <p >{Errors}</p>}

            <div className='output'>

                <div >
                    <Table>
                        <thead>

                            <tr>

                                <th>Projet</th>
                                <th>CodeArticle</th>
                                <th>Description</th>
                                <th>Séquence</th>
                                <th>Kitting</th>
                                <th>Coupe</th>
                                <th>Montage</th>
                                <th>Test</th>
                                <th>Total</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>

                        </thead>
                       
                        {AllSaisie?.map((Pro) => (<>
                            <tbody>
                                <tr>
                                  
                                    <td >{Pro.Projet}</td>
                                    <td >{Pro.CodeArticle}</td>
                                    <td >{Pro.Description}</td>
                                    <td >{Pro.Séquence}</td>
                                    <td >{Pro.Kitting}</td>
                                    <td >{Pro.Coupe}</td>
                                    <td >{Pro.Montage}</td>
                                    <td >{Pro.Test}</td>
                                    <td >{+Pro.Test + +Pro.Kitting + +Pro.Coupe + +Pro.Montage }</td>
                                    <td ><button id="update"  >Update</button></td>
                                    <td ><button id="delete" onClick={()=>dispatch(DeletedSaisie(Pro._id))} >Delete</button></td>
                               
                                    
                                </tr>
                                
                            </tbody>
                        
                            </>
                        ))}
                    </Table>



                  

                </div>


            </div>
        </div>

    )
}

export default SaisiProduct
