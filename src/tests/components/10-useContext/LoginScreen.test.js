import { mount } from "enzyme"
import { LoginScreen } from "../../../components/10-useContext/LoginScreen"
import { UserContext } from "../../../components/10-useContext/UserContext";

describe('Pruebas en <LoginScreen />', () => {
    
    const setUser = jest.fn();

    const wrapper = mount( //mount renderiza todo a diferencia de shallow
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de ejecutar el setUser con el argumento esperado', () => {
        wrapper.find('button').simulate('click');
        expect(setUser).toHaveBeenCalledWith({
            id:'123',
            user:'Isaac', 
        });
    })
    
    

})
