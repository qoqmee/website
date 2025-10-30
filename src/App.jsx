import Girl from './components/Girl';
import Header from './components/Header';
import Documentation from './components/Documentation';
import Customer from './components/Customer';
import Room from './components/Room';
import ServicesSection from './components/Services';
import CustomersSection from './components/CustomersSection';
import Orange from './components/Orange';

const App = () => {
  return (
    <div>
    <Header />
    <Girl/>
    <ServicesSection/>
    <Documentation/>
    <Customer/>
    <Room/>
    <CustomersSection/>
    <Orange/>
    </div>
  );
};

export default App;