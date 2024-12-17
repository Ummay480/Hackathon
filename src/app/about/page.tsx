import Navbar from "@/components/Navbar2";
import HeroBanner from "@/components/HeroBanner";
import Promises from "@/components/Promises";
import Image from "next/image";


const AboutPage = () => {
    return (
        <div>
          <Navbar />
          <HeroBanner title="About Us" />

      {/* Mission Section */}
      <section className="mb-16 px-14 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/image-40.jpg"
            alt="Mission"
            className="rounded-lg"
            width={600}
            height={400}
            layout="responsive"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to deliver high-quality, handcrafted, and unique
              products that bring joy and inspiration to our customers&apos;` lives.
              With a commitment to innovation and sustainability, we aim to
              create designs that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16 px-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-bold text-gray-700 mb-2">Innovation</h3>
            <p className="text-gray-600">
              We prioritize creativity and embrace fresh ideas to craft
              outstanding products.
            </p>
          </div>
          <div className="text-center p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-bold text-gray-700 mb-2">Quality</h3>
            <p className="text-gray-600">
              Delivering exceptional quality is at the heart of everything we
              do.
            </p>
          </div>
          <div className="text-center p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-bold text-gray-700 mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We are committed to ethical practices and reducing our
              environmental footprint.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16 px-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "John Johnson", role: "Founder & CEO", img: "/images/image-49.jpg" },
            { name: "Mark Smith", role: "Creative Director", img: "/images/image-48.jpg" },
            { name: "Emily Davis", role: "Marketing Head", img: "/images/image-50.jpg" },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.img}
                alt={member.name}
                className="rounded-full object-cover mx-auto"
                width={150}
                height={150}
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8 px-8">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Alex Brown",
              feedback:
                "Absolutely love the craftsmanship and attention to detail. Highly recommended!",
              img: "/images/testimonial1.jpg",
            },
            {
              name: "Jessica Lee",
              feedback:
                "The products are unique and of excellent quality. Customer service was fantastic!",
              img: "/images/testimonial2.jpg",
            },
          ].map((testimonial, index) => (
            <div key={index} className="flex items-center gap-4 bg-white shadow p-6 rounded-lg">
              <Image
                src={testimonial.img}
                alt={testimonial.name}
                className="rounded-full object-cover"
                width={60}
                height={60}
              />
              <div>
                <p className="text-gray-800 font-medium">{testimonial.feedback}</p>
                <span className="text-sm text-gray-500">- {testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Promises/>
    </div>
  );
};

export default AboutPage;
