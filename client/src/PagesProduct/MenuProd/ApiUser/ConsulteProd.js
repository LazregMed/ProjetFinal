import { Input } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { getTempsReels } from '../../../Redux/SaisieProductSlice';
import { getAllProduct } from '../../../Redux/ProductSlice';
const ConsultéProd = () => {


  const dispatch =useDispatch()

  useEffect(() => {
        dispatch(getTempsReels(),getAllProduct())
    }, [])
  const AllSaisie = useSelector(state => state.Saisie.RegisterSaisie)
  const AllProducts = useSelector(state => state.Product.RegisterProduct)
  
  const [projetName, setProjetName] = useState('')

 
  
  return (
    <div className="crud">
      
           <select onChange={(e)=>setProjetName(e.target.value)} className="projet">
                  {AllSaisie?.map((el) =>
                   <>
                      <option >{el.Projet}</option>
                    </>      
                      )}
           </select>

          <Table > 
								<tbody className='tab-conslt'>
                  <tr>
					<th></th>
					<th>Kitting</th>
					<th>Coupe</th>
					<th>Montage</th>
					<th>Test</th>
					<th>Total</th>
				</tr>
				<tr>
					<td>Temps Passé</td>
					<td>{AllSaisie?.filter(el=> el.Projet == projetName).reduce((a,b)=> a + b.Kitting ,0)} </td>
          
					<td>{AllSaisie?.filter(el=> el.Projet == projetName).reduce((a,b)=> a + b.Coupe ,0)}</td>
           
					<td>{AllSaisie?.filter(el=> el.Projet == projetName).reduce((a,b)=> a + b.Montage ,0)}</td>
           
					<td>{AllSaisie?.filter(el=> el.Projet == projetName).reduce((a,b)=> a + b.Test ,0)}</td>
           
                     <td></td>
           
					</tr>
				<tr>
					<td>Objectif</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					
				</tr>
				<tr>
					<td>Productivité (Objectif / Temps passé) </td>
					<td > 0 %</td>
					<td > 0 %</td>
					<td > 0 %</td>
					<td > 0 %</td>
					<td > 0 %</td>
					
				</tr>
			</tbody>
      </Table> 
     
                        
                           
    </div>
  )
}

export default ConsultéProd