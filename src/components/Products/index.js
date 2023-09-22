import React from "react";
import { Tag } from "antd";
import "./products.scss";

function Products() {
  return (
    <div className="About-container">
      <div className="About-innerBox">
        <div className="contact-form" style={{}}>
          <h6 className="heading">Need numbers?</h6>
          <div className="tags-container">
            <Tag
              className="tag-item active"
              // color={bannerType?.toLowerCase() === "regular" ? "blue" : "#09A347"}
            >
              {"Travel"}
            </Tag>
            <Tag
              className="tag-item"
              // color={bannerType?.toLowerCase() === "regular" ? "blue" : "#09A347"}
            >
              {"Health"}
            </Tag>
            <Tag
              className="tag-item"
              // color={bannerType?.toLowerCase() === "regular" ? "blue" : "#09A347"}
            >
              {"CASCO"}
            </Tag>
            <Tag
              className="tag-item"
              // color={bannerType?.toLowerCase() === "regular" ? "blue" : "#09A347"}
            >
              {"mortgage"}
            </Tag>
            <Tag
              className="tag-item"
              // color={bannerType?.toLowerCase() === "regular" ? "blue" : "#09A347"}
            >
              {"Fire"}
            </Tag>
          </div>
          <form>
            <div className="input-container">
              <div className="input-wrapper">
                <label className="form-label">Enter the country</label>
                <input
                  style={{}}
                  className="form-control"
                  type="text"
                  placeholder="Australia"
                />
              </div>
              <div className="input-wrapper">
                <label className="form-label">Choose travel dates</label>
                <input
                  // type="date"
                  // placeholder="11 Apr- 20 Apr "
                  type="date"
                  placeholder="Date"
                  className="form-control"
                />
              </div>
            </div>
            <button className="calculate-btn" type="submit">
              Calculate
            </button>
          </form>
        </div>
        <div className="instructions-container">
          <div className="services-box">
            <h6 className="heading">Insurance services</h6>
            <p className="service-text">
              Medical expenses &nbsp; &nbsp; Family health insurance
            </p>
            <p className="service-text">
              Vehicle damage &nbsp; Property loss &nbsp; Fire
            </p>
          </div>
          <div className="services-box">
            <h6 className="heading">Company</h6>
            <p className="service-text">
              About us &nbsp; Career &nbsp; Help &nbsp; FAQ &nbsp; Blog
            </p>
          </div>
          <div className="services-box">
            <h6 className="heading">Bonus</h6>
            <p className="service-text">
              Gift certificate &nbsp; Affiliate Program &nbsp; Trainings
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="company-name">
          <div className="img-wrapper">
            <img src="circleFour.png" height="55px" />
          </div>
          <p>Darcy's insurance products</p>
        </div>

        <a href="#" className="privacy-policy">
          privacy Policy
        </a>
      </div>
    </div>
  );
}

export default Products;
