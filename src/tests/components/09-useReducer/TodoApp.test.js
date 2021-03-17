import { act } from "@testing-library/react";
import { shallow, mount } from "enzyme"
import { TodoApp } from "../../../components/09-useReducer/TodoApp"
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoApp />', () => {
    
    const wrapper = shallow(<TodoApp />);
    Storage.prototype.setItem = jest.fn();

    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de agregar un TODO', () => {
        
        const wrapper = mount(<TodoApp />);
        const handleAddTodo = wrapper.find('TodoAdd').prop('handleAddTodo');
        act(
            () => {
                handleAddTodo(demoTodos[0]);
                handleAddTodo(demoTodos[1]);
            }
        );

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);

    });
    
    

})
