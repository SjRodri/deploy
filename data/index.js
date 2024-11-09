import { getGalleryData } from "./galeria/datosGaleria";
import { getHeroData } from "./hero/hero";

//---------------Testimonios
import { getTestimonialData } from "./testimonios/datosTestimonios";

//----------------Nav
import navData from "./global/nav";
//--------------- Productos 

import { getProductData } from "./productos/producto1";

export const generarContextoDePagina = (page)=>{
    console.log('page', page);
    const contextObject = {
        ...navData,
    };
    let pageObject = {}
    switch(page){
        case '/gallery.html':
            pageObject = getGalleryData();
            break;
        case '/index.html':
            pageObject = {
                ...getHeroData(),
                testimonios: getTestimonialData()
            };
            console.log("pageObject:", pageObject);
            break;
        case '/productos/producto1.html':
            pageObject = getProductData();
            break;
        default:
            pageObject = {};
    }
    return {
        ...contextObject,
        ...pageObject
    }
}