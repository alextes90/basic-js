const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(isDirect = true) {
        if (isDirect) {
            this.modification = "direct";
        } else this.modification = "reverse";
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    encrypt(message, key) {
        if (!message || !key) {
            throw new Error("Incorrect arguments!");
        }
        let encryptMessage = "";
        const upperMessage = message.toUpperCase();
        const upperKey = key.toUpperCase();
        let counter = 0;

        for (let i = 0; i < upperMessage.length; i++) {
            if (this.alphabet.includes(upperMessage[i])) {
                encryptMessage +=
                    this.alphabet[
                        (this.alphabet.indexOf(upperMessage[i]) +
                            this.alphabet.indexOf(
                                upperKey[counter % key.length]
                            )) %
                            this.alphabet.length
                    ];
                counter++;
            } else encryptMessage += upperMessage[i];
            console.log(
                this.alphabet.indexOf(upperMessage[i]),
                upperKey[i % key.length]
            );
        }
        if (this.modification === "direct") {
            return encryptMessage;
        } else return encryptMessage.split("").reverse().join("");
    }
    decrypt(message, key) {
        if (!message || !key) {
            throw new Error("Incorrect arguments!");
        }

        let encryptMessage = "";
        const upperMessage = message.toUpperCase();
        const upperKey = key.toUpperCase();
        let counter = 0;

        for (let i = 0; i < upperMessage.length; i++) {
            if (this.alphabet.includes(upperMessage[i])) {
                encryptMessage +=
                    this.alphabet[
                        (this.alphabet.indexOf(upperMessage[i]) -
                            this.alphabet.indexOf(
                                upperKey[counter % key.length]
                            ) >
                        0
                            ? this.alphabet.indexOf(upperMessage[i]) -
                              this.alphabet.indexOf(
                                  upperKey[counter % key.length]
                              )
                            : this.alphabet.indexOf(upperMessage[i]) -
                              this.alphabet.indexOf(
                                  upperKey[counter % key.length]
                              ) +
                              26) % this.alphabet.length
                    ];
                counter++;
            } else encryptMessage += upperMessage[i];
        }
        if (this.modification === "direct") {
            return encryptMessage;
        } else return encryptMessage.split("").reverse().join("");
    }
}

module.exports = {
    VigenereCipheringMachine,
};
