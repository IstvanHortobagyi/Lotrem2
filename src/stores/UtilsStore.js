import {defineStore} from 'pinia';
import axios from "axios";
export const utilsStore = defineStore("utilsStore", {
    state: () => ({
        wordsArray: [],
        quotesArray: [],
        namesArray: [],
    }),
    actions: {
        async getWords() {
            return axios.get('assets/static/texts/words.json').then(response => {
                this.wordsArray = response.data;
            }).catch(error => {
                console.log(error);
            });
        },
        async getQuotes() {
            return axios.get('assets/static/texts/quotes.json').then(response => {
                this.quotesArray = response.data;
            }).catch(error => {
                console.log(error);
            })
        },
        async getNames() {
            return axios.get('assets/static/texts/names.json').then(response => {
                this.namesArray = response.data;
            }).catch(error => {
                console.log(error);
            })
        }
    },
    getters: {
        words: state => state.wordsArray,
        quotes: state => state.quotesArray,
        names: state => state.namesArray,
    }
});