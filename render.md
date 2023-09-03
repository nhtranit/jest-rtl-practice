# Hàm render trong React Testing Library
Hàm `render` trong Testing Library trả về một đối tượng chứa một loạt các hàm và thuộc tính cho phép bạn tương tác với và kiểm tra thành phần React đã được hiển thị. Dưới đây là một số hàm quan trọng mà `render` trả về và cơ chế hoạt động của chúng:

1. **`getBy*`:
   - Được sử dụng để chọn một phần tử trên giao diện bằng cách sử dụng các truy vấn dựa trên văn bản, role, label, v.v. Nếu không tìm thấy phần tử, nó sẽ ném một ngoại lệ.

   Ví dụ:
   ```javascript
   const element = getByText('Hello, World!');
   ```

2. **`queryBy*`:
   - Tương tự như `getBy*`, nhưng không ném ngoại lệ nếu không tìm thấy phần tử. Thay vào đó, nó trả về `null`.

   Ví dụ:
   ```javascript
   const element = queryByText('Hello, World!');
   if (element) {
     // Xử lý khi tìm thấy phần tử
   }
   ```

3. **`getAllBy*`:
   - Được sử dụng để chọn tất cả các phần tử trên giao diện phù hợp với điều kiện truy vấn. Nó trả về một mảng các phần tử.

   Ví dụ:
   ```javascript
   const elements = getAllByText('Item');
   ```

4. **`queryAllBy*`:
   - Tương tự như `getAllBy*`, nhưng không ném ngoại lệ nếu không tìm thấy phần tử. Thay vào đó, nó trả về một mảng trống.

   Ví dụ:
   ```javascript
   const elements = queryAllByText('Item');
   ```

5. **`findBy*`:
   - Được sử dụng cho việc kiểm tra các phần tử xuất hiện sau một khoảng thời gian. Nó trả về một promise và chờ đợi phần tử xuất hiện sau đó.

   Ví dụ:
   ```javascript
   const element = await findByText('Hello, World!');
   ```

6. **`findAllBy*`:
   - Tương tự như `findBy*`, nhưng cho việc kiểm tra tất cả các phần tử phù hợp với điều kiện truy vấn.

   Ví dụ:
   ```javascript
   const elements = await findAllByText('Item');
   ```

Cơ chế hoạt động của các hàm này là tìm kiếm phần tử trên cây thành phần React được hiển thị trong môi trường kiểm tra. Nếu phần tử được tìm thấy, nó sẽ trả về phần tử đó hoặc mảng các phần tử (trong trường hợp của `getAllBy*` hoặc `findAllBy*`). Nếu không tìm thấy, các hàm `getBy*` sẽ ném ngoại lệ, trong khi các hàm `queryBy*` sẽ trả về `null`.

Các hàm `findBy*` và `findAllBy*` cho phép bạn kiểm tra các phần tử xuất hiện sau một khoảng thời gian. Chúng trả về promise và bạn có thể sử dụng `await` để chờ đợi cho đến khi phần tử xuất hiện trước khi kiểm tra.

## Ví dụ cụ thể

Dưới đây là các ví dụ về cách bạn có thể sử dụng các hàm `getBy*` khác để truy cập các phần tử thể hiện trong mã kiểm tra của bạn:

1. **`getByText`**:

   ```jsx
   // Trong mã JSX:
   <div>Hello, World!</div>

   // Trong mã kiểm tra:
   const element = screen.getByText('Hello, World!');
   ```

2. **`getByRole`**:

   ```jsx
   // Trong mã JSX:
   <button>Click Me</button>

   // Trong mã kiểm tra:
   const buttonElement = screen.getByRole('button');
   ```

3. **`getByLabelText`**:

   ```jsx
   // Trong mã JSX:
   <label htmlFor="email">Email Address:</label>
   <input id="email" type="text" />

   // Trong mã kiểm tra:
   const inputElement = screen.getByLabelText('Email Address:');
   ```

4. **`getByPlaceholderText`**:

   ```jsx
   // Trong mã JSX:
   <input placeholder="Enter your email address" />

   // Trong mã kiểm tra:
   const inputElement = screen.getByPlaceholderText('Enter your email address');
   ```

5. **`getByTestId`**:

   ```jsx
   // Trong mã JSX:
   <div data-testid="unique-id">This is a test element</div>

   // Trong mã kiểm tra:
   const element = screen.getByTestId('unique-id');
   ```

6. **`getByAltText`**:

   ```jsx
   // Trong mã JSX:
   <img alt="A beautiful sunset" src="sunset.jpg" />

   // Trong mã kiểm tra:
   const imageElement = screen.getByAltText('A beautiful sunset');
   ```

Các ví dụ trên đều sử dụng các hàm `getBy*` để truy cập các phần tử thể hiện dựa trên các tiêu chí khác nhau như văn bản, vai trò, nhãn, v.v. Sau khi bạn đã chọn được phần tử bằng `getBy*`, bạn có thể thực hiện các kiểm tra và tương tác cụ thể với phần tử đó.