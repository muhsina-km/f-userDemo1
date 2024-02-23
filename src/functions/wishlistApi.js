import axios from 'axios';

// Function to add item to wishlist using Axios
const addToWishlist = async (email, plantid) => {
    try {
        const response = await axios.post('http://localhost:4005/wishlist/add-to-wishlist', {
            email,
            plantid,
        });
        return response.data;
    } catch (error) {
        console.error('Error adding item to wishlist:', error);
        throw error;
    }
};

// Function to view wishlist using Axios
const viewWishlist = async (email) => {
    try {
        const response = await axios.get('http://localhost:4005/wishlist/view-wishlist', {
            params: {
                email,
            },
        });
        return response.data.wishlist;
    } catch (error) {
        console.error('Error viewing wishlist:', error);
    }
};

// Function to remove item from wishlist using Axios
const removeFromWishlist = async (email, plantid) => {
    try {
        const response = await axios.delete('http://localhost:4005/wishlist/remove-from-wishlist', {
            data: {
                email,
                plantid,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error removing item from wishlist:', error);
        throw error;
    }
};

// Function to check if a plantId is in the wishlist using Axios
const isInWishlist = async (email, plantid) => {
    console.log(email, plantid);
    try {
        const wishlist = await viewWishlist(email);
        const valueExists = wishlist.some(obj => obj.plantid === plantid);
        if (!wishlist) {
            return false;
        }
        if (!wishlist.plantids) {
            return false;
        }
        if(valueExists) {
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error checking if plant is in wishlist:', error);
    }
};

export { addToWishlist, viewWishlist, removeFromWishlist, isInWishlist };
