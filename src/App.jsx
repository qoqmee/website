import Girl from './components/Girl';
import Header from './components/Header';
import Documentation from './components/Documentation';
import Customer from './components/Customer';
import Room from './components/Room';
import ServicesSection from './components/Services';
import CustomersSection from './components/CustomersSection';
import Testion from './components/Test';
import Carousell from './components/Carousell';
import Faq from './components/Faq';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="dark:bg-[#00113B]">
      <Header />
      <Girl />
      <ServicesSection />
      <Documentation />
      <Customer />
      <Room />
      <CustomersSection />
      <Carousell />
      <Faq />
      <Testion />
      <Footer />
    </div>
  );
};



export default App;