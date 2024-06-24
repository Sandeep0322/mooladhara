import React from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handlePackage = () => {
    // Perform login logic here
    // For demo purposes, simulate successful login

    // Navigate to Home component
    navigate("/package");
  };
  return (
    <div className="home-page">
      <div className="overlap">
        <div className="div">
          <div className="frame-2">
            <div className="frame-3">
              <img className="element" alt="Element" src="logo.svg" />
              <div className="frame-4">
                <div className="text-wrapper">The house Of Luck</div>
                <div className="text-wrapper-2">AstroGPT</div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-3">BETA</div>
              </div>
            </div>
            <div className="frame-5">
              <img className="zap" alt="Zap" src="boost.svg" />
              <div className="text-wrapper-4">0</div>
            </div>
          </div>
          <div className="frame-6">
            <div className="frame-7">
              <img
                className="img-2"
                alt="Comment"
                color="white"
                src="ask-1.svg"
              />
              <div className="text-wrapper-5">Ask</div>
            </div>
            <div className="frame-8">
              <img className="img-2" alt="Clock" src="history.svg" />
              <div className="text-wrapper-6">History</div>
            </div>
            <div className="frame-8">
              <img className="img-2" alt="Moon" src="horoscope.svg" />
              <div className="text-wrapper-6">Horoscope</div>
            </div>
            <div className="frame-8">
              <img className="img-2" alt="User" src="profile.svg" />
              <div className="text-wrapper-6">Profile</div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="text-wrapper-7">1</div>
              <div className="text-wrapper-8">2</div>
              <div className="text-wrapper-9">3</div>
              <div className="text-wrapper-10">4</div>
              <div className="text-wrapper-11">5</div>
              <div className="text-wrapper-12">6</div>
              <div className="text-wrapper-13">7</div>
              <div className="text-wrapper-14">8</div>
              <div className="text-wrapper-15">9</div>
              <div className="text-wrapper-16">10</div>
              <div className="text-wrapper-17">Ke</div>
              <div className="text-wrapper-18">Mo</div>
              <div className="text-wrapper-19">Su Ma Me Ve</div>
              <div className="text-wrapper-20">Ra</div>
              <div className="text-wrapper-21">Ju Sa</div>
              <div className="text-wrapper-22">11</div>
              <div className="text-wrapper-23">12</div>
            </div>
          </div>
        </div>
        <div className="frame-9">
          <img className="mask-group" alt="Mask group" src="dummy.svg" />
          <div className="frame-4">
            <div className="text-wrapper-24">Pawan paudel</div>
            <div className="text-wrapper-25">AI Astrologer</div>
          </div>
        </div>
        <div className="frame-10">
          <div className="frame-11">
            <div className="frame-12">
              <div className="text-wrapper-26">Hello Jhon,</div>
              <p className="p">
                Here are some questions you can ask to get started.
              </p>
            </div>
            <div className="frame-13">
              <div className="frame-14">
                <div className="component">
                  <div className="frame-15">
                    <img
                      className="img-2"
                      alt="Comment"
                      color="white"
                      src="ask-1.svg"
                    />
                    <p className="text-wrapper-27">
                      What are my strengths are weakness?
                    </p>
                  </div>
                  <img className="crown" alt="Crown" src="premium.svg" />
                  <div className="frame-16">
                    <div className="text-wrapper-28">Personality</div>
                  </div>
                </div>
                <div className="component">
                  <div className="frame-15">
                    <img
                      className="img-2"
                      alt="Comment"
                      color="white"
                      src="ask-1.svg"
                    />
                    <p className="text-wrapper-27">
                      What type of job suit me the best?
                    </p>
                  </div>
                  <img className="crown" alt="Crown" src="premium.svg" />
                  <div className="frame-16">
                    <div className="text-wrapper-28">Career</div>
                  </div>
                </div>
              </div>
              <div className="frame-14">
                <div className="component">
                  <div className="frame-15">
                    <img
                      className="img-2"
                      alt="Comment"
                      color="white"
                      src="ask-1.svg"
                    />
                    <p className="text-wrapper-27">
                      Tell me about my relationship
                    </p>
                  </div>
                  <img className="crown" alt="Crown" src="premium.svg" />
                  <div className="frame-16">
                    <div className="text-wrapper-28">Love</div>
                  </div>
                </div>
                <div className="component">
                  <div className="frame-15">
                    <img className="img-2" alt="Comment" src="ask-1.svg" />
                    <p className="text-wrapper-27">
                      What do i value most in love and relationship?
                    </p>
                  </div>
                  <img className="crown" alt="Crown" src="premium.svg" />
                  <div className="frame-16">
                    <div className="text-wrapper-28">Love</div>
                  </div>
                </div>
              </div>
              <div className="frame-14">
                <div className="component">
                  <div className="frame-15">
                    <img
                      className="img-2"
                      alt="Comment"
                      color="white"
                      src="ask-1.svg"
                    />
                    <p className="text-wrapper-27">
                      How is my current time going?
                    </p>
                  </div>
                  <img className="crown" alt="Crown" src="premium.svg" />
                  <div className="frame-16">
                    <div className="text-wrapper-28">Current</div>
                  </div>
                </div>
                <div className="component">
                  <div className="frame-15">
                    <img
                      className="img-2"
                      alt="Comment"
                      color="white"
                      src="ask-1.svg"
                    />
                    <p className="text-wrapper-27">
                      Tell me about my personality
                    </p>
                  </div>
                  <img className="crown" alt="Crown" src="premium.svg" />
                  <div className="frame-16">
                    <div className="text-wrapper-28">Personality</div>
                  </div>
                </div>
              </div>
              <div className="frame-14">
                <div className="component">
                  <div className="frame-15">
                    <img
                      className="img-2"
                      alt="Comment"
                      color="white"
                      src="ask-1.svg"
                    />
                    <p className="text-wrapper-27">
                      What are my strengths are weakness
                    </p>
                  </div>
                  <img className="crown" alt="Crown" src="premium.svg" />
                  <div className="frame-16">
                    <div className="text-wrapper-28">Personality</div>
                  </div>
                </div>
                <div className="component">
                  <div className="frame-15">
                    <img
                      className="img-2"
                      alt="Comment"
                      color="white"
                      src="ask-1.svg"
                    />
                    <p className="text-wrapper-27">
                      What are my strengths are weakness
                    </p>
                  </div>
                  <img className="crown" alt="Crown" src="premium.svg" />
                  <div className="frame-16">
                    <div className="text-wrapper-28">Personality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-17">
            <div className="frame-18">
              <p className="text-wrapper-29">Type here to ask anything</p>
            </div>
            <div className="overlap-group-2" onClick={handlePackage}>
              <div className="frame-19">
                <div className="text-wrapper-30">Ask</div>
              </div>
              <img className="crown-2" alt="Crown" src="premium.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
