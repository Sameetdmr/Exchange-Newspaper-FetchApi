import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Navbar, Table } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './App.css';



class App extends Component {
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
    this.componentDidMount = this.componentDidMount.bind(this)

  }
  //Samet Demir
  //https://newsapi.org/v2/top-headlines?country=tr&apiKey=f951dd5671e341789141c38a9925a639
  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=tr&apiKey=f951dd5671e341789141c38a9925a639")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.articles
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
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
    const { items } = this.state;
    return (
      <div className="App">
        <div>
          <Navbar expand="lg" variant="light" bg="dark">
            <Navbar.Brand href="#" style={{ color: "white" }}>Logo</Navbar.Brand>
          </Navbar>





          <Container>
            <Row style={{ paddingTop: "20px" }}>
              <Col sm={12}>
                <button className="btn btn-info" style={{ width: "auto", height: "auto" }} onClick={this.toggleButtonState}>Sonucu Göster</button>
              </Col>
            </Row>
            <Col sm={12}>
              <h2 style={{ marginTop: 'revert', fontSize: 'large' }}>Dashboard</h2><hr></hr>

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



            </Col>

          </Container>




          <Container>
            <Row style={{ paddingTop: "20px" }}>

              <Col sm={6}>

                <b><h1 style={{ marginTop: 'revert', fontSize: 'x-large', color: 'crimson' }}>Son Dakika Haberleri</h1></b> <hr style={{ backgroundColor: 'black' }}></hr>




                <div>
                  <ul>
                    {items.map(item => ( //Dönen tüm json verileri burada
                      <li key={item.id}>

                        <h5 style={{ fontSize: 'inherit' }}>{item.title}</h5><br></br>
                        <img src={item.urlToImage} style={{ height: '100px', marginBlockEnd: "30px", border: 'solid cornsilk' }}></img><br></br>
                        <p>{item.description}</p>
                        <Router>
                          <Link to={item.url} style={{ marginBlockEnd: "30px" }}>Devamı için tıklayınız...</Link>
                        </Router>
                        <hr ></hr>

                      </li>
                    ))}
                  </ul>

                </div>





              </Col>



            </Row>

          </Container>




        </div>

      </div>
    );
  }
}
export default App;