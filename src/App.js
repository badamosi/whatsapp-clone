import './App.css';
import ChatPanel from './components/ChatPanel';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">

      <div className="app-body">
        {/* Sidebar */}
        <Sidebar/>
        {/* Chat */}
        <ChatPanel/>
      </div>
    </div>
  );
}

export default App;
