import { shallow } from "enzyme"
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");



describe('pruebas en <MultipleCustomHooks />', () => {

    beforeEach( () => 
        {
            useCounter.mockReturnValue({
                counter: 10,
                increment: () => {}
            });
        }
    )

    
    
    test('debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar la información', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Isaac',
                quote: 'Hola mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Isaac');

    })
    
    
})
