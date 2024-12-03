'use strict';

//<script src="название.js"></script>

//pid
//animationType

let // постоянные переменные
    popup = document.querySelectorAll('.popup'),
    popupSwitch = document.querySelectorAll('.popupSwitch'),
    
    stateAttribute = "popupState",
    anim = "animationType"
;

// Создание связей между попапами
popupSwitch.forEach(e => e.addEventListener('click', PopupSwitch));

// Переключение popup нажатием на popupSwitch
function PopupSwitch()
{
    if (this != undefined) 
    {
        function cf(e) {e.setAttribute(stateAttribute, "false")}
        function ct(e) {e.setAttribute(stateAttribute, "true")}
        
        let state, pid, at = "none";
        let sizeX = window.innerWidth;
        let sizeY = window.innerHeight;
        
        // Айди попапа
        if (this.hasAttribute('pid')) {pid = this.getAttribute("pid")}
        
        // Анимация попапа
        if (this.hasAttribute(anim)) {at = this.getAttribute(anim)}

        // ошибка при вызове попапа откуда-то не оттуда
        if ((this != undefined) && this.hasAttribute(stateAttribute)) 
        {state = this.getAttribute(stateAttribute)}
        else {
            this.setAttribute(stateAttribute, true);
            state = true;
            console.log("Фукнция вызывается от лица неизвестного объекта");
        }

        // основной код
        popup.forEach(e => {
            trueStatements = ["ScaleX(1)", "ScaleY(1)", "Scale(1)", "translateX(0)", "rotate(0deg)"];
            falseStatements = ["ScaleX(0)", "ScaleY(0)", "Scale(0)"];
            animationList = ["opacity", "squishToX", "squishToY", "scaling", "moveLeft", "moveRight", "moveUp", "moveDown", "rotate"]
            if (e.attributes["pid"].nodeValue == this.attributes["pid"].nodeValue) {
                let animationsMassive = at.split(' ');
                if (animationsMassive.length > 1) {
                    for (let k = 0; k < animationsMassive.length; k++) {
                        for (let l = 0; l < animationList.length; l++) 
                        {
                            let transformString = '';
                            var opaciting;
                            
                            if (animationsMassive.includes(animationList[0])) {opaciting = true};
                            if (animationsMassive[k] = animationList[l])
                        }
                    }
                }
                
                switch (at)
                {                        
                    //
                    case "opacity":
                        switch (state) {
                            case "true": // Выключение
                                e.style.opacity = 0;
                                cf(this);
                                break;
                            case "false": // Включение
                                e.style.opacity = 1;
                                ct(this);
                                break;
                        }
                        break;
                    //

                    //
                    case "squishToX":
                        switch (state) {
                            case "true": // Выключение
                                e.style.setProperty("transform", falseStatements[0])
                                cf(this);
                                break;
                            case "false": // Включение
                                e.style.setProperty("transform", trueStatements[0])
                                ct(this);
                                break;
                        }
                        break;
                    //

                    //
                    case "squishToY":
                        switch (state) {
                            case "true": // Выключение
                                e.style.setProperty("transform", falseStatements[1])
                                cf(this);
                                break;
                            case "false": // Включение
                                e.style.setProperty("transform", trueStatements[1])
                                ct(this);
                                break;
                        }
                        break;
                    //

                    //
                    case "scaling":
                        switch (state) {
                            case "true": // Выключение
                                e.style.setProperty("transform", falseStatements[2])
                                cf(this);
                                break;
                            case "false": // Включение
                                e.style.setProperty("transform", trueStatements[2])
                                ct(this);
                                break;
                        }
                        break;
                    //

                    //
                    case "moveLeft":
                        let x = e.getBoundingClientRect().right;
                        let diffL = sizeX - x;
                        switch (state) {
                            case "true": // Выключение
                                e.style.setProperty("transform", `translateX(${-1*diffL}px)`)
                                cf(this);
                                break;
                            case "false": // Включение
                                e.style.setProperty("transform", trueStatements[3])
                                ct(this);
                                break;
                        }
                        break;
                    //

                    //
                    case "moveRight":
                        let xx = e.getBoundingClientRect().left;
                        let diffR = sizeX - xx;
                        switch (state) {
                            case "true": // Выключение
                                e.style.setProperty("transform", `translateX(${diffR}px)`)
                                cf(this);
                                break;
                            case "false": // Включение
                                e.style.setProperty("transform", trueStatements[3])
                                ct(this);
                                break;
                        }
                        break;
                    //

                    //
                    case "moveUp":
                        let y = e.getBoundingClientRect().bottom;
                        let diffU = sizeY - y;
                        switch (state) {
                            case "true": // Выключение
                                e.style.setProperty("transform", `translateY(${-1*y}px)`)
                                cf(this);
                                break;
                            case "false": // Включение
                                e.style.setProperty("transform", trueStatements[3])
                                ct(this);
                                break;
                        }
                        break;
                    //

                    //
                    case "moveDown":
                        let yy = e.getBoundingClientRect().top;
                        let diffD = sizeY - yy;
                        switch (state) {
                            case "true": // Выключение
                                e.style.setProperty("transform", `translateY(${diffD}px)`)
                                cf(this);
                                break;
                            case "false": // Включение
                                e.style.setProperty("transform", trueStatements[3])
                                ct(this);
                                break;
                        }
                        break;
                    //
                    
                    //
                    case "rotate":
                        switch (state) {
                            case "true": // Выключение
                                e.style.setProperty("transform", "rotate(180deg) scale(0)")
                                cf(this);
                                break;
                            case "false": // Включение
                                e.style.setProperty("transform", trueStatements[4])
                                ct(this);
                                break;
                        }
                        break;
                    //
                    
                    //
                    default:
                        switch (state) {
                            case "true": // Выключение
                                e.style.visibility = "hidden";
                                cf(this);
                                break;
                            case "false": // Включение
                                e.style.visibility = "visible";
                                ct(this);
                                break;
                        }
                }// switch block
            }
        });
    }
    else {console.log("Фукнция вызывается от лица неизвестного объекта")}
};