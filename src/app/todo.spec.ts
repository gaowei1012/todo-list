import { Todo } from './todo';

describe('Todo', () => {
    it ('should creste in instance', () => {
        expect(new Todo()).toBeTruthy();
    });

    it('should accpt values in the constructor', () => {
        const todo = new Todo({
            title: 'angular',
            complete: true
        });
        expect(todo.title).toEqual('angular');
        expect(todo.complete).toEqual(true);
    });
});

