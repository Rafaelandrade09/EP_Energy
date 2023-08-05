import React from 'react';

/*
function BarraNav (){
    return(
        <nav>
            <div className="relative bg-gray-500 w-full h-[223.19rem] overflow-hidden text-left text-[1.56rem] text-secondary " style={{ top: '-1px'}}>

                
                <div className="absolute top-[0.06rem] left-[rem] bg-gray-900 w-[87.69rem] h-[4.75rem]"  style={{ height: '60.6px'}}/>

               
                <img
                className="absolute top-[-2rem] left-[2.5rem] w-[19rem] h-[8rem] object-cover"
                alt=""
                src="/epenergyremovebgpreview-2@2x.png"
                />
                <div className="absolute  left-[25rem] text-center inline-block  texto-menu">
                HOME
                </div>
                <div className="absolute left-[39rem] text-center inline-block texto-menu">
                CONTATO
                </div>
                <div className="absolute  left-[55rem] text-center inline-block  texto-menu">
                SOBRE
                </div>
                <div className="absolute left-[70.81rem] text-center inline-block  texto-menu">
                NOSSAS SOLUÇÕES
                </div>
            </div>

        </nav>
    );
}export default BarraNav;
*/


function BarraNav (){
    return (
        <nav className="navbar">
            
            <a href="/" className="logo-link">
                <img
                alt=""
                src="/epenergyremovebgpreview-2@2x.png"
                className="logo-image"
                />
            </a>
            <div className="nav-links">
                <a href="/">HOME</a>
                <a href="/Contato">CONTATO</a>
                <a href="/Sobre">SOBRE</a>
                <a href="/NossasSolucoes">NOSSAS SOLUÇÕES</a>
            </div>
      </nav>
      );
}export default BarraNav;


            