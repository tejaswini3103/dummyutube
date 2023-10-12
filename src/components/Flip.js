import React from 'react'
import im1 from '../images/fklogo.webp'
export default function Flip() {
  return (
    <>
    <div className='container-fluid'>
    <div className='row sbar' >
        <div className='col-md-2 h'>
        <img className='img' src={im1} alt='flipkartlogo' width='65' height='30'></img>
        </div>
        <div className='col-md-5 h'>
        <input type='text' placeholder='search here' className='form-control bar'></input>
        </div>
        <div className='col-md-5 h'>
        <h4 className='nen'><i class="fa fa-shopping-bag"></i> Become a Seller</h4>
        <h4 className='nen'><i class="fa fa-user-circle"></i> Sign in</h4>
        <h4 className='nen'><i class="fa fa-shopping-cart"></i> Cart</h4>
        </div>
    </div>
    <h1>Tester site </h1>
    <hr style={{color:'gray'}}></hr>
    <div className='row'></div>
    </div>
    </>
  )
}
