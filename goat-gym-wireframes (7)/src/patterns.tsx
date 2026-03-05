import React from 'react';
import { Menu, Instagram, MessageCircle, Calendar, MapPin, Clock, Car, CheckCircle2, Phone, Mail, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Image = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => (
  <img src={src} alt={alt} className={`object-cover ${className}`} referrerPolicy="no-referrer" />
);

export const FixedCTA = () => (
  <motion.div 
    initial={{ y: 100 }}
    animate={{ y: 0 }}
    transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
    className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-[#E8E3D9] p-2 sm:p-4 flex justify-center gap-2 z-50 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)]"
  >
    <a href="https://book.squareup.com/appointments/8n4ejdzdvx42tk/location/LF8DMH43XJ9EF/services?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnQqfPmK3o2zxIqGTDtwTlBzRXEdiyewAmT3QIlwZXdzfxytRtzJMHnitz0Sk_aem_XJlUKMHZguofCiNoYLx6BQ" target="_blank" rel="noopener noreferrer" className="bg-[#6B705C] text-white hover:bg-[#5A5E4D] py-3 px-2 sm:px-4 rounded-[2rem] font-bold flex items-center justify-center gap-1 sm:gap-2 w-full max-w-[140px] sm:max-w-[200px] text-[11px] sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
      <Calendar size={16} className="sm:w-[18px] sm:h-[18px]" /> 体験予約
    </a>
    <a href="https://lin.ee/a6npym8" target="_blank" rel="noopener noreferrer" className="bg-[#6B705C] text-white hover:bg-[#5A5E4D] py-3 px-2 sm:px-4 rounded-[2rem] font-bold flex items-center justify-center gap-1 sm:gap-2 w-full max-w-[140px] sm:max-w-[200px] text-[11px] sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
      <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" /> LINE登録
    </a>
    <a href="https://www.instagram.com/goat___gym?igsh=ZzZ0aTB2cW00eW5x&utm_source=qr" target="_blank" rel="noopener noreferrer" className="bg-[#6B705C] text-white hover:bg-[#5A5E4D] py-3 px-2 sm:px-4 rounded-[2rem] font-bold flex items-center justify-center gap-1 sm:gap-2 w-full max-w-[140px] sm:max-w-[200px] text-[11px] sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
      <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" /> Instagram
    </a>
  </motion.div>
);

export const Header = ({ className = "" }: { className?: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`flex justify-between items-center p-6 ${className}`}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-black tracking-tighter flex flex-col"
        >
          {/* Logo removed from top-left */}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-4 items-center"
        >
          <a href="https://www.instagram.com/goat___gym?igsh=ZzZ0aTB2cW00eW5x&utm_source=qr" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 hover:scale-110 transition-all">
            <Instagram size={24} />
          </a>
          <button onClick={() => setIsOpen(true)} className="cursor-pointer hover:opacity-80 hover:scale-110 transition-all">
            <Menu size={24} />
          </button>
        </motion.div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-[#F9F6F0] text-[#4A4238] flex flex-col"
          >
            <div className="flex justify-between items-center p-6">
              <div className="font-black tracking-tighter flex flex-col">
                <span className="text-2xl leading-none">GOAT</span>
                <span className="text-[10px] tracking-widest mt-1 opacity-90">personal gym</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:opacity-80 hover:scale-110 transition-all">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8 text-xl font-bold">
              <button onClick={() => scrollTo('concept')} className="hover:text-[#6B705C] transition-colors">コンセプト</button>
              <button onClick={() => scrollTo('trainer')} className="hover:text-[#6B705C] transition-colors">トレーナー紹介</button>
              <button onClick={() => scrollTo('pricing')} className="hover:text-[#6B705C] transition-colors">料金プラン</button>
              <button onClick={() => scrollTo('faq')} className="hover:text-[#6B705C] transition-colors">よくある質問</button>
              <button onClick={() => scrollTo('access')} className="hover:text-[#6B705C] transition-colors">アクセス</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const STRENGTHS = [
  { 
    title: "健康改善・動ける身体", 
    desc: "ただ痩せるだけでなく、\n日常生活が楽になる身体づくりを目指します。",
    img: "/strength1.jpg",
    alt: "泉佐野 パーソナルジム 健康改善 トレーニング風景"
  },
  { 
    title: "初心者歓迎・安心設計", 
    desc: "格闘家＝怖いというイメージを払拭。\n優しく丁寧な指導が特徴です。",
    img: "/strength3.jpg",
    alt: "泉佐野 パーソナルジム 初心者歓迎 ミット打ち"
  },
  { 
    title: "現役格闘家による指導", 
    desc: "本物の知識と経験で、\nあなたに最適なトレーニングを提供します。",
    img: "/strength2.jpg",
    alt: "泉佐野 パーソナルジム 現役格闘家 筋力トレーニング"
  }
];

export const PRICING = [
  { 
    name: "初回体験", 
    highlight: true,
    items: [{ price: "3,300円", desc: "カウンセリング＋体験（60分）" }]
  },
  { 
    name: "月額プラン", 
    items: [
      { desc: "月4回 / 週1回", price: "30,800円", note: "4,400円お得" },
      { desc: "月8回 / 週2回", price: "57,200円", note: "13,200円お得" }
    ]
  },
  { 
    name: "単発プラン", 
    items: [
      { desc: "60分", price: "8,800円" },
      { desc: "30分", price: "5,500円" },
      { desc: "30分ミット打ち", price: "5,500円" }
    ]
  },
  { 
    name: "回数プラン", 
    items: [
      { desc: "60分 / 4回", price: "33,000円", note: "2,200円お得" },
      { desc: "60分 / 8回", price: "61,600円", note: "8,800円お得" },
      { desc: "60分 / 12回", price: "85,800円", note: "19,800円お得" },
      { desc: "30分 / 4回", price: "19,800円", note: "2,200円お得" }
    ]
  },
  { 
    name: "ペアトレーニング", 
    items: [
      { desc: "60分", price: "11,000円" },
      { desc: "60分 / 4回", price: "41,800円", note: "2,200円お得" }
    ]
  }
];

export const FAQS = [
  { q: "運動初心者でも大丈夫ですか？", a: "はい、お客様の体力に合わせた「最適強度」で指導しますのでご安心ください。" },
  { q: "年齢制限はありますか？", a: "特にございません。40〜60代の方も多く通われています。" },
  { q: "女性でも通えますか？", a: "もちろん大歓迎です。ボディメイクや姿勢改善を目的とした女性のお客様も多数いらっしゃいます。" },
  { q: "持ち物は何が必要ですか？", a: "動きやすい服装、室内シューズ、タオル、お飲み物をお持ちください。" }
];

export const Wireframe = () => {
  return (
    <div className="pb-24 relative font-sans bg-[#F9F6F0] text-[#4A4238] overflow-hidden">
    {/* Header over the hero image */}
    <div className="absolute top-0 left-0 w-full z-20 text-white">
      <Header />
    </div>

    {/* Hero Section with Background Image */}
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image src="/hero.jpg" alt="Gym Background" className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A4238]/80 via-[#4A4238]/50 to-[#4A4238]/80"></div>
      </motion.div>
      
      {/* ヤギのロゴ透かし */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.08] mix-blend-overlay">
        <img src="/logo-goat.png" alt="GOAT Logo" className="w-[150%] md:w-[80%] max-w-none object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter flex flex-col items-center mb-8 drop-shadow-lg">
            <span>GOAT</span>
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest mt-2 font-bold opacity-90">personal gym</span>
          </h1>
          <div className="inline-block bg-[#6B705C] text-white text-sm font-bold px-4 py-1 mb-6 tracking-widest rounded-[2rem] shadow-lg">
            泉佐野市のパーソナルジム
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white font-sans tracking-normal drop-shadow-md">
            将来の不安に、<br/>今動く。
          </h2>
          <p className="text-gray-200 mb-10 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed drop-shadow-md">
            現役格闘家が「最適強度」でサポート。<br/>
            ただ痩せるだけじゃない、<br className="sm:hidden" />動ける健康な身体づくりを。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pb-12">
            <a href="https://book.squareup.com/appointments/8n4ejdzdvx42tk/location/LF8DMH43XJ9EF/services?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnQqfPmK3o2zxIqGTDtwTlBzRXEdiyewAmT3QIlwZXdzfxytRtzJMHnitz0Sk_aem_XJlUKMHZguofCiNoYLx6BQ" target="_blank" rel="noopener noreferrer" className="bg-[#6B705C] text-white hover:bg-[#5A5E4D] px-8 py-4 font-bold rounded-[2rem] text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
              <Calendar size={20} /> 体験予約はこちら
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Concept Section */}
    <section id="concept" className="py-24 px-8 relative overflow-hidden">
      {/* ヤギのロゴ透かし（コンセプトセクション） */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.02] mix-blend-multiply">
        <img src="/logo-goat.png" alt="GOAT Logo" className="w-[120%] md:w-[60%] max-w-none object-contain" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
        <p className="text-sm font-bold text-[#6B705C] tracking-widest mb-2">CONCEPT</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-10 font-sans tracking-normal">「将来の不安に、<br className="sm:hidden" />今動く。」</h2>
        <div className="text-[#7A7268] text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto space-y-8">
          <p>
            将来の不安は誰にでもあります。<br />
            体力の衰え、健康への不安
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4A4238] tracking-widest py-2 leading-relaxed">
            体を動かすことは<br className="sm:hidden" />最強の『自己投資』
          </p>
          <p>
            GOATはただ鍛えるジムではなく<br />
            人生の質を上げるための<br className="sm:hidden" />ジムを目指します。
          </p>
          <p>
            何よりも体を動かす楽しさを<br />
            たくさんの方に感じて頂きたいです。
          </p>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-bold text-[#6B705C] tracking-widest mb-2">STRENGTHS</p>
        <h2 className="text-3xl md:text-4xl font-black font-sans tracking-normal">GOATの3つの強み</h2>
      </motion.div>

      <div className="space-y-20">
        {STRENGTHS.map((s, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            key={i} 
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center group`}
          >
            <div className="flex-1 w-full overflow-hidden rounded-[2rem] shadow-lg shadow-[#4A4238]/10">
              <Image src={s.img} alt={s.alt || s.title} className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex-1">
              <div className="text-[#6B705C]/20 font-sans text-6xl mb-4 font-black transition-transform duration-500 group-hover:-translate-y-2">0{i+1}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 font-sans tracking-normal text-[#4A4238] group-hover:text-[#6B705C] transition-colors duration-300">{s.title}</h3>
              <p className="text-[#7A7268] text-lg leading-relaxed whitespace-pre-line">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex justify-center mt-16"
      >
        <button onClick={() => {
          const element = document.getElementById('pricing');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }} className="bg-transparent border-2 border-[#6B705C] text-[#6B705C] hover:bg-[#6B705C] hover:text-white px-8 py-4 font-bold rounded-[2rem] text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95">
          料金プランを見る
        </button>
      </motion.div>
      </div>
    </section>

    {/* Trainer Section */}
    <section id="trainer" className="bg-[#F0EBE1] py-24 px-8 relative overflow-hidden">
      {/* ヤギのロゴ透かし（トレーナーセクション） */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.03] mix-blend-multiply">
        <img src="/logo-goat.png" alt="GOAT Logo" className="w-[150%] md:w-[80%] max-w-none object-contain" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full overflow-hidden rounded-[2rem] shadow-lg shadow-[#4A4238]/10 group"
        >
          {/* 仮画像: トレーナー 格闘家（試合風景） */}
          <Image src="/trainer.jpg" alt="Trainer" className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="text-sm font-bold text-[#6B705C] tracking-widest mb-2">TRAINER</p>
          <h2 className="text-3xl md:text-4xl font-black mb-8 font-sans tracking-normal">トレーナー紹介</h2>
          
          <div className="flex items-center gap-4 mb-2">
            <h3 className="text-2xl font-bold font-sans tracking-normal">前薗  渓</h3>
            <a href="https://www.instagram.com/mma_zono?igsh=MTBwbW9lNjYyNWo3cw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-[#833AB4] hover:text-[#FD1D1D] transition-colors duration-300 hover:scale-110">
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-[#7A7268] mb-8 font-medium">現役プロ格闘家 / パーソナルトレーナー</p>
          
          <div className="bg-white p-6 rounded-[2rem] shadow-md shadow-[#4A4238]/5 border border-[#E8E3D9] mb-8 relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="absolute -top-4 -left-4 text-4xl text-[#6B705C] opacity-50">"</div>
            <p className="text-[#4A4238] text-base sm:text-lg leading-relaxed relative z-10 italic">
              体を動かす楽しさを<br className="sm:hidden" />一人でも多くの方に知ってほしい。<br />そして地元泉州の皆様の<br className="sm:hidden" />健康生活をサポートさせてください！
            </p>
          </div>
          
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-[#4A4238]"><CheckCircle2 className="text-[#6B705C] shrink-0" size={20}/> 保有資格:JATI認定トレーニング指導者</li>
            <li className="flex items-center gap-3 text-[#4A4238]"><CheckCircle2 className="text-[#6B705C] shrink-0" size={20}/> 中学・高等学校教諭一種免許状（保健体育）</li>
            <li className="flex items-center gap-3 text-[#4A4238]"><CheckCircle2 className="text-[#6B705C] shrink-0" size={20}/> 競技歴: 柔道8年</li>
            <li className="flex items-center gap-3 text-[#4A4238]"><CheckCircle2 className="text-[#6B705C] shrink-0" size={20}/> レスリング4年 西日本学生選手権優勝</li>
            <li className="flex items-center gap-3 text-[#4A4238]"><CheckCircle2 className="text-[#6B705C] shrink-0" size={20}/> プロ格闘技戦績:11戦7勝4敗</li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Menu & Price Section */}
    <section id="pricing" className="py-24 px-8 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-bold text-[#6B705C] tracking-widest mb-2">MENU & PRICE</p>
        <h2 className="text-3xl md:text-4xl font-black font-sans tracking-normal">料金プラン</h2>
      </motion.div>
      
      {/* Featured Trial Plan */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mb-12 p-8 md:p-10 rounded-[2rem] bg-[#6B705C] text-white shadow-xl text-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">初回体験</h3>
        <div className="text-4xl md:text-5xl font-black mb-4 relative z-10">3,300円</div>
        <div className="text-white/90 font-medium text-lg relative z-10">カウンセリング＋体験（60分）</div>
      </motion.div>

      {/* Other Plans Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-8 items-start">
        {PRICING.slice(1).map((p, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            key={i} 
            className="p-8 rounded-[2rem] border-2 border-[#E8E3D9] bg-white shadow-md shadow-[#4A4238]/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold mb-6 pb-4 border-b border-[#E8E3D9] text-[#4A4238]">{p.name}</h3>
            <div className="space-y-5">
              {p.items.map((item, j) => (
                <div key={j} className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
                  <div className="font-medium text-[#7A7268]">{item.desc}</div>
                  <div className="text-left sm:text-right">
                    <div className="text-2xl font-black text-[#4A4238]">{item.price}</div>
                    {item.note && (
                      <div className="text-xs font-bold mt-1 inline-block px-2 py-1 rounded-full bg-[#F0EBE1] text-[#6B705C]">
                        {item.note}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center text-[#7A7268] bg-[#F0EBE1] py-5 px-4 rounded-[2rem] transition-colors duration-300 hover:bg-[#E8E3D9] font-medium shadow-sm text-sm sm:text-base"
      >
        ※ 入会金: 11,000円<br className="sm:hidden" />（<span className="text-[#6B705C] font-bold text-base sm:text-lg">体験当日のご入会で無料</span>）
      </motion.p>

      {/* Pricing Bottom Image Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 w-full grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4"
      >
        {[
          "/gallery-1.jpg",
          "/gallery-2.jpg",
          "/IMG_2722-1.jpg",
          "/gallery-4.jpg",
          "/gallery-5.jpg",
          "/gallery-6.jpg"
        ].map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl sm:rounded-[2rem] shadow-sm group aspect-square">
            <Image 
              src={src} 
              alt={`泉佐野 パーソナルジム 施設・トレーニング風景 ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex justify-center mt-16"
      >
        <button onClick={() => {
          const element = document.getElementById('access');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }} className="bg-transparent border-2 border-[#6B705C] text-[#6B705C] hover:bg-[#6B705C] hover:text-white px-8 py-4 font-bold rounded-[2rem] text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95">
          アクセスを見る
        </button>
      </motion.div>
    </section>

    {/* FAQ Section */}
    <section id="faq" className="bg-[#F0EBE1] py-24 px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold text-[#6B705C] tracking-widest mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-black font-sans tracking-normal">よくある質問</h2>
        </motion.div>
        
        <div className="space-y-6">
          {FAQS.map((faq, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i} 
              className="bg-white p-6 md:p-8 rounded-[2rem] shadow-md shadow-[#4A4238]/5 border border-[#E8E3D9] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <h3 className="font-bold text-base sm:text-lg flex items-start gap-3 mb-4 text-[#4A4238] group-hover:text-[#6B705C] transition-colors">
                <span className="text-[#6B705C] text-xl font-black">Q.</span> 
                <span className="pt-0.5">{faq.q}</span>
              </h3>
              <p className="text-[#7A7268] flex items-start gap-3 leading-relaxed text-sm sm:text-base">
                <span className="text-gray-400 text-xl font-black">A.</span> 
                <span className="pt-0.5">{faq.a}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Access Section */}
    <section id="access" className="py-24 px-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full"
      >
        <div className="mb-8">
          <p className="text-sm font-bold text-[#6B705C] tracking-widest mb-2">ACCESS</p>
          <h2 className="text-3xl md:text-4xl font-black font-sans tracking-normal">アクセス</h2>
        </div>
        
        <div className="space-y-6 text-[#4A4238] text-base sm:text-lg bg-[#F0EBE1] p-6 sm:p-8 rounded-[2rem] transition-all duration-300 hover:shadow-md">
          <div className="flex items-start gap-4 group">
            <MapPin className="text-[#6B705C] shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" size={24}/> 
            <div>
              <p className="font-bold mb-1">GOAT personal gym</p>
              <p>〒598-0007<br/>大阪府泉佐野市上町3丁目10-12<br/>泉佐野近畿ビル2階</p>
              <p className="text-sm text-[#7A7268] mt-2 font-bold">南海本線「泉佐野駅」より徒歩30秒</p>
            </div>
          </div>
          <div className="flex items-start gap-4 group">
            <Clock className="text-[#6B705C] shrink-0 mt-1 transition-transform duration-300 group-hover:rotate-12" size={24}/> 
            <div>
              <p>営業時間: 9:00 - 21:30</p>
              <p className="text-sm text-[#7A7268] mt-1">定休日：日曜日</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <Phone className="text-[#6B705C] shrink-0 transition-transform duration-300 group-hover:rotate-12" size={24}/> 
            <p className="font-bold text-xl tracking-wider">070-9309-3068</p>
          </div>
          <div className="flex items-center gap-4 group">
            <Mail className="text-[#6B705C] shrink-0 transition-transform duration-300 group-hover:-translate-y-1" size={24}/> 
            <p className="font-bold text-lg">b2181199@gmail.com</p>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full overflow-hidden rounded-[2rem] shadow-lg shadow-[#4A4238]/10 h-[400px] relative"
      >
        <iframe
          src="https://maps.google.com/maps?q=大阪府泉佐野市上町3丁目10-12&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </motion.div>
    </section>

    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="flex justify-center pb-32"
    >
      <a href="https://book.squareup.com/appointments/8n4ejdzdvx42tk/location/LF8DMH43XJ9EF/services?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnQqfPmK3o2zxIqGTDtwTlBzRXEdiyewAmT3QIlwZXdzfxytRtzJMHnitz0Sk_aem_XJlUKMHZguofCiNoYLx6BQ" target="_blank" rel="noopener noreferrer" className="bg-[#6B705C] text-white hover:bg-[#5A5E4D] px-10 py-5 font-bold rounded-[2rem] text-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
        <Calendar size={24} /> 体験予約はこちら
      </a>
    </motion.div>
    
    <FixedCTA />
  </div>
  );
};

