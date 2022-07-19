// import Tab from 'react-bootstrap/Tab'
// import Tabs from 'react-bootstrap/Tabs'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav';

// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'

import image from '../images/Steven.jpg'
import image2 from '../images/photo_2022-04-11_10-09-27.jpg'

export default function Header() {
    return (
      <div className="">
        <Container>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button className="nav-link" id="nav-tab-1" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="Tab 1" aria-selected="true">Tab 1</button>
          <button className="nav-link active" id="nav-tab-2" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="Tab 2" aria-selected="false">Tab 2</button>
          <button className="nav-link" id="nav-tab-3" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab" aria-controls="Tab 3" aria-selected="false">Tab 3</button>
          <button className="nav-link disabled" id="nav-tab-disabled" data-bs-toggle="tab" data-bs-target="#tab-disabled" type="button" role="tab" aria-controls="Disabled" aria-selected="false">Disable</button>
        </div>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade" id="nav-one" role="tabpanel" aria-labelledby="nav-tab-1">
          <h4 style={{"textAlign" : "center"}}>Profile</h4>
                <div className="card container mt-5" style={{ width: '40rem'}} >
                  <Card.Img variant="top" style={{}} src={image} />
                  <div className='card-body'>
                    <div className='card-title' style={{ textAlign: 'center'}}>Steven Hong</div>
                    <div className='card-text'>
                    <div className='row'>
                      <div className='col'>Born</div>
                      <div className='col'>Penjaringan, Jakarta, Indonesia, 16 September 2000 (21)years</div>
                    </div>
                    <div className='row'>
                      <div className='col'>Residence</div>
                      <div className='col'>Penjaringan, Jakarta, Indonesia</div>
                    </div>
                    <div className='row'>
                      <div className='col'>Parents</div>
                      <div className='col'>Giok Tin Andi</div>
                    </div><hr/>
                    <div className='row'>
                        <div className='col'>Siblings</div>
                        <div className='col'>Chrisvinlya</div>
                      </div>
                      <div className='row'>
                      <div className='col'></div>
                      <div className='col'>Meilivia</div>
                    </div><hr/>
                    <div className='row'>
                      <div className='col'>Almater</div>
                      <div className='col'>University of Tarumanagara</div>
                    </div><hr/>
                    <div className='row'>
                      <div className='col'>Chinese Simplefield</div>
                      <div className='col'>洪若源</div>
                    </div>
                    <div className='row'>
                      <div className='col'>Chinese Traditional</div>
                      <div className='col'>洪若源</div>
                    </div>
                    <div className='row'>
                      <div className='col'>Name Engilsh Japanese</div>
                      <div className='col'>洪 スティーブン</div>
                    </div>
                    <div className='row'>
                      <div className='col'>Hiragana</div>
                      <div className='col'>ひろし わかげん (Wakagen Hiroshi)</div>
                    </div>
                    <div className='row'>
                      <div className='col'>Kanji</div>
                      <div className='col'>洪 若源 (Wakagen Hiroshi)</div>
                    </div>
                    <div className='row'>
                      <div className='col'>Hangul</div>
                      <div className='col'>홍약원</div>
                    </div>
                    <div className='row'>
                      <div className='col'>Tieng Viet</div>
                      <div className='col'>hồng nhã nguồn</div>
                    </div>
                    </div>
                  </div>
                </div>
          </div>
          <div className="tab-pane fade show active" id="nav-two" role="tabpanel" aria-labelledby="nav-tab-2">
              Sugar pium tootise roll biscuit caramels. Liquorice brownie pastry cotton candy oat cake fruitcake jelly chiupa chups.
              Pudding caramels pastry powder cake souffie water caramels. Jelly-o pie cupcake.
          </div>
          <div class="tab-pane fade" id="nav-three" role="tabpanel" aria-labelledby="nav-tab-3">
              <Card.Img variant="top" style={{}} src={image2} />
          </div>
          <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-tab-disbled">
              Sugar pium tootise roll biscuit caramels. Liquorice brownie pastry cotton candy oat cake fruitcake jelly chiupa chups.
              Pudding caramels pastry powder cake souffie water caramels. Jelly-o pie cupcake.
          </div>
        </div>
        </Container>
        
      </div>
    );
  }
  