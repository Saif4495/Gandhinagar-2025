"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Shield, Target } from "lucide-react";
import Image from "next/image";

const newsArticles = [
  {
    id: 1,
    title:
      "Amit Shah hails India's bid win to host 2029 World Police and Fire Games",
    excerpt:
      "New state-of-the-art facility provides specialized training for law enforcement athletes preparing for competition.",
    image: "/gallery/news/img1.jpg",
    category: "Announcements",
    icon: Target,
    link: "https://www.tribuneindia.com/news/sports/amit-shah-hails-indias-bid-win-to-host-2029-world-police-and-fire-games-as-global-recognition-of-modi-era-sports-infrastructure/ ",
  },
  {
    id: 2,
    title: "India has won the bid to host the championship ",
    excerpt:
      "Gujarat Chief Minister Bhupendra Patel on Thursday announced that the 2029 World Police & Fire Games (WPFG) will be held in the state.",
    image: "/gallery/news/img2.jpg",
    category: "Announcements",
    icon: Shield,
    link: "https://www.ptinews.com/story/sports/2029-world-police-fire-games-to-be-held-in-gujarat-cm-patel/2678431",
  },
  {
    id: 3,
    title: "India Secures World Police and Fire Games 2029 Bid",
    excerpt:
      "This triumph is a testament to the nation's growing prowess in sports and its commitment to building international ties among law enforcement.",
    image: "/gallery/news/img3.jpg",
    category: "Announcements",
    icon: Target,
    link: "https://www.pib.gov.in/PressReleseDetail.aspx?PRID=2140271",
  },
];

export default function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = [
    "All",
    ...Array.from(new Set(newsArticles.map((article) => article.category))),
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? newsArticles
      : newsArticles.filter((article) => article.category === selectedCategory);

  const handleArticleClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="news"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            LATEST <span className="gradient-text">NEWS</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Stay updated with the latest developments, training programs, and
            announcements from Police Games 2029
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-6"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/20"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredArticle(article.id)}
              onMouseLeave={() => setHoveredArticle(null)}
              onClick={() => handleArticleClick(article.link)}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={256}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Optional subtle overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center space-x-2 glass-effect rounded-full px-3 py-1 border border-white/20">
                  <article.icon className="w-4 h-4 text-white" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: hoveredArticle === article.id ? 1 : 0,
                    scale: hoveredArticle === article.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 bg-slate-900/90 backdrop-blur-sm border-x border-b border-white/10">
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-white/70 leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <motion.div
                  className="flex items-center text-blue-400 font-semibold text-sm"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-glow">
            View All News
          </button>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full border border-blue-400/10"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full border border-cyan-400/10"></div>
      </div>
    </section>
  );
}
