const readline = require('readline-sync');

function start(){
    const  content = {};
    
    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();
    
    function askAndReturnSearchTerm(){
        return readline.question("Digite um termo do Wikipedia: ");
    }
    
    function askAndReturnPrefix(){
        const prefix = ['Quem é?', 'O que é?', 'A historia de'];
        const selectedPrefixIndex = readline.keyInSelect(prefix, "Escolha uma opção");
        const selectedPrefixText = prefix[selectedPrefixIndex];
        
        return selectedPrefixText;
    }
    
    console.log(content);
} 

start();
