import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";

import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";

const Contact = () => {
  useEffect(() => {
    const map = L.map("bdMap").setView([23.8103, 90.4125], 7);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
    }).addTo(map);

    L.marker([23.8103, 90.4125])
      .addTo(map)
      .bindPopup("Bangladesh")
      .openPopup();

    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider,
      style: "bar",
      autoClose: true,
      showMarker: true,
      marker: {
        icon: L.icon({
          iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
          iconSize: [32, 32],
          iconAnchor: [16, 32],
        }),
      },
    });

    map.addControl(searchControl);

    return () => map.remove();
  }, []);

  return (
    <div className="w-full bg-[#fff]">

      {/* Header Banner */}
      <div className="bg-pink-100 py-10 text-center">
        <h1 className="text-4xl font-bold text-[#1096B5]">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          Get in touch with ToyTopia for any help or support
        </p>
      </div>

      {/* Map + Form Section */}
      <div className="grid md:grid-cols-2 gap-8 px-6 md:px-20 my-10">

        {/* MAP */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Find Us on Map</h2>
          <div
            id="bdMap"
            className="rounded-lg"
            style={{
              width: "100%",
              height: "450px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          ></div>
        </div>

        {/* Contact Form */}
        <div className="p-6 shadow-md rounded-lg border bg-white">
          <h2 className="text-2xl font-semibold mb-3">Get In Touch With Us</h2>
          <p className="text-gray-600 mb-4">
            Please fill out the form below to reach us.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 border rounded-md"
            />
            <textarea
              placeholder="Your message"
              className="w-full p-3 border rounded-md"
              rows="5"
            ></textarea>
            <button className="px-6 py-3 bg-[#1096B5] text-white rounded-lg font-semibold w-full">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="grid md:grid-cols-4 gap-6 px-6 md:px-20 py-10 bg-pink-50 text-center">

        <div className="flex flex-col items-center gap-2">
          <IoLocationSharp className="text-4xl text-[#1096B5]" />
          <h3 className="font-semibold text-lg">Address</h3>
          <p>Dhaka, Bangladesh</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <FaPhoneAlt className="text-4xl text-[#1096B5]" />
          <h3 className="font-semibold text-lg">Call Us</h3>
          <p>+880 1234-567890</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <MdEmail className="text-4xl text-[#1096B5]" />
          <h3 className="font-semibold text-lg">Email</h3>
          <p>info@toytopia.com</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <IoTimeSharp className="text-4xl text-[#1096B5]" />
          <h3 className="font-semibold text-lg">Open Time</h3>
          <p>10:00 AM – 6:00 PM</p>
        </div>
      </div>

      {/* NEWSLETTER SECTION */}
      <div className="bg-[#fff0f7] py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-[#1096B5]">
          Subscribe To Our Newsletter
        </h2>
        <p className="text-gray-600 mt-2 mb-6">
          Subscribe to get updates, discount alerts & new toy arrivals.
        </p>

        <div className="max-w-xl mx-auto flex gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 border rounded-md"
          />
          <button className="px-6 py-3 bg-[#1096B5] text-white rounded-lg font-semibold">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

