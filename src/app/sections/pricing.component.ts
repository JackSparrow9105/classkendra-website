import { Component, signal } from '@angular/core';

interface Plan {
  name: string;
  tagline: string;
  students: string;
  monthly: number;
  /** WhatsApp messages included per month */
  messages: number;
  features: string[];
  cta: string;
  variant: 'basic' | 'popular' | 'ai';
}

@Component({
  selector: 'app-pricing',
  template: `
    <section id="pricing" class="section">
      <div class="container-x">
        <div class="text-center max-w-2xl mx-auto">
          <span class="eyebrow">Pricing</span>
          <h2 class="section-title">Simple Pricing for Every Institute</h2>
          <p class="section-sub mx-auto">14 din free try karo. Koi hidden fees nahi. Kabhi bhi cancel.</p>
        </div>

        <div class="mt-10 flex justify-center">
          <div class="inline-flex items-center gap-1 p-1.5 bg-gray-100 rounded-2xl">
            <button (click)="yearly.set(false)" class="px-5 py-2 rounded-xl text-sm font-semibold transition"
              [class.bg-white]="!yearly()" [class.shadow-sm]="!yearly()" [class.text-gray-900]="!yearly()" [class.text-gray-500]="yearly()">Monthly</button>
            <button (click)="yearly.set(true)" class="px-5 py-2 rounded-xl text-sm font-semibold transition flex items-center gap-2"
              [class.bg-white]="yearly()" [class.shadow-sm]="yearly()" [class.text-gray-900]="yearly()" [class.text-gray-500]="!yearly()">
              Yearly <span class="text-[11px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">2 months free</span>
            </button>
          </div>
        </div>

        <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          @for (p of plans; track p.name) {
            <div class="relative rounded-3xl p-6 flex flex-col transition" [class]="cardClass(p)">
              @if (p.variant === 'popular') {
                <span class="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">Most Popular</span>
              }
              <h3 class="text-xl font-bold">{{ p.name }} @if (p.variant === 'ai') { <span>✨</span> }</h3>
              <p class="mt-1 text-sm" [class]="muted(p)">{{ p.tagline }}</p>

              <div class="mt-5 flex items-end gap-1">
                <span class="text-4xl font-extrabold">₹{{ fmt(price(p)) }}</span>
                <span class="mb-1 font-medium" [class]="muted(p)">/mo</span>
              </div>
              <p class="mt-1 text-xs h-4" [class]="muted(p)">
                @if (yearly()) { Billed ₹{{ fmt(p.monthly * 10) }}/year }
              </p>

              <!-- Plan limits -->
              <div class="mt-5 rounded-2xl p-3.5 space-y-2.5 text-sm"
                [class]="p.variant === 'ai' ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-100'">
                <div class="flex items-center gap-2.5">
                  <span class="text-base">👥</span>
                  <span class="font-semibold">{{ p.students }}</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <svg class="w-4 h-4 shrink-0 text-whatsapp" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.13c-.24.68-1.41 1.3-1.95 1.38-.5.07-1.13.1-1.82-.12-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3s.75-2.13 1.01-2.42c.27-.29.58-.36.77-.36h.56c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.29.48-.14.17-.3.38-.43.5-.14.14-.29.3-.13.59.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.29.14.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.38-.24.65-.14.26.1 1.68.79 1.97.94.29.14.48.22.55.34.07.12.07.7-.17 1.38Z"/></svg>
                  <span><b>{{ fmt(p.messages) }}</b> WhatsApp msgs/mo</span>
                </div>
              </div>

              <ul class="mt-5 mb-7 space-y-3 text-sm font-medium flex-1" [class.text-gray-600]="p.variant !== 'ai'" [class.text-gray-300]="p.variant === 'ai'">
                @for (f of p.features; track f) {
                  <li class="flex items-start gap-2.5">
                    <span class="shrink-0 w-5 h-5 rounded-full grid place-items-center text-[11px]"
                      [class]="p.variant === 'ai' ? 'bg-purple-900/60 text-purple-300' : 'bg-indigo-50 text-indigo-600'">✓</span>
                    {{ f }}
                  </li>
                }
              </ul>
              <a href="#contact" class="w-full py-3 rounded-xl font-bold text-center transition" [class]="ctaClass(p)">
                {{ p.cta }}
              </a>
            </div>
          }
        </div>

        <!-- WhatsApp top-up -->
        <div class="mt-10 card p-5 sm:p-6 flex flex-col md:flex-row md:items-center gap-5">
          <div class="w-12 h-12 shrink-0 rounded-xl bg-green-50 grid place-items-center text-2xl">💬</div>
          <div class="flex-1">
            <h3 class="font-bold text-gray-900">Messages khatam ho gaye? Top-up kar lo.</h3>
            <p class="mt-1 text-sm text-gray-600">
              Extra pack: <b>{{ fmt(topUp.messages) }} messages – ₹{{ topUp.price }}</b>. Har fee reminder, absent alert, receipt aur result = 1 message.
              Limit ke 80% par aapko alert milega. Monthly messages agle mahine carry-forward nahi hote.
            </p>
          </div>
          <a href="#faq" class="btn-outline text-sm whitespace-nowrap">Kitne messages chahiye?</a>
        </div>

        <p class="mt-8 text-center text-sm text-gray-500">500+ students ya multiple branches? <a href="#contact" class="text-indigo-600 font-semibold hover:underline">Custom plan ke liye baat karein →</a></p>
      </div>
    </section>
  `,
})
export class PricingComponent {
  readonly yearly = signal(false);

