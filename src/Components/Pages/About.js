import React from "react";
import img3 from "../../Components/Asserts/about.jpg";
import "../Styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${ img3 })` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Seafood is a healthful choice for people of all ages— growing
          children, pregnant women, active adults, and the elderly. Seafood is
          an excellent source of lean, high quality, easily digested protein. A
          3.5-ounce serving of seafood provides almost half of an adult’s daily
          protein needs for only 100 to 200 calories. Seafood is low in
          saturated fat and sodium and is a rich source of many essential
          vitamins and minerals. Seafood also is one of the few foods that
          contain long-chain omega-3 fatty acids, which have many beneficial
          health effects and are essential for the development of the nervous
          system and retina. Seafood includes fish such as catfish, salmon,
          tuna, trout and tilapia, and shellfish such as shrimp, crab, clams and
          oysters. Most of the seafood purchased in the United States comes from
          marine waters and from aquaculture (farm-raised fish).The fats in red
          meat, poultry and eggs are solid fats, while the fats in seafood, nuts
          and seeds are oils. The 2010 Dietary Guidelines for Americans
          recommend decreasing our intake of solid fats (saturated fats, trans
          fats and cholesterol) because they may raise the levels of blood
          lipids such as total cholesterol and LDL cholesterol; increase the
          risk of heart disease, stroke and some cancers in adults; and lead to
          excess weight gain. Studies show that eating seafood can decrease the
          risk of heart attack, stroke, obesity and hypertension. Seafood is low
          in saturated fat and higher in “heart healthful” polyunsaturated fat,
          including omega-3 fatty acids.
        </p>
      </div>
    </div>
  );
}

export default About;