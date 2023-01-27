import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'


export default function TodoApp() {
    return (
        <div className="TodoApp">
            
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={<LoginComponent />}/>
                    <Route path='/login' element={<LoginComponent />}/>
                    <Route path='/welcome/:username' element={<WelcomeComponent />}/>                    
                    <Route path='/todos' element={<ListTodosComponent />}/>
                    <Route path='/logout' element={<LogoutComponent />}/>

                    <Route path='*' element={<ErrorComponent />}/>
                </Routes>
            </BrowserRouter>
            
        </div>
    )
}

