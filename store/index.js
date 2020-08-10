export const state = () => ({

    load: "none",

})

export const mutations = {
    loading(state, durum) {
        state.load = durum;
    }
}

export const strict = false