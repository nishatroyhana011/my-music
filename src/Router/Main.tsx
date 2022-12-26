import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Search from '../components/Search';
import Playlists from '../components/Playlists';
import Favourites from '../components/Favourites';


const Main = () => {
return (         
<Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/search' element={<Search/>}
    />
    <Route path='/playlist' element={<Playlists/>} />
    <Route path='/favourite' element={<Favourites/>} />
</Routes>
);
}
export default Main;