import { Footer } from './components/footer/footer';
import { Header } from './components/header';
import { Main } from './components/main/main';
import { Sidebar } from './components/sidebar/sidebar';

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
