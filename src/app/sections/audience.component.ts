import { Component } from '@angular/core';

@Component({
  selector: 'app-audience',
  template: `
    <section class="section">
      <div class="container-x">
        <div class="text-center max-w-2xl mx-auto">
          <span class="eyebrow">Who it's for</span>
          <h2 class="section-title">Chhoti tuition se lekar poore school tak</h2>
        </div>
        <div class="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          @for (a of audiences; track a.title) {
            <div class="rounded-2xl p-6 border-2 border-transparent hover:border-indigo-100 transition" [class]="a.bg">
              <div class="text-4xl">{{ a.icon }}</div>
              <h3 class="mt-4 text-lg font-bold text-gray-900">{{ a.title }}</h3>
              <p class="mt-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">{{ a.size }}</p>
              <p class="mt-3 text-sm text-gray-700 leading-relaxed">{{ a.text }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class AudienceComponent {
  readonly audiences = [
    { icon: '🏠', bg: 'bg-amber-50', title: 'Home Tutors', size: '10–50 students', text: 'Ghar se padhate hain? Fees aur attendance ka hisaab phone par, register ki zaroorat nahi.' },
    { icon: '🏫', bg: 'bg-indigo-50', title: 'Coaching Institutes', size: '50–500 students', text: 'Multiple batches, teachers aur subjects. Test series results seedhe parents tak.' },
    { icon: '🎓', bg: 'bg-green-50', title: 'Schools', size: '300+ students', text: 'Class-wise fees, transport fees, multi-admin access aur detailed reports.' },
    { icon: '🎵', bg: 'bg-pink-50', title: 'Academies', size: 'Music · Dance · Sports', text: 'Monthly memberships, slot-wise attendance aur renewal reminders.' },
  ];
}
