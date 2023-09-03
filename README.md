# Getting Started with JEST

Dưới đây là một tổng hợp chi tiết và cụ thể hơn về Jest:

### 1. **Jest là gì**

- Jest là một bộ khung (framework) kiểm tra JavaScript phổ biến, do Facebook phát triển. Nó thường được sử dụng cho việc kiểm tra ứng dụng React, nhưng cũng có thể sử dụng cho các dự án JavaScript khác.

### 2. **Cài đặt Jest**

- Để sử dụng Jest, bạn cần cài đặt nó thông qua npm hoặc yarn:

     ```bash
     npm install --save-dev jest
     ```

- Sau đó, bạn cần tạo các tệp kiểm tra (test files) với tên có định dạng `.test.js` hoặc `.spec.js`.

### 3. **Viết Bài Kiểm Tra (Test)**

- Bài kiểm tra trong Jest được viết bằng cách sử dụng hàm `test` hoặc `it`.
- Bài kiểm tra thường bao gồm một hoặc nhiều phát biểu kiểm tra (assertions) để kiểm tra kết quả của một phần mã.

### 4. **Phát biểu Kiểm tra (Assertions)**

- Jest cung cấp các phương thức kiểm tra như `expect`, `toBe`, `toEqual`, `toBeTruthy`, `toBeFalsy`, `toMatch`, `toContain`, `toHaveBeenCalled`, và nhiều phương thức khác để kiểm tra giá trị và hành vi của các biến và hàm.

### 5. **Mock và Spy**

- Jest cho phép bạn tạo các mock function và spy để kiểm tra và theo dõi các hành vi của hàm và module. Bạn có thể sử dụng `jest.fn()` để tạo mock function và `jest.spyOn()` để theo dõi các phương thức của một đối tượng.

### 6. **Tương tác với Giao diện Người dùng (UI Testing)**

- Để tương tác với giao diện người dùng trong các bài kiểm tra React, bạn có thể sử dụng thư viện `@testing-library/react` và các phương thức như `render`, `fireEvent` để hiển thị component và tương tác với nó.
   Hàm `render` là một phần của thư viện `@testing-library/react` và được sử dụng để hiển thị một component React bên trong một môi trường kiểm tra (test environment) để tiến hành kiểm tra (testing).

6.1 Các đặc điểm quan trọng của hàm `render` bao gồm:

1. **Hiển thị Component**: Hàm `render` nhận một component React và hiển thị nó trong một môi trường kiểm tra ảo, giống như cách nó sẽ được hiển thị trong ứng dụng thực tế.

2. **Truy cập Thành Phần**: Sau khi component được hiển thị, bạn có thể sử dụng các hàm khác của `@testing-library/react` như `getByText`, `getByTestId`, `queryByRole`, vv., để truy cập và tương tác với các phần tử trên giao diện người dùng của component.

3. **Sự Tách Biệt**: Môi trường kiểm tra được tạo ra bởi `render` là một môi trường độc lập với ứng dụng thực tế. Điều này giúp đảm bảo rằng các bài kiểm tra không ảnh hưởng đến môi trường làm việc thực tế của ứng dụng.

Ví dụ sử dụng `render`:

```javascript
import React from 'react';
import { render } from '@testing-library/react';
import MyComponent from './MyComponent'; // Import the component you want to test

test('MyComponent renders correctly', () => {
  const { getByText } = render(<MyComponent />);

  // Truy cập các phần tử trong MyComponent và kiểm tra
  expect(getByText('Hello, World!')).toBeInTheDocument();
});
```

6.2 Chi Tiết về  `fireEvent`:

`fireEvent` là một phần của thư viện `@testing-library/react`, được sử dụng để tương tác với các thành phần của giao diện người dùng trong các bài kiểm tra React. Nó cung cấp các phương thức để kích hoạt các sự kiện và tương tác với các thành phần giống như một người dùng thực tế.

Các phương thức phổ biến của `fireEvent` bao gồm:

1. **fireEvent.click(element)**: Kích hoạt sự kiện click trên một phần tử.

2. **fireEvent.change(inputElement, { target: { value: 'new value' } })**: Mô phỏng sự kiện thay đổi giá trị của một trường input.

3. **fireEvent.submit(formElement)**: Kích hoạt sự kiện submit trên một form.

4. **fireEvent.focus(element)**: Kích hoạt sự kiện focus trên một phần tử.

5. **fireEvent.blur(element)**: Kích hoạt sự kiện blur trên một phần tử.

Ví dụ, để kiểm tra xem một button có hoạt động đúng cách khi được nhấp vào, bạn có thể sử dụng `fireEvent.click()` như sau:

