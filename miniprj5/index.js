let products = [
    { id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
    { id: "P02", name: "Chuột không dây Logitech", price: 45, category: "Phụ kiện", inStock: true },
    { id: "P03", name: "Bàn phím cơ Keychron", price: 95, category: "Phụ kiện", inStock: false },
    { id: "P04", name: "Màn hình Dell UltraSharp", price: 450, category: "Màn hình", inStock: true },
    { id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phụ kiện", inStock: true }
];

function getInStockSortedByPriceDesc(products) {
    return products
        .filter(p => p.inStock === true)
        .sort((a, b) => b.price - a.price);
}
function getAccessoryNames(products) {
    return products
        .filter(p => p.category === "Phụ kiện")
        .map(p => p.name);
}

function getTotalInStockValue(products) {
    return products
        .filter(p => p.inStock === true)
        .reduce((sum, p) => sum + p.price,0);
}

const InStockSorted = getInStockSortedByPriceDesc(products);
console.log("Danh sách còn hàng theo giá giảm dần", InStockSorted);


const AccessoryNames = getAccessoryNames(products);
console.log('Tên phụ kiện', AccessoryNames);

const TotalValue = getTotalInStockValue(products);
console.log("Tổng giá trị bằng tiền của các mặt hàng", TotalValue);

