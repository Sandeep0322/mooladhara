import React from "react";
import "./BirthChart.css";
import { useNavigate } from "react-router-dom";

export const BirthChart = () => {
  const navigate = useNavigate();

  const generateDownload = () => {
    // Example content to download (replace with actual content generation logic)
    const content = `
      Birth Chart Summary:
      - Ascendant: Ascendant in Virgo (Kanya)
      - Sun Sign: Cancer (Karkat)
      - Moon Sign: Scorpio (Vrishchik)
      - Sun: Sun in Gemini (Mithun)
      - Mercury: Mercury in Gemini (Mithun)
      - Venus: Venus in Gemini (Mithun)
      - Mars: Mars in Gemini (Mithun)
      - Jupiter: Jupiter in Taurus (Vrish)
      - Saturn: Saturn in Taurus (Vrish)
    `;

    // Create a Blob object from the content
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });

    // Create a download link
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "birth_chart_summary.txt"; // File name
    downloadLink.click();
  };

  const handleContinue = () => {
    // Perform login logic here
    // For demo purposes, simulate successful login

    // Navigate to Home component
    navigate("/home");
  };
  return (
    <div className="birth-chart">
      <div className="overlap">
        <p className="text-wrapper">Jhon, Here’s your birth chart</p>
        <div className="div">
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="rectangle" />
                  <div className="text-wrapper-2">1</div>
                  <div className="text-wrapper-3">2</div>
                  <div className="text-wrapper-4">3</div>
                  <div className="text-wrapper-5">4</div>
                  <div className="text-wrapper-6">5</div>
                  <div className="text-wrapper-7">6</div>
                  <div className="text-wrapper-8">7</div>
                  <div className="text-wrapper-9">8</div>
                  <div className="text-wrapper-10">9</div>
                  <div className="text-wrapper-11">10</div>
                  <div className="text-wrapper-12">Ke</div>
                  <div className="text-wrapper-13">Mo</div>
                  <div className="text-wrapper-14">Su Ma Me Ve</div>
                  <div className="text-wrapper-15">Ra</div>
                  <div className="text-wrapper-16">Ju Sa</div>
                  <div className="text-wrapper-17">11</div>
                  <div className="text-wrapper-18">12</div>
                </div>
              </div>
              <div className="frame-2">
                <div className="frame-3">
                  <img className="image-2" alt="Image" src="scripo.svg" />
                  <div className="frame-4">
                    <div className="text-wrapper-19">Scorpio</div>
                    <div className="text-wrapper-19">(Vrishchik)</div>
                  </div>
                </div>
                <p className="p">Thu Jun 15 2000, 12:30:00 PM</p>
                <div className="frame-5">
                  <img className="sun" alt="Sun" src="sun.svg" />
                  <div className="text-wrapper-20">Sun Sign</div>
                  <div className="text-wrapper-21">Cancer (karkat)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-6">
            <div className="frame-wrapper">
              <div className="div-wrapper">
                <div className="frame-7">
                  <div className="frame-8">
                    <div className="frame-9">
                      <div className="frame-10">
                        <div className="frame-11">
                          <img className="img-2" alt="Image" src="zodiac.svg" />
                          <div className="text-wrapper-22">
                            Ascendant in Virgo (Kanya)
                          </div>
                        </div>
                        <p className="text-wrapper-23">
                          With your Ascendant in the Vedic sign of Virgo, you
                          appear to be analytical, detail-oriented, and
                          practical. Your approach to life is methodical and
                          organized, and you strive for perfection in everything
                          you do. On the flip side, you may come across as
                          overly critical or overly focused on minor details. In
                          this journey through life, you are learning to balance
                          your practicality with flexibility and spontaneity
                        </p>
                      </div>
                      <div className="frame-10">
                        <div className="frame-11">
                          <img className="img-2" alt="Image" src="zodiac.svg" />
                          <div className="text-wrapper-22">
                            Moon in Scorpio (Vrishchik)
                          </div>
                        </div>
                        <p className="text-wrapper-23">
                          In your Vedic chart, the Moon resides in Scorpio. Your
                          emotional inner- self is influenced by intensity,
                          depth, and a strong desire for transformation. This
                          placement suggests that you may react with emotional
                          intensity and secrecy at times. It also indicates a
                          strong need for privacy and a tendency to keep your
                          emotions hidden.
                          <br />
                          <br />
                          The Moon is also in the 3rd house of your chart. It
                          implies that your communication style may be
                          influenced by emotional depth and a desire for
                          meaningful connections. You may also have a strong
                          intuition and a need for intellectual stimulation in
                          your immediate environment.
                        </p>
                      </div>
                    </div>
                    <div className="frame-9">
                      <div className="frame-10">
                        <div className="frame-11">
                          <img className="img-2" alt="Image" src="zodiac.svg" />
                          <div className="text-wrapper-22">
                            Sun in Gemini (Mithun)
                          </div>
                        </div>
                        <p className="text-wrapper-23">
                          As per Vedic astrology, your Sun is settled in Gemini.
                          It powers you to be adaptable, curious, and
                          communicative. You may feel like your true self when
                          engaging in diverse activities and connecting with a
                          variety of people.
                          <br />
                          <br />
                          The Sun is also in the 10th House of your chart. It
                          suggests that you may seek recognition and success
                          through your versatile and communicative abilities.
                          This placement also indicates a strong potential for
                          leadership and authority in your career.
                        </p>
                      </div>
                      <div className="frame-10">
                        <div className="frame-11">
                          <img className="img-2" alt="Image" src="zodiac.svg" />
                          <div className="text-wrapper-22">
                            Mercury in Gemini (Mithun)
                          </div>
                        </div>
                        <p className="text-wrapper-23">
                          As per Vedic astrology, your Mercury is placed in
                          Gemini. It stimulates your intellect to be versatile,
                          analytical, and communicative. This placement enhances
                          your ability to adapt to various situations and
                          express yourself effectively.
                          <br />
                          <br />
                          Mercury is also in the 10th House of your chart. It
                          represents a strong focus on career, communication,
                          and public image. This placement suggests that your
                          mind is capable of strategic thinking and effective
                          decision-making in professional matters.
                        </p>
                      </div>
                    </div>
                    <div className="frame-9">
                      <div className="frame-10">
                        <div className="frame-11">
                          <img className="img-2" alt="Image" src="zodiac.svg" />
                          <div className="text-wrapper-22">
                            Venus in Gemini (Mithun)
                          </div>
                        </div>
                        <p className="text-wrapper-23">
                          Born with Venus in Gemini, your romantic side is
                          charming, adaptable, and intellectually stimulated.
                          You may value variety, communication, and mental
                          connections in your relationships. However, this
                          placement can also indicate a tendency to be
                          indecisive or superficial in matters of the heart.
                        </p>
                      </div>
                      <div className="frame-10">
                        <div className="frame-11">
                          <img className="img-2" alt="Image" src="zodiac.svg" />
                          <div className="text-wrapper-22">
                            Mars in Gemini (Mithun)
                          </div>
                        </div>
                        <p className="text-wrapper-23">
                          In your Vedic Chart, Mars is in Gemini. It drives you
                          to pursue your goals with intellectual vigor,
                          versatility, and a desire for constant stimulation.
                          This placement suggests that you may be highly
                          motivated by mental challenges and the need to
                          constantly learn and adapt
                        </p>
                      </div>
                    </div>
                    <div className="frame-9">
                      <div className="frame-10">
                        <div className="frame-11">
                          <img className="img-2" alt="Image" src="zodiac.svg" />
                          <div className="text-wrapper-22">
                            Jupiter in Taurus (Vrish)
                          </div>
                        </div>
                        <p className="text-wrapper-23">
                          Born with Jupiter in Taurus, you find purpose in
                          stability, material comfort, and nurturing others.
                          This placement suggests that you may experience luck
                          and expansion through building a secure and harmonious
                          home environment, as well as through committed
                          partnerships.
                          <br />
                          <br />
                          Jupiter is also in the 9th House of your chart. It
                          signifies that your life success and purpose may be
                          strongly linked to your beliefs, higher education, and
                          spiritual growth. This placement also indicates
                          potential luck and growth through travel, exploration,
                          and connecting with different cultures
                        </p>
                      </div>
                      <div className="frame-10">
                        <div className="frame-11">
                          <img className="img-2" alt="Image" src="zodiac.svg" />
                          <div className="text-wrapper-24">
                            Saturn in Taurus (Vrish)
                          </div>
                        </div>
                        <p className="text-wrapper-23">
                          Because of Saturn in Taurus in your Vedic chart, you
                          may have a disciplined and practical approach to
                          creativity, romance, and personal expression. This
                          placement suggests that you may feel a sense of
                          responsibility and restriction in matters related to
                          self- expression and entertainment.
                          <br />
                          <br />
                          Saturn is also in the 9th House of your chart. It
                          indicates that your life lessons and responsibilities
                          may revolve around your beliefs, higher education, and
                          moral values. This placement also suggests that you
                          may need to work diligently to achieve your long-term
                          goals and expand your horizons.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="frame-12">
                    <p className="text-wrapper-25">
                      How much did the above description resonate with you?
                    </p>
                    <div className="frame-13">
                      <img className="img-2" alt="Star" src="star.svg" />
                      <img className="img-2" alt="Star" src="star.svg" />
                      <img className="img-2" alt="Star" src="star.svg" />
                      <img className="img-2" alt="Star" src="star.svg" />
                      <img className="img-2" alt="Star" src="star.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-14">
          <div className="frame-15" onClick={generateDownload}>
            <img className="download" alt="Download" src="download.svg" />
            <div className="text-wrapper-26">Download</div>
          </div>
          <div className="frame-16" onClick={handleContinue}>
            <div className="text-wrapper-27">Lets get started</div>
            <img className="arrow-left" alt="Arrow left" src="next.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
