function solve() {
    const [input1, input2] = document.querySelectorAll('textarea');
    const [button1, button2] = document.querySelectorAll('button');
    let showArea = document.querySelector('tbody');

    button1.addEventListener('click', generate);

    function generate(){
        const arrInput = JSON.parse(input1.value);
        for(obj of arrInput){
            let list = document.createElement('tr');

            let image = document.createElement('img'); image.src = obj.img;
            let imageTD = document.createElement('td'); imageTD.append(image);

            let namePar = document.createElement('p'); namePar.textContent = obj.name;
            let name = document.createElement('td'); name.append(namePar);

            let pricePar = document.createElement('p'); pricePar.textContent = obj.price;
            let price = document.createElement('td'); price.append(pricePar);

            let factorPar = document.createElement('p'); factorPar.textContent = obj.decFactor;
            let factor = document.createElement('td'); factor.append(factorPar);

            let isMarked = document.createElement('input'); isMarked.type='checkbox';
            let mark = document.createElement('td'); mark.append(isMarked);

            list.append(imageTD); list.append(name);list.append(price); list.append(factor); list.append(mark);
            showArea.append(list);
        }

        button2.addEventListener('click', buy);
        let allMarks = document.querySelectorAll('input');
        let allNames = []; let totalPrice = 0; let avgFactor = 0; let totalFactor = 0; let count = 0;

        function buy(){
            for(mark of allMarks){
                if(mark.checked){
                    let furniture = mark.parentElement.parentElement;
                    allNames.push(furniture.children[1].textContent);
                    totalPrice += Number(furniture.children[2].textContent);
                    totalFactor += Number(furniture.children[3].textContent);
                    count++;
                }
            }
            avgFactor = totalFactor / count;
            let namesParagraph = `Bought furniture: ${allNames.join(', ')}\n`;
            let priceParagraph = `Total price: ${totalPrice.toFixed(2)}\n`;
            let factorParagraph = `Average decoration factor: ${avgFactor}`;
            input2.textContent += namesParagraph; input2.textContent += priceParagraph; input2.textContent += factorParagraph;
        }
    }
}
