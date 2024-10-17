import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import M01 from './modules/m01/Index';
import M02 from './modules/m02/Index';
import M03 from './modules/m03/Index';
import M04 from './modules/m04/Index';
import M05 from './modules/m05/Index';
import M06 from './modules/m06/Index';
import M07 from './modules/m07/Index';
import M08 from './modules/m08/Index';
import M09 from './modules/m09/Index';
import M10 from './modules/m10/Index';
import M11 from './modules/m11/Index';
import M12 from './modules/m12/Index';
import M13 from './modules/m13/Index';
import M14 from './modules/m14/Index';
import M15 from './modules/m15/Index';
import M16 from './modules/m16/Index';
import M17 from './modules/m17/Index';
import M18 from './modules/m18/Index';
import M19 from './modules/m19/Index';
import M20 from './modules/m20/Index';
import M21 from './modules/m21/Index';
import M22 from './modules/m22/Index';
import M23 from './modules/m23/Index';
import M24 from './modules/m24/Index';
import M25 from './modules/m25/Index';
import M26 from './modules/m26/Index';
import M27 from './modules/m27/Index';
import M28 from './modules/m28/Index';
import M29 from './modules/m29';
import M30 from './modules/m30/Index';
import M31 from './modules/m31/Index';
import M32 from './modules/m32/Index';

interface iNavData { id: number, name: string, rLink: string }

const navData: iNavData[] = [
  { id: 1, name: 'M01', rLink: '/' },
  { id: 2, name: 'M02', rLink: '/M02' },
  { id: 3, name: 'M03', rLink: '/M03' },
  { id: 4, name: 'M04', rLink: '/M04' },
  { id: 5, name: 'M05', rLink: '/M05' },
  { id: 6, name: 'M06', rLink: '/M06' },
  { id: 7, name: 'M07', rLink: '/M07' },
  { id: 8, name: 'M08', rLink: '/M08' },
  { id: 9, name: 'M09', rLink: '/M09' },
  { id: 10, name: 'M10', rLink: '/M10' },
  { id: 11, name: 'M11', rLink: '/M11' },
  { id: 12, name: 'M12', rLink: '/M12' },
  { id: 13, name: 'M13', rLink: '/M13' },
  { id: 14, name: 'M14', rLink: '/M14' },
  { id: 15, name: 'M15', rLink: '/M15' },
  { id: 16, name: 'M16', rLink: '/M16' },
  { id: 17, name: 'M17', rLink: '/M17' },
  { id: 18, name: 'M18', rLink: '/M18' },
  { id: 19, name: 'M19', rLink: '/M19' },
  { id: 20, name: 'M20', rLink: '/M20' },
  { id: 21, name: 'M21', rLink: '/M21' },
  { id: 22, name: 'M22', rLink: '/M22' },
  { id: 23, name: 'M23', rLink: '/M23' },
  { id: 24, name: 'M24', rLink: '/M24' },
  { id: 25, name: 'M25', rLink: '/M25' },
  { id: 26, name: 'M26', rLink: '/M26' },
  { id: 27, name: 'M27', rLink: '/M27' },
  { id: 28, name: 'M28', rLink: '/M28' },
  { id: 29, name: 'M29', rLink: '/M29' },
  { id: 30, name: 'M30', rLink: '/M30' },
  { id: 31, name: 'M31', rLink: '/M31' },
  { id: 32, name: 'M32', rLink: '/M32' },
]

function App() {
  return (
    <div className='containerGolbal'>
      <div className='navLeft'>
        <ul>
          {navData?.map(o => <li key={o.id}><Link to={o.rLink}>{o.name}</Link></li>)}
        </ul>
      </div>
      <Routes>
        <Route path='/' element={<M01 />} />
        <Route path='/m02' element={<M02 />} />
        <Route path='/m03' element={<M03 />} />
        <Route path='/m04' element={<M04 />} />
        <Route path='/m05' element={<M05 />} />
        <Route path='/m06' element={<M06 />} />
        <Route path='/m07' element={<M07 />} />
        <Route path='/m08' element={<M08 />} />
        <Route path='/m09' element={<M09 />} />
        <Route path='/m10' element={<M10 />} />
        <Route path='/m11' element={<M11 />} />
        <Route path='/m12' element={<M12 />} />
        <Route path='/m13' element={<M13 />} />
        <Route path='/M14' element={<M14 />} />
        <Route path='/M15' element={<M15 />} />
        <Route path='/M16' element={<M16 />} />
        <Route path='/M17' element={<M17 />} />
        <Route path='/M18' element={<M18 />} />
        <Route path='/M19' element={<M19 />} />
        <Route path='/M20' element={<M20 />} />
        <Route path='/M21' element={<M21 />} />
        <Route path='/M22' element={<M22 />} />
        <Route path='/M23' element={<M23 />} />
        <Route path='/M24' element={<M24 />} />
        <Route path='/M25' element={<M25 />} />
        <Route path='/M26' element={<M26 />} />
        <Route path='/M27' element={<M27 />} />
        <Route path='/M28' element={<M28 />} />
        <Route path='/M29' element={<M29 />} />
        <Route path='/M30' element={<M30 />} />
        <Route path='/M31' element={<M31 />} />
        <Route path='/M32' element={<M32 />} />
      </Routes>
    </div>
  );
}

export default App;
