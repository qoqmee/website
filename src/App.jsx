import Girl from './components/Girl';
import Header from './components/Header';
import Documentation from './components/Documentation';
import Customer from './components/Customer';
import Room from './components/Room';
import ServicesSection from './components/Services';
import CustomersSection from './components/CustomersSection';
import Testion from './components/Test';
import Faq from './components/Faq';
import Footer from './components/Footer';

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
    <Faq/>
    <Testion/>
    <Footer/>
    </div>
  );
};

export default App;