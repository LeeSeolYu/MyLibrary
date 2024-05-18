import React from "react";
import styled from "styled-components";

const SidePaperContainer = styled.div`
  margin: 10px;

  .contact {
    margin: 50px 0;
  }

  .contact-list {
    list-style-type: none; /* 리스트 스타일 제거 */
    padding: 0;
  }

  .contact-list-item {
    margin-bottom: 10px;
  }

  .contact-list-link {
    text-decoration: none; /* 텍스트 밑줄 제거 */
    color: inherit; /* 파란색 제거 */
  }
`;

function SidePaper4() {
  return (
    <SidePaperContainer>
      <div className="SidePaper4">
        <div className="contact">
          <h3>내 연락처</h3>
          <ul className="contact-list">
            <li className="contact-list-item">
              <a
                href="https://github.com/leeseolyu"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-list-link"
              >
                깃허브
              </a>
            </li>
            <li className="contact-list-item">
              <a
                href="https://instagram.com/seolyu_"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-list-link"
              >
                인스타그램
              </a>
            </li>
            <li className="contact-list-item">
              <a
                href="https://www.linkedin.com/in/seolyu/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-list-link"
              >
                링크드인
              </a>
            </li>
            <li className="contact-list-item">
              <a
                href="https://www.facebook.com/people/Seolyu-Lee/pfbid02w3GQm9Qu6LeGgXR5HNpv6jo4CDWrjsWD5vq7drgbkLEGDbGsmcJA551TLgVBZXe4l/?amp%3Bmibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-list-link"
              >
                페이스북
              </a>
            </li>
            <li className="contact-list-item">
              <a
                href="https://www.youtube.com/@seolyulibrary"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-list-link"
              >
                유튜브
              </a>
            </li>
          </ul>
        </div>
        <h3>롤 아이디</h3>
        <p>이설유</p>
      </div>
    </SidePaperContainer>
  );
}

export default SidePaper4;
