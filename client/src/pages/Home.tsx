import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Instagram, 
  TrendingUp, 
  Users, 
  Zap, 
  Camera, 
  Megaphone, 
  BarChart3, 
  Heart, 
  Star,
  ArrowRight,
  Send
} from "lucide-react";
import { useState } from "react";

/**
 * DESIGN SYSTEM: Luxury Digital Minimalism with Social Velocity
 * - Deep black background with pure white text
 * - Electric blue (#00d4ff) and warm gold (#c9a961) accents
 * - Space Grotesk headlines, Inter body text
 * - Asymmetric layouts, kinetic animations
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", business: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663493875029/aAJCd9LvCqXKDsJxvnQwiJ/hero-background-8XThvsBbEbzzsDNWkKzJTj.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6 inline-block">
              <span className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest">
                🎬 Port Harcourt's #1 Media Brand
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Reach <span className="text-[#00d4ff]">100K+</span> Engaged Followers
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Promote your business, events, restaurants, and trends to Port Harcourt's most engaged community. We turn your brand into a movement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
                Start Your Campaign <ArrowRight size={20} />
              </a>
              <a href="#services" className="btn-secondary flex items-center justify-center gap-2">
                View Our Services
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-4">Trusted by leading brands in Port Harcourt</p>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#c9a961] text-[#c9a961]" />
                ))}
                <span className="text-sm text-gray-300 ml-2">Rated 5/5 by 50+ clients</span>
              </div>
            </div>
          </div>

          {/* Right: Social Proof Image */}
          <div className="animate-fade-in-scale hidden lg:block">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493875029/aAJCd9LvCqXKDsJxvnQwiJ/social-proof-hero-C6AsLkygLx9Cva3w3xhskJ.webp"
              alt="Port Harcourt In Pictures Social Media Feed"
              className="w-full rounded-xl shadow-2xl shadow-[#00d4ff]/20"
            />
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Numbers Don't Lie
            </h2>
            <p className="text-gray-400 text-lg">
              Real impact, real engagement, real results for your brand
            </p>
          </div>

          {/* Stats Grid - Staggered */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, number: "100K+", label: "Active Followers", delay: 1 },
              { icon: TrendingUp, number: "2.5M+", label: "Monthly Reach", delay: 2 },
              { icon: Heart, number: "5K+", label: "Daily Engagement", delay: 3 },
              { icon: BarChart3, number: "500+", label: "Successful Campaigns", delay: 4 }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx}
                  className={`animate-stagger-${stat.delay} group`}
                >
                  <Card className="bg-[#1a1a1a] border-[#333333] hover:border-[#00d4ff] transition-all duration-300 p-8 text-center cursor-pointer hover:shadow-lg hover:shadow-[#00d4ff]/20">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-[#00d4ff]/10 rounded-lg group-hover:bg-[#00d4ff]/20 transition-colors">
                        <Icon className="text-[#00d4ff]" size={32} />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-[#00d4ff] mb-2">
                      {stat.number}
                    </h3>
                    <p className="text-gray-400">{stat.label}</p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section id="services" className="py-20 bg-[#0a0a0a]">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-gray-400 text-lg">
              Comprehensive solutions to amplify your brand's voice
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "Content Creation",
                description: "High-quality photography and videography that captures your brand's essence and resonates with our engaged audience.",
                delay: 1
              },
              {
                icon: Megaphone,
                title: "Brand Promotion",
                description: "Strategic campaigns designed to showcase your business, events, and offerings to thousands of potential customers.",
                delay: 2
              },
              {
                icon: TrendingUp,
                title: "Growth Strategy",
                description: "Data-driven approaches to maximize engagement, reach, and conversion for sustainable business growth.",
                delay: 3
              },
              {
                icon: BarChart3,
                title: "Analytics & Reporting",
                description: "Detailed insights into campaign performance, audience demographics, and ROI metrics that matter to your business.",
                delay: 4
              },
              {
                icon: Users,
                title: "Community Management",
                description: "Active engagement with your audience, building loyalty and fostering meaningful connections with potential clients.",
                delay: 5
              },
              {
                icon: Zap,
                title: "Influencer Partnerships",
                description: "Connect with Port Harcourt's top influencers and content creators to amplify your brand's message authentically.",
                delay: 6
              }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx}
                  className={`animate-stagger-${service.delay}`}
                >
                  <Card className="bg-[#1a1a1a] border-[#333333] hover:border-[#c9a961] transition-all duration-300 p-8 group hover:shadow-lg hover:shadow-[#c9a961]/20">
                    <div className="mb-4 inline-block p-3 bg-[#c9a961]/10 rounded-lg group-hover:bg-[#c9a961]/20 transition-colors">
                      <Icon className="text-[#c9a961]" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#c9a961] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Phone Mockup */}
            <div className="animate-fade-in-scale">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493875029/aAJCd9LvCqXKDsJxvnQwiJ/phone-mockup-showcase-PzzBkzpLbVsyKqbUKESAkZ.webp"
                alt="Port Harcourt In Pictures App Mockup"
                className="w-full max-w-md mx-auto"
              />
            </div>

            {/* Right: Why Choose Us Content */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why Choose <span className="text-[#00d4ff]">Us?</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Heart,
                    title: "Local Expertise",
                    description: "We know Port Harcourt because we ARE Port Harcourt. Deep understanding of our city's culture and trends."
                  },
                  {
                    icon: Camera,
                    title: "Premium Content",
                    description: "High-quality visuals that capture the beauty, energy, and stories of our city and your brand."
                  },
                  {
                    icon: TrendingUp,
                    title: "Proven Reach",
                    description: "A growing community with strong engagement and loyal followers ready to support your business."
                  },
                  {
                    icon: Users,
                    title: "Brand Partnerships",
                    description: "Trusted by top brands to deliver results that matter and campaigns that convert."
                  }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#00d4ff]/10">
                          <Icon className="text-[#00d4ff]" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PRICING SECTION ========== */}
      <section id="pricing" className="py-20 bg-[#0a0a0a]">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Transparent Pricing
            </h2>
            <p className="text-gray-400 text-lg">
              Flexible packages designed for businesses of all sizes
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "₦50,000",
                period: "/month",
                description: "Perfect for new businesses",
                features: [
                  "2 Posts per week",
                  "Basic content creation",
                  "Monthly analytics report",
                  "Community engagement",
                  "Email support"
                ],
                highlighted: false,
                delay: 1
              },
              {
                name: "Professional",
                price: "₦150,000",
                period: "/month",
                description: "For growing brands",
                features: [
                  "Daily posts & stories",
                  "Premium content creation",
                  "Weekly analytics reports",
                  "Influencer collaborations",
                  "Priority support",
                  "Campaign optimization"
                ],
                highlighted: true,
                delay: 2
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "Let's talk",
                description: "For established brands",
                features: [
                  "Unlimited posts & content",
                  "Full campaign management",
                  "Real-time analytics",
                  "Dedicated account manager",
                  "24/7 priority support",
                  "Custom strategy"
                ],
                highlighted: false,
                delay: 3
              }
            ].map((plan, idx) => (
              <div 
                key={idx}
                className={`animate-stagger-${plan.delay}`}
              >
                <Card className={`border transition-all duration-300 p-8 flex flex-col h-full ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#00d4ff] shadow-lg shadow-[#00d4ff]/30 transform scale-105' 
                    : 'bg-[#1a1a1a] border-[#333333] hover:border-[#c9a961]'
                }`}>
                  {plan.highlighted && (
                    <div className="mb-4 inline-block">
                      <span className="bg-[#00d4ff] text-[#0a0a0a] text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-[#00d4ff]">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>

                  <button className={`mb-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-[#00d4ff] text-[#0a0a0a] hover:shadow-lg hover:shadow-[#00d4ff]/50'
                      : 'border-2 border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-[#0a0a0a]'
                  }`}>
                    Get Started
                  </button>

                  <div className="space-y-3 flex-grow">
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#00d4ff]/20 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-[#00d4ff]"></div>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663493875029/aAJCd9LvCqXKDsJxvnQwiJ/testimonial-bg-Ksvxz3A9PM2RY9rUFvKnL8.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 text-lg">
              Real success stories from businesses we've helped grow
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Chioma Okafor",
                business: "Luxury Restaurant Owner",
                text: "Port Harcourt In Pictures transformed our restaurant's visibility. We went from 500 to 5000+ customers monthly. Absolutely incredible!",
                rating: 5,
                delay: 1
              },
              {
                name: "Tunde Adeyemi",
                business: "Event Organizer",
                text: "Their campaigns for our events are always sold out. The engagement and reach they deliver is unmatched in Port Harcourt.",
                rating: 5,
                delay: 2
              },
              {
                name: "Amina Hassan",
                business: "Fashion Brand Founder",
                text: "Working with them has been a game-changer. Our brand went from local to city-wide recognition. Highly recommended!",
                rating: 5,
                delay: 3
              }
            ].map((testimonial, idx) => (
              <div 
                key={idx}
                className={`animate-stagger-${testimonial.delay}`}
              >
                <Card className="bg-[#1a1a1a]/80 backdrop-blur border-[#333333] p-8 hover:border-[#00d4ff] transition-all duration-300">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#c9a961] text-[#c9a961]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-[#00d4ff]">{testimonial.business}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BOOKING FORM SECTION ========== */}
      <section id="contact" className="py-20 bg-[#0a0a0a]">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Grow Your Brand?
              </h2>
              <p className="text-gray-400 text-lg">
                Let's discuss how we can help you reach Port Harcourt's most engaged audience
              </p>
            </div>

            {/* Booking Form */}
            <Card className="bg-[#1a1a1a] border-[#333333] p-8 md:p-12 animate-fade-in-scale">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                    <Input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="bg-[#2a2a2a] border-[#333333] text-white placeholder-gray-500 focus:border-[#00d4ff]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address *</label>
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="bg-[#2a2a2a] border-[#333333] text-white placeholder-gray-500 focus:border-[#00d4ff]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number</label>
                    <Input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234 XXX XXX XXXX"
                      className="bg-[#2a2a2a] border-[#333333] text-white placeholder-gray-500 focus:border-[#00d4ff]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Business Name *</label>
                    <Input 
                      type="text"
                      name="business"
                      value={formData.business}
                      onChange={handleInputChange}
                      placeholder="Your business name"
                      className="bg-[#2a2a2a] border-[#333333] text-white placeholder-gray-500 focus:border-[#00d4ff]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Tell Us About Your Campaign *</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What are your goals? What's your budget? Any specific ideas?"
                    className="bg-[#2a2a2a] border-[#333333] text-white placeholder-gray-500 focus:border-[#00d4ff] min-h-32"
                    required
                  />
                </div>

                <button 
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3"
                >
                  Send Inquiry <Send size={20} />
                </button>

                <p className="text-center text-sm text-gray-400">
                  We'll get back to you within 24 hours with a personalized proposal
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-[#0a0a0a] border-t border-[#333333] py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Camera className="text-[#00d4ff]" size={24} />
                Port Harcourt In Pictures
              </h3>
              <p className="text-gray-400 text-sm">
                Capturing the culture, celebrating the city, amplifying your brand.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-[#00d4ff] transition-colors">Services</a></li>
                <li><a href="#pricing" className="hover:text-[#00d4ff] transition-colors">Pricing</a></li>
                <li><a href="#contact" className="hover:text-[#00d4ff] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Content Creation</a></li>
                <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Brand Promotion</a></li>
                <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Partnerships</a></li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, label: "Instagram" }
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={idx}
                      href="#"
                      className="p-3 bg-[#1a1a1a] rounded-lg hover:bg-[#00d4ff] hover:text-[#0a0a0a] transition-all duration-300 group"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-[#333333] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2026 Port Harcourt In Pictures. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#00d4ff] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#00d4ff] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
