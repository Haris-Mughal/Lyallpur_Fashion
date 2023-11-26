import React from "react";

export default function StoreLocation() {
  return (
    <div className="mb-1">
      <h1 className="text-center">Store Location</h1>
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
  );
}
