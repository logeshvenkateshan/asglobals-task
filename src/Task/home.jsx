import React, { useState } from "react";
import "../Css/home.css";
import img from "../Assets/images/logo-375-89.png";


const Home = () => {
   
    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
      const [errors, setErrors] = useState({
        username: '',
        password: '',
      });
    
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(
            {
          ...formData,
          [name]: value,
      });
      };

      const validate = () => {
        let valid = true;
        let errors = {};
    
        if (!formData.username) {
          valid = false;
          errors.username = 'Username is required';
        }
    
        if (!formData.password) {
          valid = false;
          errors.password = 'Password is required';
        }
    
        setErrors(errors);
        return valid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
         
          window.location.href="https://www.flipkart.com/"
         
        }
      };
    


  return (
    <div>
      <div className="head">
        <img src={img} alt="" className="img-logo" />
        <div className="sing-in-body">
          <div className="sign-up">
            <i
              class="ace-icon fa fa-user green"
              style={{
                color: "#FFF !important",
                fontSize: "24px",
                marginRight: "10px",
              }}
            ></i>
            <p>Sign In</p>
          </div>

          <form className="sing-in-form" onSubmit={handleSubmit}>
            <input name="username" type="text" placeholder="Username" className="input-box"   value={formData.username}
          onChange={handleChange}/>
            <i
              style={{ fontSize: "18px", color: "#d5d5d5", opacity: "0.2" }}
              class="ace-icon fa fa-user user"
            ></i>
             {errors.username && <p className="error">{errors.username}</p>}

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-box"
              value={formData.password}
              onChange={handleChange}
            />
            <i
              style={{ fontSize: "18px", color: "#d5d5d5", opacity: "0.2" }}
              class="ace-icon fa fa-lock pass"
            ></i>
             {errors.password && <p className="error">{errors.password}</p>}

            <hr className="hr_line" />

            <div className="btn-head">
              <div className="forgot-link">
                <i
                  style={{ fontSize: "14px" }}
                  class="ace-icon form-signin-heading fa fa-arrow-left"
                ></i>
                <p> I forget my password</p>
              </div>

              <div className="btn-content">
                <button className="btn-secure">Secure Login</button>
                <i
                  style={{ fontSize: "14px" }}
                  class="ace-icon fa fa-key key-logo"
                ></i>
              </div>
            </div>
          </form>

          <h4 className="footer-text">Powered By KG Hawes, LLC.</h4>
        </div>
      </div>
    </div>
  );
};
export default Home;
