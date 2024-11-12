import React from "react";
import axios from "axios";
import FormData from "form-data";
import '../styles/auth.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout/Layout";

const Auth = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("email", email);

    if ((email.length !== "") && (password.length !== "")) {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: data,
      };
  
      axios
        .request(config)
        .then((response) => {
          console.log(response)
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <Layout>
        <div className="form-window auth card position-relative top-50 start-50 translate-middle">
          <form className="needs-validation" novalidate onSubmit={handleSubmit}>
              <div className="row form-line">
                <div className="col-3 form-field"><label for="validationDefaultUsername" className="form-label">Почта</label></div>
                <div className="col-9">
                  <div className="input-group">                  
                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                    <input type="text" className="form-control mail-input" id="validationMail" aria-describedby="inputGroupPrepend2" required />
                  </div>
                </div>
              </div>
              <div className="row form-line">
                <div className="col-3 form-field"><label for="inputPassword5" className="form-label">Пароль</label></div>
                <div className="col-9 form-field"><input type="password" id="inputPasswordMain" className="form-control" aria-describedby="passwordHelpBlock" /></div>
              </div>
              <div className="row form-line">
                <div className="col-3 form-field"><label for="inputPassword5" className="form-label">Повтор пароля</label></div>
                <div className="col-9 form-field"><input type="password" id="inputPasswordRepeat" className="form-control" aria-describedby="passwordHelpBlock" /></div> 
              </div>              
              <div id="passwordHelpBlock" className="d-flex flex-row-reverse">
                <div className="col-9 form-field"><p className="form-text">Пароль должен быть от 8 до 12 символов.</p></div>                  
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-5 form-line"><button className="btn btn-primary" type="submit">Регистрация</button></div>
              </div>
          </form>
        </div>
    </Layout>
  )
};

export default Auth;
