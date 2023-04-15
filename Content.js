import Search from './Search'
import Brand from './Brand';
import MainContext from '../MainContext';
import { useContext } from 'react';
import LazyLoad from "react-lazyload"
import Download from './Download';

function Content() {

  const {brands, SelectedBrands} = useContext(MainContext)

  return (
    <main className='content'>
        <header className='header'>
            <Search />
            {SelectedBrands.length > 0 &&  <Download />}
        </header>

        <section className='brands'>
          {
            brands.map((brand) => (
              <LazyLoad key={brand.slug} overflow={true} once={true} placeholder="yükleniyor...">
                <Brand brand={brand} />
              </LazyLoad>
            ))
          }
        </section>
    </main>
  )
}

export default Content