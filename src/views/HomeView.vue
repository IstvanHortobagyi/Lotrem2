<template>
	<header class="header">
		<a class="logo" href="#">
			<img class="logo__image" src="/assets/static/images/logo.png" alt="placeholder">
		</a>
		<nav class="nav">
			<ul class="nav__list">
				<li class="nav__item">
					<a class="nav__link" href="#">About</a>
					<a class="nav__link" href="#">Generator</a>
					<a class="nav__link" href="#">Contact</a>
				</li>
			</ul>
		</nav>
	</header>

	<main class="main">
		<a class="btn btn--md btn--success" href="#" @click.prevent="generateText()">Generate</a>
		<br><br>
		<a href="#" @click="showHtml = !showHtml">{{ showHtml ? "Show Text" : "Show HTML" }}</a>
		<span v-html="fullText" v-if="!showHtml"></span>
		<span v-else>{{ fullText }}</span>
	</main>

	<footer class="footer">
		<p>&copy; Copyright 2023, LotremIpsum.com</p>
		<p>
			Design by <a href="https://rolandszabo.design/" target="_blank" rel="noreferrer noopener">Roland Szabó</a>,
			Coding by <a href="https://istvanhortobagyi.com/" target="_blank" rel="noreferrer noopener">István Hortobágyi</a>,
			Illustrations by <a href="#" target="_blank" rel="noreferrer noopener">Isabelle Russell</a>.
		</p>
	</footer>
</template>

<script>
import axios from "axios";
import Paragraph from "@/assets/Components/Paragraph.vue";
import {utilsStore} from "@/stores/UtilsStore";

export default  {
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

			this.fullText = paragraphs;
		}
	}
}

</script>
