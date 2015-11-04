# knockout-bind-react
A custom binding for KnockoutJS that renders a given ReactJS component within the specified element. Use when adding React components to an application that is KnockoutJS heavy, such as one that employs the Durandal framework.

### Installation
```
bower install knockout-bind-html
```

or

```
npm install knockout-bind-react
```

Include via your preferred AMD/CommonJS loader, or with a `<script>` tag.

### Usage

The `react` binding expects one value, an object containing the various options for the component:

* component: The desired React component
* props: An object containing the props to be passed into the the React component
* callback: A callback function that's executed every time the the component is rendered.
The React Component instance is passed as an argument.

```html
<div data-bind="react: reactOptions"><div>
```

```javascript
var viewModel = {
	self.reactOptions = {
		component: ReactButton,
			props: {
				color: 'red',
				type: 'primary'
			},
			callback: function (componentInstance) {
				console.log('Button Rendered!')
			}
	};
};
```

See [example.html](https://github.com/calvinwoo/knockout-bind-react/blob/master/README.md) for a more detailed and dynamic usage.
