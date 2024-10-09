import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Users, TrendingUp, BarChart, Target, Zap, DollarSign, ShieldCheck, PieChart } from 'lucide-react';

const MerchantLandingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">Promorang: Boost Your Brand with Authentic Engagement</h1>
            <p className="text-xl mb-4">For Merchants: Drive Real Engagement, Amplify Your Brand</p>
            <p className="text-lg mb-8">
              Your brand's success depends on genuine social media engagement. Promorang connects your business with 
              influencers and social media users who are passionate about your product and ready to amplify your message. 
              Whether you're looking to increase visibility, drive conversions, or create authentic user-generated content, 
              Promorang makes it easy to launch campaigns and track success in real-time.
            </p>
          </div>
          <div>
            <img src="https://i0.wp.com/landing.promorang.co/wp-content/uploads/2021/06/Business20Owner20User20Image.jpg?w=501&ssl=1" alt="Business owner using Promorang" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Why Promorang for Merchants?</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center">
              <ShieldCheck className="mr-2 text-primary-500" size={28} />
              Authentic, Actionable Engagement
            </h3>
            <p className="text-lg">
              Promorang isn't about bots or fake likes. We connect you with real people—social media users and 
              influencers—who care about your brand and engage authentically. Whether it's a simple like, share, 
              or a detailed review, Promorang ensures that your message reaches your target audience.
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <Users className="mr-2 mt-1 text-primary-500 flex-shrink-0" size={20} />
                <span>Real Users, Real Results: Our network of verified users engages with your content organically.</span>
              </li>
              <li className="flex items-start">
                <Target className="mr-2 mt-1 text-primary-500 flex-shrink-0" size={20} />
                <span>Customizable Tasks: Set up tasks that align with your campaign goals—from likes and shares to content creation.</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="mr-2 mt-1 text-primary-500 flex-shrink-0" size={20} />
                <span>Boost Brand Credibility: Promorang's influencers and users create genuine buzz around your brand, building trust and social proof.</span>
              </li>
            </ul>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/4353614/pexels-photo-4353614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Social media engagement" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" alt="Campaign creation" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center">
              <Zap className="mr-2 text-primary-500" size={28} />
              Easy Campaign Creation
            </h3>
            <p className="text-lg">
              Running a social media campaign doesn't have to be complicated. With Promorang, you can launch a 
              campaign in minutes. Choose from a variety of task options that suit your goals, set your engagement 
              targets, and track progress through our analytics dashboard.
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <Globe className="mr-2 mt-1 text-primary-500 flex-shrink-0" size={20} />
                <span>Simple Task Setup: Choose tasks like liking, sharing, commenting, or content creation.</span>
              </li>
              <li className="flex items-start">
                <Users className="mr-2 mt-1 text-primary-500 flex-shrink-0" size={20} />
                <span>Targeted Campaigns: Define your audience by interests, location, and demographics to ensure your message reaches the right people.</span>
              </li>
              <li className="flex items-start">
                <Target className="mr-2 mt-1 text-primary-500 flex-shrink-0" size={20} />
                <span>Set Engagement Goals: Whether you want 100 likes or 500 shares, Promorang helps you meet your specific engagement targets.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-8">How Promorang Works for Merchants</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="bg-primary-100 rounded-full p-4 inline-block mb-4">
              <Users className="text-primary-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
            <p>Create your account and set up your merchant profile in minutes.</p>
          </div>
          <div>
            <div className="bg-primary-100 rounded-full p-4 inline-block mb-4">
              <Target className="text-primary-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Create Your Campaign</h3>
            <p>Choose engagement types and set your goals for hyper-relevant campaigns.</p>
          </div>
          <div>
            <div className="bg-primary-100 rounded-full p-4 inline-block mb-4">
              <BarChart className="text-primary-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Track Results</h3>
            <p>Monitor real-time progress and engagement across social media platforms.</p>
          </div>
          <div>
            <div className="bg-primary-100 rounded-full p-4 inline-block mb-4">
              <TrendingUp className="text-primary-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Grow Your Brand</h3>
            <p>Boost visibility and turn followers into loyal customers.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-8">Start Boosting Your Brand Today!</h2>
        <p className="text-xl mb-8">Ready to take your social media engagement to the next level? Sign up with Promorang and start creating campaigns that drive real results.</p>
        <Link to="/merchant-signup" className="btn-primary text-lg px-8 py-3">
          Create Your Campaign Now
        </Link>
      </div>
    </div>
  );
};

export default MerchantLandingPage;