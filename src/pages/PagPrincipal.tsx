import { FunctionComponent } from "react";
import Rodape from "../componentes/PagPrincipal/Rodape";'../componentes/Rodape';
import BarraNav from "../componentes/PagPrincipal/BarraNav";
import AreaVideos from "../componentes/PagPrincipal/AreaVideos";
import Paralax from "../componentes/PagPrincipal/Paralax";
import CarosselProd from "../componentes/PagPrincipal/CarosselProd";
import AreaVantagens from "../componentes/PagPrincipal/AreaVantagens";
import CarrosselBanner from "../componentes/PagPrincipal/CarrosselBanner";
import DivParalax from "../componentes/PagPrincipal/DivParalax";
import MargensLaterais from "../componentes/PagPrincipal/MargensLaterais";
import '../global.css';



const PagPrincipal: FunctionComponent = () => {
  return (

      <div className="relative bg-gray-500 w-full h-[223.19rem] overflow-hidden text-left text-[1.56rem] text-secondary " style={{ top: '-1px'}}> 

        <BarraNav/>

        <CarrosselBanner/>

        <AreaVantagens/>

        <CarosselProd/>

        <Paralax/>

        <DivParalax/>

        <AreaVideos/>
              
        <Rodape/>

        <MargensLaterais/>
          
      </div>
  );
};

export default PagPrincipal;




