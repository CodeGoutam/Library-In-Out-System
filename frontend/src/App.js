import './App.css';
import Entry from './Components/Entry';
import Exit from './Components/Exit';
function App() {
    return (
        <div className="App h-screen p-0">
            <div className="bg-pink-950 flex justify-between items-center sm:ps-2 sm:pe-2 ps-1 pe-1" style={{ backgroundColor: '#2C3E50' }}>
                <div className='text-white sm:text-2xl font-bold' style={{ color: '#ECF0F1' }}>
                    <p>BookNest Library</p>
                </div>

                <div className="text-sm sm:text-2xl font-bold shadow-lg p-1 sm:p-2 flex sm:space-x-2">
                    <p className="w-fit p-1 border-2 rounded-lg  bg-white shadow-lg" style={{ color: '#2C3E50' }} >Check-In & Check-Out System</p>
                </div>
            </div>
            <div className='md:flex h-screen'>
                <Entry />
                <Exit />
            </div>
        </div>
    );
}

export default App;
