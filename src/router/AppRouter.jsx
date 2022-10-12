import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { ClimaRoutes } from '../clima';






export const AppRouter = () => {
  return (
    <>
       

       <Routes>
            

            <Route path="login" element={<LoginPage />}/>

            <Route path="/*" element={<ClimaRoutes />}/>
            
       </Routes>
    </>
  )
}
