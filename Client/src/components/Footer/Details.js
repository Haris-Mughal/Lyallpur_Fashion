import React from "react";
import { Link } from "react-router-dom";
import WhatsAppIcon from "../../shared/WhatsAppIcon";
// import { Link } from "react-router-dom";
export default function Details() {
  return (
    <footer>
      <div className="footer-wrappper section-bg" id="footer_bg">
        <div className="footer-area footer-padding">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-5 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div
                    className="single-footer-caption mb-30"
                    id="logo_socialicons"
                  >
                    <div className="footer-logo">
                      <a href="#">
                        <img
                          src="/assets/logo/Logo.png"
                          alt="logo"
                          width={150}
                        ></img>
                      </a>
                    </div>
                    <div className="footer-tittle">
                      <div className="footer-pera" id="location_mail_phone">
                        <svg
                          alt="Our Location"
                          id="location"
                          width={35}
                          height={35}
                          className="fs-2"
                          viewBox="0 0 24 24"
                          // xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.06 4.86a8.4 8.4 0 0 1 11.88 11.88L12 22.68l-5.94-5.94a8.4 8.4 0 0 1 0-11.88ZM12 13.2a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <p>
                          Lyallpur Fashion Head Office
                          <br />
                          First Floor, Tata Market, Sitara Laal plaza,
                          Faisalabad.
                        </p>
                      </div>
                      <div className="footer-pera" id="location_mail_phone">
                        <svg
                          alt="Contact on Mail"
                          id="mail"
                          width={35}
                          height={35}
                          className="fs-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M2.404 7.06 12 11.859l9.596-4.797A2.4 2.4 0 0 0 19.2 4.8H4.8a2.4 2.4 0 0 0-2.396 2.26Z"></path>
                          <path d="m21.6 9.742-9.6 4.8-9.6-4.8V16.8a2.4 2.4 0 0 0 2.4 2.4h14.4a2.4 2.4 0 0 0 2.4-2.4V9.742Z"></path>
                        </svg>
                        <a href="mailto:lyallpurfashionofficial@gmail.com">
                          lyallpurfashionofficial@gmail.com
                        </a>
                      </div>
                      <div className="footer-pera" id="location_mail_phone">
                        <svg
                          alt="Contact on Phone"
                          id="phone"
                          width={28}
                          height={28}
                          className="fs-2"
                          viewBox="0 0 24 24"
                          // xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.4 3.6a1.2 1.2 0 0 1 1.2-1.2h2.584a1.2 1.2 0 0 1 1.183 1.003l.888 5.322a1.2 1.2 0 0 1-.648 1.272l-1.858.928a13.244 13.244 0 0 0 7.326 7.326l.929-1.858a1.2 1.2 0 0 1 1.27-.648l5.323.888a1.2 1.2 0 0 1 1.003 1.183V20.4a1.2 1.2 0 0 1-1.2 1.2H18C9.384 21.6 2.4 14.616 2.4 6V3.6Z"></path>
                        </svg>
                        <p>+92 3113134555</p>
                      </div>
                    </div>
                    <div id="social-icons">
                      <a
                        href="https://www.facebook.com/lyallpurfashionofficial/"
                        target={"blank"}
                      >
                        <svg
                          cursor={"pointer"}
                          alt="Follow on Facebook"
                          id="fbook"
                          width={35}
                          height={35}
                          className="fs-2"
                          fill="/8b8989"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M22.08 12.539c0-5.335-4.298-9.66-9.6-9.66-5.304.001-9.602 4.325-9.602 9.661 0 4.82 3.511 8.817 8.1 9.541v-6.75H8.542v-2.79h2.438v-2.13c0-2.421 1.434-3.758 3.627-3.758 1.05 0 2.149.188 2.149.188v2.376h-1.21c-1.192 0-1.564.745-1.564 1.51v1.812h2.661l-.425 2.791H13.98v6.75c4.59-.725 8.1-4.72 8.1-9.541Z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/lyallpurfashion.pk/"
                        target={"blank"}
                      >
                        <svg
                          cursor={"pointer"}
                          alt="Follow on Instagram"
                          id="insta"
                          width={35}
                          height={35}
                          className="fs-2"
                          fill="/8b8989"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.793.217-2.429.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.635-.416 1.362-.465 2.425C2.013 8.944 2 9.284 2 12.001c0 2.715.013 3.055.06 4.121.05 1.066.217 1.792.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.88 4.88 0 0 0 1.77 1.154c.637.247 1.362.416 2.427.465 1.068.047 1.408.06 4.124.06 2.716 0 3.055-.012 4.122-.06 1.064-.05 1.793-.218 2.43-.465a4.893 4.893 0 0 0 1.77-1.154 4.91 4.91 0 0 0 1.153-1.771c.246-.636.415-1.363.465-2.428.047-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.124c-.05-1.064-.219-1.791-.465-2.426a4.907 4.907 0 0 0-1.154-1.771 4.888 4.888 0 0 0-1.771-1.154c-.637-.248-1.365-.416-2.429-.465-1.067-.047-1.406-.06-4.123-.06H12Zm-.896 1.803H12c2.67 0 2.987.008 4.04.057.975.044 1.505.208 1.858.344.466.181.8.399 1.15.748.35.35.566.683.747 1.15.138.352.3.882.344 1.857.049 1.053.059 1.37.059 4.039 0 2.668-.01 2.986-.059 4.04-.044.974-.207 1.503-.344 1.856a3.09 3.09 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.35.137-.88.3-1.857.345-1.053.047-1.37.059-4.04.059s-2.987-.011-4.041-.059c-.975-.045-1.504-.208-1.856-.345a3.097 3.097 0 0 1-1.15-.747 3.1 3.1 0 0 1-.75-1.15c-.136-.352-.3-.882-.344-1.857-.047-1.054-.057-1.37-.057-4.041 0-2.67.01-2.985.057-4.039.045-.975.208-1.505.345-1.857.181-.466.399-.8.749-1.15a3.09 3.09 0 0 1 1.15-.748c.352-.137.881-.3 1.856-.345.923-.042 1.28-.055 3.144-.056v.003Zm6.235 1.66a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 6.865a5.136 5.136 0 1 0-.16 10.272A5.136 5.136 0 0 0 12 6.865Zm0 1.801a3.334 3.334 0 1 1 0 6.668 3.334 3.334 0 0 1 0-6.668Z" />
                        </svg>
                      </a>
                      {/* <a href="https://www.youtube.com/------" target={"blank"}>
                        <svg
                          cursor={"pointer"}
                          alt="Subscribe on Youtube"
                          id="ytube"
                          width={35}
                          height={35}
                          className="fs-2"
                          fill="/8b8989"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.062 5.28h.106c.987.003 5.985.039 7.332.401a2.411 2.411 0 0 1 1.698 1.704c.122.456.207 1.06.264 1.683l.012.125.027.312.01.124a38.66 38.66 0 0 1 .088 2.349v.09a38.42 38.42 0 0 1-.098 2.472l-.01.126-.01.124c-.06.687-.15 1.369-.283 1.87a2.407 2.407 0 0 1-1.698 1.704c-1.392.374-6.682.4-7.416.402h-.17c-.37 0-1.904-.007-3.512-.062l-.204-.008-.105-.004-.205-.009-.205-.008c-1.332-.059-2.6-.154-3.185-.312A2.408 2.408 0 0 1 2.8 16.66c-.133-.5-.222-1.183-.282-1.87l-.01-.125-.01-.125a37.683 37.683 0 0 1-.098-2.443v-.148c.003-.258.012-1.15.077-2.134l.009-.123.003-.063.01-.124.026-.313.012-.124c.058-.623.143-1.228.264-1.683A2.408 2.408 0 0 1 4.5 5.681c.585-.156 1.853-.252 3.185-.312l.204-.008.206-.007.104-.004.205-.008c1.142-.037 2.284-.057 3.427-.061h.232v-.002ZM10.08 9.13v5.782l4.989-2.89L10.08 9.13Z" />
                        </svg>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h5>CUSTOMER CARE</h5>
                    <ul>
                      <li>
                        <Link>Exchanges &amp; Returns</Link>
                      </li>
                      <li>
                        <Link>FAQs</Link>
                      </li>
                      <li>
                        <Link>Contact Us</Link>
                      </li>
                      <li>
                        <Link>Payments</Link>
                      </li>
                      <li>
                        <Link>Track Your Order</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h5>INFORMATION</h5>
                    <ul>
                      <li>
                        <Link to="/aboutus">About Us</Link>
                      </li>
                      <li>
                        <Link>Privacy Policy</Link>
                      </li>
                      <li>
                        <Link>Store Locator</Link>
                      </li>
                      <li>
                        <Link>Fabric Glossary</Link>
                      </li>
                      <li>
                        <Link>Blog</Link>
                      </li>
                    </ul>
                    <WhatsAppIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
