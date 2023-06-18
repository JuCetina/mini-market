import { loadState } from '../helpers/localStorage';
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../types'


const initialState = 
{
    products: [
        { id: 1, name: 'De Todito Mix', src: '/products/detodito.jpg', price: 3800, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est labore quaerat Itaque perferendis laudantium natus impedit illum similique quasi.' },
        { id: 2, name: "Bon Bon Bum", src: '/products/bombombun.jpg', price: 10200, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est labore quaerat Itaque perferendis laudantium natus impedit illum similique quasi.' },
        { id: 3, name: "Choclitos", src: '/products/choclitos.png', price: 3000, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est labore quaerat Itaque perferendis laudantium natus impedit illum similique quasi.' },
        { id: 4, name: "Mini Chips", src: '/products/minichips.jpg', price: 22500, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est labore quaerat Itaque perferendis laudantium natus impedit illum similique quasi.' },
        { id: 5, name: "Papas Margarita", src: '/products/papas.jpg', price: 14500, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est labore quaerat Itaque perferendis laudantium natus impedit illum similique quasi.' },
        { id: 6, name: "Galletas Festival", src: '/products/festival.png', price: 9200, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est labore quaerat Itaque perferendis laudantium natus impedit illum similique quasi.' },
    ],
    cart: [],
}


export const loadedState =  loadState() || initialState;

    

export function marketReducer(state = loadedState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            let newProductInCart = state.products.find(product => product.id === action.payload);
            let productInCart = state.cart.find(item => item.id === newProductInCart.id);

            return productInCart ?
                {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === newProductInCart.id ?
                            { ...item, quantity: item.quantity + 1 } : item
                    )
                }
                :
                {
                    ...state,
                    cart: [...state.cart, { ...newProductInCart, quantity: 1 }]
                }
        }

        case REMOVE_FROM_CART: {
            let itemToDelete = state.cart.find((item) => item.id === action.payload);

            return itemToDelete.quantity > 1 ?
                {
                    ...state,
                    cart: state.cart.map((item) => item.id === action.payload ?
                        { ...item, quantity: item.quantity - 1 } : item
                    )
                }
                :
                {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload),
                }
        }

        case CLEAR_CART:
            return initialState;

        default:
            return state;
    }
}