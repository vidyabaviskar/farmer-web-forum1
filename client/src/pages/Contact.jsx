import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

export function Contact() {
  return (
    <section id="contact" className="px-8 py-8 lg:py-16 bg-white">
      <div className="container mx-auto text-center">
        <Typography
          variant="h5"
          className="mb-4 !text-base lg:!text-2xl text-green-700"
        >
          Customer Care
        </Typography>
        <Typography
          variant="h1"
          className="mb-4 !text-3xl lg:!text-5xl text-green-900 font-bold"
        >
          We&apos;re Here to Help
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl text-gray-700">
          Whether it&apos;s a question about our services, a request for
          technical assistance, or suggestions for improvement, our team is
          eager to hear from you.
        </Typography>

        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-center justify-center">
          {/* Google Map Embed for Jalgaon */}
          <iframe
            title="Jalgaon Location"
            className="w-full h-[400px] rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.198524697484!2d75.56197257485848!3d20.99739375718026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90c7694c935e1%3A0xb6cb88a65f43219e!2sJalgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Contact Form */}
          <form className="flex flex-col gap-4 lg:max-w-sm text-left ">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-green-900 font-medium"
                >
                  First Name
                </Typography>
                <Input
                  color="green"
                  size="lg"
                  placeholder="First Name"
                  name="first-name"
                  containerProps={{ className: "min-w-full" }}
                  className="focus:border-green-700  min-h-[40px]"
                  labelProps={{ className: "hidden" }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-green-900 font-medium"
                >
                  Last Name
                </Typography>
                <Input
                  color="green"
                  size="lg"
                  placeholder="Last Name"
                  name="last-name"
                  containerProps={{ className: "min-w-full" }}
                  className="focus:border-green-700 min-h-[40px]"
                  labelProps={{ className: "hidden" }}
                />
              </div>
            </div>

            <div>
              <Typography
                variant="small"
                className="mb-2 text-green-900 font-medium"
              >
                Your Email
              </Typography>
              <Input
                color="green"
                size="lg"
                placeholder="name@email.com"
                name="email"
                containerProps={{ className: "min-w-full" }}
                className="focus:border-green-700 min-h-[40px]"
                labelProps={{ className: "hidden" }}
              />
            </div>

            <div>
              <Typography
                variant="small"
                className="mb-2 text-green-900 font-medium"
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="green"
                placeholder="Message"
                name="message"
                className="focus:border-green-700 min-h-[40px]"
                containerProps={{ className: "min-w-full" }}
                labelProps={{ className: "hidden" }}
              />
            </div>

            <Button className="min-w-[150px] h-[60px] mt-[10px] text-white font-semibold bg-green-900 rounded-full text-[19px] hover:bg-green-100 hover:text-green-900 transition-all flex items-center justify-center gap-2">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
