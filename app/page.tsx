"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Atomic Habits",
      subtitle: "Tiny Changes, Remarkable Results",
      author: "Based on the book by James Clear",
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      type: "title",
    },
    {
      title: "Introduction – The Power of Habits",
      content: [
        "Habits drive every outcome",
        "New Year, new opportunities",
        "Resolutions vs. sustainable systems",
      ],
      image:
        "https://images.unsplash.com/photo-1506485338023-6ce5f36692df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      smalImage: "https://i.imgur.com/A79LhU0.png",
    },
    {
      title: "Measuring Progress – You Are a Lagging Measure",
      content: [
        "Your outcomes are the sum of your habits",
        "Incremental improvements compound",
        "1% daily change creates dramatic growth",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      smalImage: "https://i.imgur.com/1ZJUTiP.png",
    },
    {
      title: "Working Backwards – From Ideal Goals to Daily Actions",
      content: [
        "Visualize your ideal outcome",
        "Break big goals into tiny, actionable steps",
        "Every action is a necessary building block",
      ],
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      smalImage:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    },
    {
      title: 'Identity Transformation – "You Are What You Repeatedly Do"',
      content: [
        "Habits shape your self-image",
        "Every repeated action reinforces who you are",
        "Transform your identity through consistent practice",
      ],
      image:
        "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      smalImage: "https://i.imgur.com/h4xZPjj.png",
    },
    {
      title: "The 4 Laws – Making Habits Stick",
      content: [
        "Four principles: Obvious, Attractive, Easy, Satisfying",
        "Use tools like habit trackers to reinforce change",
        "Shape your environment to trigger positive habits",
        "Lee Robins reserach about heroin addiction",
        "Typically, 90 percent of heroin users become readdicted once they return home from rehab",
      ],
      image:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      smalImage: "https://i.imgur.com/vljQetp.png",
    },
    {
      title: "Overcoming Setbacks – Bounce Back and Stay Consistent",
      content: [
        "Setbacks are a natural part of change",
        "Resilience: Learn, adjust, and continue",
        "Use reflective tools to identify patterns",
      ],
      image:
        "https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    },
    {
      title: "Breaking Bad Habits & Taking Action",
      content: [
        "Identify and disrupt negative triggers",
        "Japanese railway particular habit - Pointing-and-Calling",
        "Pointing-and-Calling reduces errors by up to 85 percent and cuts accidents by 30 percent.",
        "Replace bad habits with positive alternatives",
        "Transformation starts with decisive action",
      ],
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      smalImage: "https://i.imgur.com/ukG0Evb.png",
    },
    {
      title: "Thank You For Your Attention",
      content: [
        "Presented by Błażej Batko",
        "Any questions?",
        "Start your habit transformation today",
        "https://www.youtube.com/watch?v=PZ7lDrwYdZc&t=477s",
        "https://www.empik.com/atomic-habits-clear-james,p1148352716,ksiazka-p",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      type: "thank-you",
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    nextSlide();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevSlide();
  };

  // Render different slide types
  const renderSlideContent = () => {
    const slide = slides[currentSlide];

    if (slide.type === "title") {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center text-center h-full"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-7xl font-bold mb-6 bg-black/30 backdrop-blur-sm px-8 py-4 rounded-lg text-white shadow-lg"
          >
            {slide.title}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-4xl font-medium mb-12 text-emerald-300 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg"
          >
            {slide.subtitle}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-2xl text-white/90 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg"
          >
            {slide.author}
          </motion.div>
        </motion.div>
      );
    } else if (slide.type === "thank-you") {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl font-bold mb-8 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-lg text-white shadow-lg"
          >
            {slide.content[0]}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="text-4xl font-medium mb-12 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-lg text-white shadow-lg"
          >
            {slide.content[1]}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-2xl text-emerald-300 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg"
          >
            {slide.content[2]}
          </motion.div>
        </motion.div>
      );
    } else {
      return (
        <div className="flex gap-10">
          <ul className="space-y-10">
            {slide.content.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                className="flex items-start gap-5 text-3xl  font-medium"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-xl font-bold shadow-lg">
                  {index + 1}
                </span>
                <span className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg text-white shadow-lg">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
          {slide.smalImage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative translate-x-10 w-[40vw]"
            >
              <img
                src={slide?.smalImage || ""}
                alt={slide.title}
                className="rounded-lg h-auto"
              />
            </motion.div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-emerald-500 blur-3xl"></div>
          <div className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-teal-500 blur-3xl"></div>
          <div className="absolute bottom-[15%] left-[20%] w-80 h-80 rounded-full bg-green-500 blur-3xl"></div>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm text-white">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Keyboard navigation hint */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm text-white">
        Use ← → keys to navigate
      </div>

      {/* Main content */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt={slides[currentSlide].title}
              fill
              style={{ objectFit: "cover" }}
              priority
              className="opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 to-transparent"></div>
          </div>

          <div className="w-full max-w-[1400px] h-full flex flex-col justify-center p-12 z-10 relative">
            {/* Only show slide number and title for non-special slides */}
            {!slides[currentSlide].type && (
              <div className="mb-8">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-medium mb-2 text-emerald-300"
                >
                  Slide {currentSlide + 1}
                </motion.h2>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl font-bold text-white bg-black/30 backdrop-blur-sm px-6 py-3 rounded-lg inline-block shadow-lg"
                >
                  {slides[currentSlide].title}
                </motion.h1>
              </div>
            )}

            <div className="flex-1 flex flex-col justify-center">
              {renderSlideContent()}
            </div>

            {/* Visual element for each slide - only for non-special slides */}
            {!slides[currentSlide].type && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute right-12 bottom-12 pointer-events-none"
              >
                <div
                  className="text-white/20"
                  style={{ fontSize: "240px", lineHeight: 1 }}
                >
                  {currentSlide + 1}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-10">
        <Button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          variant="outline"
          size="icon"
          className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}

        <Button
          onClick={handleNext}
          disabled={currentSlide === slides.length - 1}
          variant="outline"
          size="icon"
          className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
