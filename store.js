class Store {
    listProduct;
    name;

    constructor(nameInput) {
        this.name = nameInput;
        this.listProduct = [];
        let sp1 = new Product(1, "Bánh mì", 10000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7sIk1tTTP3zeD4YOWjA1s_MXozzOhBDOV6WUd-kqSRw&s");
        let sp2 = new Product(2, "Kẹo", 1000, "https://www.lottemart.vn/media/catalog/product/cache/0x0/8/9/8935001713838-1.jpg.webp");
        this.listProduct.push(sp1);
        this.listProduct.push(sp2);
    }

    add(newProduct) {
        this.listProduct.push(newProduct);
    }
    update(index, newProduct) {
        this.listProduct[index] = newProduct;
    }


    remove(index) {
        this.listProduct.splice(index, 1); // xóa đi phần tử thứ index, 1 là số lượng phần tử tính từ vị trí đó muốn xóa
    }
}