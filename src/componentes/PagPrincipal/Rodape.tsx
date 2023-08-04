import React from 'react';

function Rodape (){
    return(
        <footer>
                {/* ----- RODAPÈ -----*/}
        <div className="absolute top-[209.31rem] left-[3.13rem] bg-gray-900 w-[80.63rem] h-[13.88rem]" />
        
        
        {/* logo */}
        <img
            className="absolute top-[207.94rem] left-[10.06rem] w-[19.38rem] h-[11.63rem] object-cover"
            alt=""
            src="/customcolor-textlogoname-transparent-background-1@2x.png"
        />
        
        {/* links */}
        <div className="absolute top-[212.81rem] left-[50.60rem] text-[1.25rem] text-center">
            HOME
        </div>
        <div className="absolute top-[212.81rem] left-[55.5rem] text-[1.25rem] text-center">
            CONTATO
        </div>
        <div className="absolute top-[212.81rem] left-[62.31rem] text-[1.25rem] text-center">
            SOBRE
        </div>
        <div className="absolute top-[212.81rem] left-[67.94rem] text-[1.25rem] text-center">
            NOSSA SOLUÇÕES
        </div>

        {/* redes sociais */}
        <div className="absolute top-[216.25rem] left-[32.94rem] text-[0.88rem] text-center inline-block w-[19.06rem] h-[2.13rem]">
            SAIBA MAIS EM NOSSAS REDES SOCIAIS
        </div>
        <div className="absolute top-[217.72rem] left-[34.28rem] box-border w-[16.44rem] h-[0.06rem] border-t-[1px] border-solid border-secondary" />
        
        {/* whats */}
        <img
            className="absolute h-[0.79%] w-[2.32%] top-[97.84%] right-[46.86%] bottom-[1.36%] left-[50.82%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector4.svg"
        />
        
        
        <div className="absolute top-[221.79rem] left-[33.19rem] text-[0.88rem] leading-[170%] font-be-vietnam-pro">
            © Copyright 2023 EP Energy Soluções em Energia
        </div>
        </footer>
    );
}export default Rodape;
