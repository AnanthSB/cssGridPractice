import './App.css';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Example4 from './Example4';

function App() {
  return (
    <div className="App">
      <div className='heading  h-[6vh] w-full flex justify-center items-center'>
        <h2 className='text-white text-[30px]'>Demonstration of CSS GRID By <span className='font-bold'>Ananth</span></h2>
      </div>
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
    </div>
  );
}

export default App;