```javascript
import { render, fireEvent } from '@testing-library/react';

test('Button click should trigger an action', () => {
  const handleClick = jest.fn(); // Mock function to track the click event
  const { getByText } = render(<button onClick={handleClick}>Click Me</button>);

  const button = getByText('Click Me');
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalled();
});
```

Trong ví dụ này, chúng ta đã sử dụng `fireEvent.click()` để kích hoạt sự kiện click trên nút, và sau đó kiểm tra xem hàm `handleClick` đã được gọi hay không.

### 7. **Tự động Hóa Bài Kiểm Tra (Test Automation)**

- Jest cho phép bạn tự động hóa quá trình kiểm tra bằng cách chạy tất cả các bài kiểm tra trong dự án của bạn bằng lệnh `jest`. Bạn có thể cấu hình Jest trong tệp cấu hình (ví dụ: `jest.config.js`) của bạn.

### 8. **Tích hợp Redux**

- Để kiểm tra Redux, bạn có thể sử dụng Jest kết hợp với Redux Toolkit và React Redux để kiểm tra trạng thái và hành vi của Redux store và các action.

Jest là một công cụ mạnh mẽ cho việc kiểm tra JavaScript và React, và nắm vững các khía cạnh cơ bản và nâng cao của nó có thể giúp bạn viết các bài kiểm tra chất lượng cho dự án của mình.

----------------------------------------------------------------

# Getting Started with ENZYME

Enzyme là một thư viện phổ biến được sử dụng để kiểm tra (test) các thành phần React. Nó cung cấp một giao diện dễ sử dụng để tạo và thực hiện các bài kiểm tra cho các thành phần React. Dưới đây là một số điểm quan trọng để hiểu về Enzyme:

1. **Tạo và Sử Dụng Shallow Render**:
   - Enzyme cho phép bạn tạo ra một shallow render của một thành phần React. Shallow render chỉ render thành phần chính và không render các thành phần con bên trong nó. Điều này giúp làm cho các bài kiểm tra tập trung vào thành phần đang được kiểm tra.

2. **Mount Render**:
   - Ngoài shallow render, Enzyme cũng hỗ trợ mount render, nơi toàn bộ cây thành phần React được render, bao gồm cả các thành phần con. Mount render thích hợp cho các bài kiểm tra chức năng toàn diện.

3. **Các Phương Thức Kiểm Tra**:
   - Enzyme cung cấp các phương thức để kiểm tra các thuộc tính, sự kiện, và trạng thái của thành phần React. Các phương thức phổ biến bao gồm `find`, `simulate`, `props`, `state`, `text`, `hasClass`, và nhiều phương thức khác.

4. **Các Bài Kiểm Tra (Test)**:
   - Bài kiểm tra trong Enzyme thường được viết bằng các hàm kiểm tra của một thư viện kiểm tra như Jest hoặc Mocha. Bạn sẽ sử dụng các phương thức của Enzyme để truy cập và kiểm tra các phần tử trên giao diện người dùng của thành phần và sau đó sử dụng các phương thức kiểm tra để so sánh kết quả với giá trị mong đợi.

5. **Các Kiểu Kiểm Tra (Test Types)**:
   - Bạn có thể sử dụng Enzyme để viết các loại bài kiểm tra khác nhau, bao gồm kiểm tra tích hợp (integration testing), kiểm tra giao diện người dùng (UI testing), kiểm tra các phản ứng của thành phần (component behavior testing), và nhiều loại khác.

6. **Cài Đặt Enzyme**:
   - Để sử dụng Enzyme, bạn cần cài đặt nó và cài đặt một trình triển khai (adapter) phù hợp với phiên bản React của bạn. Ví dụ, nếu bạn sử dụng React 16, bạn có thể cài đặt `enzyme`, `enzyme-adapter-react-16`, và `enzyme-to-json` để render component thành JSON.

7. **Các Phiên Bản Enzyme**:
   - Enzyme có nhiều phiên bản khác nhau, bao gồm Enzyme 2, Enzyme 3 và Enzyme 4. Phiên bản 4 là phiên bản mới nhất và được khuyến nghị sử dụng trong các dự án mới.

Enzyme là một công cụ mạnh mẽ và phổ biến cho việc kiểm tra React, đặc biệt là khi bạn muốn kiểm tra các thành phần React cá nhân. Tuy nhiên, hãy lưu ý rằng cũng có các thư viện kiểm tra khác như React Testing Library, Jest, và Mocha có thể hữu ích trong việc kiểm tra ứng dụng React.
