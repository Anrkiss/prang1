import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Users, TrendingUp, Globe, DollarSign, BarChart2, Zap, CheckCircle } from 'lucide-react';

const GeneralLandingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Promorang: A Platform for Influencers & Brands to Thrive Together</h1>
        <p className="text-xl mb-8">Whether you're an influencer looking to grow your audience or a business seeking genuine engagement, Promorang connects you in a way that's easy, authentic, and rewarding.</p>
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">What Can You Do with Promorang?</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img src="https://images.pexels.com/photos/4353614/pexels-photo-4353614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Influencer using social media" className="w-full h-auto rounded-lg shadow-lg mb-6" />
            <h3 className="text-2xl font-semibold mb-4">1. For Influencers: Earn, Engage, and Grow Your Influence</h3>
            <p className="mb-4">Turn your social media interactions into real rewards. Choose tasks that resonate with your audience, engage authentically with brands you love, and watch your influence grow.</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <DollarSign className="mr-2 mt-1 text-primary-500 flex-shrink-0" />
                <span>Monetize Your Influence: Complete tasks that align with your brand and audience.</span>
              </li>
              <li className="flex items-start">
                <Users className="mr-2 mt-1 text-primary-500 flex-shrink-0" />
                <span>Authentic Partnerships: Work with businesses that match your style and niche.</span>
              </li>
              <li className="flex items-start">
                <BarChart2 className="mr-2 mt-1 text-primary-500 flex-shrink-0" />
                <span>Track Your Progress: Use the dashboard to monitor your earnings and completed tasks.</span>
              </li>
            </ul>
            <Link to="/influencer" className="btn-primary mt-4 inline-block">Learn More for Influencers</Link>
          </div>
          <div>
            <img src="https://i0.wp.com/landing.promorang.co/wp-content/uploads/2021/06/Business20Owner20User20Image.jpg?w=501&ssl=1" alt="Business owner using Promorang" className="w-full h-auto rounded-lg shadow-lg mb-6" />
            <h3 className="text-2xl font-semibold mb-4">2. For Merchants: Drive Real Engagement with Authentic Voices</h3>
            <p className="mb-4">Promorang connects you with influencers and everyday social media users who are ready to amplify your message. Create tasks that promote your brand, engage with your target audience, and boost your social media presence.</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ShoppingBag className="mr-2 mt-1 text-primary-500 flex-shrink-0" />
                <span>Custom Campaigns: Create tasks or work with influencers on custom content.</span>
              </li>
              <li className="flex items-start">
                <Globe className="mr-2 mt-1 text-primary-500 flex-shrink-0" />
                <span>Targeted Engagement: Reach your ideal audience based on interests, location, and demographics.</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="mr-2 mt-1 text-primary-500 flex-shrink-0" />
                <span>Real-Time Analytics: Track engagement metrics, campaign progress, and user insights.</span>
              </li>
            </ul>
            <Link to="/merchant" className="btn-primary mt-4 inline-block">Learn More for Merchants</Link>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">3. Flexible, Transparent Rewards</h3>
        <p className="mb-4">Whether you're earning rewards as an influencer or managing your marketing budget as a business, Promorang keeps everything transparent and easy to manage.</p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <CheckCircle className="mr-2 mt-1 text-primary-500 flex-shrink-0" />
            <span>For Influencers: Cash out your earnings via PayPal or bank transfer, with full transparency on task rewards.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="mr-2 mt-1 text-primary-500 flex-shrink-0" />
            <span>For Merchants: Set your campaign budget, manage payments, and track ROI directly from the dashboard.</span>
          </li>
        </ul>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">How Promorang Works for Everyone</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">For Influencers:</h3>
            <ol className="space-y-2 text-left">
              <li className="flex items-start">
                <span className="mr-2 font-bold">1.</span>
                <span>Sign Up: Link your social media profiles and create your account.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">2.</span>
                <span>Choose Tasks: Browse tasks that fit your audience and start earning rewards.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">3.</span>
                <span>Get Paid: Complete tasks and cash out your rewards through PayPal or direct transfer.</span>
              </li>
            </ol>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">For Merchants:</h3>
            <ol className="space-y-2 text-left">
              <li className="flex items-start">
                <span className="mr-2 font-bold">1.</span>
                <span>Create Campaigns: Set up campaigns that align with your goals.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">2.</span>
                <span>Monitor Performance: Use real-time analytics to track engagement and optimize your campaigns.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">3.</span>
                <span>Grow Your Brand: Increase visibility and connect with social media users who genuinely care about your brand.</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">What Makes Promorang Different?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary-100 rounded-full p-4 inline-block mb-4">
              <Users className="text-primary-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Authentic Engagement</h3>
            <p>No bots, no fake followers—just real users and influencers who care about your brand.</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 rounded-full p-4 inline-block mb-4">
              <Zap className="text-primary-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Task Flexibility</h3>
            <p>From quick likes to detailed reviews and content creation, you choose the tasks that suit your goals.</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 rounded-full p-4 inline-block mb-4">
              <DollarSign className="text-primary-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Rewards You Control</h3>
            <p>Whether you're paying for engagement or earning rewards as an influencer, Promorang offers full transparency and control.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-8">Join the Promorang Community Today</h2>
        <p className="text-xl mb-8">Whether you're an influencer or a business, Promorang is your go-to platform for authentic engagement and real results. Join today and start collaborating with the brands and users that matter most to you.</p>
        <Link to="/signup" className="btn-primary text-lg px-8 py-3">
          Get Started Now
        </Link>
      </div>
    </div>
  );
};

export default GeneralLandingPage;