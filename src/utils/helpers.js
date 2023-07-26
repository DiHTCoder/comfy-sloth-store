export const formatPrice = (number) => {
    return new Intl.NumberFormat('vi', {
        style: 'currency',
        currency: 'VND',
    }).format(number);
};

export const getUniqueValues = () => {};
