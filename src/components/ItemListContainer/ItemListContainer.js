import { Cards } from '../Cards/Cards'
import './ItemListContainer.scss'


export const ItemListContainer = () =>{
    return (
        <section className='sectionItemList'>
            <div className='sectionItemList__containerTitle'>
                <h2 className='sectionItemList__containerTitle__title'>
                    Item List Container
                </h2>
            </div>
            <div className='sectionItemList__containerCards'>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>

        </section>
    )
}