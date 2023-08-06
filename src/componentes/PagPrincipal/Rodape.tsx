import React from 'react';

function Rodape (){
    return(
        <footer >
                {/* ----- RODAPÈ -----*/}
            <div className="footer" />
            
            
            {/* logo */}
            <img
                alt=""
                src="/customcolor-textlogoname-transparent-background-1@2x.png"
            />
            
            {/* links */}
            <div className="nav-links-rodape">
                    <a href="/">HOME</a>
                    <a href="/Contato">CONTATO</a>
                    <a href="/Sobre">SOBRE</a>
                    <a href="/NossasSolucoes">NOSSAS SOLUÇÕES</a>

            </div>

             {/*  
            SAIBA MAIS EM NOSSAS REDES SOCIAIS
            
            
            
            © Copyright 2023 EP Energy Soluções em Energia

            */}
            
        </footer>
    );
}export default Rodape;