  readonly topUp = { messages: 1000, price: 249 };

  readonly plans: Plan[] = [
    {
      name: 'Mini', tagline: 'Home tutors ke liye', students: 'Up to 40 students', monthly: 199, messages: 300,
      variant: 'basic', cta: 'Start Free',
      features: ['Digital Khata (Fee Tracking)', 'Mobile Attendance', 'Manual WhatsApp Reminders', 'PDF Receipts'],
    },
    {
      name: 'Starter', tagline: 'Chhoti tuition classes', students: 'Up to 100 students', monthly: 499, messages: 1000,
      variant: 'basic', cta: 'Start Free',
      features: ['Everything in Mini', 'Unlimited batches', 'Excel import & export', 'Fee & attendance reports'],
    },
    {
      name: 'Growth', tagline: 'Growing coaching institutes', students: 'Up to 300 students', monthly: 999, messages: 3000,
      variant: 'popular', cta: 'Get Started',
      features: ['Everything in Starter', 'Automated WhatsApp Reminders', 'Absent alerts to parents', 'Test Marks Broadcast', 'Multi-admin & staff roles'],
    },
    {
      name: 'AI Pro', tagline: 'Bade institutes & schools', students: 'Unlimited students', monthly: 1999, messages: 6000,
      variant: 'ai', cta: 'Upgrade to AI',
      features: ['Everything in Growth', 'AI Revenue Predictions', 'AI Drop-out Alerts', '24/7 AI Parent Chatbot', 'Priority support'],
    },
  ];

  price(p: Plan): number {
    return this.yearly() ? Math.round((p.monthly * 10) / 12) : p.monthly;
  }

  muted(p: Plan): string {
    return p.variant === 'ai' ? 'text-gray-400' : 'text-gray-500';
  }

  cardClass(p: Plan): string {
    return {
      basic: 'bg-white border border-gray-200 hover:shadow-md',
      popular: 'bg-white border-2 border-indigo-600 shadow-xl lg:-translate-y-3',
      ai: 'bg-gray-900 text-white shadow-xl',
    }[p.variant];
  }

  ctaClass(p: Plan): string {
    return {
      basic: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50',
      popular: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md',
      ai: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700',
    }[p.variant];
  }

  fmt(n: number): string {
    return n.toLocaleString('en-IN');
  }
}
