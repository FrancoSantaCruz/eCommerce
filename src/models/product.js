const {readFileSync, writeFileSync, unlinkSync, existsSync} = require("fs");
const {resolve} = require('path');

const model = {
    file: resolve(__dirname, "../data", "products.json"),
    read: () => readFileSync(model.file),
    convert: data => JSON.stringify(data, null, 2),
    write: data => writeFileSync(model.file, model.convert(data)),
    list: () => JSON.parse(model.read()),
    all: () => model.list().filter(p => p.stock > 0),
    filter: (prop, value) => model.all().filter(p => typeof value !== "string" ? p[prop] == value : p[prop].includes(value)),
    match: (prop, value) => model.all().find(p => p[prop] == value),
    generate: data  => Object({
        id: model.list().length > 0 ? model.list().sort( (a,b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0 ).pop().id + 1 : 1,
        name: data.name,
        description: data.description,
        price: Number(data.price),
        stock: Number(data.stock)
    }),
    create: data => {
        let lista = model.list().sort( (a,b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
        lista.push(data);
        model.write(lista);
    },
    update: data => {
        let products = model.list().sort( (a,b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
        products = products.map((prod) => {
            if(prod.id == data.id) {
                prod.name = data.name;
                prod.description = data.description;
                prod.price = Number(data.price);
                prod.stock = Number(data.stock);
                return prod;
            }
            return prod;
        })
        model.write(products);
    }
}

module.exports = model; 