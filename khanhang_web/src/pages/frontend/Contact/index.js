import { FaPhoneSquareAlt, FaSearchLocation, FaVoicemail } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import contactservice from "../../../services/ContactService";
import { Button } from "@mui/material";

function Contact() {
    const navigate = useNavigate();

    // const [info,setinfo]=useState([]);

    // const [contacts, setContacts] = useState([]);

    // useEffect(function(){
    //     (async function(){
    //         try{
    //         // const infocompany = await infoservice.getById(1);
    //         // setinfo(infocompany.data.info); // thông tin liên hệ
    //         const infocontact = await contactservice.getAll();
    //         setContacts(infocontact.data.contacts);

    //     }
    //     catch(error){
    //         console.error(error);

    //     }
    //     })();
    // },[]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const contactStore = async () => {

        var contact = await new FormData();

        contact.append("name", name);
        contact.append("user_id", 1);
        contact.append("email", email);
        contact.append("phone", phone);
        contact.append("status", 1);
        contact.append("title", title);
        contact.append("content", content);
        contact.append("reply_id", 0);
        
        try {
            const ct = await contactservice.create(contact);


            if (ct.data.success === true) {
                alert("Gửi yêu cầu thành công");
                navigate('/', { replace: true });
            } else {
                alert("Gửi yêu cầu khong thành công");

            }

        } catch (e) {
            console.log("Error creating contact");
        }

    }



    return (
        //     
        <>


            <div class="container-xxl py-6">
                <div class="container">
                    <div class=" text-center mx-auto mb-5 wow fadeInUp " data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
                        <h1 class="display-5 mb-3">Contact Us</h1>
                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div class="row g-5 justify-content-center">
                        <div class="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
                            <div class=" bg-transparent  text-white d-flex flex-column justify-content-right  h-100 p-5" style={{ maxWidth: "400px" }}>
                                <h5 class="text-white">Call Us</h5>
                                <p class="mb-5"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                                <h5 class="text-white">Email Us</h5>
                                <p class="mb-5"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                                <h5 class="text-white">Office Address</h5>
                                <p class="mb-5"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                                <h5 class="text-white">Follow Us</h5>
                                <div class="d-flex pt-2">
                                    <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-youtube"></i></a>
                                    <a class="btn btn-square btn-outline-light rounded-circle me-0" href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <p class="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>



                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form">
                                        <label for="exampleFormControlInput1" class="form-label"><i>Họ Tên Khách Hàng</i></label>
                                        <input type="text"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="form-control"
                                            placeholder="Nhập họ tên" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form">
                                        <label for="exampleFormControlInput1" class="form-label"><i>Số Điện Thoại</i></label>
                                        <input name="phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="form-control"
                                            placeholder="Nhập sdt" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form">
                                        <label for="exampleFormControlInput1" class="form-label"><i>Email address</i></label>
                                        <input name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control"
                                            placeholder="Nhập email" />
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="form">
                                        <label for="exampleFormControlTextarea1" class="form-label"><i>Tiêu đề</i></label>
                                        <input name="title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            className="form-control" rows="3" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form">
                                        <label for="exampleFormControlTextarea1" class="form-label"><i>Nội dung</i></label>
                                        <textarea name="content"
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                            className="form-control" rows="3"></textarea>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <Button onClick={() => contactStore()} > Gửi</Button>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
            <div class="container-xxl px-0 wow fadeIn pt-5" data-wow-delay="0.1s" style={{ marginBottom: "-6px" }} >
                <iframe class="w-100" style={{ height: "450px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6717588491038!2d106.7749058739457!3d10.836412058086653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270433ab8aad%3A0xea411369487e8404!2zMzkvMTcgxJDGsOG7nW5nIDEwLCBUxINuZyBOaMahbiBQaMO6IEIsIFF14bqtbiA5LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1684775581962!5m2!1svi!2s"
                    frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>

        </>

    );
}

export default Contact;

{/* <div className ="col-md-6 ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6717588491038!2d106.7749058739457!3d10.836412058086653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270433ab8aad%3A0xea411369487e8404!2zMzkvMTcgxJDGsOG7nW5nIDEwLCBUxINuZyBOaMahbiBQaMO6IEIsIFF14bqtbiA5LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1684775581962!5m2!1svi!2s"
                 width="600" height="500" style={{marginRight:  'em'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div> */}