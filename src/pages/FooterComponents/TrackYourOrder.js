import React from "react";

export default function TrackYourOrder() {
  return (
    <div className="">
      <h1 className="text-center mb-5">Track Your Order</h1>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 col-12 px-0">
            <form action="">
              <p className="text-center">
                <label className="mb-3">Enter Order Number</label>
                <input
                  required="required"
                  type="number"
                  name="Tracking[number]"
                />
              </p>
              <p className="text-center">
                <label className="mb-3 mt-2">Enter Your Email</label>
                <input
                  required="required"
                  type="email"
                  name="Tracking[email]"
                />
              </p>
              <input
                type="submit"
                value="Send"
                className="fw-bold"
                id="messageSubmit"
              />
            </form>
          </div>
          <div className="col-md-2 col-12 px-0">
            <h3 className="text-center mb-0">OR</h3>
          </div>
          <div className="col-md-5 col-12 px-0">
            <form action="">
              <p className="text-center">
                <label className="mb-3">Enter Your CNIC Number</label>
                <input
                  required="required"
                  type="number"
                  name="Tracking[email]"
                />
              </p>
              <input
                type="submit"
                value="Send"
                className="fw-bold"
                id="messageSubmit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
