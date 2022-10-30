import { Container } from "./style";
import { Categoria } from "./Categoria/Categoria";
import starWars1 from '../../assets/img/produtosImgStarWars/unsplash_1VV1MRafd7A.png' 
import starWars2 from '../../assets/img/produtosImgStarWars/unsplash_4OHkK555s1A.png' 
import starWars3 from '../../assets/img/produtosImgStarWars/unsplash_6FDXGY9J6y4.png' 
import starWars4 from '../../assets/img/produtosImgStarWars/unsplash_epRFE_hBNjo.png' 
import starWars5 from '../../assets/img/produtosImgStarWars/unsplash_KeGToDVN0l4.png' 
import starWars6 from '../../assets/img/produtosImgStarWars/unsplash_R8L1l9RN198.png' 
import console1 from '../../assets/img/produtosImgConsoles/unsplash_0POwK6iAiRQ.png'
import console2 from '../../assets/img/produtosImgConsoles/unsplash_caNzzoxls8Q.png'
import console3 from '../../assets/img/produtosImgConsoles/unsplash_k-xYhI3-gJM.png'
import console4 from '../../assets/img/produtosImgConsoles/unsplash_wa5z9o9fgjw.png'
import console5 from '../../assets/img/produtosImgConsoles/unsplash_Zjn4dT993-g.png'
import console6 from '../../assets/img/produtosImgConsoles/unsplash_ZV7lnfyQLmA.png'
import diversos1 from '../../assets/img/produtosImgDiversos/unsplash_bUgaIaZysH0.png'
import diversos2 from '../../assets/img/produtosImgDiversos/unsplash_fMP-oCze3AY.png'
import diversos3 from '../../assets/img/produtosImgDiversos/unsplash_jMT6BrgBuXU.png'
import diversos4 from '../../assets/img/produtosImgDiversos/unsplash_MxVkWPiJALs.png'
import diversos5 from '../../assets/img/produtosImgDiversos/unsplash_r27umXAelDc.png'
import diversos6 from '../../assets/img/produtosImgDiversos/unsplash_sYVY_ZKwaxU.png'
import { useState } from "react";

export function Produtos(){

    

    return (
        <Container>
            <Categoria
                categoria='Star Wars'
                produto1={starWars1}
                produto2={starWars2}
                produto3={starWars3}
                produto4={starWars4}
                produto5={starWars5}
                produto6={starWars6}
            />
            <Categoria
                categoria='Consoles'
                produto1={console1}
                produto2={console2}
                produto3={console3}
                produto4={console4}
                produto5={console5}
                produto6={console6}
            />
            <Categoria
                categoria='Diversos'
                produto1={diversos1}
                produto2={diversos2}
                produto3={diversos3}
                produto4={diversos4}
                produto5={diversos5}
                produto6={diversos6}
            />
            
        </Container>
    )
}