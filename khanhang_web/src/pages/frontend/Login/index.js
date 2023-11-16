import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import userservice from "../../../services/UserService";
function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAdd = async()=> {

    var user = new FormData();
    user.append("email", email);
    user.append("password", password);

    const lg = await userservice.login(user);

    if (lg.data.success === true) {
      alert(lg.data.message);
       navigate('/', { replace: true });
    }
    else {
      alert(lg.data.message);
      navigate('/dang-nhap', { replace: true });
    }
  }
  return (
    <section class="section-conten padding-y" style={{ minHeight: "84vh" }}>

      {/* <!-- ============================ COMPONENT LOGIN   ================================= --> */}
      <div class="card mx-auto" style={{ maxWidth: "380px", marginTop: "100px" }}>
        <div class="card-body">
          <h4 class="card-title mb-4">Login</h4>
       
            <a href="#" class="btn btn-facebook btn-block mb-2"> <i class="fab fa-facebook-f"></i>  Sign in with Facebook</a>
            <a href="#" class="btn btn-google btn-block mb-4"> <i class="fab fa-google"></i> Sign in with Google</a>
            <div class="form-group">
              <input type="email" name="email" id="email" placeholder="Nhập email..."
                class="form-control"
                value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {/* <!-- form-group// --> */}
            <div class="form-group">
              <input type="password" name="password" id="password" placeholder="Nhập mật khẩu..."
                class="form-control"
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {/* <!-- form-group// --> */}

            <div class="form-group">
              <a href="#" class="float-right">Forgot password?</a>
              <label class="float-left custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" checked="" />
                <div class="custom-control-label"> Remember </div> </label>
            </div>
            {/* <!-- form-group form-check .// --> */}
            <div class="for-group">
              <button onClick={() => loginAdd()} class="btn btn-primary btn-block"> Login  </button>
            </div>
            {/* <!-- form-group// -->     */}
       
        </div>
        {/* <!-- card-body.// --> */}
      </div>
      {/* <!-- card .// --> */}

      <p class="text-center mt-4">Don't have account? <Link to="/dang-ki">Sign up</Link></p>
      <br /><br />
      {/* <!-- ============================ COMPONENT LOGIN  END.// ================================= --> */}


    </section>
  );
}



export default Login;