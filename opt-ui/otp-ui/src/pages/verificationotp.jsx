import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Clock, Hotel, Users, Globe } from 'lucide-react';

export default function VerificationPage() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#07080a] text-white flex items-center justify-center p-4 md:p-10 relative overflow-hidden font-sans">
      
      {/* ================= BACKGROUND IMAGE & OVERLAY (MORE VISIBLE) ================= */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none bg-[url('https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2000')] bg-cover bg-center mix-blend-luminosity"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#06030b]/95 via-[#0d0918]/80 to-[#2b140e]/60 opacity-70 z-0"></div>
      {/* ============================================================================= */}

      {/* Main Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        
        {/* Left Side: Branding */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-12 lg:space-y-24 text-left">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-amber-500 font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block"></span>
              <span>New places.</span>
            </div>
            <p className="text-gray-400 text-sm">New people. <span className="text-amber-500 font-medium block md:inline">Endless stories.</span></p>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">Welcome To</p>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#F07848] via-[#E25C74] to-[#8E52DC] bg-clip-text text-transparent">
              residio
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light">
              Smart stays. Strong communities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-800/50">
            <div className="flex items-center space-x-2">
              <Hotel className="w-4 h-4 text-amber-500" />
              <div className="text-[11px] leading-tight text-gray-400"><strong className="text-gray-200 block">Curated</strong> Hostels</div>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <div className="text-[11px] leading-tight text-gray-400"><strong className="text-gray-200 block">Safe &</strong> Verified</div>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-amber-500" />
              <div className="text-[11px] leading-tight text-gray-400"><strong className="text-gray-200 block">Community</strong> First</div>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-amber-500" />
              <div className="text-[11px] leading-tight text-gray-400"><strong className="text-gray-200 block">Across</strong> Cities</div>
            </div>
          </div>
        </div>

        {/* Right Side: Modern Card with Glowing Lightning Corners */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-lg filter drop-shadow-[0_0_25px_rgba(142,82,220,0.45)] drop-shadow-[0_0_50px_rgba(240,120,72,0.2)]">
            
            <div 
              className="w-full bg-[#12151e]/95 backdrop-blur-2xl p-8 md:p-12 relative border border-purple-500/30"
              style={{
                clipPath: 'polygon(12% 0, 100% 0, 100% 88%, 88% 100%, 0 100%, 0 12%)',
              }}
            >
              {/* Lightning Corner Lines */}
              <div 
                className="absolute inset-0 p-[2px] bg-gradient-to-br from-[#F07848] via-purple-600/50 to-[#8E52DC] opacity-90 pointer-events-none"
                style={{
                  clipPath: 'polygon(12% 0, 100% 0, 100% 88%, 88% 100%, 0 100%, 0 12%)',
                }}
              >
                <div 
                  className="w-full h-full bg-[#12151e]"
                  style={{
                    clipPath: 'polygon(12% 0, 100% 0, 100% 88%, 88% 100%, 0 100%, 0 12%)',
                  }}
                />
              </div>

              {/* Card Header Content */}
              <div className="flex justify-between items-center mb-14 relative z-10">
                <button className="text-gray-400 hover:text-white transition p-2 bg-gray-800/50 rounded-full border border-gray-700/40">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 bg-gradient-to-tr from-[#F37E43] to-[#864DD9] rounded-xl flex items-center justify-center font-bold text-lg shadow-lg shadow-purple-500/20">
                    R
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white leading-none">residio</h3>
                    <span className="text-[9px] text-gray-400 tracking-wider">Stay. Book. Belong.</span>
                  </div>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="space-y-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
                  Verify it's you
                </h2>
                <p className="text-gray-400 text-sm font-light">
                  Enter the 6-digit code we sent to your email.
                </p>

                {/* OTP Inputs */}
                <div className="flex justify-between gap-2 pt-6">
                  {otp.map((data, index) => (
                    <div key={index} className="flex-1 relative group">
                      <input
                        type="text"
                        name="otp"
                        maxLength="1"
                        className="w-full bg-transparent text-center text-2xl font-semibold py-3 focus:outline-none text-white transition-all border-b-2 border-gray-700 focus:border-transparent"
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                        onKeyDown={(e) => handleKeyDown(e.target, index)}
                        ref={(el) => (inputRefs.current[index] = el)}
                      />
                      <div className={`absolute bottom-0 left-0 w-full h-[2px] transition-all duration-300 ${
                        data || index === otp.findIndex(v => v === "") ? 'bg-gradient-to-r from-[#F07848] to-[#8E52DC] shadow-[0_0_10px_#8E52DC]' : 'bg-transparent'
                      }`} />
                    </div>
                  ))}
                </div>

                {/* Countdown */}
                <div className="flex items-center space-x-2 text-xs text-gray-400 pt-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>Code expires in <strong className="text-amber-500 font-medium">00:58</strong></span>
                </div>

                {/* Button */}
                <button className="w-full mt-8 bg-gradient-to-r from-[#F0744C] via-[#DC5979] to-[#7C4EE4] hover:opacity-95 transition-opacity text-white font-medium py-4 px-6 rounded-full flex items-center justify-center space-x-2 shadow-lg shadow-purple-600/30 group">
                  <span>Verify & Continue</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Divider */}
                <div className="flex items-center justify-center my-6 space-x-3 opacity-40">
                  <div className="h-[1px] bg-gray-600 w-16"></div>
                  <span className="text-xs text-gray-400 font-light">or</span>
                  <div className="h-[1px] bg-gray-600 w-16"></div>
                </div>

                {/* Resend Link */}
                <div className="text-center text-sm text-gray-400 font-light">
                  Didn't receive the code?{' '}
                  <button className="text-[#8E52DC] hover:underline font-medium transition-all">
                    Resend Code
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}