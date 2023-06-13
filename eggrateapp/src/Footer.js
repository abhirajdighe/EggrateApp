import React from 'react'
import "./admin.css"

function Footer() {
    return (
        <div id='foot'>

            <div className='ul1' type="none">
                <p>Useful Links</p>
                <p>Agri Update</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
                <p>Contact Us</p>

            </div>

            <div className='ul2' type="none">
                <h4>Experience App on Mobile</h4>
                <div className='footbtn'>
                    <button className='btn btn-dark'>Download</button>
                    <button className='btn btn-primary'>Download</button>
                </div>


            </div>

            <div className='ul3' type="none">
                <p>Tel: 98XXXXXXXX</p>
                <p>email:google012@gmail.com</p>

            </div>







        </div>
    )
}

export default Footer