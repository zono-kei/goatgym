import type { ReactNode } from 'react';
import { Calendar, CheckCircle2, ChevronRight, Clock3, MessageCircle, Sparkles, UserRound } from 'lucide-react';

type Plan = { name: string; time: string; price: string; badge?: string };

const plans: Plan[] = [
  { name: 'ダイエット集中', time: '60分', price: '¥8,800', badge: '人気' },
  { name: '姿勢改善ベーシック', time: '45分', price: '¥6,600' },
  { name: '体力アップ習慣化', time: '30分', price: '¥4,900' },
];

const slots = ['9:00', '10:30', '13:00', '15:00', '18:30', '20:00'];

const checks = [
  '直感的にわかる導線',
  'プランが複数あっても迷わない',
  '日時予約まで最短で到達',
];

function PhoneFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="rounded-[2rem] border border-stone-300 bg-white p-3 shadow-sm">
      <div className="rounded-[1.6rem] border border-stone-200 bg-stone-50 p-4">
        <p className="mb-4 text-sm font-bold text-stone-700">{title}</p>
        {children}
      </div>
    </article>
  );
}

function PlanList() {
  return (
    <div className="space-y-2">
      {plans.map((plan) => (
        <button key={plan.name} className="flex w-full items-center justify-between rounded-xl border border-stone-200 bg-white px-3 py-2 text-left">
          <div>
            <p className="text-sm font-semibold text-stone-800">{plan.name}</p>
            <p className="text-xs text-stone-500">{plan.time}</p>
          </div>
          <div className="text-right">
            {plan.badge ? <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">{plan.badge}</span> : null}
            <p className="text-sm font-bold text-stone-700">{plan.price}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

function SlotGrid() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {slots.map((slot, i) => (
        <button
          key={slot}
          className={`rounded-lg border px-2 py-1 text-xs font-medium ${i === 2 ? 'border-stone-800 bg-stone-800 text-white' : 'border-stone-200 bg-white text-stone-700'}`}
        >
          {slot}
        </button>
      ))}
    </div>
  );
}

function MockA() {
  return (
    <PhoneFrame title="モックA｜3ステップ最短型">
      <ol className="mb-3 grid grid-cols-3 gap-1 text-center text-[10px] font-semibold text-stone-600">
        <li className="rounded-md bg-white py-1">1 プラン</li>
        <li className="rounded-md bg-white py-1">2 日時</li>
        <li className="rounded-md bg-white py-1">3 確定</li>
      </ol>
      <PlanList />
      <p className="mb-2 mt-3 text-xs font-semibold text-stone-600">空き枠</p>
      <SlotGrid />
      <button className="mt-3 w-full rounded-xl bg-stone-800 py-2 text-sm font-bold text-white">この内容で予約する</button>
    </PhoneFrame>
  );
}

function MockB() {
  return (
    <PhoneFrame title="モックB｜カレンダー先行型">
      <div className="rounded-xl border border-stone-200 bg-white p-3">
        <p className="text-xs font-semibold text-stone-600">2026年4月</p>
        <div className="mt-2 grid grid-cols-7 gap-1 text-center text-[10px]">
          {Array.from({ length: 21 }).map((_, i) => (
            <div key={`d-${i}`} className={`rounded py-1 ${i === 12 ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-600'}`}>
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      <p className="mb-2 mt-3 text-xs font-semibold text-stone-600">4/13 の空き枠</p>
      <SlotGrid />
      <button className="mt-3 flex w-full items-center justify-center gap-1 rounded-xl border border-stone-300 bg-white py-2 text-sm font-semibold text-stone-700">
        プランを選ぶ <ChevronRight size={14} />
      </button>
    </PhoneFrame>
  );
}

function MockC() {
  return (
    <PhoneFrame title="モックC｜プラン比較型">
      <div className="grid grid-cols-2 gap-2">
        {plans.slice(0, 2).map((plan) => (
          <div key={plan.name} className="rounded-xl border border-stone-200 bg-white p-2">
            <p className="text-[11px] font-bold text-stone-800">{plan.name}</p>
            <p className="mt-1 text-[10px] text-stone-500">{plan.time}</p>
            <p className="mt-1 text-xs font-bold text-stone-700">{plan.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 rounded-xl border-2 border-emerald-500 bg-emerald-50 p-2">
        <p className="text-[11px] font-bold text-emerald-800">おすすめ：体力アップ習慣化</p>
        <p className="text-[10px] text-emerald-700">短時間で継続しやすい</p>
      </div>
      <p className="mb-2 mt-3 text-xs font-semibold text-stone-600">日時を選択</p>
      <SlotGrid />
    </PhoneFrame>
  );
}

function MockD() {
  return (
    <PhoneFrame title="モックD｜質問誘導型">
      <div className="space-y-2 rounded-xl border border-stone-200 bg-white p-3 text-xs">
        <p className="font-semibold text-stone-700">Q1 目的は？</p>
        <div className="grid grid-cols-2 gap-2">
          <button className="rounded-md bg-stone-800 px-2 py-1 text-white">ダイエット</button>
          <button className="rounded-md bg-stone-100 px-2 py-1 text-stone-700">姿勢改善</button>
        </div>
        <p className="font-semibold text-stone-700">Q2 週何回？</p>
        <div className="grid grid-cols-3 gap-2">
          <button className="rounded-md bg-stone-100 px-2 py-1 text-stone-700">週1</button>
          <button className="rounded-md bg-stone-800 px-2 py-1 text-white">週2</button>
          <button className="rounded-md bg-stone-100 px-2 py-1 text-stone-700">未定</button>
        </div>
      </div>
      <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3">
        <p className="text-xs font-semibold text-amber-800">提案プラン：ダイエット集中（60分）</p>
      </div>
      <button className="mt-3 w-full rounded-xl bg-stone-800 py-2 text-sm font-bold text-white">この提案で日時選択へ</button>
    </PhoneFrame>
  );
}

function MockE() {
  return (
    <PhoneFrame title="モックE｜Web + LINE併用型">
      <PlanList />
      <p className="mb-2 mt-3 text-xs font-semibold text-stone-600">予約方法を選択</p>
      <div className="grid grid-cols-2 gap-2">
        <button className="rounded-xl bg-stone-800 px-2 py-3 text-xs font-bold text-white">
          <Calendar size={14} className="mx-auto mb-1" />
          Webで予約
        </button>
        <button className="rounded-xl border border-green-300 bg-green-50 px-2 py-3 text-xs font-bold text-green-700">
          <MessageCircle size={14} className="mx-auto mb-1" />
          LINEで相談
        </button>
      </div>
      <p className="mt-2 text-[10px] text-stone-500">迷う人はLINE→相談後に日時確定の流れ</p>
    </PhoneFrame>
  );
}

export function Wireframe() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 text-stone-800 md:px-8 md:py-12">
      <section className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8">
        <p className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-600">
          <UserRound size={14} /> パーソナルジム予約サイト 初期モック
        </p>
        <h1 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">5パターンを並べて見比べられる形にしました</h1>
        <p className="mt-3 text-sm leading-relaxed text-stone-600 md:text-base">
          「プランが複数」「日時予約あり」を前提に、直感的でシンプルな予約体験を比較できる5案です。気に入った案を選んでいただければ、次にその方向で本番用UIを作ります。
        </p>
        <ul className="mt-4 space-y-1 text-sm text-stone-700">
          {checks.map((check) => (
            <li key={check} className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-600" />
              {check}
            </li>
          ))}
        </ul>
        <p className="mt-3 inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
          <Sparkles size={13} /> まずはここから1〜2案に絞り込みましょう
        </p>
      </section>

      <section className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <MockA />
        <MockB />
        <MockC />
        <MockD />
        <MockE />

        <article className="rounded-[2rem] border border-dashed border-stone-300 bg-stone-50 p-5">
          <p className="text-sm font-bold text-stone-700">次のステップ（絞り込み後）</p>
          <ol className="mt-3 space-y-2 text-xs text-stone-600">
            <li className="flex gap-2"><Clock3 size={13} className="mt-0.5" /> 1案を選択</li>
            <li className="flex gap-2"><Calendar size={13} className="mt-0.5" /> 予約フォーム詳細化</li>
            <li className="flex gap-2"><MessageCircle size={13} className="mt-0.5" /> LINE/通知導線を確定</li>
          </ol>
        </article>
      </section>
    </div>
  );
}
