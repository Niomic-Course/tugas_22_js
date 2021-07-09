function panggilTeks() {
    let data = 'Saya ingin belajar bersama';
    result = data.split(' ');

    result.forEach(function (item, index) {
        console.log(`Item: ${item} index ke ${index}`);
    });
}

panggilTeks();