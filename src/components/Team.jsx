import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import Team1 from "../images/team1.jpg";
import Team2 from "../images/team2.jpg";
import Team3 from "../images/team3.jpg";
import Team4 from "../images/team4.jpg";
import Team5 from "../images/team5.jpg";
import Team6 from "../images/team6.jpg";
import Team7 from "../images/team7.jpg";
import Team8 from "../images/team8.jpg";

export default function Team() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 70;
  var cardnum = 3;
  // if (screen.width > 998) {
  //     cardnum = 4;
  // } else if (screen.width > 569 && screen.width < 998) {
  //     cardnum = 2;
  // } else {
  //     cardnum = 1;
  // }
  return (
    <div className="team-carousel">
      <div style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={cardnum}
          gutter={20}
          leftChevron={
            <img className="chevron" src="../src/assets/images/prev-page.png" />
          }
          rightChevron={
            <img className="chevron" src="../src/assets/images/next-page.png" />
          }
          outsideChevron
          chevronWidth={chevronWidth}
        >
          <div>
            <img
              className="slider1-images"
              height={200}
              width={300}
              src={Team1}
              alt="ceo"
            />
            <h2>manu</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
              qui ab eos magnam vero dolor quasi hic expedita commodi
              accusantium ea porro? Voluptatum vero consequuntur, velit veniam
              alias aspernatur unde.
            </p>
          </div>
          <div>
            <img
              className="slider1-images"
              height={200}
              width={300}
              src={Team2}
              alt="Amin"
            />
            <h2>liridora</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
              qui ab eos magnam vero dolor quasi hic expedita commodi
              accusantium ea porro? Voluptatum vero consequuntur, velit veniam
              alias aspernatur unde.
            </p>
          </div>
          <div>
            <img
              className="slider1-images"
              height={200}
              width={300}
              src={Team3}
              alt="sergei"
            />{" "}
            <h2>mark</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
              qui ab eos magnam vero dolor quasi hic expedita commodi
              accusantium ea porro? Voluptatum vero consequuntur, velit veniam
              alias aspernatur unde.
            </p>
          </div>
          <div>
            <img
              className="slider1-images"
              height={200}
              width={300}
              src={Team4}
              alt="edward"
            />{" "}
            <h2>Hufsa Khan</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
              qui ab eos magnam vero dolor quasi hic expedita commodi
              accusantium ea porro? Voluptatum vero consequuntur, velit veniam
              alias aspernatur unde.
            </p>
          </div>
          <div>
            <img
              className="slider1-images"
              height={200}
              width={300}
              src={Team5}
              alt="oliver"
            />{" "}
            <h2>Christofer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
              qui ab eos magnam vero dolor quasi hic expedita commodi
              accusantium ea porro? Voluptatum vero consequuntur, velit veniam
              alias aspernatur unde.
            </p>
          </div>
          <div>
            <img
              className="slider1-images"
              height={200}
              width={300}
              src={Team6}
              alt="lovska"
            />{" "}
            <h2>James</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
              qui ab eos magnam vero dolor quasi hic expedita commodi
              accusantium ea porro? Voluptatum vero consequuntur, velit veniam
              alias aspernatur unde.
            </p>
          </div>
          <div>
            <img
              className="slider1-images"
              height={200}
              width={300}
              src={Team7}
              alt="abhishek"
            />{" "}
            <h2>Stella Josaf</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
              qui ab eos magnam vero dolor quasi hic expedita commodi
              accusantium ea porro? Voluptatum vero consequuntur, velit veniam
              alias aspernatur unde.
            </p>
          </div>
          <div>
            <img
              className="slider1-images"
              height={200}
              width={300}
              src={Team8}
              alt="morris"
            />{" "}
            <h2>valoria</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
              qui ab eos magnam vero dolor quasi hic expedita commodi
              accusantium ea porro? Voluptatum vero consequuntur, velit veniam
              alias aspernatur unde.
            </p>
          </div>
        </ItemsCarousel>
      </div>
    </div>
  );
}
