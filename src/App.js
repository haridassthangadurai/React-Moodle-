import logo from './logo.svg';
import './App.css';
import {Hello} from './compends/task1/moodletask/hello world/hellomoodle'
import {Card} from './compends/task1/moodletask/card/card'
import {League} from './compends/task1/moodletask/super league/league'
import {Social} from './compends/task1/moodletask/social button/social'
import {Noti} from './compends/task1/moodletask/notifacation/noti'
import {Menu} from './compends/task1/menu'
import {Tech} from  './compends/task1/moodletask/techcard/techcard'
import {Login} from './compends/task1/moodletask/login/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Counter } from './compends/task1/moodletask/incresedecres/incresedecrese';
import { Banana } from './compends/task1/moodletask/banana/banana';
import { Smile } from './compends/task1/moodletask/feedback/smilefeedback';
import { Heart } from './compends/task1/moodletask/feedback/heartfeedback';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Menu/>}/>
           <Route path='/Hello' element={[<Menu/>,<Hello/>]}/>
           <Route path='/Card' element={[<Menu/>,<Card/>]}/>
           <Route path='/League' element={[<Menu/>,<League/>]}/>
           <Route path='/Social' element={[<Menu/>,<Social/>]}/>
           <Route path='/Noti' element={[<Menu/>,<Noti/>]}/>
           <Route path='/Login' element={[<Menu/>,<Login/>]}/>
           <Route path='/Tech' element={[<Menu/>,<Tech/>]}/>
           <Route path='/Count' element={[<Menu/>,<Counter/>]}/>
           <Route path='/Fruit' element={[<Menu/>,<Banana/>]}/>
           <Route path='/Smile' element={[<Menu/>,<Smile/>]}/>
           <Route path='/Heart' element={[<Menu/>,<Heart/>]}/>
        </Routes>
    </BrowserRouter>
    
     
    </>
  );
}

export default App;
