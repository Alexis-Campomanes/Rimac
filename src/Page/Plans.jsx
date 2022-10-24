import React from 'react';
import AddCoberturas from '../Components/AddCoberturas/AddCoberturas';
import Cobertura from '../Components/Cobertura/Cobertura';
import Details from '../Components/Details/Details';
import Navbar from '../Components/Navbar/Navbar';
import Progress from '../Components/Progress/Progress';
import Suma from '../Components/Suma/Suma';
import '../StylePage/Plans.scss';
import perfil from '../Assets/icon_theft.svg'
import Price from '../Components/Price/Price';

const Plans = () => {
    return (
        <div className='plans'>
          <Navbar />
          <Progress />
          <Cobertura />
          <Suma />
          <AddCoberturas />
          <Details 
            title = 'Llanta robada'
            img = {perfil}
            text = 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis'
          />
          <Price />
        </div>
    );
}

export default Plans;
