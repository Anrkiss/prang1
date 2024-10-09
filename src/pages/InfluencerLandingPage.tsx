import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Users, TrendingUp, DollarSign, Award, Zap, ThumbsUp, MessageSquare, Share2, CheckCircle } from 'lucide-react';

const InfluencerLandingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">Promorang: Grow Your Influence & Earn Rewards for Doing What You Love</h1>
            <p className="text-xl mb-4">Elevate Your Influence, Engage with Brands, and Earn Rewards</p>
            <p className="text-lg mb-8">
              Are you a social media influencer looking to grow your audience and collaborate with exciting brands? 
              Promorang makes it easier than ever to monetize your influence, connect with businesses that align 
              with your interests, and get rewarded for your efforts.
            </p>
            <Link to="/influencer-signup" className="btn-primary text-lg px-8 py-3">
              Sign Up Now
            </Link>
          </div>
          <div>
            <img src="https://i0.wp.com/landing.promorang.co/wp-content/uploads/2021/06/Image-of-Guy-copy.png?w=681&ssl=1" alt="Influencer using Promorang" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <img src="https://images.pexels.com/photos/4353614/pexels-photo-4353614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Influencer creating content" className="w-full h-auto rounded-lg shadow-lg mb-6" />
        </div>
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold mb-4">Why Promorang?</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <DollarSign className="mr-4 mt-1 text-primary-500 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Get Paid for What You Already Do</h3>
                <p>You're already engaging with content, liking posts, sharing stories, and commenting on the latest trends. Why not get paid for it? Promorang connects you directly with brands that align with your niche and rewards you for engaging with their content.</p>
              </div>
            </div>
            <div className="flex items-start">
              <ShoppingBag className="mr-4 mt-1 text-primary-500 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Work with Brands You Love</h3>
                <p>Promorang matches you with brands based on your interests and audience demographics, so you can stay true to your brand. No more irrelevant promotions—only authentic partnerships with businesses you're passionate about.</p>
              </div>
            </div>
            <div className="flex items-start">
              <TrendingUp className="mr-4 mt-1 text-primary-500 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Transparent Rewards & Payouts</h3>
                <p>Say goodbye to uncertainty! Promorang's dashboard tracks your completed tasks in real-time, and you'll always know how much you've earned. Cash out securely via PayPal or bank transfer whenever you're ready.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="bg-primary-100 rounded-full p-4 inline-block mb-4">
              <Users className="text-primary-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
            <p>Create your account in minutes by linking your social media profiles.</p>
          </div>
          <div>
            <div className="bg-primary-100 rounded-full p-4 inline-block mb-4">
              <ShoppingBag className="text-primary-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Find Your Perfect Task</h3>
            <p>Browse tasks tailored to your interests, niche, and audience.</p>
          </div>
          <div>
            <div className="bg-primary-100 rounded-full p-4 inline-block mb-4">
              <Award className="text-primary-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Rewarded</h3>
            <p>Complete tasks and watch your rewards grow. Cash out whenever you're ready.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-8">Join Promorang Today—Start Earning Now!</h2>
        <p className="text-xl mb-8">Promorang is your one-stop platform for finding authentic partnerships with brands that share your vision. Get rewarded for doing what you love and watch your influence grow.</p>
        <Link to="/influencer-signup" className="btn-primary text-lg px-8 py-3">
          Sign Up Now
        </Link>
      </div>
    </div>
  );
};

export default InfluencerLandingPage;