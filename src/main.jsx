import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Update from './components/Update.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import StudentsProvider from './components/StudentsProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout>
      <StudentsProvider>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/update/:stud_id' element={<Update />} />
          <Route path='*' element={<h1 className='text-5xl text-red-500'>Error 404</h1>} />
        </Routes>
      </StudentsProvider>
    </Layout>
  </BrowserRouter>
)
