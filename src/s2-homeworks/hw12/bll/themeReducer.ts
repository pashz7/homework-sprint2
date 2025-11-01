
type ThemeMOde = {
    themeId: number

}

const initState: ThemeMOde = {
    themeId: 1 ,

}




export const themeReducer = (state = initState, action: ReturnType<typeof changeThemeId>): ThemeMOde => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':

            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id } as const) // fix any
