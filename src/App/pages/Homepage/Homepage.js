import React, { Fragment, Component } from 'react';
import './Homepage.css';
import { Showcase } from './components/Showcase';
import { Image, Container, Row, Col } from 'react-bootstrap';

const team = [{ name: "Adele Miller", bio: "This be Adele.", image: "./img/sam.jpg" }, { name: "Harshitha Akkaraju", bio: "This be Harshitha.", image: "./img/sam.jpg" }, { name: "Shaarika Kaul", bio: "This is Shaarika.", image: "./img/sam.jpg" }, { name: "Sam Otto", bio: "This be me.", image: "./img/sam.jpg" }];
const awsImg = [{ src: "./img/aws_logo.svg" }, { src: "./img/aws_cloud.svg" }, { src: "./img/aws_ssl.svg" }];
const sponsor = [{ name: "Joe Basirico", bio: "Security Innovation Joe.", image: "./img/sam.jpg" }]

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
                    <Row className="row-margin-3" >
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
                    <Row className="row-margin-3" >
                        <h1 className="white-text">Who we are</h1>
                    </Row>
                    <Row className="row-margin-1" >
                        <Showcase group={team} type="team" />
                    </Row>
                </Container>

                <Container>
                    <Row className="row-margin-3" >
                        <h1 className="white-text">Our sponsor</h1>
                    </Row>
                    <Row className="row-margin-1" >
                        <Showcase group={sponsor} type="team" />
                    </Row>
                </Container>

                <Container>
                    <Row className="row-margin-3" >
                        <h1 className="white-text">Contact us</h1>
                    </Row>
                    <Row className="row-margin-1 white-text" >
                        If you are a developer or security engineer with AWS experience and would like to help test this application, or for any other reason, please feel free to contact us at: moffotto@uw.edu
                    </Row>
                </Container>

            </Fragment >
        );
    }
}