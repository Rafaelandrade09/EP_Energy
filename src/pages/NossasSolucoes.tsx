import { FunctionComponent } from "react";
import BarraNav from "../componentes/PagPrincipal/BarraNav";
import Rodape from "../componentes/PagPrincipal/Rodape";
import MargensLaterais from "../componentes/PagPrincipal/MargensLaterais";

const NossasSolucoes: FunctionComponent = () => {
  return (
    <div className="relative bg-gray-500 w-full h-[84.06rem] overflow-hidden text-center text-[1.56rem] text-secondary font-saira-semicondensed">
      
    <BarraNav/>  
      
      
     
      <div className="absolute top-[6.38rem] left-[38%] text-[1.7rem] font-semibold font-plus-jakarta-sans text-darkslategray-100 text-left inline-block w-[35.13rem]">
        Conhaça Nossas Soluções
      </div>
      <div className="absolute top-[10.09rem] left-[16.34rem] box-border w-[55rem] h-[0.06rem] border-t-[1px] border-solid border-black" />


      <div className="absolute top-[13.25rem] left-[9.38rem] font-semibold font-playfair-display text-left inline-block w-[16.38rem] h-[2.63rem]">
        TRANSFORMADORES
      </div>

      <a href="/desktop-26">
        <img
                  className="absolute top-[19rem] left-[10rem] rounded-12xs w-[16.63rem] h-[13rem] object-cover"
                  alt=""
                  src="/d53b9bf5ce7cc7b0f867e4a558dce38e-3@2x.png"
        />
       </a>

      <div className="absolute top-[31.75rem] left-[10.44rem] bg-steelblue w-[15.19rem] h-[3.56rem]" />
      <div className="absolute top-[31.75rem] left-[27.63rem] bg-steelblue w-[15.25rem] h-[3.56rem]" />
      <div className="absolute top-[32.88rem] left-[29.13rem] text-[1rem] font-playfair-display">
        Cubículo classe 17,5kV/16kA
      </div>
      <div className="absolute top-[31.75rem] left-[44.81rem] bg-steelblue w-[15.19rem] h-[3.56rem]" />
      <div className="absolute top-[31.75rem] left-[61.94rem] bg-steelblue w-[15.25rem] h-[3.56rem]" />
      <div className="absolute top-[32.19rem] left-[11.19rem] text-[1rem] font-playfair-display inline-block w-[13.69rem] h-[2.94rem]">
        Cubículo modular c/disjuntor extraível até 2500A
      </div>
      <div className="absolute top-[32.88rem] left-[47.19rem] text-[1rem] font-playfair-display">
        Quadro de Distribuição
      </div>
      <div className="absolute top-[32.31rem] left-[62.13rem] text-[1rem] font-playfair-display inline-block w-[14.81rem]">
        Painel de Distribuição de Baixa Tensão até 6300A
      </div>

      <Rodape/>
      <MargensLaterais/>
  
    </div>
  );
};

export default NossasSolucoes;
