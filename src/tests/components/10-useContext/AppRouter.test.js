import { mount } from "enzyme"
import { AppRouter } from "../../../components/10-useContext/AppRouter"
import { UserContext } from "../../../components/10-useContext/UserContext";

describe('Pruebas en <AppRouter />', () => {

    const user = {
        id: 1,
        name: 'Isaac'
    }
    
    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('debe mostrar correctamente', () => {
        expect(wrapper).toMatchSnapshot();  
    })
    

})
