import React, { Fragment, Component } from 'react';
import './Homepage.css';
import { Showcase } from './components/Showcase';
import { Image, Container, Row, Col } from 'react-bootstrap';

const team = [{ name: "Adele Miller", bio: "Adele is majoring in Informatics at the University of Washington. She is a long time hackathon organizer and has served as a teaching assistant in several courses in the Informatics program. She will be starting as a security engineer in September.", image: "./img/adele.jpg" }, { name: "Harshitha Akkaraju", bio: "Harshitha is studying Informatics at the University of Washington, Seattle. She is an avid follower of tech podcasts Software Engineering Daily and the Women in Tech Show. She is passionate about improving equity in access to STEM and computing education; she does outreach work through UW Society of Women Engineers and Women in Informatics. During Summer 2019, she will be working with PayPal as a Software Engineering Intern.", image: "./img/harshitha.png" }, { name: "Shaarika Kaul", bio: "This is Shaarika.", image: "./img/sam.jpg" }, { name: "Sam Otto", bio: "Sam is majoring in Informatics at the University of Washington with a dual focus in information security and data science. He will begin a position as a cyber risk consultant this upcoming summer.", image: "./img/sam.jpg" }];
const awsImg = [{ src: "./img/aws_logo.svg" }, { src: "./img/aws_cloud.svg" }, { src: "./img/aws_ssl.svg" }];
const sponsors = [{ name: "Joe Basirico", bio: "Joe is a Senior VP of Engineering at Security Innovation. Among other duties, he is responsible for the development of the CMD+CTRL product, which is the penetration testing platform that will support CubeRule.", image: "./img/security_innovation.png" }, { name: "Informatics, UW", bio: "This product is being developed within the context of the Informatics program capstone at the University of Washington, Seattle.", image: "./img/informatics_logo.png" }]

export class Homepage extends Component {

    render() {
        return (
            <Fragment>
                <Container fluid>
                    <Row>
                        <div className="thumbnail text-center">
                            <Image src="./img/cube_background.png" fluid />
                            <div className="caption">
                                <h1 className="white-text real-big">CubeRule</h1>
                                <h2 className="white-text">AWS Cyber Range</h2>
                            </div>
                        </div>
                    </Row>
                </Container>

                <Container>
                    <Row className="row-margin-6">
                        <h1 className="white-text">What this is</h1>
                    </Row>
                    <Row>
                        <Col xs={8}>
                            <Row className="white-text row-margin-1">
                                Cloud computing services have become a fundamental component of modern business. With more and more specialized services being offered, the complexity that developers must face every day only grows. This complexity leads to insecure platforms and compromised code.
                            </Row>
                            <Row className="white-text row-margin-1">
                                CubeRule seeks to help developers and security professionals train by creating a 'cyber range' - an intentionally insecure platform where 'players' can score points by hacking its functionality. Through the process of identifying and exploiting vulnerabilities, developers learn how to secure their own applications.
                            </Row>
                            <Row className="white-text row-margin-1">
                                This fictitious app will focus on vulnerabilities in Amazon Web Services, such as S3, EC2, and DynamoDB.
                            </Row>
                        </Col>
                        <Col xs={4}>
                            <Showcase group={awsImg} type="icon" />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className="row-margin-6" >
                        <h1 className="white-text">Who we are</h1>
                    </Row>
                    <Row className="row-margin-1" >
                        <Showcase group={team} type="team" />
                    </Row>
                </Container>

                <Container>
                    <Row className="row-margin-6" >
                        <h1 className="white-text">Our sponsors</h1>
                    </Row>
                    <Row className="row-margin-1" >
                        <Showcase group={sponsors} type="team" />
                    </Row>
                </Container>

                <Container>
                    <Row className="row-margin-6">
                        <Col xs={6}>
                            <Row>
                                <h1 className="white-text">Why "CubeRule"?</h1>
                            </Row>
                            <Row className="row-margin-1 white-text" >
                                <p>This fictitious app must have a theme, and we derived it from the concept of the "Cube Rule", seen on <a className="white-text" href="http://cuberule.com/">cuberule.com.</a> The 'Cube Rule' specifies a method for classifying food into multiple categories, such as toast, taco, sandwhich, calzone, and quiche. The storyline for this application is that of a new startup offering the ability to detect these food classifications through the use of "computer vision techniques" and "smart AI technologies".</p>
                            </Row>
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }}>
                            <Row>
                                <h1 className="white-text">Contact us</h1>
                            </Row>
                            <Row className="row-margin-1 white-text" >
                                If you are a developer or security engineer with AWS experience and would like to help test this application, or for any other reason, please feel free to contact us at: moffotto@uw.edu
                        </Row>
                        </Col>
                    </Row>
                </Container>

            </Fragment >
        );
    }
}