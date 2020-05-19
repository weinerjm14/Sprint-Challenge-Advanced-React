- [ ] Why would you use class component over function components (removing hooks from the question)?
      The only reason I can see is to keep state and other props contained within that componment or to use the lifecycle methods explicitly

* [ ] Name three lifecycle methods and their purposes.

  1. componentDidUpdate()-- to make DOM or other changes after the initial render (ie, when props, state, or other data changes)
  2. componentDidMount()-- to perform tasks (such as setting state) on the first render of a compoment
  3. componentWillUnmount() - removed componnent from DOM

- [ ] What is the purpose of a custom hook?

  reuse stateful logic

- [ ] Why is it important to test our apps?

  to trust the code
  write better code
  safety net when making changes or refactoring
