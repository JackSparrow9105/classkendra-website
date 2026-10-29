import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section class="relative overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-white">
      <div class="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-indigo-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-40 -left-40 w-[24rem] h-[24rem] bg-green-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div class="container-x relative grid lg:grid-cols-2 gap-14 items-center pt-16 pb-20 md:pt-24 md:pb-28">
        <div class="text-center lg:text-left">
          <span class="inline-flex items-center gap-2 bg-white border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm mb-6">
            <span class="w-2 h-2 rounded-full bg-green-500"></span>
            Built for Tuition Centres, Coaching &amp; Schools
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-gray-900">
            Aapki Class Ka<br />
            <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Digital Khata</span>
          </h1>
          <p class="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
            Fees, attendance aur test marks — sab ek app mein. Automatic reminders seedhe parents ke
            <span class="font-semibold text-gray-800">WhatsApp</span> par. Payment ke peeche bhaagna band, padhane par focus shuru.
          </p>
          <div class="mt-9 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#pricing" class="btn-primary text-lg px-7 py-3.5 shadow-lg shadow-indigo-200">Start 14-Day Free Trial</a>
            <a href="#demo" class="btn-outline text-lg px-7 py-3.5">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              See it in action
            </a>
          </div>
          <ul class="mt-8 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-gray-500 font-medium">
            <li class="flex items-center gap-1.5"><span class="text-green-600">✓</span> No credit card</li>
            <li class="flex items-center gap-1.5"><span class="text-green-600">✓</span> Hindi &amp; English</li>
            <li class="flex items-center gap-1.5"><span class="text-green-600">✓</span> Works on any phone</li>
          </ul>
        </div>

        <!-- WhatsApp preview -->
        <div class="relative mx-auto w-full max-w-md">
          <div class="rounded-3xl shadow-2xl overflow-hidden border border-gray-200 bg-white">
            <div class="bg-whatsapp-dark text-white px-5 py-3.5 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-indigo-500 grid place-items-center">📘</div>
              <div>
                <p class="font-semibold leading-tight">Sharma Coaching Centre</p>
                <p class="text-xs text-green-100">via ClassKendra</p>
              </div>
            </div>
            <div class="bg-whatsapp-chat p-4 space-y-3 text-[15px]">
              <div class="bg-white rounded-xl rounded-tl-none p-3 shadow-sm max-w-[88%]">
                <p class="text-gray-800">Namaste 🙏 <b>Aarav</b> ki <b>November</b> fees ₹2,500 due hai (last date 10 Nov).</p>
                <p class="mt-2 text-indigo-600 font-semibold">💳 Pay via UPI → pay.classkendra.in/a7x</p>
                <p class="text-[11px] text-gray-400 text-right mt-1">9:00 AM</p>
              </div>
              <div class="bg-white rounded-xl rounded-tl-none p-3 shadow-sm max-w-[88%]">
                <p class="text-gray-800">✅ Aarav aaj class mein <b>present</b> tha. Physics test: <b>42/50</b> 🎉</p>
                <p class="text-[11px] text-gray-400 text-right mt-1">6:30 PM</p>
              </div>
              <div class="bg-whatsapp-bubble rounded-xl rounded-tr-none p-3 shadow-sm max-w-[75%] ml-auto">
                <p class="text-gray-800">Payment kar diya, thank you sir 👍</p>
                <p class="text-[11px] text-gray-500 text-right mt-1">6:42 PM ✓✓</p>
              </div>
            </div>
          </div>
          <div class="absolute -bottom-6 -left-4 sm:-left-10 card px-4 py-3 flex items-center gap-3 shadow-xl">
            <div class="w-10 h-10 rounded-xl bg-green-100 text-green-700 grid place-items-center text-lg">₹</div>
            <div>
              <p class="text-xs text-gray-500 font-medium">Fee received</p>
              <p class="font-extrabold text-gray-900">₹2,500 · Aarav</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {}
