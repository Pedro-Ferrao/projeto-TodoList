// src/App.jsx
import './App.css';
import Todolist from './Todolist'; // Adicione essa linha, caso ainda não tenha

function App() {
  return (
    <> {/* Fragmento que serve como elemento pai */}
      <div className="container">
        <Todolist />
      </div>

      <div className="sidebar-footer">
        <p>® 2025 TodoList do Pedro Ferrão</p>
      </div>
    </>
  );
}

export default App;