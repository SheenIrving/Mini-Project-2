import { Header, Footer } from './components';
import { AllRoutes } from './routes/AllRoutes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <body className="App bg-black">
      <Header />
      <AllRoutes />
      <Footer />
    </body>
  );
}

export default App;
