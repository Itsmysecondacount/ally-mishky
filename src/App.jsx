import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import NavHaya from './components/NavHaya';
import { useState } from 'react';
import SecondBody from './components/SecondBody';

function App() {
	const [tipeBody, setTipeBody] = useState(true);
	return (
		<>
			<Header tipeBody={tipeBody} />
			{!!tipeBody ? <Body /> : <SecondBody tipeBody={tipeBody} />}
			<NavHaya setTipeBody={setTipeBody} />
			<Footer tipeBody={tipeBody} />
		</>
	);
}

export default App;
