import { Component, signal } from '@angular/core';

interface Plan {
  name: string;
  students: string;
  monthly: number;
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

        <div class="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          @for (p of plans; track p.name) {
            <div class="relative rounded-3xl p-8 flex flex-col transition" [class]="cardClass(p)">
              @if (p.variant === 'popular') {
                <span class="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">Most Popular</span>
              }
              <h3 class="text-2xl font-bold">{{ p.name }} @if (p.variant === 'ai') { <span>✨</span> }</h3>
              <p class="mt-1 font-medium" [class.text-gray-500]="p.variant !== 'ai'" [class.text-gray-400]="p.variant === 'ai'">{{ p.students }}</p>
              <div class="mt-6 flex items-end gap-1">
                <span class="text-4xl font-extrabold">₹{{ fmt(price(p)) }}</span>
                <span class="mb-1 font-medium" [class.text-gray-500]="p.variant !== 'ai'" [class.text-gray-400]="p.variant === 'ai'">/mo</span>
              </div>
              <p class="mt-1 text-xs h-4" [class.text-gray-500]="p.variant !== 'ai'" [class.text-gray-400]="p.variant === 'ai'">
                @if (yearly()) { Billed ₹{{ fmt(p.monthly * 10) }}/year }
              </p>
              <ul class="mt-6 mb-8 space-y-3.5 text-sm font-medium flex-1" [class.text-gray-600]="p.variant !== 'ai'" [class.text-gray-300]="p.variant === 'ai'">
                @for (f of p.features; track f) {
                  <li class="flex items-start gap-3">
                    <span class="shrink-0 w-5 h-5 rounded-full grid place-items-center text-[11px]"
                      [class]="p.variant === 'ai' ? 'bg-purple-900/60 text-purple-300' : 'bg-indigo-50 text-indigo-600'">✓</span>
                    {{ f }}
                  </li>
                }
              </ul>
              <a href="#contact" class="w-full py-3.5 rounded-xl font-bold text-center transition" [class]="ctaClass(p)">
                {{ p.cta }}
              </a>
            </div>
          }
        </div>
        <p class="mt-10 text-center text-sm text-gray-500">500+ students ya multiple branches? <a href="#contact" class="text-indigo-600 font-semibold hover:underline">Custom plan ke liye baat karein →</a></p>
      </div>
    </section>
  `,
})
export class PricingComponent {
  readonly yearly = signal(false);

  readonly plans: Plan[] = [
    {
      name: 'Starter', students: 'Up to 100 students', monthly: 499, variant: 'basic', cta: 'Start Free',
      features: ['Digital Khata (Fee Tracking)', 'Mobile Attendance', 'Manual WhatsApp Reminders', 'PDF Receipts', '1 admin'],
    },
    {
      name: 'Growth', students: 'Up to 300 students', monthly: 999, variant: 'popular', cta: 'Get Started',
      features: ['Everything in Starter', 'Automated WhatsApp Reminders', 'Absent alerts to parents', 'Test Marks Broadcast', 'Multi-admin & staff roles', 'Excel / PDF reports'],
    },
    {
      name: 'AI Pro', students: 'Unlimited students', monthly: 1999, variant: 'ai', cta: 'Upgrade to AI',
      features: ['Everything in Growth', 'AI Revenue Predictions', 'AI Drop-out Alerts', '24/7 AI Parent Chatbot', 'AI report card remarks', 'Priority support'],
    },
  ];

  price(p: Plan): number {
    return this.yearly() ? Math.round((p.monthly * 10) / 12) : p.monthly;
  }

  cardClass(p: Plan): string {
    return {
      basic: 'bg-white border border-gray-200 hover:shadow-md',
      popular: 'bg-white border-2 border-indigo-600 shadow-xl md:-translate-y-3',
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
