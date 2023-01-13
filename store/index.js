import { fetchCartItems } from "~/api";

// constants
export const FETCH_CART_ITEMS = "FETCH_CART_ITEMS";

export const state = () => ({
  cartItems: [],
});

export const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
    };
    state.cartItems.push(newCartItem);
  },
  setCartItems(state, cartItems) {
    state.cartItems = cartItems;
  },
};

export const actions = {
  async [FETCH_CART_ITEMS]({ commit }) {
    const { data } = await fetchCartItems();
    const cartItems = data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }));
    commit("setCartItems", cartItems);
  },
  // nuxtServerInit은 여러개의 데이터가 있을 가능성이 높으므로 개별로 actions를 만들어 호출하는게 낫다.
  async nuxtServerInit(storeContext, nuxtContext) {
    await storeContext.dispatch("FETCH_CART_ITEMS");
  },
};
