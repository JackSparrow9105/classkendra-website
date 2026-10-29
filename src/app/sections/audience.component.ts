import { Component, computed, inject } from '@angular/core';
import { LangService } from '../i18n/lang.service';

@Component({
  selector: 'app-audience',
  template: `
    <section class="section">
      <div class="container-x">
        <div class="text-center max-w-2xl mx-auto">
          <span class="eyebrow">Who it's for</span>
          <h2 class="section-title">{{ c().title }}</h2>
        </div>
        <div class="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          @for (a of c().items; track $index; let i = $index) {
            <div class="rounded-2xl p-6 border-2 border-transparent hover:border-indigo-100 transition" [class]="meta[i].bg">
              <div class="text-4xl">{{ meta[i].icon }}</div>
              <h3 class="mt-4 text-lg font-bold text-gray-900">{{ a.title }}</h3>
              <p class="mt-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">{{ meta[i].size }}</p>
              <p class="mt-3 text-sm text-gray-700 leading-relaxed">{{ a.text }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class AudienceComponent {
  private readonly L = inject(LangService);

  readonly meta = [
    { icon: '🏠', bg: 'bg-amber-50', size: '10–50 students' },
    { icon: '🏫', bg: 'bg-indigo-50', size: '50–500 students' },
    { icon: '🎓', bg: 'bg-green-50', size: '300+ students' },
    { icon: '🎵', bg: 'bg-pink-50', size: 'Music · Dance · Sports' },
  ];

  private readonly copy = {
    hi: {
      title: 'Chhoti tuition se lekar poore school tak',
      items: [
        { title: 'Home Tutors', text: 'Ghar se padhate hain? Fees aur attendance ka hisaab phone par, register ki zaroorat nahi.' },
        { title: 'Coaching Institutes', text: 'Multiple batches, teachers aur subjects. Test series results seedhe parents tak.' },
        { title: 'Schools', text: 'Class-wise fees, transport fees, multi-admin access aur detailed reports.' },
        { title: 'Academies', text: 'Monthly memberships, slot-wise attendance aur renewal reminders.' },
      ],
    },
    en: {
      title: 'From home tuition to full schools',
      items: [
        { title: 'Home Tutors', text: 'Teach from home? Track fees and attendance on your phone — no register needed.' },
        { title: 'Coaching Institutes', text: 'Multiple batches, teachers and subjects. Test series results go straight to parents.' },
        { title: 'Schools', text: 'Class-wise fees, transport fees, multi-admin access and detailed reports.' },
        { title: 'Academies', text: 'Monthly memberships, slot-wise attendance and renewal reminders.' },
      ],
    },
  };
  readonly c = computed(() => this.copy[this.L.lang()]);
}
