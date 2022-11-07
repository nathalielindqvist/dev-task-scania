# Development task for Scania
This project was created as part of Scanias recruitment process. It is a monorepo containing three subrepos that represent different parts in a larger project.
## Custom Stenciljs dropdown component
Housed in the subrepo _scania-dropdown-menu_ is a custom dropdown menu compiled in Stenciljs.

## Parent React project
The parent project is located in the subrepo _scania-table_ which loads in the Stencil component as part of a table and dropdown menu pair.

## Rect proxy component
The subrepo _nathalielindqvist-react-proxy-dropdown_ is a proxy component to enable the Stencil component to run in the larger React project.

## Installation
Follow this step-by-step guide to install and run this project.

1. Clone the project using your preferred method.

2. Open the project in you preferred editor in the root folder (dev-task-scania).

3. Install dependencies in main React project
```
cd scania-table
npm i
```

4. Install dependencies in Stencil component
```
cd.. 
cd scania-dropdown-menu
npm i
```

5. Install dependencies in React proxy component
```
cd..
cd nathalielindqvist-react-proxy-dropdown
npm i
```

6. Establish link from Stencil component
```
cd..
cd scania-dropdown-menu
npm link
```

7. Link React proxy component to Stencil component
```
cd..
cd nathalielindqvist-react-proxy-dropdown
npm link nathalielindqvist-dropdown-menu
```

8. Build Stencil component
```
cd..
cd scania-dropdown-menu
npm run build
```

9. Build React proxy component
```
cd..
cd nathalielindqvist-react-proxy-dropdown
npm run build
```

10. Establish link from React proxy component
```
npm link
```

11. Link React proxy component to the larger React project
```
cd..
cd scania-table
npm link nathalielindqvist-react-proxy-dropdown
```

12. Run React project
```
npm start
```
