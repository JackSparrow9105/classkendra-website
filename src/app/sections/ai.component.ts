import { Component } from '@angular/core';

@Component({
  selector: 'app-ai',
  template: `
    <section id="ai" class="section bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 text-white relative overflow-hidden">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div class="container-x relative grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span class="inline-block bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">New &amp; Premium</span>
          <h2 class="mt-5 text-4xl md:text-5xl font-extrabold leading-tight">ClassKendra AI <span class="text-purple-300">✨</span></h2>
          <p class="mt-5 text-xl text-indigo-100/90 leading-relaxed">Sirf manage mat karo, institute grow karo. AI aapka personal business manager hai — 24/7.</p>
          <ul class="mt-10 space-y-7">
            @for (f of features; track f.title) {
              <li class="flex items-start gap-4">
                <div class="shrink-0 bg-white/10 p-3 rounded-xl border border-white/20 text-2xl">{{ f.icon }}</div>
                <div>
                  <h3 class="font-bold text-xl">{{ f.title }}</h3>
                  <p class="mt-1 text-indigo-200/80 text-sm leading-relaxed">{{ f.text }}</p>
                </div>
              </li>
            }
          </ul>
        </div>

        <div class="bg-white/5 p-6 sm:p-8 rounded-[2rem] backdrop-blur-md border border-white/10 shadow-2xl">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-bold">AI Growth Insights</h3>
            <span class="flex items-center gap-2 text-xs text-green-300"><span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Live</span>
          </div>
          <div class="space-y-4">
            <div class="bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-5 rounded-2xl border border-pink-500/30 relative overflow-hidden">
              <span class="absolute top-0 right-0 bg-pink-500 text-[10px] font-bold px-2 py-1 rounded-bl-lg">URGENT</span>
              <p class="text-xs text-pink-200 font-semibold uppercase tracking-wider mb-2">High drop-out risk</p>
              <p class="text-sm leading-relaxed mb-3">3 students in <b>Class 10 Physics</b> missed 4+ classes this month.</p>
              <button class="bg-white/10 hover:bg-white/20 text-xs font-bold py-2 px-4 rounded-lg transition border border-white/20">Call Parents Now</button>
            </div>
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="bg-white/5 p-5 rounded-2xl border border-white/10">
                <p class="text-xs text-indigo-300 font-semibold uppercase tracking-wider mb-1">Fee forecast (Nov)</p>
                <p class="font-extrabold text-2xl">₹1,20,000</p>
                <p class="text-xs text-indigo-200 mt-1"><span class="text-green-400">↑ 12%</span> vs last month</p>
              </div>
              <div class="bg-white/5 p-5 rounded-2xl border border-white/10">
                <p class="text-xs text-indigo-300 font-semibold uppercase tracking-wider mb-1">Bot answered</p>
                <p class="font-extrabold text-2xl">146 queries</p>
                <p class="text-xs text-indigo-200 mt-1">this week, 0 calls to you</p>
              </div>
            </div>
            <div class="bg-white/5 p-4 rounded-2xl border border-white/10 text-sm">
              <p class="text-indigo-300 text-xs font-semibold mb-2">Parent asked the bot:</p>
              <p class="bg-white/10 rounded-xl px-3 py-2 inline-block">"Kal class hai kya? Aur meri fees kitni baaki hai?"</p>
              <p class="mt-2 bg-purple-500/30 rounded-xl px-3 py-2">🤖 Haan, kal 4 PM Physics hai. Aapki ₹2,500 (Nov) baaki hai — pay link: pay.classkendra.in/a7x</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AiComponent {
  readonly features = [
    { icon: '📈', title: 'Revenue Prediction', text: 'Parents ke payment pattern se agle mahine ka fee collection pehle se bataata hai.' },
    { icon: '⚠️', title: 'Student Drop-out Alert', text: 'Girti attendance pakad kar aapko alert karta hai — student chhodne se pehle.' },
    { icon: '🤖', title: 'Smart WhatsApp Auto-Responder', text: 'Fees, timetable aur marks ke sawaalon ka jawaab khud deta hai, 24/7.' },
    { icon: '✍️', title: 'Report Card Remarks', text: 'Har student ke marks aur attendance dekh kar personal remarks likh deta hai.' },
  ];
}
