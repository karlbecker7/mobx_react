MobX builds on the concept of observable values. When React observes a value, it can automatically update the UI whenever the value changes. This makes programming with MobX and Reactjs extremely simple.

All it takes to begin is to install mobx and mobx-react and make sure that you are transforming class properties and decorators in Babel.

Now, you simply add @observable to your MobX class and you've successfully built a MobX observable store.

To "observe" the store, you pass in a MobX store as a prop and you decorate your React component with the @observer decorator.