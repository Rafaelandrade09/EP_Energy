import React from 'react';

function BarraNav (){
    return(
        <nav>
            <div className="relative bg-gray-500 w-full h-[223.19rem] overflow-hidden text-left text-[1.56rem] text-secondary " style={{ top: '-1px'}}>

                {/* ----- BARRA MENU ----- */}
                <div className="absolute top-[0.06rem] left-[rem] bg-gray-900 w-[87.69rem] h-[4.75rem]"  style={{ height: '60.6px'}}/>

                {/*logo*/}
                <img
                className="absolute top-[-2rem] left-[32.13rem] w-[19rem] h-[8rem] object-cover"
                alt=""
                src="/epenergyremovebgpreview-2@2x.png"
                />
                <div className="absolute  left-[4rem] text-center inline-block w-[4.19rem] texto-menu">
                HOME
                </div>
                <div className="absolute left-[19.44rem] text-center inline-block w-[6.63rem] texto-menu">
                CONTATO
                </div>
                <div className="absolute  left-[57.75rem] text-center inline-block w-[6rem] texto-menu">
                SOBRE
                </div>
                <div className="absolute left-[70.81rem] text-center inline-block w-[12.94rem] texto-menu">
                NOSSAS SOLUÇÕES
                </div>
                <div className="absolute left-[89.31rem] text-center inline-block w-[5.5rem] texto-menu">
                SERVIÇOS
                </div>
            </div>

        </nav>
    );
}export default BarraNav;
