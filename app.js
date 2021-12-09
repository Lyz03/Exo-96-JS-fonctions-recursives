function aFunction(a) {
    if (a < 20) {
        let div = document.createElement('div');
        div.innerText = a.toString();
        document.body.appendChild(div);
        a += 2;
        aFunction(a);
    }

}

aFunction(3)