# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

этот файл пока что чисто для меня, здесь буду писать заметки, моменты которые стоит запомнить/учесть и в целом логику всего что написал/изучил

src folder is where all of our react code live , it contains components and logic that make our app , public folder holds static assets like the main html file images and other seources that dont change frequently

package.json - the most important file that contain important metadata about project 

development server is a tool that run on your computer to serve your app while you are building it, it watches your file for changes , rebuilds only what's necessary and automatically refreshes your browser, this process called hot module replacement

App.jsx is the main component that acts as the root of our application, where ui starts to take shape

main.jsx (sometimes index.jsx) - bootstraps react app by rendering the app component into the main HTML file found in main/public foulder

vite.config.js is where you can customize the build process if needed

eslint - helps maintain code quality by enforcing consistent coding standards

Reacts virtual dom - копия реального dom  которая сперва на себе тестит так сказать изменения и вносит изменения в реал дом только в том месте где было изменение вместо того чтобы перестраивать весь компонент/страницу как это обычно делается
