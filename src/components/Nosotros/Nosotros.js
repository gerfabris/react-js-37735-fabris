import './Nosotros.scss'

export const Nosotros  = () =>{
    return(
        <section className='sectionNosotros'>
            <h1 className='sectionNosotros__title'>
                <img src='../assets/logo/icon.png' alt="Logo MateAR" className="sectionNosotros__title__img"/>
                Mate<span>AR</span>
            </h1>
            <h2 className='sectionNosotros__subtitle'>
                NUESTRA HISTORIA
            </h2>
            <div className='sectionNosotros__containerParagraph'>
                <p className='sectionNosotros__containerParagraph__paragraph'>
                    SOMOS UNA EMPRESA FAMILIAR, RADICADA EN LA CORDILLERA DE NUESTRO QUERIDO PAÍS. EMPEZAMOS HACIENDO 
                    MATES DE CALABAZA, Y HOY EN DÍA EXPORTAMOS EL 56% DE LA PRODUCCIÓN DE MATES DEL PAÍS A LUGARES DE TODO EL MUNDO.
                </p>   
            </div>
            <h3 className='sectionNosotros__subtitle'>
                NUESTRAS CURIOSIDADES
            </h3>
            <div className='sectionNosotros__containerParagraph'>  
                <p className='sectionNosotros__containerParagraph__paragraph'>
                    SOMOS FANÁTICOS DEL MATE, Y TAMBIÉN SOMOS FANÁTICOS DEL FÚTBOL, Y ESTA DOBLE PASIÓN NOS ACERCÓ 
                    A VARIOS JUGADORES PROFESIONALES, QUE TUVIMOS LA OPORTUNIDAD DE CONOCER, CREANDO VÍNCULOS CON EL 
                    PASAR DE LOS AÑOS Y QUE HOY NOS PERMITIÓ ARMAR NUESTRA PROPIA COLECCIÓN DE CAMISETAS, QUIZÁS, 
                    EL TESORO MÁS PRECIADO DIRÁN MUCHOS, SIN EMBARGO, NUESTRO MAYOR TROFEO ES LA CONEXIÓN CON NUESTRA 
                    GENTE, PRIORIZANDO DESDE EL MINUTO 1’ EL VÍNCULO HUMANO.
                </p>     
                <p className='sectionNosotros__containerParagraph__paragraph'>
                    LLEGAMOS A TODOS LOS PUNTOS DEL PAÍS, TRABAJANDO EN CONJUNTO CON LA EMPRESA OCA, QUIEN TIENE VARIOS AÑOS EN EL RUBRO DE LA DISTRIBUCIÓN Y PERMITE HACER EL SEGUIMIENTO ONLINE DE TU PEDIDO.
                </p>   
            </div>
            <h4 className='sectionNosotros__subtitle'>
                ¿QUERÉS TU MATE Y ESTÁS EN LA PUNTA DEL ACONCAGUA?
            </h4>
            <div className='sectionNosotros__containerParagraph'>  
                <p className='sectionNosotros__containerParagraph__paragraph'>
                    ¡NO TE PREOCUPES!
                </p>     
                <p className='sectionNosotros__containerParagraph__paragraph'>
                    LLEGAMOS A TODOS LOS PUNTOS DEL PAÍS, TRABAJANDO EN CONJUNTO CON LA EMPRESA OKA, 
                    QUIEN TIENE VARIOS AÑOS EN EL RUBRO DE LA DISTRIBUCIÓN Y PERMITE HACER EL SEGUIMIENTO 
                    ONLINE DE TU PEDIDO.
                </p>   
            </div>
        </section>
    )
}