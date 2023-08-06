import { FunctionComponent } from "react";
import BarraNav from "../componentes/PagPrincipal/BarraNav";
import Rodape from "../componentes/PagPrincipal/Rodape";
import MargensLaterais from "../componentes/PagPrincipal/MargensLaterais";

const Desktop26: FunctionComponent = () => {
  return (
    <div className="relative bg-gray-500 w-full h-[95.19rem] overflow-hidden text-center text-[1.56rem] text-secondary font-saira-semicondensed">
    
      <BarraNav/>


      <b className="absolute top-[6.88rem] left-[40.19rem] text-[2.5rem] inline-block font-arima-madurai-display text-gray-700 text-left w-[35.13rem]" style={{color: '#0F2631'}}>
        Cubículo modular c/disjuntor extraível até 2500A
      </b>

      {/* IMAGEM DO PRODUTO */}
      <img
        className="absolute top-[7.75rem] left-[6.5rem] w-[32.19rem] h-[44.75rem] object-cover"
        alt=""
        src="/image-8@2x.png"
      />
      


      <div className="absolute top-[15.19rem] left-[40.5rem] text-[1.10rem] font-arima-madurai text-black text-left inline-block w-[40rem]">
        <p className="m-0">
          {" "}
          Cubículos modelares tipo metal-clad e disjuntor extraível até 2500A,
          31,5kA/1s em 17,5kV para uso abrigado e ao tempo, certificado conforme
          NBR-IEC-62271-200, uma linha especial e de alta performance.
        </p>
        <p className="m-0">
          {" "}
          Possui ensaios realizados de acordo com a última revisão das normas e
          aprovadas por laboratórios de organizações independentes de
          reconhecimento internacional, IEE-USP e SVEPPI-ACCREDIA.
        </p>
      </div>


      {/* CARACTERISTICAS */}
      <div className="absolute top-[26.81rem] left-[40.5rem] w-[35.31rem] h-[25.69rem]"  style={{backgroundColor: '#0F2631'}}/>
      
      <div className="absolute top-[27.19rem] left-[42.63rem] text-black text-left inline-block w-[16.25rem] text-[1.38rem] font-playfair-display" style={{color: 'white'}}>
        <p className="m-0">&nbsp;</p>
          <span className="font-semibold">Características Tecnicas:</span>
      </div>

      <div className="absolute top-[30.69rem] left-[44.19rem] text-[1.10rem] font-arima-madurai text-black text-left inline-block w-[29.31rem]" style={{color: 'white'}}>
        <ul className="m-0 pl-[1.31rem]">
        <p className="m-0">&nbsp;</p>
          <li className="mb-[false]">{`Cubículo 17,5kV; `}</li>
          <li className="mb-[false]">
            Resistente ao arco interno 31,5kA com disjuntor extraível;-
          </li>
          <li className="mb-[false]">Classe de tensão 17,5kV;</li>
          <li className="mb-[false]">NBI: 95kV;</li>
          <li className="mb-[false]">
            Capacidade de curto circuito: 25kA/1s ou 31,5kA/1s;
          </li>
          <li className="mb-[false]">Corrente nominal: até 2500A;</li>
          <li className="mb-[false]">Grau de proteção: IP4X;</li>
          <li>
            Classificação ao arco interno: IAC-A-FLR-25kA/1S-PM
            eIAC-A-FLR-31,5kA/1s-PM.
          </li>
        </ul>
      </div>

      




      <b className="absolute top-[59.06rem] left-[38.44rem] text-[1.38rem] inline-block font-playfair-display text-black text-left w-[8.44rem]">
        Descrição
      </b>
      <img
        className="absolute top-[58.38rem] left-[6.5rem] w-[74rem] h-[0.12rem]"
        alt=""
        src="/line-9.svg"
      />


      <div className="absolute top-[62.75rem] left-[7.5rem] text-[1.1rem] font-arima-madurai text-black text-left inline-block w-[70rem] ">
        {" "}
        A linha Maggiore de cubículos possui ensaios de tipo realizados de
        acordo com a última revisão das normas NBR-IEC 62271-200:2007 IEC
        62271-200, e aprovados por laboratório de organização independente de
        reconhecimento internacional, IEE-USP e SVEPPI-ACCREDIA;Quadro blindado
        com isolamento a ar. Desenvolvido para garantir a máxima continuidade de
        serviço na distribuição de média tensão;Compartimentos segregados
        através de partições metálicas;Adequado para a distribuição da média
        tensão. Inserção e extração dos aparelhos com a porta fechada;Unidades
        funcionais garantidas à prova de arco interno (IAC);Estrutura modular
        que facilita a composição com dimensões reduzidas para uso eficaz do
        espaço; Operações de manobra e manutenção exequíveis pela parte
        frontal;Atividades de manutenção simples e reduzidas;Completo sistema de
        intertravamentos mecânicos de segurança em conformidade com a NR-10;
        Seccionador de aterramento com pleno poder de fechamento intertravado
        com o disjuntor associado; A barra de terra é realizada em cobre
        eletrolítico e percorre longitudinalmente todo o quadro, garantindo
        desta forma a máxima segurança para os operadores e para a instalação.
      </div>

      <Rodape/>
      <MargensLaterais/>
      
    </div>
  );
};

export default Desktop26;
