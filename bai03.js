const fs = require('fs');

// Thong tin sinh vien
const thongTin = 'Ho ten: Vo Duy Anh\nMa sinh vien: CDCNTT18A04\n';

// Tao tap tin thongtin.txt
fs.writeFile('thongtin.txt', thongTin, (err) => {
    if (err) throw err;

    console.log('1. Da tao tap tin thongtin.txt');

    // Doc noi dung tap tin
    fs.readFile('thongtin.txt', 'utf8', (err, data) => {
        if (err) throw err;

        console.log('\n2. Noi dung tap tin ban dau:');
        console.log(data);

        // Ghi noi ten lop
        fs.appendFile('thongtin.txt', '\nTen lop: CNTT18A', (err) => {
            if (err) throw err;

            console.log('3. Da ghi noi ten lop vao tap tin');

            // Doc lai tap tin
            fs.readFile('thongtin.txt', 'utf8', (err, data) => {
                if (err) throw err;

                console.log('\n4. Noi dung tap tin sau khi cap nhat:');
                console.log(data);
            });
        });
    });
});