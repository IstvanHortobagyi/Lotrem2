<template>
	<h1 class="page-title mb-0">Unleash Your Inner Tolkien</h1>
	<p>Summon the power of the One Ring to generate endless Lorem Ipsum!</p>
	<a class="btn btn--md btn--success" href="#" @click.prevent="generateText()">Generate</a>
	<!-- TODO: Kell egy 'isGenerated' vagy hasonló nevű változó, ami nézi, hogy generáltál-e már szöveget, és rá kell v-if-elni a lenti elementekre -->
	<template v-if="isGenerated">
		<div class="generator-options">
			<a href="#" @click="showHtml = !showHtml">{{ showHtml ? "Show Text" : "Show HTML" }}</a>
		</div>
		<div v-if="!showHtml" v-html="fullText" class="generated"></div>
		<div v-else class="generated generated--code">{{ fullText }}</div>
	</template>
</template>

<script>
import axios from "axios";
import Paragraph from "@/assets/Components/Paragraph.vue";
import {utilsStore} from "@/stores/UtilsStore";

export default {
	setup() {
		return {
			utilsStore: utilsStore()
		}
	},
	components: {
		Paragraph
	},
	data() {
		return {
			fullText: '',
			showHtml: false,
			// TODO: Nézzük meg, hogy így jó-e
			isGenerated: false,
		}
	},
	mounted() {
		this.utilsStore.getWords()
		this.utilsStore.getNames()
		this.utilsStore.getQuotes()
	},
	computed: {
		words: function () {
			return this.utilsStore.words
		},
		names: function () {
			return this.utilsStore.names
		},
		quotes: function () {
			return this.utilsStore.quotes
		}
	},
	methods: {
		generateSentence: function (minLength, maxLength) {
			let sentence = "";
			let remainingWords = this.words;
			let usedWords = [];
			let length = Math.floor(Math.random()*(maxLength + 1 - minLength) + minLength);
			let nameLocation = Math.floor(Math.random()*(length));

			for (let i = 0; i < length; i++) {
				if (i === nameLocation) {
					sentence += this.names[Math.floor(Math.random()*this.names.length)] + ' ';
				} else {
					remainingWords = remainingWords.filter(x => !usedWords.includes(x));
					let wordIndex = Math.floor(Math.random()*remainingWords.length);
					usedWords.push(remainingWords[wordIndex]);
					sentence += remainingWords[wordIndex] + ' ';
				}
			}

			sentence = sentence.trimEnd();
			let punctuation = Math.floor(Math.random()*10);

			if (punctuation < 7) {
				sentence += "."
			} else if (7 <= punctuation < 9) {
				sentence += "?"
			} else if (punctuation >= 9) {
				sentence += "!"
			}

			sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1)
			return sentence;
		},

		generateParagraph:function (minLength, maxLength) {
			let paragraph = "";
			let length = Math.floor(Math.random()*(maxLength + 1 - minLength) + minLength);
			let quoteLocation = Math.floor(Math.random()*(length));

			for (let i = 0; i < length; i++) {
				if (i === quoteLocation) {
					paragraph += this.quotes[Math.floor(Math.random()*this.quotes.length)] + ' ';
				} else {
				  paragraph += this.generateSentence(3, 12) + " ";
				}
			}

			paragraph = paragraph.trimEnd();
			return paragraph;
		},

		generateText:function () {
			let paragraphs = "";

			for (let i = 0; i < 5; i++) {
				paragraphs += "<p>" + (this.generateParagraph(2, 5)) + "</p>";
			}

			// TODO: Nézzük meg, hogy így jó-e
			this.isGenerated = true;
			this.fullText = paragraphs;
		}
	}
}

</script>
