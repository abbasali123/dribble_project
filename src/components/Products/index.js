import React from "react";
import { Tag } from "antd"; 
import "./products.css";

function Products() {
  return (
    <div style={{ background: "#0B0F17", height: "70vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "55vh",
          color: "white",
          paddingTop: "105px",
          background: "#0B0F17",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "70px",
            paddingBottom:'unset'
          }}
        >
          <h1
            style={{
              fontSize: "45px",
              fontWeight: "bold",
            }}
          >
            Need numbers?
          </h1>
          <div>
            
         <Tag
            style={{
              width: "88px",
              borderRadius: "90px",
              height: "40px",
              padding: "10px 12px",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight:'13.99px',
              textAlign:'center',
              background:'white',
              color:'#1f283d'
            }}
            // color={bannerType?.toLowerCase() === "regular" ? "blue" : "#09A347"}
          >
            {"Travel"}
          </Tag>
          <Tag
            style={{
              width: "88px",
              borderRadius: "90px",
              height: "40px",
              padding: "10px 12px",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight:'13.99px',
              textAlign:'center',
              background: "#1f283d",
              color:'white',
              border:'none'
              
            }}
            // color={bannerType?.toLowerCase() === "regular" ? "blue" : "#09A347"}
          >
            {"Health"}
          </Tag>
          <Tag
            style={{
              width: "93px",
              borderRadius: "90px",
              height: "40px",
              padding: "10px 12px",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight:'13.99px',
              textAlign:'center',
              background: "#1f283d",
              color:'white',
              border:'none'
              
            }}
            // color={bannerType?.toLowerCase() === "regular" ? "blue" : "#09A347"}
          >
            {"CASCO"}
          </Tag>
          <Tag
            style={{
              width: "103px",
              borderRadius: "90px",
              height: "40px",
              padding: "10px 12px",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight:'13.99px',
              textAlign:'center',
              background: "#1f283d",
              color:'white',
              border:'none'
              
            }}
            // color={bannerType?.toLowerCase() === "regular" ? "blue" : "#09A347"}
          >
            {"mortgage"}
          </Tag>
          <Tag
            style={{
              width: "83px",
              borderRadius: "90px",
              height: "40px",
              padding: "10px 12px",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight:'13.99px',
              textAlign:'center',
              background: "#1f283d",
              color:'white',
              border:'none'
              
            }}
            // color={bannerType?.toLowerCase() === "regular" ? "blue" : "#09A347"}
          >
            {"Fire"}
          </Tag>
          </div>
          <div style={{ display: 'flex', paddingTop: '10px' }}>
            <div>
              <p
                style={{
                  fontSize: "15px",
                  color: "#F5F5F5",
                }}
              >
                Enter the country
              </p>
              <input
                style={{
                  background: '#1f283d',
                  height: "50px",
                  width: '85%', // Increase the width as desired
                  borderRadius: "90px",
                  fontSize: "16px",
                  padding: "10px",
                  border: 'none',
                  outline: 'none',
                  color: 'white',
                }}
                type="text"
                placeholder="Australia"
              />
            </div>
            <div>
              <p
                style={{
                  fontSize: "15px",
                  color: "#F5F5F5",
                }}
              >
                Choose travel dates
              </p>
              <input
                style={{
                  background: '#1f283d',
                  height: "50px",
                  width: '100%', // Increase the width as desired
                  borderRadius: "90px",
                  fontSize: "16px",
                  padding: "10px",
                  border: 'none',
                  outline: 'none',
                  color: 'white',
                }}
                // type="date"
                // placeholder="11 Apr- 20 Apr "
                type="date" placeholder="Date"
              />
              
            </div>
          </div>
          <button style={{
            marginTop:'25px',
          width:'43%',
          height:'68px',
          borderRadius: "35px",
          cursor: "pointer",
          color: "white",
          fontSize:'25px',
          background: "#ff6476",
          

          }}>Calculate</button>
        </div>
        <div
          style={{
            background: "#0B0F17",
            height: "100%",
            width: '50%',
            display: "flex",
            flexDirection: "column",
            paddingRight:'20px'

          }}
        >
         <div>
          <p style={{
            fontSize:'24px',
            fontWeight:'bold'
          }}>Insurance services</p>
          <p style={{
            color: "#808080",
          }}>
          Medical expenses  &nbsp; &nbsp;  Family health insurance

          </p>
          <p style={{
            color: "#808080",
          }}>
         Vehicle damage &nbsp;  Property loss &nbsp; Fire

          </p>
         </div>
         <div>
          <p style={{
            fontSize:'24px',
            fontWeight:'bold'
          }}>Company</p>
          <p style={{
            color: "#808080",
          }}>
          About us  &nbsp; Career  &nbsp; Help &nbsp; FAQ &nbsp; Blog

          </p>
         </div>
         <div>
          <p style={{
            fontSize:'24px',
            fontWeight:'bold'
          }}>Bonus</p>
          <p style={{
            color: "#808080",
          }}>
          Gift certificate  &nbsp; Affiliate Program  &nbsp; Trainings

          </p>
         </div>
        </div>
      </div>
      <div
        style={{
          height: "10vh",
          color: "white",
          background: "#0B0F17",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: "70px",
          paddingRight: "700px",
        }}
      >
        <div style={{
          display:'flex',
          flexFlow:'row'
        }}>
        <div><img src='circleFour.png' height="55px"/></div>
        <p style={{
          paddingLeft:'10px',
          fontSize:'18px',
        }}>

Darcy's insurance products
</p>
        </div>
        
        <a
        href="#"
        style={{
          fontSize:'18px',
         color:'white'
        }}
       >
          privacy Policy
        </a>
      </div>
    </div>
  );
}

export default Products;
