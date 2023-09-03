# Tìm hiểu về Jest
Jest là một framework kiểm tra JavaScript mạnh mẽ được sử dụng rộng rãi trong cộng đồng phát triển React và JavaScript. Dưới đây là một số cú pháp phổ biến của Jest và một số API quan trọng mà nó cung cấp:

### Cú pháp Jest:

1. **`test` hoặc `it`**:
   - Cú pháp để định nghĩa một bài kiểm tra. Jest sử dụng `test` hoặc `it` để xác định các bài kiểm tra và chạy chúng.

   ```javascript
   test('description of the test', () => {
     // Code kiểm tra ở đây
   });
   ```

2. **`describe`**:
   - Được sử dụng để nhóm các bài kiểm tra liên quan lại với nhau. Điều này giúp tạo cấu trúc cho mã kiểm tra và tạo sự tổ chức.

   ```javascript
   describe('group of tests', () => {
     test('test 1', () => {
       // Code kiểm tra ở đây
     });
     test('test 2', () => {
       // Code kiểm tra ở đây
     });
   });
   ```

3. **`beforeEach` và `afterEach`**:
   - Được sử dụng để thiết lập trạng thái ban đầu hoặc dọn dẹp sau mỗi bài kiểm tra.

   ```javascript
   beforeEach(() => {
     // Setup trạng thái ban đầu
   });

   afterEach(() => {
     // Dọn dẹp sau mỗi bài kiểm tra
   });
   ```

### API Jest:

1. **`expect`**:
   - `expect` là một hàm được sử dụng để định tình huống kiểm tra và kiểm tra kết quả.

   ```javascript
   expect(something).toBe(expectedValue);
   ```

2. **`toBe`**:
   - Sử dụng để so sánh giá trị thực tế với giá trị kỳ vọng. 

   ```javascript
   expect(result).toBe(expectedValue);
   ```

3. **`toEqual`**:
   - Sử dụng để so sánh các đối tượng hoặc mảng có cấu trúc giống nhau.

   ```javascript
   expect(object).toEqual(expectedObject);
   ```

4. **`toBeDefined`, `toBeUndefined`, `toBeNull`**:
   - Sử dụng để kiểm tra giá trị đã được xác định, là `undefined`, hoặc là `null`.

   ```javascript
   expect(value).toBeDefined();
   expect(value).toBeUndefined();
   expect(value).toBeNull();
   ```

5. **`toBeTruthy` và `toBeFalsy`**:
   - Sử dụng để kiểm tra giá trị là truthy (truthy values là giá trị đánh giá thành true trong ngữ cảnh boolean) hoặc falsy (falsy values là giá trị đánh giá thành false trong ngữ cảnh boolean).

   ```javascript
   expect(value).toBeTruthy();
   expect(value).toBeFalsy();
   ```

6. **`toMatch`**:
   - Sử dụng để kiểm tra xem một giá trị có khớp với một biểu thức chính quy hay không.

   ```javascript
   expect(string).toMatch(/pattern/);
   ```

7. **`toThrow`**:
   - Sử dụng để kiểm tra xem một hàm có ném ra một exception hay không.

   ```javascript
   expect(() => someFunction()).toThrow();
   ```


8. **`not`**:
   - Sử dụng để phủ định kiểm tra. Ví dụ, `expect(value).not.toBe(expectedValue)` sẽ kiểm tra xem giá trị `value` không bằng `expectedValue`.

   ```javascript
   expect(value).not.toBe(expectedValue);
   ```

9. **`toBeGreaterThan`, `toBeLessThan`, `toBeGreaterThanOrEqual`, `toBeLessThanOrEqual`**:
   - Sử dụng để kiểm tra một giá trị có lớn hơn, nhỏ hơn, lớn hơn hoặc bằng hoặc nhỏ hơn hoặc bằng một giá trị khác.

   ```javascript
   expect(value).toBeGreaterThan(5);
   expect(value).toBeLessThan(10);
   expect(value).toBeGreaterThanOrEqual(5);
   expect(value).toBeLessThanOrEqual(10);
   ```

10. **`toHaveLength`**:
    - Sử dụng để kiểm tra độ dài của một mảng hoặc chuỗi.

    ```javascript
    expect(arrayOrString).toHaveLength(length);
    ```

