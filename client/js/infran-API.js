function addfruser(nik, nama) {
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa("test005" + ":" + "test005@2019"));

    fetch('http://trial.api.infran.grit.id/api/infran/addfruser', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            nik: nik,
            nama: nama
        })

    })
        .then(res => res.json())
        .then(res => console.log(res));
}

function rtm() {
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa("test005" + ":" + "test005@2019"));

    fetch('https://cors-anywhere.herokuapp.com/' + 'http://trial.api.infran.grit.id/api/infran/rtm', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            command: "FORCED_TRAINING"
        })

    })
        .then(res => res.json())
        .then(res => console.log(res));
}

function uploadReg(element, nik, nama) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = async function () {
        const data = reader.result.split("base64,")[1];
        const name = file.name;
        const message = reader.result.split("base64,")[1];
        const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
        const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
        const hash = hashHex;

        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa("test005" + ":" + "test005@2019"));

        fetch('https://cors-anywhere.herokuapp.com/' + 'http://trial.api.infran.grit.id/api/infran/uploadreg', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                data: data,
                hash: hash,
                nik: nik,
                file_name: name,
                nama: nama
            })

        })
            .then(res => res.json())
            .then(res => console.log(res));
    }
    reader.readAsDataURL(file);
}


function whoisit(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = async function () {
        const data = reader.result.split("base64,")[1];
        const message = reader.result.split("base64,")[1];
        const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
        const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
        const hash = hashHex;

        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa("test005" + ":" + "test005@2019"));

        fetch('https://cors-anywhere.herokuapp.com/' + 'http://trial.api.infran.grit.id/api/infran/whoisit', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                data: data,
                hash: hash,
                trial: "yes"
            })

        })
            .then(res => res.json())
            .then(res => console.log(res));
    }
    reader.readAsDataURL(file);
}