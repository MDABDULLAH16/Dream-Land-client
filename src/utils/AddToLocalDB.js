import { toast } from "react-toastify";

 const getStoredItem = () => {
    const getOldItem = localStorage.getItem('cart');
    if (getOldItem) {
        const parseItem = JSON.parse(getOldItem);
        return parseItem || [];
    }
    return [];
};

 const addToLocalDB = (id) => {
    const oldItem = getStoredItem();
    if (oldItem.includes(id)) {
        toast.error('this product already added!');
        return        
    } else {
        const newItem = [...oldItem, id];
        localStorage.setItem('cart', JSON.stringify(newItem));
        toast.success('Product added successful!')
    }
}

export {addToLocalDB,getStoredItem}
