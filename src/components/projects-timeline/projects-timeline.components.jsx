import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_FbMessenger from "../../assets/img/projects/messenger.png";
import L_GuessTheNumberGame from "../../assets/img/projects/guess.png";
import L_Netflix from "../../assets/img/projects/netflix.png";
import L_Amazon from "../../assets/img/projects/amazon.png";
import L_Medium from "../../assets/img/projects/medium.png";
import L_Carmel from "../../assets/img/projects/carmeldrugstore.png";
import L_Tensor from "../../assets/img/projects/tensorflow.png";
import L_Pachira from "../../assets/img/projects/pachiradigital.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import Image from "react-bootstrap/Image";

import L_FONTAWESOME from "../../assets/img/skills/FontAwesome_Logo.png";
import L_HTML5 from "../../assets/img/skills/HTML5_logo.png";
import L_CSS3 from "../../assets/img/skills/css3.png";
import L_REACT from "../../assets/img/skills/ReactJS_Logo.png";
import L_REACT_CONTEXT from "../../assets/img/skills/ReactJS_Logo.png";
import L_MATERIALUI from "../../assets/img/skills/MaterialUI_Logo.png";
import L_NODE_JS from "../../assets/img/skills/Node_Logo.png";
import L_STRIPE from "../../assets/img/skills/Stripe_Logo.png";
import L_FIREBASE from "../../assets/img/skills/Firebase_Logo.png";
import L_JAVASCRIPT from "../../assets/img/skills/JavaScript_Logo.png";
import L_REDUX from "../../assets/img/skills/Redux_Logo.png";
import L_MONGODB from "../../assets/img/skills/MongoDB_Logo.jpg";
import L_HEROKU from "../../assets/img/skills/Heroku_Logo.png";
import L_TENSOR from "../../assets/img/skills/TensorFlow_Logo.png";

import "./projects-timeline.style.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
           {/* Project: Pachira Digital */}
           <ImageEvent
            date="11/2/2019"
            className="text-center"
            text="Pachira Digital"
            src={L_Pachira}
            alt="Pachira Digital"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a landing page with modern UI design.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Can be used for small business & freelancer or email marketing to attract future clients.</li>
                          <li>Email address collected by Formspree & Mailchimp may be used for future email campaigns.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="Javascript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>

                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://henlin417.github.io/pachiradigital.github.io/"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
                <UrlButton
                  href="https://github.com/henlin417/pachiradigital.github.io"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: AI Object Detector */}
          <ImageEvent
            date="11/17/2019"
            className="text-center"
            text="AI Object Detector"
            src={L_Tensor}
            alt="AI Object Detector"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a real time object detection app.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Ability to detect a variety of objects(e.g. phone, person, bottle)</li>
                          <li>Draws a rectangle around object and labels</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React.JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_TENSOR}
                                alt="Tensorflow"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Tensorflow
                            </span>
                          </li>

                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/henlin417/AI-Object-Detection"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/watch?v=siuCR5CWqLg"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Guess The Number Game */}
          <ImageEvent
            date="3/10/2020"
            className="text-center"
            text="Guess The Number Game"
            src={L_GuessTheNumberGame}
            alt="Guess The Number Game"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> The point of this game is to guess a number between 0 - 100
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Checks inputed number and displays whether 'too low', 'too high', 'correct'</li>
                          <li>Saves previous guesses</li>
                          <li>Clear history and reset game</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="Javascript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>

                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://henlin417.github.io/guess.github.io/"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
                <UrlButton
                  href="https://github.com/henlin417/guess.github.io"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/watch?v=exn4o8vA0A8"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Fb messenger Clone*/}
          <ImageEvent
            date="4/9/2020"
            className="text-center"
            text="Fb messenger"
            src={L_FbMessenger}
            alt="Fb messenger"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a clone of the facebook messenger app
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Real-time messaging capability</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="ReactJs"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              ReactJs
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material UI"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Material UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>

                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://facebook-messenger-clone-4691f.web.app"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
                <UrlButton
                  href="https://github.com/henlin417/facebook-messenger-clone"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/watch?v=jkCS8e5lMak"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Netflix Clone */}
          <ImageEvent
            date="9/3/2020"
            className="text-center"
            text="Netflix Clone"
            src={L_Netflix}
            alt="Netflix Clone"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a clone of Netflix
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Scroll feature on movie posters</li>
                          <li>Hover effect over movie posters</li>
                          <li>Ability to watch trailers</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="Javascript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FONTAWESOME}
                                alt="Font Awesome"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Font Awesome
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>

                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://henlin417.github.io/netflix.github.io/"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
                <UrlButton
                  href="https://github.com/henlin417/Netflix-Clone"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/watch?v=CFGULYxiklw"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Amazon Clone */}
          <ImageEvent
            date="10/20/2020"
            className="text-center"
            text="Amazon Clone"
            src={L_Amazon}
            alt="Amazon Clone"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a clone of Amazon
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Sign in with user authentication</li>
                          <li>Add products to basket</li>
                          <li>Checkout function with credit card</li>
                          <li>Order history</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="ReactJs"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              ReactJs
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material UI"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Material UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_CONTEXT}
                                alt="React Context API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React Context API
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_STRIPE}
                                alt="Stripe"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Stripe
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>

                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://clone-8888e.web.app"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
                <UrlButton
                  href="https://github.com/henlin417/Amazon-clone"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/watch?v=Uo1DqZx2ulY"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Medium */}
          <ImageEvent
            date="10/25/2020"
            className="text-center"
            text="Medium"
            src={L_Medium}
            alt="Medium"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> These are the articles I have written on Medium to showcase what I have discovered while learning web design.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>UI Design Trends</li>
                          <li>Accessibility: Why is it important?</li>
                          <li>React Context API For Dummies</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Medium}
                                alt="Medium"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Medium
                            </span>
                          </li>

                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://henryling66.medium.com/"
                  target="_blank"
                >
                  ARTICLES
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Carmel Drug Store */}
          <ImageEvent
            date="11/4/2020"
            className="text-center"
            text="Carmel Drug Store"
            src={L_Carmel}
            alt="Carmel Drug Store"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a fully functioning E-Commerce site for Carmel Drug Store, an independent pharmacy located on Ocean Ave 3NW San Carlos, Carmel, CA 93921. Their original site needed to be revamped.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Product list and product details page</li>
                          <li>Sidebar with categories</li>
                          <li>Product search bar</li>
                          <li>Shopping cart function (add to cart, checkout, payment, shipping info, summary of order)</li>
                          <li>Payment with credit card or paypal</li>
                          <li>Manage products(create, update, upload images)</li>
                          <li>Manage orders</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="Javascript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="ReactJs"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              ReactJs
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="Redux"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="React Context API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HEROKU}
                                alt="Stripe"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Heroku
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href=""
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
                <UrlButton
                  href="https://github.com/henlin417/carmel-drug-store"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;