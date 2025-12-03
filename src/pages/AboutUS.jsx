import React from "react";

export default function AboutUS() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <img
          src="https://i.ibb.co.com/WW0syBbn/sub-banner-1.jpg"
          alt="Toytopia Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-[#1096B5] drop-shadow-lg">
          About Toytopia
        </h1>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to Toytopia
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Toytopia is your magical world of toys — where imagination meets
            fun! We provide premium-quality toys for kids of all ages,
            ensuring happiness, creativity, and development.
          </p>
          <p className="text-lg leading-relaxed">
            Whether it's action figures, dolls, creative puzzles, outdoor
            playsets, or electronic gadgets — Toytopia has something special
            for every child.
          </p>
        </div>

        <div>
          <img
            src="https://i.ibb.co.com/mVcNfwBg/cms-banner-1.jpg"
            alt="About Toytopia"
            className="rounded-3xl shadow-xl w-full"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white px-6 md:px-20 grid md:grid-cols-2 gap-10">
        <div className="p-8 rounded-3xl shadow-xl bg-blue-50 border border-blue-100">
          <h3 className="text-2xl font-bold mb-3 text-blue-700">Our Mission</h3>
          <p className="text-lg">
            To inspire creativity and spark imagination in children through
            safe, fun, and innovative toys.
          </p>
        </div>

        <div className="p-8 rounded-3xl shadow-xl bg-pink-50 border border-pink-100">
          <h3 className="text-2xl font-bold mb-3 text-pink-700">Our Vision</h3>
          <p className="text-lg">
            To become the world’s most trusted and loved toy brand, making
            every childhood joyful.
          </p>
        </div>
      </section>

      {/* Team Section */}
     {/* Team Section */}
<section className="py-16 px-6 md:px-20 text-center">
  <h2 className="text-4xl font-bold mb-10">Meet Our Team</h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">

    {/* Member 1 */}
    <div className="p-6 bg-white shadow-md rounded-2xl border hover:shadow-xl transition-all">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Team Member"
        className="w-full h-52 object-cover rounded-xl mb-4"
      />
      <h4 className="text-xl font-bold">Sophia Carter</h4>
      <p className="text-gray-600">Toy Designer</p>
    </div>

    {/* Member 2 */}
    <div className="p-6 bg-white shadow-md rounded-2xl border hover:shadow-xl transition-all">
      <img
        src="https://randomuser.me/api/portraits/men/36.jpg"
        alt="Team Member"
        className="w-full h-52 object-cover rounded-xl mb-4"
      />
      <h4 className="text-xl font-bold">Ethan Johnson</h4>
      <p className="text-gray-600">Product Manager</p>
    </div>

    {/* Member 3 */}
    <div className="p-6 bg-white shadow-md rounded-2xl border hover:shadow-xl transition-all">
      <img
        src="https://randomuser.me/api/portraits/women/68.jpg"
        alt="Team Member"
        className="w-full h-52 object-cover rounded-xl mb-4"
      />
      <h4 className="text-xl font-bold">Ava Mitchell</h4>
      <p className="text-gray-600">Marketing Specialist</p>
    </div>

    {/* Member 4 */}
    <div className="p-6 bg-white shadow-md rounded-2xl border hover:shadow-xl transition-all">
      <img
        src="https://randomuser.me/api/portraits/men/52.jpg"
        alt="Team Member"
        className="w-full h-52 object-cover rounded-xl mb-4"
      />
      <h4 className="text-xl font-bold">Liam Anderson</h4>
      <p className="text-gray-600">Sales Lead</p>
    </div>

  </div>
</section>


      {/* Blog Section */}
     {/* Blog Section */}
<section className="py-16 bg-white px-6 md:px-20">
  <h2 className="text-4xl font-bold text-center mb-10">Latest Blogs</h2>

  <div className="grid md:grid-cols-3 gap-10">

    {/* Blog 1 */}
    <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-xl transition-all">
      <img
        src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg"
        alt="Kids Toy Fun"
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-bold mb-2">Top 10 Toys That Kids Love</h3>
      <p className="text-gray-700 mb-3">
        A list of the most trending toys this year that boost creativity and fun.
      </p>
      <button className="text-blue-600 font-semibold hover:underline">
        Read More →
      </button>
    </div>

    {/* Blog 2 */}
    <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-xl transition-all">
      <img
        src="https://i.ibb.co.com/XrBL7nsk/ff.webp"
        alt="Educational Toys"
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-bold mb-2">Educational Toys for Smart Learning</h3>
      <p className="text-gray-700 mb-3">
        Explore toys designed to improve learning skills in a fun way.
      </p>
      <button className="text-blue-600 font-semibold hover:underline">
        Read More →
      </button>
    </div>

    {/* Blog 3 */}
    <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-xl transition-all">
      <img
        src="https://images.pexels.com/photos/3661350/pexels-photo-3661350.jpeg"
        alt="Toy Safety"
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-bold mb-2">How to Choose Safe Toys for Kids</h3>
      <p className="text-gray-700 mb-3">
        Safety is important! Learn how to select safe and durable toys for children.
      </p>
      <button className="text-blue-600 font-semibold hover:underline">
        Read More →
      </button>
    </div>

  </div>
</section>


      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-400 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Have Questions?</h2>
        <p className="text-lg mb-6">
          We’re always here to help you choose the perfect toy!
        </p>

        <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-gray-200 transition-all">
          Contact Us
        </button>
      </section>
    </div>
  );
}
