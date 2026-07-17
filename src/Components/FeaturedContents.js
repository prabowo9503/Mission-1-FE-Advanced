import { Col, Container, Row } from "react-bootstrap"
import { AiOutlineInfoCircle } from "react-icons/ai";

const FeaturedContents = () => {
  return (
    <div className="featured-content">
        <Container className="text-white d-flex justify-content-center align-item-center">
          <Row>
            <Col>
              <h1 className="Featured-title">Duty After School</h1>
              <p className="Featured-desc">Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.</p>
              <div className="featured-buttons">
              <button className="featured-button">Mulai</button>
              <button className="btn-info"><AiOutlineInfoCircle />Selengkapnya</button>
              <button className="featured-pg">18+</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default FeaturedContents