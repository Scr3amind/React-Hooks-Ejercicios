import { todoReducer } from "../../../components/09-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";



describe('Pruebas en todoReducer', () => {
    
    test('debe de retornar el estado por defecto', () => {
        
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);

    });

    test('debe de agregar un TODO', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Node',
            done: false
        }
        const action = {
            type: 'add',
            payload: newTodo,
        }
        
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(3);
        expect(state).toContain(newTodo);

    });

    test('debe de borrar un TODO', () => {
        // action.payload = ID del TODO
        const action = {
            type: 'delete',
            payload: 2,
        };
        const initialLength = demoTodos.length;
        const state = todoReducer(demoTodos, action);

        const todoIDs = state.map(todo => todo.id);
        
        expect(state.length).toBe(initialLength - 1);
        expect(todoIDs).not.toContain(action.payload);

    });

    test('debe de hacer el Toggle del TODO', () => {
        // action.payload = ID del TODO
        const action = {
            type: 'toggle',
            payload: 2,
        };

        const state = todoReducer(demoTodos, action);
        const toggledTODO = state.find(todo => todo.id == action.payload);
        const originalTodo = demoTodos.find(todo => todo.id == action.payload);
        expect(toggledTODO.done).toBe(!originalTodo.done);
    })
    
    
    


})
