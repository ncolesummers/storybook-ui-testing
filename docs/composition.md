# Composition

UIs are an interconnected network of parts. A bug in one component affects all others around it and every part of the app where it's used. Testing how UI components are composed helps you to prevent such bugs. 

Testing the more complex parts of the UI is tricky. They are created by combining many simpler components and are also wired up to the application state. 

In this section, we'll look at how to isolate and apply visual testing to composite components. We'll also cover mocking data and simulating application logic.

## Small bugs end up breaking apps

We build applications by plugging components into each other. A bug in one element can impact its neighbors. For example, renaming a prop can disrupt data flow from parent to child components. Incorrect CSS in a UI element can lead to a broken layout.

Consider the button component from Storybook's design system. It is used countless times across multiple pages. A bug in `Button` will inadvertently lead to bugs in all those pages. In other words, one failure can compound exponentially. Therefore, we need a way to catch such cascading issues early and figure out the root cause. 


