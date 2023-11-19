import React from "react";

export default function ContactUs() {
  return (
    <>
      <div className="">
        <h1 className="text-center">Contact Us</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.028506354466!2d73.08402717473287!3d31.413340674263196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2531737c30f18453%3A0x7779e9b283bdb69!2sLyallpur%20Fashion!5e0!3m2!1sen!2s!4v1698420521627!5m2!1sen!2s"
          width="1260"
          height="600"
          // style="border:0;"
          style={{ border: 0 }}
          allowFullScreen="True"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-12">
              <form
                method="post"
                action=""
                acceptCharset="UTF-8"
                className="contact-form"
              >
                <p>
                  <label>
                    Your Name{" "}
                    <span className="text-danger">
                      <b>*</b>
                    </span>
                  </label>
                  <input
                    required="required"
                    type="text"
                    name="contact[name]"
                    placeholder="Enter Your Name"
                  />
                </p>
                <p>
                  <label>
                    Your Email{" "}
                    <span className="text-danger">
                      <b>*</b>
                    </span>
                  </label>
                  <input
                    required="required"
                    type="email"
                    name="contact[email]"
                    autoCorrect="off"
                    autoCapitalize="off"
                    aria-required="true"
                    placeholder="Enter Your Email"
                  />
                </p>
                <p>
                  <label>
                    Your Phone Number{" "}
                    <span className="text-danger">
                      <b>*</b>
                    </span>
                  </label>
                  <input
                    required="required"
                    type="tel"
                    name="contact[phone]"
                    pattern="[0-9\-]*"
                    placeholder="Enter Your Phone Number"
                  />
                </p>
                <p>
                  <label>Your Message</label>
                  <textarea placeholder="Enter Your Message/ Openinion"></textarea>
                </p>
                <input
                  type="submit"
                  value="Send"
                  className="fw-bold"
                  id="messageSubmit"
                />
              </form>
            </div>

            <div className="col-md-6 col-12">
              <h4 className="mb-2">CONTACT INFORMATION</h4>
              <p>
                Lyallpur Fashion Head Office
                <br />
                First Floor, Tata Market, Sitara Laal plaza, Faisalabad.
              </p>
              <p>
                <i className="fa fa-envelope fs-16"></i>{" "}
                lyallpurfashionofficial@gmail.com
              </p>
              <p>
                <i className="fa fa-phone fs-16"> </i>+92 3113134555
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
