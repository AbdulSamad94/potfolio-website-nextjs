"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const reviewsData = [
  {
    avatar:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/6499329eb4677991d6975a9392e8a471-660592091737997960.045662/8D02F39D-05D6-4B1F-A140-48EE55B2EF7E",
    name: "Ronnie Perry",
    job: "Fiverr",
    review:
      "Abdul did an exceptional job on our project. His understanding and ability to meet our company’s project goals were beyond expectations. We feel very comfortable and excited to work with him more in the future.",
    rating: 5,
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Evey Anderson",
    job: "Furniture Designer",
    review:
      "I'm not a tech person, but Abdul made the entire process easy. He explained everything clearly and delivered a clean, fast website for our business. 10/10 experience!",
    rating: 5,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Thomas Richardson",
    job: "Engineer",
    review:
      "Abdul's AI knowledge is way ahead of his age. He helped us prototype an internal automation tool using the OpenAI Agent SDK — super impressive work!",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Client Reviews
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviewsData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100 dark:border-gray-700 h-full flex flex-col"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-orange-200 dark:text-orange-800">
                <Quote size={32} />
              </div>

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-full ring-4 ring-orange-200 dark:ring-orange-700 transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-orange-500 rounded-full p-1">
                    <Star size={12} className="text-white fill-current" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white truncate">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                    {item.job}
                  </p>
                  {/* Star Rating */}
                  <div className="flex gap-1 mt-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-orange-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text - This will expand to fill available space */}
              <div className="flex-1">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                  "{item.review}"
                </p>
              </div>

              {/* Decorative bottom border */}
              <div className="mt-6 pt-4 border-t border-orange-100 dark:border-gray-700">
                <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mx-auto"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional decorative elements */}
      </div>
    </section>
  );
};

export default Reviews;
