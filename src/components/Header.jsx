import { useState } from 'react';

function Header(){
    
    return (
        <div className="header p-3" id="header">
            <div className="container px-5">
                <div className="row align-items-center justify-content-center">
                    
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                        <div className="effect-1" id="effect">s</div>
                        <div className="my-5 text-center text-xl-start">
                            <div className="first-h1"><h1 className="display-5 fw-bolder pt-2">MyPhone 15 Pro</h1><br/></div>
                            <div className="container" id="effect-3"></div>
                            <p className="lead fw-normal text-white-50">MyPhone 15 Pro <br/> Titanyum. Çok Güçlü. Çok Hafif. Çok Pro</p>
                                <div className="d-flex justify-content-sm-center justify-content-xl-start mt-4">
                                    <div className="effect-3" id="effect-2">s</div>
                                    <a href="#main-section" id="header-buttons"><button type="button" className="btn btn-primary btn-lg" href="www.google.com" >Şimdi Satın Al</button></a>    
                                    <button type="button" className="btn btn-outline-light btn-lg px-4 mx-4" id="header-buttons">Daha Fazla</button>  
                                </div>    
                        </div>    
                    </div>
                    <div className="effect-2">a</div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center phone-div">
                            <img className="img-fluid rounded-3 my-5 mx-5 phone-photo" src="../assets/images/Apple-iPhone-12-PNG-Free-Download.png" alt="..." />
                        </div>
                    </div>
                </div>
            </div>

    )
}
export default Header;
