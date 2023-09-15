
const fs = require('fs');

const oldFilePath = 'shop_items.csv';
const newFilePath = 'shop_items_renamed.csv';

fs.rename(oldFilePath, newFilePath, (error) => {
    if (error) {
        console.error('Error renaming file:', error);
    } else {
        console.log('File renamed successfully');
    }
});