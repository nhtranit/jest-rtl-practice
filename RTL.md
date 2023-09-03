# Tìm hiểu về React Testing Library (RTL)

Khi kết hợp Jest với Testing Library, bạn sẽ có một bộ công cụ mạnh mẽ để kiểm tra ứng dụng của mình từ góc độ người dùng. Dưới đây là một số ví dụ về cách sử dụng API của Testing Library cùng với Jest:

1. **`render`**:
   - Sử dụng `render` để hiển thị một thành phần React và trả về một bộ công cụ để tương tác với nó.

   ```javascript
   import React from 'react';
   import { render } from '@testing-library/react';
   import MyComponent from './MyComponent';

   test('renders correctly', () => {
     const { getByText } = render(<MyComponent />);
     const element = getByText('Hello, World!');
     expect(element).toBeInTheDocument();
   });
   ```

2. **`fireEvent`**:
   - `fireEvent` được sử dụng để tạo sự kiện trên các phần tử và mô phỏng hành vi người dùng.

   ```javascript
   import React from 'react';
   import { render, fireEvent } from '@testing-library/react';
   import ButtonComponent from './ButtonComponent';

   test('clicking the button triggers an action', () => {
     const mockFn = jest.fn();
     const { getByText } = render(<ButtonComponent onClick={mockFn} />);
     const buttonElement = getByText('Click Me');
     fireEvent.click(buttonElement);
     expect(mockFn).toHaveBeenCalled();
   });
   ```

3. **`screen`**:
   - `screen` là một cách khác để tương tác với các phần tử trên giao diện người dùng. Nó tự động sử dụng các phương thức của Testing Library như `getBy`, `queryBy`, `findAllBy`, v.v.

   ```javascript
   import React from 'react';
   import { render, screen } from '@testing-library/react';
   import MyComponent from './MyComponent';

   test('renders correctly', () => {
     render(<MyComponent />);
     const element = screen.getByText('Hello, World!');
     expect(element).toBeInTheDocument();
   });
   ```

4. **`waitFor`**:
   - Sử dụng `waitFor` để chờ cho đến khi một điều kiện kiểm tra được đáp ứng. Điều này thường được sử dụng khi bạn cần đợi cho dữ liệu hoặc trạng thái của thành phần thay đổi.

   ```javascript
   import React from 'react';
   import { render, waitFor } from '@testing-library/react';
   import AsyncComponent from './AsyncComponent';

   test('async data is fetched and rendered', async () => {
     render(<AsyncComponent />);
     await waitFor(() => {
       const element = screen.getByText('Async Data');
       expect(element).toBeInTheDocument();
     });
   });
   ```

5. **`userEvent`**:
   - `userEvent` là một thư viện mở rộng của Testing Library giúp bạn mô phỏng hành vi của người dùng một cách tự nhiên.

   ```javascript
   import React from 'react';
   import { render } from '@testing-library/react';
   import UserForm from './UserForm';
   import userEvent from '@testing-library/user-event';

   test('submitting the form with valid data', () => {
     render(<UserForm />);
     const nameInput = screen.getByLabelText('Name');
     const emailInput = screen.getByLabelText('Email');
     const submitButton = screen.getByText('Submit');

     userEvent.type(nameInput, 'John Doe');
     userEvent.type(emailInput, 'john@example.com');
     userEvent.click(submitButton);

     // Kiểm tra xem dữ liệu đã được gửi đi đúng cách
   });
   ```

Sử dụng Testing Library cùng với Jest cho phép bạn tập trung vào kiểm tra hành vi của ứng dụng từ góc độ người dùng, giúp đảm bảo tính ổn định và đáng tin cậy của ứng dụng React của bạn.