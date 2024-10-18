export const CotizaCrypto = ({ rates }) => {
  return (
    <div>
      <section className="main-exchange-container">
        <div className="backgroundImg"></div>
        <div className="main-exchange-container--title">
          <h2>Visibilizamos todas las tasas de cambio.</h2>
          <p>Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
        </div>
      </section>
      <section className="main-table-container">
        <div className="main-currency-table">
          <p className="currency-table--title">Monedas:</p>
          <div className="currency-table--container">
            <table>
              <thead>
                <tr>
                  <th className="table__top-left">Moneda</th>
                  <th className="table__top-right table__right">Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table__top-left">Bitcoin</td>
                  <td className="table__top-right table__right">
                    {rates.BTC ? `$${rates.BTC.toFixed(2)}` : 'Cargando...'}
                  </td>
                </tr>
                <tr>
                  <td className="table__top-left">Ethereum</td>
                  <td className="table__right">
                    {rates.ETH ? `$${rates.BTC.toFixed(2)}` : 'Cargando...'}
                  </td>
                </tr>
                <tr>
                  <td className="table__top-left">Ripple</td>
                  <td className="table__right">
                    {rates.XRP ? `$${rates.BTC.toFixed(2)}` : 'Cargando...'}
                  </td>
                </tr>
                <tr>
                  <td className="table__bottom-left">Stellar</td>
                  <td className="table__bottom-right table__right">
                    {rates.XLM ? `$${rates.BTC.toFixed(2)}` : 'Cargando...'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="currency-table--date">
            <p>
              <b>Actualizado:</b> {new Date().toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default CotizaCrypto