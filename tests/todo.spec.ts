import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test.describe('Todo App', () => {
    let todoPage: TodoPage;

    test.beforeEach(async ({ page }) => {
        todoPage = new TodoPage(page);
        await todoPage.goto();
    });

    test('add a new todo item', async ({ page }) => {
        await todoPage.addTodo('Buy milk');
        await todoPage.addTodo('Walk the dog');
        const todoItems = todoPage.getTodoItems();
        await expect(todoItems).toHaveCount(2);
        await expect(todoItems.first()).toHaveText('Buy milk');
        await expect(todoItems.nth(1)).toHaveText('Walk the dog');
        await expect(page.getByText('2 items left')).toBeVisible();
        await expect(todoPage.getCompletedItems()).toHaveCount(0);
    });

    test('toggle a todo item to complete', async ({ page }) => {
        await todoPage.addTodo('Buy milk');
        await todoPage.toggleTodo('Buy milk');
        const completedTodo = todoPage.getCompletedItems();
        await expect(completedTodo).toHaveCount(1);
        await expect(page.getByText('0 items left')).toBeVisible();
        const checkbox = todoPage.getCompletedItems().first().getByRole('checkbox');
        await expect(checkbox).toBeChecked();
    });

    test('delete a todo item', async ({ page }) => {
        await todoPage.addTodo('Buy milk');
        await todoPage.deleteTodo('Buy milk');
        const todoItems = todoPage.getTodoItems();
        await expect(todoItems).toHaveCount(0);
        await expect(page.locator('.footer')).not.toBeVisible();
    });

    test('filter todo items', async () => {
        await todoPage.addTodo('Buy milk');
        await todoPage.addTodo('Walk the dog');
        await todoPage.toggleTodo('Buy milk');

        await todoPage.filterBy('Active');
        const activeTodos = todoPage.getActiveItems();
        await expect(activeTodos).toHaveCount(1);
        await expect(activeTodos.first()).toHaveText('Walk the dog');

        await todoPage.filterBy('Completed');
        const completedTodos = todoPage.getCompletedItems();
        await expect(completedTodos).toHaveCount(1);
        await expect(completedTodos.first()).toHaveText('Buy milk');
    });

    test('edit a todo item', async () => {
        await todoPage.addTodo('Buy milk');
        await todoPage.editTodo('Buy milk', 'Buy almond milk');
        await expect(todoPage.getTodoItems().first()).toHaveText('Buy almond milk');
    });
});