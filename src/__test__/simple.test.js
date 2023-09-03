import { add } from "../utils/add.util";

test("Addition function should return the correct sum", () => {
  expect(add(2, 3)).toBe(5);
});

test("Check if variable is defined", () => {
  let name = "John";
  expect(name).toBeDefined();
});

test("Check if an array contains a specific item", () => {
  const colors = ["red", "green", "blue"];
  expect(colors).toContain("green");
});

test("Check if an object has a specific property", () => {
  const person = { name: "Alice", age: 30 };
  expect(person).toHaveProperty("name");
});

test("Check if a function throws a specific error", () => {
  const divideByZero = () => {
    throw new Error("Cannot divide by zero");
  };

  expect(divideByZero).toThrow("Cannot divide by zero");
});

test("Check how many times a function is called", () => {
  // Tạo một mock function cho hàm add
  const mockFn = jest.fn(add);
  // Gọi hàm add thông qua mock function
  const value = mockFn(2, 3);
  mockFn();
  mockFn();

  // Kiểm tra kết quả trả về từ hàm add
  expect(value).toBe(5);

  // Kiểm tra số lần gọi của mock function
  expect(mockFn).toHaveBeenCalledTimes(3);
});

test("Check if a function is called with specific arguments", () => {
  const mockFn = jest.fn();
  // Gọi hàm mockFn với các đối số khác nhau
  mockFn(42, "hello", { key: "value" });

  // Kiểm tra cuộc gọi với các đối số cụ thể
  expect(mockFn).toHaveBeenCalledWith(42, "hello", { key: "value" });
});

test("Check if a promise resolves successfully", () => {
  return expect(Promise.resolve("Success")).resolves.toBe("Success");
});

test("Check if a promise rejects with an error", () => {
  return expect(Promise.reject("Error")).rejects.toMatch("Error");
});
