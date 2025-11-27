const display = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons button');
buttons.forEach( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                    break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
            break;
                        case 'x':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
                case 'X^2':
                    display.innerText*=display.innerText;
                    break;
                    case 'X^3':
                    display.innerText*=display.innerText*display.innerText;
                    break;
                    
            default:
                display.innerText += e.target.innerText;
        }
    });
});