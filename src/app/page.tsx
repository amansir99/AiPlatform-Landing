'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, Cpu, Zap, Database, Shield, TrendingUp, ArrowRight, CheckCircle, Bot, Code, ChevronLeft, ChevronRight, Star, Users, Rocket, Crown } from 'lucide-react';
import Head from 'next/head';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  accuracy: string;
}

interface Model {
  name: string;
  type: string;
  accuracy: string;
  speed: string;
  useCase: string;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
  color: string;
}

interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
  bgGradient: string;
}

const AIPlatformPage: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const { scrollYProgress } = useScroll();

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  const heroSlides: HeroSlide[] = [
    {
      title: "Intelligence That Transforms Business",
      subtitle: "Artificial Intelligence Platform",
      description: "Harness the power of cutting-edge AI and machine learning to automate processes, gain insights, and accelerate innovation.",
      primaryAction: "Try AI Demo",
      secondaryAction: "View Models",
      bgGradient: "from-slate-50 via-white to-gray-50 dark:from-slate-900 dark:via-background dark:to-gray-900"
    },
    {
      title: "Scale Your Operations with AI",
      subtitle: "Enterprise-Ready Solutions",
      description: "Deploy AI models at scale with our robust infrastructure. Process billions of predictions daily with 99.9% uptime guarantee.",
      primaryAction: "Start Free Trial",
      secondaryAction: "Enterprise Demo",
      bgGradient: "from-gray-50 via-white to-slate-50 dark:from-gray-900 dark:via-background dark:to-slate-900"
    },
    {
      title: "Build Smarter Applications",
      subtitle: "Developer-Friendly APIs",
      description: "Integrate powerful AI capabilities into your applications with our comprehensive SDKs and APIs. Start building in minutes.",
      primaryAction: "Get API Keys",
      secondaryAction: "View Documentation",
      bgGradient: "from-slate-50 via-white to-zinc-50 dark:from-slate-900 dark:via-background dark:to-zinc-900"
    }
  ];

  const pricingPlans: PricingPlan[] = [
    {
      name: "Starter",
      price: "$99",
      description: "Perfect for small teams and startups",
      features: [
        "1,000 API calls per day",
        "5 AI models included",
        "Basic support",
        "99.5% uptime SLA",
        "Community access"
      ],
      icon: <Rocket className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$299",
      description: "Ideal for growing businesses",
      features: [
        "10,000 API calls per day",
        "All AI models included",
        "Priority support",
        "99.9% uptime SLA",
        "Custom integrations",
        "Advanced analytics"
      ],
      icon: <TrendingUp className="w-6 h-6" />,
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited API calls",
        "Custom AI model training",
        "Dedicated support team",
        "99.99% uptime SLA",
        "On-premise deployment",
        "White-label solutions",
        "Custom contracts"
      ],
      icon: <Crown className="w-6 h-6" />,
      color: "from-amber-500 to-orange-500"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const features: Feature[] = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neural Networks",
      description: "Advanced deep learning architectures for complex pattern recognition and decision making.",
      accuracy: "99.2% Accuracy"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Edge Computing",
      description: "Deploy AI models directly on devices for real-time processing without cloud dependency.",
      accuracy: "10ms Latency"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Pipeline",
      description: "Automated data preprocessing and feature engineering for optimal model performance.",
      accuracy: "100TB Processed"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Security",
      description: "Enterprise-grade security with encrypted model training and secure inference.",
      accuracy: "Zero Breaches"
    }
  ];

  const models: Model[] = [
    { name: "GPT-Vision", type: "Multimodal", accuracy: "94.5%", speed: "2.3s", useCase: "Image Analysis" },
    { name: "Predict-X", type: "Time Series", accuracy: "96.8%", speed: "0.8s", useCase: "Forecasting" },
    { name: "Sentiment-AI", type: "NLP", accuracy: "92.3%", speed: "0.5s", useCase: "Text Analysis" },
    { name: "Auto-ML", type: "AutoML", accuracy: "89.7%", speed: "1.2s", useCase: "Classification" }
  ];

  return (
    <>
      <Head>
        <title>AI Platform - Transform Your Business with AI</title>
        <meta name="description" content="Harness the power of cutting-edge AI and machine learning to automate processes, gain insights, and accelerate innovation." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      
      <div className="min-h-screen bg-background">
        {/* Hero Section with Sliding Carousel */}
        <motion.section
          style={{ 
            opacity: heroOpacity, 
            y: heroY
          }}
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].bgGradient}`}
            />
          </AnimatePresence>

          {/* Subtle background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Powered by Advanced AI</span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {heroSlides[currentSlide].title}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl font-medium text-muted-foreground mb-4">
                {heroSlides[currentSlide].subtitle}
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button 
                  size="lg" 
                  className="text-base px-8 py-6 h-auto font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {heroSlides[currentSlide].primaryAction}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base px-8 py-6 h-auto font-semibold border-2 hover:bg-accent transition-all duration-300 hover:scale-105"
                >
                  {heroSlides[currentSlide].secondaryAction}
                </Button>
              </motion.div>
            </motion.div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentSlide === index 
                        ? 'w-8 h-2 bg-primary' 
                        : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Cutting-Edge AI Capabilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Leverage state-of-the-art machine learning models and neural networks
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20">
                    <div className="mb-4 flex justify-center text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <div className="text-sm font-medium text-primary">{feature.accuracy}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Models Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Pre-trained AI Models
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose from our comprehensive collection of optimized AI models
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {models.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card 
                    className={`p-6 cursor-pointer transition-all duration-300 ${
                      selectedModel === index 
                        ? 'ring-2 ring-primary shadow-lg' 
                        : 'hover:shadow-lg hover:-translate-y-1'
                    }`}
                    onClick={() => setSelectedModel(selectedModel === index ? null : index)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{model.name}</h3>
                        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                          {model.type}
                        </span>
                      </div>
                      <Bot className="w-8 h-8 text-primary" />
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{model.useCase}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{model.accuracy}</div>
                        <div className="text-sm text-muted-foreground">Accuracy</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{model.speed}</div>
                        <div className="text-sm text-muted-foreground">Speed</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                View All Models
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the perfect plan for your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className={`relative p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    plan.popular 
                      ? 'ring-2 ring-primary shadow-xl scale-105' 
                      : 'bg-gradient-to-br from-background to-muted/20'
                  }`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${plan.color} text-white mb-4`}>
                        {plan.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold mb-2">
                        {plan.price}
                        {plan.price !== "Custom" && <span className="text-lg text-muted-foreground">/month</span>}
                      </div>
                      <p className="text-muted-foreground">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full py-6 h-auto font-semibold transition-all duration-300 hover:scale-105 ${
                        plan.popular 
                          ? 'bg-primary hover:bg-primary/90 text-white shadow-lg' 
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      {plan.popular ? 'Get Started' : 'Contact Sales'}
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of companies already using our AI platform to drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-base px-8 py-6 h-auto font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <Rocket className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base px-8 py-6 h-auto font-semibold border-2 hover:bg-accent transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Button>
              </div>
              
              <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>10,000+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPlatformPage;