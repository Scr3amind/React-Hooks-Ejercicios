import { mount, shallow } from "enzyme";
import { HomeScreen } from "../../../components/10-useContext/HomeScreen";
import { UserContext } from "../../../components/10-useContext/UserContext";

describe('Pruebas en <HomeScreen />', () => {

    const user = {
        name: 'Isaac',
        email: 'mail@mail.com'
    }

    const wrapper = mount( //mount renderiza todo a diferencia de shallow
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
