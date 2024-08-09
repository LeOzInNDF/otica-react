import estilos from './Topo.module.css';
import Image from 'next/image';
import Logo from '../../../public/logo.png';

export default function Topo(){
  return (
    <div>
    <header className={estilos.topo}>
      <image src={Logo} alt='Logomarca da otica' Image/>
    </header>
    </div>
  )  ;  
}