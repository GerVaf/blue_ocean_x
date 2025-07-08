/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Pricing = () => {
  const data = [
    {
      title: "PREMIUM PACKAGES (5000MMK)",
      detail: [
        "▪ +3000 LIVE TV CHANNELS",
        "▪ SD/HD/FHD/UHD QUALITY",
        "▪ UK, USA, CANADA & OTHERS",
        "▪ PREMIUM SPORTS CHANNELS",
        "▪ 1500 SPORTS CHANNELS",
        "▪ MOVIES & SERIES (MM SUB)",
        "▪ BLUE OCEAN PLUS APP*",
        "▪ BLUE OCEAN VPN APP*",
        "▪ 2 CONNECTION (ONE USER)",
        "▪ ALL DEVICES SUPPORTED",
      ],
      description:
        "▪အကောင့်မျှဝေ အသုံးပြုခြင်း၊ ပြန်လည်ထုတ်လွှင့်ခြင်းကို တင်းကြပ်စွာ ခွင့်မပြုပါ။ ထိုကဲ့သို့ တွေ့ရှိပါက ဝန်ဆောင်မှုများကို ချက်ချင်းရပ်ဆိုင်းမည်ဖြစ်ပြီး ပြန်အမ်းငွေပေးမည်မဟုတ်ပါ။ ▪ဝန်ဆောင်မှုသည် အခမဲ့အက်ပ်များအတွက် အကျုံးမဝင်ပါ။",
    },
    {
      title: "PREMIUM PACKAGES (5000MMK)",
      detail: [
        "▪ +3000 LIVE TV CHANNELS",
        "▪ SD/HD/FHD/UHD QUALITY",
        "▪ UK, USA, CANADA & OTHERS",
        "▪ PREMIUM SPORTS CHANNELS",
        "▪ 1500 SPORTS + ( ADULT XXX )",
        "▪ MOVIES & SERIES (MM SUB)",
        "▪ BLUE OCEAN PLUS APP*",
        "▪ BLUE OCEAN VPN APP*",
        "▪ 2 CONNECTION (ONE USER)",
        "▪ ALL DEVICES SUPPORTED",
      ],
      description:
        "▪အကောင့်မျှဝေ အသုံးပြုခြင်း၊ ပြန်လည်ထုတ်လွှင့်ခြင်းကို တင်းကြပ်စွာ ခွင့်မပြုပါ။ ထိုကဲ့သို့ တွေ့ရှိပါက ဝန်ဆောင်မှုများကို ချက်ချင်းရပ်ဆိုင်းမည်ဖြစ်ပြီး ပြန်အမ်းငွေပေးမည်မဟုတ်ပါ။ ▪ဝန်ဆောင်မှုသည် အခမဲ့အက်ပ်များအတွက် အကျုံးမဝင်ပါ။",
    },
    {
      title: "VIP PACKAGES (7000MMK)",
      detail: [
        "▪ +5000 LIVE TV CHANNELS",
        "▪ SD/HD/FHD/UHD QUALITY",
        "▪ UK, USA, CANADA & OTHERS",
        "▪ VIP SPORTS / BACKUP CHANNELS",
        "▪ 3000 SPORTS + 24/7 MOVIES",
        "▪ MOVIES & SERIES (MM SUB)",
        "▪ BLUE OCEAN PLUS APP*",
        "▪ BLUE OCEAN VPN APP*",
        "▪ 2 CONNECTION (ONE USER)",
        "▪ ALL DEVICES SUPPORTED",
      ],
      description:
        "▪အကောင့်မျှဝေ အသုံးပြုခြင်း၊ ပြန်လည်ထုတ်လွှင့်ခြင်းကို တင်းကြပ်စွာ ခွင့်မပြုပါ။ ထိုကဲ့သို့ တွေ့ရှိပါက ဝန်ဆောင်မှုများကို ချက်ချင်းရပ်ဆိုင်းမည်ဖြစ်ပြီး ပြန်အမ်းငွေပေးမည်မဟုတ်ပါ။ ▪ဝန်ဆောင်မှုသည် အခမဲ့အက်ပ်များအတွက် အကျုံးမဝင်ပါ။",
    },
    {
      title: "VIP PACKAGES (7000MMK)",
      detail: [
        "▪ +5000 LIVE TV CHANNELS",
        "▪ SD/HD/FHD/UHD QUALITY",
        "▪ UK, USA, CANADA/24/7 MOVIES",
        "▪ VIP SPORTS / BACKUP CHANNELS",
        "▪ 3000 SPORTS + (ADULT XXX)",
        "▪ MOVIES & SERIES (MM SUB)",
        "▪ BLUE OCEAN PLUS APP*",
        "▪ BLUE OCEAN VPN APP*",
        "▪ 2 CONNECTION (ONE USER)",
        "▪ ALL DEVICES SUPPORTED",
      ],
      description:
        "▪အကောင့်မျှဝေ အသုံးပြုခြင်း၊ ပြန်လည်ထုတ်လွှင့်ခြင်းကို တင်းကြပ်စွာ ခွင့်မပြုပါ။ ထိုကဲ့သို့ တွေ့ရှိပါက ဝန်ဆောင်မှုများကို ချက်ချင်းရပ်ဆိုင်းမည်ဖြစ်ပြီး ပြန်အမ်းငွေပေးမည်မဟုတ်ပါ။ ▪ဝန်ဆောင်မှုသည် အခမဲ့အက်ပ်များအတွက် အကျုံးမဝင်ပါ။",
    },
  ];

  const sendOrder = (packageTitle) => {
    const phoneNumber = "+1(716)622-8262";
    const message = `Hello, I would like to purchase the following package:\n\n${packageTitle}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex">
        <h2 className="text-xl font-bold text-white rounded-full bg-primary text-start p-2 px-4 mb-10">
          Our Packages
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {data.map((pkg, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-6 border-t-4 border-blue-500"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-xl font-semibold text-primary mb-4">
              {pkg.title}
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm mb-4">
              {pkg.detail.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-xs text-red-600 padauk leading-6 mb-4">
              {pkg.description}
            </p>
            <button
              onClick={() => sendOrder(pkg.title)}
              className="mt-auto w-full py-2 bg-primary text-white rounded-lg hover:bg-primary transition"
            >
              Buy Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
