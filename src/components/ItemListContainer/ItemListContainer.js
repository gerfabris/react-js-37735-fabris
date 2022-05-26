import { Cards } from '../Cards/Cards'
import './ItemListContainer.scss'


export const ItemListContainer = ({greeting}) =>{
    return (
        <section className='sectionItemList'>
            <div className='sectionItemList__containerTitle'>
                <h2 className='sectionItemList__containerTitle__title'>
                    {greeting}
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