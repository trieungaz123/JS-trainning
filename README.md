# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
a# Redux  Tutorial

## I Lý thuyết
### 1. Redux là gì ?

- Redux là một thư viện JS dùng để quản lý và cập nhật state của ứng dụng.
- Redux sẽ sử dụng các action (hành động). Giống như kho lưu trữ tập trung cho các state mà được sử dụng ở nhiều components, hay nhiều nơi khác nhau trong ứng dụng
- Có các quy tắc để đảm bảo cho các state trong store được cập nhật một cách có thể dự đoán được(giải thích sau).
- Là partern nên có các quy tắc mà nó quy định
### 2. Vì sao nên sử dụng redux ? và redux toolkit nói riêng ?

Với các ứng dụng lớn thì quản lý state trong React sẽ có nhiều phức tạp. Ví dụ khi cần chuyển state giữa các component với nhau, thì phải đưa state lên các component cha để đến component gốc rồi chuyển xuống dần đến đích

![Screenshot 2024-10-07 at 11.12.48](/Users/trieund/Library/Application Support/typora-user-images/Screenshot 2024-10-07 at 11.12.48.png)

- Quản lý global states
  - Các component tại mọi nơi trong ứng dụng có thể truy xuất và cập nhật
  - Giải quyết vấn đề React từ component cha vào component con cháu (A-> B -> C) => (A->C)
- Dễ dàng debug
  - Hướng viết code predictation and testable
- Xử lý catching dữ liệu từ phía server

- Vì sao Redux toolkit ?
  - bản chất là redux
  - Cài sẵn các package , function cần thiết mà không cần cài đặt riêng lẻ
    - Cấu hình config => X
    - Cài đặt thủ công => X
    - Redux yêu cầu boilerplate code => X

### 3. Khi nào nên sử dụng redux

- Có lượng lớn State và sử dụng nhiều nơi
- State cập nhật thường xuyên
- State cập nhật phức tạp
- Số lượng dòng code lớn và nhiều người làm chung => xem xét sử dụng redux để dễ dàng quản lý, debug lỗi
- Cần debug và muốn xem state ở bất kỳ khoảng thời gian nào
- Không phải lúc nào cũng nên sử dụng redux
  - Không nên sử dụng redux cho đến khi gặp vấn đề với react thuần - tác giả redux
  - Đánh đổi : học nhiều khái niệm, thư viện, quy tắc redux...

### 4. Kiến trúc và các khái niệm cần nắm

- State management

  - Dùng để quản lý trạng thái trong ứng dụng, các trạng thái và dữ liệu cần được quản lý

    - có các cách như useState, useReducer

    - Thêm một cách nữa là redux

    - Ví dụ

      ```js
      const Counter = () => {
        const [counter, setCounter] = useState(0);

        const increment = () => {
          setCount((prevCounter) => prevCounter + 1);
        }

        return (
          <div>
          	Value: {counter}
            <button onClick={increment}>Increment</button>
          </div>
        );
      }
      }
      ```

    - Vòng state

      ![State Management | Vue.js](https://vuejs.org/assets/state-flow.Cd6No79V.png)

      => Khi có nhiều component khác nhau muốn truy suất đến một biến => cần phải có một kho quản lý chung state cho biến đó => Các component đều có thể sử dụng được

    - mutability (Thay đổi)

      - Ví dụ: Thao tác và thay đổi trực tiếp trên biến

        ```js
        const obj = {a:1, b:2}
        obj.b = 3;
        ```

        Như thế này là đã sửa đổi obj

    - Imutability (Không thay đổi)

      - Ví dụ: Không thay đổi hay thác tác trực tiếp trên biến

        ```js
        const obj = {
        	a: {
        		c: 3
        	}
        	b: 2
        }

        const obj2 = {
        	...obj,
        	a: {
        		...obj.a,
        		c: 42
        	}
        }
        ```

      - Trong redux thì cần tuân thủ không thay đổi state trực tiếp để tránh lỗi xảy ra

        - Bug : UI không cập nhật chính xác, hiển thị giá trị mới nhất
        - Không hiểu tại sao các state cập nhật
        - Làm cho testing khó
        - Phá vỡ khả năng time travel debuging (xem state cập nhật chính xác ở đâu)
        - Phá vỡ partern mà redux xây dựng

  - Kiến trúc redux

    <img src="https://i.2kvn.com/img/vib-2021-ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif"/>

    - 3 thành phần chính

      - Action
        - Gồm 2 thành phần chính
          - Type: hành động
          - Dữ liệu
      - Dispatch
        - Là một Function bắn action cho store
      - Reducers
        - Là một Function: với đầu vào là Action, và giá trị state hiện tại sau đó tiến hành xử lý và trả về state mới
      - Store chứa Reducers
        - Các function trong store gồm
          - getState() : trả về giá trị state hiện tại
          - subcribe(): đăng ký hành động gì đó
          - dispatch(action)

    - Code thử ví dụ redux quản lý state như thế nào ?

      **Coding ...**



## II Ví dụ: Xây dựng todo app bằng redux ,redux toolkit

1. Xây dựng Todo app bằng redux

   Coding...

2. Xây dựng Todo App bằng redux toolkit

   Coding...

3.

## III Sử dụng để quản lý state current user data cho Radar

