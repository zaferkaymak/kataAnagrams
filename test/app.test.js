const app = require('../app');
const mocha = require('mocha');
const assert = require('chai').assert;

describe('give_me_anagrams', ()=> {
    it('we should have anagrams', () => {
       app.checkAnagram('abc','cba', (result)=> {
            assert.isTrue(result);
       });
    });
});

describe('give_me_array', ()=> {
    it('we should have an array of words', (done) => {
        const inputFile = "wordlist.txt";
        app.readFromFile(inputFile, (result)=> {
            assert.isNotNull(result);
            done();
        });
    });
});

describe('give_me_anagrams_list', ()=> {
    it('we should have anagrams list', (done) => {
        const anagramsWord = 'abc';
        app.createdAnagramList(anagramsWord, (result)=> {
            assert.equal(result.length, 6);
            done();
        });
    });
});




