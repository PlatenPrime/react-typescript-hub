import Counter from "./Counter"
import { Provider } from "react-redux"

import { store } from "./state/store"


export default function ReduxApp() {
    return (
        <Provider store={store}>
            <div>
                <h1>ReduxApp</h1>
                <Counter />
            </div>
        </Provider>
    )
}
