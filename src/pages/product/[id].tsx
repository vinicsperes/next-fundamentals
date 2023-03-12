import Image from 'next/image';
import { useRouter } from 'next/router';
import { ProductContainer, ImageContainer, ProductDetails } from '../product';

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>
        
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>RS 79,90</span>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius commodi deleniti fugit sequi modi molestiae placeat rerum similique nam qui? Sunt, similique eveniet repellat et distinctio delectus cum? Voluptatum, cumque!</p>

        <button>
          Comprar Agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}