import React from 'react';
import { useForm } from 'react-hook-form';
import type { ContactFormData } from '../types';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const { register, handleSubmit } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:text-center mb-12">
        <h2 className="text-base text-yellow-500 font-semibold tracking-wide uppercase">Contact Us</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Get In Touch
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                {...register('message')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-yellow-500" />
                <span className="ml-3 text-gray-600">Pomadze, Off Winneba-Swedru Road, Winneba, Ghana</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-yellow-500" />
                <span className="ml-3 text-gray-600">0201220888 / 0256039715 / 0269387964</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-yellow-500" />
                <span className="ml-3 text-gray-600">info@buildersavenue.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Location Map</h3>
            <div className="mt-6 aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d-0.6197!3d5.3444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjAnNDAuMCJOIDDCsDM3JzExLjAiVw!5e0!3m2!1sen!2sgh!4v1620000000000!5m2!1sen!2sgh"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}