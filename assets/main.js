let essayEle = document.querySelector(".essay");
        let quoteStr = quoteEle.innerText;

        function updateText() {
            let str = "";
            for (let i = 0; i < essayStr.length; i++) {
                str += `<span style="opacity:${0.1 * Math.random(1,100)}rem">${quoteStr[i]}</span>`;
            }
            quoteEle.innerHTML = str;
        }
        setInterval(function () {
            updateText();
        }, 250);