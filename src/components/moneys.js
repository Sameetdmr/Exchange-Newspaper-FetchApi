import React, { Component, Text, View, Table, } from 'react'

export default class moneys extends Component {


    constructor(props) {
        super(props)
        this.state = {
          dolar: '',
          turk: '',
          sterlin: '',
          frang: '',
          Kanada_Dolar: '',
          Norvec_kron: '',
          Avus_Dol: '',
    
          items: [],
          error: null,
          isLoaded: false
        };
        this.toggleButtonState = this.toggleButtonState.bind(this)
        
    
      }

    toggleButtonState() {
        fetch('http://data.fixer.io/api/latest?access_key=bf3c11e501e11c4eeebd3f283dbb2ac8')
          .then((response) => response.json())
          .then((resJson) =>
            this.setState({
              dolar: resJson.rates.USD,
              turk: resJson.rates.TRY,
              sterlin: resJson.rates.GBP,
              frang: resJson.rates.CHF,
              Kanada_Dolar: resJson.rates.CAD,
              Norvec_kron: resJson.rates.NOK,
              Avus_Dol: resJson.rates.AUD
    
            })
          )
      }



    render() {
        return (
            <div>
               <p style={{ marginTop: 'revert', fontSize: 'small', textAlign: "initial" }}>Aşağıda verilen sonuçlar Euro to money olarak hesaplanmıştır.</p><hr></hr>
             
                 <Table striped bordered hover variant="dark" style={{ marginTop: "20px", }}>
                <thead>
                  <tr>
                    <td style={{ backgroundColor: "#17a2b8", Color: "white", border: "10px", borderLeftColor: "black" }}>Para Cinsi</td>
                    <td style={{ backgroundColor: "#17a2b8", Color: "white", borderLeftColor: "black" }}>Sonuç </td>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1 € → Dolar</td>
                    <td>{this.state.dolar} USD</td>
                  </tr>
                  <tr>
                    <td>1 € → Turk Lirası</td>
                    <td>{this.state.turk} TRY</td>
                  </tr>
                  <tr>
                    <td>1 € → İngiliz Sterlini</td>
                    <td>{this.state.sterlin} GBP</td>
                  </tr>
                  <tr>
                    <td>1 € → İsviçre Frangı</td>
                    <td>{this.state.frang} CHF</td>
                  </tr>
                  <tr>
                    <td>1 € → Kanada Doları</td>
                    <td>{this.state.Kanada_Dolar} CAD</td>
                  </tr>
                  <tr>
                    <td>1 € → Norveç Kronu</td>
                    <td>{this.state.Norvec_kron} NOK</td>
                  </tr>
                  <tr>
                    <td>1 € → Avustralya Doları</td>
                    <td>{this.state.Avus_Dol} AUD</td>
                  </tr>
                </tbody>
              </Table>
            </div>
              
        )
    }
}
