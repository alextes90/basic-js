const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        this.chain.push(value);
        return this;
    },
    removeLink(position) {
        if (position - 1 >= 0 && position - 1 < this.chain.length) {
            this.chain.splice(position - 1, 1);
            return this;
        } else {
            this.chain = [];
            throw new Error("You can't remove incorrect link!");
        }
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let chainString = "";
        for (let i = 0; i < +this.chain.length - 1; i++) {
            chainString += `( ${this.chain[i]} )~~`;
        }
        chainString += `( ${this.chain[this.chain.length - 1]} )`;
        this.chain = [];
        return chainString;
    },
};

module.exports = {
    chainMaker,
};
