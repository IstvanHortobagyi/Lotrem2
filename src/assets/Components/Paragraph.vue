<template>
  <p>{{ paragraph }}oi</p>
</template>

<script>
import axios from "axios";
export default  {
  name: "Paragraph",
  data() {
    return {
      wordsArray: [],
      quotesArray: [],
      namesArray: [],
      sentence: '',
      paragraph: '',
    }
  },

  mounted() {
    this.getWords()
    this.getQuotes()
    this.getNames()
    this.generateParagraph()
  },

  methods: {
    getWords: function () {
      axios.get('/texts/words.json').then(response => {
        this.wordsArray = response.data;
      }).catch(error => {
        console.log(error);
      });
    },
    getQuotes: function () {
      axios.get('/texts/quotes.json').then(response => {
        this.quotesArray = response.data;
      }).catch(error => {
        console.log(error);
      })
    },
    getNames: function () {
      axios.get('/texts/names.json').then(response => {
        this.namesArray = response.data;
      }).catch(error => {
        console.log(error);
      })
    },
    generateSentence: function (minLength, maxLength) {
      this.sentence = "";
      let remainingWords = this.wordsArray;
      let usedWords = [];
      let length = Math.floor(Math.random()*(maxLength + 1 - minLength) + minLength);
      let nameLocation = Math.floor(Math.random()*(length));
      for (let i = 0; i < length; i++) {
        if (i === nameLocation) {
          this.sentence += this.namesArray[Math.floor(Math.random()*this.namesArray.length)] + ' ';
        } else {
          remainingWords = remainingWords.filter(x => !usedWords.includes(x));
          let wordIndex = Math.floor(Math.random()*remainingWords.length);
          usedWords.push(remainingWords[wordIndex]);
          console.log(usedWords);
          this.sentence += remainingWords[wordIndex] + ' ';
        }
        console.log(remainingWords);
      }
      this.sentence = this.sentence.trimEnd();
      let punctuation = Math.floor(Math.random()*10);
      if (punctuation < 7) {
        this.sentence += "."
      } else if (7 <= punctuation <9) {
        this.sentence += "?"
      }else if (punctuation >=9) {
        this.sentence += "!"
      }
      this.sentence = this.sentence.charAt(0).toUpperCase() + this.sentence.slice(1)
      return this.sentence;
    },
    generateParagraph:function (minLength, maxLength) {
      this.paragraph = "";
      let length = Math.floor(Math.random()*(maxLength + 1 - minLength) + minLength);
      let quoteLocation = Math.floor(Math.random()*(length));
      for (let i = 0; i < length; i++){
        if (i === quoteLocation) {
          this.paragraph += this.quotesArray[Math.floor(Math.random()*this.quotesArray.length)] + ' ';
        } else {
          this.paragraph += this.generateSentence(3, 12) + " ";
        }
      }
      this.paragraph = this.paragraph.trimEnd();
    }
  }
}

</script>