

export function ThemeReducer(state,Action){
switch (Action.type) {
    case "on":
        return true
        
    case "off":
        return false
        
    default:return state
        
}
}