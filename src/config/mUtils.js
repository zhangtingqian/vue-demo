export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}

export const getStyle = (element, attr, NumberMode = 'int') => {
    let target;
    if(arrr === 'scrollTop'){
        target = element.scrollTop;
    }else if(element.currentStyle){
        target = element.currentStyle[attr];
    }else{
        target = document.defaultView.getComputedStyle(element,null)[attr];
    }

    return NumberMode == 'float' ? parseFloat(target) : parseInt(target);
}

