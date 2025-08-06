"use client";
import React from "react";
import {
  Heart,
  Users,
  Trophy,
  Target,
  Zap,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      icon: Heart,
      title: "Improve Your Health",
      description:
        "Boost cardiovascular fitness, strengthen muscles, and enhance overall physical and mental well-being through regular running.",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-50",
      hoverColor: "group-hover:bg-red-100",
      iconColor: "text-red-500",
      stats: "87% report better health",
    },
    {
      id: 2,
      icon: Users,
      title: "Build Community",
      description:
        "Connect with like-minded runners, make lasting friendships, and become part of Gandhinagar's vibrant running community.",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      hoverColor: "group-hover:bg-blue-100",
      iconColor: "text-blue-500",
      stats: "2000+ community members",
    },
    {
      id: 3,
      icon: Trophy,
      title: "Achieve Personal Goals",
      description:
        "Challenge yourself, set new personal records, and experience the satisfaction of crossing the finish line.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      hoverColor: "group-hover:bg-yellow-100",
      iconColor: "text-yellow-600",
      stats: "92% achieve their goals",
    },
    {
      id: 4,
      icon: Target,
      title: "Support Local Causes",
      description:
        "Your participation contributes to local charities and community development projects in Gandhinagar.",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      hoverColor: "group-hover:bg-green-100",
      iconColor: "text-green-500",
      stats: "₹50L+ raised for charity",
    },
    {
      id: 5,
      icon: Zap,
      title: "Boost Mental Strength",
      description:
        "Develop resilience, reduce stress, and improve mental clarity through the meditative power of running.",
      color: "from-purple-400 to-indigo-500",
      bgColor: "bg-purple-50",
      hoverColor: "group-hover:bg-purple-100",
      iconColor: "text-purple-500",
      stats: "78% feel more confident",
    },
    {
      id: 6,
      icon: Globe,
      title: "Explore Gandhinagar",
      description:
        "Discover the beauty of our city through carefully curated routes showcasing landmarks and hidden gems.",
      color: "from-teal-400 to-blue-500",
      bgColor: "bg-teal-50",
      hoverColor: "group-hover:bg-teal-100",
      iconColor: "text-teal-500",
      stats: "15+ landmarks covered",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-200 via-red-200 to-yellow-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/patterns/hexagons.svg')] opacity-5"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/40 to-purple-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-200/40 to-teal-200/40 rounded-full blur-3xl"></div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 animate-bounce">
        <Sparkles className="w-6 h-6 text-yellow-400/60" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-pulse">
        <div className="w-4 h-4 bg-blue-400/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-white/40 shadow-lg mb-6">
            <Trophy className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Why Join Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Life Through{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Running
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of runners who have discovered the incredible
            benefits of participating in the Gandhinagar Marathon. Your journey
            to a healthier, happier you starts here.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.id}
                className={`group relative ${benefit.bgColor} ${benefit.hoverColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-white/70 hover:-translate-y-3 cursor-pointer overflow-hidden`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Background Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Floating Background Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-white/30`}
                    >
                      <IconComponent
                        className={`w-8 h-8 ${benefit.iconColor}`}
                      />
                    </div>
                    {/* Icon Glow Effect */}
                    <div
                      className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
                    ></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                    {benefit.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`text-sm font-semibold ${benefit.iconColor} bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/40`}
                    >
                      {benefit.stats}
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 ${benefit.iconColor} opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300`}
                    />
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div
                  className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r ${benefit.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="backdrop-blur-2xl bg-gradient-to-r from-red-900/80 via-orange-900/80 to-pink-900/80 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/patterns/wave.svg')] opacity-10"></div>

          {/* Floating Elements */}
          <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-8 right-8 w-20 h-20 bg-white/5 rounded-full blur-2xl animate-bounce"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">
                Limited Time
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h3>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the Gandhinagar Marathon 2025 and become part of something
              bigger. Early bird registrations are now open with special
              discounts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Register Now
                <Trophy className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>

              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center gap-2">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-center">
              <div className="text-white/90">
                <div className="text-2xl font-bold mb-1">Early Bird</div>
                <div className="text-sm">Save 30% off</div>
              </div>
              <div className="text-white/90">
                <div className="text-2xl font-bold mb-1">Free Kit</div>
                <div className="text-sm">T-shirt & Medal</div>
              </div>
              <div className="text-white/90">
                <div className="text-2xl font-bold mb-1">4 Categories</div>
                <div className="text-sm">All skill levels</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
