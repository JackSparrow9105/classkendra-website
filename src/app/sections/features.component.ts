import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  template: `
    <section id="features" class="section">
      <div class="container-x">
        <div class="max-w-2xl">
          <span class="eyebrow">Features</span>
          <h2 class="section-title">Institute chalane ke liye jo chahiye, sab ek jagah</h2>
          <p class="section-sub">Phone par bhi, laptop par bhi. Aap, aapke teachers aur parents — sab connected.</p>
        </div>
        <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          @for (f of features; track f.title) {
            <div class="group card p-6 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-100 transition">
              <div class="w-12 h-12 rounded-xl grid place-items-center text-2xl mb-5" [class]="f.tint">{{ f.icon }}</div>
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
  readonly features = [
    { icon: '💰', tint: 'bg-indigo-50', title: 'Digital Fee Khata', text: 'Har student ki due, paid aur pending fees ek nazar mein. Installments aur discounts bhi.' },
    { icon: '✅', tint: 'bg-green-50', title: 'Mobile Attendance', text: 'Ek tap mein present/absent. Absent hone par parents ko turant WhatsApp alert.' },
    { icon: '💬', tint: 'bg-emerald-50', title: 'WhatsApp Reminders', text: 'Due date se pehle aur baad mein automatic reminders, UPI payment link ke saath.' },
    { icon: '🧾', tint: 'bg-amber-50', title: 'Instant Receipts', text: 'Payment milte hi PDF receipt parents ko WhatsApp par. Koi kaagaz nahi.' },
    { icon: '📝', tint: 'bg-pink-50', title: 'Test Marks Broadcast', text: 'Marks enter karo, ek click mein saare parents ko result bhej do.' },
    { icon: '🗓️', tint: 'bg-sky-50', title: 'Batches & Timetable', text: 'Multiple batches, subjects aur timings manage karo. Holiday notice bhi ek click mein.' },
    { icon: '👩‍🏫', tint: 'bg-purple-50', title: 'Staff & Roles', text: 'Teachers ko sirf attendance ka access, accountant ko sirf fees ka. Aap control mein.' },
    { icon: '📊', tint: 'bg-orange-50', title: 'Reports & Excel', text: 'Monthly collection, defaulters list, attendance report — Excel/PDF mein download.' },
  ];
}
