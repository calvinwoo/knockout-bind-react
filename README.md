# knockout-bind-react
A custom binding for KnockoutJS that renders a given ReactJS component within the specified element.

### Installation

```
npm install knockout-bind-react
```

Include via your preferred AMD/CommonJS loader, or with a `<script>` tag.

### Usage

The `react` binding expects one value, an object containing the various options for the component:

* component: The desired React component
* props: An object containing the props to be passed into the the React component

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
			}
	};
};
```

See `index.html`, [or this example page](http://calvinwoo.github.io/knockout-bind-react/), for more detailed and dynamic usage.
