import { useState } from "react";
import materiasData from "./prueba.json";

//app shell para pwa
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        {/* 
         * SIDEBAR elemento estatico del appsshell
         * Este menú lateral se mantiene siempre visible y es parte del shell estático
         */}
        <aside style={{
          width: '250px',
          background: 'green',
          color: 'white',
        }}>
          <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Mi Universidad</h2>
          
          <nav>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '15px 10px',
              borderRadius: '8px',
              marginBottom: '8px',
              background: 'rgba(255,255,255,0.1)',
              cursor: 'pointer'
            }}>
              <span>Inicio</span>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '15px 10px',
              borderRadius: '8px',
              marginBottom: '8px',
              cursor: 'pointer'
            }}>
              <span>Materias</span>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '15px 10px',
              borderRadius: '8px',
              marginBottom: '8px',
              cursor: 'pointer'
            }}>
              <span>Horarios</span>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '15px 10px',
              borderRadius: '8px',
              marginBottom: '8px',
              cursor: 'pointer'
            }}>
              <span>Perfil</span>
            </div>
          </nav>
        </aside>
        <div>
          <div className="App">
            <h1>Mi Universidad</h1>
            <h2>Materias:</h2>
            
            {/* 
             * Contenido dinamico
             * Se genera dinámicamente desde el JSON y puede cambiar
             */}
            <ul>
              {Object.entries(materiasData).map(([id, materia]) => (
                <li key={id}>{materia}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* 
       * Footer elemento estatico que se mantiene en el app shell
       */}
      <footer>
        <p>Universidad XYZ – 2025</p>
      </footer>
    </>
  );
}

export default App;
