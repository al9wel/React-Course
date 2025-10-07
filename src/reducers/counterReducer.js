export const counterReducer = (currentState, action) => {
    switch (action.type) {
        case ("increment"): {
            // الستايت لايجب ان يتم تعديلها تلقائيا
            // اي عمل mutation
            // قم بحفظها في متغير وقم بتعديل هاذا المتغير
            const newState = currentState
            // اي شي تعمله return 
            // سيتم استعماله ك الستايت الجديده
            return newState + 1
        }
        case ("decrment"): {
            const newState = currentState
            return newState - 1
        }
        case ("add"): {
            const newState = currentState
            return newState + action.payload.number
        }
        case ("reset"): {
            return 0
        }
        default: {
            return currentState
        }
    }
}