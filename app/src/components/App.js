// import './App.css';
import Shelf from './Shelf/Shelf';
import Filter from './Shelf/Filter';
import FloatCart from './FloatCart/FloatCart';

function App() {
	return (
		<>
			<main>
				<Filter />
				<Shelf />
			</main>
			<FloatCart />
		</>
	);
}

export default App;
