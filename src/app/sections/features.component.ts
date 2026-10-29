import { Component, computed, inject } from '@angular/core';
import { LangService } from '../i18n/lang.service';

@Component({
  selector: 'app-features',
  template: `
    <section id="features" class="section">
      <div class="container-x">
        <div class="max-w-2xl">
          <span class="eyebrow">Features</span>
          <h2 class="section-title">{{ c().title }}</h2>
          <p class="section-sub">{{ c().sub }}</p>
        </div>
        <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          @for (f of c().items; track $index; let i = $index) {
            <div class="group card p-6 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-100 transition">
              <div class="w-12 h-12 rounded-xl grid place-items-center text-2xl mb-5" [class]="icons[i].tint">{{ icons[i].icon }}</div>
              <h3 class="font-bold text-gray-900">{{ f.title }}</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed">{{ f.text }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class FeaturesComponent {
  private readonly L = inject(LangService);

  readonly icons = [
    { icon: '💰', tint: 'bg-indigo-50' },
    { icon: '✅', tint: 'bg-green-50' },
    { icon: '💬', tint: 'bg-emerald-50' },
    { icon: '🧾', tint: 'bg-amber-50' },
    { icon: '📝', tint: 'bg-pink-50' },
    { icon: '🗓️', tint: 'bg-sky-50' },
    { icon: '👩‍🏫', tint: 'bg-purple-50' },
    { icon: '📊', tint: 'bg-orange-50' },
  ];

  private readonly copy = {
    hi: {
      title: 'Institute chalane ke liye jo chahiye, sab ek jagah',
      sub: 'Phone par bhi, laptop par bhi. Aap, aapke teachers aur parents — sab connected.',
      items: [
        { title: 'Digital Fee Khata', text: 'Har student ki due, paid aur pending fees ek nazar mein. Installments aur discounts bhi.' },
        { title: 'Mobile Attendance', text: 'Ek tap mein present/absent. Absent hone par parents ko turant WhatsApp alert.' },
        { title: 'WhatsApp Reminders', text: 'Due date se pehle aur baad mein automatic reminders, UPI payment link ke saath.' },
        { title: 'Instant Receipts', text: 'Payment milte hi PDF receipt parents ko WhatsApp par. Koi kaagaz nahi.' },
        { title: 'Test Marks Broadcast', text: 'Marks enter karo, ek click mein saare parents ko result bhej do.' },
        { title: 'Batches & Timetable', text: 'Multiple batches, subjects aur timings manage karo. Holiday notice bhi ek click mein.' },
        { title: 'Staff & Roles', text: 'Teachers ko sirf attendance ka access, accountant ko sirf fees ka. Aap control mein.' },
        { title: 'Reports & Excel', text: 'Monthly collection, defaulters list, attendance report — Excel/PDF mein download.' },
      ],
    },
    en: {
      title: 'Everything you need to run your institute, in one place',
      sub: 'On phone or laptop. You, your teachers and parents — all connected.',
      items: [
        { title: 'Digital Fee Ledger', text: "See every student's due, paid and pending fees at a glance. Installments and discounts included." },
        { title: 'Mobile Attendance', text: 'Mark present or absent in one tap. Parents get an instant WhatsApp alert if their child is absent.' },
        { title: 'WhatsApp Reminders', text: 'Automatic reminders before and after the due date, with a UPI payment link.' },
        { title: 'Instant Receipts', text: 'A PDF receipt reaches parents on WhatsApp the moment payment arrives. No paper.' },
        { title: 'Test Marks Broadcast', text: 'Enter marks once and send results to every parent in one click.' },
        { title: 'Batches & Timetable', text: 'Manage multiple batches, subjects and timings. Send holiday notices in one click.' },
        { title: 'Staff & Roles', text: 'Teachers see only attendance, your accountant only fees. You stay in control.' },
        { title: 'Reports & Excel', text: 'Monthly collection, defaulters list, attendance report — download as Excel or PDF.' },
      ],
    },
  };
  readonly c = computed(() => this.copy[this.L.lang()]);
}
