import React from "react";
import send from '/images/angle-square-right.svg'
import qrCode from '/images/QR_Code.png'
import twitter from '/images/twitter.svg'
import instagram from '/images/instagram.svg'
import linkedin from '/images/linkedin.svg'
import facebook from '/images/facebook.svg'


function Footer(){
    return (
        <>
        <div className="bg-black">
         <div className="mt-10 flex flex-row w-11/12 m-auto bg-black text-white opacity-90 py-7" >
            <div className="w-1/5">
                <h1 className="text-xl font-semibold">Exclusive</h1>
                <h2 className="text-lg">subscribe</h2>
                <p>Get 10% off your first order</p>
                <label className="flex flex-row w-56 items-center border-2 border-white mt-4 rounded-md">
                    <input type="text" placeholder="Enter your email " className="outline-none   bg-black text-white p-1"/>
                     <img src={send} alt="This a send icon " className="h-8 -ml-2 bg-white rounded-md"/>
                </label>
            </div> 
            <div className="w-1/5">
                 <h1 className="text-lg mb-3">support</h1>
                 <p className="py-1">111 Bijoy saran,<br /> Dhaka, DH 1515, India</p>
                 <p className="py-1">exclusive@gmail.com</p>
                 <p className="py-1">+88015-88888-9999</p>
            
            </div>
            <div className="w-1/5 flex flex-col">
                <h1 className="text-lg mb-3">Account</h1>
                <a href="#" className="py-1">My account</a>
                <a href="#" className="py-1">Login / Register</a>
                <a href="#" className="py-1">Cart</a>
                <a href="#" className="py-1">Wishlist</a>
                <a href="#" className="py-1">Shop</a>
            </div>
            <div className="w-1/5 flex-col">
                <h1 className="text-lg mb-3">Quick link</h1>
                <p className="py-1">Privacy Policy</p>
                <p className="py-1">Terms of use</p>
                <p className="py-1">FAQ</p>
                <p className="py-1">Contact</p>
            </div>
            <div className="w-1/5 flex-col">
                <h1 className="text-lg mb-3">Download App</h1>
                <p className="text-xs">save $3 with App new User only</p>
                <div>
                    <img src={qrCode} alt="the qr code" className="w-16 bg-white" />
                    <div></div>
                </div>

                <div className="flex flec-row justify-between w-40 mt-4">
                    <img src={instagram} alt="instagram icon" className="w-5 bg-white rounded-full"/>
                    <img src={linkedin} alt="linkedin icon" className="w-5 bg-white rounded-full" />
                    <img src={facebook} alt="facebook icon" className="w-5 bg-white rounded-full"/>
                    <img src={twitter} alt="twitter icon" className="w-5 bg-white rounded-full"/>
                </div>
               
            </div>
         </div>
         <div className="mt-12 flex flex-col items-center">
                <hr className="w-full opacity-15" />
                <p className="text-gray-300 opacity-30 m-2 text-sm">&copy; copyright Angel 2024. All right reserved</p>
         </div>

         </div>
        </>
    )

}
export default Footer;