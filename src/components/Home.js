import React,{useState} from 'react'
import {Breadcrumb, BreadcrumbItem, Button, Card, CardImg, Carousel, Col, Container, Row} from 'react-bootstrap'
import Img1 from '../images/1.jpg'
import Img2 from '../images/2.jpg'
import Img3 from '../images/3.jpg'
import styles from './style.module.css'
export default function Home() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div>
          <section>
            <div style={{marginBottom:"20px",zIndex:"0"}}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className={styles.sizeHeight}>
          <img
            className="d-block w-100"
            src={Img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.sizeHeight}>
          <img
            className="d-block w-100"
            src={Img2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.sizeHeight}>
          <img
            className="d-block w-100"
            src={Img3}
            alt="Third slide"
          />
  
          <Carousel.Caption >
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
            </div>
          </section>
          <Container>
            <Breadcrumb style={{display:"inline-flex",background:"transparent",width:"100%",justifyContent:"center", alignSelf:"center"}}>
            <BreadcrumbItem>
            Home
            </BreadcrumbItem>
            <BreadcrumbItem>
            Posts
            </BreadcrumbItem>
            <BreadcrumbItem>
            Gallery
            </BreadcrumbItem>
            </Breadcrumb>
          </Container>
          <Container>
            <Row>
              <Col className="col-4">
                <Card>
                  <CardImg src={Img1} />
                    <Button>me</Button>
                </Card>
              </Col>
              <Col className="col-4">
              <Card>
                  <CardImg src={Img2} />
                  <Button>me</Button>
              </Card>
              </Col>
              <Col className="col-4">
              <Card>
                  <CardImg src={Img3} />
                  <Button>me</Button>
              </Card>
              </Col>
            </Row>
          </Container>
      </div>
     
    )
}