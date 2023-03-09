import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from '../assets/camisetas/Variant6.png'
import camiseta2 from '../assets/camisetas/Variant7.png'
import camiseta3 from '../assets/camisetas/Variant8.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
