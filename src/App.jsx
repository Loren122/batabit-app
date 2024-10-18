import { useEffect, useState } from 'react'

import { Header } from './components/Header'
import { CotizaCrypto } from './components/CotizaCrypto'
import { Informacion } from './components/Informacion'
import { Footer } from './components/Footer'

import './App.css'

function App() {

  const [rates, setRates] = useState({});

  const apiKey = '1a0184ed-e044-488d-a92b-3e82073523ef';

  const cryptos = ['BTC', 'ETH', 'XRP', 'XLM'];

  const fetchCryptoRates = async () => {
    try {
      const promises = cryptos.map(async (crypto) => {
        const response = await fetch(`https://rest.coinapi.io/v1/exchangerate/${crypto}/USD`, {
          headers: {
            'X-CoinAPI-Key': apiKey
          }
        });

        if (!response.ok) {
          throw new Error(`Error al obtener datos de ${crypto}`);
        }

        const data = await response.json();
        return { crypto, rate: data.rate };
      });

      const results = await Promise.all(promises);

      // Guardar los datos en el estado
      const ratesObject = results.reduce((acc, { crypto, rate }) => {
        acc[crypto] = rate;
        return acc;
      }, {});

      setRates(ratesObject);

      // Mostramos los datos en la consola
      results.forEach(({ crypto, rate }) => {
        console.log(`${crypto} a USD: ${rate}`);
      });
    } catch (error) {
      console.error('Error al obtener las tasas de cambio', error);
    }
  };

  useEffect(() => {
    fetchCryptoRates();
  }, []);

  return (
    <>
      <Header />
      <CotizaCrypto
      rates={rates}
      />
      <Informacion />
      <Footer />
    </>
  )
}

export default App
