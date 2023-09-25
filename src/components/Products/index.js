import React from "react";
import { Tag } from "antd";
import { motion } from "framer-motion";
import "./products.scss";

function Products() {
  const tags = ["Travel", "Health", "CASCO", "mortgage", "Fire"];
  return (
    <div className="About-container">
      <div className="About-innerBox">
        <div className="contact-form">
          <motion.h6
            className="heading"
            initial={{
              opacity: 0,
              y: "200%",
              x: "-50%",
              scale: 0,
              left: -200,
            }}
            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, left: 0 }}
            transition={{ duration: 1 }}
          >
            Need numbers?
          </motion.h6>
          <div className="tags-container">
            {tags.map((tag, i) => {
              return (
                <motion.Tag
                  className={`tag-item ${!i && "active"}`}
                  // color={bannerType?.toLowerCase() === "regular" ? "blue" : "#09A347"}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    left: -200,
                  }}
                  whileInView={{ opacity: 1, scale: 1, left: 0 }}
                  transition={{ duration: 1 + Number(`0.${i + 1}`) }}
                >
                  {tag}
                </motion.Tag>
              );
            })}
          </div>
          <form>
            <div className="input-container">
              <motion.div
                className="input-wrapper"
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
              >
                <label className="form-label">Enter the country</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Australia"
                />
              </motion.div>
              <motion.div
                className="input-wrapper"
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.7 }}
              >
                <label className="form-label">Choose travel dates</label>
                <input
                  // type="date"
                  // placeholder="11 Apr- 20 Apr "
                  type="date"
                  placeholder="Date"
                  className="form-control"
                />
              </motion.div>
            </div>
            <motion.button
              className="calculate-btn"
              type="submit"
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.9 }}
            >
              Calculate
            </motion.button>
          </form>
        </div>
        <div className="instructions-container">
          <div className="services-box">
            <motion.h6
              className="heading"
              initial={{
                y: "200%",
                x: "-50%",
                scale: 0,
                left: -200,
              }}
              whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, left: 0 }}
              transition={{ duration: 1 }}
            >
              Insurance services
            </motion.h6>
            <motion.ul
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, left: 0 }}
              transition={{ duration: 1 }}
            >
              <li className="service-text">Medical expenses</li>
              <li className="service-text">Family health insurance</li>
              <li className="service-text">Property loss</li>
              <li className="service-text">Fire</li>
              <li className="service-text">Vehicle damage</li>
            </motion.ul>
          </div>
          <div className="services-box">
            <motion.h6
              className="heading"
              initial={{
                y: "200%",
                x: "-50%",
                scale: 0,
                left: -200,
              }}
              whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, left: 0 }}
              transition={{ duration: 1.25 }}
            >
              Company
            </motion.h6>

            <motion.ul
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, left: 0 }}
              transition={{ duration: 1.25 }}
            >
              <li className="service-text">
                <a href="#">About us</a>
              </li>
              <li className="service-text">
                <a href="#">Career</a>
              </li>
              <li className="service-text">
                <a href="#">Help</a>
              </li>
              <li className="service-text">
                <a href="#">FAQ</a>
              </li>
              <li className="service-text">
                <a href="#">Blog</a>
              </li>
            </motion.ul>
          </div>
          <div className="services-box">
            <motion.h6
              className="heading"
              initial={{
                y: "200%",
                x: "-50%",
                scale: 0,
                left: -200,
              }}
              whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, left: 0 }}
              transition={{ duration: 1.5 }}
            >
              Bonus
            </motion.h6>
            <motion.ul
              className="service-text"
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, left: 0 }}
              transition={{ duration: 1.5 }}
            >
              <li className="service-text">
                <a href="#">Gift certificate</a>
              </li>
              <li className="service-text">
                <a href="#">Affiliate Program</a>
              </li>
              <li className="service-text">
                <a href="#">Trainings</a>
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="company-name">
          <div className="img-wrapper">
            <motion.img
              src="circleFour.png"
              height="55px"
              initial={{
                opacity: 0,
                scale: 0,
                rotate: 360,
              }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 2 }}
            />
          </div>
          <motion.p
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            Darcy's insurance products
          </motion.p>
        </div>

        <motion.a
          href="#"
          className="privacy-policy"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          privacy Policy
        </motion.a>
      </div>
    </div>
  );
}

export default Products;
