import { Component } from '@angular/core';

@Component({
  selector: 'app-problem',
  template: `
    <section class="section bg-gray-50">
      <div class="container-x">
        <div class="text-center max-w-2xl mx-auto">
          <span class="eyebrow">Sound familiar?</span>
          <h2 class="section-title">Register, Excel aur yaad-daasht se institute nahi chalta</h2>
        </div>
        <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          @for (p of pains; track p.title) {
            <div class="card p-6">
              <div class="text-3xl mb-4">{{ p.icon }}</div>
              <h3 class="font-bold text-gray-900">{{ p.title }}</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed">{{ p.text }}</p>
            </div>
          }
        </div>
        <p class="mt-12 text-center text-lg font-semibold text-gray-800">
          ClassKendra yeh sab automatic kar deta hai. <a href="#features" class="text-indigo-600 hover:underline">Dekhiye kaise →</a>
        </p>
      </div>
    </section>
  `,
})
export class ProblemComponent {
  readonly pains = [
    { icon: '📞', title: 'Fees ke liye baar-baar call', text: 'Har mahine 50 parents ko yaad dilana, aur phir bhi aadhe log late.' },
    { icon: '📒', title: 'Register kho gaya?', text: 'Attendance aur fees ka poora hisaab ek register mein — ek galti, sab gadbad.' },
    { icon: '😶', title: 'Parents ko update nahi', text: 'Bacha aaya ya nahi, test mein kitne aaye — parents ko pata hi nahi chalta.' },
    { icon: '🚪', title: 'Students chupchaap chhod dete hain', text: 'Jab tak pata chale, student doosri coaching join kar chuka hota hai.' },
  ];
}
