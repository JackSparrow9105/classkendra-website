import { Component, computed, inject } from '@angular/core';
import { LangService } from '../i18n/lang.service';

@Component({
  selector: 'app-how-it-works',
  template: `
    <section id="how" class="section bg-indigo-950 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.07] pointer-events-none"
           style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px;"></div>
      <div class="container-x relative">
        <div class="text-center max-w-2xl mx-auto">
          <span class="eyebrow !text-indigo-300">How it works</span>
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">{{ c().title }}</h2>
        </div>
        <ol class="mt-16 grid md:grid-cols-3 gap-8 relative">
          <div class="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-indigo-500/0 via-indigo-400/60 to-indigo-500/0"></div>
          @for (s of c().steps; track $index; let i = $index) {
            <li class="relative text-center">
              <div class="mx-auto w-16 h-16 rounded-2xl bg-indigo-600 border border-indigo-400/40 grid place-items-center text-2xl font-extrabold shadow-lg shadow-indigo-900/50">
                {{ i + 1 }}
              </div>
              <h3 class="mt-6 text-xl font-bold">{{ s.title }}</h3>
              <p class="mt-2 text-indigo-200/90 text-sm leading-relaxed max-w-xs mx-auto">{{ s.text }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class HowItWorksComponent {
  private readonly L = inject(LangService);

  private readonly copy = {
    hi: {
      title: '10 minute mein shuru. Bas 3 steps.',
      steps: [
        { title: 'Students add karo', text: 'Excel upload karo ya phone se ek-ek karke. Naam, batch, fees aur parent ka WhatsApp number.' },
        { title: 'Fees & batches set karo', text: 'Monthly fees, due date aur reminder schedule ek baar set karo — baaki automatic.' },
        { title: 'Relax karo 😌', text: 'Reminders, receipts aur attendance alerts khud-ba-khud parents tak pahunchenge.' },
      ],
    },
    en: {
      title: 'Up and running in 10 minutes. Just 3 steps.',
      steps: [
        { title: 'Add your students', text: "Upload from Excel or add them one by one on your phone: name, batch, fees and the parent's WhatsApp number." },
        { title: 'Set fees & batches', text: 'Set monthly fees, due dates and the reminder schedule once — the rest runs on its own.' },
        { title: 'Relax 😌', text: 'Reminders, receipts and attendance alerts reach parents automatically.' },
      ],
    },
  };
  readonly c = computed(() => this.copy[this.L.lang()]);
}
