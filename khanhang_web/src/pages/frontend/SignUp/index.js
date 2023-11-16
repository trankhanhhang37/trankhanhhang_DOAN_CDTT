import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userservice from "../../../services/UserService";

function SignUp() {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const [password, setPassword] = useState("");

	const registerAdd = async () => {
		var user = new FormData();
		user.append("name", name);
		user.append("email", email);
		user.append("phone", phone);
		user.append("password", password);
		user.append("address", address);
		user.append("roles", "user");
		user.append("image", "avt.jpg");
		user.append("status", 1);

		const rg = await userservice.register(user);

		if (rg.data.success === true) {
			alert(rg.data.message);
			navigate('/', { replace: true });
		}
		else {
			alert(rg.data.message);
			navigate('/dang-ki', { replace: true });
		}

	}
	// async function registerAdd(event) {
	//     event.preventDefault();
	//     var user = new FormData();
	//     user.append("name", name);
	//     user.append("email", email);
	//     user.append("phone", phone);
	//     // user.append("address", address);
	//     user.append("password", password);
	//     user.append("roles", "user");
	//     user.append("image", "avt.jpg");
	//     user.append("status", 1);
	//     try {
	//         await userservice.register(user)
	//             .then(function (res) {
	//                 if (res.data.success === true) {
	//                     alert(res.data.message);
	//                     navigate('/', { replace: true });
	//                 }
	//                 else {
	//                     alert(res.data.message);
	//                     navigate('/dang-ki', { replace: true });
	//                 }
	//             });
	//     } catch (error) {
	//         console.error(error);
	//     }


	return (
		<section class="section-content padding-y">

			{/* <!-- ============================ COMPONENT REGISTER   ================================= --> */}
			<div class="card mx-auto" style={{ maxWidth: "520px", marginTop: "40px" }}>
				<article class="card-body">
					<header class="mb-4"><h4 class="card-title">Sign up</h4></header>
					{/* <form onSubmit={registerAdd} method="" > */}
					<div class="form-row">
						<div class="col form-group">
							<label>First name</label>
							<input type="text" class="form-control" placeholder="" />
						</div>
						{/* <!-- form-group end.// --> */}
						<div class="col form-group">
							<label>Ho ten</label>
							<input type="text" name="username" id="username" placeholder="Nhập họ tên..."
								class="form-control" value={name} onChange={(e) => setName(e.target.value)} />
						</div>
						{/* <!-- form-group end.// --> */}
					</div>
					{/* <!-- form-row end.// --> */}
					<div class="form-group">
						<label>Email</label>
						<input type="email" name="email" id="email" placeholder="Nhập email..."
							class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
						{/* <small class="form-text text-muted">We'll never share your email with anyone else.</small> */}
					</div>

					<div class="form-group">
						<label>Phone</label>
						<input type="text" name="phone" id="phone" placeholder="Nhập số điện thoại..."
							class="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
						{/* <small class="form-text text-muted">We'll never share your email with anyone else.</small> */}
					</div>

					{/* <!-- form-group end.// --> */}
					{/* <div class="form-group">
						<label class="custom-control custom-radio custom-control-inline">
							<input class="custom-control-input" checked="" type="radio" name="gender" value="option1" />
							<span class="custom-control-label"> Male </span>
						</label>
						<label class="custom-control custom-radio custom-control-inline">
							<input class="custom-control-input" type="radio" name="gender" value="option2" />
							<span class="custom-control-label"> Female </span>
						</label>
					</div> */}
					{/* <!-- form-group end.// --> */}
					<div class="form-row">
						<div class="form-group col-md-6">
							<label>Dia chi</label>
							<input type="text" name="address" id="address" placeholder="Nhập số dia chi..."
							class="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
						</div>
						{/* <!-- form-group end.// --> */}
						<div class="form-group col-md-6">
							<label>Country</label>
							<select id="inputState" class="form-control">
								<option> Choose...</option>
								<option>Uzbekistan</option>
								<option>Russia</option>
								<option selected="">United States</option>
								<option>India</option>
								<option>Afganistan</option>
							</select>
						</div>
						{/* <!-- form-group end.// --> */}
					</div>
					{/* <!-- form-row.// --> */}
					<div class="form-row">
						{/* <div class="form-group col-md-6">
						<label>Create password</label>
					    <input class="form-control" type="password"/>
					</div> */}
						{/* <!-- form-group end.// -->  */}
						<div class="form-group col-md-6">
							<label>password</label>
							<input type="password" name="password" id="password" placeholder="Mật khẩu..."
								class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
						</div>
						{/* <!-- form-group end.// -->   */}
					</div>
					<div class="form-group">
						<button onClick={() => registerAdd()} class="btn btn-primary btn-block"> Register  </button>
					</div>
					{/* <!-- form-group// -->       */}
					<div class="form-group">
						<label class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" checked="" /> <div class="custom-control-label"> I am agree with <a href="#">terms and contitions</a>  </div> </label>
					</div>
					{/* <!-- form-group end.// -->            */}
					{/* </form> */}
				</article>
				{/* <!-- card-body.// --> */}
			</div>
			{/* <!-- card .// --> */}
			<p class="text-center mt-4">Have an account? <a href="">Log In</a></p>
			<br /><br />
			{/* <!-- ============================ COMPONENT REGISTER  END.// ================================= --> */}


		</section>
	);
}



export default SignUp;