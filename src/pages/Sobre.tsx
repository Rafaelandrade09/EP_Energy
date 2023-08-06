import { FunctionComponent } from "react";
import BarraNav from "../componentes/PagPrincipal/BarraNav";
import Rodape from "../componentes/PagPrincipal/Rodape";
import MargensLaterais from "../componentes/PagPrincipal/MargensLaterais";
import '../global.css';

const Sobre: FunctionComponent = () => {
  return (
    <>
      <div className="relative bg-gray-500 w-full h-[78.06rem] overflow-hidden text-center text-[1.56rem] text-secondary font-saira-semicondensed">
        
        <BarraNav/>

        {/*Banner*/}
        <img
          className="absolute top-[7.75rem] left-[3.94rem] w-[79.81rem] h-[23.06rem] object-cover"
          alt=""
          src="/rectangle-701@2x.png"
        />
        
        {/*icone*/}
        <img
          className="absolute top-[41.25rem] left-[16.38rem] w-[10.5rem] h-[10.13rem] object-cover"
          alt=""
          src="/iconequemsomos-1@2x.png"
        />
      
        
        
        <div className="absolute top-[33.75rem] left-[32.19rem] text-[2.5rem] font-semibold font-plus-jakarta-sans text-darkslategray-100 text-left inline-block w-[23.31rem]">
          Sobre a EP Energy
        </div>
        <div className="absolute top-[37.28rem] left-[16.34rem] box-border w-[55rem] h-[0.06rem] border-t-[1px] border-solid border-black" />
        <div className="absolute top-[39.5rem] left-[28.31rem] text-[1.38rem] font-arima-madurai text-black text-left inline-block w-[43rem] h-[8.88rem]">
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Oferecemos soluções completas para as mais exigentes aplicações em
            distribuição secundária de energia elétrica, com equipamentos modernos
            e seguros, completamente preparados para gestão de redes do tipo Smart
            Grid.
          </p>
        </div>
        <div className="absolute top-[50.31rem] left-[17.25rem] text-[1.38rem] font-arima-madurai text-black text-left inline-block w-[54.94rem]">
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Oferecemos soluções completas para as mais exigentes aplicações em
            distribuição secundária de energia elétrica, com equipamentos modernos
            e seguros, completamente preparados para gestão de redes do tipo Smart
            Grid.
          </p>
        </div>


        {/*imagem fundo*/}
        <img
          className="icon-background"
          alt=""
          src="/black-icon-transparent-background-1@2x.png"
        />

        <Rodape/>
        <MargensLaterais/>
        
      </div>

     
    </>
  );
};

export default Sobre;
