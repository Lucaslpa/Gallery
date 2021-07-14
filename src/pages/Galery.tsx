import {useEffect} from 'react'
import {useAppDispatch, useAppSelector} from '../app/hooks'
import Heart from '../assets/icons8-gostar.gif'
import Trash from '../assets/icons8-lixo.svg'
import {SectionFavorite, SectionHome, SectionTrash, Section} from './components/'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export  function Galery() {
    const images = useAppSelector((state) => state.images.images)
    const favorites = useAppSelector((state) => state.images.favoriteImages)

    


    return (
        <div id="GaleryContainer" className='GaleryContainer' >
          
           <Router> 
           <header className="containerHeader">
                <Link to='/' className='Title' >Sua Galeria</Link>
                <div className='optionsContainer' >
                    <Link to='Favorite'> <img alt='' src={Heart} /> Favoritos</Link>
                    <Link to='Trash'> <img alt='' src={Trash} /> Lixeira</Link>
                </div>
           </header>
                <Switch>
                    <Route exact path='/'>
                    <Section images={images} />
                    </Route>
                    <Route  path='/Favorite'>
                    <Section images={favorites} />
                    </Route>
                    <Route  path='/Trash'>
                     <SectionTrash />
                    </Route>
                </Switch>
           </Router>
          
        </div>
    )
}
