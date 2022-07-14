import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import image from '../images/Steven.jpg'
import image2 from '../images/photo_2022-04-11_10-09-27.jpg'

export default function Header() {
    return (
      <div className="">
        <Container>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="justify-content-center nav-pills mb-3">
        <Tab className="nav-item active" eventKey="home1" title="Tabs1" active>
            Sugar pium tootise roll biscuit caramels. Liquorice brownie pastry cotton candy oat cake fruitcake jelly chiupa chups.
            Pudding caramels pastry powder cake souffie water caramels. Jelly-o pie cupcake.
        </Tab>
        <Tab className='nav-item' aria-current="page" eventKey="home2" title="Tabs2">
            <h4 style={{"textAlign" : "center"}}>Profile</h4>
            <Card style={{ width: '40rem'}} className="container mt-5">
              <Card.Img variant="top" style={{}} src={image} />
              <Card.Body>
                <Card.Title style={{ textAlign: 'center'}}>Steven Hong</Card.Title>
                <Card.Text>
                <Row>
                  <Col>Born</Col>
                  <Col>Penjaringan, Jakarta, Indonesia, 16 September 2000 (21)years</Col>
                </Row>
                <Row>
                  <Col>Residence</Col>
                  <Col>Penjaringan, Jakarta, Indonesia</Col>
                </Row>
                <Row>
                  <Col>Parents</Col>
                  <Col>Giok Tin Andi</Col>
                </Row><hr/>
                <Row>
                    <Col>Siblings</Col>
                    <Col>Chrisvinlya</Col>
                  </Row>
                  <Row>
                  <Col></Col>
                  <Col>Meilivia</Col>
                </Row><hr/>
                <Row>
                  <Col>Almater</Col>
                  <Col>University of Tarumanagara</Col>
                </Row><hr/>
                <Row>
                  <Col>Chinese Simplefield</Col>
                  <Col>洪若源</Col>
                </Row>
                <Row>
                  <Col>Chinese Traditional</Col>
                  <Col>洪若源</Col>
                </Row>
                <Row>
                  <Col>Name Engilsh Japanese</Col>
                  <Col>洪 スティーブン</Col>
                </Row>
                <Row>
                  <Col>Hiragana</Col>
                  <Col>ひろし わかげん (Wakagen Hiroshi)</Col>
                </Row>
                <Row>
                  <Col>Kanji</Col>
                  <Col>洪 若源 (Wakagen Hiroshi)</Col>
                </Row>
                <Row>
                  <Col>Hangul</Col>
                  <Col>홍약원</Col>
                </Row>
                <Row>
                  <Col>Tieng Viet</Col>
                  <Col>hồng nhã nguồn</Col>
                </Row>
                </Card.Text>
              </Card.Body>
            </Card>
        </Tab>
        <Tab className='nav-item' eventKey="home3" title="Tabs3">
        <Card.Img variant="top" style={{}} src={image2} />
        </Tab>
        <Tab className='nav-item' eventKey="homeDisable" title="Disable" disabled>
            text 4
        </Tab>
        </Tabs>
        </Container>
        
      </div>
    );
  }
  