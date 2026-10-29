import { Component, computed, inject } from '@angular/core';
import { LangService } from '../i18n/lang.service';

@Component({
  selector: 'app-problem',
  template: `
    <section class="section bg-gray-50">
      <div class="container-x">
        <div class="text-center max-w-2xl mx-auto">
          <span class="eyebrow">{{ c().eyebrow }}</span>
          <h2 class="section-title">{{ c().title }}</h2>
        </div>
        <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          @for (p of c().pains; track $index) {
            <div class="card p-6">
              <div class="text-3xl mb-4">{{ p.icon }}</div>
              <h3 class="font-bold text-gray-900">{{ p.title }}</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed">{{ p.text }}</p>
            </div>
          }
        </div>
        <p class="mt-12 text-center text-lg font-semibold text-gray-800">
          {{ c().bottom }} <a href="#features" class="text-indigo-600 hover:underline">{{ c().link }}</a>
        </p>
      </div>
    </section>
  `,
})
export class ProblemComponent {
  private readonly L = inject(LangService);

  private readonly copy = {
    hi: {
      eyebrow: 'Sound familiar?',
      title: 'Register, Excel aur yaad-daasht se institute nahi chalta',
      bottom: 'ClassKendra yeh sab automatic kar deta hai.',
      link: 'Dekhiye kaise →',
      pains: [
        { icon: '📞', title: 'Fees ke liye baar-baar call', text: 'Har mahine 50 parents ko yaad dilana, aur phir bhi aadhe log late.' },
        { icon: '📒', title: 'Register kho gaya?', text: 'Attendance aur fees ka poora hisaab ek register mein — ek galti, sab gadbad.' },
        { icon: '😶', title: 'Parents ko update nahi', text: 'Bacha aaya ya nahi, test mein kitne aaye — parents ko pata hi nahi chalta.' },
        { icon: '🚪', title: 'Students chupchaap chhod dete hain', text: 'Jab tak pata chale, student doosri coaching join kar chuka hota hai.' },
      ],
    },
    en: {
      eyebrow: 'Sound familiar?',
      title: "Registers, Excel sheets and memory can't run an institute",
      bottom: 'ClassKendra handles all of this automatically.',
      link: 'See how →',
      pains: [
        { icon: '📞', title: 'Calling parents for fees, again', text: 'Chasing 50 parents every month — and half of them still pay late.' },
        { icon: '📒', title: 'Lost the register?', text: "All your attendance and fee records in one notebook. One mistake and everything's off." },
        { icon: '😶', title: 'Parents stay in the dark', text: 'Did the child attend? How did the test go? Parents never find out.' },
        { icon: '🚪', title: 'Students quietly drop out', text: "By the time you notice, they've already joined another coaching centre." },
      ],
    },
  };
  readonly c = computed(() => this.copy[this.L.lang()]);
}
