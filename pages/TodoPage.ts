import { Page } from "@playwright/test";

export class TodoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addTodo(todo: string) {
    await this.page.fill("input.new-todo", todo);
    await this.page.press("input.new-todo", "Enter");
  }

  async goto() {
    await this.page.goto("/todomvc");
  }

  async toggleTodo(text: string) {
    const todo = this.page.locator("li", { hasText: text });
    await todo.getByRole("checkbox").check();
  }

  async deleteTodo(text: string) {
    const todo = this.page.locator("li", { hasText: text });
    await todo.locator('label').hover();
    await todo.locator('button.destroy').click();
  }

  async filterBy(option: "All" | "Active" | "Completed") {
    await this.page.getByRole("link", { name: option }).click();
  }

  getTodoItems() {
    return this.page.locator(".todo-list li");
  }

  getCompletedItems() {
    return this.page.locator(".todo-list li.completed");
  }

  getActiveItems() {
    return this.page.locator(".todo-list li:not(.completed)");
  }

  async editTodo(oldText: string, newText: string) {
    const todo = this.page.locator("li", { hasText: oldText });
    await todo.dblclick();
    await todo.locator(".edit").fill(newText);
    await todo.locator(".edit").press("Enter");
  }

  async cancelEdit(text: string) {
    const todo = this.page.locator("li", { hasText: text });
    await todo.dblclick();
    await todo.locator(".edit").press("Escape");
  }

  async clearCompleted() {
    await this.page.getByRole("button", { name: "Clear completed" }).click();
  }

  getClearCompletedButton() {
    return this.page.getByRole("button", { name: "Clear completed" });
  }
}
