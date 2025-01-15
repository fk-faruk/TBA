import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-text',
  templateUrl: './dynamic-text.component.html',
  styleUrls: ['./dynamic-text.component.css'],
})
export class DynamicTextComponent implements OnInit {
  phrases = [
    "Automation",
    "Innovative Ideas",
    
  ];


//   Smart-Thinking & Strategic Insights
// Innovative Business Solutions
// Data-Driven Decision Making
// Transforming Analytics into Growth

  displayedText = '';
  currentPhraseIndex = 0;
  typingSpeed = 100; // Speed of typing (ms)
  erasingSpeed = 50; // Speed of erasing (ms)
  delayBetweenPhrases = 1000; // Delay before switching phrases (ms)

  ngOnInit(): void {
    this.typePhrase();
  }

  typePhrase() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      this.displayedText += currentPhrase[charIndex];
      charIndex++;

      if (charIndex === currentPhrase.length) {
        clearInterval(typeInterval);
        setTimeout(() => this.erasePhrase(), this.delayBetweenPhrases);
      }
    }, this.typingSpeed);
  }

  erasePhrase() {
    const eraseInterval = setInterval(() => {
      this.displayedText = this.displayedText.slice(0, -1);

      if (this.displayedText === '') {
        clearInterval(eraseInterval);
        this.currentPhraseIndex =
          (this.currentPhraseIndex + 1) % this.phrases.length;
        setTimeout(() => this.typePhrase(), this.delayBetweenPhrases);
      }
    }, this.erasingSpeed);
  }
}
