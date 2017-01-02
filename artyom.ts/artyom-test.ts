///<reference path="index.d.ts"/>
import artyomjs from './artyom';

// Get an unique ArtyomJS instance
let artyom = artyomjs.Artyom.getInstance();

// Add a command (not smart)
artyom.addCommands({
    description: 'Test command',
    indexes: ['hello', 'hi'],
    action: (i) => {
        console.log('hello action');
    }
});

// Add a smart command
artyom.addCommands({
    description: 'Test command 2',
    smart: true,
    indexes: ['test *'],
    action: (i, wildcard) => {
        console.log('wildcard: ', wildcard);
    }
});

// Get the browser voices
artyom.getVoices();

// Get all supported languages for Artyom
artyom.getLanguage();

// Get the artyom.js version
artyom.getVersion();