11. **`toContain`**:
    - Sử dụng để kiểm tra xem một mảng hoặc chuỗi có chứa một giá trị cụ thể hay không.

    ```javascript
    expect(arrayOrString).toContain(value);
    ```

12. **`toHaveProperty`**:
    - Sử dụng để kiểm tra xem một đối tượng có một thuộc tính cụ thể hay không.

    ```javascript
    expect(object).toHaveProperty('propertyName');
    ```

13. **`toHaveBeenCalled`, `toHaveBeenCalledTimes`, `toHaveBeenCalledWith`**:
    - Sử dụng để kiểm tra xem một hàm đã được gọi, được gọi một số lần cụ thể, hoặc được gọi với các đối số cụ thể.

    ```javascript
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(3);
    expect(mockFn).toHaveBeenCalledWith(arg1, arg2);
    ```

14. **`spyOn`**:
    - Sử dụng để tạo một mock function để theo dõi việc gọi hàm.

    ```javascript
    const mockFn = jest.spyOn(object, 'methodName');
    // ...
    expect(mockFn).toHaveBeenCalled();
    ```

15. **`beforeAll` và `afterAll`**:
    - Được sử dụng để thiết lập trạng thái ban đầu hoặc dọn dẹp sau tất cả các bài kiểm tra.

    ```javascript
    beforeAll(() => {
      // Thiết lập trạng thái ban đầu
    });

    afterAll(() => {
      // Dọn dẹp sau tất cả các bài kiểm tra
    });
    ```

16. **`beforeEach` và `afterEach`**:
    - Được sử dụng để thiết lập trạng thái ban đầu hoặc dọn dẹp sau mỗi bài kiểm tra. `beforeEach` sẽ chạy trước mỗi bài kiểm tra và `afterEach` sẽ chạy sau mỗi bài kiểm tra.

    ```javascript
    beforeEach(() => {
      // Setup trạng thái ban đầu
    });

    afterEach(() => {
      // Dọn dẹp sau mỗi bài kiểm tra
    });
    ```

17. **`test.skip`**:
    - Bạn có thể sử dụng `test.skip` để bỏ qua việc chạy một bài kiểm tra cụ thể. Điều này có thể hữu ích khi bạn muốn tạm thời tắt một bài kiểm tra mà không xóa nó hoàn toàn.

    ```javascript
    test.skip('This test is skipped', () => {
      // Không chạy bài kiểm tra này
    });
    ```

18. **`test.only`**:
    - Sử dụng `test.only` để chỉ chạy một bài kiểm tra cụ thể trong lúc phát triển hoặc sửa lỗi. Jest sẽ chỉ chạy các bài kiểm tra được đánh dấu bằng `test.only`.

    ```javascript
    test.only('This is the only test that runs', () => {
      // Chỉ chạy bài kiểm tra này
    });
    ```

19. **`expect.assertions`**:
    - Sử dụng để xác định số lượng lần kiểm tra mà bạn mong đợi trong một bài kiểm tra. Điều này giúp đảm bảo rằng tất cả các kiểm tra đã được thực hiện.

    ```javascript
    test('Example test with multiple assertions', () => {
      expect.assertions(3);
      expect(1 + 1).toBe(2);
      expect('Hello').toBe('Hello');
      expect(true).toBeTruthy();
    });
    ```

20. **`test.each`**:
    - Cho phép bạn chạy cùng một bài kiểm tra với nhiều tập dữ liệu khác nhau. Điều này giúp kiểm tra hành vi của mã với nhiều đầu vào khác nhau.

    ```javascript
    test.each`
      a    | b    | sum
      ${1} | ${2} | ${3}
      ${2} | ${3} | ${5}
      ${5} | ${5} | ${10}
    `('adds $a + $b to equal $sum', ({ a, b, sum }) => {
      expect(a + b).toBe(sum);
    });
    ```

Đây là một số cú pháp và API quan trọng của Jest. Jest cung cấp nhiều API khác để kiểm tra và quản lý bài kiểm tra, cho phép bạn kiểm tra và theo dõi hành vi ứng dụng của mình một cách mạnh mẽ và linh hoạt.