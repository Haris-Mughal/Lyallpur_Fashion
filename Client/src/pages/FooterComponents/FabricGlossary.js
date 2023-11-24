import React from "react";

export default function FabricGlossary() {
  return (
    <div className="conatiner">
      <div className="row">
        <div className="image-container">
          <h1 className="fabric-title" id="fabric_glossary">
            FABRIC GLOSSARY
          </h1>
        </div>
      </div>
      <p className="text-center p-4 w-100 fs-5">
        Technical terminology can be somewhat daunting, which is why we have
        developed an easy to understand fabric glossary.
        <br />
        Learn more about what went into the making of your favourite looks!{" "}
      </p>
      <div className="container my-6">
        <div className="row">
          <div className="col-12 col-sm-6 px-2">
            <a
              className="w-50 text-decoration-none"
              //   href="https://pk.sapphireonline.pk/pages/woman-fabric-glossary"
              href=""
            >
              <div id="glossayImages">
                {/* <img src="https://cdn.shopify.com/s/files/1/1592/0041/files/FG-woman-tile.jpg?v=1683614912" /> */}
              </div>
              <h5 className="text-center my-3">WOMAN</h5>
            </a>
          </div>
          <div className="col-12 col-sm-6 px-2">
            <a
              className="w-50 text-decoration-none"
              //   href="https://pk.sapphireonline.pk/pages/mens-fabric-glossary"
              href=""
            >
              <div id="glossayImages">
                {/* <img src="https://cdn.shopify.com/s/files/1/1592/0041/files/man-FG.jpg?v=1683615001" /> */}
              </div>
              <h5 className="text-center my-3">MAN</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
