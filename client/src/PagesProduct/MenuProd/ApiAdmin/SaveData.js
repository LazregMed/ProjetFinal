import '../../../App.css';

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct, Register ,DeletedProduct, UpdateProduct} from '../../../Redux/ProductSlice'
import Table from 'react-bootstrap/Table';
import UpdateProd from './UpdateData'




const SaveData = () => {

    
    const AllProducts = useSelector(state => state.Product.RegisterProduct)
  
    const sort=[...AllProducts]?.reverse()
    

 const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllProduct())
       
    }, [])

   
    const Create = (e) => {
        
        e.preventDefault()
        
        dispatch(Register(newProduct))
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
                <p> Save Data </p>
            </div>
            <div className='inputKey'>
                <input className='inp' placeholder='Projet' onChange={HandleChange} type='text' name='Projet'></input>
                <input className='inp' placeholder='CodeArticle' onChange={HandleChange} type='text' name='CodeArticle'></input>
                <input className='inp' placeholder='Description' onChange={HandleChange} type='text' name='Description'></input>
                <input className='inp' placeholder='Kittig' onChange={HandleChange} type='number' name='Kitting'></input>
                <input className='inp' placeholder='Coupe' onChange={HandleChange} type='number' name='Coupe'></input>
                <input className='inp' placeholder='Montage' onChange={HandleChange} type='number' name='Montage'></input>
                <input className='inp' placeholder='Test' onChange={HandleChange} type='number' name='Test'></input>
                
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
                                <th>Kitting</th>
                                <th>Coupe</th>
                                <th>Montage</th>
                                <th>Test</th>
                                <th>Total</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>

                        </thead>
                        
                       
                        {sort?.map((props) => (<>
                        
                            <tbody>
                                <tr>
                                  
                                    <td >{props.Projet}</td>
                                    <td >{props.CodeArticle}</td>
                                    <td >{props.Description}</td>
                                    <td >{props.Kitting}</td>
                                    <td >{props.Coupe}</td>
                                    <td >{props.Montage}</td>
                                    <td >{props.Test}</td>
                                    <td >{ +props.Kitting + +props.Coupe + +props.Montage + +props.Test}</td>
                                    <UpdateProd props={props}/>
                                    <td ><button id="delete" onClick={()=>dispatch(DeletedProduct(props._id))} >Delete</button></td>
                               
                                    {Errors && <p >{Errors}</p>}
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

export default SaveData
