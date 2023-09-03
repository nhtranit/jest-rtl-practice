Dưới đây là một số API quan trọng mà `fireEvent` và `userEvent` cung cấp:

### API cơ bản từ `fireEvent`:

1. **`fireEvent.click(element, options)`**:
   - Mô phỏng sự kiện click trên một phần tử. `options` cho phép bạn truyền các thuộc tính tùy chọn như `ctrlKey`, `shiftKey`, `button` (cho chuột), v.v.

2. **`fireEvent.change(element, options)`**:
   - Mô phỏng sự kiện thay đổi giá trị của một phần tử đầu vào, ví dụ như một ô nhập liệu.

3. **`fireEvent.submit(element)`**:
   - Mô phỏng sự kiện gửi biểu mẫu.

4. **`fireEvent.focus(element)`**:
   - Mô phỏng sự kiện tập trung vào một phần tử.

5. **`fireEvent.blur(element)`**:
   - Mô phỏng sự kiện mất tập trung khỏi một phần tử.

6. **`fireEvent.keyDown(element, options)`** và **`fireEvent.keyUp(element, options)`**:
   - Mô phỏng sự kiện nhấn và thả phím trên bàn phím.

7. **`fireEvent.mouseOver(element, options)`** và **`fireEvent.mouseLeave(element, options)`**:
   - Mô phỏng sự kiện di chuột vào và ra khỏi một phần tử.

### API bổ trợ từ `userEvent`:

`userEvent` cung cấp một số API bổ trợ mà không có trong `fireEvent`:

1. **`userEvent.type(element, text, options)`**:
   - Mô phỏng việc gõ văn bản vào một phần tử đầu vào. Bạn có thể sử dụng `options` để mô phỏng việc ấn các phím như `{enter}`, `{tab}`, và `{backspace}`.

2. **`userEvent.click(element, options)`**:
   - Mô phỏng việc bấm nút chuột lên hoặc xuống trên một phần tử. `options` cho phép bạn truyền các thuộc tính tùy chọn như `ctrlKey`, `shiftKey`, v.v.

3. **`userEvent.hover(element)`**:
   - Mô phỏng sự kiện di chuột vào một phần tử.

4. **`userEvent.clear(element)`**:
   - Mô phỏng việc xóa dữ liệu từ một phần tử đầu vào, ví dụ như một ô nhập liệu.

5. **`userEvent.upload(element, file)`**:
   - Mô phỏng việc tải lên một tệp tin vào một phần tử đầu vào loại tệp tin.

`userEvent` được thiết kế để mô phỏng hành vi của người dùng một cách tự nhiên hơn và cung cấp nhiều tùy chọn và chức năng bổ trợ hơn so với `fireEvent`. Tùy thuộc vào tình huống cụ thể của bài kiểm tra của bạn, bạn có thể sử dụng cả hai thư viện hoặc lựa chọn một trong chúng để tương tác với các thành phần của ứng dụng React và viết các bài kiểm tra.