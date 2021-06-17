import { Footer } from './components/footer';
import { Header } from './components/header';
import { Main } from './components/main';
import { Sidebar } from './components/sidebar';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
